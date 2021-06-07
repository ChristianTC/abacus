import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class ColumnComponent implements OnInit {
    name: any;
    width: any;
    minwidth: any;
    obj: any;
    id: any;
    headerStyle: any;
    alignment: any;
    sortClick: EventEmitter<any>;
    table_width: any;
    constructor();
    ngOnInit(): void;
    onResize(event: any): void;
    resizeColumn(): void;
    sort(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ColumnComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ColumnComponent, "sml-table-column", never, { "name": "name"; "width": "width"; "minwidth": "minwidth"; "id": "id"; "headerStyle": "headerStyle"; "alignment": "alignment"; "obj": "obj"; }, { "sortClick": "sortClick"; }, never, never>;
}

//# sourceMappingURL=column.component.d.ts.map