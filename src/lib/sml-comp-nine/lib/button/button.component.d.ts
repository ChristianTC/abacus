import { OnInit, EventEmitter, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ButtonComponent implements OnInit {
    private elementRef;
    icon: any;
    label: any;
    btnCl: any;
    iconCl: any;
    buttonStyle: any;
    buttonClick: EventEmitter<any>;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(event: any): void;
    clickEvent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtonComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ButtonComponent, "sml-button", never, { "icon": "icon"; "label": "label"; "btnCl": "btnCl"; "iconCl": "iconCl"; "buttonStyle": "buttonStyle"; }, { "buttonClick": "buttonClick"; }, never, never>;
}

//# sourceMappingURL=button.component.d.ts.map