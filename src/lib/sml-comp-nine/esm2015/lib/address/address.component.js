import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ViewChild, ElementRef, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { MapsAPILoader } from '@agm/core';
let AddressComponent = class AddressComponent {
    constructor(http, mapsAPILoader, ngZone) {
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
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.getDrpData();
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    for (var i = 0; i < place.address_components.length; i++) {
                        for (var j = 0; j < place.address_components[i].types.length; j++) {
                            if (place.address_components[i].types[j] == "street_number") {
                                this.addressObj.street_number = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "route") {
                                this.addressObj.route = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "locality") {
                                this.addressObj.locality = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "administrative_area_level_1") {
                                this.addressObj.administrative_area_level_1 = place.address_components[i].short_name;
                            }
                            if (place.address_components[i].types[j] == "country") {
                                this.addressObj.country = place.address_components[i].long_name;
                            }
                            if (place.address_components[i].types[j] == "postal_code") {
                                this.addressObj.postal_code = place.address_components[i].short_name;
                            }
                        }
                    }
                    this.copylatitude = place.geometry.location.lat();
                    this.copylongitude = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }
    apply(event) {
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
    }
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }
    getAddress(latitude, longitude) {
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 12;
                    this.address = results[0].formatted_address;
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }
    getLatLan() {
        this.geoCoder.geocode({ 'address': this.addressStr }, (results, status) => {
            this.ngZone.run(() => {
                this.latitude = results[0].geometry.location.lat();
                this.longitude = results[0].geometry.location.lng();
                for (var i = 0; i < results[0].address_components.length; i++) {
                    for (var j = 0; j < results[0].address_components[i].types.length; j++) {
                        if (results[0].address_components[i].types[j] == "street_number") {
                            this.addressObj.street_number = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "route") {
                            this.addressObj.route = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "locality") {
                            this.addressObj.locality = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "administrative_area_level_1") {
                            this.addressObj.administrative_area_level_1 = results[0].address_components[i].short_name;
                        }
                        if (results[0].address_components[i].types[j] == "country") {
                            this.addressObj.country = results[0].address_components[i].long_name;
                        }
                        if (results[0].address_components[i].types[j] == "postal_code") {
                            this.addressObj.postal_code = results[0].address_components[i].short_name;
                        }
                    }
                }
            });
        });
    }
    openGoogle() {
        this.isGoogleOpen = true;
    }
    closeGoogle(event) {
        this.isGoogleOpen = false;
    }
    getDrpData() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                let temp = [];
                let data;
                data = res;
                for (let i = 0; i < data.length; i++) {
                    var nType = {
                        id: data[i].StateCode,
                        name: data[i].StateCode
                    };
                    temp.push(nType);
                }
                this.dropdownList = temp;
                this.isRebind = true;
                setTimeout(() => {
                    this.isRebind = false;
                });
            }
        }, error => {
            this.dropdownList = [];
        });
    }
};
AddressComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: MapsAPILoader },
    { type: NgZone }
];
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
        template: `
  <div class="row">
	<div class="col-md-6" [ngClass]="{'hide-div': isGoogleOpen}">
		<sml-input-text [label]="'Address'" [name]="'address'" [value]="itemObject.address" (getvalue)="itemObject.address = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-4 pl-0 pr-0" [ngClass]="{'hide-div': isGoogleOpen}">
		<sml-input-text [label]="'Address (2nd line)'" [name]="'address2'" [value]="itemObject.address2" (getvalue)="itemObject.address2 = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-2 pl-0 text-right" [ngClass]="{'hide-div': isGoogleOpen}">
    <img src="assets/images/goole_map.png" id="googleMapImages" name="googlemapimages" style="cursor: pointer;" width="90%" height="44" (click)="openGoogle()" />
	</div>
	<div class="col-md-8 pr-0" [ngClass]="{'hide-div': !isGoogleOpen}">
		<input type="text" id="autocomplete" class="form-control" placeholder="Search address" name="autocomplete"
		 #search>
	</div>
	<div class="col-md-2 text-right pr-0" [ngClass]="{'hide-div': !isGoogleOpen}">
		<sml-button [label]="'Apply'" [btnCl]="'btn-primary'" (buttonClick)="apply($event)" [buttonStyle]="buttonStyle">
		</sml-button>
  </div>
  <div class="col-md-2 text-right" [ngClass]="{'hide-div': !isGoogleOpen}">
		<sml-button [label]="'Close'" [btnCl]="'btn-primary'" (buttonClick)="closeGoogle($event)" [buttonStyle]="buttonStyle">
		</sml-button>
	</div>
</div>
<div class="row mt-2" [ngClass]="{'hide-div': isGoogleOpen}">
	<div class="col-md-3">
		<sml-input-text [label]="'Zip Code'" [name]="'zipcode'" [value]="itemObject.zipcode" (getvalue)="itemObject.zipcode = $event;"
		 [maskType]="''" [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-5 pl-0">
		<sml-input-text [label]="'City'" [name]="'city'" [value]="itemObject.city" (getvalue)="itemObject.city = $event;" [maskType]="''"
		 [switchStyle]="switchStyle" [staticStyle]="'true'" [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
		</sml-input-text>
	</div>
	<div class="col-md-4 pl-0">
  <sml-input-select [label]="'State'" [listValue]="dropdownList" [value]="itemObject.state" (selectvalue)="itemObject.state = $event"
  [style]="labelStyle" [staticStyle]="'true'" [borderStyle]="borderStyle" [valueStyle]="selectValueStyle" [switchStyle]="switchStyle">
  </sml-input-select>
	</div>
</div>
<div *ngIf="object?.isShowAddressBox" class="addressField mt-2" [ngStyle]="borderBoxStyle">
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="mb-0" [ngStyle]="lableBoxStyle">{{itemObject.address}}</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="mb-0" [ngStyle]="lableBoxStyle">{{itemObject.address2}}</label>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 pl-4">
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.city}}</label>
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.state}}</label>
			<label class="pr-1 mb-0" [ngStyle]="lableBoxStyle">{{itemObject.zipcode}}</label>
		</div>
	</div>
</div>
<div *ngIf="object?.isShowMapBox" class="mapField" [ngStyle]="mapBoxStyle">
	<agm-map [style.height]="mapBoxStyle?.height" [latitude]="latitude" [longitude]="longitude">
		<agm-marker [latitude]="latitude" [longitude]="longitude"></agm-marker>
	</agm-map>
</div>
  `,
        styles: [`
  .addressField{width:100%;min-height:85px;height:auto;border:1px solid lightgray;padding-top:5px;}
  .mapField{width:100%;min-height:370px;border:1px solid lightgray;margin-top:14px;overflow:hidden;}
  .pad-l-12{padding-left:12px !important;}
  .pad-l-0{padding-left:0px !important;}
   agm-map{height:370px;}
  .hide-div{display:none;}
   #autocomplete{height: 45px !important;border-radius: 4px;}
   .col-md-2{padding-left: 3px !important;}
   .col-md-6 {padding-right: 7px !important;}
   .col-md-3 {padding-right: 7px !important;}
   .col-md-5 {padding-right: 7px !important;}
   #autocomplete:focus{outline: none;box-shadow: none;border-color: lightgray; }
  `]
    })
], AddressComponent);
export { AddressComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBNEYxQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQXFEM0IsWUFBb0IsSUFBZ0IsRUFBVSxhQUE0QixFQUFVLE1BQWM7UUFBOUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWxEekYsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQVE7WUFDekIsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsRUFBRTtZQUNaLE9BQU8sRUFBRSxFQUFFO1lBQ1gsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7UUFDTyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBRXJCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO1FBUzdCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUN0QyxtQkFBYyxHQUFHO1lBQ2YsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSCxDQUFDO1FBQ08saUJBQVksR0FBUSxrRUFBa0UsQ0FBQztRQUN2RixhQUFRLEdBQVEs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SUFBUixLQUFLLEVBQUU7cURBQStCO0FBQzlCO0lBQVIsS0FBSyxFQUFFO29EQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtxREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7b0RBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzBEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtxREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7dURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3dEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtxREFBa0I7QUFDaEI7SUFBVCxNQUFNLEVBQUU7a0RBQTZCO0FBTTdCO0lBQVIsS0FBSyxFQUFFO3NEQUF3RjtBQUN2RjtJQUFSLEtBQUssRUFBRTtrREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7Z0RBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO21EQUFxQztBQUNwQztJQUFSLEtBQUssRUFBRTtnREFBaUQ7QUFDaEQ7SUFBUixLQUFLLEVBQUU7OENBQWdCO0FBakNiLGdCQUFnQjtJQXZGNUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRVQ7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7R0FhUjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FzTTVCO1NBdE1ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIE5nWm9uZSxFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWFwc0FQSUxvYWRlciB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBnb29nbGUgfSBmcm9tIFwiZ29vZ2xlLW1hcHNcIjtcclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBnb29nbGU7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1hZGRyZXNzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIiBbbmdDbGFzc109XCJ7J2hpZGUtZGl2JzogaXNHb29nbGVPcGVufVwiPlxyXG5cdFx0PHNtbC1pbnB1dC10ZXh0IFtsYWJlbF09XCInQWRkcmVzcydcIiBbbmFtZV09XCInYWRkcmVzcydcIiBbdmFsdWVdPVwiaXRlbU9iamVjdC5hZGRyZXNzXCIgKGdldHZhbHVlKT1cIml0ZW1PYmplY3QuYWRkcmVzcyA9ICRldmVudDtcIlxyXG5cdFx0IFttYXNrVHlwZV09XCInJ1wiIFtzd2l0Y2hTdHlsZV09XCJzd2l0Y2hTdHlsZVwiIFtzdGF0aWNTdHlsZV09XCIndHJ1ZSdcIiBbc3R5bGVdPVwibGFiZWxTdHlsZVwiIFtib3JkZXJTdHlsZV09XCJib3JkZXJTdHlsZVwiIFt2YWx1ZVN0eWxlXT1cInZhbHVlU3R5bGVcIj5cclxuXHRcdDwvc21sLWlucHV0LXRleHQ+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1tZC00IHBsLTAgcHItMFwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiBpc0dvb2dsZU9wZW59XCI+XHJcblx0XHQ8c21sLWlucHV0LXRleHQgW2xhYmVsXT1cIidBZGRyZXNzICgybmQgbGluZSknXCIgW25hbWVdPVwiJ2FkZHJlc3MyJ1wiIFt2YWx1ZV09XCJpdGVtT2JqZWN0LmFkZHJlc3MyXCIgKGdldHZhbHVlKT1cIml0ZW1PYmplY3QuYWRkcmVzczIgPSAkZXZlbnQ7XCJcclxuXHRcdCBbbWFza1R5cGVdPVwiJydcIiBbc3dpdGNoU3R5bGVdPVwic3dpdGNoU3R5bGVcIiBbc3RhdGljU3R5bGVdPVwiJ3RydWUnXCIgW3N0eWxlXT1cImxhYmVsU3R5bGVcIiBbYm9yZGVyU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbdmFsdWVTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcblx0XHQ8L3NtbC1pbnB1dC10ZXh0PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtMiBwbC0wIHRleHQtcmlnaHRcIiBbbmdDbGFzc109XCJ7J2hpZGUtZGl2JzogaXNHb29nbGVPcGVufVwiPlxyXG4gICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL2dvb2xlX21hcC5wbmdcIiBpZD1cImdvb2dsZU1hcEltYWdlc1wiIG5hbWU9XCJnb29nbGVtYXBpbWFnZXNcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIiB3aWR0aD1cIjkwJVwiIGhlaWdodD1cIjQ0XCIgKGNsaWNrKT1cIm9wZW5Hb29nbGUoKVwiIC8+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1tZC04IHByLTBcIiBbbmdDbGFzc109XCJ7J2hpZGUtZGl2JzogIWlzR29vZ2xlT3Blbn1cIj5cclxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYXV0b2NvbXBsZXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBhZGRyZXNzXCIgbmFtZT1cImF1dG9jb21wbGV0ZVwiXHJcblx0XHQgI3NlYXJjaD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTIgdGV4dC1yaWdodCBwci0wXCIgW25nQ2xhc3NdPVwieydoaWRlLWRpdic6ICFpc0dvb2dsZU9wZW59XCI+XHJcblx0XHQ8c21sLWJ1dHRvbiBbbGFiZWxdPVwiJ0FwcGx5J1wiIFtidG5DbF09XCInYnRuLXByaW1hcnknXCIgKGJ1dHRvbkNsaWNrKT1cImFwcGx5KCRldmVudClcIiBbYnV0dG9uU3R5bGVdPVwiYnV0dG9uU3R5bGVcIj5cclxuXHRcdDwvc21sLWJ1dHRvbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTIgdGV4dC1yaWdodFwiIFtuZ0NsYXNzXT1cInsnaGlkZS1kaXYnOiAhaXNHb29nbGVPcGVufVwiPlxyXG5cdFx0PHNtbC1idXR0b24gW2xhYmVsXT1cIidDbG9zZSdcIiBbYnRuQ2xdPVwiJ2J0bi1wcmltYXJ5J1wiIChidXR0b25DbGljayk9XCJjbG9zZUdvb2dsZSgkZXZlbnQpXCIgW2J1dHRvblN0eWxlXT1cImJ1dHRvblN0eWxlXCI+XHJcblx0XHQ8L3NtbC1idXR0b24+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93IG10LTJcIiBbbmdDbGFzc109XCJ7J2hpZGUtZGl2JzogaXNHb29nbGVPcGVufVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG5cdFx0PHNtbC1pbnB1dC10ZXh0IFtsYWJlbF09XCInWmlwIENvZGUnXCIgW25hbWVdPVwiJ3ppcGNvZGUnXCIgW3ZhbHVlXT1cIml0ZW1PYmplY3QuemlwY29kZVwiIChnZXR2YWx1ZSk9XCJpdGVtT2JqZWN0LnppcGNvZGUgPSAkZXZlbnQ7XCJcclxuXHRcdCBbbWFza1R5cGVdPVwiJydcIiBbc3dpdGNoU3R5bGVdPVwic3dpdGNoU3R5bGVcIiBbc3RhdGljU3R5bGVdPVwiJ3RydWUnXCIgW3N0eWxlXT1cImxhYmVsU3R5bGVcIiBbYm9yZGVyU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbdmFsdWVTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcblx0XHQ8L3NtbC1pbnB1dC10ZXh0PlxyXG5cdDwvZGl2PlxyXG5cdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBwbC0wXCI+XHJcblx0XHQ8c21sLWlucHV0LXRleHQgW2xhYmVsXT1cIidDaXR5J1wiIFtuYW1lXT1cIidjaXR5J1wiIFt2YWx1ZV09XCJpdGVtT2JqZWN0LmNpdHlcIiAoZ2V0dmFsdWUpPVwiaXRlbU9iamVjdC5jaXR5ID0gJGV2ZW50O1wiIFttYXNrVHlwZV09XCInJ1wiXHJcblx0XHQgW3N3aXRjaFN0eWxlXT1cInN3aXRjaFN0eWxlXCIgW3N0YXRpY1N0eWxlXT1cIid0cnVlJ1wiIFtzdHlsZV09XCJsYWJlbFN0eWxlXCIgW2JvcmRlclN0eWxlXT1cImJvcmRlclN0eWxlXCIgW3ZhbHVlU3R5bGVdPVwidmFsdWVTdHlsZVwiPlxyXG5cdFx0PC9zbWwtaW5wdXQtdGV4dD5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTQgcGwtMFwiPlxyXG4gIDxzbWwtaW5wdXQtc2VsZWN0IFtsYWJlbF09XCInU3RhdGUnXCIgW2xpc3RWYWx1ZV09XCJkcm9wZG93bkxpc3RcIiBbdmFsdWVdPVwiaXRlbU9iamVjdC5zdGF0ZVwiIChzZWxlY3R2YWx1ZSk9XCJpdGVtT2JqZWN0LnN0YXRlID0gJGV2ZW50XCJcclxuICBbc3R5bGVdPVwibGFiZWxTdHlsZVwiIFtzdGF0aWNTdHlsZV09XCIndHJ1ZSdcIiBbYm9yZGVyU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiBbdmFsdWVTdHlsZV09XCJzZWxlY3RWYWx1ZVN0eWxlXCIgW3N3aXRjaFN0eWxlXT1cInN3aXRjaFN0eWxlXCI+XHJcbiAgPC9zbWwtaW5wdXQtc2VsZWN0PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cIm9iamVjdD8uaXNTaG93QWRkcmVzc0JveFwiIGNsYXNzPVwiYWRkcmVzc0ZpZWxkIG10LTJcIiBbbmdTdHlsZV09XCJib3JkZXJCb3hTdHlsZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgcGwtNFwiPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJtYi0wXCIgW25nU3R5bGVdPVwibGFibGVCb3hTdHlsZVwiPnt7aXRlbU9iamVjdC5hZGRyZXNzfX08L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwbC00XCI+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cIm1iLTBcIiBbbmdTdHlsZV09XCJsYWJsZUJveFN0eWxlXCI+e3tpdGVtT2JqZWN0LmFkZHJlc3MyfX08L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBwbC00XCI+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cInByLTEgbWItMFwiIFtuZ1N0eWxlXT1cImxhYmxlQm94U3R5bGVcIj57e2l0ZW1PYmplY3QuY2l0eX19PC9sYWJlbD5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwicHItMSBtYi0wXCIgW25nU3R5bGVdPVwibGFibGVCb3hTdHlsZVwiPnt7aXRlbU9iamVjdC5zdGF0ZX19PC9sYWJlbD5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwicHItMSBtYi0wXCIgW25nU3R5bGVdPVwibGFibGVCb3hTdHlsZVwiPnt7aXRlbU9iamVjdC56aXBjb2RlfX08L2xhYmVsPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2ICpuZ0lmPVwib2JqZWN0Py5pc1Nob3dNYXBCb3hcIiBjbGFzcz1cIm1hcEZpZWxkXCIgW25nU3R5bGVdPVwibWFwQm94U3R5bGVcIj5cclxuXHQ8YWdtLW1hcCBbc3R5bGUuaGVpZ2h0XT1cIm1hcEJveFN0eWxlPy5oZWlnaHRcIiBbbGF0aXR1ZGVdPVwibGF0aXR1ZGVcIiBbbG9uZ2l0dWRlXT1cImxvbmdpdHVkZVwiPlxyXG5cdFx0PGFnbS1tYXJrZXIgW2xhdGl0dWRlXT1cImxhdGl0dWRlXCIgW2xvbmdpdHVkZV09XCJsb25naXR1ZGVcIj48L2FnbS1tYXJrZXI+XHJcblx0PC9hZ20tbWFwPlxyXG48L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAuYWRkcmVzc0ZpZWxke3dpZHRoOjEwMCU7bWluLWhlaWdodDo4NXB4O2hlaWdodDphdXRvO2JvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O3BhZGRpbmctdG9wOjVweDt9XHJcbiAgLm1hcEZpZWxke3dpZHRoOjEwMCU7bWluLWhlaWdodDozNzBweDtib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTttYXJnaW4tdG9wOjE0cHg7b3ZlcmZsb3c6aGlkZGVuO31cclxuICAucGFkLWwtMTJ7cGFkZGluZy1sZWZ0OjEycHggIWltcG9ydGFudDt9XHJcbiAgLnBhZC1sLTB7cGFkZGluZy1sZWZ0OjBweCAhaW1wb3J0YW50O31cclxuICAgYWdtLW1hcHtoZWlnaHQ6MzcwcHg7fVxyXG4gIC5oaWRlLWRpdntkaXNwbGF5Om5vbmU7fVxyXG4gICAjYXV0b2NvbXBsZXRle2hlaWdodDogNDVweCAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDRweDt9XHJcbiAgIC5jb2wtbWQtMntwYWRkaW5nLWxlZnQ6IDNweCAhaW1wb3J0YW50O31cclxuICAgLmNvbC1tZC02IHtwYWRkaW5nLXJpZ2h0OiA3cHggIWltcG9ydGFudDt9XHJcbiAgIC5jb2wtbWQtMyB7cGFkZGluZy1yaWdodDogN3B4ICFpbXBvcnRhbnQ7fVxyXG4gICAuY29sLW1kLTUge3BhZGRpbmctcmlnaHQ6IDdweCAhaW1wb3J0YW50O31cclxuICAgI2F1dG9jb21wbGV0ZTpmb2N1c3tvdXRsaW5lOiBub25lO2JveC1zaGFkb3c6IG5vbmU7Ym9yZGVyLWNvbG9yOiBsaWdodGdyYXk7IH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiBcclxuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2hFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xyXG4gIEBJbnB1dCgpIG9iamVjdDogYW55ID0ge307XHJcbiAgQElucHV0KCkgaXRlbU9iamVjdDogYW55ID0ge1xyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGFkZHJlc3MyOiBcIlwiLFxyXG4gICAgemlwY29kZTogXCJcIixcclxuICAgIGNpdHk6IFwiXCIsXHJcbiAgICBzdGF0ZTogXCJcIlxyXG4gIH07XHJcbiAgQElucHV0KCkgYWRkcmVzc1N0cjogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgc3dpdGNoU3R5bGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgQElucHV0KCkgbGFiZWxTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHNlbGVjdFZhbHVlU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGxhYmxlQm94U3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJCb3hTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIG1hcEJveFN0eWxlOiBhbnk7XHJcbiAgQE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBodHRwT3B0aW9uSlNPTiA9IHtcclxuICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0pXHJcbiAgfTtcclxuICBASW5wdXQoKSBHZW5lcmljVG9rZW46IGFueSA9IFwiYmZiODgzMTUwNDU2NDg2MWE4NjQyNzVkODVmODQ4ZjhiZmI4ODMxNTA0NTY0ODYxYTg2NDI3NWQ4NWY4NDhmOFwiO1xyXG4gIEBJbnB1dCgpIGRhdGFiYXNlOiBhbnkgPSBcIk1PQklMRllcIjtcclxuICBASW5wdXQoKSBzY2hlbWE6IGFueSA9IFwic3RhdGljXCI7XHJcbiAgQElucHV0KCkgcHJvY2VkdXJlOiBhbnkgPSBcIlpJUF9DT0RFU19TVEFURVNcIjtcclxuICBASW5wdXQoKSBhcGlVUkw6IGFueSA9ICdodHRwOi8vbW9iaWxmeS5hYWFkZXYuaW5mby9hcGkvJztcclxuICBASW5wdXQoKSBib2R5OiBhbnkgPSB7fTtcclxuICBkcm9wZG93bkxpc3Q6IGFueSA9IFtdO1xyXG4gIGlzUmViaW5kOmFueSA9IGZhbHNlO1xyXG4gIGdlb0NvZGVyO1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbiAgY29weWxhdGl0dWRlOiBudW1iZXI7XHJcbiAgY29weWxvbmdpdHVkZTogbnVtYmVyO1xyXG4gIGlzR29vZ2xlT3BlbjogYW55ID0gZmFsc2U7XHJcbiAgem9vbTogbnVtYmVyO1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBhZGRyZXNzT2JqOiBhbnkgPSB7XHJcbiAgICBzdHJlZXRfbnVtYmVyOiAnJyxcclxuICAgIHJvdXRlOiAnJyxcclxuICAgIGxvY2FsaXR5OiAnJyxcclxuICAgIGFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMTogJycsXHJcbiAgICBjb3VudHJ5OiAnJyxcclxuICAgIHBvc3RhbF9jb2RlOiAnJyxcclxuICAgIGFkZHJlc3MyOiAnJ1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbWFwc0FQSUxvYWRlcjogTWFwc0FQSUxvYWRlciwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5nZXREcnBEYXRhKCk7XHJcbiAgICB0aGlzLm1hcHNBUElMb2FkZXIubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldEN1cnJlbnRMb2NhdGlvbigpO1xyXG4gICAgICB0aGlzLmdlb0NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyO1xyXG4gICAgICBsZXQgYXV0b2NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUodGhpcy5zZWFyY2hFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgICB0eXBlczogW1wiYWRkcmVzc1wiXVxyXG4gICAgICB9KTtcclxuICAgICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKFwicGxhY2VfY2hhbmdlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGxldCBwbGFjZTogZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlUmVzdWx0ID0gYXV0b2NvbXBsZXRlLmdldFBsYWNlKCk7XHJcbiAgICAgICAgICBpZiAocGxhY2UuZ2VvbWV0cnkgPT09IHVuZGVmaW5lZCB8fCBwbGFjZS5nZW9tZXRyeSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgIGlmIChwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJzdHJlZXRfbnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5zdHJlZXRfbnVtYmVyID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJyb3V0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmoucm91dGUgPSBwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAocGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwibG9jYWxpdHlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLmxvY2FsaXR5ID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcImFkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmouYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChwbGFjZS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJjb3VudHJ5XCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5jb3VudHJ5ID0gcGxhY2UuYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInBvc3RhbF9jb2RlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5wb3N0YWxfY29kZSA9IHBsYWNlLmFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jb3B5bGF0aXR1ZGUgPSBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuICAgICAgICAgIHRoaXMuY29weWxvbmdpdHVkZSA9IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgdGhpcy56b29tID0gMTI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGFwcGx5KGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hZGRyZXNzT2JqLnN0cmVldF9udW1iZXIgIT0gXCJcIikge1xyXG4gICAgICB0aGlzLml0ZW1PYmplY3QuYWRkcmVzcyA9IHRoaXMuYWRkcmVzc09iai5zdHJlZXRfbnVtYmVyICsgXCIgXCIgKyB0aGlzLmFkZHJlc3NPYmoucm91dGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW1PYmplY3QuYWRkcmVzcyA9IHRoaXMuYWRkcmVzc09iai5yb3V0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbU9iamVjdC56aXBjb2RlID0gdGhpcy5hZGRyZXNzT2JqLnBvc3RhbF9jb2RlO1xyXG4gICAgdGhpcy5pdGVtT2JqZWN0LmNpdHkgPSB0aGlzLmFkZHJlc3NPYmoubG9jYWxpdHk7XHJcbiAgICB0aGlzLml0ZW1PYmplY3Quc3RhdGUgPSB0aGlzLmFkZHJlc3NPYmouYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xO1xyXG4gICAgdGhpcy5sYXRpdHVkZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb3B5bGF0aXR1ZGUpKTtcclxuICAgIHRoaXMubG9uZ2l0dWRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvcHlsb25naXR1ZGUpKTtcclxuICAgIHRoaXMuZ2V0dmFsdWUuZW1pdCh0aGlzLml0ZW1PYmplY3QpO1xyXG4gICAgdGhpcy5pc0dvb2dsZU9wZW4gPSBmYWxzZTtcclxuICB9XHJcbiAgc2V0Q3VycmVudExvY2F0aW9uKCkge1xyXG4gICAgaWYgKCdnZW9sb2NhdGlvbicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgdGhpcy56b29tID0gMTI7XHJcbiAgICAgICAgdGhpcy5nZXRBZGRyZXNzKHRoaXMubGF0aXR1ZGUsIHRoaXMubG9uZ2l0dWRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEFkZHJlc3MobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG4gICAgdGhpcy5nZW9Db2Rlci5nZW9jb2RlKHsgJ2xvY2F0aW9uJzogeyBsYXQ6IGxhdGl0dWRlLCBsbmc6IGxvbmdpdHVkZSB9IH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcclxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xyXG4gICAgICAgIGlmIChyZXN1bHRzWzBdKSB7XHJcbiAgICAgICAgICB0aGlzLnpvb20gPSAxMjtcclxuICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHdpbmRvdy5hbGVydCgnTm8gcmVzdWx0cyBmb3VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cuYWxlcnQoJ0dlb2NvZGVyIGZhaWxlZCBkdWUgdG86ICcgKyBzdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZ2V0TGF0TGFuKCkge1xyXG4gICAgdGhpcy5nZW9Db2Rlci5nZW9jb2RlKHsgJ2FkZHJlc3MnOiB0aGlzLmFkZHJlc3NTdHIgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcInN0cmVldF9udW1iZXJcIikge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkcmVzc09iai5zdHJlZXRfbnVtYmVyID0gcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJyb3V0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLnJvdXRlID0gcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlc1tqXSA9PSBcImxvY2FsaXR5XCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmoubG9jYWxpdHkgPSByZXN1bHRzWzBdLmFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzW2pdID09IFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmouYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xID0gcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJjb3VudHJ5XCIpIHtcclxuICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NPYmouY291bnRyeSA9IHJlc3VsdHNbMF0uYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbal0gPT0gXCJwb3N0YWxfY29kZVwiKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzT2JqLnBvc3RhbF9jb2RlID0gcmVzdWx0c1swXS5hZGRyZXNzX2NvbXBvbmVudHNbaV0uc2hvcnRfbmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb3Blbkdvb2dsZSgpIHtcclxuICAgIHRoaXMuaXNHb29nbGVPcGVuID0gdHJ1ZTtcclxuICB9XHJcbiAgY2xvc2VHb29nbGUoZXZlbnQpIHtcclxuICAgIHRoaXMuaXNHb29nbGVPcGVuID0gZmFsc2U7XHJcbiAgfVxyXG4gIGdldERycERhdGEoKSB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLmFwaVVSTCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhYmFzZSArIFwiL1wiICsgdGhpcy5zY2hlbWEgKyBcIi9cIiArIHRoaXMucHJvY2VkdXJlICsgXCI/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuO1xyXG4gICAgdGhpcy5odHRwLnBvc3QodXJsLCB0aGlzLmJvZHksIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBbXTtcclxuICAgICAgICBsZXQgZGF0YTogYW55O1xyXG4gICAgICAgIGRhdGEgPSByZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgblR5cGUgPSB7XHJcbiAgICAgICAgICAgIGlkOiBkYXRhW2ldLlN0YXRlQ29kZSxcclxuICAgICAgICAgICAgbmFtZTogZGF0YVtpXS5TdGF0ZUNvZGVcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0ZW1wLnB1c2goblR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdCA9IHRlbXA7XHJcbiAgICAgICAgdGhpcy5pc1JlYmluZCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgdGhpcy5pc1JlYmluZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgdGhpcy5kcm9wZG93bkxpc3QgPSBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=