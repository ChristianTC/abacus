import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TextComponent implements OnInit {
    private elementRef;
    type: any;
    maxlength: any;
    showMask: any;
    value: any;
    name: any;
    maskType: any;
    patterns: any;
    expression: any;
    label: string;
    fixValue: string;
    switchStyle: boolean;
    signalStyle: boolean;
    staticStyle: boolean;
    style: any;
    borderStyle: any;
    valueStyle: any;
    inputStyle: any;
    readOnly: boolean;
    onlyText: boolean;
    noPutCharacter: number;
    getvalue: EventEmitter<any>;
    onblur: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getValue(event: any): void;
    onBlur(event: any): void;
    onEndfocus(event: any): void;
    keyPress(e: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TextComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TextComponent, "sml-input-text", never, { "type": "type"; "maxlength": "maxlength"; "showMask": "showMask"; "value": "value"; "staticStyle": "staticStyle"; "readOnly": "readOnly"; "onlyText": "onlyText"; "noPutCharacter": "noPutCharacter"; "name": "name"; "maskType": "maskType"; "patterns": "patterns"; "expression": "expression"; "label": "label"; "fixValue": "fixValue"; "switchStyle": "switchStyle"; "signalStyle": "signalStyle"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "inputStyle": "inputStyle"; }, { "getvalue": "getvalue"; "onblur": "onblur"; }, never, never>;
}

//# sourceMappingURL=text.component.d.ts.map