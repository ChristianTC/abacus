import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TextareaComponent implements OnInit {
    private elementRef;
    value: any;
    name: any;
    row: any;
    column: any;
    label: string;
    maxLenght: any;
    switchStyle: boolean;
    style: any;
    borderStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    valueStyle: any;
    inputStyle: any;
    readOnly: boolean;
    getvalue: EventEmitter<any>;
    onblur: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getValue(event: any): void;
    onBlur(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TextareaComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TextareaComponent, "sml-input-textarea", never, { "staticStyle": "staticStyle"; "readOnly": "readOnly"; "value": "value"; "name": "name"; "row": "row"; "column": "column"; "label": "label"; "maxLenght": "maxLenght"; "switchStyle": "switchStyle"; "style": "style"; "borderStyle": "borderStyle"; "signalStyle": "signalStyle"; "valueStyle": "valueStyle"; "inputStyle": "inputStyle"; }, { "getvalue": "getvalue"; "onblur": "onblur"; }, never, never>;
}

//# sourceMappingURL=textarea.component.d.ts.map