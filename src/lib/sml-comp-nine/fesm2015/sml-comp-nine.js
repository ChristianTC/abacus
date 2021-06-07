import { __decorate } from 'tslib';
import { EventEmitter, NgZone, ViewChild, Input, Output, Component, ElementRef, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType, HttpResponse, HttpClientModule } from '@angular/common/http';
import { MapsAPILoader, AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TextModule, SelectModule } from 'sml-inputs-nine';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import * as moment_ from 'moment';
import { SwiperComponent, SwiperDirective, SwiperModule } from 'ngx-swiper-wrapper';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { RouterModule } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgPaymentCardModule } from 'ng-payment-card';

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

let ButtonComponent = class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonClick = new EventEmitter;
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
            let css = event.buttonStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
            this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
            this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
            this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
            this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
        }
    }
    clickEvent() {
        this.buttonClick.emit();
    }
};
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "label", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "btnCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "iconCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "buttonStyle", void 0);
__decorate([
    Output()
], ButtonComponent.prototype, "buttonClick", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'sml-button',
        template: `
  <button type="button" class="btn" [ngClass]="btnCl" [ngStyle]="buttonStyle" (click)="clickEvent()">
  <i *ngIf="icon" class="fas" [ngClass]="iconCl"></i>
  <span *ngIf="!icon">{{label}}</span>
  </button>
  `,
        styles: [`
  /* css variable */
  :host {
          --focus-color: #82B056;
      --focus-spread: 0px;
      --focus-blur: 0px;
      --focus-x: 0px;
      --focus-y: 0px;
  }
  
  .btn.btn-sm{
      width: 90% !important;
      padding: 8px 20px !important;
      font-size: 14px; margin: 0 5px;
  }
  .btn:focus {
      outline: 0;
      box-shadow: var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color) !important;
  }
  `]
    })
], ButtonComponent);

let ButtonModule = class ButtonModule {
};
ButtonModule = __decorate([
    NgModule({
        declarations: [ButtonComponent],
        imports: [
            CommonModule
        ],
        exports: [ButtonComponent]
    })
], ButtonModule);

let AddressModule = class AddressModule {
};
AddressModule = __decorate([
    NgModule({
        declarations: [AddressComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgSelectModule,
            ButtonModule,
            TextModule,
            SelectModule,
            AgmCoreModule.forRoot({
                apiKey: "AIzaSyAqOJ907gt1wO7d96gBY3rXhXpK-gi4oPw",
                libraries: ["places"]
            }),
        ],
        exports: [AddressComponent]
    })
], AddressModule);

let AlertComponent = class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
    success() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'success'
        });
    }
    error() {
        Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong!',
            type: 'error',
        });
    }
    info() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'info'
        });
    }
    warning() {
        Swal.fire({
            title: 'Done!',
            imageUrl: 'https://unsplash.it/400/200',
            text: 'This is not implemented yet :/',
            type: 'warning'
        });
    }
    doubt() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    delete() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
};
AlertComponent = __decorate([
    Component({
        selector: 'sml-alert',
        template: `
  <div class="d-flex justify-content-between">
<button (click)="success()" class="btn btn-success btn-sm w-100 mx-1">
  Success
</button>
<button  (click)="error()" class="btn btn-danger btn-sm w-100 mx-1">
  Error
</button>
<button  (click)="info()" class="btn btn-primary btn-sm w-100 mx-1">
Info
</button>
<button  (click)="doubt()" class="btn btn-info btn-sm w-100 mx-1">
  Doubt
</button>
<button  (click)="warning()" class="btn btn-warning btn-sm w-100 mx-1">
  Warning
</button> 
<button class="btn btn-primary btn-sm" (click)="delete()">Delete File</button>
</div>
  `,
        styles: [`
  
  `]
    })
], AlertComponent);

let AlertModule = class AlertModule {
};
AlertModule = __decorate([
    NgModule({
        declarations: [AlertComponent],
        imports: [
            CommonModule,
            SweetAlert2Module.forRoot(),
        ],
        exports: [AlertComponent]
    })
], AlertModule);

const moment = moment_;
let NotesComponent = class NotesComponent {
    constructor(http) {
        this.http = http;
        this.noteId = "0";
        this.noteData = [];
        this.apiURL = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://preview.abacuscrm.net/media/';
        this.GenericToken = "";
        this.dataBase = "APPS";
        this.spList = "core/NOTE_ListLog";
        this.clickMethod = new EventEmitter();
        this.myInput = { value: '' };
        this.NoteObject = {
            NoteId: 0,
            Notes: "",
            ChangedBy: ""
        };
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.User = JSON.parse(localStorage.getItem('Session.User'));
    }
    ngOnInit() {
        this.getNotes();
    }
    getNotes() {
        if (this.noteId == '0') {
            return false;
        }
        this.noteData = [];
        const url = this.apiURL + "Data/Exec/" + this.dataBase + "/" + this.spList + "?api_key=" + this.GenericToken;
        const body = {
            NoteId: this.noteId
        };
        this.http.post(url, body, this.httpOptionJSON).subscribe((data) => {
            if (data) {
                let temp = [];
                for (let i = 0; i < data.length; i++) {
                    let nType = {
                        user: data[i].ChangedBy == '' ? (this.User.FirstName + ' ' + this.User.LastName) : data[i].ChangedByComplete,
                        userUrl: this.fileurl + data[i].FileUrl,
                        note: data[i].Notes,
                        date: this.format(data[i].ChangedOn, 'MM/DD/YYYY'),
                        time: this.format(data[i].ChangedOn, 'HH:MM:SS A'),
                        read: data[i].IsAction == "True" ? 'unread' : 'read',
                    };
                    temp.push(nType);
                }
                this.noteData = this.groupBy(temp);
            }
        });
    }
    saveNote() {
        if (this.noteId != "0") {
            this.NoteObject.ChangedBy = this.User.UserName;
            this.NoteObject.NoteId = this.noteId;
            const url = this.apiURL + "Data/Exec/" + this.dataBase + "/core/NOTE_SaveLog?api_key=" + this.GenericToken;
            this.http.post(url, this.NoteObject, this.httpOptionJSON).subscribe((note) => {
                this.NoteObject.Notes = "";
                this.getNotes();
            }, (error) => {
                alert(error);
            });
        }
    }
    onInput(event) {
        let code = event.keyCode;
        let note = event.target.value;
        if (code == 13 && note != '') {
            this.NoteObject.Notes = note;
            this.clickMethod.emit({ note });
            this.saveNote();
            event.target.value = '';
        }
    }
    onInput1(event) {
        let note = event;
        this.NoteObject.Notes = note;
        this.clickMethod.emit({ note });
        this.saveNote();
        this.myInput = '';
        event = '';
    }
    isToday(date) {
        if (moment(date).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
            return 'Today';
        }
        return date;
    }
    groupBy(data) {
        let groupByDate = {};
        let groupByarray = [];
        data.forEach(function (a) {
            groupByDate[a.date] = groupByDate[a.date] || [];
            groupByDate[a.date].push({
                user: a.user,
                userUrl: a.userUrl,
                note: a.note,
                date: a.date,
                time: a.time,
                read: a.read
            });
        });
        for (var key in groupByDate) {
            let nType = {
                date: key,
                noteData: groupByDate[key]
            };
            groupByarray.push(nType);
        }
        return groupByarray;
    }
    format(data, format) {
        return moment(new Date(data)).format(format);
    }
};
NotesComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], NotesComponent.prototype, "noteId", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "noteData", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "dataBase", void 0);
__decorate([
    Input()
], NotesComponent.prototype, "spList", void 0);
__decorate([
    Output()
], NotesComponent.prototype, "clickMethod", void 0);
NotesComponent = __decorate([
    Component({
        selector: 'sml-notes',
        template: `

  <div class="notesWrapper">
    <h4 class="head">Notes</h4>
    <div class="notesLayout">
        <div class="notesTextType">
            <div class="noteTextContainer">
                <textarea rows="3" class="noteTexarea" #textarea [(ngModel)]="myInput.value" (keyup)="onInput($event)" name="chat">
                </textarea>
                    <label class="label" [ngClass]="{'op':myInput.value != ''}" >Enter your note here</label>
                <a (click)="this.onInput1(textarea.value)" class="postBtn">
                    <span class="divider">|</span>
                    <img src="assets/send.png" class="sendimg">
                </a>
            </div>
            <div class="hr"></div>
        </div>
        <div class="noteContainer">
            <div class="notesHistory">
              <div *ngFor="let dateGroup of noteData">
                <div class="date">
                    {{ isToday(dateGroup.date)}}
                </div>
                <ul class="notesList">
                    <li *ngFor="let data of dateGroup.noteData" class="{{data.read}}">
                        <div class="userImg">
                        <span>
                            <img  src="{{data?.userUrl}}" class="avatar"  onerror="this.onerror=null; this.src='assets/usericon.png'">
                        </span>
                        </div>
                        <div class="notesInfo">
                            <div class="noteinfohead">
                                <div class="notesNameTiming">
                                    <span>{{data.user}} &nbsp;</span>
                                    <span class="noteTime"> /&nbsp; {{data.time}}</span>
                                </div>
                                <div class="hrpoint"></div>
                                <div class="status">
                                    <span class="notesStatus"></span>
                                </div>
                            </div>
                            <p class="notesMessage">{{data.note}}</p>
                        </div>
                    </li>
                </ul>
              </div>  
            </div>
        </div>
    </div>
</div>

  `,
        styles: [`

ul { margin: 0; padding: 0 }
li { list-style: none; }
.mylist{width: 100%; display: inline-block;}
.fz12 { font-size: 12px;  }
.fz14 { font-size: 14px;  }
.fz16 { font-size: 16px;  }
.mgb5{margin-bottom: 5px;}
.mgt5{margin-top: 5px;}
.mgt10{margin-top: 10px;}
.containerComponent{width: 100%; float: left;  padding: 15px; border:1px solid #f5f5f5;}
.full-w{width: 100%; display: inline-block;}
.mychatsystem{margin: 0; padding: 0; width: 100%; float: left;}
.noteInput{resize: none; outline: none; }
.mychatsystem li{list-style: none;}
.noteInput{outline: none !important; box-shadow: none;}
.d-flex{display: flex;}
.justify-content-between{justify-content: space-between;}
.uv_dp { height: 50px; width: 55px; background-color: #f7f7f7; display: inline-block; }
.bg_list { background-color: #ffd5d5; border-radius: 7px; padding: 7px; font-size: 13px; border-top-left-radius: 0; float: left;}.dp_wrapper { width:100%; display: flex; }
.uv_details { width: 90%; float: right;  position: relative; top: -27px;}
.chat_name{font-size: 14px; font-weight: normal; color: #a0a0a0; font-family: sans-serif;}
.chat_date{font-size: 12px; color: #9e9e9e; margin-left:0; margin-top: 2px; display: inline-block; font-family: sans-serif;}
.adddata{width: 100%; display: inline-block; padding: 3px; resize: none; border-radius: 3px; border: 1px solid #e6e6e6; font-size: 13px; overflow: hidden; height: 60px;}
.mylist{float: left; width: 100%;}
.username{margin-left: 11px; width: 100%; justify-content: flex-end; align-items: flex-end; flex-direction: column;}
.rightside .uv_details{width: 90%; float: left;  position: relative; top: -27px; text-align: right; align-items: flex-end}
.secondPersion{display: flex; align-items: flex-end; width: 100%;}
.fright{display: flex;   width: 100%;   justify-content: flex-end;}
.meui{margin-right: 13px;}
.contenttype{margin-right: 18px;}
.topright{ border-radius: 7px; border-top-right-radius: 0; background-color: #d9fbda;}
.usernameFirst{margin-left: 14px;}
.d_line{ position: absolute; width: 100%; height: 1px; background-color: #e6e6e6; top: 56%;   z-index: -1; transform: translateY(-50%);} 
.d_text{ font-weight: 400 !important;  color: #000;} 
.usericon{width: 50px;}
.notesHistory::-webkit-scrollbar {
    width: 8px;
    background-color: #fbfbfb;
}
.notesHistory::-webkit-scrollbar-track {
    width: 3px;
    background-color: #f0f0f0;
    border-left: 3px solid #fbfbfb;
    border-right: 3px solid #fbfbfb
}

.notesHistory::-webkit-scrollbar-thumb {
    background-color: #e1e2e2;
    border-radius: 30px;
}

body {
    font-family: Arial, Helvetica, sans-serif
}

.notesWrapper {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
}

.head {
    background-color: #f3f3f3;
    color: #777;
    padding: 8px 15px;
    border-radius: 3px;
}

.notesLayout {
    background-color: #fbfbfb;
}

.notesTextType {
    padding: 12px 30px;
}

.noteTexarea {
    width: 100%;
    border-radius: 0.25em;
    resize: none;
    border-color: #d6d6d6;
    padding: 18px 45px 15px 12px;
    font-size: 14px
}

.noteTexarea:focus {
    border-color: #8e8e8e;
    outline: none;
}
.noteTexarea:focus + .label{
    top:7px; font-size: 11px;
    opacity: 0;
}
.op{
    opacity: 0;
}

.noteTextContainer {
    position: relative;
    width: 100%;
    margin-bottom: 8px
}

.label {
    position: absolute;
    top: 12px;
    left: 13px;
    margin-bottom: 0;
    font-size: 14px;
    color: #9d9d9dbd;
    transition: ease-in-out 0.2s;
}

.postBtn {
    display: inline-flex;
    position: absolute;
    bottom: 15px;
    right: 12px;
    text-decoration: none;
    align-items: center;
}

.divider {
    font-size: 20px;
    color: #d6d6d6;
}

.hr {
    width: 100%;
    height: 1px;
    background-color: #cddfbd;
}

.date {
    text-align: center;
    color: #abc98e;
    font-size: 12px;
    padding: 8px 0
}

.noteContainer {
    padding: 0 10px;
}

.notesHistory {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    height: 400px;
    padding: 0 20px;
}

.notesList {
    padding: 0;
    margin: 0;
    list-style-type: none;
}

.notesList li {
    display: flex;
    padding: 8px 12px;
    border-radius: 4px;
}

.notesList li:not(:last-child) {
    margin-bottom: 12px;
}

.notesList li.unread {
    background-color: #fdeaeb;
}

.notesList li.read {
    background-color: #fbfbfb;
}

.userImg {
    width: 40px;
}

.avatar {
    width: 34px;
    height: 34px;
    border-radius: 100%;
    display: inline-block;
    overflow: hidden;
    background-color: #fff;
}

.notesNameTiming {
    font-size: 11px;
    width: 370px;
}

.noteTime {
    color: #90b264;
}

.notesInfo {
    width: calc(100% - 40px);
    padding: 4px 0 4px 4px;
}

.noteinfohead {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom:3px
}

.hrpoint {
    width: 100%;
    height: 1px;
    background-color: #c5ced5;
    display: inline-block
}

.status {
    width: 50px;
    text-align: right;
}

.unread .notesStatus {
    width: 10px;
    height: 10px;
    background-color: #6da23a;
    display: inline-block;
    border-radius: 100%;
}

.read .notesStatus {
    width: 10px;
    height: 10px;
    background-color: #c5ced5;
    display: inline-block;
    border-radius: 100%;
}

.notesMessage {
    font-size: 14px;
    margin: 0;
}

.sendimg {
    width: 20px;
    margin-left: 4px;
    position: relative;
    top: 3px;
}
  `]
    })
], NotesComponent);

let NotesModule = class NotesModule {
};
NotesModule = __decorate([
    NgModule({
        declarations: [NotesComponent],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [NotesComponent]
    })
], NotesModule);

