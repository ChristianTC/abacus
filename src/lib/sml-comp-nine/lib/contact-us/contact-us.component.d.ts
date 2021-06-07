import { OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ContactUsComponent implements OnInit {
    private http;
    labelStyle: any;
    borderStyle: any;
    valueStyle: any;
    buttonStyle: any;
    itemObject: any;
    GenericToken: any;
    apiURL: any;
    responseCall: EventEmitter<any>;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient);
    ngOnInit(): void;
    getToken(): void;
    sendMail(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContactUsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ContactUsComponent, "sml-contact-us", never, { "itemObject": "itemObject"; "GenericToken": "GenericToken"; "apiURL": "apiURL"; "labelStyle": "labelStyle"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "buttonStyle": "buttonStyle"; }, { "responseCall": "responseCall"; }, never, never>;
}

//# sourceMappingURL=contact-us.component.d.ts.map