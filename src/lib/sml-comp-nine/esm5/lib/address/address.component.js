import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ViewChild, ElementRef, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
var AddressComponent = /** @class */ (function () {
    function AddressComponent(http, mapsAPILoader, ngZone) {
        this.http = http;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.object = {};
        this.itemObject = {
            address: "",
            address2: "",
            zipcode: "",
            city: "",
            state: ""
        };
        this.addressStr = '';
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.GenericToken = "bfb8831504564861a864275d85f848f8bfb8831504564861a864275d85f848f8";
        this.database = "MOBILFY";
        this.schema = "static";
        this.procedure = "ZIP_CODES_STATES";
        this.apiURL = 'http://mobilfy.aaadev.info/api/';
        this.body = {};
        this.dropdownList = [];
        this.isRebind = false;
        this.isGoogleOpen = false;
        this.addressObj = {
            street_number: '',
            route: '',
            locality: '',
            administrative_area_level_1: '',
            country: '',
            postal_code: '',
            address2: ''
        };
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getDrpData();
        this.mapsAPILoader.load().then(function () {
            _this.setCurrentLocation();
            _this.geoCoder = new google.maps.Geocoder;
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    for (var i = 0; i < place.address_components.length; i++) {
                        for (var j = 0; j < place.address_components[i].types.length; j++) {
                            if (place.address_components[i].types[j] == "street_number") {
                                _this.addressObj.street_number = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "route") {
                                _this.addressObj.route = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "locality") {
                                _this.addressObj.locality = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "administrative_area_level_1") {
                                _this.addressObj.administrative_area_level_1 = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "country") {
                                _this.addressObj.country = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "postal_code") {
                                _this.addressObj.postal_code = place.address_components[i].short_name;
                            }
                        }
                    }
                    _this.copylatitude = place.geometry.location.lat();
                    _this.copylongitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    AddressComponent.prototype.apply = function (event) {
        if (this.addressObj.street_number != "") {
            this.itemObject.address = this.addressObj.street_number + " " + this.addressObj.route;
        }
        else {
            this.itemObject.address = this.addressObj.route;
        }
        this.itemObject.zipcode = this.addressObj.postal_code;
        this.itemObject.city = this.addressObj.locality;
        this.itemObject.state = this.addressObj.administrative_area_level_1;
        this.latitude = JSON.parse(JSON.stringify(this.copylatitude));
        this.longitude = JSON.parse(JSON.stringify(this.copylongitude));
        this.getvalue.emit(this.itemObject);
        this.isGoogleOpen = false;
    };
    AddressComponent.prototype.setCurrentLocation = function () {
        var _this = this;
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
                _this.getAddress(_this.latitude, _this.longitude);
            });
        }
    };
    AddressComponent.prototype.getAddress = function (latitude, longitude) {
        var _this = this;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    _this.zoom = 12;
                    _this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    AddressComponent.prototype.getLatLan = function () {
        var _this = this;
        this.geoCoder.geocode({ 'address': this.addressStr }, function (results, status) {
            _this.ngZone.run(function () {
                _this.latitude = results[0].geometry.location.lat();
                _this.longitude = results[0].geometry.location.lng();
                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                        if (results[0].address_components[i].types[j] == "street_number") {
                            _this.addressObj.street_number = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "route") {
                            _this.addressObj.route = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "locality") {
                            _this.addressObj.locality = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "administrative_area_level_1") {
                            _this.addressObj.administrative_area_level_1 = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "country") {
                            _this.addressObj.country = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "postal_code") {
                            _this.addressObj.postal_code = results[0].address_components[i].short_name;
                        }
                    }
                }
            });
        });
    };
    AddressComponent.prototype.openGoogle = function () {
        this.isGoogleOpen = true;
    };
    AddressComponent.prototype.closeGoogle = function (event) {
        this.isGoogleOpen = false;
    };
    AddressComponent.prototype.getDrpData = function () {
        var _this = this;
        var url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(function (res) {
            if (res) {
                var temp = [];
                var data = void 0;
                data = res;
                for (var i = 0; i < data.length; i++) {
                    var nType = {
                        id: data[i].StateCode,
                        name: data[i].StateCode
                    };
                    temp.push(nType);
                }
                _this.dropdownList = temp;
                _this.isRebind = true;
                setTimeout(function () {
                    _this.isRebind = false;
                });
            }
        }, function (error) {
            _this.dropdownList = [];
        });
    };
    AddressComponent.ctorParameters = function () { return [
        { type: HttpClient },
        { type: MapsAPILoader },
        { type: NgZone }
    ]; };
    __decorate([
        ViewChild('search')
    ], AddressComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "object", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "itemObject", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "addressStr", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "labelStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "valueStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "selectValueStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "buttonStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "lableBoxStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "borderBoxStyle", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "mapBoxStyle", void 0);
    __decorate([
        Output()
    ], AddressComponent.prototype, "getvalue", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "GenericToken", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "database", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "schema", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "procedure", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "apiURL", void 0);
    __decorate([
        Input()
    ], AddressComponent.prototype, "body", void 0);
    AddressComponent = __decorate([
        Component({
            selector: 'sml-address',
            template: "\n  <div class=\"row\">\n\t<div class=\"col-md-6\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t\t<sml-input-text [label]=\"'Address'\" [name]=\"'address'\" [value]=\"itemObject.address\" (getvalue)=\"itemObject.address = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-4 pl-0 pr-0\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t\t<sml-input-text [label]=\"'Address (2nd line)'\" [name]=\"'address2'\" [value]=\"itemObject.address2\" (getvalue)=\"itemObject.address2 = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-2 pl-0 text-right\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n    <img src=\"assets/images/goole_map.png\" id=\"googleMapImages\" name=\"googlemapimages\" style=\"cursor: pointer;\" width=\"90%\" height=\"44\" (click)=\"openGoogle()\" />\n\t</div>\n\t<div class=\"col-md-8 pr-0\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<input type=\"text\" id=\"autocomplete\" class=\"form-control\" placeholder=\"Search address\" name=\"autocomplete\"\n\t\t #search>\n\t</div>\n\t<div class=\"col-md-2 text-right pr-0\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<sml-button [label]=\"'Apply'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"apply($event)\" [buttonStyle]=\"buttonStyle\">\n\t\t</sml-button>\n  </div>\n  <div class=\"col-md-2 text-right\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<sml-button [label]=\"'Close'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"closeGoogle($event)\" [buttonStyle]=\"buttonStyle\">\n\t\t</sml-button>\n\t</div>\n</div>\n<div class=\"row mt-2\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t<div class=\"col-md-3\">\n\t\t<sml-input-text [label]=\"'Zip Code'\" [name]=\"'zipcode'\" [value]=\"itemObject.zipcode\" (getvalue)=\"itemObject.zipcode = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-5 pl-0\">\n\t\t<sml-input-text [label]=\"'City'\" [name]=\"'city'\" [value]=\"itemObject.city\" (getvalue)=\"itemObject.city = $event;\" [maskType]=\"''\"\n\t\t [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-4 pl-0\">\n  <sml-input-select [label]=\"'State'\" [listValue]=\"dropdownList\" [value]=\"itemObject.state\" (selectvalue)=\"itemObject.state = $event\"\n  [style]=\"labelStyle\" [staticStyle]=\"'true'\" [borderStyle]=\"borderStyle\" [valueStyle]=\"selectValueStyle\" [switchStyle]=\"switchStyle\">\n  </sml-input-select>\n\t</div>\n</div>\n<div *ngIf=\"object?.isShowAddressBox\" class=\"addressField mt-2\" [ngStyle]=\"borderBoxStyle\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.address}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.address2}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.city}}</label>\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.state}}</label>\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.zipcode}}</label>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"object?.isShowMapBox\" class=\"mapField\" [ngStyle]=\"mapBoxStyle\">\n\t<agm-map [style.height]=\"mapBoxStyle?.height\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t</agm-map>\n</div>\n  ",
            styles: ["\n  .addressField{width:100%;min-height:85px;height:auto;border:1px solid lightgray;padding-top:5px;}\n  .mapField{width:100%;min-height:370px;border:1px solid lightgray;margin-top:14px;overflow:hidden;}\n  .pad-l-12{padding-left:12px !important;}\n  .pad-l-0{padding-left:0px !important;}\n   agm-map{height:370px;}\n  .hide-div{display:none;}\n   #autocomplete{height: 45px !important;border-radius: 4px;}\n   .col-md-2{padding-left: 3px !important;}\n   .col-md-6 {padding-right: 7px !important;}\n   .col-md-3 {padding-right: 7px !important;}\n   .col-md-5 {padding-right: 7px !important;}\n   #autocomplete:focus{outline: none;box-shadow: none;border-color: lightgray; }\n  "]
        })
    ], AddressComponent);
    return AddressComponent;
}());
export { AddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBNEYxQztJQXFERSwwQkFBb0IsSUFBZ0IsRUFBVSxhQUE0QixFQUFVLE1BQWM7UUFBOUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxEekYsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQVE7WUFDekIsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDTyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBUzdCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUN0QyxtQkFBYyxHQUFHO1lBQ2YsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSCxDQUFDO1FBQ08saUJBQVksR0FBUSxrRUFBa0UsQ0FBQztRQUN2RixhQUFRLEdBQVEsU0FBUyxDQUFDO1FBQzFCLFdBQU0sR0FBUSxRQUFR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RUFBRTt5REFBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7d0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt3REFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7OERBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTsyREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7NERBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNoQjtRQUFULE1BQU0sRUFBRTtzREFBNkI7SUFNN0I7UUFBUixLQUFLLEVBQUU7MERBQXdGO0lBQ3ZGO1FBQVIsS0FBSyxFQUFFO3NEQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtvREFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7dURBQXFDO0lBQ3BDO1FBQVIsS0FBSyxFQUFFO29EQUFpRDtJQUNoRDtRQUFSLEtBQUssRUFBRTtrREFBZ0I7SUFqQ2IsZ0JBQWdCO1FBdkY1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsNitIQXFFVDtxQkFDUSx5cUJBYVI7U0FDRixDQUFDO09BQ1csZ0JBQWdCLENBc001QjtJQUFELHVCQUFDO0NBQUEsQUF0TUQsSUFzTUM7U0F0TVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgTmdab25lLEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnRUeXBlLCBIdHRwUmVzcG9uc2UsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNYXBzQVBJTG9hZGVyIH0gZnJvbSAnQGFnbS9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gXCJnb29nbGUtbWFwc1wiO1xyXG5kZWNsYXJlIHZhciBnb29nbGU6IGdvb2dsZTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWFkZHJlc3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiBpc0dvb2dsZU9wZW59XCI+XHJcblx0XHQ8c21sLWlucHV0LXRleHQgW2xhYmVsXT1cIidBZGRyZXNzJ1wiIFtuYW1lXT1cIidhZGRyZXNzJ1wiIFt2YWx1ZV09XCJpdGVtT2JqZWN0LmFkZHJlc3NcIiAoZ2V0dmFsdWUpPVwiaXRlbU9iamVjdC5hZGRyZXNzID0gJGV2ZW50O1wiXHJcblx0XHQgW21hc2tUeXBlXT1cIicnXCIgW3N3aXRjaFN0eWxlXT1cInN3aXRjaFN0eWxlXCIgW3N0YXRpY1N0eWxlXT1cIid0cnVlJ1wiIFtzdHlsZV09XCJsYWJlbFN0eWxlXCIgW2JvcmRlclN0eWxlXT1cImJvcmRlclN0eWxlXCIgW3ZhbHVlU3R5bGVdPVwidmFsdWVTdHlsZVwiPlxyXG5cdFx0PC9zbWwtaW5wdXQtdGV4dD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTQgcGwtMCBwci0wXCIgW25nQ2xhc3NdPVwieydoaWRlLWRpdic6IGlzR29vZ2xlT3Blbn1cIj5cclxuXHRcdDxzbWwtaW5wdXQtdGV4dCBbbGFiZWxdPVwiJ0FkZHJlc3MgKDJuZCBsaW5lKSdcIiBbbmFtZV09XCInYWRkcmVzczInXCIgW3ZhbHVlXT1cIml0ZW1PYmplY3QuYWRkcmVzczJcIiAoZ2V0dmFsdWUpPVwiaXRlbU9iamVjdC5hZGRyZXNzMiA9ICRldmVudDtcIlxyXG5cdFx0IFttYXNrVHlwZV09XCInJ1wiIFtzd2l0Y2hTdHlsZV09XCJzd2l0Y2hTdHlsZVwiIFtzdGF0aWNTdHlsZV09XCIndHJ1ZSdcIiBbc3R5bGVdPVwibGFiZWxTdHlsZVwiIFtib3JkZXJTdHlsZV09XCJib3JkZXJTdHlsZVwiIFt2YWx1ZVN0eWxlXT1cInZhbHVlU3R5bGVcIj5cclxuXHRcdDwvc21sLWlucHV0LXRleHQ+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1tZC0yIHBsLTAgdGV4dC1yaWdodFwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiBpc0dvb2dsZU9wZW59XCI+XHJcbiAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvZ29vbGVfbWFwLnBuZ1wiIGlkPVwiZ29vZ2xlTWFwSW1hZ2VzXCIgbmFtZT1cImdvb2dsZW1hcGltYWdlc1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiIHdpZHRoPVwiOTAlXCIgaGVpZ2h0PVwiNDRcIiAoY2xpY2spPVwib3Blbkdvb2dsZSgpXCIgLz5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTggcHItMFwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiAhaXNHb29nbGVPcGVufVwiPlxyXG5cdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhdXRvY29tcGxldGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGFkZHJlc3NcIiBuYW1lPVwiYXV0b2NvbXBsZXRlXCJcclxuXHRcdCAjc2VhcmNoPlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtMiB0ZXh0LXJpZ2h0IHByLTBcIiBbbmdDbGFzc109XCJ7J2hpZGUtZGl2JzogIWlzR29vZ2xlT3Blbn1cIj5cclxuXHRcdDxzbWwtYnV0dG9uIFtsYWJlbF09XCInQXBwbHknXCIgW2J0bkNsXT1cIididG4tcHJpbWFyeSdcIiAoYnV0dG9uQ2xpY2spPVwiYXBwbHkoJGV2ZW50KVwiIFtidXR0b25TdHlsZV09XCJidXR0b25TdHlsZVwiPlxyXG5cdFx0PC9zbWwtYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtMiB0ZXh0LXJpZ2h0XCIgW25nQ2xhc3NdPVwieydoaWRlLWRpdic6ICFpc0dvb2dsZU9wZW59XCI+XHJcblx0XHQ8c21sLWJ1dHRvbiBbbGFiZWxdPVwiJ0Nsb3NlJ1wiIFtidG5DbF09XCInYnRuLXByaW1hcnknXCIgKGJ1dHRvbkNsaWNrKT1cImNsb3NlR29vZ2xlKCRldmVudClcIiBbYnV0dG9uU3R5bGVdPVwiYnV0dG9uU3R5bGVcIj5cclxuXHRcdDwvc21sLWJ1dHRvbj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3cgbXQtMlwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiBpc0dvb2dsZU9wZW59XCI+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcblx0XHQ8c21sLWlucHV0LXRleHQgW2xhYmVsXT1cIidaaXAgQ29kZSdcIiBbbmFtZV09XCInemlwY29kZSdcIiBbdmFsdWVdPVwiaXRlbU9iamVjdC56aXBjb2RlXCIgKGdldHZhbHVlKT1cIml0ZW1PYmplY3QuemlwY29kZSA9ICRldmVudDtcIlxyXG5cdFx0IFttYXNrVHlwZV09XCInJ1wiIFtzd2l0Y2hTdHlsZV09XCJzd2l0Y2hTdHlsZVwiIFtzdGF0aWNTdHlsZV09XCIndHJ1ZSdcIiBbc3R5bGVdPVwibGFiZWxTdHlsZVwiIFtib3JkZXJTdHlsZV09XCJib3JkZXJTdHlsZVwiIFt2YWx1ZVN0eWxlXT1cInZhbHVlU3R5bGVcIj5cclxuXHRcdDwvc21sLWlucHV0LXRleHQ+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1tZC01IHBsLTBcIj5cclxuXHRcdDxzbWwtaW5wdXQtdGV4dCBbbGFiZWxdPVwiJ0NpdHknXCIgW25hbWVdPVwiJ2NpdHknXCIgW3ZhbHVlXT1cIml0ZW1PYmplY3QuY2l0eVwiIChnZXR2YWx1ZSk9XCJpdGVtT2JqZWN0LmNpdHkgPSAkZXZlbnQ7XCIgW21hc2tUeXBlXT1cIicnXCJcclxuXHRcdCBbc3dpdGNoU3R5bGVdPVwic3dpdGNoU3R5bGVcIiBbc3RhdGljU3R5bGVdPVwiJ3RydWUnXCIgW3N0eWxlXT1cImxhYmVsU3R5bGVcIiBbYm9yZGVyU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbdmFsdWVTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcblx0XHQ8L3NtbC1pbnB1dC10ZXh0PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtNCBwbC0wXCI+XHJcbiAgPHNtbC1pbnB1dC1zZWxlY3QgW2xhYmVsXT1cIidTdGF0ZSdcIiBbbGlzdFZhbHVlXT1cImRyb3Bkb3duTGlzdFwiIFt2YWx1ZV09XCJpdGVtT2JqZWN0LnN0YXRlXCIgKHNlbGVjdHZhbHVlKT1cIml0ZW1PYmplY3Quc3RhdGUgPSAkZXZlbnRcIlxyXG4gIFtzdHlsZV09XCJsYWJlbFN0eWxlXCIgW3N0YXRpY1N0eWxlXT1cIid0cnVlJ1wiIFtib3JkZXJTdHlsZV09XCJib3JkZXJTdHlsZVwiIFt2YWx1ZVN0eWxlXT1cInNlbGVjdFZhbHVlU3R5bGVcIiBbc3dpdGNoU3R5bGVdPVwic3dpdGNoU3R5bGVcIj5cclxuICA8L3NtbC1pbnB1dC1zZWxlY3Q+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwib2JqZWN0Py5pc1Nob3dBZGRyZXNzQm94XCIgY2xhc3M9XCJhZGRyZXNzRmllbGQgbXQtMlwiIFtuZ1N0eWxlXT1cImJvcmRlckJveFN0eWxlXCI+XHJcblx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwbC00XCI+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cIm1iLTBcIiBbbmdTdHlsZV09XCJsYWJsZUJveFN0eWxlXCI+e3tpdGVtT2JqZWN0LmFkZHJlc3N9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHBsLTRcIj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwibWItMFwiIFtuZ1N0eWxlXT1cImxhYmxlQm94U3R5bGVcIj57e2l0ZW1PYmplY3QuYWRkcmVzczJ9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHBsLTRcIj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwicHItMSBtYi0wXCIgW25nU3R5bGVdPVwibGFibGVCb3hTdHlsZVwiPnt7aXRlbU9iamVjdC5jaXR5fX08L2xhYmVsPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJwci0xIG1iLTBcIiBbbmdTdHlsZV09XCJsYWJsZUJveFN0eWxlXCI+e3tpdGVtT2JqZWN0LnN0YXRlfX08L2xhYmVsPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJwci0xIG1iLTBcIiBbbmdTdHlsZV09XCJsYWJsZUJveFN0eWxlXCI+e3tpdGVtT2JqZWN0LnppcGNvZGV9fTwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCJvYmplY3Q/LmlzU2hvd01hcEJveFwiIGNsYXNzPVwibWFwRmllbGRcIiBbbmdTdHlsZV09XCJtYXBCb3hTdHlsZVwiPlxyXG5cdDxhZ20tbWFwIFtzdHlsZS5oZWlnaHRdPVwibWFwQm94U3R5bGU/LmhlaWdodFwiIFtsYXRpdHVkZV09XCJsYXRpdHVkZVwiIFtsb25naXR1ZGVdPVwibG9uZ2l0dWRlXCI+XHJcblx0XHQ8YWdtLW1hcmtlciBbbGF0aXR1ZGVdPVwibGF0aXR1ZGVcIiBbbG9uZ2l0dWRlXT1cImxvbmdpdHVkZVwiPjwvYWdtLW1hcmtlcj5cclxuXHQ8L2FnbS1tYXA+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5hZGRyZXNzRmllbGR7d2lkdGg6MTAwJTttaW4taGVpZ2h0Ojg1cHg7aGVpZ2h0OmF1dG87Ym9yZGVyOjFweCBzb2xpZCBsaWdodGdyYXk7cGFkZGluZy10b3A6NXB4O31cclxuICAubWFwRmllbGR7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjM3MHB4O2JvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O21hcmdpbi10b3A6MTRweDtvdmVyZmxvdzpoaWRkZW47fVxyXG4gIC5wYWQtbC0xMntwYWRkaW5nLWxlZnQ6MTJweCAhaW1wb3J0YW50O31cclxuICAucGFkLWwtMHtwYWRkaW5nLWxlZnQ6MHB4ICFpbXBvcnRhbnQ7fVxyXG4gICBhZ20tbWFwe2hlaWdodDozNzBweDt9XHJcbiAgLmhpZGUtZGl2e2Rpc3BsYXk6bm9uZTt9XHJcbiAgICNhdXRvY29tcGxldGV7aGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogNHB4O31cclxuICAgLmNvbC1tZC0ye3BhZGRpbmctbGVmdDogM3B4ICFpbXBvcnRhbnQ7fVxyXG4gICAuY29sLW1kLTYge3BhZGRpbmctcmlnaHQ6IDdweCAhaW1wb3J0YW50O31cclxuICAgLmNvbC1tZC0zIHtwYWRkaW5nLXJpZ2h0OiA3cHggIWltcG9ydGFudDt9XHJcbiAgIC5jb2wtbWQtNSB7cGFkZGluZy1yaWdodDogN3B4ICFpbXBvcnRhbnQ7fVxyXG4gICAjYXV0b2NvbXBsZXRlOmZvY3Vze291dGxpbmU6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtib3JkZXItY29sb3I6IGxpZ2h0Z3JheTsgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuIFxyXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaEVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgb2JqZWN0OiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBpdGVtT2JqZWN0OiBhbnkgPSB7XHJcbiAgICBhZGRyZXNzOiBcIlwiLFxyXG4gICAgYWRkcmVzczI6IFwiXCIsXHJcbiAgICB6aXBjb2RlOiBcIlwiLFxyXG4gICAgY2l0eTogXCJcIixcclxuICAgIHN0YXRlOiBcIlwiXHJcbiAgfTtcclxuICBASW5wdXQoKSBhZGRyZXNzU3RyOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9ICBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgc2VsZWN0VmFsdWVTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJ1dHRvblN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgbGFibGVCb3hTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlckJveFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgbWFwQm94U3R5bGU6IGFueTtcclxuICBAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCJiZmI4ODMxNTA0NTY0ODYxYTg2NDI3NWQ4NWY4NDhmOGJmYjg4MzE1MDQ1NjQ4NjFhODY0Mjc1ZDg1Zjg0OGY4XCI7XHJcbiAgQElucHV0KCkgZGF0YWJhc2U6IGFueSA9IFwiTU9CSUxGWVwiO1xyXG4gIEBJbnB1dCgpIHNjaGVtYTogYW55ID0gXCJzdGF0aWNcIjtcclxuICBASW5wdXQoKSBwcm9jZWR1cmU6IGFueSA9IFwiWklQX0NPREVTX1NUQVRFU1wiO1xyXG4gIEBJbnB1dCgpIGFwaVVSTDogYW55ID0gJ2h0dHA6Ly9tb2JpbGZ5LmFhYWRldi5pbmZvL2FwaS8nO1xyXG4gIEBJbnB1dCgpIGJvZHk6IGFueSA9IHt9O1xyXG4gIGRyb3Bkb3duTGlzdDogYW55ID0gW107XHJcbiAgaXNSZWJpbmQ6YW55ID0gZmFsc2U7XHJcbiAgZ2VvQ29kZXI7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICBsb25naXR1ZGU6IG51bWJlcjtcclxuICBjb3B5bGF0aXR1ZGU6IG51bWJlcjtcclxuICBjb3B5bG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgaXNHb29nbGVPcGVuOiBhbnkgPSBmYWxzZTtcclxuICB6b29tOiBudW1iZXI7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NPYmo6IGFueSA9IHtcclxuICAgIHN0cmVldF9udW1iZXI6ICcnLFxyXG4gICAgcm91dGU6ICcnLFxyXG4gICAgbG9jYWxpdHk6ICcnLFxyXG4gICAgYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xOiAnJyxcclxuICAgIGNvdW50cnk6ICcnLFxyXG4gICAgcG9zdGFsX2NvZGU6ICcnLFxyXG4gICAgYWRkcmVzczI6ICcnXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXBzQVBJTG9hZGVyOiBNYXBzQVBJTG9hZGVyLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmdldERycERhdGEoKTtcclxuICAgIHRoaXMubWFwc0FQSUxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0Q3VycmVudExvY2F0aW9uKCk7XHJcbiAgICAgIHRoaXMuZ2VvQ29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXI7XHJcbiAgICAgIGxldCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZSh0aGlzLnNlYXJjaEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICAgIHR5cGVzOiBbXCJhZGRyZXNzXCJdXHJcbiAgICAgIH0pO1xyXG4gICAgICBhdXRvY29tcGxldGUuYWRkTGlzdGVuZXIoXCJwbGFjZV9jaGFuZ2VkXCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHBsYWNlOiBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VSZXN1bHQgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgICAgICAgIGlmIChwbGFjZS5nZW9tZXRyeSA9PT0gdW5kZWZpbmVkIHx8IHBsYWNlLmdlb21ldHJ5ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2UuYWRkcmVzc19jb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInN0cmVldF9udW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLnN0cmVldF9udW1iZXIgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInJvdXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5yb3V0ZSA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJsb2NhbGl0eVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmoubG9jYWxpdHkgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5hZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzEgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcImNvdW50cnlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLmNvdW50cnkgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwicG9zdGFsX2NvZGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLnBvc3RhbF9jb2RlID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNvcHlsYXRpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgICAgdGhpcy5jb3B5bG9uZ2l0dWRlID0gcGxhY2UuZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgICB0aGlzLnpvb20gPSAxMjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYXBwbHkoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFkZHJlc3NPYmouc3RyZWV0X251bWJlciAhPSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuaXRlbU9iamVjdC5hZGRyZXNzID0gdGhpcy5hZGRyZXNzT2JqLnN0cmVldF9udW1iZXIgKyBcIiBcIiArIHRoaXMuYWRkcmVzc09iai5yb3V0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbU9iamVjdC5hZGRyZXNzID0gdGhpcy5hZGRyZXNzT2JqLnJvdXRlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pdGVtT2JqZWN0LnppcGNvZGUgPSB0aGlzLmFkZHJlc3NPYmoucG9zdGFsX2NvZGU7XHJcbiAgICB0aGlzLml0ZW1PYmplY3QuY2l0eSA9IHRoaXMuYWRkcmVzc09iai5sb2NhbGl0eTtcclxuICAgIHRoaXMuaXRlbU9iamVjdC5zdGF0ZSA9IHRoaXMuYWRkcmVzc09iai5hZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzE7XHJcbiAgICB0aGlzLmxhdGl0dWRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvcHlsYXRpdHVkZSkpO1xyXG4gICAgdGhpcy5sb25naXR1ZGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29weWxvbmdpdHVkZSkpO1xyXG4gICAgdGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMuaXRlbU9iamVjdCk7XHJcbiAgICB0aGlzLmlzR29vZ2xlT3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuICBzZXRDdXJyZW50TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoJ2dlb2xvY2F0aW9uJyBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgICB0aGlzLmxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgICB0aGlzLnpvb20gPSAxMjtcclxuICAgICAgICB0aGlzLmdldEFkZHJlc3ModGhpcy5sYXRpdHVkZSwgdGhpcy5sb25naXR1ZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0QWRkcmVzcyhsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XHJcbiAgICB0aGlzLmdlb0NvZGVyLmdlb2NvZGUoeyAnbG9jYXRpb24nOiB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH0gfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdHNbMF0pIHtcclxuICAgICAgICAgIHRoaXMuem9vbSA9IDEyO1xyXG4gICAgICAgICAgdGhpcy5hZGRyZXNzID0gcmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd2luZG93LmFsZXJ0KCdObyByZXN1bHRzIGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdpbmRvdy5hbGVydCgnR2VvY29kZXIgZmFpbGVkIGR1ZSB0bzogJyArIHN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBnZXRMYXRMYW4oKSB7XHJcbiAgICB0aGlzLmdlb0NvZGVyLmdlb2NvZGUoeyAnYWRkcmVzcyc6IHRoaXMuYWRkcmVzc1N0ciB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwic3RyZWV0X251bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLnN0cmVldF9udW1iZXIgPSByZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInJvdXRlXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmoucm91dGUgPSByZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwibG9jYWxpdHlcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5sb2NhbGl0eSA9IHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzFcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5hZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzEgPSByZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcImNvdW50cnlcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5jb3VudHJ5ID0gcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInBvc3RhbF9jb2RlXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmoucG9zdGFsX2NvZGUgPSByZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBvcGVuR29vZ2xlKCkge1xyXG4gICAgdGhpcy5pc0dvb2dsZU9wZW4gPSB0cnVlO1xyXG4gIH1cclxuICBjbG9zZUdvb2dsZShldmVudCkge1xyXG4gICAgdGhpcy5pc0dvb2dsZU9wZW4gPSBmYWxzZTtcclxuICB9XHJcbiAgZ2V0RHJwRGF0YSgpIHtcclxuICAgIGNvbnN0IHVybCA9IHRoaXMuYXBpVVJMICsgXCJEYXRhL0V4ZWMvXCIgKyB0aGlzLmRhdGFiYXNlICsgXCIvXCIgKyB0aGlzLnNjaGVtYSArIFwiL1wiICsgdGhpcy5wcm9jZWR1cmUgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcbiAgICB0aGlzLmh0dHAucG9zdCh1cmwsIHRoaXMuYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICAgICAgZGF0YSA9IHJlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBuVHlwZSA9IHtcclxuICAgICAgICAgICAgaWQ6IGRhdGFbaV0uU3RhdGVDb2RlLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhW2ldLlN0YXRlQ29kZVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRlbXAucHVzaChuVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25MaXN0ID0gdGVtcDtcclxuICAgICAgICB0aGlzLmlzUmViaW5kID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICB0aGlzLmlzUmViaW5kID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICB0aGlzLmRyb3Bkb3duTGlzdCA9IFtdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==