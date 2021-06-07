import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PaginationComponent implements OnInit {
    totalRecords: number;
    noPage: number;
    pageSize: number;
    clickPage: EventEmitter<any>;
    noItems: number[];
    nItem: number;
    paginators: number;
    constructor();
    ngOnInit(): void;
    setPaginator(n: any): void;
    changePage(n: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaginationComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaginationComponent, "sml-table-footer-pagination", never, { "noPage": "noPage"; "totalRecords": "totalRecords"; "pageSize": "pageSize"; }, { "clickPage": "clickPage"; }, never, never>;
}

//# sourceMappingURL=pagination.component.d.ts.map