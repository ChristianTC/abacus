import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TagInputComponent implements OnInit {
    private elementRef;
    value: any;
    name: any;
    onEnter: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    onEnterClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TagInputComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TagInputComponent, "sml-input-tag", never, { "value": "value"; "name": "name"; }, { "onEnter": "onEnter"; }, never, never>;
}

//# sourceMappingURL=tag-input.component.d.ts.map