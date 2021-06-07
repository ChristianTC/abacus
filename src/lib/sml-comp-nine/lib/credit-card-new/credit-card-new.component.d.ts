import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CreditCardNewComponent implements OnInit {
    private elementRef;
    labelStyle: any;
    borderStyle: any;
    valueStyle: any;
    buttonStyle: any;
    cardObject: any;
    submitValue: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(event: any): void;
    submitClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CreditCardNewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CreditCardNewComponent, "sml-credit-card-new", never, { "cardObject": "cardObject"; "labelStyle": "labelStyle"; "borderStyle": "borderStyle"; "valueStyle": "valueStyle"; "buttonStyle": "buttonStyle"; }, { "submitValue": "submitValue"; }, never, never>;
}

//# sourceMappingURL=credit-card-new.component.d.ts.map