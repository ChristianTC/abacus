import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ButtongroupComponent implements OnInit {
    obj: {
        label: string;
        dropdownButtons: any[];
    };
    buttonGroupStyle: any;
    buttonGroupLabelStyle: any;
    buttonGroupValueStyle: any;
    actionClick: EventEmitter<any>;
    hoverAnchor: any;
    constructor();
    ngOnInit(): void;
    getHoverStyle(): {
        'background-color': string;
        'color': any;
        'border-left': string;
        'font-family': any;
        'font-size': any;
        'font-weight': any;
        'cursor': string;
    };
    clickMethod(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ButtongroupComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ButtongroupComponent, "sml-buttongroup", never, { "obj": "obj"; "buttonGroupStyle": "buttonGroupStyle"; "buttonGroupLabelStyle": "buttonGroupLabelStyle"; "buttonGroupValueStyle": "buttonGroupValueStyle"; }, { "actionClick": "actionClick"; }, never, never>;
}

//# sourceMappingURL=buttongroup.component.d.ts.map