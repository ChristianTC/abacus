import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DaterangepickerComponent implements OnInit {
    private elementRef;
    value: any;
    fromValue: any;
    format: any;
    name: any;
    label: string;
    width: any;
    switchStyle: boolean;
    style: any;
    signalStyle: boolean;
    staticStyle: boolean;
    borderStyle: any;
    valueStyle: any;
    getvalue: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    emitValue(val: any): void;
    clk(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DaterangepickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DaterangepickerComponent, "sml-input-daterangepicker", never, { "staticStyle": "staticStyle"; "value": "value"; "fromValue": "fromValue"; "width": "width"; "format": "format"; "name": "name"; "label": "label"; "switchStyle": "switchStyle"; "style": "style"; "signalStyle": "signalStyle"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=daterangepicker.component.d.ts.map