let BreadcrumbComponent = class BreadcrumbComponent {
    constructor() {
        this.StatusNotes = [];
        this.buttons = [];
        this.disable = false;
        this.actionClick = new EventEmitter;
        this.statusClick = new EventEmitter;
        // StatusNotes = [{
        //   a: 1,
        //   Description: 'Request Finance Contract',
        //   IsFinal: 0
        // },
        // {
        //   a: 2,
        //   Description: 'Contract Sent to Finance Company',
        //   IsFinal: 0
        // },
        // {
        //   a: 3,
        //   Description: 'Contract Sent to Finance Company',
        //   IsFinal: 0
        // },
        // {
        //   a: 4,
        //   Description: 'Notice of Acceptance Received',
        //   IsFinal: 0
        // },
        // {
        //   a: 5,
        //   Description: 'Pre-Notice Voided Received',
        //   IsFinal: 0
        // },
        // {
        //   a: 6,
        //   Description: 'Pre-Notice Voided Received',
        //   IsFinal: 1
        // }];
        this.show = true;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            initialSlide: this.StatusNotes.length,
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 'auto',
            speed: 100,
            centeredSlides: false,
            slidesPerGroup: 5,
            keyboard: true,
            mousewheel: true,
            scrollbar: false,
            loopFillGroupWithBlank: false,
            navigation: true,
            pagination: false,
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.config.initialSlide = this.StatusNotes.length;
    }
    toggleType() {
        this.type = (this.type === 'component') ? 'directive' : 'component';
    }
    toggleDisabled() {
        this.disabled = !this.disabled;
    }
    toggleDirection() {
        this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
    }
    toggleSlidesPerView() {
        if (this.config.slidesPerView !== 1) {
            this.config.slidesPerView = 3;
        }
        else {
            this.config.slidesPerView = 1;
        }
    }
    toggleOverlayControls() {
        if (this.config.navigation) {
            this.config.scrollbar = false;
            this.config.navigation = false;
            this.config.pagination = this.pagination;
        }
        else if (this.config.pagination) {
            this.config.navigation = false;
            this.config.pagination = false;
            this.config.scrollbar = this.scrollbar;
        }
        else {
            this.config.scrollbar = false;
            this.config.pagination = false;
            this.config.navigation = true;
        }
        if (this.type === 'directive') {
            this.directiveRef.setIndex(0);
        }
        else {
            this.componentRef.directiveRef.setIndex(0);
        }
    }
    toggleKeyboardControl() {
        this.config.keyboard = !this.config.keyboard;
    }
    toggleMouseWheelControl() {
        this.config.mousewheel = !this.config.mousewheel;
    }
    onIndexChange(index) {
        console.log('Swiper index: ', index);
    }
    clickMethod(event) {
        this.actionClick.emit(event);
    }
    goToIndex(index) {
        this.componentRef.directiveRef.setIndex(index);
    }
    clickStatus(note) {
        this.statusClick.emit(note);
    }
};
__decorate([
    Input()
], BreadcrumbComponent.prototype, "StatusNotes", void 0);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "buttons", void 0);
__decorate([
    Input()
], BreadcrumbComponent.prototype, "disable", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "actionClick", void 0);
__decorate([
    Output()
], BreadcrumbComponent.prototype, "statusClick", void 0);
__decorate([
    ViewChild(SwiperComponent)
], BreadcrumbComponent.prototype, "componentRef", void 0);
__decorate([
    ViewChild(SwiperDirective)
], BreadcrumbComponent.prototype, "directiveRef", void 0);
BreadcrumbComponent = __decorate([
    Component({
        selector: 'sml-breadcrumb',
        template: `
<div class="mt-3" *ngIf="StatusNotes.length <= 5">
    <div class="w-100 d-flex ng-star-inserted align-items-center" style="padding-right: 0px;">
        <ng-template ngFor let-note [ngForOf]="StatusNotes" let-i="index">
            <div class="vatOuter" [ngClass]="{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}" (click)="clickStatus(note)">
                <div class="vatMiddle">
                    <span class="checkMark"><i class="fas fa-check-circle"></i></span>
                    {{ note.Description }}
                </div>
            </div>
            <div *ngIf="note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)" class="vatArrowR">
                <i class="fas fa-chevron-right"></i>
            </div>
        </ng-template>
        <div class="fropdown" *ngIf="buttons.length > 0">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" [ngClass]="{'disabled': disable === true}">
                <span style="width:80%;">{{buttons[0].Title}}</span>
                <span class="dropdown-toggle-after">
                    <img src="./assets/Arrowcombobox.png">
                </span>
            </button>
            <div class="dropdown-menu" >
                <a *ngFor="let button of buttons;let i = index;" class="dropdown-item"  href="javascript:void(0)"  (click)="clickMethod(button.Action)">{{button.Title}}</a>
            </div>
        </div>
    </div>
</div>
<div class="mt-3" *ngIf="StatusNotes.length > 5">
    <div class=" swiperCustom d-flex align-items-center">
        <div class="swiper_wrap position-relative">
            <swiper #swiperComp *ngIf="type == 'component' && show" [config]="config" (indexChange)="onIndexChange($event)"> 
                <ng-template  ngFor let-note [ngForOf]="StatusNotes" let-i="index">
                    <div class="vatOuter" [ngClass]="{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}" (click)="clickStatus(note)">
                        <div class="vatMiddle">
                            <span class="checkMark"><i class="fas fa-check-circle"></i></span>
                            {{ note.Description }}
                        </div> 
                    </div>
                    <div *ngIf="note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)" class="vatArrowR">
                        <i class="fas fa-chevron-right"></i>
                    </div> 
                </ng-template>  
            </swiper>
        </div>
        <div class="fropdown" *ngIf="buttons.length > 0">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" [ngClass]="{'disabled': disable === true}">
                <span style="width:80%;">{{buttons[0].Title}}</span>
                <span class="dropdown-toggle-after">
                    <img src="./assets/Arrowcombobox.png">
                </span>
            </button>
            <div class="dropdown-menu" >
                <a *ngFor="let button of buttons;let i = index;" class="dropdown-item" href="javascript:void(0)" (click)="clickMethod(button.Action)">{{button.Title}}</a>
            </div>
        </div>
    </div>
</div>
  `,
        styles: [`
.vatFirstCards {
    background-color: #f2f2f2;
    color: #808184
}

.vatOuter {
    display: table;
    /*position: absolute;*/
    border-radius: 4px;
    top: 0;
    left: 0;
    height: 100%;
    width: 150px;
}

.vatMiddle {
    display: inline-flex;
    font-size: 14px;
    align-items: center;
    padding: 10px 6px;
    line-height: 1.4;
    min-height: 57px;
}

.vatArrowR {
    box-sizing: border-box;
    margin: 0px 8px !important;
    color: #bdbec0;
}

.swiperCustom .vatArrowR {
    width: auto !important
}

.swiperCustom .vatOuter {
    width: 170px !important
}

.resultGreen {
    background-color: #8ec63f;
    color: #fff
}

.textGreen {
    color: #6da23a;
    font-size: 10px;
}

.bg-gradient-blue {
    background: rgb(81, 136, 218);
    background: linear-gradient(135deg, rgba(81, 136, 218, 1) 0%, rgba(52, 135, 226, 1) 100%) !important;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5188da', endColorstr='#3487e2', GradientType=1) !important;
}


    .checkMark {
        font-size: 16px;
        display: inline-block;
        margin-right: 8px;
    }

    .swiper-wrapper {
        align-items: center;
    }

    .dropdown-toggle-after{
       content: '';
       border: none;
       font-family: 'Font Awesome 5 Free';
       font-weight: 900;
       color: #6a942f;
       vertical-align: 0;
       width: 35px !important;
       height: 104%;
       background: #a3d45d;
       position: absolute;
       z-index: 999;
       top: -1px;
       right: -1px;
       border-radius: 5px;
       border-bottom-left-radius: 0;
       border-top-left-radius: 0;
       display: flex;
       justify-content: center;
       align-items: center;

   }
   .dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}
   .show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}
   .dropdown-toggle {
    width: 170px;
    background-color: #8ec63f;
    color: #fff;
    display: inline-flex;
    white-space: unset !important;
    text-align: left;
    align-items: center;
    font-size: 14px;
    padding:9px 6px;
    line-height: 1.4;
    position: relative;
    min-height: 57px;
}
.dropdown-toggle::after {
    display:none !important;
}

.dropdown-toggle:focus {
    box-shadow: none;
}

/*.dropdown-menu{
    padding: 0;
    border: none;

}
*/
.bordertop{
    border: 1px solid #eae9e9cc;
    position: relative; 
    margin-top: 20px; 
    border-radius: 3px;
}
.dropdown-item{
    font-size: 14px;
     padding: 6px;
     border-left: 3px solid #fff;
     white-space: pre-wrap !important;

}
.dropdown-divider{
    margin: 0;
}
.dropdown-menu.show {
     width: 175px;
}
.dropdown-item:hover{
    background-color: #fff;
    color: #8ec63f;
    border-left: 3px solid #8ec63f;
}

.updrop{position: absolute; top: -19px; right: 18px;}
  `]
    })
], BreadcrumbComponent);

let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = __decorate([
    NgModule({
        declarations: [BreadcrumbComponent],
        imports: [
            CommonModule,
            FormsModule,
            SwiperModule
        ],
        exports: [BreadcrumbComponent]
    })
], BreadcrumbModule);

let ButtongroupComponent = class ButtongroupComponent {
    constructor() {
        this.obj = { label: 'My Dropdown', dropdownButtons: [] };
        this.actionClick = new EventEmitter;
        this.hoverAnchor = {};
    }
    ngOnInit() {
    }
    getHoverStyle() {
        let nType = {
            'background-color': '#fff',
            'color': this.buttonGroupStyle.backgroundcolor,
            'border-left': '3px solid' + this.buttonGroupStyle.backgroundcolor,
            'font-family': this.buttonGroupValueStyle['font-family'],
            'font-size': this.buttonGroupValueStyle['font-size'],
            'font-weight': this.buttonGroupValueStyle['font-weight'],
            'cursor': 'pointer'
        };
        return nType;
    }
    clickMethod(event) {
        this.actionClick.emit(event);
    }
};
__decorate([
    Input()
], ButtongroupComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupLabelStyle", void 0);
__decorate([
    Input()
], ButtongroupComponent.prototype, "buttonGroupValueStyle", void 0);
__decorate([
    Output()
], ButtongroupComponent.prototype, "actionClick", void 0);
ButtongroupComponent = __decorate([
    Component({
        selector: 'sml-buttongroup',
        template: `
	<div class="w-100 mb-5">
	<div class="form-row align-items-center mb-5">
		<div class="col-md-12 col-12 mb-0">
			<div class="btn-group">
				<button type="button" [ngStyle]="buttonGroupLabelStyle" [style.background]="buttonGroupStyle?.backgroundcolor" [style.width]="buttonGroupStyle?.width"
				 [style.height]="buttonGroupStyle?.height" class="btn btn-default  dropdown-toggle" data-toggle="dropdown">
					{{ obj.label }}
					<span [style.background]="buttonGroupStyle?.togglebackgroundcolor" class="dropdown-toggle-after" [style.height]="buttonGroupStyle?.height">
						<img src="./assets/Arrowcombobox.png">
					</span>
				</button>
				<div [style.width]="buttonGroupStyle?.width" class="dropdown-menu">
					<a *ngFor="let button of obj.dropdownButtons;let i = index;" class="dropdown-item" (mouseover)="hoverAnchor[i] = true" (click)="clickMethod(button.action)"
					 (mouseleave)="hoverAnchor[i]=false" [ngStyle]="hoverAnchor[i]?getHoverStyle(): buttonGroupValueStyle">
						{{button.title}}
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
	`,
        styles: [`
		
.dropdown-toggle-after{
    border: none;
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #6a942f;
    vertical-align: 0;
    width: 35px !important;
    height: 104%;
    background: #a3d45d;
    position: absolute;
    z-index: 999;
    top: -1px;
    right: -1px;
    border-radius: 5px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    display: flex;
    justify-content: center;
    align-items: center;

}

.dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}
.show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}
.dropdown-toggle {
 width: 175px;
 background-color: #8ec63f;
 border-radius: 6px;
 color: #fff;
 display: inline-flex;
 white-space: unset !important;
 text-align: left;
 align-items: center;
 font-size: 14px;
 padding:9px 6px;
 line-height: 1.4;
 position: relative;
}

.dropdown-toggle:focus {
 box-shadow: none;
}

.dropdown-item{
    font-size: 14px;
     padding: 6px;
     border-left: 3px solid #fff;
     white-space: pre-wrap !important;

}
.dropdown-divider{
    margin: 0;
}
.dropdown-menu.show {
     width: 175px;
}
.dropdown-item:hover{
    background-color: #fff;
    color: #8ec63f;
    border-left: 3px solid #8ec63f;
}

.dropdown-toggle::after {
    display:none;
}

.updrop{position: absolute; top: -19px; right: 18px;}

	`]
    })
], ButtongroupComponent);

let ButtonGroupModule = class ButtonGroupModule {
};
ButtonGroupModule = __decorate([
    NgModule({
        declarations: [ButtongroupComponent],
        imports: [
            CommonModule
        ],
        exports: [ButtongroupComponent]
    })
], ButtonGroupModule);

let SinglefileuploadComponent = class SinglefileuploadComponent {
    constructor(http) {
        this.http = http;
        this.idInputFile = 'other';
        this.global_url = '';
        this.url = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://apinext.aaadev.info/';
        this.FilesGroupIdvalue = '0';
        this.FileId = '0';
        this.nameFile = '';
        this.dataBase = 'APPS';
        this.fileResponse = new EventEmitter;
        this.editContent = false;
        this.isFiles = false;
        this.datas = [];
        this.description = '';
        this.textdata = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getListdata();
    }
    upload(files) {
        this.uploadAndProgress(files);
    }
    getListdata() {
        this.http.get(this.url + "GetSystemInfo?passcode=flipper613").subscribe(res => {
            this.GenericToken = res["GenericToken"];
            if (this.FilesGroupIdvalue) {
                const body = {
                    FilesGroupId: this.FilesGroupIdvalue,
                };
                const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                    this.datas = res;
                    for (let i = 0; i < this.datas.length; i++) {
                        let file_url = this.global_url + this.datas[i].FileUrl;
                        this.datas[i].FileUrl = file_url;
                        this.isFiles = true;
                    }
                    this.UploadedFileli = true;
                });
            }
        });
    }
    uploadAndProgress(files) {
        this.UploadedFileli = false;
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('id', this.FileId);
        formData.append('filegroupid', this.FilesGroupIdvalue);
        formData.append('mediaType', 'example');
        // formData.append('description', files[0].name);
        if (this.nameFile != '') {
            formData.append('description', this.nameFile);
        }
        else {
            formData.append('description', files[0].name);
        }
        this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.uploadSuccess = true;
                this.UploadedFileli = true;
                this.filename = event.body["Description"];
                this.filelink = this.fileurl + event.body["FileUrl"];
                this.isFiles = true;
                this.fileResponse.emit(event.body);
                this.getListdata();
                setTimeout(() => {
                    this.uploadSuccess = false;
                    this.percentDone = 0;
                }, 3000);
            }
        });
    }
    edit(data, i) {
        this.textdata = data.Description;
        this.contentIndex = i;
        this.editContent = true;
    }
    updateName(id) {
        var url = this.url + "Models/Files?api_key=" + this.GenericToken;
        var body = {
            FilesId: id,
            Description: this.textdata
        };
        this.http.post(url, body).subscribe(res => {
            this.getListdata();
            this.esc();
        });
    }
    esc() {
        this.editContent = false;
        this.contentIndex = null;
    }
    DeleteFIles(value) {
        this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            const body = {
                FilesGroupId: this.FilesGroupIdvalue
            };
            const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                this.datas = [];
                this.datas = res;
                this.isFiles = false;
                for (let i = 0; i < this.datas.length; i++) {
                    let file_url = this.global_url + this.datas[i].FileUrl;
                    this.datas[i].FileUrl = file_url;
                }
                this.UploadedFileli = true;
            });
        });
    }
};
SinglefileuploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "idInputFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "label", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "global_url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FileId", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "nameFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "dataBase", void 0);
__decorate([
    Output()
], SinglefileuploadComponent.prototype, "fileResponse", void 0);
SinglefileuploadComponent = __decorate([
    Component({
        selector: 'sml-singlefileupload',
        template: `
	<div class="w-100">
	<div class="form-row align-items-center">
		<div class="col-12 mb-0">
			<label class="col-md-12 dropdownarea" for="{{idInputFile}}">
				<div class="d-flex w-100 flex-column">
					<input type="file" id="{{idInputFile}}" (change)="upload($event.target.files)" class="drag"
						[ngStyle]="{'height.px': height,'width.px': width}" />
					<div class="d-flex align-content-start align-items-start w-100 flex-column">
						<div class="d-flex align-content-start align-items-start">
							<span class="uploadicon"><img src="./assets/upload.png" /></span>
							<div class="d-flex flex-column position-relative w79">
								<div class="fz14 top5" [ngClass]="{'getData':isFiles}">Choose a file or drag it here. 
									<span *ngIf="percentDone"> {{percentDone}}%</span></div>
								<div class="progressContainer">
									<div class="procesbar"></div> 
									<div class="w-100 z9" *ngIf="percentDone">
										<div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</label>

			<div class="listdata mt-5" *ngIf="UploadedFileli">
				<ul class="w-100 fileuploadlist">
					<li *ngFor="let data of datas; let i = index"
						class="w-100 d-flex justify-content-between align-content-around">
						<div class="w-100 mflex" *ngIf="contentIndex != i">
							<a href="{{data.FileUrl}}" target="_blank">{{data.Description}}</a>
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="edit(data,i)">
									<img src="./assets/pencil-edit-button.svg">
								</div>
								<div class="cross icons bg-danger pointer d-flex justify-content-center align-items-center"
									(click)="DeleteFIles(data.FilesId)">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
						<div *ngIf="editContent && contentIndex == i"
							class="w-100 d-flex align-items-center">
							<input type="text" class="form-control w-75" name="textdata" [value]="data.Description"
								[(ngModel)]="textdata" #ctrl="ngModel">
							<div class="d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="updateName(data.FilesId)">
									<img src="./assets/checked.svg">
								</div>
								<div class="cross icons bg-dark pointer d-flex justify-content-center align-items-center"
									(click)="esc()">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	`,
        styles: [`
	.cursor-pointer {
		cursor: pointer;
	  }
	  .node-content-wrapper, .tree-children {
		position: relative;
	  }  
	  .cr-slider-wrap {
		margin: 8px auto !important
	  }
	  .drag {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index:999999;
	  }
	  .dropdownarea {
		width: 100%;
		border: 1px dashed #ccc;
		padding:10px 15px;
		display: flex;
		align-items: center;
		height: 65px;
		text-align: center;
		align-items: center;
		position: relative;
	  }
	  .dropdownarea h1 {
		color: #7d7c7c;
		font-size: 17px;
	  }
	  .pd5 {
		padding: 89px 9px 76px 0px;
		float: left;
		width: 100%;
	  }
	  .table-headed {
		padding: 15px;
		display: block;
	  }
	  .mgt50 {
		margin-top: 50px;
	  }
	  .btndefault {
		background-color: #f3f3f3;
		border-color: #e6e6e6;
		color: #333;
	  }
	  .cross {
		display: inline-block;
		font-size: 12px;
		padding: 5px;
		color: red;
		font-weight: bold;
		width: 10px;
		height: 10px;
		margin-left: 10px;
	  }
	  .progressbar {
		height: 2px;
		background: green;
		float: left;
	  }
	  .fz14 {
		font-size: 14px;
	  }
	  .top50 {
		top: 31px;
		left: -19px;
	  }
	  .successmsg {
		font-size: 14px;
		padding: 10px;
		color: green;
		width: 100%;
		text-align: center;
		position: absolute;
		top: -82px;
	  }
	  .fileuploadlist {
		margin: 0;
		padding: 0;
	  }
	  .fileuploadlist li {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style: none;
		margin-bottom: 10px;
	  }
	  .fileuploadlist li a {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
		text-transform: capitalize;
	  }
	  .pointer {
		cursor: pointer;
	  }
	  .cross img {
		height: 10px;
	  }
	  .listdata {
		width: 100%;
		max-width: calc(100% - 100px);
		position: absolute;
		bottom:12px;
		left:77px;
		background-color: #fff;;
		z-index: 9999999;
	  }
	  .mflex{
		display: flex;
		background: #fff;
		align-items: center;
		max-width: calc(100% - 100px);
	  }
	  .top5{
		top:12px;
		position: relative;
	  }
	  .getData{
		top:5px;
	  }
	  .settingoption {
		width: 50px;
	  }
	  .icons {
		width: 20px;
		height: 20px;
		border-radius: 3px;
	  }
	  .checkbox {
		display: flex;
		align-items: center;
		margin: 10px 0;
	  }
	  .styled-checkbox {
		position: absolute;
		opacity: 0;
	  }
	  .styled-checkbox+span {
		position: relative;
		cursor: pointer;
		padding: 0;
	  }
	  .styled-checkbox+span:before {
		content: "";
		margin-right: 10px;
		display: inline-block;
		vertical-align: text-top;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
	  }
	  .styled-checkbox:checked+span:after {
		content: "";
		position: absolute;
		left: 5px;
		top: 2px;
		height: 9px;
		width: 5px;
		border: solid #09b4bd;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
	  .procesbar {
		background: #ccc;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	  }
	  .progressContainer {
		width: 100%;
		position: relative;
		top:16px;
	  }
	  .z9 {
		z-index: 99;
		position: relative;
	  }
	  .w79 {
		width: 82%;
	  }
	  .uploadicon {
		padding: 10px;
	  }
	  .w-100 {
		width: 100%;
	  }
	  .mb-5 {
		margin-bottom: 3rem!important
	  }
	  .form-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -5px;
		margin-left: -5px;
	  }
	  .col-12 {
		flex: 0 0 100%;
		max-width: 100%;
	  }
	  .mb-0 {
		margin-bottom: 0px!important;
	  }
	  .form-row>.col, .form-row>[class*=col-] {
		padding-right: 5px;
		padding-left: 5px;
	  }
	  .d-flex {
		display: flex;
	  }
	  .position-relative {
		position: relative;
	  }
	  .border {
		border: 1px solid #dee2e6!important
	  }
	  .flex-column {
		flex-direction: column
	  }
	  .align-content-around {
		align-content: space-around
	  }
	  .bg-success {
		background-color: #28a745!important;
	  }
	  .bg-danger {
		background-color: #dc3545!important;
	  }
	  .justify-content-center {
		-webkit-box-pack: center!important;
		-ms-flex-pack: center!important;
		justify-content: center!important;
	  }
	  .float-right {
		float: right!important;
	  }
	  .justify-content-between {
		-webkit-box-pack: justify!important;
		-ms-flex-pack: justify!important;
		justify-content: space-between!important;
	  }
	  .floating-border{
		border:1px solid #ccc;
		padding: 15px !important;
		position: relative;
	  }
	`]
    })
], SinglefileuploadComponent);

