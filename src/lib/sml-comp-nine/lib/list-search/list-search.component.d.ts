import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class ListSearchComponent implements OnInit {
    private http;
    private elementRef;
    id: any;
    name: any;
    label: any;
    value: any;
    listData: any;
    getvalue: EventEmitter<any>;
    GenericToken: any;
    database: any;
    schema: any;
    procedure: any;
    fieldName: any;
    apiURL: any;
    switchStyle: boolean;
    signalStyle: boolean;
    staticStyle: boolean;
    style: any;
    borderStyle: any;
    valueStyle: any;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    keyword: string;
    constructor(http: HttpClient, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getToken(): void;
    setSelectedData(event: any): void;
    onChangeSearch(search: string): void;
    onFocused(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ListSearchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ListSearchComponent, "sml-list-search", never, { "id": "id"; "name": "name"; "label": "label"; "value": "value"; "listData": "listData"; "GenericToken": "GenericToken"; "database": "database"; "schema": "schema"; "procedure": "procedure"; "fieldName": "fieldName"; "apiURL": "apiURL"; "switchStyle": "switchStyle"; "signalStyle": "signalStyle"; "staticStyle": "staticStyle"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=list-search.component.d.ts.map