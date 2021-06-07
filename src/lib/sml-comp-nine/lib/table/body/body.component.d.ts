import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class TableBodyComponent implements OnInit {
    data: any;
    dropdownButtons: any;
    dropdownButtonsList: any;
    columns: any;
    rowstyle: any;
    alignment: any;
    height: any;
    width: any;
    minwidth: any;
    obj: any;
    id: any;
    isLoading: any;
    dropdownButtonStyle: any;
    actionClick: EventEmitter<any>;
    valueClick: EventEmitter<any>;
    textBoxEvent: EventEmitter<any>;
    dropdownButton: any[];
    constructor();
    ngOnInit(): void;
    onResize(event: any): void;
    trackByIndex(index: any): any;
    trackByIndex1(index: any): any;
    clickMethod(actionType: any, row: any): void;
    columnClick(row: any, col: any): void;
    textBoxMethod(row: any, col: any, type: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TableBodyComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TableBodyComponent, "sml-table-body", never, { "data": "data"; "dropdownButtons": "dropdownButtons"; "dropdownButtonsList": "dropdownButtonsList"; "columns": "columns"; "rowstyle": "rowstyle"; "alignment": "alignment"; "height": "height"; "width": "width"; "minwidth": "minwidth"; "id": "id"; "isLoading": "isLoading"; "dropdownButtonStyle": "dropdownButtonStyle"; "obj": "obj"; }, { "actionClick": "actionClick"; "valueClick": "valueClick"; "textBoxEvent": "textBoxEvent"; }, never, never>;
}

//# sourceMappingURL=body.component.d.ts.map