import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class FooterComponent implements OnInit {
    obj: any;
    width: any;
    minwidth: any;
    maxwidth: any;
    includepagecount: any;
    includepagination: any;
    display: any;
    totalcount: any;
    recordcount: any;
    pagesize: any;
    page: any;
    alignment: any;
    changepage: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    pageNumberUpdate(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FooterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<FooterComponent, "sml-table-footer", never, { "width": "width"; "minwidth": "minwidth"; "maxwidth": "maxwidth"; "includepagecount": "includepagecount"; "includepagination": "includepagination"; "display": "display"; "totalcount": "totalcount"; "recordcount": "recordcount"; "pagesize": "pagesize"; "page": "page"; "alignment": "alignment"; "obj": "obj"; }, { "changepage": "changepage"; }, never, ["*", "*"]>;
}

//# sourceMappingURL=footer.component.d.ts.map