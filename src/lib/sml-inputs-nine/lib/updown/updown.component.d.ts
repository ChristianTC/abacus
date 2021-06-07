import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class UpdownComponent implements OnInit {
    private elementRef;
    initialValue: any;
    switchStyle: any;
    isNagative: any;
    textAlign: any;
    label: string;
    isLabel: any;
    style: any;
    valueStyle: any;
    borderStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    valueChange: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    styleObject(): Object;
    increaseValue(): void;
    decreaseValue(): boolean;
    onBlurMethod(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdownComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdownComponent, "sml-input-updown", never, { "initialValue": "initialValue"; "isNagative": "isNagative"; "textAlign": "textAlign"; "isLabel": "isLabel"; "staticStyle": "staticStyle"; "switchStyle": "switchStyle"; "label": "label"; "style": "style"; "valueStyle": "valueStyle"; "borderStyle": "borderStyle"; "signalStyle": "signalStyle"; }, { "valueChange": "valueChange"; }, never, never>;
}

//# sourceMappingURL=updown.component.d.ts.map