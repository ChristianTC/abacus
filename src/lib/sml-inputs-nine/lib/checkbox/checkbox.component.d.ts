import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CheckboxComponent implements OnInit {
    private elementRef;
    value: any;
    name: any;
    label: string;
    labeltext: string;
    style: any;
    switchStyle: any;
    borderStyle: any;
    signalStyle: boolean;
    valueStyle: any;
    checkboxStyle: any;
    getvalue: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getTicFontSize(css: any): string;
    onChange(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckboxComponent, "sml-input-checkbox", never, { "value": "value"; "name": "name"; "label": "label"; "labeltext": "labeltext"; "style": "style"; "switchStyle": "switchStyle"; "borderStyle": "borderStyle"; "signalStyle": "signalStyle"; "valueStyle": "valueStyle"; "checkboxStyle": "checkboxStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=checkbox.component.d.ts.map