import { OnInit, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TableComponent implements OnInit {
    private elementRef;
    obj: any;
    id: any;
    width: any;
    height: any;
    minwidth: any;
    isfixedheight: any;
    scrollX: any;
    screenWidth: any;
    interSmlTable: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onResize(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableComponent, "sml-table", never, { "obj": "obj"; "id": "id"; "width": "width"; "height": "height"; "minwidth": "minwidth"; "isfixedheight": "isfixedheight"; "scrollX": "scrollX"; }, {}, never, ["sml-table-header", "sml-table-column", "sml-table-body", "sml-table-footer"]>;
}

//# sourceMappingURL=table.component.d.ts.map