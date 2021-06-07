import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc0 from '@angular/core';
export declare class DatepickerComponent implements OnInit {
    private calendar;
    private elementRef;
    value: any;
    format: any;
    name: any;
    label: string;
    width: any;
    switchStyle: boolean;
    style: any;
    borderStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    fieldStyle: any;
    valueStyle: any;
    isChecked: boolean;
    readOnly: boolean;
    getvalue: EventEmitter<any>;
    date: {
        year: number;
        month: number;
    };
    constructor(calendar: NgbCalendar, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(event: any): void;
    getValue(event: any): void;
    onBlurMethod(): void;
    clk(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DatepickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DatepickerComponent, "sml-input-datepicker", never, { "staticStyle": "staticStyle"; "readOnly": "readOnly"; "width": "width"; "value": "value"; "format": "format"; "name": "name"; "label": "label"; "switchStyle": "switchStyle"; "style": "style"; "borderStyle": "borderStyle"; "signalStyle": "signalStyle"; "fieldStyle": "fieldStyle"; "valueStyle": "valueStyle"; "isChecked": "isChecked"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=datepicker.component.d.ts.map