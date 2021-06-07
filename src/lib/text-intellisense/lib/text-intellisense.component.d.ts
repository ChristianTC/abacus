import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class TextIntellisenseComponent implements OnInit {
    private elementRef;
    private http;
    Id: string;
    Name: string;
    LabelName: string;
    TabIndex: number;
    Type: string;
    Maxlength: number;
    Value: string;
    Rows: number;
    TriggerCharacter: string;
    LabelStyle: any;
    BorderStyle: any;
    ValueStyle: any;
    ReadOnly: boolean;
    Disabled: boolean;
    LabelTop: boolean;
    database: any;
    schema: any;
    procedure: any;
    fieldName: any;
    apiURL: any;
    GetValue: EventEmitter<any>;
    BlurValue: EventEmitter<any>;
    randKey: number;
    showList: boolean;
    listData: any;
    GenericToken: any;
    leftCss: string;
    httpOptionJSON: {
        headers: HttpHeaders;
    };
    constructor(elementRef: ElementRef, http: HttpClient);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    GetValueEvent(event: any): void;
    OnBlurEvent(event: any): void;
    getToken(): void;
    getGlobalField(): void;
    findChoices: (searchText: string) => any;
    getChoiceLabel: (choice: string) => string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TextIntellisenseComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TextIntellisenseComponent, "emuna-text-intellisense", never, { "Id": "Id"; "Name": "Name"; "LabelName": "LabelName"; "TabIndex": "TabIndex"; "Type": "Type"; "Maxlength": "Maxlength"; "Value": "Value"; "Rows": "Rows"; "TriggerCharacter": "TriggerCharacter"; "LabelStyle": "LabelStyle"; "BorderStyle": "BorderStyle"; "ValueStyle": "ValueStyle"; "ReadOnly": "ReadOnly"; "Disabled": "Disabled"; "LabelTop": "LabelTop"; "database": "database"; "schema": "schema"; "procedure": "procedure"; "fieldName": "fieldName"; "apiURL": "apiURL"; }, { "GetValue": "GetValue"; "BlurValue": "BlurValue"; }, never, never>;
}

//# sourceMappingURL=text-intellisense.component.d.ts.map