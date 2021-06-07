(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/http'), require('rxjs'), require('rxjs/add/operator/map'), require('rxjs/add/operator/catch'), require('rxjs/add/observable/throw'), require('rxjs/add/operator/mergeMap')) :
    typeof define === 'function' && define.amd ? define('sml-services-nine', ['exports', '@angular/core', '@angular/http', 'rxjs', 'rxjs/add/operator/map', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw', 'rxjs/add/operator/mergeMap'], factory) :
    (global = global || self, factory(global['sml-services-nine'] = {}, global.ng.core, global.ng.http, global.rxjs));
}(this, (function (exports, core, http, rxjs) { 'use strict';

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

    var ApiService = /** @class */ (function () {
        function ApiService(_http) {
            this._http = _http;
            this.url = '';
            this.accessToken = '';
            this.headers = new http.Headers({ 'Content-Type': 'application/json' });
        }
        ApiService.prototype.set = function () {
            var system = JSON.parse(localStorage.getItem('Session.System'));
            var environment = JSON.parse(localStorage.getItem('Session.Environment'));
            this.url = environment.TEMPLATE_API_URL;
            if (system != null && system != undefined && system != '') {
                this.accessToken = system.GenericToken;
            }
        };
        ApiService.prototype.Save = function (modelName, body) {
            if (body === void 0) { body = {}; }
            this.set();
            var urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '?api_key=' + this.accessToken;
            return this._http.post(urlQuery, body, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.Retrieve = function (modelName, id) {
            this.set();
            var urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '/' + id + '?api_key=' + this.accessToken;
            return this._http.get(urlQuery, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.Delete = function (modelName, id) {
            this.set();
            var urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '/' + id + '?api_key=' + this.accessToken;
            return this._http.delete(urlQuery, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.Execute = function (json) {
            if (json === void 0) { json = { database: '', schema: '', procedure: '', body: {} }; }
            this.set();
            var urlQuery = this.url + 'Data/Exec/' + json.database + '/' + json.schema + '/' + json.procedure + '?api_key=' + this.accessToken;
            return this._http.post(urlQuery, json.body, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.Encrypt = function (text) {
            if (text === void 0) { text = ""; }
            this.set();
            var urlQuery = this.url + 'Encryption/Encrypt?textToEncrypt=' + text + '&api_key=' + this.accessToken;
            return this._http.get(urlQuery, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.Decrypt = function (text) {
            if (text === void 0) { text = ""; }
            this.set();
            var urlQuery = this.url + 'Encryption/Decrypt?textToDecrypt=' + text + '&api_key=' + this.accessToken;
            return this._http.get(urlQuery, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.getSystemInfo = function () {
            this.set();
            var urlQuery = this.url + 'GetSystemInfo?passcode=flipper613';
            return this._http.get(urlQuery, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.preLoad = function () {
            this.getSystemInfo().subscribe(function (system) {
                if (system) {
                    localStorage.setItem('Session.System', JSON.stringify(system));
                }
            }, function (error) {
                alert(error);
            });
        };
        ApiService.prototype.authenticate = function (username, password) {
            var _this = this;
            this.set();
            var urlQuery = this.url + 'Login?userName=' + username + '&password=' + password + '&api_key=' + this.accessToken;
            return this._http.get(urlQuery, { headers: this.headers }).map(function (response) { return _this.getLogin(response.json()); }).catch(this.errorHandler);
        };
        ApiService.prototype.getLogin = function (user) {
            var sw = false;
            if (user.IsAuthenticated !== '0') {
                localStorage.setItem('Session.User', JSON.stringify(user));
                this.accessToken = user.AccessToken;
                sw = true;
            }
            return sw;
        };
        ApiService.prototype.errorHandler = function (error) {
            return rxjs.Observable.throw(error || 'SERVER ERROR');
        };
        //############AUTHENTICAT_NET#################
        ApiService.prototype.subscribeCustomer = function (body) {
            var url = "https://apitest.authorize.net/xml/v1/request.api";
            var headers = new http.Headers({ 'Content-Type': 'application/json' });
            return this._http.post(url, body, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        //############AUTHENTICATTNG#################
        ApiService.prototype.createUser_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/user/create";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.submitUserConsent_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/user/consent";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.uploadId_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/identity/document/scan";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.verifyUploadId_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/identity/document/scan/status";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.getQuiz_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/identity/kba";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.verifyQuiz_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/identity/kba-verification";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.sevenYearCriminalHistory_authenticating = function (body) {
            var url = "https://api-v3.authenticating.com/identity/request/criminal/report/seven";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        //############PANDA_DOC#################
        ApiService.prototype.listDocument = function () {
            var url = "https://api.pandadoc.com/public/v1/documents";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.listComplateDocument = function () {
            var url = "https://api.pandadoc.com/public/v1/documents?status=2";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.listDeleteDocument = function () {
            var url = "https://api.pandadoc.com/public/v1/documents?deleted=true";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.createDocumentFromPandaDocTemplate = function (body) {
            var url = "https://api.pandadoc.com/public/v1/documents";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.createDocumentFromPDFFormFields = function (body) {
            var url = "https://api.pandadoc.com/public/v1/documents";
            var headers = new http.Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.createDocumentFromPDFFieldTags = function (body) {
            var url = "https://api.pandadoc.com/public/v1/documents";
            var headers = new http.Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.documentStatus = function (document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.documentDetails = function (document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/details";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.sendDocument = function (body, document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/send";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.shareDocument = function (body, document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/session";
            var headers = new http.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.downloadDocument = function (document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/download";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.deleteDocument = function (document_id) {
            var url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.delete(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.listTemplates = function () {
            var url = "https://api.pandadoc.com/public/v1/templates";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.templateDetails = function (template_id) {
            var url = "https://api.pandadoc.com/public/v1/templates/" + template_id + "/details";
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.prototype.deleteTemplate = function (template_id) {
            var url = "https://api.pandadoc.com/public/v1/templates/" + template_id;
            var headers = new http.Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
            return this._http.delete(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
        };
        ApiService.ctorParameters = function () { return [
            { type: http.Http }
        ]; };
        ApiService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function ApiService_Factory() { return new ApiService(core["ɵɵinject"](http.Http)); }, token: ApiService, providedIn: "root" });
        ApiService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], ApiService);
        return ApiService;
    }());

    exports.ApiService = ApiService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sml-services-nine.umd.js.map
