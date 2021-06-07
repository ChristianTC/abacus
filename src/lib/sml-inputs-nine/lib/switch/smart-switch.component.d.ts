import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SwitchComponent implements OnInit {
    private elementRef;
    labelText: any;
    label: string;
    isChecked: boolean;
    switchStyles: any;
    switchStyle: any;
    valueStyle: any;
    labelStyle: any;
    borderStyle: any;
    signalStyle: boolean;
    isBorderStyle: any;
    toggleStyle: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    getTransformx(css: any): string;
    getBallSize(css: any): string;
    onChange(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SwitchComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SwitchComponent, "sml-input-switch", never, { "isChecked": "isChecked"; "isBorderStyle": "isBorderStyle"; "labelText": "labelText"; "label": "label"; "switchStyles": "switchStyles"; "switchStyle": "switchStyle"; "valueStyle": "valueStyle"; "labelStyle": "labelStyle"; "borderStyle": "borderStyle"; "signalStyle": "signalStyle"; }, { "toggleStyle": "toggleStyle"; }, never, never>;
}

//# sourceMappingURL=smart-switch.component.d.ts.map