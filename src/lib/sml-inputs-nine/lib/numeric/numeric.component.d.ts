import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class NumericComponent implements OnInit {
    private elementRef;
    jsonData: any;
    name: any;
    value: any;
    options: any;
    label: string;
    readOnly: any;
    style: any;
    borderStyle: any;
    switchStyle: boolean;
    signalStyle: boolean;
    staticStyle: boolean;
    valueStyle: any;
    getvalue: EventEmitter<any>;
    onblur: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    clickEvent(data: any): void;
    getValue(event: any): void;
    onBlur(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NumericComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NumericComponent, "sml-input-numeric", never, { "name": "name"; "value": "value"; "label": "label"; "readOnly": "readOnly"; "switchStyle": "switchStyle"; "signalStyle": "signalStyle"; "staticStyle": "staticStyle"; "jsonData": "jsonData"; "options": "options"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "getvalue": "getvalue"; "onblur": "onblur"; }, never, never>;
}

//# sourceMappingURL=numeric.component.d.ts.map