let SinglefileuploadModule = class SinglefileuploadModule {
};
SinglefileuploadModule = __decorate([
    NgModule({
        declarations: [SinglefileuploadComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [SinglefileuploadComponent]
    })
], SinglefileuploadModule);

let ImagecropComponent = class ImagecropComponent {
    constructor(http, _http) {
        this.http = http;
        this._http = _http;
        this.url = 'http://api.aaadev.info/apinext/uploader/uploadnew';
        this.path = 'http://apinext.aaadev.info/media/';
        this.OnSaveFile = new EventEmitter;
        this.showModel = false;
        this.showImg = false;
        this.cropBtn = false;
        this.camcropBtn = false;
        this.snapPhoto = false;
        this.showUplaod = false;
        this.avtarImage = false;
        this.imagePath = 'assets/avatar.png';
        this.captures = [];
    }
    ngOnInit() {
        this.dataApi = JSON.parse(localStorage.getItem('Session.DataApi'));
        $('#cropbtn_cam').hide();
        $('#video').hide();
        $('#preview').show();
        if (this.value == '0') {
            this.imagePath = 'assets/img/cropimage/avatar.png';
        }
        else {
            this.DataDB(this.dataApi.DataFiles.DataBase, this.dataApi.DataFiles.Schema, 'FILES_Retrieve', { FilesId: this.value }).subscribe(((files) => {
                if (!(files == undefined || files == null || files == '') && files.length > 0) {
                    var urlImages = files[0].FileUrl.split('\\');
                    this.imagePath = this.path + files[0].FileUrl;
                }
            }), ((error) => {
                alert(error);
                console.log(error);
            }));
        }
        this.videos = this.video == undefined || this.video == null ? null : this.video.nativeElement;
    }
    ngAfterViewInit() {
        // const _video = this.video.nativeElement;
        // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        //   navigator.mediaDevices.getUserMedia({ video: true })
        //     .then(stream => {
        //       _video.srcObject = stream;
        //       _video.play();
        //     });
        // }
    }
    start() {
        this.initCamera({ video: true, audio: false });
    }
    sound() {
        this.initCamera({ video: true, audio: true });
    }
    initCamera(config) {
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia(config).then(stream => {
            //this.videos.src = window.URL.createObjectURL(stream);
            //this.video.play();
            this.videos.srcObject = stream;
            this.videos.play();
        }, error => {
            alert(error.message);
        });
    }
    modelBox() {
        this.showModel = true;
        this.showUplaod = false;
        $('.crophide').hide();
    }
    closeModel() {
        document.getElementById("upload").value = '';
        let crimg = $('#cimgdiv').croppie('destroy');
        $('#preview').croppie('destroy');
        $('#cimgdiv').hide();
        $('.ddswhd').show();
        $('#cropbtn').show();
        $('#camswhi').show();
        $('#cropbtn').hide();
        $('#preview').hide();
        $('#video').hide();
        this.cropBtn = false;
        this.camcropBtn = false;
        this.snapPhoto = false;
        this.showModel = false;
        this.showUplaod = false;
    }
    capture() {
        $('#cimgdiv').croppie('destroy');
        $('#video').croppie('destroy');
        this.captures = [];
        this.camcropBtn = true;
        this.snapPhoto = false;
        const context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
        $('#video').hide();
        $('#cimgdiv').show();
        $('.savebtn').show();
        $('.snapPic').hide();
        $('#cropbtn').hide();
        this.imageName = "Capture.png";
        const crimg = $('#cimgdiv').croppie({
            enableExif: true,
            viewport: { width: 160, height: 160, type: 'circle' },
            boundary: {
                width: '100%',
                height: 200
            }
        });
        crimg.croppie('bind', {
            url: this.canvas.nativeElement.toDataURL('image/png'),
            circle: true,
        });
    }
    cropcam() {
        $('.htmlbinds1').attr('src', '');
        $('.crophide').show();
        this.camcropBtn = false;
        $('#cimgdiv').croppie('result', { circle: true, }, 'html').then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(res => {
            this.captureImage = res;
        });
        $('#cimgdiv').hide();
        this.showUplaod = true;
    }
    snapPhotoEvt() {
        this.start();
        $('#video').show();
        this.snapPhoto = true;
        $('#camswhi').hide();
        $('#htmlbinds, #preview').hide();
    }
    fileChangeEvent(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $('#cropbtn').show();
            $('.ddswhd').hide();
            this.cropBtn = true;
            const reader = new FileReader();
            $('#preview').attr('src', '');
            reader.onload = function (e) {
                $('#preview').attr('src', e.target.result);
                var crop = $('#preview').croppie({
                    enableExif: true,
                    viewport: {
                        width: 160,
                        height: 160,
                        type: 'circle'
                    },
                    boundary: {
                        width: '100%',
                        height: 200
                    }
                });
                crop.croppie('bind', {
                    url: e.target.result
                });
            };
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    }
    crop() {
        $('.crophide').show();
        $('.htmlbinds1').attr('src', '');
        $('#preview').croppie('result', { circle: true }, 'html')
            .then(function (html) {
            $('.htmlbinds1').attr('src', html);
            return html;
        })
            .then(res => {
            this.captureImage = res;
        });
        $('#preview').croppie('destroy');
        $('#preview').hide();
        $('#cropbtn').hide();
        this.showUplaod = true;
    }
    upload() {
        var block = this.captureImage.split(";");
        var contentType = block[0].split(":")[1]; // In this case "image/gif"
        var realData = block[1].split(",")[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."
        var blob = b64toBlob(realData, contentType);
        var formData = new FormData();
        formData.append('file', blob, this.imageName);
        formData.append('id', this.value);
        formData.append('filegroupid', this.value);
        formData.append('mediaType', 'profilepic');
        formData.append('description', this.imageName);
        // (document.getElementById("upload") as HTMLTextAreaElement).value = '';
        // $('.htmlbinds').attr('src', '')
        // this.avtarImage = true
        // $('#cimgdiv').hide();
        // $('#cimgdiv').hide();
        // $('.ddswhd').show();
        // $('#cropbtn').show();
        // $('#camswhi,.hide').show();
        // $('#cropbtn').hide();
        // $('#preview').hide();
        // $('#video').hide();
        // this.cropBtn = false;
        // this.camcropBtn = false;
        // this.snapPhoto = false;
        // this.showModel = false;
        // this.showUplaod = false;
        // $('.htmlbinds').attr('src', this.captureImage)
        this.http.post(this.url, formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                //this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                document.getElementById("upload").value = '';
                $('.htmlbinds').attr('src', '');
                this.avtarImage = true;
                $('#cimgdiv').hide();
                $('#cimgdiv').hide();
                $('.ddswhd').show();
                $('#cropbtn').show();
                $('#camswhi,.hide').show();
                $('#cropbtn').hide();
                $('#preview').hide();
                $('#video').hide();
                this.cropBtn = false;
                this.camcropBtn = false;
                this.snapPhoto = false;
                this.showModel = false;
                this.showUplaod = false;
                $('.htmlbinds').attr('src', this.captureImage);
                this.OnSaveFile.emit({ event });
            }
        });
        function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
    }
    DataDB(database, schema, procedureName, params = {}) {
        var sqlInit = this.dataApi.ApiUrl + 'Data/Exec/';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var urlQuery = sqlInit + database + '/' + schema + '/' + procedureName + '?api_key=' + this.dataApi.AccessToken;
        return this._http.post(urlQuery, params, { headers: headers }).map(((response) => response.json())).catch(this.errorHandler);
    }
    errorHandler(error) {
        return Observable.throw(error || 'SERVER ERROR');
    }
};
ImagecropComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: Http }
];
__decorate([
    ViewChild('video')
], ImagecropComponent.prototype, "video", void 0);
__decorate([
    ViewChild('canvas')
], ImagecropComponent.prototype, "canvas", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "title", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "height", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "width", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "value", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "url", void 0);
__decorate([
    Input()
], ImagecropComponent.prototype, "path", void 0);
__decorate([
    Output()
], ImagecropComponent.prototype, "OnSaveFile", void 0);
ImagecropComponent = __decorate([
    Component({
        selector: 'sml-imagecrop',
        template: `
  <div class="homewrap">
  <div class="head_sec">
    <div class="relativeLeft">{{ title }}</div>
    <div class="relativeUser">
      <div class="user_DP  d-flex justify-content-center align-items-center" [ngStyle]="{'height.px': height,'width.px': width}">
        <img src="{{ imagePath }}" [ngClass]="{'avatar1': imagePath != '' && imagePath != 'assets/img/cropimage/avatar.png'}" onerror="this.onerror=null; this.src='assets/img/cropimage/avatar.png'" class="avatar" *ngIf="!avtarImage">
        <img class="htmlbinds" src="">
        <div class="camera_w" (click)="modelBox()">
          <img src="./assets/whitecamara.png">
        </div>
      </div>
    </div>
  </div>
  <div [class.showModel]="showModel" class="model_wrap position-fixed w-100 h-100">
    <div class="overlay"></div>
    <div class="model_content bg-white position-relative">
      <div (click)="closeModel()" class="position-absolute times">&times;</div>
      <div class="dandd_wrap d-flex flex-column ">
        <div class="model_header text-center mb-4">
          <span class="d-inline-block hea
            d_text">Change Profile Pic</span>
        </div>
        <div class="imgdar mb-2">
          <div class="imgd_area ddswhd text-center d_flex flex-column align-items-center justify-content-center" id="camswhi">
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center mb-1">
              <img src="./assets/cloud-upload-arrow.svg">
              <span class="text-black-50 fz11 mb-1">Drag & Drop</span>
              <input type="file" class="file_input" id="upload" (change)="fileChangeEvent($event)" accept="image/*">
              <span class="text-black-50 fz11 mb-1">or</span>
              <button class="btn btn-sm cst_btn ins_md_btn mbtn">Upload Photo</button>
            </div>
            <span class="text-black-50 fz11 mb-1">or</span>
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center cursor-pointer" (click)="snapPhotoEvt()">
              <img src="./assets/photo-camera.svg">
              <span class="text-black-50 fz11">Snap Photo</span>
            </div>
          </div>
          <div class="text-center w-100 float-left">
            <img id="preview" src="" class="w-100">
          </div>
          <div class="w-100 text-center">
            <img class="htmlbinds1 crophide" src="">
          </div>
          <!-- camera -->
          <div class="w-100">
            <video #video id="video" width="100%" height="200" autoplay></video>
          </div>
          <div class="w-100">
            <canvas #canvas id="canvas" width="640" height="480" style="display:none"></canvas>
          </div>
          <div id="cimgdiv" class="w-100"></div>
          <div id="htmlbind" class="saved_img text-center"></div>
          <!-- camera -->
        </div>
        <div *ngIf="snapPhoto" class="text-center mb-2">
          <button class="btn px-4 btn-sm cst_btn mbtn" (click)="capture()">Snap photo</button>
        </div>
        <div *ngIf="cropBtn" class="text-center mb-2 mt-2" id="cropbtn">
          <button (click)="crop()" class="btn px-4 btn-sm cst_btn">Crop</button>
        </div>
        <div *ngIf="camcropBtn" class="text-center mb-2">
          <button (click)="cropcam()" class="btn px-4 btn-sm cst_btn mbtn mt-2">Crop</button>
        </div>
        <div class="d-flex justify-content-center" [ngClass]="{'justify-content-between': showUplaod}">
          <button (click)="closeModel()" style="background: gainsboro;" class="btn btn-sm mbtn px-4">Cancel</button>
          &nbsp;
          <button *ngIf="showUplaod" class="btn btn-sm btn-info bgc_blue px-4 mbtn" (click)="upload()">Upload</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
        styles: [`
  .homewrap {
    height: auto;
    width: 100%
}
.head_sec {
    background-color: #fff;
    width: 100%;
    min-height: auto;
}
.camera_w {
    position: absolute;
    height: 100%;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s
}
.camera_w img {
    width: 26px;
}
.user_DP {
    width: 100px;
    height: 100px;
    border: 1px solid #d6d6d6;
    border-radius: 100%;
    background-color: #f8f8f8;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    overflow: hidden;
}
.user_DP:hover .camera_w {
    visibility: visible;
    opacity: 1;
    top: 0
}
.avatar {
    width: 60px;
}
.avatar1 {
  width: 120px !important;
}
.overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.times {
    color: lightgray;
    font-size: 30px;
    right: 10px;
    top: 0;
    line-height: 30px;
    cursor: pointer;
}
.ins_md_btn {
    width: 86px;
    padding: 4px 0;
    font-size: 11px
}
.text-black-50 {
    color: #a6a9ab;
}
.btn_select_group .btn {
    padding: 8px 16px
}
.model_wrap {
    display: none;
    top: 0;
    left: 0;
    z-index: 9;
}
.model_content {
    width: 320px;
    min-height: 400px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
    border-radius: 4px;
    padding: 30px;
    box-shadow: 0 3px 6px #464545
}
.head_text {
    color: #038888;
    position: relative;
    font-size: 18px;
    padding: 6px 0
}
.head_text::after {
    content: '';
    display: block;
    width: 40%;
    height: 1px;
    background-color: #038888;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.imgd_area {
    height: 200px;
    width: 200px;
    border: 2px dashed #ccc;
    margin: 0 auto;
    border-radius: 100%;
    overflow: hidden;
}
.imgd_area img {
    width: 27px;
}
.file_input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0
}
.cst_btn {
    background-color: #00acac;
    color: #fff;
}
.bgc_blue {
    background-color: #6ba3e2
}
.fz13 {
    font-size: 13px;
}
.fz11 {
    font-size: 11px;
}
.showModel {
    display: block;
}
.d_flex {
    display: flex;
}
.camera_H {
    display: none
}
.camera_D {
    display: block
}
.imgdar {
    height: 247px;
}
.hide {
    display: none;
}
.htmlbinds:nth-child(2) {
    display: none;
}
.htmlbinds {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.relativeLeft {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
}
.relativeUser {
    display: block;
    padding-top: 15px;
    padding-bottom: 15px;
}
.mbtn {
    font-size: 12px;
}
.d-flex {
    display: -webkit-box!important;
    display: -ms-flexbox!important;
    display: flex!important;
}
.flex-column {
    -webkit-box-orient: vertical!important;
    -webkit-box-direction: normal!important;
    -ms-flex-direction: column!important;
    flex-direction: column!important;
}
.position-relative {
    position: relative!important;
}
.w-100 {
    width: 100%;
}
.h-100 {
    height: 100%!important;
}
.position-fixed {
    position: fixed!important;
}
.bg-white {
    background-color: #fff!important;
}
.position-absolute {
    position: absolute!important;
}
.btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    font-size: 12px !important;
}
.btn-sm {
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
}
.justify-content-center {
    -webkit-box-pack: center!important;
    -ms-flex-pack: center!important;
    justify-content: center!important;
}
  `]
    })
], ImagecropComponent);

let ImagecropModule = class ImagecropModule {
};
ImagecropModule = __decorate([
    NgModule({
        declarations: [ImagecropComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [ImagecropComponent]
    })
], ImagecropModule);

let TableComponent = class TableComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.obj = { border: 0 };
        this.id = 'sml-datatable';
        this.width = '';
        this.height = '';
        this.minwidth = 700;
        this.isfixedheight = false;
        this.scrollX = false;
        this.screenWidth = 0;
    }
    ngOnInit() {
        this.interSmlTable = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }
    ngOnDestroy() {
        if (this.interSmlTable) {
            clearInterval(this.interSmlTable);
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.screenWidth = $('.' + this.id).width();
        this.width = width;
        let t_height = $("#y-" + this.id).height();
        if (t_height < 90) {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'inherit');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'inherit');
        }
        else {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'hidden');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'overlay');
        }
    }
};
TableComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TableComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableComponent.prototype, "isfixedheight", void 0);
__decorate([
    Input()
], TableComponent.prototype, "scrollX", void 0);
TableComponent = __decorate([
    Component({
        selector: 'sml-table',
        template: `
  <div class="table-100 {{id}}">
	<div>
		<ng-content select="sml-table-header"></ng-content>
  </div>
  <div id="x-{{id}}" [ngStyle]="{'width': screenWidth + 'px', 'overflow-x' : scrollX ? 'auto' : 'none' }" >
	<table class="table table-bordered h-auto" [ngClass]="{'over-flow': !isfixedheight}"
		[style.width]="width + 'px'" [style.max-height]="height + 'px'" border="{{obj?.border}}">
		<thead>
			<tr>
				<ng-content select="sml-table-column"></ng-content>
			</tr>
		</thead>
		<tbody id="y-{{id}}"  class="h-auto sml-table-scroll-y" [style.max-height]="height + 'px'">
			<ng-content select="sml-table-body"></ng-content>
		</tbody>
  </table>
  </div>
	<div>
		<ng-content select="sml-table-footer"></ng-content>
	</div>
</div>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  :host{--c-scroll-value-nonhideen:'hidden';--c-scroll-value-hideen:'overlay';}
  :host /deep/ sml-table-column{display:contents;}
  :host /deep/ sml-table-body{display:contents;}
  :host /deep/ sml-table-footer-pagination{float:right;}
  .over-flow{overflow:hidden !important;}
  .table-bordered{border-bottom:1px solid #dee2e6 !important;border-top:none !important;border-left:none !important;border-right:none !important;}
   thead{display:block;}
   tbody{display:block;}
  .table-100{width:100%;}
  .h-auto{height:auto !important;}
  .sml-table-scroll-y{overflow-y:var(--c-scroll-value-nonhideen);overflow-x:var(--c-scroll-value-nonhideen);}
  .sml-table-scroll-y:hover{overflow-y:var(--c-scroll-value-hideen);}
  .sml-table-scroll-y::-webkit-scrollbar{width:8px;background-color:#fbfbfb;}
  .sml-table-scroll-y::-webkit-scrollbar-track{width:3px;background:rgba(222, 222, 222, .75);}
  .sml-table-scroll-y::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, .5);border-radius:4px;}
  `]
    })
], TableComponent);

let ColumnComponent = class ColumnComponent {
    constructor() {
        this.name = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.headerStyle = {};
        this.alignment = {};
        this.sortClick = new EventEmitter;
        this.table_width = 0;
    }
    ngOnInit() {
        for (var key in this.obj) {
            this.obj[key]['isDisplay'] = true;
            if (!this.obj[key]['isRemoved']) {
                this.obj[key]['isRemoved'] = false;
            }
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.table_width = width;
        this.resizeColumn();
    }
    resizeColumn() {
        let temp = [];
        let temp1 = [];
        let totalSum = 0;
        let totalMinwidth = 0;
        for (var key in this.obj) {
            temp.push(this.obj[key]);
            if (this.obj[key]['isDisplay']) {
                let w = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                totalSum = totalSum + parseInt(w);
                if (!this.obj[key].isFixedWidth) {
                    if (this.obj[key].minWidth) {
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                    else {
                        this.obj[key]['minWidth'] = 100;
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                }
                else {
                    let mw = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                    totalMinwidth = totalMinwidth + parseInt(mw);
                    this.obj[key]['minWidth'] = this.obj[key].width;
                }
            }
            let nType = {
                key: key,
                isRemoved: this.obj[key]['isRemoved'],
                isDisplay: this.obj[key]['isDisplay'],
                index: this.obj[key]['index'],
                minWidth: this.obj[key]['minWidth']
            };
            temp1.push(nType);
        }
        let sel1 = temp.filter(d => !d.isFixedWidth);
        let sel2 = temp.filter(d => d.isFixedWidth);
        if (this.table_width > totalSum) {
            let diff = ((this.table_width - totalSum) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                sel1[j].width = parseInt(w) + diff;
            }
        }
        if (this.table_width < totalSum) {
            let diff = ((totalSum - this.table_width) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                let set = parseInt(w) - diff;
                if (set >= sel1[j].minWidth) {
                    sel1[j].width = set;
                }
            }
        }
        if (this.table_width < totalMinwidth) {
            let sel_A = temp1.filter(d => (d.isDisplay && d.isRemoved));
            if (sel_A.length > 0) {
                this.obj[sel_A[0].key]['isDisplay'] = false;
            }
            else {
                let sel_B = temp1.filter(d => (d.isDisplay && !d.isRemoved));
                if (sel_B.length > 0) {
                    let index = (sel_B.length - 1);
                    this.obj[sel_B[index].key]['isDisplay'] = false;
                }
            }
        }
        else {
            let sel_C = temp1.filter(d => (!d.isDisplay && !d.isRemoved));
            if (sel_C.length > 0) {
                let index = 0;
                let diff = this.table_width - totalMinwidth;
                if (diff >= sel_C[index]['minWidth']) {
                    this.obj[sel_C[index].key]['isDisplay'] = true;
                }
            }
            else {
                let sel_D = temp1.filter(d => (!d.isDisplay && d.isRemoved));
                if (sel_D.length > 0) {
                    let index = (sel_D.length - 1);
                    let diff = this.table_width - totalMinwidth;
                    if (diff >= sel_D[index]['minWidth']) {
                        this.obj[sel_D[index].key]['isDisplay'] = true;
                    }
                }
            }
        }
    }
    sort() {
        let nType = {
            name: this.name,
            orderby: this.obj[this.name].orderBy
        };
        for (var key in this.obj) {
            if (key == this.name) {
                this.obj[this.name].isCurrent = true;
            }
            else {
                this.obj[key].isCurrent = false;
            }
        }
        this.sortClick.emit(nType);
    }
};
__decorate([
    Input()
], ColumnComponent.prototype, "name", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "width", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "id", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "headerStyle", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], ColumnComponent.prototype, "sortClick", void 0);
ColumnComponent = __decorate([
    Component({
        selector: 'sml-table-column',
        template: `
  <th *ngIf="obj[name].isDisplay" [style.width]="obj[name].width + 'px'"  [style.max-width]="obj[name].width + 'px'"  [style.min-width]="obj[name].width + 'px'"    [style.text-align]="obj[name].columnDefinatinAlignment" (click)="sort()"
	[ngStyle]="headerStyle">
	{{obj[name].title}}
	<div [ngClass]="{'sort_icon_divl': obj[name].columnDefinatinAlignment != 'right','sort_icon_divr': obj[name].columnDefinatinAlignment == 'right' }"
		class="sort_icon_div">
		<div class="hi-0">
			<i class="fa fa-sort-asc sort_icon_asc cog-lightblue"
				*ngIf="obj[name].orderBy == 'ASC' && obj[name].isCurrent"></i>
		</div>
		<div>
			<i class="fa fa-sort-desc cog-lightblue" *ngIf="obj[name].orderBy == 'DESC' && obj[name].isCurrent"></i>
		</div>
	</div>
</th>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  th{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}
  .hi-0{height: 0px;}
  .sort_icon_divl {display: inline-block;float: right;}
  .sort_icon_divr {display: inline-block;float: left;}
  .cog-lightblue{color:lightblue;}
  `]
    })
], ColumnComponent);

let HeaderComponent = class HeaderComponent {
    constructor() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includesearch = true;
        this.includecount = true;
        this.display = true;
        this.alignment = {};
        this.changerowcount = new EventEmitter;
        this.searchRecord = new EventEmitter;
        //##########RowCountDropdown################
        this.textObj = {
            name: 'search',
            placeholder: 'Search..',
            value: ''
        };
        this.drpObj = {
            drpDataList: [
                { id: '25', name: 'Show 25 entries' },
                { id: '50', name: 'Show 50 entries' },
                { id: '100', name: 'Show 100 entries' }
            ],
            selectedValue: '25',
        };
    }
    ngOnInit() {
    }
    changeRowDisplayCount(event) {
        this.changerowcount.emit(event);
    }
    searchClick(event) {
        this.searchRecord.emit(event);
    }
};
__decorate([
    Input()
], HeaderComponent.prototype, "width", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "maxwidth", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "includesearch", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "includecount", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "display", void 0);
__decorate([
    Input()
], HeaderComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], HeaderComponent.prototype, "changerowcount", void 0);
__decorate([
    Output()
], HeaderComponent.prototype, "searchRecord", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'sml-table-header',
        template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12" *ngIf="alignment.searchposition != 'right' ||  alignment.show25 != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
        </div>
        <div class="col-md-12" *ngIf="alignment.searchposition == 'right' &&  alignment.show25 == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
        </div>
    </div>
</div>
<ng-template #headerReamaingContent>
    <ng-content></ng-content>
</ng-template>
  `,
        styles: [`
    .dis-block{display: inline-block;min-width: 200px;}
    .f-l{float: left;}
    .f-r{float: right;}
    .pl-5{padding-left: 5px !important;}
    .pr-5{padding-right: 5px !important;}
  `]
    })
], HeaderComponent);

