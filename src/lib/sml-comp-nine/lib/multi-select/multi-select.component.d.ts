import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class MultiSelectComponent implements OnInit {
    private http;
    private elementRef;
    dropdownList: any;
    selectedItems: any;
    label: any;
    searchString: any;
    getvalue: EventEmitter<any>;
    GenericToken: any;
    database: any;
    schema: any;
    procedure: any;
    body: any;
    fieldName: any;
    fieldId: any;
    apiURL: any;
    style: any;
    borderStyle: any;
    valueStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    switchStyle: boolean;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(http: HttpClient, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getToken(): void;
    getDrpData(): void;
    onItemSelect(item: any): void;
    OnItemDeSelect(item: any): void;
    onSelectAll(items: any): void;
    onDeSelectAll(items: any): void;
    isOpen: any;
    onOpen(): void;
    onClose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiSelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MultiSelectComponent, "sml-multi-select", never, { "dropdownList": "dropdownList"; "selectedItems": "selectedItems"; "label": "label"; "searchString": "searchString"; "GenericToken": "GenericToken"; "database": "database"; "schema": "schema"; "procedure": "procedure"; "body": "body"; "fieldName": "fieldName"; "fieldId": "fieldId"; "apiURL": "apiURL"; "signalStyle": "signalStyle"; "staticStyle": "staticStyle"; "switchStyle": "switchStyle"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=multi-select.component.d.ts.map