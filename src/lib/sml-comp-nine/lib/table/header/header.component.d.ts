import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class HeaderComponent implements OnInit {
    width: any;
    minwidth: any;
    maxwidth: any;
    includesearch: any;
    includecount: any;
    display: any;
    alignment: any;
    changerowcount: EventEmitter<any>;
    searchRecord: EventEmitter<any>;
    textObj: {
        name: string;
        placeholder: string;
        value: string;
    };
    drpObj: {
        drpDataList: {
            id: string;
            name: string;
        }[];
        selectedValue: string;
    };
    constructor();
    ngOnInit(): void;
    changeRowDisplayCount(event: any): void;
    searchClick(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<HeaderComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<HeaderComponent, "sml-table-header", never, { "width": "width"; "minwidth": "minwidth"; "maxwidth": "maxwidth"; "includesearch": "includesearch"; "includecount": "includecount"; "display": "display"; "alignment": "alignment"; }, { "changerowcount": "changerowcount"; "searchRecord": "searchRecord"; }, never, ["*"]>;
}

//# sourceMappingURL=header.component.d.ts.map