let FooterComponent = class FooterComponent {
    constructor() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includepagecount = true;
        this.includepagination = true;
        this.display = true;
        this.totalcount = 0;
        this.recordcount = 0;
        this.pagesize = 0;
        this.page = 1;
        this.alignment = {};
        this.changepage = new EventEmitter();
    }
    ngOnInit() {
    }
    pageNumberUpdate(event) {
        this.changepage.emit(event);
    }
};
__decorate([
    Input()
], FooterComponent.prototype, "obj", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "width", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "maxwidth", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "includepagecount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "includepagination", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "display", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "totalcount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "recordcount", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "pagesize", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "page", void 0);
__decorate([
    Input()
], FooterComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], FooterComponent.prototype, "changepage", void 0);
FooterComponent = __decorate([
    Component({
        selector: 'sml-table-footer',
        template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12"
            *ngIf="alignment.showposition != 'right' ||  alignment.showpaginationposition != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8" style="font-size:9pt;">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
        </div>
        <div class="col-md-12"
            *ngIf="alignment.showposition == 'right' &&  alignment.showpaginationposition == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
        </div>
    </div>
</div>
  `,
        styles: [`
  .dis-block{
    display: inline-block;
}
.f-l{
    float: left;
}
.f-r{
    float: right;
}
.pt-8{
    padding-top: 8px;
}
.pl-5{
    padding-left: 5px !important;
}
.pr-5{
    padding-right: 5px !important;
}
  `]
    })
], FooterComponent);

let PaginationComponent = class PaginationComponent {
    constructor() {
        this.clickPage = new EventEmitter();
        this.noItems = [];
        this.paginators = 5;
    }
    ngOnInit() {
        this.setPaginator(this.noPage);
    }
    setPaginator(n) {
        var result = this.totalRecords / this.pageSize;
        var noItems = Math.trunc(result);
        noItems = noItems + ((result > noItems) ? 1 : 0);
        this.nItem = noItems;
        var lastItem = this.noItems[4];
        var firstItem = this.noItems[0];
        var init = 0;
        var last = 0;
        this.noItems = [];
        if (n == 1) {
            if (this.nItem > this.paginators) {
                init = 1;
                last = this.paginators + 1;
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        else {
            if (this.nItem > this.paginators) {
                if (this.nItem == lastItem) {
                    if (n == (lastItem - this.paginators + 1)) {
                        if (n > 1) {
                            init = firstItem - 1;
                            last = lastItem;
                        }
                        else {
                            init = 1;
                            last = this.paginators + 1;
                        }
                    }
                    else {
                        init = firstItem;
                        last = lastItem + 1;
                    }
                }
                else {
                    if (n == 1) {
                        init = 1;
                        last = this.paginators + 1;
                    }
                    else {
                        init = n - 1;
                        last = this.paginators + init;
                    }
                }
                if ((last - 1) > this.nItem) {
                    last = this.nItem + 1;
                    init = last - this.paginators;
                }
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        for (var i = init; i < last; i++) {
            this.noItems.push(i);
        }
    }
    changePage(n) {
        this.noPage = n;
        this.clickPage.emit(n);
    }
};
__decorate([
    Input()
], PaginationComponent.prototype, "totalRecords", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "noPage", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Output()
], PaginationComponent.prototype, "clickPage", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'sml-table-footer-pagination',
        template: `
	<ul class="pagination">
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == 1 }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(1);">«</a>
  </li>
  <li *ngFor="let item of noItems" class="page-item"
    [ngClass]="{ 'active' : item == noPage, 'disabled' : item == noPage }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(item);">{{ item }}</a>
  </li>
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == nItem }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(nItem);">»</a>
  </li>
</ul>
	`,
        styles: [`.page-link{font-size:9pt !important}`]
    })
], PaginationComponent);

let TableBodyComponent = class TableBodyComponent {
    constructor() {
        this.data = [];
        this.dropdownButtons = [];
        this.dropdownButtonsList = false;
        this.columns = [];
        this.rowstyle = {};
        this.alignment = {};
        this.height = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.isLoading = false;
        this.dropdownButtonStyle = {};
        this.actionClick = new EventEmitter;
        this.valueClick = new EventEmitter;
        this.textBoxEvent = new EventEmitter;
        this.dropdownButton = [];
    }
    ngOnInit() { }
    onResize(event) {
        let width = $('.' + this.id).width();
        // if (width > parseInt(this.minwidth)) {
        this.width = width;
        // }
    }
    trackByIndex(index) {
        return index;
    }
    trackByIndex1(index) {
        return index;
    }
    clickMethod(actionType, row) {
        let nType = {
            actionName: actionType,
            item: row
        };
        this.actionClick.emit(nType);
    }
    columnClick(row, col) {
        let nType = {
            row: row,
            column: col
        };
        if (!this.obj[col].isHtml) {
            this.valueClick.emit(nType);
        }
        if (this.obj[col].isHtml && this.obj[col].isCheckbox) {
            this.valueClick.emit(nType);
        }
    }
    textBoxMethod(row, col, type) {
        let nType = {
            row: row,
            type: type,
            column: col,
        };
        this.textBoxEvent.emit(nType);
    }
};
__decorate([
    Input()
], TableBodyComponent.prototype, "data", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtons", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonsList", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "columns", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "rowstyle", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "alignment", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonStyle", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "actionClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "valueClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "textBoxEvent", void 0);
TableBodyComponent = __decorate([
    Component({
        selector: 'sml-table-body',
        template: `
  <tr *ngFor="let row of data;let index = index; trackBy: trackByIndex1" id="tr-{{id}}-{{index}}" [style.background]="index % 2 == 0 ? rowstyle.bgEven : rowstyle.bgOdd">
  <td *ngFor="let col of columns;let cindex = index; trackBy: trackByIndex" id="td-{{id}}-{{index}}-{{cindex}}"  (click)="columnClick(row,col)"  [style.width]="obj[col].width + 'px'"  [style.max-width]="obj[col].width + 'px'"  [style.min-width]="obj[col].width + 'px'"  [style.text-align]="alignment[col].columnDefinatinAlignment" [ngClass]="{'breakWord': obj[col].isFixedWidth , 'td_over': !obj[col].isHtml , 'pointer-cursor': obj[col]?.isColumnClick ,'dis-none': !obj[col].isDisplay }"  [ngStyle]="rowstyle">
    <span *ngIf="!obj[col].isHtml" style="white-space: pre-wrap; word-break: keep-all;">{{row[col]}}</span>
    <span *ngIf="obj[col].isHtml">
      <div *ngIf="!obj[col].isCheckbox && !obj[col].isImage && !obj[col].isTextbox">
        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && !obj[col].isSingleButton">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(dropdownButtons[0].Action,row);">
                {{ dropdownButtons[0].Title }}
            </div>
            <span *ngIf="dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && obj[col].isSingleButton">
          <div class="btn-group dropdown pad-r-2" *ngFor="let button of dropdownButtons;let i=index;">
              <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                  {{ button.Title }}
              </div>
          </div>
        </div>

        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == true && !obj[col].isSingleButton && row.dropdownButtons.length > 0">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(row.dropdownButtons[0].Action,row);">
                {{ row.dropdownButtons[0].Title }}
            </div>
            <span *ngIf="row.dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="row.dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of row.dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == true && obj[col].isSingleButton">
            <div class="btn-group dropdown pad-r-2" *ngFor="let button of row.dropdownButtons;let i=index;">
                <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </div>
            </div>
        </div>
      </div>
      <div *ngIf="obj[col].isCheckbox">
            <input type="checkbox" class="pointer-cursor" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
      <div *ngIf="obj[col].isImage">
          <img src="{{row[col]}}" style="width: 15px; height: 15px;" />
      </div>
      <div *ngIf="obj[col].isTextbox" style="text-align: center;">
          <input type="text" style="text-align: right;width: 80px;padding-right: 2px;"  (change)="textBoxMethod(row,col,'change')" (keydown)="textBoxMethod(row,$event,'keydown')"  (focus)="textBoxMethod(row,col,'focus')" (blur)="textBoxMethod(row,col,'blur')" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
    </span>
  </td>
</tr>
<tr *ngIf="isLoading">
  <td [attr.colspan]="columns.length" [style.width]="width + 'px'"  [style.max-height]="height + 'px'" class="text-center h-auto" >
      <img src="./assets/loading.gif" width="100" />
  </td>
</tr>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  td {
    padding-top: 1px;
    padding-bottom: 1px;
    vertical-align: middle !important;
  }
tr:hover{
  background: #FFFF00;
}
tr:last-child > td {
	border-bottom: 0 !important;
}
.td_over{
  overflow: hidden !important;
}
.dis-none{
  display:none !important;
}
.pad-r-2{
  padding-right:2px !important;
}
.breakWord{
  word-break: break-all !important;
}
.text-center{
    text-align: center;
}
.btn:focus {
    box-shadow: none !important;
}
.pointer-cursor {
    cursor: pointer !important;
}
.DropdownButtonLi {
    padding: 5px;
    cursor: pointer;
}
.DropdownButtonLi:hover {
    background-color:#e6e6e6;
}
.DropdownButton  {
    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
	-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));
	background:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
	background-color:#f9f9f9;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:0.8em;
	padding:3px 6px;
	text-decoration:none;
}
.DropdownButton:hover  {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #d6d6d6));
	background:-moz-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-webkit-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-o-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-ms-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:linear-gradient(to bottom, #e6e6e6 5%, #d6d6d6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#d6d6d6',GradientType=0);
	background-color:#e6e6e6;
}
.DropdownButtonUl {
	width: 100px;
    margin-left: -50%;
}
.DropdownButtonSpan {
	width: 23px;
    height: 23px;
    -moz-border-radius:3px;
	-webkit-border-radius:3px;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
    background-color: #f9f9f9;
    padding-left: 1px;
    margin-left: -2px;
    padding-top: 2px;
}
.DropdownButtonSpan:hover, .DropdownButtonSpan:active {
    background-color:#e6e6e6;
}
.dropdown-menu {
    min-width: 0px;
    font-size: 12px;
}
.h-auto{
  height: auto !important;
}
  `]
    })
], TableBodyComponent);

let SearchComponent = class SearchComponent {
    constructor() {
        this.value = '';
        this.searchClick = new EventEmitter();
        this.searchText = '';
    }
    ngOnInit() {
    }
    keyup(e) {
        if (e.keyCode === 13) {
            this.searchClick.emit(this.searchText);
        }
    }
};
__decorate([
    Input()
], SearchComponent.prototype, "value", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "name", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "width", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "searchClick", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'sml-table-header-search',
        template: `
  <div class="form-row align-items-center">
    <div class="col-md-12 col-12 mb-1">
        <input type="text" class="form-control h-39 smlSearch" [(ngModel)]="searchText" placeholder="{{placeholder}}"
            id="txt-{{name}}" name="txt-{{name}}" (keyup)="keyup($event)">
    </div>
</div>
  `,
        styles: [`
  .h-39{height: 39px;}
  .smlSearch{font-size: 9pt !important;border-radius:4px !important;border-color: #ccc !important}
  .smlSearch:focus{outline: none;box-shadow: none;}
  `]
    })
], SearchComponent);

let CountComponent = class CountComponent {
    constructor() {
        this.changevalue = new EventEmitter;
    }
    ngOnInit() {
    }
    getselectvalue(event) {
        this.changevalue.emit(event.id);
    }
};
__decorate([
    Input()
], CountComponent.prototype, "listValue", void 0);
__decorate([
    Input()
], CountComponent.prototype, "value", void 0);
__decorate([
    Output()
], CountComponent.prototype, "changevalue", void 0);
CountComponent = __decorate([
    Component({
        selector: 'sml-table-header-count',
        template: `
  <div class="form-row align-items-center">
    <div class="col-md-12 col-12 mb-1" style="padding-right:4px !important;">
    <ng-select [items]="listValue" [searchable]="false" [clearable]="false" bindLabel="name" bindValue="id" (change)="getselectvalue($event)" [(ngModel)]="value">
    </ng-select>
    </div>
   </div>`,
        styles: [`
    :host /deep/ .ng-select.ng-select-single .ng-select-container {height: 39px !important;}
    :host /deep/ .ng-select:focus{outline: none !important;box-shadow: none !important;}
    :host /deep/ .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{font-size: 9pt !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value {font-size: 9pt !important;}
    .labelList{font-size:14px !important;position:relative;}
    .w-100{width:100%;}
    .mb-5{margin-bottom:3rem!important}
    .form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;}
    .col-12{flex:0 0 100%;max-width:100%;}
    .mb-0{margin-bottom:0px!important;}
    .form-row>.col, .form-row>[class*=col-]{padding-right:5px;padding-left:5px;}
    .d-flex{display:flex;}
    .statusIcon img{width:16px;}
    .statusIcon{display:none;position:absolute;right:28px;top:0}
    .invalidStatus .statusIcon, .validStatus .statusIcon{display:block}
    .floating{border:1px solid #d6d6d6;border-radius:2px;position:relative;padding:2px 0 0 0;}
    .label{position:absolute;left:16px;top:50%;margin-bottom:0;transform:translateY(-50%);transition:all 0.1s;font-size:12px;}
    .showFloat:focus ~ .label, .select2-container--focus ~ .label, .select2-container--open + .label, .float .label{top:3px;-webkit-transform:translateY(0);transform:translateY(0);font-size:9px;left:12px;font-weight:bold;}
    .pl-0{padding-left:0px;}    
  `]
    })
], CountComponent);

let TableModule = class TableModule {
};
TableModule = __decorate([
    NgModule({
        declarations: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgSelectModule
        ],
        exports: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]
    })
], TableModule);

let NavbarComponent = class NavbarComponent {
    constructor() {
        this.iswelcome = 'false';
        this.navStyle = {
            logo: '/assets/logo.png'
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], NavbarComponent.prototype, "iswelcome", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "navStyle", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'sml-navbar',
        template: `
  <nav class="navbar navbar-expand-sm customNavbar position-relative"  [ngStyle]="navStyle">
  <a class="nav-link" routerLink="/dashboard">
    <img src="{{navStyle?.logo ? navStyle?.logo : '/assets/logo.png'}}" height="20" width="40"  alt="" class="logo">
  </a>
  <button class="navbar-toggler">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ng-content select="sml-navbar-menu"></ng-content>  
  <li class="positionRight nav-item dropdown profileUser" *ngIf="iswelcome == 'true'">
    <ng-content  select="sml-navbar-menu-profilemenu"></ng-content>
  </li>
</nav>
  `,
        styles: [`
  .positionRight{position: absolute; right:10px; list-style: none}
.customNavbar { background-color: #2d353c; }
.navbar{padding: 2px 1rem !important}
.nav-link { color: #ffffff; }
.logo { width: 40px }
  `]
    })
], NavbarComponent);

let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], MenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], MenuComponent.prototype, "menuStyle", void 0);
MenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu',
        template: `
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li *ngIf="link" class="nav-item active">
      <a class="nav-link" [ngStyle]="menuStyle" [routerLink]="link">{{label}}</a>
    </li>
    <li class="nav-item dropdown position-relative" *ngIf="link == undefined">
      <a href="javascript:void()" [ngStyle]="menuStyle" class="nav-link dropdown-toggle" data-toggle="dropdown">
        {{label}}
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu">
        <ng-content></ng-content>
      </ul>
    </li>
  </ul>
</div>
	`,
        styles: [`
	.nav-link {
		color: #ffffff;
	}
	
	.positionRight {
		position: absolute;
		right: 10px;
		list-style: none
	}
	.nav-link{font-size: 13px;}
	
	.dropdown-toggle{font-size: 13px;}
	
	.overlaybtn {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: none;
	}
	
	.dropdown-menu {
		z-index: 9999;
		left: 0;
		left: unset;
	}
	
	.nav-link {
		color: #ffffff;
	}
	
	.userIcon {
		margin-right: 12px
	}
	
	.userIcon img {
		width: 24px
	}
	
	.dropdown-toggle span,.dropdown-menu{font-size: 13px;}
	.dropdown-toggle::after{    top: 3px;
		position: relative;}
	`]
    })
], MenuComponent);

let SubmenuComponent = class SubmenuComponent {
    constructor() {
        this.actionClick = new EventEmitter;
    }
    ngOnInit() { }
    menuClick() {
        this.actionClick.emit();
    }
};
__decorate([
    Input()
], SubmenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], SubmenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], SubmenuComponent.prototype, "param", void 0);
__decorate([
    Input()
], SubmenuComponent.prototype, "submenuStyle", void 0);
__decorate([
    Output()
], SubmenuComponent.prototype, "actionClick", void 0);
SubmenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu-submenu',
        template: `
  <a *ngIf="link && param" class="dropdown-item" [routerLink]="[link,param]">{{label}}</a>
  <a *ngIf="link && param == undefined" class="dropdown-item" [routerLink]="link">{{label}}</a>
  <a *ngIf="link == undefined" (click)="menuClick()" class="dropdown-item">{{label}}</a>
`,
        styles: [`
  .overlaybtn {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    display: none;
}

.dropdown-menu {
    z-index: 9999;
    right: 0;
    left: unset;
}

.nav-link {
    color: #ffffff;
}

.userIcon {
    margin-right: 12px
}

.userIcon img {
    width: 24px
}

.dropdown-toggle span,.dropdown-menu{font-size: 13px;}
.dropdown-toggle::after{    top: 3px;
    position: relative;}
  `]
    })
], SubmenuComponent);

let ProfileMenuComponent = class ProfileMenuComponent {
    constructor() { }
    ngOnInit() { }
};
__decorate([
    Input()
], ProfileMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "imagepath", void 0);
__decorate([
    Input()
], ProfileMenuComponent.prototype, "menuStyle", void 0);
ProfileMenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu-profilemenu',
        template: `
	<div class="dropdown position-relative">
  <a class="nav-link dropdown-toggle" [ngStyle]="menuStyle" data-toggle="dropdown" href="javascript:void">
    <span class="userIcon">
      <img src="{{imagepath}}">
    </span>
    <span>{{label}}</span>
  </a>
  <div class="dropdown-menu">
    <ng-content></ng-content>
  </div>
</div>
	`,
        styles: [`
	.overlaybtn {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: none;
	}
	.dropdown-menu {
		z-index: 9999;
		right: 0;
		left: unset;
	}
	.userIcon {
		margin-right: 12px
	}
	.userIcon img {
		width: 24px
	}
	.dropdown-toggle span,.dropdown-menu{
		font-size: 13px;
	}
	.dropdown-toggle::after{    
		top: 3px;
		position: relative;
	}
	a {
		color: white;
	}
	`]
    })
], ProfileMenuComponent);

let ProfileSubMenuComponent = class ProfileSubMenuComponent {
    constructor() {
        this.menuClick = new EventEmitter;
    }
    ngOnInit() { }
    clickMenu() {
        this.menuClick.emit();
    }
};
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "label", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "link", void 0);
__decorate([
    Input()
], ProfileSubMenuComponent.prototype, "submenuStyle", void 0);
__decorate([
    Output()
], ProfileSubMenuComponent.prototype, "menuClick", void 0);
ProfileSubMenuComponent = __decorate([
    Component({
        selector: 'sml-navbar-menu-profilemenu-profilesubmenu',
        template: `
	<a *ngIf="link" class="dropdown-item" href="#" [ngStyle]="submenuStyle" [routerLink]="link">{{label}}</a>
	<a *ngIf="!link" class="dropdown-item" style="cursor: pointer;" [ngStyle]="submenuStyle" (click)="clickMenu()">{{label}}</a>
	`,
        styles: [`
	.overlaybtn {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
		display: none;
	}
	.dropdown-menu {
		z-index: 9999;
		right: 0;
		left: unset;
	}
	.userIcon {
		margin-right: 12px
	}
	.userIcon img {
		width: 24px
	}
	.dropdown-toggle span,.dropdown-menu{
		font-size: 13px;
	}
	.dropdown-toggle::after{    
		top: 3px;
		position: relative;
	}
	`]
    })
], ProfileSubMenuComponent);

let NavbarModule = class NavbarModule {
};
NavbarModule = __decorate([
    NgModule({
        declarations: [
            NavbarComponent,
            SubmenuComponent,
            MenuComponent,
            ProfileMenuComponent,
            ProfileSubMenuComponent
        ],
        imports: [
            CommonModule,
            RouterModule
        ],
        exports: [
            NavbarComponent,
            SubmenuComponent,
            MenuComponent,
            ProfileMenuComponent,
            ProfileSubMenuComponent,
        ]
    })
], NavbarModule);

let MultifileuploadComponent = class MultifileuploadComponent {
    constructor(http) {
        this.http = http;
        this.idInputFile = 'other';
        this.nameFiles = '';
        this.global_url = '';
        this.url = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://apinext.aaadev.info/';
        this.dataBase = 'APPS';
        this.moreData = false;
        this.fileResponse = new EventEmitter;
        this.afterEdit = new EventEmitter;
        this.editContent = false;
        this.datas = [];
        this.description = '';
        this.textdata = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    upload(files) {
        this.uploadAndProgress(files);
    }
    DeleteFIles(value) {
        this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken)
            .subscribe(res => {
            const body = {
                FilesGroupId: this.FilesGroupIdvalue
            };
            const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                this.datas = [];
                this.datas = res;
                for (let i = 0; i < this.datas.length; i++) {
                    let file_url = this.global_url + this.datas[i].FileUrl;
                    this.datas[i].FileUrl = file_url;
                }
                this.UploadedFileli = true;
            });
        });
    }
    ngOnInit() {
        this.getListdata();
    }
    getListdata() {
        this.http.get(this.url + "GetSystemInfo?passcode=flipper613")
            .subscribe(res => {
            this.GenericToken = res["GenericToken"];
            if (this.FilesGroupIdvalue) {
                const body = {
                    FilesGroupId: this.FilesGroupIdvalue
                };
                const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                    this.datas = res;
                    for (let i = 0; i < this.datas.length; i++) {
                        let file_url = this.global_url + this.datas[i].FileUrl;
                        this.datas[i].FileUrl = file_url;
                    }
                    this.UploadedFileli = true;
                });
            }
        });
    }
    uploadAndProgress(files) {
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('id', '0');
        formData.append('filegroupid', this.FilesGroupIdvalue);
        formData.append('mediaType', 'example');
        if (this.nameFiles != '') {
            formData.append('description', this.nameFiles);
        }
        else {
            formData.append('description', files[0].name);
        }
        this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.uploadSuccess = true;
                this.UploadedFileli = true;
                this.filename = event.body["Description"];
                this.filelink = this.fileurl + event.body["FileUrl"];
                this.fileResponse.emit(event.body);
                this.getListdata();
                setTimeout(() => {
                    this.uploadSuccess = false;
                    this.percentDone = 0;
                }, 3000);
            }
        });
    }
    edit(data, i) {
        this.textdata = data.Description;
        this.contentIndex = i;
        this.editContent = true;
    }
    updateName(id) {
        var url = this.url + "Models/Files?api_key=" + this.GenericToken;
        var body = {
            FilesId: id,
            Description: this.textdata
        };
        this.http.post(url, body).subscribe(res => {
            this.afterEdit.emit(res);
            this.getListdata();
            this.esc();
        });
    }
    esc() {
        this.editContent = false;
        this.contentIndex = null;
    }
};
MultifileuploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], MultifileuploadComponent.prototype, "idInputFile", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "label", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "nameFiles", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "global_url", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "dataBase", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "moreData", void 0);
__decorate([
    Input()
], MultifileuploadComponent.prototype, "styleZIndex", void 0);
__decorate([
    Output()
], MultifileuploadComponent.prototype, "fileResponse", void 0);
__decorate([
    Output()
], MultifileuploadComponent.prototype, "afterEdit", void 0);
MultifileuploadComponent = __decorate([
    Component({
        selector: 'sml-multifileupload',
        template: `
	<div class="w-100">
	<div class="form-row align-items-center">
		<label class="col-md-12 col-12 mb-0"></label>
		<div class="col-md-12 col-10 mb-0 floating-border" [ngStyle]="{'z-index': styleZIndex}">
			<label class="col-md-12 dropdownarea" for="{{idInputFile}}">
				<div class="d-flex w-100 flex-column">
					<input type="file" id="{{idInputFile}}" (change)="upload($event.target.files)" class="drag"
						[ngStyle]="{'height.px': height,'width.px': width}" />
					<div class="d-flex justify-content-between align-items-center w-100 flex-column">
						<div class="d-flex justify-content-between align-items-center">
							<span class="uploadicon"><img src="./assets/upload.png" /></span>
							<div class="d-flex flex-column position-relative w79">
								<div class="fz14">Choose a file or drag it here. <br /><span *ngIf="percentDone"> Upload
										Percent: {{percentDone}}%</span></div>
								<div class="progressContainer">
									<div class="procesbar"></div>
									<div class="w-100 z9" *ngIf="percentDone">
										<div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
									</div>
									<div *ngIf="uploadSuccess" class="successmsg">Upload Successful</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</label>
			<div class="listdata mt-1">
				<ul class="w-100 fileuploadlist" *ngIf="UploadedFileli">
					<li *ngFor="let data of datas; let i = index"
						class="w-100 d-flex justify-content-between align-content-around">
						<div class="w-100" *ngIf="contentIndex != i">
                            <a href="{{data.FileUrl}}" target="_blank" class="float-left" style="width: 30%;">{{data.Description}}</a>
                            <a *ngIf="moreData == true" class="float-left" style="width: 20%;">{{data.ChangedBy}}</a>
                            <a *ngIf="moreData == true" class="float-left" style="width: 30%;">{{data.ChangedOn}}</a>
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="edit(data,i)">
									<img src="./assets/pencil-edit-button.svg">
								</div>
								<div class="cross icons bg-danger pointer d-flex justify-content-center align-items-center"
									(click)="DeleteFIles(data.FilesId)">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
						<div *ngIf="editContent && contentIndex == i"
							class="w-100 d-flex justify-content-between align-items-center">
							<input type="text" class="form-control w-75" name="textdata" [value]="data.Description"
								[(ngModel)]="textdata" #ctrl="ngModel">
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="updateName(data.FilesId)">
									<img src="./assets/checked.svg">
								</div>
								<div class="cross icons bg-dark pointer d-flex justify-content-center align-items-center"
									(click)="esc()">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	`,
        styles: [`
	.cursor-pointer {
		cursor: pointer;
	  }
	  
	  .node-content-wrapper, .tree-children {
		position: relative;
	  }
	  
	  .cr-slider-wrap {
		margin: 8px auto !important
	  }
	  
	  .drag {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index:999999;
	  }
	  
	  .dropdownarea {
		width: 100%;
		border: 2px dashed #ccc;
		padding: 50px 15px;
		display: flex;
		align-items: center;
		height: 65px;
		text-align: center;
		align-items: center;
		position: relative;
	  }
	  
	  .dropdownarea h1 {
		color: #7d7c7c;
		font-size: 17px;
	  }
	  
	  .pd5 {
		padding: 89px 9px 76px 0px;
		float: left;
		width: 100%;
	  }
	  
	  .table-headed {
		padding: 15px;
		display: block;
	  }
	  
	  .mgt50 {
		margin-top: 50px;
	  }
	  
	  .btndefault {
		background-color: #f3f3f3;
		border-color: #e6e6e6;
		color: #333;
	  }
	  
	  .cross {
		display: inline-block;
		font-size: 12px;
		padding: 5px;
		color: red;
		font-weight: bold;
		width: 10px;
		height: 10px;
		margin-left: 10px;
	  }
	  
	  .progressbar {
		height: 2px;
		background: green;
		float: left;
	  }
	  
	  .fz14 {
		font-size: 14px;
	  }
	  
	  .top50 {
		top: 31px;
		left: -19px;
	  }
	  
	  .successmsg {
		font-size: 14px;
		padding: 10px;
		color: green;
		width: 100%;
		text-align: center;
		position: absolute;
		top: -82px;
	  }
	  
	  .fileuploadlist {
		margin: 0;
		padding: 0;
	  }
	  
	  .fileuploadlist li {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style: none;
		margin-bottom: 10px;
	  }
	  
	  .fileuploadlist li a {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
	  }
	  
	  .pointer {
		cursor: pointer;
	  }
	  
	  .cross img {
		height: 10px;
	  }
	  
	  .listdata {
		width: 100%;
		max-width: 463px
	  }
	  
	  .settingoption {
		width: 66px;
	  }
	  
	  .icons {
		width: 20px;
		height: 20px;
		border-radius: 3px;
	  }
	  
	  .checkbox {
		display: flex;
		align-items: center;
		margin: 10px 0;
	  }
	  
	  .styled-checkbox {
		position: absolute;
		opacity: 0;
	  }
	  
	  .styled-checkbox+span {
		position: relative;
		cursor: pointer;
		padding: 0;
	  }
	  
	  .styled-checkbox+span:before {
		content: "";
		margin-right: 10px;
		display: inline-block;
		vertical-align: text-top;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
	  }
	  
	  .styled-checkbox:checked+span:after {
		content: "";
		position: absolute;
		left: 5px;
		top: 2px;
		height: 9px;
		width: 5px;
		border: solid #09b4bd;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
	  
	  .procesbar {
		background: #ccc;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	  }
	  
	  .progressContainer {
		width: 100%;
		position: relative;
		top: 10px;
	  }
	  
	  .z9 {
		z-index: 99;
		position: relative;
	  }
	  
	  .w79 {
		width: 82%;
	  }
	  
	  .uploadicon {
		padding: 10px;
	  }
	  
	  .w-100 {
		width: 100%;
	  }
	  
	  .mb-5 {
		margin-bottom: 3rem!important
	  }
	  
	  .form-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -5px;
		margin-left: -5px;
	  }
	  
	  .col-12 {
		flex: 0 0 100%;
		max-width: 100%;
	  }
	  
	  .mb-0 {
		margin-bottom: 0px!important;
	  }
	  
	  .form-row>.col, .form-row>[class*=col-] {
		padding-right: 5px;
		padding-left: 5px;
	  }
	  
	  .d-flex {
		display: flex;
	  }
	  
	  .position-relative {
		position: relative;
	  }
	  
	  .border {
		border: 1px solid #dee2e6!important
	  }
	  
	  .flex-column {
		flex-direction: column
	  }
	  
	  .align-content-around {
		align-content: space-around
	  }
	  
	  .bg-success {
		background-color: #28a745!important;
	  }
	  
	  .bg-danger {
		background-color: #dc3545!important;
	  }
	  
	  .justify-content-center {
		-webkit-box-pack: center!important;
		-ms-flex-pack: center!important;
		justify-content: center!important;
	  }
	  
	  .float-right {
		float: right!important;
	  }
	  
	  .justify-content-between {
		-webkit-box-pack: justify!important;
		-ms-flex-pack: justify!important;
		justify-content: space-between!important;
	  }
	  .floating-border{
		border:1px solid #ccc;
		padding: 15px !important;
	  }
	`]
    })
], MultifileuploadComponent);

let MultifileuploadModule = class MultifileuploadModule {
};
MultifileuploadModule = __decorate([
    NgModule({
        declarations: [MultifileuploadComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [MultifileuploadComponent]
    })
], MultifileuploadModule);

let ImagesLightBoxComponent = class ImagesLightBoxComponent {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://preview.abacuscrm.net/media/';
        this.database = 'APPS';
        this.FilesGroupId = "0";
        this.fileResponse = new EventEmitter;
        this.body = {};
        this.allowFiles = ['image/jpeg', 'image/png', 'application/pdf', 'audio/mp3', 'video/mp4', 'text/plain'];
        this.GenericToken = "";
        this.imagesData = [];
        this.error_message = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.slideIndex = 1;
        this.slideDescription = '';
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    }
    getListdata() {
        if (this.FilesGroupId) {
            this.body['FilesGroupId'] = this.FilesGroupId;
            const url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
                let temp = [];
                this.imagesData = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        path: this.fileurl + temp[i].FileUrl,
                        description: temp[i].Description,
                        FilesId: temp[i].FilesId,
                        type: this.getFileType(temp[i].FileUrl)
                    };
                    this.imagesData.push(nType);
                }
            });
        }
    }
    getFileType(url) {
        let arr = url.split(".");
        if (arr && arr.length == 2) {
            if (arr[1] == 'jpg' || arr[1] == 'JPG' || arr[1] == 'jpeg' || arr[1] == 'JPEG' || arr[1] == 'png' || arr[1] == 'PNG' || arr[1] == 'gif' || arr[1] == 'GIF' || arr[1] == 'svg' || arr[1] == 'SVG') {
                return 'Image';
            }
            if (arr[1] == 'txt' || arr[1] == 'TXT') {
                return 'Text';
            }
            if (arr[1] == 'mp3' || arr[1] == 'MP3') {
                return 'Audio';
            }
            if (arr[1] == 'mp4' || arr[1] == 'MP4') {
                return 'Video';
            }
            if (arr[1] == 'pdf' || arr[1] == 'PDF') {
                return 'Pdf';
            }
            if (arr[1] == 'csv' || arr[1] == 'CSV') {
                return 'Csv';
            }
            if (arr[1] == 'doc' || arr[1] == 'DOC') {
                return 'Doc';
            }
            if (arr[1] == 'ppt' || arr[1] == 'PPT') {
                return 'Ppt';
            }
            if (arr[1] == 'xls' || arr[1] == 'XLS') {
                return 'Xls';
            }
        }
        else {
            return 'File';
        }
    }
    uploadAndProgress(files) {
        console.log(files);
        let flag = false;
        for (let j = 0; j < files.length; j++) {
            let sel = this.allowFiles.filter(d => d == files[j].type);
            if (sel.length == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (let i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        this.uploadSuccess = true;
                        this.fileResponse.emit(event.body);
                        this.FilesGroupId = event.body['FilesGroupId'];
                        this.getListdata();
                        setTimeout(() => {
                            this.uploadSuccess = false;
                            this.percentDone = 0;
                        }, 3000);
                    }
                });
            }
        }
    }
    deleteFIles(value, index) {
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.imagesData.splice(index, 1);
            }
        });
    }
    openModal() {
        document.getElementById("myModallightbox").style.display = "block";
    }
    closeModal() {
        document.getElementById("myModallightbox").style.display = "none";
    }
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i]['style'].display = "none";
        }
        slides[this.slideIndex - 1]['style'].display = "block";
        this.slideDescription = this.imagesData[this.slideIndex - 1].description;
    }
};
ImagesLightBoxComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "database", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "FilesGroupId", void 0);
__decorate([
    Output()
], ImagesLightBoxComponent.prototype, "fileResponse", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "body", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "allowFiles", void 0);
__decorate([
    Input()
], ImagesLightBoxComponent.prototype, "GenericToken", void 0);
ImagesLightBoxComponent = __decorate([
    Component({
        selector: 'sml-images-light-box',
        template: `
  <div class="w-100">
  <div class="error-msg" *ngIf="error_message != ''">{{error_message}}</div>
  <label class="dropdownarea mar-b-0">
    <div class="d-flex w-100 flex-column">
      <input type="file" multiple id="other" (change)="uploadAndProgress($event.target.files)" class="drag" />
      <div class="d-flex justify-content-between align-items-center w-100 flex-column">
        <div class="d-flex justify-content-between align-items-center">
          <span class="uploadicon">
            <img src="./assets/upload.png" />
          </span>
          <div class="d-flex flex-column position-relative w79">
            <div class="fz14">Choose a file or drag it here.
              <br />
              <span *ngIf="percentDone"> Upload Percent: {{percentDone}}%</span>
            </div>
            <div class="progressContainer">
              <div class="procesbar"></div>
              <div class="w-100 z9" *ngIf="percentDone">
                <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
              </div>
            </div>
          </div>
          <div *ngIf="uploadSuccess" class="successmsg">Upload Successful</div>
        </div>
      </div>
    </div>
  </label>
  <div class="col-md-12 mt-2 sml-light-box-scroll-y" style="padding-right: 8px;">
    <div class="row">
    <div class="column position-relative" *ngFor="let img of imagesData;let i=index">
    <span *ngIf="img.type == 'Image'">
      <img [src]="img.path" height="96" width="100%" onerror="this.onerror=null; this.src='assets/404_images.png'" (click)="openModal();currentSlide(i+1)"
        class="hover-shadow cursor">
    </span>
    <span *ngIf="img.type == 'Text'">
      <a [href]="img.path" target="_blank">
        <img src="assets/txt_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Pdf'">
      <a [href]="img.path" target="_blank">
        <img src="assets/pdf_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Audio'">
      <a [href]="img.path" target="_blank">
        <img src="assets/audio_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Video'">
      <a [href]="img.path" target="_blank">
        <img src="assets/video_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Doc'">
      <a [href]="img.path" target="_blank">
        <img src="assets/doc_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Csv'">
      <a [href]="img.path" target="_blank">
        <img src="assets/csv_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Ppt'">
      <a [href]="img.path" target="_blank">
        <img src="assets/ppt_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span *ngIf="img.type == 'Xls'">
      <a [href]="img.path" target="_blank">
        <img src="assets/xls_icon.png" height="96" width="100%" class="hover-shadow cursor">
      </a>
    </span>
    <span class="remove_icon">
      <i class="fa fa-times" (click)="deleteFIles(img.FilesId,i)"></i>
    </span>
  </div>
    </div>
  </div>
</div>
<div id="myModallightbox" class="modal">
  <span class="close cursor" (click)="closeModal()">&times;</span>
  <div class="modal-content">
    <div style="margin: auto;width: 80%;">
      <div class="mySlides" *ngFor="let img of imagesData;let i=index">
        <div class="numbertext">{{i + 1}}&nbsp;/&nbsp;{{imagesData.length}}</div>
        <img [src]="img.path" onerror="this.onerror=null; this.src='assets/404_images.png'"   height="450" style="width:100%">
      </div>
    </div>
    <a class="prev" (click)="plusSlides(-1)">&#10094;</a>
    <a class="next" (click)="plusSlides(1)">&#10095;</a>
  </div>
  <div class="caption-container">
    <p id="caption" style="margin-bottom:0px">{{slideDescription}}</p>
  </div>
</div>
	`,
        styles: [`
	.mar-b-0{
    margin-bottom: 0px !important;
}
.dropdownarea {
    width: 100%;
    border: 1px dashed #ccc;
    padding: 35px 0px;
    display: flex;
    align-items: center;
    height: 65px;
    text-align: center;
    align-items: center;
    position: relative;
}
.progressContainer {
    width: 100%;
    position: relative;
    top: 2px;
}
.drag {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index:999999;
}   
.progressbar {
    height: 2px;
    background: green;
    float: left;
}
.fz14 {
    font-size: 14px;
}
.successmsg {
    font-size: 14px;
    color: green;
    width: 25%;
    text-align: right;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.procesbar {
    background: #ccc;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
.z9 {
    z-index: 99;
    position: relative;
}
.w79 {
    width: 82%;
}
.uploadicon {
    padding: 10px;
}
.w-100 {
    width: 100%;
}
.d-flex {
    display: flex;
}
.position-relative {
    position: relative;
}
.flex-column {
    flex-direction: column
}  
.justify-content-between {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
}
.row > .column {
    padding-right: 8px;
    padding-bottom: 8px;
}
.row:after {
    content: "";
    display: table;
    clear: both;
}
.column {
    float: left;
    width: 25%;
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
  }
.modal-content {
    position: relative;
    background-color: black;
    margin: auto;
    padding: 0;
    width: 100%;
    max-width: 1200px;
}
.close {
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
}
.close:hover,
.close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
}
.mySlides {
    display: none;
}
.cursor {
    cursor: pointer;
}
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    padding: 16px;
    color: white !important;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
}
.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}
.prev:hover,
.next:hover {
    background-color: rgba(243, 167, 167, 0.8);
}
.numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}
.caption-container {
    text-align: center;
    background-color: black;
    padding: 16px 16px;
    color: white;
}
.demo {
    opacity: 0.6;
}
.active,
.demo:hover {
    opacity: 1;
}
img.hover-shadow {
    transition: 0.3s;
}
.hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.sml-light-box-scroll-y {
    height: auto;
    max-height:315px;
    overflow-y: hidden;
    overflow-x: hidden;
}
.sml-light-box-scroll-y:hover {
    overflow-y: overlay;
}
.sml-light-box-scroll-y::-webkit-scrollbar {
    width: 8px;
    background-color: #fbfbfb;
}
.sml-light-box-scroll-y::-webkit-scrollbar-track {
    width: 3px;
    background: rgba(222, 222, 222, .75);
}
.sml-light-box-scroll-y::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .5);
    border-radius: 4px;
}
.remove_icon{
  position: absolute;
  right: 13px;
  top: -2px;
  cursor: pointer;
}
.error-msg{
  font-size: 13px;
  text-align: center;
  color: red
}
	`]
    })
], ImagesLightBoxComponent);

let ImagesLightBoxModule = class ImagesLightBoxModule {
};
ImagesLightBoxModule = __decorate([
    NgModule({
        declarations: [ImagesLightBoxComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [ImagesLightBoxComponent]
    })
], ImagesLightBoxModule);

let ImageUploadBoxComponent = class ImageUploadBoxComponent {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.fileurl = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.FilesGroupId = "0";
        this.FileId = "0";
        this.fileResponse = new EventEmitter;
        this.allowFiles = ['image/jpeg', 'image/png'];
        this.GenericToken = "";
        this.imagesData = {};
        this.isLoading = false;
        this.error_message = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    }
    getListdata() {
        if (this.FilesGroupId) {
            const body = {
                FilesGroupId: this.FilesGroupId
            };
            const url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                let temp = [];
                this.imagesData = {};
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    if (this.FileId == temp[i].FilesId) {
                        let nType = {
                            path: this.fileurl + temp[i].FileUrl,
                            description: temp[i].Description,
                            FilesId: temp[i].FilesId,
                            type: "Image"
                        };
                        this.imagesData = nType;
                    }
                }
                this.isLoading = true;
            }, erorr => {
                this.isLoading = true;
            });
        }
        else {
            this.isLoading = true;
        }
    }
    uploadAndProgress(files) {
        console.log(files);
        let flag = false;
        for (let j = 0; j < files.length; j++) {
            let sel = this.allowFiles.filter(d => d == files[j].type);
            if (sel.length == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (let i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        this.fileResponse.emit(event.body);
                        this.FilesGroupId = event.body['FilesGroupId'];
                        setTimeout(() => {
                            this.percentDone = 0;
                            let nType = {
                                path: this.fileurl + event.body['FileUrl'],
                                description: event.body['Description'],
                                FilesId: event.body['FilesId'],
                                type: "Image"
                            };
                            this.imagesData = nType;
                        }, 3000);
                    }
                });
            }
        }
    }
    deleteFIles(value) {
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.imagesData = {};
            }
        });
    }
};
ImageUploadBoxComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "database", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FilesGroupId", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FileId", void 0);
__decorate([
    Output()
], ImageUploadBoxComponent.prototype, "fileResponse", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "allowFiles", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "GenericToken", void 0);
ImageUploadBoxComponent = __decorate([
    Component({
        selector: 'sml-image-upload-box',
        template: `
  <div class="error-msg" *ngIf="error_message != ''">{{error_message}}</div>
<div *ngIf="!imagesData.path && isLoading" class="uploadImage d-flex align-items-center flex-column">
  <i class="fa fa-camera fz24"></i>
  <p>Upload Image</p>
  <input type="file" id="fileinput" (change)="uploadAndProgress($event.target.files)" class="drag" />
  <div class="fz24">
    <span *ngIf="percentDone"> Upload Percent: {{percentDone}}%</span>
  </div>
  <div class="progressContainer" *ngIf="percentDone">
    <div class="procesbar"></div>
    <div class="w-100 z9">
      <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
    </div>
  </div>
  </div>
  <div *ngIf="imagesData.path && isLoading" class="preview-img">
    <img [src]="imagesData.path" height="147" width="100%" onerror="this.onerror=null; this.src='assets/404_images.png'" class="hover-shadow cursor">
    <span class="remove_icon">
      <i class="fa fa-times" (click)="deleteFIles(imagesData.FilesId)"></i>
    </span>
  </div>
  `,
        styles: [`
  .uploadImage{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}
  .uploadImage .fa{font-size:30px;}
  .remove_icon{position:absolute;right:13px;top:-2px;cursor:pointer;}
  .drag{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}
  img.hover-shadow{transition:0.3s;}
  .hover-shadow:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
  .cursor{cursor:pointer;}
  .preview-img{position:relative;width:100%;}
  .progressContainer{width:100%;position:relative;top:2px;}
  .progressbar{height:2px;background:green;float:left;}
  .procesbar{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}
  .z9{z-index:99;position:relative;}
  .error-msg{font-size:13px;text-align:center;color:red}
  `]
    })
], ImageUploadBoxComponent);

let ImageUplaodBoxModule = class ImageUplaodBoxModule {
};
ImageUplaodBoxModule = __decorate([
    NgModule({
        declarations: [ImageUploadBoxComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [ImageUploadBoxComponent]
    })
], ImageUplaodBoxModule);

let InputTagComponent = class InputTagComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.label = 'Label Name';
        this.name = 'sml-tag-input';
        this.items = [];
        this.getvalue = new EventEmitter();
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    onItemAdded(event) {
        this.getvalue.emit(this.items);
    }
    onItemRemove(event) {
        this.getvalue.emit(this.items);
    }
};
InputTagComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], InputTagComponent.prototype, "label", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "name", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "items", void 0);
__decorate([
    Output()
], InputTagComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "style", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], InputTagComponent.prototype, "valueStyle", void 0);
InputTagComponent = __decorate([
    Component({
        selector: 'sml-tag-input',
        template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <tag-input [(ngModel)]='items'  [modelAsStrings]="true" (onAdd)="onItemAdded($event)" (onRemove)="onItemRemove($event)" theme='bootstrap3-info'>
            </tag-input>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}
	:host /deep/ tag-input tag{line-height:20px !important;height:27px !important;}
	:host /deep/ delete-icon svg{height:22px !important;}
	:host /deep/ tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}
	:host /deep/ .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}
	`]
    })
], InputTagComponent);

