import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class RadioComponent implements OnInit {
    private elementRef;
    id: any;
    jsonData: any;
    value: any;
    label: any;
    switchStyle: any;
    labelStyle: any;
    borderStyle: any;
    valueStyle: any;
    radioStyle: any;
    signalStyle: boolean;
    radioChangeHandler: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    changeevt1: (event: any) => void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RadioComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<RadioComponent, "sml-input-radio", never, { "id": "id"; "jsonData": "jsonData"; "value": "value"; "label": "label"; "switchStyle": "switchStyle"; "labelStyle": "labelStyle"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "radioStyle": "radioStyle"; "signalStyle": "signalStyle"; }, { "radioChangeHandler": "radioChangeHandler"; }, never, never>;
}

//# sourceMappingURL=radio.component.d.ts.map