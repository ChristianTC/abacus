(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@agm/core'), require('@angular/common'), require('@angular/forms'), require('@ng-select/ng-select'), require('sml-inputs-nine'), require('sweetalert2/dist/sweetalert2.js'), require('@sweetalert2/ngx-sweetalert2'), require('moment'), require('ngx-swiper-wrapper'), require('@angular/http'), require('rxjs'), require('rxjs/Rx'), require('@angular/router'), require('ngx-chips'), require('angular-ng-autocomplete'), require('ngx-image-cropper'), require('ng-payment-card')) :
    typeof define === 'function' && define.amd ? define('sml-comp-nine', ['exports', '@angular/core', '@angular/common/http', '@agm/core', '@angular/common', '@angular/forms', '@ng-select/ng-select', 'sml-inputs-nine', 'sweetalert2/dist/sweetalert2.js', '@sweetalert2/ngx-sweetalert2', 'moment', 'ngx-swiper-wrapper', '@angular/http', 'rxjs', 'rxjs/Rx', '@angular/router', 'ngx-chips', 'angular-ng-autocomplete', 'ngx-image-cropper', 'ng-payment-card'], factory) :
    (global = global || self, factory(global['sml-comp-nine'] = {}, global.ng.core, global.ng.common.http, global.core$1, global.ng.common, global.ng.forms, global.ngSelect, global.smlInputsNine, global.Swal, global.ngxSweetalert2, global.moment_, global.ngxSwiperWrapper, global.ng.http, global.rxjs, global.rxjs.Rx, global.ng.router, global.ngxChips, global.angularNgAutocomplete, global.ngxImageCropper, global.ngPaymentCard));
}(this, (function (exports, core, http, core$1, common, forms, ngSelect, smlInputsNine, Swal, ngxSweetalert2, moment_, ngxSwiperWrapper, http$1, rxjs, Rx, router, ngxChips, angularNgAutocomplete, ngxImageCropper, ngPaymentCard) { 'use strict';

    Swal = Swal && Object.prototype.hasOwnProperty.call(Swal, 'default') ? Swal['default'] : Swal;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var AddressComponent = /** @class */ (function () {
        function AddressComponent(http$1, mapsAPILoader, ngZone) {
            this.http = http$1;
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
            this.getvalue = new core.EventEmitter;
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
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
            { type: http.HttpClient },
            { type: core$1.MapsAPILoader },
            { type: core.NgZone }
        ]; };
        __decorate([
            core.ViewChild('search')
        ], AddressComponent.prototype, "searchElementRef", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "object", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "itemObject", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "addressStr", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "labelStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "selectValueStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "buttonStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "lableBoxStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "borderBoxStyle", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "mapBoxStyle", void 0);
        __decorate([
            core.Output()
        ], AddressComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "GenericToken", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "schema", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "procedure", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], AddressComponent.prototype, "body", void 0);
        AddressComponent = __decorate([
            core.Component({
                selector: 'sml-address',
                template: "\n  <div class=\"row\">\n\t<div class=\"col-md-6\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t\t<sml-input-text [label]=\"'Address'\" [name]=\"'address'\" [value]=\"itemObject.address\" (getvalue)=\"itemObject.address = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-4 pl-0 pr-0\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t\t<sml-input-text [label]=\"'Address (2nd line)'\" [name]=\"'address2'\" [value]=\"itemObject.address2\" (getvalue)=\"itemObject.address2 = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-2 pl-0 text-right\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n    <img src=\"assets/images/goole_map.png\" id=\"googleMapImages\" name=\"googlemapimages\" style=\"cursor: pointer;\" width=\"90%\" height=\"44\" (click)=\"openGoogle()\" />\n\t</div>\n\t<div class=\"col-md-8 pr-0\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<input type=\"text\" id=\"autocomplete\" class=\"form-control\" placeholder=\"Search address\" name=\"autocomplete\"\n\t\t #search>\n\t</div>\n\t<div class=\"col-md-2 text-right pr-0\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<sml-button [label]=\"'Apply'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"apply($event)\" [buttonStyle]=\"buttonStyle\">\n\t\t</sml-button>\n  </div>\n  <div class=\"col-md-2 text-right\" [ngClass]=\"{'hide-div': !isGoogleOpen}\">\n\t\t<sml-button [label]=\"'Close'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"closeGoogle($event)\" [buttonStyle]=\"buttonStyle\">\n\t\t</sml-button>\n\t</div>\n</div>\n<div class=\"row mt-2\" [ngClass]=\"{'hide-div': isGoogleOpen}\">\n\t<div class=\"col-md-3\">\n\t\t<sml-input-text [label]=\"'Zip Code'\" [name]=\"'zipcode'\" [value]=\"itemObject.zipcode\" (getvalue)=\"itemObject.zipcode = $event;\"\n\t\t [maskType]=\"''\" [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-5 pl-0\">\n\t\t<sml-input-text [label]=\"'City'\" [name]=\"'city'\" [value]=\"itemObject.city\" (getvalue)=\"itemObject.city = $event;\" [maskType]=\"''\"\n\t\t [switchStyle]=\"switchStyle\" [staticStyle]=\"'true'\" [style]=\"labelStyle\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n\t\t</sml-input-text>\n\t</div>\n\t<div class=\"col-md-4 pl-0\">\n  <sml-input-select [label]=\"'State'\" [listValue]=\"dropdownList\" [value]=\"itemObject.state\" (selectvalue)=\"itemObject.state = $event\"\n  [style]=\"labelStyle\" [staticStyle]=\"'true'\" [borderStyle]=\"borderStyle\" [valueStyle]=\"selectValueStyle\" [switchStyle]=\"switchStyle\">\n  </sml-input-select>\n\t</div>\n</div>\n<div *ngIf=\"object?.isShowAddressBox\" class=\"addressField mt-2\" [ngStyle]=\"borderBoxStyle\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.address}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.address2}}</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 pl-4\">\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.city}}</label>\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.state}}</label>\n\t\t\t<label class=\"pr-1 mb-0\" [ngStyle]=\"lableBoxStyle\">{{itemObject.zipcode}}</label>\n\t\t</div>\n\t</div>\n</div>\n<div *ngIf=\"object?.isShowMapBox\" class=\"mapField\" [ngStyle]=\"mapBoxStyle\">\n\t<agm-map [style.height]=\"mapBoxStyle?.height\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n\t\t<agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n\t</agm-map>\n</div>\n  ",
                styles: ["\n  .addressField{width:100%;min-height:85px;height:auto;border:1px solid lightgray;padding-top:5px;}\n  .mapField{width:100%;min-height:370px;border:1px solid lightgray;margin-top:14px;overflow:hidden;}\n  .pad-l-12{padding-left:12px !important;}\n  .pad-l-0{padding-left:0px !important;}\n   agm-map{height:370px;}\n  .hide-div{display:none;}\n   #autocomplete{height: 45px !important;border-radius: 4px;}\n   .col-md-2{padding-left: 3px !important;}\n   .col-md-6 {padding-right: 7px !important;}\n   .col-md-3 {padding-right: 7px !important;}\n   .col-md-5 {padding-right: 7px !important;}\n   #autocomplete:focus{outline: none;box-shadow: none;border-color: lightgray; }\n  "]
            })
        ], AddressComponent);
        return AddressComponent;
    }());

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent(elementRef) {
            this.elementRef = elementRef;
            this.buttonClick = new core.EventEmitter;
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        ButtonComponent.prototype.ngOnChanges = function (event) {
            if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
                var css = event.buttonStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
                this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
                this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
                this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
                this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
            }
        };
        ButtonComponent.prototype.clickEvent = function () {
            this.buttonClick.emit();
        };
        ButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "icon", void 0);
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "btnCl", void 0);
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "iconCl", void 0);
        __decorate([
            core.Input()
        ], ButtonComponent.prototype, "buttonStyle", void 0);
        __decorate([
            core.Output()
        ], ButtonComponent.prototype, "buttonClick", void 0);
        ButtonComponent = __decorate([
            core.Component({
                selector: 'sml-button',
                template: "\n  <button type=\"button\" class=\"btn\" [ngClass]=\"btnCl\" [ngStyle]=\"buttonStyle\" (click)=\"clickEvent()\">\n  <i *ngIf=\"icon\" class=\"fas\" [ngClass]=\"iconCl\"></i>\n  <span *ngIf=\"!icon\">{{label}}</span>\n  </button>\n  ",
                styles: ["\n  /* css variable */\n  :host {\n          --focus-color: #82B056;\n      --focus-spread: 0px;\n      --focus-blur: 0px;\n      --focus-x: 0px;\n      --focus-y: 0px;\n  }\n  \n  .btn.btn-sm{\n      width: 90% !important;\n      padding: 8px 20px !important;\n      font-size: 14px; margin: 0 5px;\n  }\n  .btn:focus {\n      outline: 0;\n      box-shadow: var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color) !important;\n  }\n  "]
            })
        ], ButtonComponent);
        return ButtonComponent;
    }());

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule = __decorate([
            core.NgModule({
                declarations: [ButtonComponent],
                imports: [
                    common.CommonModule
                ],
                exports: [ButtonComponent]
            })
        ], ButtonModule);
        return ButtonModule;
    }());

    var AddressModule = /** @class */ (function () {
        function AddressModule() {
        }
        AddressModule = __decorate([
            core.NgModule({
                declarations: [AddressComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngSelect.NgSelectModule,
                    ButtonModule,
                    smlInputsNine.TextModule,
                    smlInputsNine.SelectModule,
                    core$1.AgmCoreModule.forRoot({
                        apiKey: "AIzaSyAqOJ907gt1wO7d96gBY3rXhXpK-gi4oPw",
                        libraries: ["places"]
                    }),
                ],
                exports: [AddressComponent]
            })
        ], AddressModule);
        return AddressModule;
    }());

    var AlertComponent = /** @class */ (function () {
        function AlertComponent() {
        }
        AlertComponent.prototype.ngOnInit = function () {
        };
        AlertComponent.prototype.success = function () {
            Swal.fire({
                title: 'Done!',
                text: 'This is not implemented yet :/',
                type: 'success'
            });
        };
        AlertComponent.prototype.error = function () {
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                type: 'error',
            });
        };
        AlertComponent.prototype.info = function () {
            Swal.fire({
                title: 'Done!',
                text: 'This is not implemented yet :/',
                type: 'info'
            });
        };
        AlertComponent.prototype.warning = function () {
            Swal.fire({
                title: 'Done!',
                imageUrl: 'https://unsplash.it/400/200',
                text: 'This is not implemented yet :/',
                type: 'warning'
            });
        };
        AlertComponent.prototype.doubt = function () {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then(function (result) {
                if (result.value) {
                    Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    // For more information about handling dismissals please visit
                    // https://sweetalert2.github.io/#handling-dismissals
                }
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        };
        AlertComponent.prototype.delete = function () {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it'
            }).then(function (result) {
                if (result.value) {
                    Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                    // For more information about handling dismissals please visit
                    // https://sweetalert2.github.io/#handling-dismissals
                }
                else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
        };
        AlertComponent = __decorate([
            core.Component({
                selector: 'sml-alert',
                template: "\n  <div class=\"d-flex justify-content-between\">\n<button (click)=\"success()\" class=\"btn btn-success btn-sm w-100 mx-1\">\n  Success\n</button>\n<button  (click)=\"error()\" class=\"btn btn-danger btn-sm w-100 mx-1\">\n  Error\n</button>\n<button  (click)=\"info()\" class=\"btn btn-primary btn-sm w-100 mx-1\">\nInfo\n</button>\n<button  (click)=\"doubt()\" class=\"btn btn-info btn-sm w-100 mx-1\">\n  Doubt\n</button>\n<button  (click)=\"warning()\" class=\"btn btn-warning btn-sm w-100 mx-1\">\n  Warning\n</button> \n<button class=\"btn btn-primary btn-sm\" (click)=\"delete()\">Delete File</button>\n</div>\n  ",
                styles: ["\n  \n  "]
            })
        ], AlertComponent);
        return AlertComponent;
    }());

    var AlertModule = /** @class */ (function () {
        function AlertModule() {
        }
        AlertModule = __decorate([
            core.NgModule({
                declarations: [AlertComponent],
                imports: [
                    common.CommonModule,
                    ngxSweetalert2.SweetAlert2Module.forRoot(),
                ],
                exports: [AlertComponent]
            })
        ], AlertModule);
        return AlertModule;
    }());

    var moment = moment_;
    var NotesComponent = /** @class */ (function () {
        function NotesComponent(http$1) {
            this.http = http$1;
            this.noteId = "0";
            this.noteData = [];
            this.apiURL = 'http://apinext.aaadev.info/apinext/';
            this.fileurl = 'http://preview.abacuscrm.net/media/';
            this.GenericToken = "";
            this.dataBase = "APPS";
            this.spList = "core/NOTE_ListLog";
            this.clickMethod = new core.EventEmitter();
            this.myInput = { value: '' };
            this.NoteObject = {
                NoteId: 0,
                Notes: "",
                ChangedBy: ""
            };
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            this.User = JSON.parse(localStorage.getItem('Session.User'));
        }
        NotesComponent.prototype.ngOnInit = function () {
            this.getNotes();
        };
        NotesComponent.prototype.getNotes = function () {
            var _this = this;
            if (this.noteId == '0') {
                return false;
            }
            this.noteData = [];
            var url = this.apiURL + "Data/Exec/" + this.dataBase + "/" + this.spList + "?api_key=" + this.GenericToken;
            var body = {
                NoteId: this.noteId
            };
            this.http.post(url, body, this.httpOptionJSON).subscribe(function (data) {
                if (data) {
                    var temp = [];
                    for (var i = 0; i < data.length; i++) {
                        var nType = {
                            user: data[i].ChangedBy == '' ? (_this.User.FirstName + ' ' + _this.User.LastName) : data[i].ChangedByComplete,
                            userUrl: _this.fileurl + data[i].FileUrl,
                            note: data[i].Notes,
                            date: _this.format(data[i].ChangedOn, 'MM/DD/YYYY'),
                            time: _this.format(data[i].ChangedOn, 'HH:MM:SS A'),
                            read: data[i].IsAction == "True" ? 'unread' : 'read',
                        };
                        temp.push(nType);
                    }
                    _this.noteData = _this.groupBy(temp);
                }
            });
        };
        NotesComponent.prototype.saveNote = function () {
            var _this = this;
            if (this.noteId != "0") {
                this.NoteObject.ChangedBy = this.User.UserName;
                this.NoteObject.NoteId = this.noteId;
                var url = this.apiURL + "Data/Exec/" + this.dataBase + "/core/NOTE_SaveLog?api_key=" + this.GenericToken;
                this.http.post(url, this.NoteObject, this.httpOptionJSON).subscribe(function (note) {
                    _this.NoteObject.Notes = "";
                    _this.getNotes();
                }, function (error) {
                    alert(error);
                });
            }
        };
        NotesComponent.prototype.onInput = function (event) {
            var code = event.keyCode;
            var note = event.target.value;
            if (code == 13 && note != '') {
                this.NoteObject.Notes = note;
                this.clickMethod.emit({ note: note });
                this.saveNote();
                event.target.value = '';
            }
        };
        NotesComponent.prototype.onInput1 = function (event) {
            var note = event;
            this.NoteObject.Notes = note;
            this.clickMethod.emit({ note: note });
            this.saveNote();
            this.myInput = '';
            event = '';
        };
        NotesComponent.prototype.isToday = function (date) {
            if (moment(date).format('MM/DD/YYYY') == moment(new Date()).format('MM/DD/YYYY')) {
                return 'Today';
            }
            return date;
        };
        NotesComponent.prototype.groupBy = function (data) {
            var groupByDate = {};
            var groupByarray = [];
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
                var nType = {
                    date: key,
                    noteData: groupByDate[key]
                };
                groupByarray.push(nType);
            }
            return groupByarray;
        };
        NotesComponent.prototype.format = function (data, format) {
            return moment(new Date(data)).format(format);
        };
        NotesComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "noteId", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "noteData", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "fileurl", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "GenericToken", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "dataBase", void 0);
        __decorate([
            core.Input()
        ], NotesComponent.prototype, "spList", void 0);
        __decorate([
            core.Output()
        ], NotesComponent.prototype, "clickMethod", void 0);
        NotesComponent = __decorate([
            core.Component({
                selector: 'sml-notes',
                template: "\n\n  <div class=\"notesWrapper\">\n    <h4 class=\"head\">Notes</h4>\n    <div class=\"notesLayout\">\n        <div class=\"notesTextType\">\n            <div class=\"noteTextContainer\">\n                <textarea rows=\"3\" class=\"noteTexarea\" #textarea [(ngModel)]=\"myInput.value\" (keyup)=\"onInput($event)\" name=\"chat\">\n                </textarea>\n                    <label class=\"label\" [ngClass]=\"{'op':myInput.value != ''}\" >Enter your note here</label>\n                <a (click)=\"this.onInput1(textarea.value)\" class=\"postBtn\">\n                    <span class=\"divider\">|</span>\n                    <img src=\"assets/send.png\" class=\"sendimg\">\n                </a>\n            </div>\n            <div class=\"hr\"></div>\n        </div>\n        <div class=\"noteContainer\">\n            <div class=\"notesHistory\">\n              <div *ngFor=\"let dateGroup of noteData\">\n                <div class=\"date\">\n                    {{ isToday(dateGroup.date)}}\n                </div>\n                <ul class=\"notesList\">\n                    <li *ngFor=\"let data of dateGroup.noteData\" class=\"{{data.read}}\">\n                        <div class=\"userImg\">\n                        <span>\n                            <img  src=\"{{data?.userUrl}}\" class=\"avatar\"  onerror=\"this.onerror=null; this.src='assets/usericon.png'\">\n                        </span>\n                        </div>\n                        <div class=\"notesInfo\">\n                            <div class=\"noteinfohead\">\n                                <div class=\"notesNameTiming\">\n                                    <span>{{data.user}} &nbsp;</span>\n                                    <span class=\"noteTime\"> /&nbsp; {{data.time}}</span>\n                                </div>\n                                <div class=\"hrpoint\"></div>\n                                <div class=\"status\">\n                                    <span class=\"notesStatus\"></span>\n                                </div>\n                            </div>\n                            <p class=\"notesMessage\">{{data.note}}</p>\n                        </div>\n                    </li>\n                </ul>\n              </div>  \n            </div>\n        </div>\n    </div>\n</div>\n\n  ",
                styles: ["\n\nul { margin: 0; padding: 0 }\nli { list-style: none; }\n.mylist{width: 100%; display: inline-block;}\n.fz12 { font-size: 12px;  }\n.fz14 { font-size: 14px;  }\n.fz16 { font-size: 16px;  }\n.mgb5{margin-bottom: 5px;}\n.mgt5{margin-top: 5px;}\n.mgt10{margin-top: 10px;}\n.containerComponent{width: 100%; float: left;  padding: 15px; border:1px solid #f5f5f5;}\n.full-w{width: 100%; display: inline-block;}\n.mychatsystem{margin: 0; padding: 0; width: 100%; float: left;}\n.noteInput{resize: none; outline: none; }\n.mychatsystem li{list-style: none;}\n.noteInput{outline: none !important; box-shadow: none;}\n.d-flex{display: flex;}\n.justify-content-between{justify-content: space-between;}\n.uv_dp { height: 50px; width: 55px; background-color: #f7f7f7; display: inline-block; }\n.bg_list { background-color: #ffd5d5; border-radius: 7px; padding: 7px; font-size: 13px; border-top-left-radius: 0; float: left;}.dp_wrapper { width:100%; display: flex; }\n.uv_details { width: 90%; float: right;  position: relative; top: -27px;}\n.chat_name{font-size: 14px; font-weight: normal; color: #a0a0a0; font-family: sans-serif;}\n.chat_date{font-size: 12px; color: #9e9e9e; margin-left:0; margin-top: 2px; display: inline-block; font-family: sans-serif;}\n.adddata{width: 100%; display: inline-block; padding: 3px; resize: none; border-radius: 3px; border: 1px solid #e6e6e6; font-size: 13px; overflow: hidden; height: 60px;}\n.mylist{float: left; width: 100%;}\n.username{margin-left: 11px; width: 100%; justify-content: flex-end; align-items: flex-end; flex-direction: column;}\n.rightside .uv_details{width: 90%; float: left;  position: relative; top: -27px; text-align: right; align-items: flex-end}\n.secondPersion{display: flex; align-items: flex-end; width: 100%;}\n.fright{display: flex;   width: 100%;   justify-content: flex-end;}\n.meui{margin-right: 13px;}\n.contenttype{margin-right: 18px;}\n.topright{ border-radius: 7px; border-top-right-radius: 0; background-color: #d9fbda;}\n.usernameFirst{margin-left: 14px;}\n.d_line{ position: absolute; width: 100%; height: 1px; background-color: #e6e6e6; top: 56%;   z-index: -1; transform: translateY(-50%);} \n.d_text{ font-weight: 400 !important;  color: #000;} \n.usericon{width: 50px;}\n.notesHistory::-webkit-scrollbar {\n    width: 8px;\n    background-color: #fbfbfb;\n}\n.notesHistory::-webkit-scrollbar-track {\n    width: 3px;\n    background-color: #f0f0f0;\n    border-left: 3px solid #fbfbfb;\n    border-right: 3px solid #fbfbfb\n}\n\n.notesHistory::-webkit-scrollbar-thumb {\n    background-color: #e1e2e2;\n    border-radius: 30px;\n}\n\nbody {\n    font-family: Arial, Helvetica, sans-serif\n}\n\n.notesWrapper {\n    width: 100%;\n    max-width: 460px;\n    margin: 0 auto;\n}\n\n.head {\n    background-color: #f3f3f3;\n    color: #777;\n    padding: 8px 15px;\n    border-radius: 3px;\n}\n\n.notesLayout {\n    background-color: #fbfbfb;\n}\n\n.notesTextType {\n    padding: 12px 30px;\n}\n\n.noteTexarea {\n    width: 100%;\n    border-radius: 0.25em;\n    resize: none;\n    border-color: #d6d6d6;\n    padding: 18px 45px 15px 12px;\n    font-size: 14px\n}\n\n.noteTexarea:focus {\n    border-color: #8e8e8e;\n    outline: none;\n}\n.noteTexarea:focus + .label{\n    top:7px; font-size: 11px;\n    opacity: 0;\n}\n.op{\n    opacity: 0;\n}\n\n.noteTextContainer {\n    position: relative;\n    width: 100%;\n    margin-bottom: 8px\n}\n\n.label {\n    position: absolute;\n    top: 12px;\n    left: 13px;\n    margin-bottom: 0;\n    font-size: 14px;\n    color: #9d9d9dbd;\n    transition: ease-in-out 0.2s;\n}\n\n.postBtn {\n    display: inline-flex;\n    position: absolute;\n    bottom: 15px;\n    right: 12px;\n    text-decoration: none;\n    align-items: center;\n}\n\n.divider {\n    font-size: 20px;\n    color: #d6d6d6;\n}\n\n.hr {\n    width: 100%;\n    height: 1px;\n    background-color: #cddfbd;\n}\n\n.date {\n    text-align: center;\n    color: #abc98e;\n    font-size: 12px;\n    padding: 8px 0\n}\n\n.noteContainer {\n    padding: 0 10px;\n}\n\n.notesHistory {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    height: 400px;\n    padding: 0 20px;\n}\n\n.notesList {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n}\n\n.notesList li {\n    display: flex;\n    padding: 8px 12px;\n    border-radius: 4px;\n}\n\n.notesList li:not(:last-child) {\n    margin-bottom: 12px;\n}\n\n.notesList li.unread {\n    background-color: #fdeaeb;\n}\n\n.notesList li.read {\n    background-color: #fbfbfb;\n}\n\n.userImg {\n    width: 40px;\n}\n\n.avatar {\n    width: 34px;\n    height: 34px;\n    border-radius: 100%;\n    display: inline-block;\n    overflow: hidden;\n    background-color: #fff;\n}\n\n.notesNameTiming {\n    font-size: 11px;\n    width: 370px;\n}\n\n.noteTime {\n    color: #90b264;\n}\n\n.notesInfo {\n    width: calc(100% - 40px);\n    padding: 4px 0 4px 4px;\n}\n\n.noteinfohead {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    margin-bottom:3px\n}\n\n.hrpoint {\n    width: 100%;\n    height: 1px;\n    background-color: #c5ced5;\n    display: inline-block\n}\n\n.status {\n    width: 50px;\n    text-align: right;\n}\n\n.unread .notesStatus {\n    width: 10px;\n    height: 10px;\n    background-color: #6da23a;\n    display: inline-block;\n    border-radius: 100%;\n}\n\n.read .notesStatus {\n    width: 10px;\n    height: 10px;\n    background-color: #c5ced5;\n    display: inline-block;\n    border-radius: 100%;\n}\n\n.notesMessage {\n    font-size: 14px;\n    margin: 0;\n}\n\n.sendimg {\n    width: 20px;\n    margin-left: 4px;\n    position: relative;\n    top: 3px;\n}\n  "]
            })
        ], NotesComponent);
        return NotesComponent;
    }());

    var NotesModule = /** @class */ (function () {
        function NotesModule() {
        }
        NotesModule = __decorate([
            core.NgModule({
                declarations: [NotesComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                exports: [NotesComponent]
            })
        ], NotesModule);
        return NotesModule;
    }());

    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent() {
            this.StatusNotes = [];
            this.buttons = [];
            this.disable = false;
            this.actionClick = new core.EventEmitter;
            this.statusClick = new core.EventEmitter;
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
        BreadcrumbComponent.prototype.ngOnInit = function () {
            this.config.initialSlide = this.StatusNotes.length;
        };
        BreadcrumbComponent.prototype.toggleType = function () {
            this.type = (this.type === 'component') ? 'directive' : 'component';
        };
        BreadcrumbComponent.prototype.toggleDisabled = function () {
            this.disabled = !this.disabled;
        };
        BreadcrumbComponent.prototype.toggleDirection = function () {
            this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
        };
        BreadcrumbComponent.prototype.toggleSlidesPerView = function () {
            if (this.config.slidesPerView !== 1) {
                this.config.slidesPerView = 3;
            }
            else {
                this.config.slidesPerView = 1;
            }
        };
        BreadcrumbComponent.prototype.toggleOverlayControls = function () {
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
        };
        BreadcrumbComponent.prototype.toggleKeyboardControl = function () {
            this.config.keyboard = !this.config.keyboard;
        };
        BreadcrumbComponent.prototype.toggleMouseWheelControl = function () {
            this.config.mousewheel = !this.config.mousewheel;
        };
        BreadcrumbComponent.prototype.onIndexChange = function (index) {
            console.log('Swiper index: ', index);
        };
        BreadcrumbComponent.prototype.clickMethod = function (event) {
            this.actionClick.emit(event);
        };
        BreadcrumbComponent.prototype.goToIndex = function (index) {
            this.componentRef.directiveRef.setIndex(index);
        };
        BreadcrumbComponent.prototype.clickStatus = function (note) {
            this.statusClick.emit(note);
        };
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "StatusNotes", void 0);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "buttons", void 0);
        __decorate([
            core.Input()
        ], BreadcrumbComponent.prototype, "disable", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "actionClick", void 0);
        __decorate([
            core.Output()
        ], BreadcrumbComponent.prototype, "statusClick", void 0);
        __decorate([
            core.ViewChild(ngxSwiperWrapper.SwiperComponent)
        ], BreadcrumbComponent.prototype, "componentRef", void 0);
        __decorate([
            core.ViewChild(ngxSwiperWrapper.SwiperDirective)
        ], BreadcrumbComponent.prototype, "directiveRef", void 0);
        BreadcrumbComponent = __decorate([
            core.Component({
                selector: 'sml-breadcrumb',
                template: "\n<div class=\"mt-3\" *ngIf=\"StatusNotes.length <= 5\">\n    <div class=\"w-100 d-flex ng-star-inserted align-items-center\" style=\"padding-right: 0px;\">\n        <ng-template ngFor let-note [ngForOf]=\"StatusNotes\" let-i=\"index\">\n            <div class=\"vatOuter\" [ngClass]=\"{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}\" (click)=\"clickStatus(note)\">\n                <div class=\"vatMiddle\">\n                    <span class=\"checkMark\"><i class=\"fas fa-check-circle\"></i></span>\n                    {{ note.Description }}\n                </div>\n            </div>\n            <div *ngIf=\"note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)\" class=\"vatArrowR\">\n                <i class=\"fas fa-chevron-right\"></i>\n            </div>\n        </ng-template>\n        <div class=\"fropdown\" *ngIf=\"buttons.length > 0\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" [ngClass]=\"{'disabled': disable === true}\">\n                <span style=\"width:80%;\">{{buttons[0].Title}}</span>\n                <span class=\"dropdown-toggle-after\">\n                    <img src=\"./assets/Arrowcombobox.png\">\n                </span>\n            </button>\n            <div class=\"dropdown-menu\" >\n                <a *ngFor=\"let button of buttons;let i = index;\" class=\"dropdown-item\"  href=\"javascript:void(0)\"  (click)=\"clickMethod(button.Action)\">{{button.Title}}</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"mt-3\" *ngIf=\"StatusNotes.length > 5\">\n    <div class=\" swiperCustom d-flex align-items-center\">\n        <div class=\"swiper_wrap position-relative\">\n            <swiper #swiperComp *ngIf=\"type == 'component' && show\" [config]=\"config\" (indexChange)=\"onIndexChange($event)\"> \n                <ng-template  ngFor let-note [ngForOf]=\"StatusNotes\" let-i=\"index\">\n                    <div class=\"vatOuter\" [ngClass]=\"{'vatFirstCards' : i < StatusNotes.length - 1, 'card-inverse resultGreen' : i == StatusNotes.length - 1}\" (click)=\"clickStatus(note)\">\n                        <div class=\"vatMiddle\">\n                            <span class=\"checkMark\"><i class=\"fas fa-check-circle\"></i></span>\n                            {{ note.Description }}\n                        </div> \n                    </div>\n                    <div *ngIf=\"note.IsFinal != 1 && !((i + 1) == StatusNotes.length && buttons.length == 0)\" class=\"vatArrowR\">\n                        <i class=\"fas fa-chevron-right\"></i>\n                    </div> \n                </ng-template>  \n            </swiper>\n        </div>\n        <div class=\"fropdown\" *ngIf=\"buttons.length > 0\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" [ngClass]=\"{'disabled': disable === true}\">\n                <span style=\"width:80%;\">{{buttons[0].Title}}</span>\n                <span class=\"dropdown-toggle-after\">\n                    <img src=\"./assets/Arrowcombobox.png\">\n                </span>\n            </button>\n            <div class=\"dropdown-menu\" >\n                <a *ngFor=\"let button of buttons;let i = index;\" class=\"dropdown-item\" href=\"javascript:void(0)\" (click)=\"clickMethod(button.Action)\">{{button.Title}}</a>\n            </div>\n        </div>\n    </div>\n</div>\n  ",
                styles: ["\n.vatFirstCards {\n    background-color: #f2f2f2;\n    color: #808184\n}\n\n.vatOuter {\n    display: table;\n    /*position: absolute;*/\n    border-radius: 4px;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 150px;\n}\n\n.vatMiddle {\n    display: inline-flex;\n    font-size: 14px;\n    align-items: center;\n    padding: 10px 6px;\n    line-height: 1.4;\n    min-height: 57px;\n}\n\n.vatArrowR {\n    box-sizing: border-box;\n    margin: 0px 8px !important;\n    color: #bdbec0;\n}\n\n.swiperCustom .vatArrowR {\n    width: auto !important\n}\n\n.swiperCustom .vatOuter {\n    width: 170px !important\n}\n\n.resultGreen {\n    background-color: #8ec63f;\n    color: #fff\n}\n\n.textGreen {\n    color: #6da23a;\n    font-size: 10px;\n}\n\n.bg-gradient-blue {\n    background: rgb(81, 136, 218);\n    background: linear-gradient(135deg, rgba(81, 136, 218, 1) 0%, rgba(52, 135, 226, 1) 100%) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5188da', endColorstr='#3487e2', GradientType=1) !important;\n}\n\n\n    .checkMark {\n        font-size: 16px;\n        display: inline-block;\n        margin-right: 8px;\n    }\n\n    .swiper-wrapper {\n        align-items: center;\n    }\n\n    .dropdown-toggle-after{\n       content: '';\n       border: none;\n       font-family: 'Font Awesome 5 Free';\n       font-weight: 900;\n       color: #6a942f;\n       vertical-align: 0;\n       width: 35px !important;\n       height: 104%;\n       background: #a3d45d;\n       position: absolute;\n       z-index: 999;\n       top: -1px;\n       right: -1px;\n       border-radius: 5px;\n       border-bottom-left-radius: 0;\n       border-top-left-radius: 0;\n       display: flex;\n       justify-content: center;\n       align-items: center;\n\n   }\n   .dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}\n   .show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}\n   .dropdown-toggle {\n    width: 170px;\n    background-color: #8ec63f;\n    color: #fff;\n    display: inline-flex;\n    white-space: unset !important;\n    text-align: left;\n    align-items: center;\n    font-size: 14px;\n    padding:9px 6px;\n    line-height: 1.4;\n    position: relative;\n    min-height: 57px;\n}\n.dropdown-toggle::after {\n    display:none !important;\n}\n\n.dropdown-toggle:focus {\n    box-shadow: none;\n}\n\n/*.dropdown-menu{\n    padding: 0;\n    border: none;\n\n}\n*/\n.bordertop{\n    border: 1px solid #eae9e9cc;\n    position: relative; \n    margin-top: 20px; \n    border-radius: 3px;\n}\n.dropdown-item{\n    font-size: 14px;\n     padding: 6px;\n     border-left: 3px solid #fff;\n     white-space: pre-wrap !important;\n\n}\n.dropdown-divider{\n    margin: 0;\n}\n.dropdown-menu.show {\n     width: 175px;\n}\n.dropdown-item:hover{\n    background-color: #fff;\n    color: #8ec63f;\n    border-left: 3px solid #8ec63f;\n}\n\n.updrop{position: absolute; top: -19px; right: 18px;}\n  "]
            })
        ], BreadcrumbComponent);
        return BreadcrumbComponent;
    }());

    var BreadcrumbModule = /** @class */ (function () {
        function BreadcrumbModule() {
        }
        BreadcrumbModule = __decorate([
            core.NgModule({
                declarations: [BreadcrumbComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngxSwiperWrapper.SwiperModule
                ],
                exports: [BreadcrumbComponent]
            })
        ], BreadcrumbModule);
        return BreadcrumbModule;
    }());

    var ButtongroupComponent = /** @class */ (function () {
        function ButtongroupComponent() {
            this.obj = { label: 'My Dropdown', dropdownButtons: [] };
            this.actionClick = new core.EventEmitter;
            this.hoverAnchor = {};
        }
        ButtongroupComponent.prototype.ngOnInit = function () {
        };
        ButtongroupComponent.prototype.getHoverStyle = function () {
            var nType = {
                'background-color': '#fff',
                'color': this.buttonGroupStyle.backgroundcolor,
                'border-left': '3px solid' + this.buttonGroupStyle.backgroundcolor,
                'font-family': this.buttonGroupValueStyle['font-family'],
                'font-size': this.buttonGroupValueStyle['font-size'],
                'font-weight': this.buttonGroupValueStyle['font-weight'],
                'cursor': 'pointer'
            };
            return nType;
        };
        ButtongroupComponent.prototype.clickMethod = function (event) {
            this.actionClick.emit(event);
        };
        __decorate([
            core.Input()
        ], ButtongroupComponent.prototype, "obj", void 0);
        __decorate([
            core.Input()
        ], ButtongroupComponent.prototype, "buttonGroupStyle", void 0);
        __decorate([
            core.Input()
        ], ButtongroupComponent.prototype, "buttonGroupLabelStyle", void 0);
        __decorate([
            core.Input()
        ], ButtongroupComponent.prototype, "buttonGroupValueStyle", void 0);
        __decorate([
            core.Output()
        ], ButtongroupComponent.prototype, "actionClick", void 0);
        ButtongroupComponent = __decorate([
            core.Component({
                selector: 'sml-buttongroup',
                template: "\n\t<div class=\"w-100 mb-5\">\n\t<div class=\"form-row align-items-center mb-5\">\n\t\t<div class=\"col-md-12 col-12 mb-0\">\n\t\t\t<div class=\"btn-group\">\n\t\t\t\t<button type=\"button\" [ngStyle]=\"buttonGroupLabelStyle\" [style.background]=\"buttonGroupStyle?.backgroundcolor\" [style.width]=\"buttonGroupStyle?.width\"\n\t\t\t\t [style.height]=\"buttonGroupStyle?.height\" class=\"btn btn-default  dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t{{ obj.label }}\n\t\t\t\t\t<span [style.background]=\"buttonGroupStyle?.togglebackgroundcolor\" class=\"dropdown-toggle-after\" [style.height]=\"buttonGroupStyle?.height\">\n\t\t\t\t\t\t<img src=\"./assets/Arrowcombobox.png\">\n\t\t\t\t\t</span>\n\t\t\t\t</button>\n\t\t\t\t<div [style.width]=\"buttonGroupStyle?.width\" class=\"dropdown-menu\">\n\t\t\t\t\t<a *ngFor=\"let button of obj.dropdownButtons;let i = index;\" class=\"dropdown-item\" (mouseover)=\"hoverAnchor[i] = true\" (click)=\"clickMethod(button.action)\"\n\t\t\t\t\t (mouseleave)=\"hoverAnchor[i]=false\" [ngStyle]=\"hoverAnchor[i]?getHoverStyle(): buttonGroupValueStyle\">\n\t\t\t\t\t\t{{button.title}}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t",
                styles: ["\n\t\t\n.dropdown-toggle-after{\n    border: none;\n    font-family: 'Font Awesome 5 Free';\n    font-weight: 900;\n    color: #6a942f;\n    vertical-align: 0;\n    width: 35px !important;\n    height: 104%;\n    background: #a3d45d;\n    position: absolute;\n    z-index: 999;\n    top: -1px;\n    right: -1px;\n    border-radius: 5px;\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\n.dropdown-toggle-after img{width: 16px;  transition: ease-in-out all 0.2s}\n.show .dropdown-toggle-after img{transform: rotate(-180deg);  transition: ease-in-out all 0.2s}\n.dropdown-toggle {\n width: 175px;\n background-color: #8ec63f;\n border-radius: 6px;\n color: #fff;\n display: inline-flex;\n white-space: unset !important;\n text-align: left;\n align-items: center;\n font-size: 14px;\n padding:9px 6px;\n line-height: 1.4;\n position: relative;\n}\n\n.dropdown-toggle:focus {\n box-shadow: none;\n}\n\n.dropdown-item{\n    font-size: 14px;\n     padding: 6px;\n     border-left: 3px solid #fff;\n     white-space: pre-wrap !important;\n\n}\n.dropdown-divider{\n    margin: 0;\n}\n.dropdown-menu.show {\n     width: 175px;\n}\n.dropdown-item:hover{\n    background-color: #fff;\n    color: #8ec63f;\n    border-left: 3px solid #8ec63f;\n}\n\n.dropdown-toggle::after {\n    display:none;\n}\n\n.updrop{position: absolute; top: -19px; right: 18px;}\n\n\t"]
            })
        ], ButtongroupComponent);
        return ButtongroupComponent;
    }());

    var ButtonGroupModule = /** @class */ (function () {
        function ButtonGroupModule() {
        }
        ButtonGroupModule = __decorate([
            core.NgModule({
                declarations: [ButtongroupComponent],
                imports: [
                    common.CommonModule
                ],
                exports: [ButtongroupComponent]
            })
        ], ButtonGroupModule);
        return ButtonGroupModule;
    }());

    var SinglefileuploadComponent = /** @class */ (function () {
        function SinglefileuploadComponent(http$1) {
            this.http = http$1;
            this.idInputFile = 'other';
            this.global_url = '';
            this.url = 'http://apinext.aaadev.info/apinext/';
            this.fileurl = 'http://apinext.aaadev.info/';
            this.FilesGroupIdvalue = '0';
            this.FileId = '0';
            this.nameFile = '';
            this.dataBase = 'APPS';
            this.fileResponse = new core.EventEmitter;
            this.editContent = false;
            this.isFiles = false;
            this.datas = [];
            this.description = '';
            this.textdata = '';
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        SinglefileuploadComponent.prototype.ngOnInit = function () {
            this.getListdata();
        };
        SinglefileuploadComponent.prototype.upload = function (files) {
            this.uploadAndProgress(files);
        };
        SinglefileuploadComponent.prototype.getListdata = function () {
            var _this = this;
            this.http.get(this.url + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                _this.GenericToken = res["GenericToken"];
                if (_this.FilesGroupIdvalue) {
                    var body = {
                        FilesGroupId: _this.FilesGroupIdvalue,
                    };
                    var url = _this.url + "Data/Exec/" + _this.dataBase + "/core/FILES_List?api_key=" + _this.GenericToken;
                    _this.http.post(url, body, _this.httpOptionJSON).subscribe(function (res) {
                        _this.datas = res;
                        for (var i = 0; i < _this.datas.length; i++) {
                            var file_url = _this.global_url + _this.datas[i].FileUrl;
                            _this.datas[i].FileUrl = file_url;
                            _this.isFiles = true;
                        }
                        _this.UploadedFileli = true;
                    });
                }
            });
        };
        SinglefileuploadComponent.prototype.uploadAndProgress = function (files) {
            var _this = this;
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
            this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' }).subscribe(function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    _this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof http.HttpResponse) {
                    _this.uploadSuccess = true;
                    _this.UploadedFileli = true;
                    _this.filename = event.body["Description"];
                    _this.filelink = _this.fileurl + event.body["FileUrl"];
                    _this.isFiles = true;
                    _this.fileResponse.emit(event.body);
                    _this.getListdata();
                    setTimeout(function () {
                        _this.uploadSuccess = false;
                        _this.percentDone = 0;
                    }, 3000);
                }
            });
        };
        SinglefileuploadComponent.prototype.edit = function (data, i) {
            this.textdata = data.Description;
            this.contentIndex = i;
            this.editContent = true;
        };
        SinglefileuploadComponent.prototype.updateName = function (id) {
            var _this = this;
            var url = this.url + "Models/Files?api_key=" + this.GenericToken;
            var body = {
                FilesId: id,
                Description: this.textdata
            };
            this.http.post(url, body).subscribe(function (res) {
                _this.getListdata();
                _this.esc();
            });
        };
        SinglefileuploadComponent.prototype.esc = function () {
            this.editContent = false;
            this.contentIndex = null;
        };
        SinglefileuploadComponent.prototype.DeleteFIles = function (value) {
            var _this = this;
            this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(function (res) {
                var body = {
                    FilesGroupId: _this.FilesGroupIdvalue
                };
                var url = _this.url + "Data/Exec/" + _this.dataBase + "/core/FILES_List?api_key=" + _this.GenericToken;
                _this.http.post(url, body, _this.httpOptionJSON).subscribe(function (res) {
                    _this.datas = [];
                    _this.datas = res;
                    _this.isFiles = false;
                    for (var i = 0; i < _this.datas.length; i++) {
                        var file_url = _this.global_url + _this.datas[i].FileUrl;
                        _this.datas[i].FileUrl = file_url;
                    }
                    _this.UploadedFileli = true;
                });
            });
        };
        SinglefileuploadComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "idInputFile", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "global_url", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "fileurl", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "FileId", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "nameFile", void 0);
        __decorate([
            core.Input()
        ], SinglefileuploadComponent.prototype, "dataBase", void 0);
        __decorate([
            core.Output()
        ], SinglefileuploadComponent.prototype, "fileResponse", void 0);
        SinglefileuploadComponent = __decorate([
            core.Component({
                selector: 'sml-singlefileupload',
                template: "\n\t<div class=\"w-100\">\n\t<div class=\"form-row align-items-center\">\n\t\t<div class=\"col-12 mb-0\">\n\t\t\t<label class=\"col-md-12 dropdownarea\" for=\"{{idInputFile}}\">\n\t\t\t\t<div class=\"d-flex w-100 flex-column\">\n\t\t\t\t\t<input type=\"file\" id=\"{{idInputFile}}\" (change)=\"upload($event.target.files)\" class=\"drag\"\n\t\t\t\t\t\t[ngStyle]=\"{'height.px': height,'width.px': width}\" />\n\t\t\t\t\t<div class=\"d-flex align-content-start align-items-start w-100 flex-column\">\n\t\t\t\t\t\t<div class=\"d-flex align-content-start align-items-start\">\n\t\t\t\t\t\t\t<span class=\"uploadicon\"><img src=\"./assets/upload.png\" /></span>\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column position-relative w79\">\n\t\t\t\t\t\t\t\t<div class=\"fz14 top5\" [ngClass]=\"{'getData':isFiles}\">Choose a file or drag it here. \n\t\t\t\t\t\t\t\t\t<span *ngIf=\"percentDone\"> {{percentDone}}%</span></div>\n\t\t\t\t\t\t\t\t<div class=\"progressContainer\">\n\t\t\t\t\t\t\t\t\t<div class=\"procesbar\"></div> \n\t\t\t\t\t\t\t\t\t<div class=\"w-100 z9\" *ngIf=\"percentDone\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</label>\n\n\t\t\t<div class=\"listdata mt-5\" *ngIf=\"UploadedFileli\">\n\t\t\t\t<ul class=\"w-100 fileuploadlist\">\n\t\t\t\t\t<li *ngFor=\"let data of datas; let i = index\"\n\t\t\t\t\t\tclass=\"w-100 d-flex justify-content-between align-content-around\">\n\t\t\t\t\t\t<div class=\"w-100 mflex\" *ngIf=\"contentIndex != i\">\n\t\t\t\t\t\t\t<a href=\"{{data.FileUrl}}\" target=\"_blank\">{{data.Description}}</a>\n\t\t\t\t\t\t\t<div class=\"float-right d-flex justify-content-between align-content-around settingoption\">\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-success pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"edit(data,i)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/pencil-edit-button.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-danger pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"DeleteFIles(data.FilesId)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/cross.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"editContent && contentIndex == i\"\n\t\t\t\t\t\t\tclass=\"w-100 d-flex align-items-center\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control w-75\" name=\"textdata\" [value]=\"data.Description\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"textdata\" #ctrl=\"ngModel\">\n\t\t\t\t\t\t\t<div class=\"d-flex justify-content-between align-content-around settingoption\">\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-success pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"updateName(data.FilesId)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/checked.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-dark pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"esc()\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/cross.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t",
                styles: ["\n\t.cursor-pointer {\n\t\tcursor: pointer;\n\t  }\n\t  .node-content-wrapper, .tree-children {\n\t\tposition: relative;\n\t  }  \n\t  .cr-slider-wrap {\n\t\tmargin: 8px auto !important\n\t  }\n\t  .drag {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\tz-index:999999;\n\t  }\n\t  .dropdownarea {\n\t\twidth: 100%;\n\t\tborder: 1px dashed #ccc;\n\t\tpadding:10px 15px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65px;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tposition: relative;\n\t  }\n\t  .dropdownarea h1 {\n\t\tcolor: #7d7c7c;\n\t\tfont-size: 17px;\n\t  }\n\t  .pd5 {\n\t\tpadding: 89px 9px 76px 0px;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t  }\n\t  .table-headed {\n\t\tpadding: 15px;\n\t\tdisplay: block;\n\t  }\n\t  .mgt50 {\n\t\tmargin-top: 50px;\n\t  }\n\t  .btndefault {\n\t\tbackground-color: #f3f3f3;\n\t\tborder-color: #e6e6e6;\n\t\tcolor: #333;\n\t  }\n\t  .cross {\n\t\tdisplay: inline-block;\n\t\tfont-size: 12px;\n\t\tpadding: 5px;\n\t\tcolor: red;\n\t\tfont-weight: bold;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tmargin-left: 10px;\n\t  }\n\t  .progressbar {\n\t\theight: 2px;\n\t\tbackground: green;\n\t\tfloat: left;\n\t  }\n\t  .fz14 {\n\t\tfont-size: 14px;\n\t  }\n\t  .top50 {\n\t\ttop: 31px;\n\t\tleft: -19px;\n\t  }\n\t  .successmsg {\n\t\tfont-size: 14px;\n\t\tpadding: 10px;\n\t\tcolor: green;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttop: -82px;\n\t  }\n\t  .fileuploadlist {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t  }\n\t  .fileuploadlist li {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tmargin-bottom: 10px;\n\t  }\n\t  .fileuploadlist li a {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-size: 14px;\n\t\tcolor: #333;\n\t\ttext-transform: capitalize;\n\t  }\n\t  .pointer {\n\t\tcursor: pointer;\n\t  }\n\t  .cross img {\n\t\theight: 10px;\n\t  }\n\t  .listdata {\n\t\twidth: 100%;\n\t\tmax-width: calc(100% - 100px);\n\t\tposition: absolute;\n\t\tbottom:12px;\n\t\tleft:77px;\n\t\tbackground-color: #fff;;\n\t\tz-index: 9999999;\n\t  }\n\t  .mflex{\n\t\tdisplay: flex;\n\t\tbackground: #fff;\n\t\talign-items: center;\n\t\tmax-width: calc(100% - 100px);\n\t  }\n\t  .top5{\n\t\ttop:12px;\n\t\tposition: relative;\n\t  }\n\t  .getData{\n\t\ttop:5px;\n\t  }\n\t  .settingoption {\n\t\twidth: 50px;\n\t  }\n\t  .icons {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tborder-radius: 3px;\n\t  }\n\t  .checkbox {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 10px 0;\n\t  }\n\t  .styled-checkbox {\n\t\tposition: absolute;\n\t\topacity: 0;\n\t  }\n\t  .styled-checkbox+span {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t  }\n\t  .styled-checkbox+span:before {\n\t\tcontent: \"\";\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder: 1px solid #ccc;\n\t  }\n\t  .styled-checkbox:checked+span:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\ttop: 2px;\n\t\theight: 9px;\n\t\twidth: 5px;\n\t\tborder: solid #09b4bd;\n\t\tborder-width: 0 2px 2px 0;\n\t\t-webkit-transform: rotate(45deg);\n\t\ttransform: rotate(45deg);\n\t  }\n\t  .procesbar {\n\t\tbackground: #ccc;\n\t\theight: 2px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t  }\n\t  .progressContainer {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\ttop:16px;\n\t  }\n\t  .z9 {\n\t\tz-index: 99;\n\t\tposition: relative;\n\t  }\n\t  .w79 {\n\t\twidth: 82%;\n\t  }\n\t  .uploadicon {\n\t\tpadding: 10px;\n\t  }\n\t  .w-100 {\n\t\twidth: 100%;\n\t  }\n\t  .mb-5 {\n\t\tmargin-bottom: 3rem!important\n\t  }\n\t  .form-row {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\tmargin-right: -5px;\n\t\tmargin-left: -5px;\n\t  }\n\t  .col-12 {\n\t\tflex: 0 0 100%;\n\t\tmax-width: 100%;\n\t  }\n\t  .mb-0 {\n\t\tmargin-bottom: 0px!important;\n\t  }\n\t  .form-row>.col, .form-row>[class*=col-] {\n\t\tpadding-right: 5px;\n\t\tpadding-left: 5px;\n\t  }\n\t  .d-flex {\n\t\tdisplay: flex;\n\t  }\n\t  .position-relative {\n\t\tposition: relative;\n\t  }\n\t  .border {\n\t\tborder: 1px solid #dee2e6!important\n\t  }\n\t  .flex-column {\n\t\tflex-direction: column\n\t  }\n\t  .align-content-around {\n\t\talign-content: space-around\n\t  }\n\t  .bg-success {\n\t\tbackground-color: #28a745!important;\n\t  }\n\t  .bg-danger {\n\t\tbackground-color: #dc3545!important;\n\t  }\n\t  .justify-content-center {\n\t\t-webkit-box-pack: center!important;\n\t\t-ms-flex-pack: center!important;\n\t\tjustify-content: center!important;\n\t  }\n\t  .float-right {\n\t\tfloat: right!important;\n\t  }\n\t  .justify-content-between {\n\t\t-webkit-box-pack: justify!important;\n\t\t-ms-flex-pack: justify!important;\n\t\tjustify-content: space-between!important;\n\t  }\n\t  .floating-border{\n\t\tborder:1px solid #ccc;\n\t\tpadding: 15px !important;\n\t\tposition: relative;\n\t  }\n\t"]
            })
        ], SinglefileuploadComponent);
        return SinglefileuploadComponent;
    }());

    var SinglefileuploadModule = /** @class */ (function () {
        function SinglefileuploadModule() {
        }
        SinglefileuploadModule = __decorate([
            core.NgModule({
                declarations: [SinglefileuploadComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [SinglefileuploadComponent]
            })
        ], SinglefileuploadModule);
        return SinglefileuploadModule;
    }());

    var ImagecropComponent = /** @class */ (function () {
        function ImagecropComponent(http, _http) {
            this.http = http;
            this._http = _http;
            this.url = 'http://api.aaadev.info/apinext/uploader/uploadnew';
            this.path = 'http://apinext.aaadev.info/media/';
            this.OnSaveFile = new core.EventEmitter;
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
        ImagecropComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.dataApi = JSON.parse(localStorage.getItem('Session.DataApi'));
            $('#cropbtn_cam').hide();
            $('#video').hide();
            $('#preview').show();
            if (this.value == '0') {
                this.imagePath = 'assets/img/cropimage/avatar.png';
            }
            else {
                this.DataDB(this.dataApi.DataFiles.DataBase, this.dataApi.DataFiles.Schema, 'FILES_Retrieve', { FilesId: this.value }).subscribe((function (files) {
                    if (!(files == undefined || files == null || files == '') && files.length > 0) {
                        var urlImages = files[0].FileUrl.split('\\');
                        _this.imagePath = _this.path + files[0].FileUrl;
                    }
                }), (function (error) {
                    alert(error);
                    console.log(error);
                }));
            }
            this.videos = this.video == undefined || this.video == null ? null : this.video.nativeElement;
        };
        ImagecropComponent.prototype.ngAfterViewInit = function () {
            // const _video = this.video.nativeElement;
            // if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            //   navigator.mediaDevices.getUserMedia({ video: true })
            //     .then(stream => {
            //       _video.srcObject = stream;
            //       _video.play();
            //     });
            // }
        };
        ImagecropComponent.prototype.start = function () {
            this.initCamera({ video: true, audio: false });
        };
        ImagecropComponent.prototype.sound = function () {
            this.initCamera({ video: true, audio: true });
        };
        ImagecropComponent.prototype.initCamera = function (config) {
            var _this = this;
            var browser = navigator;
            browser.getUserMedia = (browser.getUserMedia ||
                browser.webkitGetUserMedia ||
                browser.mozGetUserMedia ||
                browser.msGetUserMedia);
            browser.mediaDevices.getUserMedia(config).then(function (stream) {
                //this.videos.src = window.URL.createObjectURL(stream);
                //this.video.play();
                _this.videos.srcObject = stream;
                _this.videos.play();
            }, function (error) {
                alert(error.message);
            });
        };
        ImagecropComponent.prototype.modelBox = function () {
            this.showModel = true;
            this.showUplaod = false;
            $('.crophide').hide();
        };
        ImagecropComponent.prototype.closeModel = function () {
            document.getElementById("upload").value = '';
            var crimg = $('#cimgdiv').croppie('destroy');
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
        };
        ImagecropComponent.prototype.capture = function () {
            $('#cimgdiv').croppie('destroy');
            $('#video').croppie('destroy');
            this.captures = [];
            this.camcropBtn = true;
            this.snapPhoto = false;
            var context = this.canvas.nativeElement.getContext('2d').drawImage(this.video.nativeElement, 0, 0, 640, 480);
            this.captures.push(this.canvas.nativeElement.toDataURL('image/png'));
            $('#video').hide();
            $('#cimgdiv').show();
            $('.savebtn').show();
            $('.snapPic').hide();
            $('#cropbtn').hide();
            this.imageName = "Capture.png";
            var crimg = $('#cimgdiv').croppie({
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
        };
        ImagecropComponent.prototype.cropcam = function () {
            var _this = this;
            $('.htmlbinds1').attr('src', '');
            $('.crophide').show();
            this.camcropBtn = false;
            $('#cimgdiv').croppie('result', { circle: true, }, 'html').then(function (html) {
                $('.htmlbinds1').attr('src', html);
                return html;
            })
                .then(function (res) {
                _this.captureImage = res;
            });
            $('#cimgdiv').hide();
            this.showUplaod = true;
        };
        ImagecropComponent.prototype.snapPhotoEvt = function () {
            this.start();
            $('#video').show();
            this.snapPhoto = true;
            $('#camswhi').hide();
            $('#htmlbinds, #preview').hide();
        };
        ImagecropComponent.prototype.fileChangeEvent = function (fileInput) {
            if (fileInput.target.files && fileInput.target.files[0]) {
                this.imageName = fileInput.target.files["0"].name;
                $('#cropbtn').show();
                $('.ddswhd').hide();
                this.cropBtn = true;
                var reader = new FileReader();
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
        };
        ImagecropComponent.prototype.crop = function () {
            var _this = this;
            $('.crophide').show();
            $('.htmlbinds1').attr('src', '');
            $('#preview').croppie('result', { circle: true }, 'html')
                .then(function (html) {
                $('.htmlbinds1').attr('src', html);
                return html;
            })
                .then(function (res) {
                _this.captureImage = res;
            });
            $('#preview').croppie('destroy');
            $('#preview').hide();
            $('#cropbtn').hide();
            this.showUplaod = true;
        };
        ImagecropComponent.prototype.upload = function () {
            var _this = this;
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
                .subscribe(function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    //this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof http.HttpResponse) {
                    document.getElementById("upload").value = '';
                    $('.htmlbinds').attr('src', '');
                    _this.avtarImage = true;
                    $('#cimgdiv').hide();
                    $('#cimgdiv').hide();
                    $('.ddswhd').show();
                    $('#cropbtn').show();
                    $('#camswhi,.hide').show();
                    $('#cropbtn').hide();
                    $('#preview').hide();
                    $('#video').hide();
                    _this.cropBtn = false;
                    _this.camcropBtn = false;
                    _this.snapPhoto = false;
                    _this.showModel = false;
                    _this.showUplaod = false;
                    $('.htmlbinds').attr('src', _this.captureImage);
                    _this.OnSaveFile.emit({ event: event });
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
        };
        ImagecropComponent.prototype.DataDB = function (database, schema, procedureName, params) {
            if (params === void 0) { params = {}; }
            var sqlInit = this.dataApi.ApiUrl + 'Data/Exec/';
            var headers = new http$1.Headers({ 'Content-Type': 'application/json' });
            var urlQuery = sqlInit + database + '/' + schema + '/' + procedureName + '?api_key=' + this.dataApi.AccessToken;
            return this._http.post(urlQuery, params, { headers: headers }).map((function (response) { return response.json(); })).catch(this.errorHandler);
        };
        ImagecropComponent.prototype.errorHandler = function (error) {
            return rxjs.Observable.throw(error || 'SERVER ERROR');
        };
        ImagecropComponent.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: http$1.Http }
        ]; };
        __decorate([
            core.ViewChild('video')
        ], ImagecropComponent.prototype, "video", void 0);
        __decorate([
            core.ViewChild('canvas')
        ], ImagecropComponent.prototype, "canvas", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "title", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], ImagecropComponent.prototype, "path", void 0);
        __decorate([
            core.Output()
        ], ImagecropComponent.prototype, "OnSaveFile", void 0);
        ImagecropComponent = __decorate([
            core.Component({
                selector: 'sml-imagecrop',
                template: "\n  <div class=\"homewrap\">\n  <div class=\"head_sec\">\n    <div class=\"relativeLeft\">{{ title }}</div>\n    <div class=\"relativeUser\">\n      <div class=\"user_DP  d-flex justify-content-center align-items-center\" [ngStyle]=\"{'height.px': height,'width.px': width}\">\n        <img src=\"{{ imagePath }}\" [ngClass]=\"{'avatar1': imagePath != '' && imagePath != 'assets/img/cropimage/avatar.png'}\" onerror=\"this.onerror=null; this.src='assets/img/cropimage/avatar.png'\" class=\"avatar\" *ngIf=\"!avtarImage\">\n        <img class=\"htmlbinds\" src=\"\">\n        <div class=\"camera_w\" (click)=\"modelBox()\">\n          <img src=\"./assets/whitecamara.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [class.showModel]=\"showModel\" class=\"model_wrap position-fixed w-100 h-100\">\n    <div class=\"overlay\"></div>\n    <div class=\"model_content bg-white position-relative\">\n      <div (click)=\"closeModel()\" class=\"position-absolute times\">&times;</div>\n      <div class=\"dandd_wrap d-flex flex-column \">\n        <div class=\"model_header text-center mb-4\">\n          <span class=\"d-inline-block hea\n            d_text\">Change Profile Pic</span>\n        </div>\n        <div class=\"imgdar mb-2\">\n          <div class=\"imgd_area ddswhd text-center d_flex flex-column align-items-center justify-content-center\" id=\"camswhi\">\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center mb-1\">\n              <img src=\"./assets/cloud-upload-arrow.svg\">\n              <span class=\"text-black-50 fz11 mb-1\">Drag & Drop</span>\n              <input type=\"file\" class=\"file_input\" id=\"upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/*\">\n              <span class=\"text-black-50 fz11 mb-1\">or</span>\n              <button class=\"btn btn-sm cst_btn ins_md_btn mbtn\">Upload Photo</button>\n            </div>\n            <span class=\"text-black-50 fz11 mb-1\">or</span>\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center cursor-pointer\" (click)=\"snapPhotoEvt()\">\n              <img src=\"./assets/photo-camera.svg\">\n              <span class=\"text-black-50 fz11\">Snap Photo</span>\n            </div>\n          </div>\n          <div class=\"text-center w-100 float-left\">\n            <img id=\"preview\" src=\"\" class=\"w-100\">\n          </div>\n          <div class=\"w-100 text-center\">\n            <img class=\"htmlbinds1 crophide\" src=\"\">\n          </div>\n          <!-- camera -->\n          <div class=\"w-100\">\n            <video #video id=\"video\" width=\"100%\" height=\"200\" autoplay></video>\n          </div>\n          <div class=\"w-100\">\n            <canvas #canvas id=\"canvas\" width=\"640\" height=\"480\" style=\"display:none\"></canvas>\n          </div>\n          <div id=\"cimgdiv\" class=\"w-100\"></div>\n          <div id=\"htmlbind\" class=\"saved_img text-center\"></div>\n          <!-- camera -->\n        </div>\n        <div *ngIf=\"snapPhoto\" class=\"text-center mb-2\">\n          <button class=\"btn px-4 btn-sm cst_btn mbtn\" (click)=\"capture()\">Snap photo</button>\n        </div>\n        <div *ngIf=\"cropBtn\" class=\"text-center mb-2 mt-2\" id=\"cropbtn\">\n          <button (click)=\"crop()\" class=\"btn px-4 btn-sm cst_btn\">Crop</button>\n        </div>\n        <div *ngIf=\"camcropBtn\" class=\"text-center mb-2\">\n          <button (click)=\"cropcam()\" class=\"btn px-4 btn-sm cst_btn mbtn mt-2\">Crop</button>\n        </div>\n        <div class=\"d-flex justify-content-center\" [ngClass]=\"{'justify-content-between': showUplaod}\">\n          <button (click)=\"closeModel()\" style=\"background: gainsboro;\" class=\"btn btn-sm mbtn px-4\">Cancel</button>\n          &nbsp;\n          <button *ngIf=\"showUplaod\" class=\"btn btn-sm btn-info bgc_blue px-4 mbtn\" (click)=\"upload()\">Upload</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n  ",
                styles: ["\n  .homewrap {\n    height: auto;\n    width: 100%\n}\n.head_sec {\n    background-color: #fff;\n    width: 100%;\n    min-height: auto;\n}\n.camera_w {\n    position: absolute;\n    height: 100%;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    opacity: 0;\n    visibility: hidden;\n    transition: all 0.4s\n}\n.camera_w img {\n    width: 26px;\n}\n.user_DP {\n    width: 100px;\n    height: 100px;\n    border: 1px solid #d6d6d6;\n    border-radius: 100%;\n    background-color: #f8f8f8;\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    cursor: pointer;\n    overflow: hidden;\n}\n.user_DP:hover .camera_w {\n    visibility: visible;\n    opacity: 1;\n    top: 0\n}\n.avatar {\n    width: 60px;\n}\n.avatar1 {\n  width: 120px !important;\n}\n.overlay {\n    background-color: rgba(0, 0, 0, 0.5);\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.times {\n    color: lightgray;\n    font-size: 30px;\n    right: 10px;\n    top: 0;\n    line-height: 30px;\n    cursor: pointer;\n}\n.ins_md_btn {\n    width: 86px;\n    padding: 4px 0;\n    font-size: 11px\n}\n.text-black-50 {\n    color: #a6a9ab;\n}\n.btn_select_group .btn {\n    padding: 8px 16px\n}\n.model_wrap {\n    display: none;\n    top: 0;\n    left: 0;\n    z-index: 9;\n}\n.model_content {\n    width: 320px;\n    min-height: 400px;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    border-radius: 4px;\n    padding: 30px;\n    box-shadow: 0 3px 6px #464545\n}\n.head_text {\n    color: #038888;\n    position: relative;\n    font-size: 18px;\n    padding: 6px 0\n}\n.head_text::after {\n    content: '';\n    display: block;\n    width: 40%;\n    height: 1px;\n    background-color: #038888;\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n.imgd_area {\n    height: 200px;\n    width: 200px;\n    border: 2px dashed #ccc;\n    margin: 0 auto;\n    border-radius: 100%;\n    overflow: hidden;\n}\n.imgd_area img {\n    width: 27px;\n}\n.file_input {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0\n}\n.cst_btn {\n    background-color: #00acac;\n    color: #fff;\n}\n.bgc_blue {\n    background-color: #6ba3e2\n}\n.fz13 {\n    font-size: 13px;\n}\n.fz11 {\n    font-size: 11px;\n}\n.showModel {\n    display: block;\n}\n.d_flex {\n    display: flex;\n}\n.camera_H {\n    display: none\n}\n.camera_D {\n    display: block\n}\n.imgdar {\n    height: 247px;\n}\n.hide {\n    display: none;\n}\n.htmlbinds:nth-child(2) {\n    display: none;\n}\n.htmlbinds {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n}\n.relativeLeft {\n    position: relative;\n    left: 50%;\n    transform: translateX(-50%);\n    display: inline-block;\n}\n.relativeUser {\n    display: block;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n.mbtn {\n    font-size: 12px;\n}\n.d-flex {\n    display: -webkit-box!important;\n    display: -ms-flexbox!important;\n    display: flex!important;\n}\n.flex-column {\n    -webkit-box-orient: vertical!important;\n    -webkit-box-direction: normal!important;\n    -ms-flex-direction: column!important;\n    flex-direction: column!important;\n}\n.position-relative {\n    position: relative!important;\n}\n.w-100 {\n    width: 100%;\n}\n.h-100 {\n    height: 100%!important;\n}\n.position-fixed {\n    position: fixed!important;\n}\n.bg-white {\n    background-color: #fff!important;\n}\n.position-absolute {\n    position: absolute!important;\n}\n.btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    font-size: 12px !important;\n}\n.btn-sm {\n    padding: .25rem .5rem;\n    font-size: .875rem;\n    line-height: 1.5;\n    border-radius: .2rem;\n}\n.justify-content-center {\n    -webkit-box-pack: center!important;\n    -ms-flex-pack: center!important;\n    justify-content: center!important;\n}\n  "]
            })
        ], ImagecropComponent);
        return ImagecropComponent;
    }());

    var ImagecropModule = /** @class */ (function () {
        function ImagecropModule() {
        }
        ImagecropModule = __decorate([
            core.NgModule({
                declarations: [ImagecropComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [ImagecropComponent]
            })
        ], ImagecropModule);
        return ImagecropModule;
    }());

    var TableComponent = /** @class */ (function () {
        function TableComponent(elementRef) {
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
        TableComponent.prototype.ngOnInit = function () {
            this.interSmlTable = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        };
        TableComponent.prototype.ngOnDestroy = function () {
            if (this.interSmlTable) {
                clearInterval(this.interSmlTable);
            }
        };
        TableComponent.prototype.onResize = function (event) {
            var width = $('.' + this.id).width();
            this.screenWidth = $('.' + this.id).width();
            this.width = width;
            var t_height = $("#y-" + this.id).height();
            if (t_height < 90) {
                this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'inherit');
                this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'inherit');
            }
            else {
                this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'hidden');
                this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'overlay');
            }
        };
        TableComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], TableComponent.prototype, "obj", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "minwidth", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "isfixedheight", void 0);
        __decorate([
            core.Input()
        ], TableComponent.prototype, "scrollX", void 0);
        TableComponent = __decorate([
            core.Component({
                selector: 'sml-table',
                template: "\n  <div class=\"table-100 {{id}}\">\n\t<div>\n\t\t<ng-content select=\"sml-table-header\"></ng-content>\n  </div>\n  <div id=\"x-{{id}}\" [ngStyle]=\"{'width': screenWidth + 'px', 'overflow-x' : scrollX ? 'auto' : 'none' }\" >\n\t<table class=\"table table-bordered h-auto\" [ngClass]=\"{'over-flow': !isfixedheight}\"\n\t\t[style.width]=\"width + 'px'\" [style.max-height]=\"height + 'px'\" border=\"{{obj?.border}}\">\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<ng-content select=\"sml-table-column\"></ng-content>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody id=\"y-{{id}}\"  class=\"h-auto sml-table-scroll-y\" [style.max-height]=\"height + 'px'\">\n\t\t\t<ng-content select=\"sml-table-body\"></ng-content>\n\t\t</tbody>\n  </table>\n  </div>\n\t<div>\n\t\t<ng-content select=\"sml-table-footer\"></ng-content>\n\t</div>\n</div>\n  ",
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: ["\n  :host{--c-scroll-value-nonhideen:'hidden';--c-scroll-value-hideen:'overlay';}\n  :host /deep/ sml-table-column{display:contents;}\n  :host /deep/ sml-table-body{display:contents;}\n  :host /deep/ sml-table-footer-pagination{float:right;}\n  .over-flow{overflow:hidden !important;}\n  .table-bordered{border-bottom:1px solid #dee2e6 !important;border-top:none !important;border-left:none !important;border-right:none !important;}\n   thead{display:block;}\n   tbody{display:block;}\n  .table-100{width:100%;}\n  .h-auto{height:auto !important;}\n  .sml-table-scroll-y{overflow-y:var(--c-scroll-value-nonhideen);overflow-x:var(--c-scroll-value-nonhideen);}\n  .sml-table-scroll-y:hover{overflow-y:var(--c-scroll-value-hideen);}\n  .sml-table-scroll-y::-webkit-scrollbar{width:8px;background-color:#fbfbfb;}\n  .sml-table-scroll-y::-webkit-scrollbar-track{width:3px;background:rgba(222, 222, 222, .75);}\n  .sml-table-scroll-y::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, .5);border-radius:4px;}\n  "]
            })
        ], TableComponent);
        return TableComponent;
    }());

    var ColumnComponent = /** @class */ (function () {
        function ColumnComponent() {
            this.name = '';
            this.width = '';
            this.minwidth = 700;
            this.id = 'sml-datatable';
            this.headerStyle = {};
            this.alignment = {};
            this.sortClick = new core.EventEmitter;
            this.table_width = 0;
        }
        ColumnComponent.prototype.ngOnInit = function () {
            for (var key in this.obj) {
                this.obj[key]['isDisplay'] = true;
                if (!this.obj[key]['isRemoved']) {
                    this.obj[key]['isRemoved'] = false;
                }
            }
        };
        ColumnComponent.prototype.onResize = function (event) {
            var width = $('.' + this.id).width();
            this.table_width = width;
            this.resizeColumn();
        };
        ColumnComponent.prototype.resizeColumn = function () {
            var temp = [];
            var temp1 = [];
            var totalSum = 0;
            var totalMinwidth = 0;
            for (var key in this.obj) {
                temp.push(this.obj[key]);
                if (this.obj[key]['isDisplay']) {
                    var w = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                    totalSum = totalSum + parseInt(w);
                    if (!this.obj[key].isFixedWidth) {
                        if (this.obj[key].minWidth) {
                            var mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                            totalMinwidth = totalMinwidth + parseInt(mw);
                        }
                        else {
                            this.obj[key]['minWidth'] = 100;
                            var mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                            totalMinwidth = totalMinwidth + parseInt(mw);
                        }
                    }
                    else {
                        var mw = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                        this.obj[key]['minWidth'] = this.obj[key].width;
                    }
                }
                var nType = {
                    key: key,
                    isRemoved: this.obj[key]['isRemoved'],
                    isDisplay: this.obj[key]['isDisplay'],
                    index: this.obj[key]['index'],
                    minWidth: this.obj[key]['minWidth']
                };
                temp1.push(nType);
            }
            var sel1 = temp.filter(function (d) { return !d.isFixedWidth; });
            var sel2 = temp.filter(function (d) { return d.isFixedWidth; });
            if (this.table_width > totalSum) {
                var diff = ((this.table_width - totalSum) / sel1.length);
                for (var j = 0; j < sel1.length; j++) {
                    var w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                    sel1[j].width = parseInt(w) + diff;
                }
            }
            if (this.table_width < totalSum) {
                var diff = ((totalSum - this.table_width) / sel1.length);
                for (var j = 0; j < sel1.length; j++) {
                    var w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                    var set = parseInt(w) - diff;
                    if (set >= sel1[j].minWidth) {
                        sel1[j].width = set;
                    }
                }
            }
            if (this.table_width < totalMinwidth) {
                var sel_A = temp1.filter(function (d) { return (d.isDisplay && d.isRemoved); });
                if (sel_A.length > 0) {
                    this.obj[sel_A[0].key]['isDisplay'] = false;
                }
                else {
                    var sel_B = temp1.filter(function (d) { return (d.isDisplay && !d.isRemoved); });
                    if (sel_B.length > 0) {
                        var index = (sel_B.length - 1);
                        this.obj[sel_B[index].key]['isDisplay'] = false;
                    }
                }
            }
            else {
                var sel_C = temp1.filter(function (d) { return (!d.isDisplay && !d.isRemoved); });
                if (sel_C.length > 0) {
                    var index = 0;
                    var diff = this.table_width - totalMinwidth;
                    if (diff >= sel_C[index]['minWidth']) {
                        this.obj[sel_C[index].key]['isDisplay'] = true;
                    }
                }
                else {
                    var sel_D = temp1.filter(function (d) { return (!d.isDisplay && d.isRemoved); });
                    if (sel_D.length > 0) {
                        var index = (sel_D.length - 1);
                        var diff = this.table_width - totalMinwidth;
                        if (diff >= sel_D[index]['minWidth']) {
                            this.obj[sel_D[index].key]['isDisplay'] = true;
                        }
                    }
                }
            }
        };
        ColumnComponent.prototype.sort = function () {
            var nType = {
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
        };
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "minwidth", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "obj", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "headerStyle", void 0);
        __decorate([
            core.Input()
        ], ColumnComponent.prototype, "alignment", void 0);
        __decorate([
            core.Output()
        ], ColumnComponent.prototype, "sortClick", void 0);
        ColumnComponent = __decorate([
            core.Component({
                selector: 'sml-table-column',
                template: "\n  <th *ngIf=\"obj[name].isDisplay\" [style.width]=\"obj[name].width + 'px'\"  [style.max-width]=\"obj[name].width + 'px'\"  [style.min-width]=\"obj[name].width + 'px'\"    [style.text-align]=\"obj[name].columnDefinatinAlignment\" (click)=\"sort()\"\n\t[ngStyle]=\"headerStyle\">\n\t{{obj[name].title}}\n\t<div [ngClass]=\"{'sort_icon_divl': obj[name].columnDefinatinAlignment != 'right','sort_icon_divr': obj[name].columnDefinatinAlignment == 'right' }\"\n\t\tclass=\"sort_icon_div\">\n\t\t<div class=\"hi-0\">\n\t\t\t<i class=\"fa fa-sort-asc sort_icon_asc cog-lightblue\"\n\t\t\t\t*ngIf=\"obj[name].orderBy == 'ASC' && obj[name].isCurrent\"></i>\n\t\t</div>\n\t\t<div>\n\t\t\t<i class=\"fa fa-sort-desc cog-lightblue\" *ngIf=\"obj[name].orderBy == 'DESC' && obj[name].isCurrent\"></i>\n\t\t</div>\n\t</div>\n</th>\n  ",
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: ["\n  th{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}\n  .hi-0{height: 0px;}\n  .sort_icon_divl {display: inline-block;float: right;}\n  .sort_icon_divr {display: inline-block;float: left;}\n  .cog-lightblue{color:lightblue;}\n  "]
            })
        ], ColumnComponent);
        return ColumnComponent;
    }());

    var HeaderComponent = /** @class */ (function () {
        function HeaderComponent() {
            this.width = '';
            this.minwidth = 700;
            this.maxwidth = '';
            this.includesearch = true;
            this.includecount = true;
            this.display = true;
            this.alignment = {};
            this.changerowcount = new core.EventEmitter;
            this.searchRecord = new core.EventEmitter;
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
        HeaderComponent.prototype.ngOnInit = function () {
        };
        HeaderComponent.prototype.changeRowDisplayCount = function (event) {
            this.changerowcount.emit(event);
        };
        HeaderComponent.prototype.searchClick = function (event) {
            this.searchRecord.emit(event);
        };
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "minwidth", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "maxwidth", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "includesearch", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "includecount", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "display", void 0);
        __decorate([
            core.Input()
        ], HeaderComponent.prototype, "alignment", void 0);
        __decorate([
            core.Output()
        ], HeaderComponent.prototype, "changerowcount", void 0);
        __decorate([
            core.Output()
        ], HeaderComponent.prototype, "searchRecord", void 0);
        HeaderComponent = __decorate([
            core.Component({
                selector: 'sml-table-header',
                template: "\n  <div>\n    <div class=\"row\" *ngIf=\"display\">\n        <div class=\"col-md-12\" *ngIf=\"alignment.searchposition != 'right' ||  alignment.show25 != 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}\">\n                <sml-table-header-search *ngIf=\"includesearch\" [name]=\"textObj.name\" [value]=\"textObj.value\"\n                    [placeholder]=\"textObj.placeholder\" (searchClick)=\"searchClick($event)\">\n                </sml-table-header-search>\n            </div>\n            <div class=\"dis-block\">\n                <ng-container *ngTemplateOutlet=\"headerReamaingContent\"></ng-container>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}\">\n                <sml-table-header-count *ngIf=\"includecount\" [listValue]=\"drpObj.drpDataList\" [value]=\"drpObj.selectedValue\"\n                    (changevalue)=\"changeRowDisplayCount($event)\"></sml-table-header-count>\n            </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"alignment.searchposition == 'right' &&  alignment.show25 == 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}\">\n                <sml-table-header-count *ngIf=\"includecount\" [listValue]=\"drpObj.drpDataList\" [value]=\"drpObj.selectedValue\"\n                    (changevalue)=\"changeRowDisplayCount($event)\"></sml-table-header-count>\n            </div>\n            <div class=\"dis-block\">\n                <ng-container *ngTemplateOutlet=\"headerReamaingContent\"></ng-container>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}\">\n                <sml-table-header-search *ngIf=\"includesearch\" [name]=\"textObj.name\" [value]=\"textObj.value\"\n                    [placeholder]=\"textObj.placeholder\" (searchClick)=\"searchClick($event)\">\n                </sml-table-header-search>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #headerReamaingContent>\n    <ng-content></ng-content>\n</ng-template>\n  ",
                styles: ["\n    .dis-block{display: inline-block;min-width: 200px;}\n    .f-l{float: left;}\n    .f-r{float: right;}\n    .pl-5{padding-left: 5px !important;}\n    .pr-5{padding-right: 5px !important;}\n  "]
            })
        ], HeaderComponent);
        return HeaderComponent;
    }());

    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
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
            this.changepage = new core.EventEmitter();
        }
        FooterComponent.prototype.ngOnInit = function () {
        };
        FooterComponent.prototype.pageNumberUpdate = function (event) {
            this.changepage.emit(event);
        };
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "obj", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "minwidth", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "maxwidth", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "includepagecount", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "includepagination", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "display", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "totalcount", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "recordcount", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "pagesize", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "page", void 0);
        __decorate([
            core.Input()
        ], FooterComponent.prototype, "alignment", void 0);
        __decorate([
            core.Output()
        ], FooterComponent.prototype, "changepage", void 0);
        FooterComponent = __decorate([
            core.Component({
                selector: 'sml-table-footer',
                template: "\n  <div>\n    <div class=\"row\" *ngIf=\"display\">\n        <div class=\"col-md-12\"\n            *ngIf=\"alignment.showposition != 'right' ||  alignment.showpaginationposition != 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}\">\n                <div *ngIf=\"includepagecount\" class=\"pt-8\" style=\"font-size:9pt;\">\n                    Showing {{recordcount}} of {{totalcount}}\n                </div>\n            </div>\n            <div class=\"dis-block\">\n                <ng-content></ng-content>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}\">\n                <sml-table-footer-pagination *ngIf=\"includepagination && totalcount > recordcount && totalcount > 0\"\n                    [noPage]=\"page\" [totalRecords]=\"totalcount\" [pageSize]=\"pagesize\"\n                    (clickPage)=\"pageNumberUpdate($event)\">\n                </sml-table-footer-pagination>\n            </div>\n        </div>\n        <div class=\"col-md-12\"\n            *ngIf=\"alignment.showposition == 'right' &&  alignment.showpaginationposition == 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}\">\n                <sml-table-footer-pagination *ngIf=\"includepagination && totalcount > recordcount && totalcount > 0\"\n                    [noPage]=\"page\" [totalRecords]=\"totalcount\" [pageSize]=\"pagesize\"\n                    (clickPage)=\"pageNumberUpdate($event)\">\n                </sml-table-footer-pagination>\n            </div>\n            <div class=\"dis-block\">\n                <ng-content></ng-content>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}\">\n                <div *ngIf=\"includepagecount\" class=\"pt-8\">\n                    Showing {{recordcount}} of {{totalcount}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  ",
                styles: ["\n  .dis-block{\n    display: inline-block;\n}\n.f-l{\n    float: left;\n}\n.f-r{\n    float: right;\n}\n.pt-8{\n    padding-top: 8px;\n}\n.pl-5{\n    padding-left: 5px !important;\n}\n.pr-5{\n    padding-right: 5px !important;\n}\n  "]
            })
        ], FooterComponent);
        return FooterComponent;
    }());

    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent() {
            this.clickPage = new core.EventEmitter();
            this.noItems = [];
            this.paginators = 5;
        }
        PaginationComponent.prototype.ngOnInit = function () {
            this.setPaginator(this.noPage);
        };
        PaginationComponent.prototype.setPaginator = function (n) {
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
        };
        PaginationComponent.prototype.changePage = function (n) {
            this.noPage = n;
            this.clickPage.emit(n);
        };
        __decorate([
            core.Input()
        ], PaginationComponent.prototype, "totalRecords", void 0);
        __decorate([
            core.Input()
        ], PaginationComponent.prototype, "noPage", void 0);
        __decorate([
            core.Input()
        ], PaginationComponent.prototype, "pageSize", void 0);
        __decorate([
            core.Output()
        ], PaginationComponent.prototype, "clickPage", void 0);
        PaginationComponent = __decorate([
            core.Component({
                selector: 'sml-table-footer-pagination',
                template: "\n\t<ul class=\"pagination\">\n  <li class=\"page-item\" [ngClass]=\"{ 'disabled' : noPage == 1 }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(1);\">\u00AB</a>\n  </li>\n  <li *ngFor=\"let item of noItems\" class=\"page-item\"\n    [ngClass]=\"{ 'active' : item == noPage, 'disabled' : item == noPage }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(item);\">{{ item }}</a>\n  </li>\n  <li class=\"page-item\" [ngClass]=\"{ 'disabled' : noPage == nItem }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(nItem);\">\u00BB</a>\n  </li>\n</ul>\n\t",
                styles: [".page-link{font-size:9pt !important}"]
            })
        ], PaginationComponent);
        return PaginationComponent;
    }());

    var TableBodyComponent = /** @class */ (function () {
        function TableBodyComponent() {
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
            this.actionClick = new core.EventEmitter;
            this.valueClick = new core.EventEmitter;
            this.textBoxEvent = new core.EventEmitter;
            this.dropdownButton = [];
        }
        TableBodyComponent.prototype.ngOnInit = function () { };
        TableBodyComponent.prototype.onResize = function (event) {
            var width = $('.' + this.id).width();
            // if (width > parseInt(this.minwidth)) {
            this.width = width;
            // }
        };
        TableBodyComponent.prototype.trackByIndex = function (index) {
            return index;
        };
        TableBodyComponent.prototype.trackByIndex1 = function (index) {
            return index;
        };
        TableBodyComponent.prototype.clickMethod = function (actionType, row) {
            var nType = {
                actionName: actionType,
                item: row
            };
            this.actionClick.emit(nType);
        };
        TableBodyComponent.prototype.columnClick = function (row, col) {
            var nType = {
                row: row,
                column: col
            };
            if (!this.obj[col].isHtml) {
                this.valueClick.emit(nType);
            }
            if (this.obj[col].isHtml && this.obj[col].isCheckbox) {
                this.valueClick.emit(nType);
            }
        };
        TableBodyComponent.prototype.textBoxMethod = function (row, col, type) {
            var nType = {
                row: row,
                type: type,
                column: col,
            };
            this.textBoxEvent.emit(nType);
        };
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "data", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "dropdownButtons", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "dropdownButtonsList", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "columns", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "rowstyle", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "alignment", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "minwidth", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "obj", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "isLoading", void 0);
        __decorate([
            core.Input()
        ], TableBodyComponent.prototype, "dropdownButtonStyle", void 0);
        __decorate([
            core.Output()
        ], TableBodyComponent.prototype, "actionClick", void 0);
        __decorate([
            core.Output()
        ], TableBodyComponent.prototype, "valueClick", void 0);
        __decorate([
            core.Output()
        ], TableBodyComponent.prototype, "textBoxEvent", void 0);
        TableBodyComponent = __decorate([
            core.Component({
                selector: 'sml-table-body',
                template: "\n  <tr *ngFor=\"let row of data;let index = index; trackBy: trackByIndex1\" id=\"tr-{{id}}-{{index}}\" [style.background]=\"index % 2 == 0 ? rowstyle.bgEven : rowstyle.bgOdd\">\n  <td *ngFor=\"let col of columns;let cindex = index; trackBy: trackByIndex\" id=\"td-{{id}}-{{index}}-{{cindex}}\"  (click)=\"columnClick(row,col)\"  [style.width]=\"obj[col].width + 'px'\"  [style.max-width]=\"obj[col].width + 'px'\"  [style.min-width]=\"obj[col].width + 'px'\"  [style.text-align]=\"alignment[col].columnDefinatinAlignment\" [ngClass]=\"{'breakWord': obj[col].isFixedWidth , 'td_over': !obj[col].isHtml , 'pointer-cursor': obj[col]?.isColumnClick ,'dis-none': !obj[col].isDisplay }\"  [ngStyle]=\"rowstyle\">\n    <span *ngIf=\"!obj[col].isHtml\" style=\"white-space: pre-wrap; word-break: keep-all;\">{{row[col]}}</span>\n    <span *ngIf=\"obj[col].isHtml\">\n      <div *ngIf=\"!obj[col].isCheckbox && !obj[col].isImage && !obj[col].isTextbox\">\n        <div class=\"btn-group dropdown\" *ngIf=\"dropdownButtonsList == false && dropdownButtons.length > 0 && !obj[col].isSingleButton\">\n            <div id=\"idComponent\" class=\"DropdownButton\" (click)=\"clickMethod(dropdownButtons[0].Action,row);\">\n                {{ dropdownButtons[0].Title }}\n            </div>\n            <span *ngIf=\"dropdownButtons.length > 1\" class=\"caret DropdownButtonSpan dropdown-toggle\" data-toggle=\"dropdown\"></span>\n            <ul *ngIf=\"dropdownButtons.length > 1\" class=\"dropdown-menu DropdownButtonUl dropdown-menu-right\" [ngStyle]=\"dropdownButtonStyle\">\n              <span *ngFor=\"let button of dropdownButtons;let i=index;\" >\n                <li *ngIf=\"i != 0\" class=\"DropdownButtonLi\" (click)=\"clickMethod(button.Action,row);\">\n                    {{ button.Title }}\n                </li>\n              </span>   \n            </ul>\n        </div>\n        <div *ngIf=\"dropdownButtonsList == false && dropdownButtons.length > 0 && obj[col].isSingleButton\">\n          <div class=\"btn-group dropdown pad-r-2\" *ngFor=\"let button of dropdownButtons;let i=index;\">\n              <div id=\"idComponent\" class=\"DropdownButton\" (click)=\"clickMethod(button.Action,row);\">\n                  {{ button.Title }}\n              </div>\n          </div>\n        </div>\n\n        <div class=\"btn-group dropdown\" *ngIf=\"dropdownButtonsList == true && !obj[col].isSingleButton && row.dropdownButtons.length > 0\">\n            <div id=\"idComponent\" class=\"DropdownButton\" (click)=\"clickMethod(row.dropdownButtons[0].Action,row);\">\n                {{ row.dropdownButtons[0].Title }}\n            </div>\n            <span *ngIf=\"row.dropdownButtons.length > 1\" class=\"caret DropdownButtonSpan dropdown-toggle\" data-toggle=\"dropdown\"></span>\n            <ul *ngIf=\"row.dropdownButtons.length > 1\" class=\"dropdown-menu DropdownButtonUl dropdown-menu-right\" [ngStyle]=\"dropdownButtonStyle\">\n              <span *ngFor=\"let button of row.dropdownButtons;let i=index;\" >\n                <li *ngIf=\"i != 0\" class=\"DropdownButtonLi\" (click)=\"clickMethod(button.Action,row);\">\n                    {{ button.Title }}\n                </li>\n              </span>   \n            </ul>\n        </div>\n        <div *ngIf=\"dropdownButtonsList == true && obj[col].isSingleButton\">\n            <div class=\"btn-group dropdown pad-r-2\" *ngFor=\"let button of row.dropdownButtons;let i=index;\">\n                <div id=\"idComponent\" class=\"DropdownButton\" (click)=\"clickMethod(button.Action,row);\">\n                    {{ button.Title }}\n                </div>\n            </div>\n        </div>\n      </div>\n      <div *ngIf=\"obj[col].isCheckbox\">\n            <input type=\"checkbox\" class=\"pointer-cursor\" name=\"{{index}}\" id=\"{{index}}\" [(ngModel)]=\"row[col]\" />\n      </div>\n      <div *ngIf=\"obj[col].isImage\">\n          <img src=\"{{row[col]}}\" style=\"width: 15px; height: 15px;\" />\n      </div>\n      <div *ngIf=\"obj[col].isTextbox\" style=\"text-align: center;\">\n          <input type=\"text\" style=\"text-align: right;width: 80px;padding-right: 2px;\"  (change)=\"textBoxMethod(row,col,'change')\" (keydown)=\"textBoxMethod(row,$event,'keydown')\"  (focus)=\"textBoxMethod(row,col,'focus')\" (blur)=\"textBoxMethod(row,col,'blur')\" name=\"{{index}}\" id=\"{{index}}\" [(ngModel)]=\"row[col]\" />\n      </div>\n    </span>\n  </td>\n</tr>\n<tr *ngIf=\"isLoading\">\n  <td [attr.colspan]=\"columns.length\" [style.width]=\"width + 'px'\"  [style.max-height]=\"height + 'px'\" class=\"text-center h-auto\" >\n      <img src=\"./assets/loading.gif\" width=\"100\" />\n  </td>\n</tr>\n  ",
                host: {
                    '(window:resize)': 'onResize($event)'
                },
                styles: ["\n  td {\n    padding-top: 1px;\n    padding-bottom: 1px;\n    vertical-align: middle !important;\n  }\ntr:hover{\n  background: #FFFF00;\n}\ntr:last-child > td {\n\tborder-bottom: 0 !important;\n}\n.td_over{\n  overflow: hidden !important;\n}\n.dis-none{\n  display:none !important;\n}\n.pad-r-2{\n  padding-right:2px !important;\n}\n.breakWord{\n  word-break: break-all !important;\n}\n.text-center{\n    text-align: center;\n}\n.btn:focus {\n    box-shadow: none !important;\n}\n.pointer-cursor {\n    cursor: pointer !important;\n}\n.DropdownButtonLi {\n    padding: 5px;\n    cursor: pointer;\n}\n.DropdownButtonLi:hover {\n    background-color:#e6e6e6;\n}\n.DropdownButton  {\n    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\t-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));\n\tbackground:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);\n\tbackground:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);\n\tbackground-color:#f9f9f9;\n\t-moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n\tborder-radius:3px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\tfont-family:Arial;\n\tfont-size:0.8em;\n\tpadding:3px 6px;\n\ttext-decoration:none;\n}\n.DropdownButton:hover  {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #d6d6d6));\n\tbackground:-moz-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-webkit-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-o-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:-ms-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);\n\tbackground:linear-gradient(to bottom, #e6e6e6 5%, #d6d6d6 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#d6d6d6',GradientType=0);\n\tbackground-color:#e6e6e6;\n}\n.DropdownButtonUl {\n\t  width: 100px;\n    margin-left: -50%;\n}\n.DropdownButtonSpan {\n\twidth: 23px;\n    height: 23px;\n    -moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n    border-radius: 3px;\n    border: 1px solid #dcdcdc;\n    background-color: #f9f9f9;\n    padding-left: 1px;\n    margin-left: -2px;\n    padding-top: 2px;\n}\n.DropdownButtonSpan:hover, .DropdownButtonSpan:active {\n    background-color:#e6e6e6;\n}\n.dropdown-menu {\n    min-width: 0px;\n    font-size: 12px;\n}\n.h-auto{\n  height: auto !important;\n}\n  "]
            })
        ], TableBodyComponent);
        return TableBodyComponent;
    }());

    var SearchComponent = /** @class */ (function () {
        function SearchComponent() {
            this.value = '';
            this.searchClick = new core.EventEmitter();
            this.searchText = '';
        }
        SearchComponent.prototype.ngOnInit = function () {
        };
        SearchComponent.prototype.keyup = function (e) {
            if (e.keyCode === 13) {
                this.searchClick.emit(this.searchText);
            }
        };
        __decorate([
            core.Input()
        ], SearchComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], SearchComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], SearchComponent.prototype, "placeholder", void 0);
        __decorate([
            core.Input()
        ], SearchComponent.prototype, "width", void 0);
        __decorate([
            core.Output()
        ], SearchComponent.prototype, "searchClick", void 0);
        SearchComponent = __decorate([
            core.Component({
                selector: 'sml-table-header-search',
                template: "\n  <div class=\"form-row align-items-center\">\n    <div class=\"col-md-12 col-12 mb-1\">\n        <input type=\"text\" class=\"form-control h-39 smlSearch\" [(ngModel)]=\"searchText\" placeholder=\"{{placeholder}}\"\n            id=\"txt-{{name}}\" name=\"txt-{{name}}\" (keyup)=\"keyup($event)\">\n    </div>\n</div>\n  ",
                styles: ["\n  .h-39{height: 39px;}\n  .smlSearch{font-size: 9pt !important;border-radius:4px !important;border-color: #ccc !important}\n  .smlSearch:focus{outline: none;box-shadow: none;}\n  "]
            })
        ], SearchComponent);
        return SearchComponent;
    }());

    var CountComponent = /** @class */ (function () {
        function CountComponent() {
            this.changevalue = new core.EventEmitter;
        }
        CountComponent.prototype.ngOnInit = function () {
        };
        CountComponent.prototype.getselectvalue = function (event) {
            this.changevalue.emit(event.id);
        };
        __decorate([
            core.Input()
        ], CountComponent.prototype, "listValue", void 0);
        __decorate([
            core.Input()
        ], CountComponent.prototype, "value", void 0);
        __decorate([
            core.Output()
        ], CountComponent.prototype, "changevalue", void 0);
        CountComponent = __decorate([
            core.Component({
                selector: 'sml-table-header-count',
                template: "\n  <div class=\"form-row align-items-center\">\n    <div class=\"col-md-12 col-12 mb-1\" style=\"padding-right:4px !important;\">\n    <ng-select [items]=\"listValue\" [searchable]=\"false\" [clearable]=\"false\" bindLabel=\"name\" bindValue=\"id\" (change)=\"getselectvalue($event)\" [(ngModel)]=\"value\">\n    </ng-select>\n    </div>\n   </div>",
                styles: ["\n    :host /deep/ .ng-select.ng-select-single .ng-select-container {height: 39px !important;}\n    :host /deep/ .ng-select:focus{outline: none !important;box-shadow: none !important;}\n    :host /deep/ .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{font-size: 9pt !important;}\n    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value {font-size: 9pt !important;}\n    .labelList{font-size:14px !important;position:relative;}\n    .w-100{width:100%;}\n    .mb-5{margin-bottom:3rem!important}\n    .form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;}\n    .col-12{flex:0 0 100%;max-width:100%;}\n    .mb-0{margin-bottom:0px!important;}\n    .form-row>.col, .form-row>[class*=col-]{padding-right:5px;padding-left:5px;}\n    .d-flex{display:flex;}\n    .statusIcon img{width:16px;}\n    .statusIcon{display:none;position:absolute;right:28px;top:0}\n    .invalidStatus .statusIcon, .validStatus .statusIcon{display:block}\n    .floating{border:1px solid #d6d6d6;border-radius:2px;position:relative;padding:2px 0 0 0;}\n    .label{position:absolute;left:16px;top:50%;margin-bottom:0;transform:translateY(-50%);transition:all 0.1s;font-size:12px;}\n    .showFloat:focus ~ .label, .select2-container--focus ~ .label, .select2-container--open + .label, .float .label{top:3px;-webkit-transform:translateY(0);transform:translateY(0);font-size:9px;left:12px;font-weight:bold;}\n    .pl-0{padding-left:0px;}    \n  "]
            })
        ], CountComponent);
        return CountComponent;
    }());

    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule = __decorate([
            core.NgModule({
                declarations: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngSelect.NgSelectModule
                ],
                exports: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]
            })
        ], TableModule);
        return TableModule;
    }());

    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent() {
            this.iswelcome = 'false';
            this.navStyle = {
                logo: '/assets/logo.png'
            };
        }
        NavbarComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input()
        ], NavbarComponent.prototype, "iswelcome", void 0);
        __decorate([
            core.Input()
        ], NavbarComponent.prototype, "navStyle", void 0);
        NavbarComponent = __decorate([
            core.Component({
                selector: 'sml-navbar',
                template: "\n  <nav class=\"navbar navbar-expand-sm customNavbar position-relative\"  [ngStyle]=\"navStyle\">\n  <a class=\"nav-link\" routerLink=\"/dashboard\">\n    <img src=\"{{navStyle?.logo ? navStyle?.logo : '/assets/logo.png'}}\" height=\"20\" width=\"40\"  alt=\"\" class=\"logo\">\n  </a>\n  <button class=\"navbar-toggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <ng-content select=\"sml-navbar-menu\"></ng-content>  \n  <li class=\"positionRight nav-item dropdown profileUser\" *ngIf=\"iswelcome == 'true'\">\n    <ng-content  select=\"sml-navbar-menu-profilemenu\"></ng-content>\n  </li>\n</nav>\n  ",
                styles: ["\n  .positionRight{position: absolute; right:10px; list-style: none}\n.customNavbar { background-color: #2d353c; }\n.navbar{padding: 2px 1rem !important}\n.nav-link { color: #ffffff; }\n.logo { width: 40px }\n  "]
            })
        ], NavbarComponent);
        return NavbarComponent;
    }());

    var MenuComponent = /** @class */ (function () {
        function MenuComponent() {
        }
        MenuComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "link", void 0);
        __decorate([
            core.Input()
        ], MenuComponent.prototype, "menuStyle", void 0);
        MenuComponent = __decorate([
            core.Component({
                selector: 'sml-navbar-menu',
                template: "\n\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n  <ul class=\"navbar-nav mr-auto\">\n    <li *ngIf=\"link\" class=\"nav-item active\">\n      <a class=\"nav-link\" [ngStyle]=\"menuStyle\" [routerLink]=\"link\">{{label}}</a>\n    </li>\n    <li class=\"nav-item dropdown position-relative\" *ngIf=\"link == undefined\">\n      <a href=\"javascript:void()\" [ngStyle]=\"menuStyle\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">\n        {{label}}\n        <b class=\"caret\"></b>\n      </a>\n      <ul class=\"dropdown-menu\">\n        <ng-content></ng-content>\n      </ul>\n    </li>\n  </ul>\n</div>\n\t",
                styles: ["\n\t.nav-link {\n\t\tcolor: #ffffff;\n\t}\n\t\n\t.positionRight {\n\t\tposition: absolute;\n\t\tright: 10px;\n\t\tlist-style: none\n\t}\n\t.nav-link{font-size: 13px;}\n\t\n\t.dropdown-toggle{font-size: 13px;}\n\t\n\t.overlaybtn {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t\n\t.dropdown-menu {\n\t\tz-index: 9999;\n\t\tleft: 0;\n\t\tleft: unset;\n\t}\n\t\n\t.nav-link {\n\t\tcolor: #ffffff;\n\t}\n\t\n\t.userIcon {\n\t\tmargin-right: 12px\n\t}\n\t\n\t.userIcon img {\n\t\twidth: 24px\n\t}\n\t\n\t.dropdown-toggle span,.dropdown-menu{font-size: 13px;}\n\t.dropdown-toggle::after{    top: 3px;\n\t\tposition: relative;}\n\t"]
            })
        ], MenuComponent);
        return MenuComponent;
    }());

    var SubmenuComponent = /** @class */ (function () {
        function SubmenuComponent() {
            this.actionClick = new core.EventEmitter;
        }
        SubmenuComponent.prototype.ngOnInit = function () { };
        SubmenuComponent.prototype.menuClick = function () {
            this.actionClick.emit();
        };
        __decorate([
            core.Input()
        ], SubmenuComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], SubmenuComponent.prototype, "link", void 0);
        __decorate([
            core.Input()
        ], SubmenuComponent.prototype, "param", void 0);
        __decorate([
            core.Input()
        ], SubmenuComponent.prototype, "submenuStyle", void 0);
        __decorate([
            core.Output()
        ], SubmenuComponent.prototype, "actionClick", void 0);
        SubmenuComponent = __decorate([
            core.Component({
                selector: 'sml-navbar-menu-submenu',
                template: "\n  <a *ngIf=\"link && param\" class=\"dropdown-item\" [routerLink]=\"[link,param]\">{{label}}</a>\n  <a *ngIf=\"link && param == undefined\" class=\"dropdown-item\" [routerLink]=\"link\">{{label}}</a>\n  <a *ngIf=\"link == undefined\" (click)=\"menuClick()\" class=\"dropdown-item\">{{label}}</a>\n",
                styles: ["\n  .overlaybtn {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 9;\n    display: none;\n}\n\n.dropdown-menu {\n    z-index: 9999;\n    right: 0;\n    left: unset;\n}\n\n.nav-link {\n    color: #ffffff;\n}\n\n.userIcon {\n    margin-right: 12px\n}\n\n.userIcon img {\n    width: 24px\n}\n\n.dropdown-toggle span,.dropdown-menu{font-size: 13px;}\n.dropdown-toggle::after{    top: 3px;\n    position: relative;}\n  "]
            })
        ], SubmenuComponent);
        return SubmenuComponent;
    }());

    var ProfileMenuComponent = /** @class */ (function () {
        function ProfileMenuComponent() {
        }
        ProfileMenuComponent.prototype.ngOnInit = function () { };
        __decorate([
            core.Input()
        ], ProfileMenuComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ProfileMenuComponent.prototype, "imagepath", void 0);
        __decorate([
            core.Input()
        ], ProfileMenuComponent.prototype, "menuStyle", void 0);
        ProfileMenuComponent = __decorate([
            core.Component({
                selector: 'sml-navbar-menu-profilemenu',
                template: "\n\t<div class=\"dropdown position-relative\">\n  <a class=\"nav-link dropdown-toggle\" [ngStyle]=\"menuStyle\" data-toggle=\"dropdown\" href=\"javascript:void\">\n    <span class=\"userIcon\">\n      <img src=\"{{imagepath}}\">\n    </span>\n    <span>{{label}}</span>\n  </a>\n  <div class=\"dropdown-menu\">\n    <ng-content></ng-content>\n  </div>\n</div>\n\t",
                styles: ["\n\t.overlaybtn {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon img {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle span,.dropdown-menu{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}\n\ta {\n\t\tcolor: white;\n\t}\n\t"]
            })
        ], ProfileMenuComponent);
        return ProfileMenuComponent;
    }());

    var ProfileSubMenuComponent = /** @class */ (function () {
        function ProfileSubMenuComponent() {
            this.menuClick = new core.EventEmitter;
        }
        ProfileSubMenuComponent.prototype.ngOnInit = function () { };
        ProfileSubMenuComponent.prototype.clickMenu = function () {
            this.menuClick.emit();
        };
        __decorate([
            core.Input()
        ], ProfileSubMenuComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ProfileSubMenuComponent.prototype, "link", void 0);
        __decorate([
            core.Input()
        ], ProfileSubMenuComponent.prototype, "submenuStyle", void 0);
        __decorate([
            core.Output()
        ], ProfileSubMenuComponent.prototype, "menuClick", void 0);
        ProfileSubMenuComponent = __decorate([
            core.Component({
                selector: 'sml-navbar-menu-profilemenu-profilesubmenu',
                template: "\n\t<a *ngIf=\"link\" class=\"dropdown-item\" href=\"#\" [ngStyle]=\"submenuStyle\" [routerLink]=\"link\">{{label}}</a>\n\t<a *ngIf=\"!link\" class=\"dropdown-item\" style=\"cursor: pointer;\" [ngStyle]=\"submenuStyle\" (click)=\"clickMenu()\">{{label}}</a>\n\t",
                styles: ["\n\t.overlaybtn {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 9;\n\t\tdisplay: none;\n\t}\n\t.dropdown-menu {\n\t\tz-index: 9999;\n\t\tright: 0;\n\t\tleft: unset;\n\t}\n\t.userIcon {\n\t\tmargin-right: 12px\n\t}\n\t.userIcon img {\n\t\twidth: 24px\n\t}\n\t.dropdown-toggle span,.dropdown-menu{\n\t\tfont-size: 13px;\n\t}\n\t.dropdown-toggle::after{    \n\t\ttop: 3px;\n\t\tposition: relative;\n\t}\n\t"]
            })
        ], ProfileSubMenuComponent);
        return ProfileSubMenuComponent;
    }());

    var NavbarModule = /** @class */ (function () {
        function NavbarModule() {
        }
        NavbarModule = __decorate([
            core.NgModule({
                declarations: [
                    NavbarComponent,
                    SubmenuComponent,
                    MenuComponent,
                    ProfileMenuComponent,
                    ProfileSubMenuComponent
                ],
                imports: [
                    common.CommonModule,
                    router.RouterModule
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
        return NavbarModule;
    }());

    var MultifileuploadComponent = /** @class */ (function () {
        function MultifileuploadComponent(http$1) {
            this.http = http$1;
            this.idInputFile = 'other';
            this.nameFiles = '';
            this.global_url = '';
            this.url = 'http://apinext.aaadev.info/apinext/';
            this.fileurl = 'http://apinext.aaadev.info/';
            this.dataBase = 'APPS';
            this.moreData = false;
            this.fileResponse = new core.EventEmitter;
            this.afterEdit = new core.EventEmitter;
            this.editContent = false;
            this.datas = [];
            this.description = '';
            this.textdata = '';
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        MultifileuploadComponent.prototype.upload = function (files) {
            this.uploadAndProgress(files);
        };
        MultifileuploadComponent.prototype.DeleteFIles = function (value) {
            var _this = this;
            this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken)
                .subscribe(function (res) {
                var body = {
                    FilesGroupId: _this.FilesGroupIdvalue
                };
                var url = _this.url + "Data/Exec/" + _this.dataBase + "/core/FILES_List?api_key=" + _this.GenericToken;
                _this.http.post(url, body, _this.httpOptionJSON).subscribe(function (res) {
                    _this.datas = [];
                    _this.datas = res;
                    for (var i = 0; i < _this.datas.length; i++) {
                        var file_url = _this.global_url + _this.datas[i].FileUrl;
                        _this.datas[i].FileUrl = file_url;
                    }
                    _this.UploadedFileli = true;
                });
            });
        };
        MultifileuploadComponent.prototype.ngOnInit = function () {
            this.getListdata();
        };
        MultifileuploadComponent.prototype.getListdata = function () {
            var _this = this;
            this.http.get(this.url + "GetSystemInfo?passcode=flipper613")
                .subscribe(function (res) {
                _this.GenericToken = res["GenericToken"];
                if (_this.FilesGroupIdvalue) {
                    var body = {
                        FilesGroupId: _this.FilesGroupIdvalue
                    };
                    var url = _this.url + "Data/Exec/" + _this.dataBase + "/core/FILES_List?api_key=" + _this.GenericToken;
                    _this.http.post(url, body, _this.httpOptionJSON).subscribe(function (res) {
                        _this.datas = res;
                        for (var i = 0; i < _this.datas.length; i++) {
                            var file_url = _this.global_url + _this.datas[i].FileUrl;
                            _this.datas[i].FileUrl = file_url;
                        }
                        _this.UploadedFileli = true;
                    });
                }
            });
        };
        MultifileuploadComponent.prototype.uploadAndProgress = function (files) {
            var _this = this;
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
                .subscribe(function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    _this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof http.HttpResponse) {
                    _this.uploadSuccess = true;
                    _this.UploadedFileli = true;
                    _this.filename = event.body["Description"];
                    _this.filelink = _this.fileurl + event.body["FileUrl"];
                    _this.fileResponse.emit(event.body);
                    _this.getListdata();
                    setTimeout(function () {
                        _this.uploadSuccess = false;
                        _this.percentDone = 0;
                    }, 3000);
                }
            });
        };
        MultifileuploadComponent.prototype.edit = function (data, i) {
            this.textdata = data.Description;
            this.contentIndex = i;
            this.editContent = true;
        };
        MultifileuploadComponent.prototype.updateName = function (id) {
            var _this = this;
            var url = this.url + "Models/Files?api_key=" + this.GenericToken;
            var body = {
                FilesId: id,
                Description: this.textdata
            };
            this.http.post(url, body).subscribe(function (res) {
                _this.afterEdit.emit(res);
                _this.getListdata();
                _this.esc();
            });
        };
        MultifileuploadComponent.prototype.esc = function () {
            this.editContent = false;
            this.contentIndex = null;
        };
        MultifileuploadComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "idInputFile", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "nameFiles", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "global_url", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "fileurl", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "dataBase", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "moreData", void 0);
        __decorate([
            core.Input()
        ], MultifileuploadComponent.prototype, "styleZIndex", void 0);
        __decorate([
            core.Output()
        ], MultifileuploadComponent.prototype, "fileResponse", void 0);
        __decorate([
            core.Output()
        ], MultifileuploadComponent.prototype, "afterEdit", void 0);
        MultifileuploadComponent = __decorate([
            core.Component({
                selector: 'sml-multifileupload',
                template: "\n\t<div class=\"w-100\">\n\t<div class=\"form-row align-items-center\">\n\t\t<label class=\"col-md-12 col-12 mb-0\"></label>\n\t\t<div class=\"col-md-12 col-10 mb-0 floating-border\" [ngStyle]=\"{'z-index': styleZIndex}\">\n\t\t\t<label class=\"col-md-12 dropdownarea\" for=\"{{idInputFile}}\">\n\t\t\t\t<div class=\"d-flex w-100 flex-column\">\n\t\t\t\t\t<input type=\"file\" id=\"{{idInputFile}}\" (change)=\"upload($event.target.files)\" class=\"drag\"\n\t\t\t\t\t\t[ngStyle]=\"{'height.px': height,'width.px': width}\" />\n\t\t\t\t\t<div class=\"d-flex justify-content-between align-items-center w-100 flex-column\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span class=\"uploadicon\"><img src=\"./assets/upload.png\" /></span>\n\t\t\t\t\t\t\t<div class=\"d-flex flex-column position-relative w79\">\n\t\t\t\t\t\t\t\t<div class=\"fz14\">Choose a file or drag it here. <br /><span *ngIf=\"percentDone\"> Upload\n\t\t\t\t\t\t\t\t\t\tPercent: {{percentDone}}%</span></div>\n\t\t\t\t\t\t\t\t<div class=\"progressContainer\">\n\t\t\t\t\t\t\t\t\t<div class=\"procesbar\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"w-100 z9\" *ngIf=\"percentDone\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"uploadSuccess\" class=\"successmsg\">Upload Successful</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</label>\n\t\t\t<div class=\"listdata mt-1\">\n\t\t\t\t<ul class=\"w-100 fileuploadlist\" *ngIf=\"UploadedFileli\">\n\t\t\t\t\t<li *ngFor=\"let data of datas; let i = index\"\n\t\t\t\t\t\tclass=\"w-100 d-flex justify-content-between align-content-around\">\n\t\t\t\t\t\t<div class=\"w-100\" *ngIf=\"contentIndex != i\">\n                            <a href=\"{{data.FileUrl}}\" target=\"_blank\" class=\"float-left\" style=\"width: 30%;\">{{data.Description}}</a>\n                            <a *ngIf=\"moreData == true\" class=\"float-left\" style=\"width: 20%;\">{{data.ChangedBy}}</a>\n                            <a *ngIf=\"moreData == true\" class=\"float-left\" style=\"width: 30%;\">{{data.ChangedOn}}</a>\n\t\t\t\t\t\t\t<div class=\"float-right d-flex justify-content-between align-content-around settingoption\">\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-success pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"edit(data,i)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/pencil-edit-button.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-danger pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"DeleteFIles(data.FilesId)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/cross.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div *ngIf=\"editContent && contentIndex == i\"\n\t\t\t\t\t\t\tclass=\"w-100 d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control w-75\" name=\"textdata\" [value]=\"data.Description\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"textdata\" #ctrl=\"ngModel\">\n\t\t\t\t\t\t\t<div class=\"float-right d-flex justify-content-between align-content-around settingoption\">\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-success pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"updateName(data.FilesId)\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/checked.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"cross icons bg-dark pointer d-flex justify-content-center align-items-center\"\n\t\t\t\t\t\t\t\t\t(click)=\"esc()\">\n\t\t\t\t\t\t\t\t\t<img src=\"./assets/cross.svg\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t",
                styles: ["\n\t.cursor-pointer {\n\t\tcursor: pointer;\n\t  }\n\t  \n\t  .node-content-wrapper, .tree-children {\n\t\tposition: relative;\n\t  }\n\t  \n\t  .cr-slider-wrap {\n\t\tmargin: 8px auto !important\n\t  }\n\t  \n\t  .drag {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\topacity: 0;\n\t\tz-index:999999;\n\t  }\n\t  \n\t  .dropdownarea {\n\t\twidth: 100%;\n\t\tborder: 2px dashed #ccc;\n\t\tpadding: 50px 15px;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 65px;\n\t\ttext-align: center;\n\t\talign-items: center;\n\t\tposition: relative;\n\t  }\n\t  \n\t  .dropdownarea h1 {\n\t\tcolor: #7d7c7c;\n\t\tfont-size: 17px;\n\t  }\n\t  \n\t  .pd5 {\n\t\tpadding: 89px 9px 76px 0px;\n\t\tfloat: left;\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .table-headed {\n\t\tpadding: 15px;\n\t\tdisplay: block;\n\t  }\n\t  \n\t  .mgt50 {\n\t\tmargin-top: 50px;\n\t  }\n\t  \n\t  .btndefault {\n\t\tbackground-color: #f3f3f3;\n\t\tborder-color: #e6e6e6;\n\t\tcolor: #333;\n\t  }\n\t  \n\t  .cross {\n\t\tdisplay: inline-block;\n\t\tfont-size: 12px;\n\t\tpadding: 5px;\n\t\tcolor: red;\n\t\tfont-weight: bold;\n\t\twidth: 10px;\n\t\theight: 10px;\n\t\tmargin-left: 10px;\n\t  }\n\t  \n\t  .progressbar {\n\t\theight: 2px;\n\t\tbackground: green;\n\t\tfloat: left;\n\t  }\n\t  \n\t  .fz14 {\n\t\tfont-size: 14px;\n\t  }\n\t  \n\t  .top50 {\n\t\ttop: 31px;\n\t\tleft: -19px;\n\t  }\n\t  \n\t  .successmsg {\n\t\tfont-size: 14px;\n\t\tpadding: 10px;\n\t\tcolor: green;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\ttop: -82px;\n\t  }\n\t  \n\t  .fileuploadlist {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t  }\n\t  \n\t  .fileuploadlist li {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tlist-style: none;\n\t\tmargin-bottom: 10px;\n\t  }\n\t  \n\t  .fileuploadlist li a {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-size: 14px;\n\t\tcolor: #333;\n\t  }\n\t  \n\t  .pointer {\n\t\tcursor: pointer;\n\t  }\n\t  \n\t  .cross img {\n\t\theight: 10px;\n\t  }\n\t  \n\t  .listdata {\n\t\twidth: 100%;\n\t\tmax-width: 463px\n\t  }\n\t  \n\t  .settingoption {\n\t\twidth: 66px;\n\t  }\n\t  \n\t  .icons {\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tborder-radius: 3px;\n\t  }\n\t  \n\t  .checkbox {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 10px 0;\n\t  }\n\t  \n\t  .styled-checkbox {\n\t\tposition: absolute;\n\t\topacity: 0;\n\t  }\n\t  \n\t  .styled-checkbox+span {\n\t\tposition: relative;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t  }\n\t  \n\t  .styled-checkbox+span:before {\n\t\tcontent: \"\";\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder: 1px solid #ccc;\n\t  }\n\t  \n\t  .styled-checkbox:checked+span:after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\tleft: 5px;\n\t\ttop: 2px;\n\t\theight: 9px;\n\t\twidth: 5px;\n\t\tborder: solid #09b4bd;\n\t\tborder-width: 0 2px 2px 0;\n\t\t-webkit-transform: rotate(45deg);\n\t\ttransform: rotate(45deg);\n\t  }\n\t  \n\t  .procesbar {\n\t\tbackground: #ccc;\n\t\theight: 2px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .progressContainer {\n\t\twidth: 100%;\n\t\tposition: relative;\n\t\ttop: 10px;\n\t  }\n\t  \n\t  .z9 {\n\t\tz-index: 99;\n\t\tposition: relative;\n\t  }\n\t  \n\t  .w79 {\n\t\twidth: 82%;\n\t  }\n\t  \n\t  .uploadicon {\n\t\tpadding: 10px;\n\t  }\n\t  \n\t  .w-100 {\n\t\twidth: 100%;\n\t  }\n\t  \n\t  .mb-5 {\n\t\tmargin-bottom: 3rem!important\n\t  }\n\t  \n\t  .form-row {\n\t\tdisplay: -webkit-box;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-wrap: wrap;\n\t\tflex-wrap: wrap;\n\t\tmargin-right: -5px;\n\t\tmargin-left: -5px;\n\t  }\n\t  \n\t  .col-12 {\n\t\tflex: 0 0 100%;\n\t\tmax-width: 100%;\n\t  }\n\t  \n\t  .mb-0 {\n\t\tmargin-bottom: 0px!important;\n\t  }\n\t  \n\t  .form-row>.col, .form-row>[class*=col-] {\n\t\tpadding-right: 5px;\n\t\tpadding-left: 5px;\n\t  }\n\t  \n\t  .d-flex {\n\t\tdisplay: flex;\n\t  }\n\t  \n\t  .position-relative {\n\t\tposition: relative;\n\t  }\n\t  \n\t  .border {\n\t\tborder: 1px solid #dee2e6!important\n\t  }\n\t  \n\t  .flex-column {\n\t\tflex-direction: column\n\t  }\n\t  \n\t  .align-content-around {\n\t\talign-content: space-around\n\t  }\n\t  \n\t  .bg-success {\n\t\tbackground-color: #28a745!important;\n\t  }\n\t  \n\t  .bg-danger {\n\t\tbackground-color: #dc3545!important;\n\t  }\n\t  \n\t  .justify-content-center {\n\t\t-webkit-box-pack: center!important;\n\t\t-ms-flex-pack: center!important;\n\t\tjustify-content: center!important;\n\t  }\n\t  \n\t  .float-right {\n\t\tfloat: right!important;\n\t  }\n\t  \n\t  .justify-content-between {\n\t\t-webkit-box-pack: justify!important;\n\t\t-ms-flex-pack: justify!important;\n\t\tjustify-content: space-between!important;\n\t  }\n\t  .floating-border{\n\t\tborder:1px solid #ccc;\n\t\tpadding: 15px !important;\n\t  }\n\t"]
            })
        ], MultifileuploadComponent);
        return MultifileuploadComponent;
    }());

    var MultifileuploadModule = /** @class */ (function () {
        function MultifileuploadModule() {
        }
        MultifileuploadModule = __decorate([
            core.NgModule({
                declarations: [MultifileuploadComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [MultifileuploadComponent]
            })
        ], MultifileuploadModule);
        return MultifileuploadModule;
    }());

    var ImagesLightBoxComponent = /** @class */ (function () {
        function ImagesLightBoxComponent(http$1) {
            this.http = http$1;
            this.apiURL = 'http://apinext.aaadev.info/apinext/';
            this.fileurl = 'http://preview.abacuscrm.net/media/';
            this.database = 'APPS';
            this.FilesGroupId = "0";
            this.fileResponse = new core.EventEmitter;
            this.body = {};
            this.allowFiles = ['image/jpeg', 'image/png', 'application/pdf', 'audio/mp3', 'video/mp4', 'text/plain'];
            this.GenericToken = "";
            this.imagesData = [];
            this.error_message = '';
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            this.slideIndex = 1;
            this.slideDescription = '';
        }
        ImagesLightBoxComponent.prototype.ngOnInit = function () {
            this.getToken();
        };
        ImagesLightBoxComponent.prototype.getToken = function () {
            var _this = this;
            if (this.GenericToken == "") {
                this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                    _this.GenericToken = res["GenericToken"];
                    _this.getListdata();
                });
            }
            else {
                this.getListdata();
            }
        };
        ImagesLightBoxComponent.prototype.getListdata = function () {
            var _this = this;
            if (this.FilesGroupId) {
                this.body['FilesGroupId'] = this.FilesGroupId;
                var url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, this.body, this.httpOptionJSON).subscribe(function (res) {
                    var temp = [];
                    _this.imagesData = [];
                    temp = res;
                    for (var i = 0; i < temp.length; i++) {
                        var nType = {
                            path: _this.fileurl + temp[i].FileUrl,
                            description: temp[i].Description,
                            FilesId: temp[i].FilesId,
                            type: _this.getFileType(temp[i].FileUrl)
                        };
                        _this.imagesData.push(nType);
                    }
                });
            }
        };
        ImagesLightBoxComponent.prototype.getFileType = function (url) {
            var arr = url.split(".");
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
        };
        ImagesLightBoxComponent.prototype.uploadAndProgress = function (files) {
            var _this = this;
            console.log(files);
            var flag = false;
            var _loop_1 = function (j) {
                var sel = this_1.allowFiles.filter(function (d) { return d == files[j].type; });
                if (sel.length == 0) {
                    flag = true;
                    return "break";
                }
            };
            var this_1 = this;
            for (var j = 0; j < files.length; j++) {
                var state_1 = _loop_1(j);
                if (state_1 === "break")
                    break;
            }
            if (flag) {
                this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
            }
            else {
                this.error_message = "";
                for (var i = 0; i < files.length; i++) {
                    var formData = new FormData();
                    formData.append('file', files[i], files[i].name);
                    formData.append('id', '0');
                    formData.append('filegroupid', this.FilesGroupId);
                    formData.append('mediaType', 'example');
                    formData.append('description', files[i].name);
                    this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                        .subscribe(function (event) {
                        if (event.type === http.HttpEventType.UploadProgress) {
                            _this.percentDone = Math.round(100 * event.loaded / event.total);
                        }
                        else if (event instanceof http.HttpResponse) {
                            _this.uploadSuccess = true;
                            _this.fileResponse.emit(event.body);
                            _this.FilesGroupId = event.body['FilesGroupId'];
                            _this.getListdata();
                            setTimeout(function () {
                                _this.uploadSuccess = false;
                                _this.percentDone = 0;
                            }, 3000);
                        }
                    });
                }
            }
        };
        ImagesLightBoxComponent.prototype.deleteFIles = function (value, index) {
            var _this = this;
            this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(function (res) {
                if (res) {
                    _this.imagesData.splice(index, 1);
                }
            });
        };
        ImagesLightBoxComponent.prototype.openModal = function () {
            document.getElementById("myModallightbox").style.display = "block";
        };
        ImagesLightBoxComponent.prototype.closeModal = function () {
            document.getElementById("myModallightbox").style.display = "none";
        };
        ImagesLightBoxComponent.prototype.plusSlides = function (n) {
            this.showSlides(this.slideIndex += n);
        };
        ImagesLightBoxComponent.prototype.currentSlide = function (n) {
            this.showSlides(this.slideIndex = n);
        };
        ImagesLightBoxComponent.prototype.showSlides = function (n) {
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
        };
        ImagesLightBoxComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "fileurl", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "FilesGroupId", void 0);
        __decorate([
            core.Output()
        ], ImagesLightBoxComponent.prototype, "fileResponse", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "body", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "allowFiles", void 0);
        __decorate([
            core.Input()
        ], ImagesLightBoxComponent.prototype, "GenericToken", void 0);
        ImagesLightBoxComponent = __decorate([
            core.Component({
                selector: 'sml-images-light-box',
                template: "\n  <div class=\"w-100\">\n  <div class=\"error-msg\" *ngIf=\"error_message != ''\">{{error_message}}</div>\n  <label class=\"dropdownarea mar-b-0\">\n    <div class=\"d-flex w-100 flex-column\">\n      <input type=\"file\" multiple id=\"other\" (change)=\"uploadAndProgress($event.target.files)\" class=\"drag\" />\n      <div class=\"d-flex justify-content-between align-items-center w-100 flex-column\">\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <span class=\"uploadicon\">\n            <img src=\"./assets/upload.png\" />\n          </span>\n          <div class=\"d-flex flex-column position-relative w79\">\n            <div class=\"fz14\">Choose a file or drag it here.\n              <br />\n              <span *ngIf=\"percentDone\"> Upload Percent: {{percentDone}}%</span>\n            </div>\n            <div class=\"progressContainer\">\n              <div class=\"procesbar\"></div>\n              <div class=\"w-100 z9\" *ngIf=\"percentDone\">\n                <div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"uploadSuccess\" class=\"successmsg\">Upload Successful</div>\n        </div>\n      </div>\n    </div>\n  </label>\n  <div class=\"col-md-12 mt-2 sml-light-box-scroll-y\" style=\"padding-right: 8px;\">\n    <div class=\"row\">\n    <div class=\"column position-relative\" *ngFor=\"let img of imagesData;let i=index\">\n    <span *ngIf=\"img.type == 'Image'\">\n      <img [src]=\"img.path\" height=\"96\" width=\"100%\" onerror=\"this.onerror=null; this.src='assets/404_images.png'\" (click)=\"openModal();currentSlide(i+1)\"\n        class=\"hover-shadow cursor\">\n    </span>\n    <span *ngIf=\"img.type == 'Text'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/txt_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Pdf'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/pdf_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Audio'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/audio_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Video'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/video_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Doc'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/doc_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Csv'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/csv_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Ppt'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/ppt_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span *ngIf=\"img.type == 'Xls'\">\n      <a [href]=\"img.path\" target=\"_blank\">\n        <img src=\"assets/xls_icon.png\" height=\"96\" width=\"100%\" class=\"hover-shadow cursor\">\n      </a>\n    </span>\n    <span class=\"remove_icon\">\n      <i class=\"fa fa-times\" (click)=\"deleteFIles(img.FilesId,i)\"></i>\n    </span>\n  </div>\n    </div>\n  </div>\n</div>\n<div id=\"myModallightbox\" class=\"modal\">\n  <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\n  <div class=\"modal-content\">\n    <div style=\"margin: auto;width: 80%;\">\n      <div class=\"mySlides\" *ngFor=\"let img of imagesData;let i=index\">\n        <div class=\"numbertext\">{{i + 1}}&nbsp;/&nbsp;{{imagesData.length}}</div>\n        <img [src]=\"img.path\" onerror=\"this.onerror=null; this.src='assets/404_images.png'\"   height=\"450\" style=\"width:100%\">\n      </div>\n    </div>\n    <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\n    <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\n  </div>\n  <div class=\"caption-container\">\n    <p id=\"caption\" style=\"margin-bottom:0px\">{{slideDescription}}</p>\n  </div>\n</div>\n\t",
                styles: ["\n\t.mar-b-0{\n    margin-bottom: 0px !important;\n}\n.dropdownarea {\n    width: 100%;\n    border: 1px dashed #ccc;\n    padding: 35px 0px;\n    display: flex;\n    align-items: center;\n    height: 65px;\n    text-align: center;\n    align-items: center;\n    position: relative;\n}\n.progressContainer {\n    width: 100%;\n    position: relative;\n    top: 2px;\n}\n.drag {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    z-index:999999;\n}   \n.progressbar {\n    height: 2px;\n    background: green;\n    float: left;\n}\n.fz14 {\n    font-size: 14px;\n}\n.successmsg {\n    font-size: 14px;\n    color: green;\n    width: 25%;\n    text-align: right;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 10px;\n}\n.procesbar {\n    background: #ccc;\n    height: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.z9 {\n    z-index: 99;\n    position: relative;\n}\n.w79 {\n    width: 82%;\n}\n.uploadicon {\n    padding: 10px;\n}\n.w-100 {\n    width: 100%;\n}\n.d-flex {\n    display: flex;\n}\n.position-relative {\n    position: relative;\n}\n.flex-column {\n    flex-direction: column\n}  \n.justify-content-between {\n    -webkit-box-pack: justify!important;\n    -ms-flex-pack: justify!important;\n    justify-content: space-between!important;\n}\n.row > .column {\n    padding-right: 8px;\n    padding-bottom: 8px;\n}\n.row:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.column {\n    float: left;\n    width: 25%;\n}\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 100px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: black;\n  }\n.modal-content {\n    position: relative;\n    background-color: black;\n    margin: auto;\n    padding: 0;\n    width: 100%;\n    max-width: 1200px;\n}\n.close {\n    color: white;\n    position: absolute;\n    top: 10px;\n    right: 25px;\n    font-size: 35px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: #999;\n    text-decoration: none;\n    cursor: pointer;\n}\n.mySlides {\n    display: none;\n}\n.cursor {\n    cursor: pointer;\n}\n.prev,\n.next {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: auto;\n    padding: 16px;\n    color: white !important;\n    font-weight: bold;\n    font-size: 20px;\n    transition: 0.6s ease;\n    border-radius: 0 3px 3px 0;\n    user-select: none;\n    -webkit-user-select: none;\n}\n.next {\n    right: 0;\n    border-radius: 3px 0 0 3px;\n}\n.prev:hover,\n.next:hover {\n    background-color: rgba(243, 167, 167, 0.8);\n}\n.numbertext {\n    color: #f2f2f2;\n    font-size: 12px;\n    padding: 8px 12px;\n    position: absolute;\n    top: 0;\n}\n.caption-container {\n    text-align: center;\n    background-color: black;\n    padding: 16px 16px;\n    color: white;\n}\n.demo {\n    opacity: 0.6;\n}\n.active,\n.demo:hover {\n    opacity: 1;\n}\nimg.hover-shadow {\n    transition: 0.3s;\n}\n.hover-shadow:hover {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.sml-light-box-scroll-y {\n    height: auto;\n    max-height:315px;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n.sml-light-box-scroll-y:hover {\n    overflow-y: overlay;\n}\n.sml-light-box-scroll-y::-webkit-scrollbar {\n    width: 8px;\n    background-color: #fbfbfb;\n}\n.sml-light-box-scroll-y::-webkit-scrollbar-track {\n    width: 3px;\n    background: rgba(222, 222, 222, .75);\n}\n.sml-light-box-scroll-y::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, .5);\n    border-radius: 4px;\n}\n.remove_icon{\n  position: absolute;\n  right: 13px;\n  top: -2px;\n  cursor: pointer;\n}\n.error-msg{\n  font-size: 13px;\n  text-align: center;\n  color: red\n}\n\t"]
            })
        ], ImagesLightBoxComponent);
        return ImagesLightBoxComponent;
    }());

    var ImagesLightBoxModule = /** @class */ (function () {
        function ImagesLightBoxModule() {
        }
        ImagesLightBoxModule = __decorate([
            core.NgModule({
                declarations: [ImagesLightBoxComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [ImagesLightBoxComponent]
            })
        ], ImagesLightBoxModule);
        return ImagesLightBoxModule;
    }());

    var ImageUploadBoxComponent = /** @class */ (function () {
        function ImageUploadBoxComponent(http$1) {
            this.http = http$1;
            this.apiURL = 'http://assist.aaadev.info/api/';
            this.fileurl = 'http://assist.aaadev.info/media/';
            this.database = 'ASSIST';
            this.FilesGroupId = "0";
            this.FileId = "0";
            this.fileResponse = new core.EventEmitter;
            this.allowFiles = ['image/jpeg', 'image/png'];
            this.GenericToken = "";
            this.imagesData = {};
            this.isLoading = false;
            this.error_message = '';
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        ImageUploadBoxComponent.prototype.ngOnInit = function () {
            this.getToken();
        };
        ImageUploadBoxComponent.prototype.getToken = function () {
            var _this = this;
            if (this.GenericToken == "") {
                this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                    _this.GenericToken = res["GenericToken"];
                    _this.getListdata();
                });
            }
            else {
                this.getListdata();
            }
        };
        ImageUploadBoxComponent.prototype.getListdata = function () {
            var _this = this;
            if (this.FilesGroupId) {
                var body = {
                    FilesGroupId: this.FilesGroupId
                };
                var url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(function (res) {
                    var temp = [];
                    _this.imagesData = {};
                    temp = res;
                    for (var i = 0; i < temp.length; i++) {
                        if (_this.FileId == temp[i].FilesId) {
                            var nType = {
                                path: _this.fileurl + temp[i].FileUrl,
                                description: temp[i].Description,
                                FilesId: temp[i].FilesId,
                                type: "Image"
                            };
                            _this.imagesData = nType;
                        }
                    }
                    _this.isLoading = true;
                }, function (erorr) {
                    _this.isLoading = true;
                });
            }
            else {
                this.isLoading = true;
            }
        };
        ImageUploadBoxComponent.prototype.uploadAndProgress = function (files) {
            var _this = this;
            console.log(files);
            var flag = false;
            var _loop_1 = function (j) {
                var sel = this_1.allowFiles.filter(function (d) { return d == files[j].type; });
                if (sel.length == 0) {
                    flag = true;
                    return "break";
                }
            };
            var this_1 = this;
            for (var j = 0; j < files.length; j++) {
                var state_1 = _loop_1(j);
                if (state_1 === "break")
                    break;
            }
            if (flag) {
                this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
            }
            else {
                this.error_message = "";
                for (var i = 0; i < files.length; i++) {
                    var formData = new FormData();
                    formData.append('file', files[i], files[i].name);
                    formData.append('id', '0');
                    formData.append('filegroupid', this.FilesGroupId);
                    formData.append('mediaType', 'example');
                    formData.append('description', files[i].name);
                    this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                        .subscribe(function (event) {
                        if (event.type === http.HttpEventType.UploadProgress) {
                            _this.percentDone = Math.round(100 * event.loaded / event.total);
                        }
                        else if (event instanceof http.HttpResponse) {
                            _this.fileResponse.emit(event.body);
                            _this.FilesGroupId = event.body['FilesGroupId'];
                            setTimeout(function () {
                                _this.percentDone = 0;
                                var nType = {
                                    path: _this.fileurl + event.body['FileUrl'],
                                    description: event.body['Description'],
                                    FilesId: event.body['FilesId'],
                                    type: "Image"
                                };
                                _this.imagesData = nType;
                            }, 3000);
                        }
                    });
                }
            }
        };
        ImageUploadBoxComponent.prototype.deleteFIles = function (value) {
            var _this = this;
            this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(function (res) {
                if (res) {
                    _this.imagesData = {};
                }
            });
        };
        ImageUploadBoxComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "fileurl", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "FilesGroupId", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "FileId", void 0);
        __decorate([
            core.Output()
        ], ImageUploadBoxComponent.prototype, "fileResponse", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "allowFiles", void 0);
        __decorate([
            core.Input()
        ], ImageUploadBoxComponent.prototype, "GenericToken", void 0);
        ImageUploadBoxComponent = __decorate([
            core.Component({
                selector: 'sml-image-upload-box',
                template: "\n  <div class=\"error-msg\" *ngIf=\"error_message != ''\">{{error_message}}</div>\n<div *ngIf=\"!imagesData.path && isLoading\" class=\"uploadImage d-flex align-items-center flex-column\">\n  <i class=\"fa fa-camera fz24\"></i>\n  <p>Upload Image</p>\n  <input type=\"file\" id=\"fileinput\" (change)=\"uploadAndProgress($event.target.files)\" class=\"drag\" />\n  <div class=\"fz24\">\n    <span *ngIf=\"percentDone\"> Upload Percent: {{percentDone}}%</span>\n  </div>\n  <div class=\"progressContainer\" *ngIf=\"percentDone\">\n    <div class=\"procesbar\"></div>\n    <div class=\"w-100 z9\">\n      <div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n    </div>\n  </div>\n  </div>\n  <div *ngIf=\"imagesData.path && isLoading\" class=\"preview-img\">\n    <img [src]=\"imagesData.path\" height=\"147\" width=\"100%\" onerror=\"this.onerror=null; this.src='assets/404_images.png'\" class=\"hover-shadow cursor\">\n    <span class=\"remove_icon\">\n      <i class=\"fa fa-times\" (click)=\"deleteFIles(imagesData.FilesId)\"></i>\n    </span>\n  </div>\n  ",
                styles: ["\n  .uploadImage{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}\n  .uploadImage .fa{font-size:30px;}\n  .remove_icon{position:absolute;right:13px;top:-2px;cursor:pointer;}\n  .drag{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}\n  img.hover-shadow{transition:0.3s;}\n  .hover-shadow:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}\n  .cursor{cursor:pointer;}\n  .preview-img{position:relative;width:100%;}\n  .progressContainer{width:100%;position:relative;top:2px;}\n  .progressbar{height:2px;background:green;float:left;}\n  .procesbar{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}\n  .z9{z-index:99;position:relative;}\n  .error-msg{font-size:13px;text-align:center;color:red}\n  "]
            })
        ], ImageUploadBoxComponent);
        return ImageUploadBoxComponent;
    }());

    var ImageUplaodBoxModule = /** @class */ (function () {
        function ImageUplaodBoxModule() {
        }
        ImageUplaodBoxModule = __decorate([
            core.NgModule({
                declarations: [ImageUploadBoxComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [ImageUploadBoxComponent]
            })
        ], ImageUplaodBoxModule);
        return ImageUplaodBoxModule;
    }());

    var InputTagComponent = /** @class */ (function () {
        function InputTagComponent(elementRef) {
            this.elementRef = elementRef;
            this.label = 'Label Name';
            this.name = 'sml-tag-input';
            this.items = [];
            this.getvalue = new core.EventEmitter();
            this.switchStyle = true;
            this.signalStyle = false;
            this.staticStyle = true;
        }
        InputTagComponent.prototype.ngOnInit = function () {
        };
        InputTagComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
                this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
                this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
                this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
                this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
            }
            if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
                var css = event.borderStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
            }
        };
        InputTagComponent.prototype.onItemAdded = function (event) {
            this.getvalue.emit(this.items);
        };
        InputTagComponent.prototype.onItemRemove = function (event) {
            this.getvalue.emit(this.items);
        };
        InputTagComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "items", void 0);
        __decorate([
            core.Output()
        ], InputTagComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], InputTagComponent.prototype, "valueStyle", void 0);
        InputTagComponent = __decorate([
            core.Component({
                selector: 'sml-tag-input',
                template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n            [ngStyle]=\"borderStyle\">\n            <tag-input [(ngModel)]='items'  [modelAsStrings]=\"true\" (onAdd)=\"onItemAdded($event)\" (onRemove)=\"onItemRemove($event)\" theme='bootstrap3-info'>\n            </tag-input>\n            <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n    </div>\n\t",
                styles: ["\n\t:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t.position-relative{position:relative;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}\n\t.float-group{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t:host /deep/ tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}\n\t:host /deep/ tag-input tag{line-height:20px !important;height:27px !important;}\n\t:host /deep/ delete-icon svg{height:22px !important;}\n\t:host /deep/ tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n\t:host /deep/ tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}\n\t:host /deep/ .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}\n\t"]
            })
        ], InputTagComponent);
        return InputTagComponent;
    }());

    var InputTagModule = /** @class */ (function () {
        function InputTagModule() {
        }
        InputTagModule = __decorate([
            core.NgModule({
                declarations: [InputTagComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    ngxChips.TagInputModule
                ],
                exports: [InputTagComponent]
            })
        ], InputTagModule);
        return InputTagModule;
    }());

    var ListSearchComponent = /** @class */ (function () {
        function ListSearchComponent(http$1, elementRef) {
            this.http = http$1;
            this.elementRef = elementRef;
            this.id = 'sml-list-search';
            this.name = 'sml-list-search';
            this.label = 'Label Name';
            this.value = 'Los';
            this.listData = [];
            this.getvalue = new core.EventEmitter();
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            this.keyword = 'name';
        }
        ListSearchComponent.prototype.ngOnInit = function () {
            this.getToken();
        };
        ListSearchComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
                this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
                this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
                this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
                this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
            }
            if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
                var css = event.borderStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
            }
        };
        ListSearchComponent.prototype.getToken = function () {
            var _this = this;
            if (this.GenericToken == "") {
                this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                    _this.GenericToken = res["GenericToken"];
                });
            }
        };
        ListSearchComponent.prototype.setSelectedData = function (event) {
            this.getvalue.emit(event);
        };
        ListSearchComponent.prototype.onChangeSearch = function (search) {
            var _this = this;
            var body = {
                SearchString: search
            };
            var url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(function (res) {
                if (res) {
                    _this.listData = [];
                    var temp = [];
                    temp = res;
                    for (var i = 0; i < temp.length; i++) {
                        var nType = {
                            id: i + 1,
                            name: temp[i][_this.fieldName]
                        };
                        _this.listData.push(nType);
                    }
                }
                else {
                    _this.listData = [];
                }
            }, function (error) {
                _this.listData = [];
            });
        };
        ListSearchComponent.prototype.onFocused = function (e) {
            // do something
        };
        ListSearchComponent.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "listData", void 0);
        __decorate([
            core.Output()
        ], ListSearchComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "GenericToken", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "schema", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "procedure", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "fieldName", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "switchStyle", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], ListSearchComponent.prototype, "valueStyle", void 0);
        ListSearchComponent = __decorate([
            core.Component({
                selector: 'sml-list-search',
                template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n            [ngStyle]=\"borderStyle\">\n            <div class=\"ng-autocomplete\">\n                <ng-autocomplete [data]=\"listData\" [initialValue]=\"value\" [searchKeyword]=\"keyword\" (selected)='setSelectedData($event)'\n                    (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]=\"itemTemplate\"\n                    [notFoundTemplate]=\"notFoundTemplate\">\n                </ng-autocomplete>\n                <ng-template #itemTemplate let-item>\n                    <a [innerHTML]=\"item.name\"></a>\n                </ng-template>\n                <ng-template #notFoundTemplate let-notFound>\n                    <div [innerHTML]=\"notFound\"></div>\n                </ng-template>\n            </div>\n            <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n    </div>\n\t",
                styles: ["\n\t:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t:host /deep/ ng-autocomplete .autocomplete-container{height:auto;border:none !important;box-shadow:none !important;}\n\t:host /deep/ ng-autocomplete .autocomplete-container .input-container .x{display:none !important;}\n\t.ng-autocomplete{width:100% !important;}\n\t:host /deep/ ng-autocomplete .autocomplete-container .input-container input{font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;line-height:1.5 !important;min-height:var(--c-height) !important;height:auto;}\n\t.position-relative{position:relative;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;z-index:999;}\n\t.float-group{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t"]
            })
        ], ListSearchComponent);
        return ListSearchComponent;
    }());

    var ListSearchModule = /** @class */ (function () {
        function ListSearchModule() {
        }
        ListSearchModule = __decorate([
            core.NgModule({
                declarations: [ListSearchComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    angularNgAutocomplete.AutocompleteLibModule
                ],
                exports: [ListSearchComponent]
            })
        ], ListSearchModule);
        return ListSearchModule;
    }());

    var MultiSelectComponent = /** @class */ (function () {
        function MultiSelectComponent(http$1, elementRef) {
            this.http = http$1;
            this.elementRef = elementRef;
            this.dropdownList = [];
            this.selectedItems = [];
            this.label = 'Label Name';
            this.searchString = '';
            this.getvalue = new core.EventEmitter();
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
            this.isOpen = false;
        }
        MultiSelectComponent.prototype.ngOnInit = function () {
            this.getToken();
        };
        MultiSelectComponent.prototype.ngOnChanges = function (event) {
            if (event.style != undefined && event.style.currentValue != undefined) {
                var css = event.style.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
                this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
                this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
                this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
                this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
            }
            if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
                var css = event.borderStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
            }
        };
        MultiSelectComponent.prototype.getToken = function () {
            var _this = this;
            if (this.GenericToken == "") {
                this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                    _this.GenericToken = res["GenericToken"];
                    _this.getDrpData();
                });
            }
            else {
                this.getDrpData();
            }
        };
        MultiSelectComponent.prototype.getDrpData = function () {
            var _this = this;
            var url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
            this.http.post(url, this.body, this.httpOptionJSON).subscribe(function (res) {
                if (res) {
                    _this.dropdownList = [];
                    var temp = [];
                    temp = res;
                    for (var i = 0; i < temp.length; i++) {
                        var nType = {
                            "id": temp[i][_this.fieldId],
                            "name": temp[i][_this.fieldName]
                        };
                        _this.dropdownList.push(nType);
                    }
                }
                else {
                    _this.dropdownList = [];
                }
            }, function (error) {
                _this.dropdownList = [];
            });
        };
        MultiSelectComponent.prototype.onItemSelect = function (item) {
            this.getvalue.emit(this.selectedItems);
        };
        MultiSelectComponent.prototype.OnItemDeSelect = function (item) {
            this.getvalue.emit(this.selectedItems);
        };
        MultiSelectComponent.prototype.onSelectAll = function (items) {
            this.getvalue.emit(this.selectedItems);
        };
        MultiSelectComponent.prototype.onDeSelectAll = function (items) {
            this.getvalue.emit(this.selectedItems);
        };
        MultiSelectComponent.prototype.onOpen = function () {
            this.isOpen = true;
        };
        MultiSelectComponent.prototype.onClose = function () {
            this.isOpen = false;
        };
        MultiSelectComponent.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "dropdownList", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "selectedItems", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "label", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "searchString", void 0);
        __decorate([
            core.Output()
        ], MultiSelectComponent.prototype, "getvalue", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "GenericToken", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "schema", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "procedure", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "body", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "fieldName", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "fieldId", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "style", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "signalStyle", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "staticStyle", void 0);
        __decorate([
            core.Input()
        ], MultiSelectComponent.prototype, "switchStyle", void 0);
        MultiSelectComponent = __decorate([
            core.Component({
                selector: 'sml-multi-select',
                template: "\n\t<div class=\"position-relative\">\n        <div class=\"input-field\" [ngStyle]=\"borderStyle\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\">\n            <ng-select [items]=\"dropdownList\" bindLabel=\"name\" appendTo=\"body\" multiple=\"true\" (open)=\"onOpen()\" (close)=\"onClose()\" (change)=\"onItemSelect($event)\" [(ngModel)]=\"selectedItems\">\n            </ng-select>\n            <label *ngIf=\"switchStyle\" class=\"label\" [ngClass]=\"{'z-9999': isOpen}\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n        <label *ngIf=\"!switchStyle\" class=\"label\"  [ngStyle]=\"style\">\n            {{ label }}\n        </label>\n    </div>\n\t",
                styles: ["\n\t:host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t.position-relative{position:relative;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.float-groupdd{position:relative;padding:0px;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;}\n\t.z-9999{z-index:9999;}\n\t.float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}\n\t.float-group{position:relative;padding:14px 2px 0px 0px;}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t:host /deep/ .ng-select .ng-select-container{border:none !important;background: var(--back-color);}\n\t:host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n\t:host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}\n\t:host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}\t\n\t"]
            })
        ], MultiSelectComponent);
        return MultiSelectComponent;
    }());

    var MultiSelectModule = /** @class */ (function () {
        function MultiSelectModule() {
        }
        MultiSelectModule = __decorate([
            core.NgModule({
                declarations: [MultiSelectComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    ngSelect.NgSelectModule
                ],
                exports: [MultiSelectComponent]
            })
        ], MultiSelectModule);
        return MultiSelectModule;
    }());

    var ProgressbarComponent = /** @class */ (function () {
        function ProgressbarComponent() {
            this.id = 'sml-progress-bar';
            this.value = 0;
            this.type = '';
            this.color = '';
            this.classes = 'progress-bar-info progress-bar-striped  active';
            // progress-bar-warning progress-bar-striped  active
            // progress-bar-danger
            // progress-bar-info progress-bar-striped
            this.interval = 100;
            this.completed = new core.EventEmitter();
        }
        ProgressbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            var width = 1;
            this.identity = setInterval(function () {
                _this.scene();
            }, this.interval);
        };
        ProgressbarComponent.prototype.scene = function () {
            if (this.value >= 100) {
                clearInterval(this.identity);
            }
            else {
                this.value = this.value + 1;
            }
        };
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "color", void 0);
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "classes", void 0);
        __decorate([
            core.Input()
        ], ProgressbarComponent.prototype, "interval", void 0);
        __decorate([
            core.Output()
        ], ProgressbarComponent.prototype, "completed", void 0);
        ProgressbarComponent = __decorate([
            core.Component({
                selector: 'sml-progress-bar',
                template: "\n\t<div class=\"w-100\">\n    <div class=\"progress\">\n        <div class=\"progress-bar {{classes}}\" role=\"progressbar\" [ngStyle]=\"{'width': value + '%' }\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n            {{value}}%\n        </div>\n    </div>\n</div>\n\t",
                styles: ["\n\t.progress-bar-success {\n\t\tbackground-color: #5cb85c;\n\t}\n\t.progress-bar-info {\n\t\tbackground-color: #5bc0de;\n\t}\n\t.progress-bar-warning {\n\t\tbackground-color: #f0ad4e;\n\t}\n\t.progress-bar-danger {\n\t\tbackground-color: #d9534f;\n\t}\n\t.progress-bar.active, .progress.active .progress-bar {\n\t\t-webkit-animation: progress-bar-stripes 2s linear infinite;\n\t\t-o-animation: progress-bar-stripes 2s linear infinite;\n\t\tanimation: progress-bar-stripes 2s linear infinite;\n\t}\n\t"]
            })
        ], ProgressbarComponent);
        return ProgressbarComponent;
    }());

    var ProgressBarModule = /** @class */ (function () {
        function ProgressBarModule() {
        }
        ProgressBarModule = __decorate([
            core.NgModule({
                declarations: [ProgressbarComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [ProgressbarComponent]
            })
        ], ProgressBarModule);
        return ProgressBarModule;
    }());

    var RadioCheckBoxListComponent = /** @class */ (function () {
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
        function RadioCheckBoxListComponent() {
            this.id = 'sml-radio-check-box-list';
            this.name = 'sml-radio-check-box-list-name';
            this.jsonData = [];
            this.type = 'radio';
            this.selectedValue = '';
            this.radioChange = new core.EventEmitter();
            this.checkboxChange = new core.EventEmitter();
        }
        RadioCheckBoxListComponent.prototype.ngOnInit = function () { };
        RadioCheckBoxListComponent.prototype.changeEvent = function (event) {
            if (event == 'radio') {
                this.radioChange.emit(this.selectedValue);
            }
            else {
                this.checkboxChange.emit(this.jsonData);
            }
        };
        __decorate([
            core.Input()
        ], RadioCheckBoxListComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], RadioCheckBoxListComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], RadioCheckBoxListComponent.prototype, "jsonData", void 0);
        __decorate([
            core.Input()
        ], RadioCheckBoxListComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], RadioCheckBoxListComponent.prototype, "selectedValue", void 0);
        __decorate([
            core.Output()
        ], RadioCheckBoxListComponent.prototype, "radioChange", void 0);
        __decorate([
            core.Output()
        ], RadioCheckBoxListComponent.prototype, "checkboxChange", void 0);
        RadioCheckBoxListComponent = __decorate([
            core.Component({
                selector: 'sml-radio-check-box-list',
                template: "\n  <form class=\"formRadioCheck\">\n    <div *ngIf=\"type == 'checkbox'\">\n      <div class=\"inputGroupRadioCheck\" *ngFor=\"let chk of jsonData;let i=index;\">\n        <input id=\"{{id}}-{{i}}\" name=\"{{id}}-{{i}}\" [value]=\"chk.isChecked\" [(ngModel)]=\"chk.isChecked\" (change)=\"changeEvent('checkbox')\" type=\"checkbox\" />\n        <label for=\"{{id}}-{{i}}\">{{chk.name}}</label>\n      </div>\n    </div>\n    <div *ngIf=\"type == 'radio'\">\n      <div class=\"inputGroupRadioCheck\" *ngFor=\"let rad of jsonData;let i=index;\">\n        <input id=\"{{id}}-{{i}}\" name=\"{{name}}\" [value]=\"rad.value\" [(ngModel)]=\"selectedValue\" (change)=\"changeEvent('radio')\" type=\"radio\" />\n        <label for=\"{{id}}-{{i}}\">{{rad.name}}</label>\n      </div>\n    </div>\n  </form>\n  ",
                styles: ["\n  .inputGroupRadioCheck {\n    background-color: #fff;\n    display: block;\n    margin: 10px 0;\n    position: relative;\n  }\n  .inputGroupRadioCheck  input:checked ~ label {\n      color: #fff;\n  }\n  .inputGroupRadioCheck  input:checked ~ label:before {\n      transform: translate(-50%, -50%) scale3d(56, 56, 1);\n      opacity: 1;\n  }\n  .inputGroupRadioCheck  input:checked ~ label:after {\n      background-color: #54E0C7;\n      border-color: #54E0C7;\n  }\n  .inputGroupRadioCheck  input {\n      width: 32px;\n      height: 32px;\n      order: 1;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      visibility: hidden;\n  }\n  .inputGroupRadioCheck label {\n      padding: 12px 30px;\n      width: 100%;\n      display: block;\n      text-align: left;\n      color: #3C454C;\n      cursor: pointer;\n      position: relative;\n      z-index: 2;\n      transition: color 200ms ease-in;\n      overflow: hidden;\n  }\n  .inputGroupRadioCheck label:before {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      content: '';\n      background-color: #5562eb;\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%) scale3d(1, 1, 1);\n      transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);\n      opacity: 0;\n      z-index: -1;\n  }\n  .inputGroupRadioCheck label:after {\n      width: 32px;\n      height: 32px;\n      content: '';\n      border: 2px solid #D1D7DC;\n      background-color: #fff;\n      background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E \");\n      background-repeat: no-repeat;\n      background-position: 2px 3px;\n      border-radius: 50%;\n      z-index: 2;\n      position: absolute;\n      right: 30px;\n      top: 50%;\n      transform: translateY(-50%);\n      cursor: pointer;\n      transition: all 200ms ease-in;\n  }\n  .formRadioCheck {\n    padding: 0 16px;\n    max-width: 550px;\n    font-size: 18px;\n    font-weight: 600;\n  }  \n  "]
            })
        ], RadioCheckBoxListComponent);
        return RadioCheckBoxListComponent;
    }());

    var RadioCheckBoxListModule = /** @class */ (function () {
        function RadioCheckBoxListModule() {
        }
        RadioCheckBoxListModule = __decorate([
            core.NgModule({
                declarations: [RadioCheckBoxListComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [RadioCheckBoxListComponent]
            })
        ], RadioCheckBoxListModule);
        return RadioCheckBoxListModule;
    }());

    var CropImageUploadComponent = /** @class */ (function () {
        function CropImageUploadComponent(http$1) {
            this.http = http$1;
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
            this.OnSaveFile = new core.EventEmitter;
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
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        CropImageUploadComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.ratioCal();
            if (this.value != '0' && this.value != 0) {
                var body = { FilesId: this.value };
                var url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_Retrieve?api_key=" + this.genericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(function (files) {
                    if (files != undefined && files != null && files != '') {
                        _this.imagePath = _this.path + files[0].FileUrl;
                    }
                });
            }
        };
        CropImageUploadComponent.prototype.ratioCal = function () {
            if (this.type == 'square' && this.ratio != '') {
                var total = parseInt(this.width) + parseInt(this.height);
                var arr = this.ratio.split(":");
                if (arr.length == 2) {
                    var ratioTotal = parseInt(arr[0]) + parseInt(arr[1]);
                    var w = ((total * parseInt(arr[0])) / ratioTotal).toFixed(0);
                    var h = ((total * parseInt(arr[1])) / ratioTotal).toFixed(0);
                    this.width = w;
                    this.height = h;
                    this.capWidth = ((100 * parseInt(arr[0])) / ratioTotal).toFixed(0);
                    this.capHeight = ((100 * parseInt(arr[1])) / ratioTotal).toFixed(0);
                }
            }
        };
        CropImageUploadComponent.prototype.fileChangeEvent = function (fileInput) {
            if (fileInput.target.files && fileInput.target.files[0]) {
                this.imageName = fileInput.target.files["0"].name;
                $("#openModalBtn").click();
                this.imageChangedEvent = fileInput;
                this.isUploadArea = false;
            }
        };
        CropImageUploadComponent.prototype.cancleClick = function () {
            this.croppedImage = "";
            this.isHtmlbind = false;
            this.isUploadArea = true;
            this.percentDone = 0;
        };
        CropImageUploadComponent.prototype.upload = function () {
            var _this = this;
            this.imagePath = "";
            this.isUploadStart = true;
            this.isHtmlbind = false;
            this.isUploadArea = true;
            var block = this.croppedImage.split(";");
            var contentType = block[0].split(":")[1];
            var realData = block[1].split(",")[1];
            var blob = b64toBlob(realData, contentType);
            var formData = new FormData();
            formData.append('file', blob, this.imageName);
            formData.append('id', this.value);
            formData.append('filegroupid', this.value);
            formData.append('mediaType', 'profilepic');
            formData.append('description', this.imageName);
            this.http.post(this.url + "uploader/uploadnew", formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                if (event.type === http.HttpEventType.UploadProgress) {
                    _this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof http.HttpResponse) {
                    _this.imagePath = _this.path + event.body['FileUrl'];
                    _this.isUploadStart = false;
                    _this.percentDone = 0;
                    _this.OnSaveFile.emit({ event: event });
                    _this.croppedImage = "";
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
        };
        CropImageUploadComponent.prototype.imageCropped = function (event) {
            this.croppedImage = event.base64;
        };
        CropImageUploadComponent.prototype.zoomOut = function () {
            this.scale -= .1;
            this.transform = __assign(__assign({}, this.transform), { scale: this.scale });
        };
        CropImageUploadComponent.prototype.zoomIn = function () {
            this.scale += .1;
            this.transform = __assign(__assign({}, this.transform), { scale: this.scale });
        };
        CropImageUploadComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "height", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "type", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "value", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "ratio", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "aspectRatio", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "path", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "genericToken", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], CropImageUploadComponent.prototype, "schema", void 0);
        __decorate([
            core.Output()
        ], CropImageUploadComponent.prototype, "OnSaveFile", void 0);
        CropImageUploadComponent = __decorate([
            core.Component({
                selector: 'sml-crop-image-upload',
                template: "\n    <div class=\"homewrap\">\n        <div class=\"imgd_area d_flex\" *ngIf=\"isUploadArea\" [ngClass]=\"{'b-2': imagePath == '' ,'b-r': type == 'circle'}\" [ngStyle]=\"{'height.px': height,'width.px': width}\">\n            <div class=\"d_flex w-100 position-relative flex-column justify-content-center align-items-center\">\n                <div *ngIf=\"imagePath != '' && !isUploadStart\">\n                    <img [src]=\"imagePath\" name=\"profile_images\" id=\"profile_images\" />\n                </div>\n                <div *ngIf=\"imagePath == '' && !isUploadStart\">\n                    <img src=\"assets/cloud-upload-arrow.svg\">\n                    <span class=\"text-black-50 fz11 mb-1\">Drag & Drop</span>\n                </div>\n                <div class=\"percentage-div\" *ngIf=\"isUploadStart\">\n                    {{percentDone}}%\n                </div>\n                <input type=\"file\" class=\"file_input\" id=\"upload\" (change)=\"fileChangeEvent($event)\" accept=\"image/*\">\n            </div>\n        </div>\n        <div *ngIf=\"isHtmlbind\" class=\"w-100 text-center\">\n            <img id=\"htmlbinds\" [ngClass]=\"{'b-r': type == 'circle'}\" [src]=\"croppedImage\" [width]=\"width\" [height]=\"height\">\n        </div>\n        <div class=\"text-center mt-2\" *ngIf=\"isHtmlbind\">\n            <a (click)=\"upload()\" class=\"mr-4 btn_link\">Upload</a>\n            <a (click)=\"cancleClick()\" class=\"btn_link\">Cancel</a>\n        </div>\n    </div>\n<button type=\"button\" style=\"opacity: 0;\" id=\"openModalBtn\" data-toggle=\"modal\" data-target=\"#cropModal\">Open</button>\n<div id=\"cropModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title mt-0\">Crop Image</h4>\n                <div style=\"position: absolute;right: 128px;top: 11px;\">\n                    <img [src]=\"croppedImage\" [ngClass]=\"{'b-r': type == 'circle'}\" [width]=\"capWidth\" [height]=\"capHeight\" [style.border]=\"croppedImage ? '1px solid black' : 'none'\" />\n                </div>\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"zoomIn()\">\n                        <span class=\"fa fa-search-plus\"></span>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"zoomOut()\">\n                        <span class=\"fa fa-search-minus\"></span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"modal-body\" style=\"position: relative;flex: 1 1 auto;padding: 1rem;\" >\n                <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [transform]=\"transform\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"aspectRatio\"\n                    [cropperMinWidth]=\"width\" [resizeToWidth]=\"width\" format=\"png,jpeg\" [roundCropper]=\"type == 'circle'? true:false\"\n                    (imageCropped)=\"imageCropped($event)\">\n                </image-cropper>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"isHtmlbind = true;\" data-dismiss=\"modal\">Apply</button>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancleClick()\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n  ",
                styles: ["\n  .homewrap {height: auto;width: 100%}\n  .imgd_area {height: 150px;width: 150px;overflow: hidden;margin: 0 auto;}\n  .percentage-div{font-size: 25px;font-weight: 700;color: #00ACAC;}\n  .b-2{border: 2px dashed #ccc;}\n  .b-r{border-radius: 100%;}\n  .text-black-50 {color: #a6a9ab;}\n  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .fz11 {font-size: 11px;}\n  .d_flex {display: flex;}\n  .htmlbinds:nth-child(2) {display: none;}\n  .htmlbinds {height: 100%;width: 100%;object-fit: cover;}\n  .flex-column {-webkit-box-orient: vertical!important;-webkit-box-direction: normal!important;-ms-flex-direction: column!important;flex-direction: column!important;}\n  .position-relative {position: relative!important;}\n  .w-100 {width: 100%;}\n  .justify-content-center {-webkit-box-pack: center!important;-ms-flex-pack: center!important;justify-content: center!important;}\n  .btn_link{font-size: 18px;font-weight: 600;cursor: pointer;}\n  "]
            })
        ], CropImageUploadComponent);
        return CropImageUploadComponent;
    }());

    var CropImageUploadModule = /** @class */ (function () {
        function CropImageUploadModule() {
        }
        CropImageUploadModule = __decorate([
            core.NgModule({
                declarations: [CropImageUploadComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    ngxImageCropper.ImageCropperModule
                ],
                exports: [CropImageUploadComponent]
            })
        ], CropImageUploadModule);
        return CropImageUploadModule;
    }());

    var TilesRadioComponent = /** @class */ (function () {
        function TilesRadioComponent() {
            this.id = 'sml-tiles-radio';
            this.name = 'sml-tiles-radio-name';
            this.jsonData = [];
            this.width = "24%";
            this.img_height = "100px";
            this.background = "#00171F";
            this.selectedValue = '2';
            this.radioChange = new core.EventEmitter();
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
        TilesRadioComponent.prototype.ngOnInit = function () { };
        TilesRadioComponent.prototype.changeEvent = function () {
            this.radioChange.emit(this.selectedValue);
        };
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "id", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "name", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "jsonData", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "width", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "img_height", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "background", void 0);
        __decorate([
            core.Input()
        ], TilesRadioComponent.prototype, "selectedValue", void 0);
        __decorate([
            core.Output()
        ], TilesRadioComponent.prototype, "radioChange", void 0);
        TilesRadioComponent = __decorate([
            core.Component({
                selector: 'sml-tiles-radio',
                template: "\n  <div class=\"form\" *ngIf=\"jsonData.length > 0\" [style.background-color]=\"background\">\n  <p class=\"form__answer\" [style.width]=\"width\" *ngFor=\"let rad of jsonData;let i=index;\">\n    <input type=\"radio\" id=\"{{id}}-{{i}}\" name=\"{{name}}\" [value]=\"rad.value\" [(ngModel)]=\"selectedValue\" (change)=\"changeEvent()\">\n    <label for=\"{{id}}-{{i}}\">\n      <img [src]=\"rad.url\" style=\"width:100%\" [style.height]=\"img_height\" id=\"img-{{id}}-{{i}}\" name=\"img-{{name}}\" /> {{rad.name}}\n    </label>\n  </p>\n  </div>",
                styles: ["\n  .form {width: 100%;margin: auto;background: #00171F;padding: 5px 0px 0px 5px;color: #FAFAFA;}\n  .form__answer {display: inline-block;box-sizing: border-box;width: 24%;margin: 0px 1% 1% 0px;height: auto;vertical-align: top;font-size: 22px;text-align: center;}\n  label {border: 1px solid rgba(250, 250, 250, 0.15);box-sizing: border-box;display: block;height: 100%;width: 100%;padding: 10px 10px 30px 10px;cursor: pointer;opacity: .5;transition: all .5s ease-in-out;margin-bottom: 0px;}\n  label:hover, label:focus, label:active {border: 1px solid rgba(250, 250, 250, 0.5);}\n  input[type=\"radio\"] {opacity: 0;width: 0;height: 0;position: absolute;}\n  input[type=\"radio\"]:active ~ label {opacity: 1;}\n  input[type=\"radio\"]:checked ~ label {opacity: 1;border: 1px solid #FAFAFA;}\n  "]
            })
        ], TilesRadioComponent);
        return TilesRadioComponent;
    }());

    var TilesRadioModule = /** @class */ (function () {
        function TilesRadioModule() {
        }
        TilesRadioModule = __decorate([
            core.NgModule({
                declarations: [TilesRadioComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [TilesRadioComponent]
            })
        ], TilesRadioModule);
        return TilesRadioModule;
    }());

    var CreditCardComponent = /** @class */ (function () {
        function CreditCardComponent() {
            this.onSubmit = new core.EventEmitter();
        }
        CreditCardComponent.prototype.ngOnInit = function () { };
        CreditCardComponent.prototype.processPayment = function (event) { this.onSubmit.emit(event); };
        __decorate([
            core.Output()
        ], CreditCardComponent.prototype, "onSubmit", void 0);
        CreditCardComponent = __decorate([
            core.Component({
                selector: 'sml-credit-card',
                template: "\n  <div class=\"w-100\">\n    <ng-payment-card (formSaved)=\"processPayment($event)\"></ng-payment-card>\n  </div>\n  ",
                styles: ["\n  :host /deep/ ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}\n  .w-100{width: 100%;}\n  "]
            })
        ], CreditCardComponent);
        return CreditCardComponent;
    }());

    var CreditCardModule = /** @class */ (function () {
        function CreditCardModule() {
        }
        CreditCardModule = __decorate([
            core.NgModule({
                declarations: [CreditCardComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    ngPaymentCard.NgPaymentCardModule,
                    http.HttpClientModule
                ],
                exports: [CreditCardComponent]
            })
        ], CreditCardModule);
        return CreditCardModule;
    }());

    var CreditCardNewComponent = /** @class */ (function () {
        function CreditCardNewComponent(elementRef) {
            this.elementRef = elementRef;
            this.cardObject = { cardNumber: "", cardHolder: "", expiryDate: "", cvc: "" };
            this.submitValue = new core.EventEmitter;
        }
        CreditCardNewComponent.prototype.ngOnInit = function () {
        };
        CreditCardNewComponent.prototype.ngAfterViewInit = function () {
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
        };
        CreditCardNewComponent.prototype.ngOnChanges = function (event) {
            if (event.labelStyle != undefined && event.labelStyle.currentValue != undefined) {
                var css = event.labelStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
                this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
                this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
                this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
            }
            if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
                var css = event.valueStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
                this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            }
            if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
                var css = event.buttonStyle.currentValue;
                this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
                this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
                this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
                this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
                this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
            }
        };
        CreditCardNewComponent.prototype.submitClick = function () {
            this.submitValue.emit(this.cardObject);
        };
        CreditCardNewComponent.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        __decorate([
            core.Input()
        ], CreditCardNewComponent.prototype, "labelStyle", void 0);
        __decorate([
            core.Input()
        ], CreditCardNewComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], CreditCardNewComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], CreditCardNewComponent.prototype, "buttonStyle", void 0);
        __decorate([
            core.Input()
        ], CreditCardNewComponent.prototype, "cardObject", void 0);
        __decorate([
            core.Output()
        ], CreditCardNewComponent.prototype, "submitValue", void 0);
        CreditCardNewComponent = __decorate([
            core.Component({
                selector: 'sml-credit-card-new',
                template: "\n  <div class=\"mainCardBack\">\n  <div  class=\"card-wrapper\"></div>\n  <div class=\"formCardMain\">\n    <form id=\"newcreditcard\">\n      <div class=\"main-row\">\n        <div class=\"w-50s\">\n          <div class=\"position-relative\">\n            <div class=\"input-field float-group float-group-static\" [ngStyle]=\"borderStyle\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardObject.cardNumber\" id=\"number\"  name=\"number\" [ngStyle]=\"valueStyle\"\n                required>\n              <label for=\"number\" class=\"label\" [ngStyle]=\"labelStyle\">\n                Card Number\n              </label>\n            </div>\n          </div>\n        </div>\n        </div>\n        <div class=\"main-row mt-1\">\n        <div class=\"w-50s\">\n          <div class=\"position-relative\">\n            <div class=\"input-field float-group float-group-static\" [ngStyle]=\"borderStyle\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardObject.cardHolder\" id=\"name\"  name=\"name\" [ngStyle]=\"valueStyle\"\n                required>\n              <label for=\"first-name\" class=\"label\" [ngStyle]=\"labelStyle\">\n                Card Holder\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"main-row mt-1\">\n        <div class=\"w-25s\">\n          <div class=\"position-relative\">\n            <div class=\"input-field float-group float-group-static\" [ngStyle]=\"borderStyle\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardObject.expiryDate\" id=\"expiry\"  name=\"expiry\" [ngStyle]=\"valueStyle\" required>\n              <label for=\"expiry\" class=\"label\" [ngStyle]=\"labelStyle\">\n                Expiry Date\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-25s\">\n          <div class=\"position-relative\">\n            <div class=\"input-field float-group float-group-static\" [ngStyle]=\"borderStyle\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"cardObject.cvc\" id=\"cvc\"  name=\"cvc\" [ngStyle]=\"valueStyle\" required>\n              <label for=\"cvc\" class=\"label\" [ngStyle]=\"labelStyle\">\n                CVC\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"w-50sb\">\n          <button class=\"btn btn-primary\" [ngStyle]=\"buttonStyle\" (click)=\"submitClick()\" name=\"cardsubmit\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n  </div>\n  ",
                styles: ["\n  :host{--c-width:100%;--c-height:25px;--label-left:7px;--label-top:2px;--value-left:8px;--value-top:0px;}\n  .btn:focus{outline:0;box-shadow:var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color);}\n  .position-relative{position:relative;}\n  .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n  .form-control{display:block;padding-top:0.375rem;padding-right:0.75rem;padding-bottom:0.375rem;padding-left:var(--value-left);font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}\n  .form-control{background-color:inherit;}\n  .label{position:absolute;top:-24px;left:0px;font-size:12px;}\n  .float-group{position:relative;padding:14px 24px 2px 0px;}\n  .float-group .form-control{padding-top:var(--value-top);padding-right:0px;padding-bottom:0px;padding-left:var(--value-left);}\n  .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n  .float-group .form-control:focus{outline:none !important;box-shadow:none;}\n  .mainCardBack{background:#ECEBEC;width: 300px;}\n  .formCardMain{margin:auto;width:90%;padding-bottom:15px;}\n  .main-row{width:100%;}\n  .w-50s{width:100%;display:inline-block;padding-left:5px;padding-right:5px;}\n  .w-50sb{width:100%;display:inline-block;padding-left:5px;padding-right:5px;position:relative;top:5px;text-align:right;}\n  .w-25s{width:50%;display:inline-block;padding-left:5px;padding-right:5px;}\n  :host /deep/ .card-wrapper .jp-card-container{margin-left: -6px !important;}\n  "]
            })
        ], CreditCardNewComponent);
        return CreditCardNewComponent;
    }());

    var CreditCardNewModule = /** @class */ (function () {
        function CreditCardNewModule() {
        }
        CreditCardNewModule = __decorate([
            core.NgModule({
                declarations: [CreditCardNewComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ],
                exports: [CreditCardNewComponent]
            })
        ], CreditCardNewModule);
        return CreditCardNewModule;
    }());

    var VideoUploadComponent = /** @class */ (function () {
        function VideoUploadComponent(http$1) {
            this.http = http$1;
            this.url = 'http://assist.aaadev.info/api/';
            this.path = 'http://assist.aaadev.info/media/';
            this.database = 'ASSIST';
            this.schema = "core";
            this.fileResponse = new core.EventEmitter;
            this.deletefileResponse = new core.EventEmitter;
            this.fileId = '0';
            this.fileGroupId = '0';
            this.GenericToken = "12fc01a7eea74138b9e7a35c90dadf7412fc01a7eea74138b9e7a35c90dadf74";
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        VideoUploadComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.fileGroupId != '0' && this.fileGroupId != 0) {
                var body = {
                    FilesGroupId: this.fileGroupId,
                    ImageVideo: 'VIDEO'
                };
                var url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(function (files) {
                    if (files != undefined && files != null && files != '') {
                        _this.videoLink = _this.path + files[0].FileUrl;
                        var arr = files[0].FileUrl.split(".");
                        _this.thumbUrl = _this.path + arr[0] + '.jpg';
                        _this.fileId = files[0].FilesId;
                        console.log(_this.fileId);
                    }
                });
            }
        };
        VideoUploadComponent.prototype.uploadAndProgress = function (files) {
            var _this = this;
            for (var i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', this.fileId);
                formData.append('filegroupid', this.fileGroupId);
                formData.append('mediaType', 'video');
                formData.append('description', files[i].name);
                this.http.post(this.url + 'VideoUploader/UploadNew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(function (event) {
                    if (event.type === http.HttpEventType.UploadProgress) {
                        _this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof http.HttpResponse) {
                        _this.uploadSuccess = true;
                        setTimeout(function () {
                            _this.uploadSuccess = false;
                            _this.percentDone = 0;
                            _this.fileResponse.emit(event.body);
                            _this.videoLink = _this.path + event.body['FileUrl'];
                            var arr = event.body['FileUrl'].split(".");
                            _this.thumbUrl = _this.path + arr[0] + '.jpg';
                        }, 3000);
                    }
                });
            }
        };
        VideoUploadComponent.prototype.deleteFIles = function (fileId) {
            var _this = this;
            this.http.delete(this.url + "Models/files/" + fileId + "?api_key=" + this.GenericToken).subscribe(function (res) {
                if (res) {
                    _this.thumbUrl = '';
                    _this.videoLink = '';
                    _this.deletefileResponse.emit(res);
                }
            });
        };
        VideoUploadComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "url", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "path", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "database", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "schema", void 0);
        __decorate([
            core.Output()
        ], VideoUploadComponent.prototype, "fileResponse", void 0);
        __decorate([
            core.Output()
        ], VideoUploadComponent.prototype, "deletefileResponse", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "fileId", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "fileGroupId", void 0);
        __decorate([
            core.Input()
        ], VideoUploadComponent.prototype, "GenericToken", void 0);
        VideoUploadComponent = __decorate([
            core.Component({
                selector: 'sml-video-upload',
                template: "\n  <div class=\"upload-area\">\n  <span class=\"uploadvideo\" *ngIf=\"!percentDone && !thumbUrl\">Upload Video </span>\n  <img *ngIf=\"!percentDone && !thumbUrl\" src=\"assets/video_upload.png\" class=\"img-video-icon\" />\n  <a *ngIf=\"thumbUrl\" target=\"_blank\" [href]=\"videoLink\"> <img  [src]=\"thumbUrl\" width=\"248\" height=\"150\"/> </a>\n  <input type=\"file\" *ngIf=\"!thumbUrl\" multiple class=\"file_input\" id=\"upload\" (change)=\"uploadAndProgress($event.target.files)\" accept=\"video/*\">\n  <div class=\"progress-div\" *ngIf=\"percentDone\">\n    <div class=\"fz14\" *ngIf=\"uploadSuccess\">\n      <span>Uplaod Done</span>\n    </div>\n    <div class=\"fz14\">\n      <span>{{percentDone}}%</span>\n    </div>\n    <div class=\"progressContainer\">\n      <div class=\"procesbar\"></div>\n      <div class=\"w-100 z9\">\n        <div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n      </div>\n    </div>\n    </div>\n    <span class=\"remove_icon\" *ngIf=\"thumbUrl\">\n      <i class=\"fa fa-times\" (click)=\"deleteFIles(fileId)\"></i>\n    </span>\n  </div>\n  ",
                styles: ["\n  .upload-area{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}\n  .img-video-icon{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}\n  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .progressContainer {width: 100%;padding-left: 5px;padding-right: 5px;}\n  .progressbar {height: 9px;background: green;float: left;border-radius: 4px;}\n  .fz14 {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}\n  .progress-div{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}\n  .remove_icon{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}\n  .uploadvideo{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}\n  "]
            })
        ], VideoUploadComponent);
        return VideoUploadComponent;
    }());

    var VideoUploadModule = /** @class */ (function () {
        function VideoUploadModule() {
        }
        VideoUploadModule = __decorate([
            core.NgModule({
                declarations: [VideoUploadComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule
                ],
                exports: [VideoUploadComponent]
            })
        ], VideoUploadModule);
        return VideoUploadModule;
    }());

    var ContactUsComponent = /** @class */ (function () {
        function ContactUsComponent(http$1) {
            this.http = http$1;
            this.itemObject = {
                id: 5,
                emailTo: "",
                myObject: {}
            };
            this.GenericToken = "";
            this.apiURL = 'http://assist.aaadev.info/api/';
            this.responseCall = new core.EventEmitter;
            this.httpOptionJSON = {
                headers: new http.HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };
        }
        ContactUsComponent.prototype.ngOnInit = function () {
            this.getToken();
        };
        ContactUsComponent.prototype.getToken = function () {
            var _this = this;
            if (this.GenericToken == "") {
                this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(function (res) {
                    _this.GenericToken = res["GenericToken"];
                });
            }
        };
        ContactUsComponent.prototype.sendMail = function () {
            var _this = this;
            var url = this.apiURL + "Email/SendTemplateWIthSMTP/" + this.itemObject.id + "?emailTo=" + this.itemObject.emailTo;
            var body = this.itemObject.myObject;
            this.http.post(url, body).subscribe(function (res) {
                _this.responseCall.emit(res);
            }, function (error) {
                alert(error);
            });
        };
        ContactUsComponent.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "labelStyle", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "borderStyle", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "valueStyle", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "buttonStyle", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "itemObject", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "GenericToken", void 0);
        __decorate([
            core.Input()
        ], ContactUsComponent.prototype, "apiURL", void 0);
        __decorate([
            core.Output()
        ], ContactUsComponent.prototype, "responseCall", void 0);
        ContactUsComponent = __decorate([
            core.Component({
                selector: 'sml-contact-us',
                template: "\n  <div class=\"main-row\">\n  <sml-input-text [label]=\"'Email To'\" [name]=\"'emailTo'\" [value]=\"itemObject.emailTo\" (getvalue)=\"itemObject.emailTo = $event;\" [maskType]=\"''\"\n    [switchStyle]=\"'true'\" [style]=\"labelStyle\" [staticStyle]=\"'true'\" [borderStyle]=\"borderStyle\" [valueStyle]=\"valueStyle\">\n  </sml-input-text>\n  </div>\n  <div class=\"main-row\" style=\"text-align: center;\">\n    <sml-button [label]=\"'Send Email'\" [btnCl]=\"'btn-primary'\" (buttonClick)=\"sendMail()\" [buttonStyle]=\"buttonStyle\">\n    </sml-button>\n  </div>\n  ",
                styles: [".main-row{width: 100%;margin-bottom: 7px;"]
            })
        ], ContactUsComponent);
        return ContactUsComponent;
    }());

    var ContactUsModule = /** @class */ (function () {
        function ContactUsModule() {
        }
        ContactUsModule = __decorate([
            core.NgModule({
                declarations: [ContactUsComponent],
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    smlInputsNine.TextModule,
                    ButtonModule
                ],
                exports: [ContactUsComponent]
            })
        ], ContactUsModule);
        return ContactUsModule;
    }());

    exports.AddressComponent = AddressComponent;
    exports.AddressModule = AddressModule;
    exports.AlertComponent = AlertComponent;
    exports.AlertModule = AlertModule;
    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbModule = BreadcrumbModule;
    exports.ButtonComponent = ButtonComponent;
    exports.ButtonGroupModule = ButtonGroupModule;
    exports.ButtonModule = ButtonModule;
    exports.ButtongroupComponent = ButtongroupComponent;
    exports.ContactUsComponent = ContactUsComponent;
    exports.ContactUsModule = ContactUsModule;
    exports.CreditCardComponent = CreditCardComponent;
    exports.CreditCardModule = CreditCardModule;
    exports.CreditCardNewComponent = CreditCardNewComponent;
    exports.CreditCardNewModule = CreditCardNewModule;
    exports.CropImageUploadComponent = CropImageUploadComponent;
    exports.CropImageUploadModule = CropImageUploadModule;
    exports.ImageUplaodBoxModule = ImageUplaodBoxModule;
    exports.ImageUploadBoxComponent = ImageUploadBoxComponent;
    exports.ImagecropComponent = ImagecropComponent;
    exports.ImagecropModule = ImagecropModule;
    exports.ImagesLightBoxComponent = ImagesLightBoxComponent;
    exports.ImagesLightBoxModule = ImagesLightBoxModule;
    exports.InputTagComponent = InputTagComponent;
    exports.InputTagModule = InputTagModule;
    exports.ListSearchComponent = ListSearchComponent;
    exports.ListSearchModule = ListSearchModule;
    exports.MultiSelectComponent = MultiSelectComponent;
    exports.MultiSelectModule = MultiSelectModule;
    exports.MultifileuploadComponent = MultifileuploadComponent;
    exports.MultifileuploadModule = MultifileuploadModule;
    exports.NavbarComponent = NavbarComponent;
    exports.NavbarModule = NavbarModule;
    exports.NotesComponent = NotesComponent;
    exports.NotesModule = NotesModule;
    exports.ProgressBarModule = ProgressBarModule;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.RadioCheckBoxListComponent = RadioCheckBoxListComponent;
    exports.RadioCheckBoxListModule = RadioCheckBoxListModule;
    exports.SinglefileuploadComponent = SinglefileuploadComponent;
    exports.SinglefileuploadModule = SinglefileuploadModule;
    exports.TableComponent = TableComponent;
    exports.TableModule = TableModule;
    exports.TilesRadioComponent = TilesRadioComponent;
    exports.TilesRadioModule = TilesRadioModule;
    exports.VideoUploadComponent = VideoUploadComponent;
    exports.VideoUploadModule = VideoUploadModule;
    exports.ɵa = ColumnComponent;
    exports.ɵb = HeaderComponent;
    exports.ɵc = FooterComponent;
    exports.ɵd = PaginationComponent;
    exports.ɵe = TableBodyComponent;
    exports.ɵf = SearchComponent;
    exports.ɵg = CountComponent;
    exports.ɵh = SubmenuComponent;
    exports.ɵi = MenuComponent;
    exports.ɵj = ProfileMenuComponent;
    exports.ɵk = ProfileSubMenuComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sml-comp-nine.umd.js.map