let InputTagModule = class InputTagModule {
};
InputTagModule = __decorate([
    NgModule({
        declarations: [InputTagComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            TagInputModule
        ],
        exports: [InputTagComponent]
    })
], InputTagModule);

let ListSearchComponent = class ListSearchComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.id = 'sml-list-search';
        this.name = 'sml-list-search';
        this.label = 'Label Name';
        this.value = 'Los';
        this.listData = [];
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "dbo";
        this.procedure = "ZIPCODE_ListCities";
        this.fieldName = "City";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.keyword = 'name';
    }
    ngOnInit() {
        this.getToken();
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
            });
        }
    }
    setSelectedData(event) {
        this.getvalue.emit(event);
    }
    onChangeSearch(search) {
        const body = {
            SearchString: search
        };
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.listData = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        id: i + 1,
                        name: temp[i][this.fieldName]
                    };
                    this.listData.push(nType);
                }
            }
            else {
                this.listData = [];
            }
        }, error => {
            this.listData = [];
        });
    }
    onFocused(e) {
        // do something
    }
};
ListSearchComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
__decorate([
    Input()
], ListSearchComponent.prototype, "id", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "name", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "label", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "value", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "listData", void 0);
__decorate([
    Output()
], ListSearchComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "database", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "schema", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "fieldName", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "style", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], ListSearchComponent.prototype, "valueStyle", void 0);
ListSearchComponent = __decorate([
    Component({
        selector: 'sml-list-search',
        template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <div class="ng-autocomplete">
                <ng-autocomplete [data]="listData" [initialValue]="value" [searchKeyword]="keyword" (selected)='setSelectedData($event)'
                    (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]="itemTemplate"
                    [notFoundTemplate]="notFoundTemplate">
                </ng-autocomplete>
                <ng-template #itemTemplate let-item>
                    <a [innerHTML]="item.name"></a>
                </ng-template>
                <ng-template #notFoundTemplate let-notFound>
                    <div [innerHTML]="notFound"></div>
                </ng-template>
            </div>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	:host /deep/ ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}
	.ng-autocomplete{width:100% !important;}
	:host /deep/ ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	`]
    })
], ListSearchComponent);

let ListSearchModule = class ListSearchModule {
};
ListSearchModule = __decorate([
    NgModule({
        declarations: [ListSearchComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            AutocompleteLibModule
        ],
        exports: [ListSearchComponent]
    })
], ListSearchModule);

let MultiSelectComponent = class MultiSelectComponent {
    constructor(http, elementRef) {
        this.http = http;
        this.elementRef = elementRef;
        this.dropdownList = [];
        this.selectedItems = [];
        this.label = 'Label Name';
        this.searchString = '';
        this.getvalue = new EventEmitter();
        this.GenericToken = "";
        this.database = "ASSIST";
        this.schema = "keys";
        this.procedure = "SKILLS_List";
        this.body = {};
        this.fieldName = "Description";
        this.fieldId = "SkillsId";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.isOpen = false;
    }
    ngOnInit() {
        this.getToken();
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getDrpData();
            });
        }
        else {
            this.getDrpData();
        }
    }
    getDrpData() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, this.body, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.dropdownList = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        "id": temp[i][this.fieldId],
                        "name": temp[i][this.fieldName]
                    };
                    this.dropdownList.push(nType);
                }
            }
            else {
                this.dropdownList = [];
            }
        }, error => {
            this.dropdownList = [];
        });
    }
    onItemSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    OnItemDeSelect(item) {
        this.getvalue.emit(this.selectedItems);
    }
    onSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onDeSelectAll(items) {
        this.getvalue.emit(this.selectedItems);
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
MultiSelectComponent.ctorParameters = () => [
    { type: HttpClient },
    { type: ElementRef }
];
__decorate([
    Input()
], MultiSelectComponent.prototype, "dropdownList", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "selectedItems", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "label", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "searchString", void 0);
__decorate([
    Output()
], MultiSelectComponent.prototype, "getvalue", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "database", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "schema", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "procedure", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "body", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldName", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "fieldId", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "style", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], MultiSelectComponent.prototype, "switchStyle", void 0);
MultiSelectComponent = __decorate([
    Component({
        selector: 'sml-multi-select',
        template: `
	<div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select [items]="dropdownList" bindLabel="name" appendTo="body" multiple="true" (open)="onOpen()" (close)="onClose()" (change)="onItemSelect($event)" [(ngModel)]="selectedItems">
            </ng-select>
            <label *ngIf="switchStyle" class="label" [ngClass]="{'z-9999': isOpen}" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
        <label *ngIf="!switchStyle" class="label"  [ngStyle]="style">
            {{ label }}
        </label>
    </div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.float-groupdd{position:relative;padding:0px;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.z-9999{z-index:9999;}
	.float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
	.float-group{position:relative;padding:14px 2px 0px 0px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ .ng-select .ng-select-container{border:none !important;background: var(--back-color);}
	:host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
	:host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}	
	`]
    })
], MultiSelectComponent);

let MultiSelectModule = class MultiSelectModule {
};
MultiSelectModule = __decorate([
    NgModule({
        declarations: [MultiSelectComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            NgSelectModule
        ],
        exports: [MultiSelectComponent]
    })
], MultiSelectModule);

let ProgressbarComponent = class ProgressbarComponent {
    constructor() {
        this.id = 'sml-progress-bar';
        this.value = 0;
        this.type = '';
        this.color = '';
        this.classes = 'progress-bar-info progress-bar-striped  active';
        // progress-bar-warning progress-bar-striped  active
        // progress-bar-danger
        // progress-bar-info progress-bar-striped
        this.interval = 100;
        this.completed = new EventEmitter();
    }
    ngOnInit() {
        var width = 1;
        this.identity = setInterval(() => {
            this.scene();
        }, this.interval);
    }
    scene() {
        if (this.value >= 100) {
            clearInterval(this.identity);
        }
        else {
            this.value = this.value + 1;
        }
    }
};
__decorate([
    Input()
], ProgressbarComponent.prototype, "id", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "value", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "type", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "color", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "classes", void 0);
__decorate([
    Input()
], ProgressbarComponent.prototype, "interval", void 0);
__decorate([
    Output()
], ProgressbarComponent.prototype, "completed", void 0);
ProgressbarComponent = __decorate([
    Component({
        selector: 'sml-progress-bar',
        template: `
	<div class="w-100">
    <div class="progress">
        <div class="progress-bar {{classes}}" role="progressbar" [ngStyle]="{'width': value + '%' }" aria-valuemin="0" aria-valuemax="100">
            {{value}}%
        </div>
    </div>
</div>
	`,
        styles: [`
	.progress-bar-success {
		background-color: #5cb85c;
	}
	.progress-bar-info {
		background-color: #5bc0de;
	}
	.progress-bar-warning {
		background-color: #f0ad4e;
	}
	.progress-bar-danger {
		background-color: #d9534f;
	}
	.progress-bar.active, .progress.active .progress-bar {
		-webkit-animation: progress-bar-stripes 2s linear infinite;
		-o-animation: progress-bar-stripes 2s linear infinite;
		animation: progress-bar-stripes 2s linear infinite;
	}
	`]
    })
], ProgressbarComponent);

let ProgressBarModule = class ProgressBarModule {
};
ProgressBarModule = __decorate([
    NgModule({
        declarations: [ProgressbarComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [ProgressbarComponent]
    })
], ProgressBarModule);

let RadioCheckBoxListComponent = class RadioCheckBoxListComponent {
    // ###Samlple Data###
    // this.jsonData = [
    //   {
    //     name:'Option 1',
    //     value:'1',
    //     isChecked:false
    //   },
    //   {
    //     name:'Option 2',
    //     value:'2',
    //     isChecked:true
    //   },
    //   {
    //     name:'Option 3',
    //     value:'3',
    //     isChecked:false
    //   }
    // ]
    constructor() {
        this.id = 'sml-radio-check-box-list';
        this.name = 'sml-radio-check-box-list-name';
        this.jsonData = [];
        this.type = 'radio';
        this.selectedValue = '';
        this.radioChange = new EventEmitter();
        this.checkboxChange = new EventEmitter();
    }
    ngOnInit() { }
    changeEvent(event) {
        if (event == 'radio') {
            this.radioChange.emit(this.selectedValue);
        }
        else {
            this.checkboxChange.emit(this.jsonData);
        }
    }
};
__decorate([
    Input()
], RadioCheckBoxListComponent.prototype, "id", void 0);
__decorate([
    Input()
], RadioCheckBoxListComponent.prototype, "name", void 0);
__decorate([
    Input()
], RadioCheckBoxListComponent.prototype, "jsonData", void 0);
__decorate([
    Input()
], RadioCheckBoxListComponent.prototype, "type", void 0);
__decorate([
    Input()
], RadioCheckBoxListComponent.prototype, "selectedValue", void 0);
__decorate([
    Output()
], RadioCheckBoxListComponent.prototype, "radioChange", void 0);
__decorate([
    Output()
], RadioCheckBoxListComponent.prototype, "checkboxChange", void 0);
RadioCheckBoxListComponent = __decorate([
    Component({
        selector: 'sml-radio-check-box-list',
        template: `
  <form class="formRadioCheck">
    <div *ngIf="type == 'checkbox'">
      <div class="inputGroupRadioCheck" *ngFor="let chk of jsonData;let i=index;">
        <input id="{{id}}-{{i}}" name="{{id}}-{{i}}" [value]="chk.isChecked" [(ngModel)]="chk.isChecked" (change)="changeEvent('checkbox')" type="checkbox" />
        <label for="{{id}}-{{i}}">{{chk.name}}</label>
      </div>
    </div>
    <div *ngIf="type == 'radio'">
      <div class="inputGroupRadioCheck" *ngFor="let rad of jsonData;let i=index;">
        <input id="{{id}}-{{i}}" name="{{name}}" [value]="rad.value" [(ngModel)]="selectedValue" (change)="changeEvent('radio')" type="radio" />
        <label for="{{id}}-{{i}}">{{rad.name}}</label>
      </div>
    </div>
  </form>
  `,
        styles: [`
  .inputGroupRadioCheck {
    background-color: #fff;
    display: block;
    margin: 10px 0;
    position: relative;
  }
  .inputGroupRadioCheck  input:checked ~ label {
      color: #fff;
  }
  .inputGroupRadioCheck  input:checked ~ label:before {
      transform: translate(-50%, -50%) scale3d(56, 56, 1);
      opacity: 1;
  }
  .inputGroupRadioCheck  input:checked ~ label:after {
      background-color: #54E0C7;
      border-color: #54E0C7;
  }
  .inputGroupRadioCheck  input {
      width: 32px;
      height: 32px;
      order: 1;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      visibility: hidden;
  }
  .inputGroupRadioCheck label {
      padding: 12px 30px;
      width: 100%;
      display: block;
      text-align: left;
      color: #3C454C;
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: color 200ms ease-in;
      overflow: hidden;
  }
  .inputGroupRadioCheck label:before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      content: '';
      background-color: #5562eb;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale3d(1, 1, 1);
      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
      opacity: 0;
      z-index: -1;
  }
  .inputGroupRadioCheck label:after {
      width: 32px;
      height: 32px;
      content: '';
      border: 2px solid #D1D7DC;
      background-color: #fff;
      background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
      background-repeat: no-repeat;
      background-position: 2px 3px;
      border-radius: 50%;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 200ms ease-in;
  }
  .formRadioCheck {
    padding: 0 16px;
    max-width: 550px;
    font-size: 18px;
    font-weight: 600;
  }  
  `]
    })
], RadioCheckBoxListComponent);

let RadioCheckBoxListModule = class RadioCheckBoxListModule {
};
RadioCheckBoxListModule = __decorate([
    NgModule({
        declarations: [RadioCheckBoxListComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [RadioCheckBoxListComponent]
    })
], RadioCheckBoxListModule);

let CropImageUploadComponent = class CropImageUploadComponent {
    constructor(http) {
        this.http = http;
        this.height = 150;
        this.width = 150;
        this.type = 'circle';
        this.value = '0';
        this.ratio = '1:1';
        this.aspectRatio = 1 / 1;
        this.url = 'https://mobilfy.aaadev.info/api/';
        this.path = 'http://mobilfy.aaadev.info/media/';
        this.genericToken = "bfb8831504564861a864275d85f848f8bfb8831504564861a864275d85f848f8";
        this.database = "MOBILFY";
        this.schema = "core";
        this.OnSaveFile = new EventEmitter;
        this.capWidth = 50;
        this.capHeight = 50;
        this.imageName = 'crop_picture';
        this.imagePath = '';
        this.isHtmlbind = false;
        this.isUploadArea = true;
        this.isUploadStart = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.scale = 1;
        this.transform = {};
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.ratioCal();
        if (this.value != '0' && this.value != 0) {
            const body = { FilesId: this.value };
            const url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_Retrieve?api_key=" + this.genericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(files => {
                if (files != undefined && files != null && files != '') {
                    this.imagePath = this.path + files[0].FileUrl;
                }
            });
        }
    }
    ratioCal() {
        if (this.type == 'square' && this.ratio != '') {
            let total = parseInt(this.width) + parseInt(this.height);
            let arr = this.ratio.split(":");
            if (arr.length == 2) {
                let ratioTotal = parseInt(arr[0]) + parseInt(arr[1]);
                let w = ((total * parseInt(arr[0])) / ratioTotal).toFixed(0);
                let h = ((total * parseInt(arr[1])) / ratioTotal).toFixed(0);
                this.width = w;
                this.height = h;
                this.capWidth = ((100 * parseInt(arr[0])) / ratioTotal).toFixed(0);
                this.capHeight = ((100 * parseInt(arr[1])) / ratioTotal).toFixed(0);
            }
        }
    }
    fileChangeEvent(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.imageName = fileInput.target.files["0"].name;
            $("#openModalBtn").click();
            this.imageChangedEvent = fileInput;
            this.isUploadArea = false;
        }
    }
    cancleClick() {
        this.croppedImage = "";
        this.isHtmlbind = false;
        this.isUploadArea = true;
        this.percentDone = 0;
    }
    upload() {
        this.imagePath = "";
        this.isUploadStart = true;
        this.isHtmlbind = false;
        this.isUploadArea = true;
        let block = this.croppedImage.split(";");
        let contentType = block[0].split(":")[1];
        let realData = block[1].split(",")[1];
        let blob = b64toBlob(realData, contentType);
        let formData = new FormData();
        formData.append('file', blob, this.imageName);
        formData.append('id', this.value);
        formData.append('filegroupid', this.value);
        formData.append('mediaType', 'profilepic');
        formData.append('description', this.imageName);
        this.http.post(this.url + "uploader/uploadnew", formData, { reportProgress: true, observe: 'events' })
            .subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.imagePath = this.path + event.body['FileUrl'];
                this.isUploadStart = false;
                this.percentDone = 0;
                this.OnSaveFile.emit({ event });
                this.croppedImage = "";
            }
        });
        function b64toBlob(b64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        }
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    zoomOut() {
        this.scale -= .1;
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.scale });
    }
    zoomIn() {
        this.scale += .1;
        this.transform = Object.assign(Object.assign({}, this.transform), { scale: this.scale });
    }
};
CropImageUploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], CropImageUploadComponent.prototype, "height", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "width", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "type", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "value", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "ratio", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "aspectRatio", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "path", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "genericToken", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "database", void 0);
__decorate([
    Input()
], CropImageUploadComponent.prototype, "schema", void 0);
__decorate([
    Output()
], CropImageUploadComponent.prototype, "OnSaveFile", void 0);
CropImageUploadComponent = __decorate([
    Component({
        selector: 'sml-crop-image-upload',
        template: `
    <div class="homewrap">
        <div class="imgd_area d_flex" *ngIf="isUploadArea" [ngClass]="{'b-2': imagePath == '' ,'b-r': type == 'circle'}" [ngStyle]="{'height.px': height,'width.px': width}">
            <div class="d_flex w-100 position-relative flex-column justify-content-center align-items-center">
                <div *ngIf="imagePath != '' && !isUploadStart">
                    <img [src]="imagePath" name="profile_images" id="profile_images" />
                </div>
                <div *ngIf="imagePath == '' && !isUploadStart">
                    <img src="assets/cloud-upload-arrow.svg">
                    <span class="text-black-50 fz11 mb-1">Drag & Drop</span>
                </div>
                <div class="percentage-div" *ngIf="isUploadStart">
                    {{percentDone}}%
                </div>
                <input type="file" class="file_input" id="upload" (change)="fileChangeEvent($event)" accept="image/*">
            </div>
        </div>
        <div *ngIf="isHtmlbind" class="w-100 text-center">
            <img id="htmlbinds" [ngClass]="{'b-r': type == 'circle'}" [src]="croppedImage" [width]="width" [height]="height">
        </div>
        <div class="text-center mt-2" *ngIf="isHtmlbind">
            <a (click)="upload()" class="mr-4 btn_link">Upload</a>
            <a (click)="cancleClick()" class="btn_link">Cancel</a>
        </div>
    </div>
<button type="button" style="opacity: 0;" id="openModalBtn" data-toggle="modal" data-target="#cropModal">Open</button>
<div id="cropModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title mt-0">Crop Image</h4>
                <div style="position: absolute;right: 128px;top: 11px;">
                    <img [src]="croppedImage" [ngClass]="{'b-r': type == 'circle'}" [width]="capWidth" [height]="capHeight" [style.border]="croppedImage ? '1px solid black' : 'none'" />
                </div>
                <div class="btn-group">
                    <button type="button" class="btn btn-primary" (click)="zoomIn()">
                        <span class="fa fa-search-plus"></span>
                    </button>
                    <button type="button" class="btn btn-primary" (click)="zoomOut()">
                        <span class="fa fa-search-minus"></span>
                    </button>
                </div>
            </div>
            <div class="modal-body" style="position: relative;flex: 1 1 auto;padding: 1rem;" >
                <image-cropper [imageChangedEvent]="imageChangedEvent" [transform]="transform" [maintainAspectRatio]="true" [aspectRatio]="aspectRatio"
                    [cropperMinWidth]="width" [resizeToWidth]="width" format="png,jpeg" [roundCropper]="type == 'circle'? true:false"
                    (imageCropped)="imageCropped($event)">
                </image-cropper>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" (click)="isHtmlbind = true;" data-dismiss="modal">Apply</button>
                <button type="button" class="btn btn-default" (click)="cancleClick()" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
  `,
        styles: [`
  .homewrap {height: auto;width: 100%}
  .imgd_area {height: 150px;width: 150px;overflow: hidden;margin: 0 auto;}
  .percentage-div{font-size: 25px;font-weight: 700;color: #00ACAC;}
  .b-2{border: 2px dashed #ccc;}
  .b-r{border-radius: 100%;}
  .text-black-50 {color: #a6a9ab;}
  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}
  .fz11 {font-size: 11px;}
  .d_flex {display: flex;}
  .htmlbinds:nth-child(2) {display: none;}
  .htmlbinds {height: 100%;width: 100%;object-fit: cover;}
  .flex-column {-webkit-box-orient: vertical!important;-webkit-box-direction: normal!important;-ms-flex-direction: column!important;flex-direction: column!important;}
  .position-relative {position: relative!important;}
  .w-100 {width: 100%;}
  .justify-content-center {-webkit-box-pack: center!important;-ms-flex-pack: center!important;justify-content: center!important;}
  .btn_link{font-size: 18px;font-weight: 600;cursor: pointer;}
  `]
    })
], CropImageUploadComponent);

let CropImageUploadModule = class CropImageUploadModule {
};
CropImageUploadModule = __decorate([
    NgModule({
        declarations: [CropImageUploadComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            ImageCropperModule
        ],
        exports: [CropImageUploadComponent]
    })
], CropImageUploadModule);

let TilesRadioComponent = class TilesRadioComponent {
    constructor() {
        this.id = 'sml-tiles-radio';
        this.name = 'sml-tiles-radio-name';
        this.jsonData = [];
        this.width = "24%";
        this.img_height = "100px";
        this.background = "#00171F";
        this.selectedValue = '2';
        this.radioChange = new EventEmitter();
        // ###Samlple Data###
        // this.jsonData = [
        //   {
        //     name: 'Option 1',
        //     value: '1',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/82f14d2e-32fd-43f2-a874-d2ce331eadd1.jpg'
        //   },
        //   {
        //     name: 'Option 2',
        //     value: '2',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/50ae6359-874c-4359-be4b-9c7a0ce81c01.jpg'
        //   },
        //   {
        //     name: 'Option 3',
        //     value: '3',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/558e2960-53d5-425a-bc9c-1cefb2d9d93b.jpg'
        //   },
        //   {
        //     name: 'Option 4',
        //     value: '4',
        //     url: 'http://mobilfy.aaadev.info/media/Mobilfy/00011179/04e05de2-a5c1-43f3-9666-94c430beb425.jpg'
        //   },
        // ]
    }
    ngOnInit() { }
    changeEvent() {
        this.radioChange.emit(this.selectedValue);
    }
};
__decorate([
    Input()
], TilesRadioComponent.prototype, "id", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "name", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "jsonData", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "width", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "img_height", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "background", void 0);
__decorate([
    Input()
], TilesRadioComponent.prototype, "selectedValue", void 0);
__decorate([
    Output()
], TilesRadioComponent.prototype, "radioChange", void 0);
TilesRadioComponent = __decorate([
    Component({
        selector: 'sml-tiles-radio',
        template: `
  <div class="form" *ngIf="jsonData.length > 0" [style.background-color]="background">
  <p class="form__answer" [style.width]="width" *ngFor="let rad of jsonData;let i=index;">
    <input type="radio" id="{{id}}-{{i}}" name="{{name}}" [value]="rad.value" [(ngModel)]="selectedValue" (change)="changeEvent()">
    <label for="{{id}}-{{i}}">
      <img [src]="rad.url" style="width:100%" [style.height]="img_height" id="img-{{id}}-{{i}}" name="img-{{name}}" /> {{rad.name}}
    </label>
  </p>
  </div>`,
        styles: [`
  .form {width: 100%;margin: auto;background: #00171F;padding: 5px 0px 0px 5px;color: #FAFAFA;}
  .form__answer {display: inline-block;box-sizing: border-box;width: 24%;margin: 0px 1% 1% 0px;height: auto;vertical-align: top;font-size: 22px;text-align: center;}
  label {border: 1px solid rgba(250, 250, 250, 0.15);box-sizing: border-box;display: block;height: 100%;width: 100%;padding: 10px 10px 30px 10px;cursor: pointer;opacity: .5;transition: all .5s ease-in-out;margin-bottom: 0px;}
  label:hover, label:focus, label:active {border: 1px solid rgba(250, 250, 250, 0.5);}
  input[type="radio"] {opacity: 0;width: 0;height: 0;position: absolute;}
  input[type="radio"]:active ~ label {opacity: 1;}
  input[type="radio"]:checked ~ label {opacity: 1;border: 1px solid #FAFAFA;}
  `]
    })
], TilesRadioComponent);

let TilesRadioModule = class TilesRadioModule {
};
TilesRadioModule = __decorate([
    NgModule({
        declarations: [TilesRadioComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [TilesRadioComponent]
    })
], TilesRadioModule);

let CreditCardComponent = class CreditCardComponent {
    constructor() {
        this.onSubmit = new EventEmitter();
    }
    ngOnInit() { }
    processPayment(event) { this.onSubmit.emit(event); }
};
__decorate([
    Output()
], CreditCardComponent.prototype, "onSubmit", void 0);
CreditCardComponent = __decorate([
    Component({
        selector: 'sml-credit-card',
        template: `
  <div class="w-100">
    <ng-payment-card (formSaved)="processPayment($event)"></ng-payment-card>
  </div>
  `,
        styles: [`
  :host /deep/ ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}
  .w-100{width: 100%;}
  `]
    })
], CreditCardComponent);

let CreditCardModule = class CreditCardModule {
};
CreditCardModule = __decorate([
    NgModule({
        declarations: [CreditCardComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgPaymentCardModule,
            HttpClientModule
        ],
        exports: [CreditCardComponent]
    })
], CreditCardModule);

let CreditCardNewComponent = class CreditCardNewComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.cardObject = { cardNumber: "", cardHolder: "", expiryDate: "", cvc: "" };
        this.submitValue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('#newcreditcard')['card']({
            container: '.card-wrapper',
            formSelectors: {
                numberInput: 'input#number',
                expiryInput: 'input#expiry',
                cvcInput: 'input#cvc',
                nameInput: 'input#name' // optional - defaults input[name="name"]
            },
            width: 240,
            formatting: true,
            debug: true
        });
    }
    ngOnChanges(event) {
        if (event.labelStyle != undefined && event.labelStyle.currentValue != undefined) {
            let css = event.labelStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
        }
        if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
            let css = event.buttonStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
            this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
            this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
            this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
            this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
        }
    }
    submitClick() {
        this.submitValue.emit(this.cardObject);
    }
};
CreditCardNewComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], CreditCardNewComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], CreditCardNewComponent.prototype, "cardObject", void 0);
__decorate([
    Output()
], CreditCardNewComponent.prototype, "submitValue", void 0);
CreditCardNewComponent = __decorate([
    Component({
        selector: 'sml-credit-card-new',
        template: `
  <div class="mainCardBack">
  <div  class="card-wrapper"></div>
  <div class="formCardMain">
    <form id="newcreditcard">
      <div class="main-row">
        <div class="w-50s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cardNumber" id="number"  name="number" [ngStyle]="valueStyle"
                required>
              <label for="number" class="label" [ngStyle]="labelStyle">
                Card Number
              </label>
            </div>
          </div>
        </div>
        </div>
        <div class="main-row mt-1">
        <div class="w-50s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cardHolder" id="name"  name="name" [ngStyle]="valueStyle"
                required>
              <label for="first-name" class="label" [ngStyle]="labelStyle">
                Card Holder
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="main-row mt-1">
        <div class="w-25s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.expiryDate" id="expiry"  name="expiry" [ngStyle]="valueStyle" required>
              <label for="expiry" class="label" [ngStyle]="labelStyle">
                Expiry Date
              </label>
            </div>
          </div>
        </div>
        <div class="w-25s">
          <div class="position-relative">
            <div class="input-field float-group float-group-static" [ngStyle]="borderStyle">
              <input type="text" class="form-control" [(ngModel)]="cardObject.cvc" id="cvc"  name="cvc" [ngStyle]="valueStyle" required>
              <label for="cvc" class="label" [ngStyle]="labelStyle">
                CVC
              </label>
            </div>
          </div>
        </div>
        <div class="w-50sb">
          <button class="btn btn-primary" [ngStyle]="buttonStyle" (click)="submitClick()" name="cardsubmit">Submit</button>
        </div>
      </div>
    </form>
  </div>
  </div>
  `,
        styles: [`
  :host{--c-width:100%;--c-height:25px;--label-left:7px;--label-top:2px;--value-left:8px;--value-top:0px;}
  .btn:focus{outline:0;box-shadow:var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color);}
  .position-relative{position:relative;}
  .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
  .form-control{display:block;padding-top:0.375rem;padding-right:0.75rem;padding-bottom:0.375rem;padding-left:var(--value-left);font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}
  .form-control{background-color:inherit;}
  .label{position:absolute;top:-24px;left:0px;font-size:12px;}
  .float-group{position:relative;padding:14px 24px 2px 0px;}
  .float-group .form-control{padding-top:var(--value-top);padding-right:0px;padding-bottom:0px;padding-left:var(--value-left);}
  .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
  .float-group .form-control:focus{outline:none !important;box-shadow:none;}
  .mainCardBack{background:#ECEBEC;width: 300px;}
  .formCardMain{margin:auto;width:90%;padding-bottom:15px;}
  .main-row{width:100%;}
  .w-50s{width:100%;display:inline-block;padding-left:5px;padding-right:5px;}
  .w-50sb{width:100%;display:inline-block;padding-left:5px;padding-right:5px;position:relative;top:5px;text-align:right;}
  .w-25s{width:50%;display:inline-block;padding-left:5px;padding-right:5px;}
  :host /deep/ .card-wrapper .jp-card-container{margin-left: -6px !important;}
  `]
    })
], CreditCardNewComponent);

let CreditCardNewModule = class CreditCardNewModule {
};
CreditCardNewModule = __decorate([
    NgModule({
        declarations: [CreditCardNewComponent],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [CreditCardNewComponent]
    })
], CreditCardNewModule);

let VideoUploadComponent = class VideoUploadComponent {
    constructor(http) {
        this.http = http;
        this.url = 'http://assist.aaadev.info/api/';
        this.path = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.schema = "core";
        this.fileResponse = new EventEmitter;
        this.deletefileResponse = new EventEmitter;
        this.fileId = '0';
        this.fileGroupId = '0';
        this.GenericToken = "12fc01a7eea74138b9e7a35c90dadf7412fc01a7eea74138b9e7a35c90dadf74";
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        if (this.fileGroupId != '0' && this.fileGroupId != 0) {
            const body = {
                FilesGroupId: this.fileGroupId,
                ImageVideo: 'VIDEO'
            };
            const url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(files => {
                if (files != undefined && files != null && files != '') {
                    this.videoLink = this.path + files[0].FileUrl;
                    let arr = files[0].FileUrl.split(".");
                    this.thumbUrl = this.path + arr[0] + '.jpg';
                    this.fileId = files[0].FilesId;
                    console.log(this.fileId);
                }
            });
        }
    }
    uploadAndProgress(files) {
        for (let i = 0; i < files.length; i++) {
            var formData = new FormData();
            formData.append('file', files[i], files[i].name);
            formData.append('id', this.fileId);
            formData.append('filegroupid', this.fileGroupId);
            formData.append('mediaType', 'video');
            formData.append('description', files[i].name);
            this.http.post(this.url + 'VideoUploader/UploadNew', formData, { reportProgress: true, observe: 'events' })
                .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof HttpResponse) {
                    this.uploadSuccess = true;
                    setTimeout(() => {
                        this.uploadSuccess = false;
                        this.percentDone = 0;
                        this.fileResponse.emit(event.body);
                        this.videoLink = this.path + event.body['FileUrl'];
                        let arr = event.body['FileUrl'].split(".");
                        this.thumbUrl = this.path + arr[0] + '.jpg';
                    }, 3000);
                }
            });
        }
    }
    deleteFIles(fileId) {
        this.http.delete(this.url + "Models/files/" + fileId + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.thumbUrl = '';
                this.videoLink = '';
                this.deletefileResponse.emit(res);
            }
        });
    }
};
VideoUploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], VideoUploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "path", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "database", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "schema", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "fileResponse", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "deletefileResponse", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileGroupId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "GenericToken", void 0);
VideoUploadComponent = __decorate([
    Component({
        selector: 'sml-video-upload',
        template: `
  <div class="upload-area">
  <span class="uploadvideo" *ngIf="!percentDone && !thumbUrl">Upload Video </span>
  <img *ngIf="!percentDone && !thumbUrl" src="assets/video_upload.png" class="img-video-icon" />
  <a *ngIf="thumbUrl" target="_blank" [href]="videoLink"> <img  [src]="thumbUrl" width="248" height="150"/> </a>
  <input type="file" *ngIf="!thumbUrl" multiple class="file_input" id="upload" (change)="uploadAndProgress($event.target.files)" accept="video/*">
  <div class="progress-div" *ngIf="percentDone">
    <div class="fz14" *ngIf="uploadSuccess">
      <span>Uplaod Done</span>
    </div>
    <div class="fz14">
      <span>{{percentDone}}%</span>
    </div>
    <div class="progressContainer">
      <div class="procesbar"></div>
      <div class="w-100 z9">
        <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
      </div>
    </div>
    </div>
    <span class="remove_icon" *ngIf="thumbUrl">
      <i class="fa fa-times" (click)="deleteFIles(fileId)"></i>
    </span>
  </div>
  `,
        styles: [`
  .upload-area{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}
  .img-video-icon{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}
  .progressContainer {width: 100%;padding-left: 5px;padding-right: 5px;}
  .progressbar {height: 9px;background: green;float: left;border-radius: 4px;}
  .fz14 {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}
  .progress-div{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}
  .remove_icon{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}
  .uploadvideo{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}
  `]
    })
], VideoUploadComponent);

let VideoUploadModule = class VideoUploadModule {
};
VideoUploadModule = __decorate([
    NgModule({
        declarations: [VideoUploadComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule
        ],
        exports: [VideoUploadComponent]
    })
], VideoUploadModule);

let ContactUsComponent = class ContactUsComponent {
    constructor(http) {
        this.http = http;
        this.itemObject = {
            id: 5,
            emailTo: "",
            myObject: {}
        };
        this.GenericToken = "";
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.responseCall = new EventEmitter;
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
            });
        }
    }
    sendMail() {
        let url = this.apiURL + "Email/SendTemplateWIthSMTP/" + this.itemObject.id + "?emailTo=" + this.itemObject.emailTo;
        let body = this.itemObject.myObject;
        this.http.post(url, body).subscribe(res => {
            this.responseCall.emit(res);
        }, error => {
            alert(error);
        });
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ContactUsComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "buttonStyle", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "itemObject", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "GenericToken", void 0);
__decorate([
    Input()
], ContactUsComponent.prototype, "apiURL", void 0);
__decorate([
    Output()
], ContactUsComponent.prototype, "responseCall", void 0);
ContactUsComponent = __decorate([
    Component({
        selector: 'sml-contact-us',
        template: `
  <div class="main-row">
  <sml-input-text [label]="'Email To'" [name]="'emailTo'" [value]="itemObject.emailTo" (getvalue)="itemObject.emailTo = $event;" [maskType]="''"
    [switchStyle]="'true'" [style]="labelStyle" [staticStyle]="'true'" [borderStyle]="borderStyle" [valueStyle]="valueStyle">
  </sml-input-text>
  </div>
  <div class="main-row" style="text-align: center;">
    <sml-button [label]="'Send Email'" [btnCl]="'btn-primary'" (buttonClick)="sendMail()" [buttonStyle]="buttonStyle">
    </sml-button>
  </div>
  `,
        styles: [`.main-row{width: 100%;margin-bottom: 7px;`]
    })
], ContactUsComponent);

let ContactUsModule = class ContactUsModule {
};
ContactUsModule = __decorate([
    NgModule({
        declarations: [ContactUsComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            TextModule,
            ButtonModule
        ],
        exports: [ContactUsComponent]
    })
], ContactUsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { AddressComponent, AddressModule, AlertComponent, AlertModule, BreadcrumbComponent, BreadcrumbModule, ButtonComponent, ButtonGroupModule, ButtonModule, ButtongroupComponent, ContactUsComponent, ContactUsModule, CreditCardComponent, CreditCardModule, CreditCardNewComponent, CreditCardNewModule, CropImageUploadComponent, CropImageUploadModule, ImageUplaodBoxModule, ImageUploadBoxComponent, ImagecropComponent, ImagecropModule, ImagesLightBoxComponent, ImagesLightBoxModule, InputTagComponent, InputTagModule, ListSearchComponent, ListSearchModule, MultiSelectComponent, MultiSelectModule, MultifileuploadComponent, MultifileuploadModule, NavbarComponent, NavbarModule, NotesComponent, NotesModule, ProgressBarModule, ProgressbarComponent, RadioCheckBoxListComponent, RadioCheckBoxListModule, SinglefileuploadComponent, SinglefileuploadModule, TableComponent, TableModule, TilesRadioComponent, TilesRadioModule, VideoUploadComponent, VideoUploadModule, ColumnComponent as ɵa, HeaderComponent as ɵb, FooterComponent as ɵc, PaginationComponent as ɵd, TableBodyComponent as ɵe, SearchComponent as ɵf, CountComponent as ɵg, SubmenuComponent as ɵh, MenuComponent as ɵi, ProfileMenuComponent as ɵj, ProfileSubMenuComponent as ɵk };
//# sourceMappingURL=sml-comp-nine.js.map
