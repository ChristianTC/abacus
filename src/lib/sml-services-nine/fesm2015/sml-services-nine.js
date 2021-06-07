import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, ɵɵinject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';

let ApiService = class ApiService {
    constructor(_http) {
        this._http = _http;
        this.url = '';
        this.accessToken = '';
        this.headers = new Headers({ 'Content-Type': 'application/json' });
    }
    set() {
        let system = JSON.parse(localStorage.getItem('Session.System'));
        let environment = JSON.parse(localStorage.getItem('Session.Environment'));
        this.url = environment.TEMPLATE_API_URL;
        if (system != null && system != undefined && system != '') {
            this.accessToken = system.GenericToken;
        }
    }
    Save(modelName, body = {}) {
        this.set();
        let urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '?api_key=' + this.accessToken;
        return this._http.post(urlQuery, body, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    Retrieve(modelName, id) {
        this.set();
        let urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '/' + id + '?api_key=' + this.accessToken;
        return this._http.get(urlQuery, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    Delete(modelName, id) {
        this.set();
        let urlQuery = this.url + 'Models/' + modelName.toUpperCase() + '/' + id + '?api_key=' + this.accessToken;
        return this._http.delete(urlQuery, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    Execute(json = { database: '', schema: '', procedure: '', body: {} }) {
        this.set();
        let urlQuery = this.url + 'Data/Exec/' + json.database + '/' + json.schema + '/' + json.procedure + '?api_key=' + this.accessToken;
        return this._http.post(urlQuery, json.body, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    Encrypt(text = "") {
        this.set();
        let urlQuery = this.url + 'Encryption/Encrypt?textToEncrypt=' + text + '&api_key=' + this.accessToken;
        return this._http.get(urlQuery, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    Decrypt(text = "") {
        this.set();
        let urlQuery = this.url + 'Encryption/Decrypt?textToDecrypt=' + text + '&api_key=' + this.accessToken;
        return this._http.get(urlQuery, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    getSystemInfo() {
        this.set();
        var urlQuery = this.url + 'GetSystemInfo?passcode=flipper613';
        return this._http.get(urlQuery, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    preLoad() {
        this.getSystemInfo().subscribe((system) => {
            if (system) {
                localStorage.setItem('Session.System', JSON.stringify(system));
            }
        }, (error) => {
            alert(error);
        });
    }
    authenticate(username, password) {
        this.set();
        let urlQuery = this.url + 'Login?userName=' + username + '&password=' + password + '&api_key=' + this.accessToken;
        return this._http.get(urlQuery, { headers: this.headers }).map((response) => this.getLogin(response.json())).catch(this.errorHandler);
    }
    getLogin(user) {
        let sw = false;
        if (user.IsAuthenticated !== '0') {
            localStorage.setItem('Session.User', JSON.stringify(user));
            this.accessToken = user.AccessToken;
            sw = true;
        }
        return sw;
    }
    errorHandler(error) {
        return Observable.throw(error || 'SERVER ERROR');
    }
    //############AUTHENTICAT_NET#################
    subscribeCustomer(body) {
        let url = "https://apitest.authorize.net/xml/v1/request.api";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.post(url, body, { headers: this.headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    //############AUTHENTICATTNG#################
    createUser_authenticating(body) {
        let url = "https://api-v3.authenticating.com/user/create";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    submitUserConsent_authenticating(body) {
        let url = "https://api-v3.authenticating.com/user/consent";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    uploadId_authenticating(body) {
        let url = "https://api-v3.authenticating.com/identity/document/scan";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    verifyUploadId_authenticating(body) {
        let url = "https://api-v3.authenticating.com/identity/document/scan/status";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    getQuiz_authenticating(body) {
        let url = "https://api-v3.authenticating.com/identity/kba";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    verifyQuiz_authenticating(body) {
        let url = "https://api-v3.authenticating.com/identity/kba-verification";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    sevenYearCriminalHistory_authenticating(body) {
        let url = "https://api-v3.authenticating.com/identity/request/criminal/report/seven";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer K5GH2OL2HMXHIQBOO4YC63RJORLEQTTWMZBGW5LPG5NDWKSW' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    //############PANDA_DOC#################
    listDocument() {
        let url = "https://api.pandadoc.com/public/v1/documents";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    listComplateDocument() {
        let url = "https://api.pandadoc.com/public/v1/documents?status=2";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    listDeleteDocument() {
        let url = "https://api.pandadoc.com/public/v1/documents?deleted=true";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    createDocumentFromPandaDocTemplate(body) {
        let url = "https://api.pandadoc.com/public/v1/documents";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    createDocumentFromPDFFormFields(body) {
        let url = "https://api.pandadoc.com/public/v1/documents";
        let headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    createDocumentFromPDFFieldTags(body) {
        let url = "https://api.pandadoc.com/public/v1/documents";
        let headers = new Headers({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    documentStatus(document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    documentDetails(document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/details";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    sendDocument(body, document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/send";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    shareDocument(body, document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/session";
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.post(url, body, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    downloadDocument(document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id + "/download";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    deleteDocument(document_id) {
        let url = "https://api.pandadoc.com/public/v1/documents/" + document_id;
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.delete(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    listTemplates() {
        let url = "https://api.pandadoc.com/public/v1/templates";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    templateDetails(template_id) {
        let url = "https://api.pandadoc.com/public/v1/templates/" + template_id + "/details";
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.get(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
    deleteTemplate(template_id) {
        let url = "https://api.pandadoc.com/public/v1/templates/" + template_id;
        let headers = new Headers({ 'Authorization': 'Bearer 7e277466b390c05c86c3b21af4f262cd0248816a' });
        return this._http.delete(url, { headers: headers }).map((response) => response.json()).catch(this.errorHandler);
    }
};
ApiService.ctorParameters = () => [
    { type: Http }
];
ApiService.ɵprov = ɵɵdefineInjectable({ factory: function ApiService_Factory() { return new ApiService(ɵɵinject(Http)); }, token: ApiService, providedIn: "root" });
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);

/*
 * Public API Surface of sml-services-nine
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ApiService };
//# sourceMappingURL=sml-services-nine.js.map
