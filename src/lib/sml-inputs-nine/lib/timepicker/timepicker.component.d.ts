import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DatetimepickerComponent implements OnInit {
    private elementRef;
    time: any;
    name: any;
    width: any;
    label: string;
    switchStyle: boolean;
    style: any;
    borderStyle: any;
    valueStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    getvalue: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(event: any): void;
    selectChanged(event: any): void;
    onBlurMethod(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatetimepickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatetimepickerComponent, "sml-input-timepicker", never, { "name": "name"; "staticStyle": "staticStyle"; "time": "time"; "width": "width"; "label": "label"; "switchStyle": "switchStyle"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "signalStyle": "signalStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=timepicker.component.d.ts.map