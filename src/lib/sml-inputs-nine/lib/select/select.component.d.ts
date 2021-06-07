import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SelectComponent implements OnInit {
    private elementRef;
    id: any;
    label: any;
    disabled: boolean;
    clearable: boolean;
    listValue: any;
    value: any;
    style: any;
    borderStyle: any;
    valueStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    switchStyle: boolean;
    swGroupBy: boolean;
    multiple: boolean;
    selectvalue: EventEmitter<any>;
    isOpen: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getselectvalue(event: any): void;
    onOpen(): void;
    onClose(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SelectComponent, "sml-input-select", never, { "id": "id"; "label": "label"; "disabled": "disabled"; "clearable": "clearable"; "listValue": "listValue"; "value": "value"; "signalStyle": "signalStyle"; "staticStyle": "staticStyle"; "switchStyle": "switchStyle"; "swGroupBy": "swGroupBy"; "multiple": "multiple"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "selectvalue": "selectvalue"; }, never, never>;
}

//# sourceMappingURL=select.component.d.ts.map