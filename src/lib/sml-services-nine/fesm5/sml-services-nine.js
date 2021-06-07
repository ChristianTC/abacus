import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';

var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.url = '';
        this.accessToken = '';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
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
        return Observable.throw(error || 'SERVER ERROR');
    };
    //############AUTHENTICAT_NET#################
    ApiService.prototype.subscribeCustomer = function (body) {
        var url = "https://apitest.authorize.net/xml/v1/request.api";
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(url, body, { headers: this.headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    //############AUTHENTICATTNG#################
    ApiService.prototype.createUser_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/user/create";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.submitUserConsent_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/user/consent";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.uploadId_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/identity/document/scan";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.verifyUploadId_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/identity/document/scan/status";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.getQuiz_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/identity/kba";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.verifyQuiz_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/identity/kba-verification";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.sevenYearCriminalHistory_authenticating = function (body) {
        var url = "https://api-v3.authenticating.com/identity/request/criminal/report/seven";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    //############PANDA_DOC#################
    ApiService.prototype.listDocument = function () {
        var url = "https://api.pandadoc.com/public/v1/documents";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.listComplateDocument = function () {
        var url = "https://api.pandadoc.com/public/v1/documents?status=2";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.listDeleteDocument = function () {
        var url = "https://api.pandadoc.com/public/v1/documents?deleted=true";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.createDocumentFromPandaDocTemplate = function (body) {
        var url = "https://api.pandadoc.com/public/v1/documents";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.createDocumentFromPDFFormFields = function (body) {
        var url = "https://api.pandadoc.com/public/v1/documents";
        var headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.createDocumentFromPDFFieldTags = function (body) {
        var url = "https://api.pandadoc.com/public/v1/documents";
        var headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.documentStatus = function (document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.documentDetails = function (document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/details";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.sendDocument = function (body, document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/send";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.shareDocument = function (body, document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/session";
        var headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.downloadDocument = function (document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/download";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.deleteDocument = function (document_id) {
        var url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.delete(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.listTemplates = function () {
        var url = "https://api.pandadoc.com/public/v1/templates";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.templateDetails = function (template_id) {
        var url = "https://api.pandadoc.com/public/v1/templates/" + template_id + "/details";
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.prototype.deleteTemplate = function (template_id) {
        var url = "https://api.pandadoc.com/public/v1/templates/" + template_id;
        var headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.delete(url, { headers: headers }).map(function (response) { return response.json(); }).catch(this.errorHandler);
    };
    ApiService.ctorParameters = function () { return [
        { type: Http }
    ]; };
    ApiService.ɵprov = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(Http)); }, token: ApiService, providedIn: "root" });
    ApiService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());

/*
 * Public API Surface of sml-services-nine
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService };
//# sourceMappingURL=sml-services-nine.js.map
