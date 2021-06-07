import { EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ColorPickerComponent {
    private elementRef;
    heading: string;
    color: string;
    isLabel: any;
    switchStyle: any;
    label: string;
    style: any;
    valueStyle: any;
    signalStyle: boolean;
    staticStyle: boolean;
    borderStyle: any;
    event: EventEmitter<string>;
    selectedColor: EventEmitter<any>;
    show: boolean;
    defaultColors: string[];
    constructor(elementRef: ElementRef);
    ngOnChanges(event: any): void;
    styleObject(): Object;
    changeColor(color: string): void;
    changeColorManual(color: string): void;
    toggleColors(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ColorPickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ColorPickerComponent, "sml-input-colorpicker", never, { "color": "color"; "isLabel": "isLabel"; "staticStyle": "staticStyle"; "heading": "heading"; "switchStyle": "switchStyle"; "label": "label"; "style": "style"; "valueStyle": "valueStyle"; "signalStyle": "signalStyle"; "borderStyle": "borderStyle"; }, { "event": "event"; "selectedColor": "selectedColor"; }, never, never>;
}

//# sourceMappingURL=colorpicker.component.d.ts.map