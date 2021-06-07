import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class InputTagComponent implements OnInit {
    private elementRef;
    label: any;
    name: any;
    items: any;
    getvalue: EventEmitter<any>;
    switchStyle: boolean;
    signalStyle: boolean;
    staticStyle: boolean;
    style: any;
    borderStyle: any;
    valueStyle: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    onItemAdded(event: any): void;
    onItemRemove(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InputTagComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<InputTagComponent, "sml-tag-input", never, { "label": "label"; "name": "name"; "items": "items"; "switchStyle": "switchStyle"; "signalStyle": "signalStyle"; "staticStyle": "staticStyle"; "style": "style"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; }, { "getvalue": "getvalue"; }, never, never>;
}

//# sourceMappingURL=input-tag.component.d.ts.map