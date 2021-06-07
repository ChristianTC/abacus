import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ColumnComponent = class ColumnComponent {
    constructor() {
        this.name = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.headerStyle = {};
        this.alignment = {};
        this.sortClick = new EventEmitter;
        this.table_width = 0;
    }
    ngOnInit() {
        for (var key in this.obj) {
            this.obj[key]['isDisplay'] = true;
            if (!this.obj[key]['isRemoved']) {
                this.obj[key]['isRemoved'] = false;
            }
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.table_width = width;
        this.resizeColumn();
    }
    resizeColumn() {
        let temp = [];
        let temp1 = [];
        let totalSum = 0;
        let totalMinwidth = 0;
        for (var key in this.obj) {
            temp.push(this.obj[key]);
            if (this.obj[key]['isDisplay']) {
                let w = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                totalSum = totalSum + parseInt(w);
                if (!this.obj[key].isFixedWidth) {
                    if (this.obj[key].minWidth) {
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                    else {
                        this.obj[key]['minWidth'] = 100;
                        let mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                }
                else {
                    let mw = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                    totalMinwidth = totalMinwidth + parseInt(mw);
                    this.obj[key]['minWidth'] = this.obj[key].width;
                }
            }
            let nType = {
                key: key,
                isRemoved: this.obj[key]['isRemoved'],
                isDisplay: this.obj[key]['isDisplay'],
                index: this.obj[key]['index'],
                minWidth: this.obj[key]['minWidth']
            };
            temp1.push(nType);
        }
        let sel1 = temp.filter(d => !d.isFixedWidth);
        let sel2 = temp.filter(d => d.isFixedWidth);
        if (this.table_width > totalSum) {
            let diff = ((this.table_width - totalSum) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                sel1[j].width = parseInt(w) + diff;
            }
        }
        if (this.table_width < totalSum) {
            let diff = ((totalSum - this.table_width) / sel1.length);
            for (let j = 0; j < sel1.length; j++) {
                let w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                let set = parseInt(w) - diff;
                if (set >= sel1[j].minWidth) {
                    sel1[j].width = set;
                }
            }
        }
        if (this.table_width < totalMinwidth) {
            let sel_A = temp1.filter(d => (d.isDisplay && d.isRemoved));
            if (sel_A.length > 0) {
                this.obj[sel_A[0].key]['isDisplay'] = false;
            }
            else {
                let sel_B = temp1.filter(d => (d.isDisplay && !d.isRemoved));
                if (sel_B.length > 0) {
                    let index = (sel_B.length - 1);
                    this.obj[sel_B[index].key]['isDisplay'] = false;
                }
            }
        }
        else {
            let sel_C = temp1.filter(d => (!d.isDisplay && !d.isRemoved));
            if (sel_C.length > 0) {
                let index = 0;
                let diff = this.table_width - totalMinwidth;
                if (diff >= sel_C[index]['minWidth']) {
                    this.obj[sel_C[index].key]['isDisplay'] = true;
                }
            }
            else {
                let sel_D = temp1.filter(d => (!d.isDisplay && d.isRemoved));
                if (sel_D.length > 0) {
                    let index = (sel_D.length - 1);
                    let diff = this.table_width - totalMinwidth;
                    if (diff >= sel_D[index]['minWidth']) {
                        this.obj[sel_D[index].key]['isDisplay'] = true;
                    }
                }
            }
        }
    }
    sort() {
        let nType = {
            name: this.name,
            orderby: this.obj[this.name].orderBy
        };
        for (var key in this.obj) {
            if (key == this.name) {
                this.obj[this.name].isCurrent = true;
            }
            else {
                this.obj[key].isCurrent = false;
            }
        }
        this.sortClick.emit(nType);
    }
};
__decorate([
    Input()
], ColumnComponent.prototype, "name", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "width", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "obj", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "id", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "headerStyle", void 0);
__decorate([
    Input()
], ColumnComponent.prototype, "alignment", void 0);
__decorate([
    Output()
], ColumnComponent.prototype, "sortClick", void 0);
ColumnComponent = __decorate([
    Component({
        selector: 'sml-table-column',
        template: `
  <th *ngIf="obj[name].isDisplay" [style.width]="obj[name].width + 'px'"  [style.max-width]="obj[name].width + 'px'"  [style.min-width]="obj[name].width + 'px'"    [style.text-align]="obj[name].columnDefinatinAlignment" (click)="sort()"
	[ngStyle]="headerStyle">
	{{obj[name].title}}
	<div [ngClass]="{'sort_icon_divl': obj[name].columnDefinatinAlignment != 'right','sort_icon_divr': obj[name].columnDefinatinAlignment == 'right' }"
		class="sort_icon_div">
		<div class="hi-0">
			<i class="fa fa-sort-asc sort_icon_asc cog-lightblue"
				*ngIf="obj[name].orderBy == 'ASC' && obj[name].isCurrent"></i>
		</div>
		<div>
			<i class="fa fa-sort-desc cog-lightblue" *ngIf="obj[name].orderBy == 'DESC' && obj[name].isCurrent"></i>
		</div>
	</div>
</th>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  th{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}
  .hi-0{height: 0px;}
  .sort_icon_divl {display: inline-block;float: right;}
  .sort_icon_divr {display: inline-block;float: left;}
  .cog-lightblue{color:lightblue;}
  `]
    })
], ColumnComponent);
export { ColumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvY29sdW1uL2NvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQy9FLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFZMUI7UUFWUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVEsR0FBRyxDQUFDO1FBRXBCLE9BQUUsR0FBUSxlQUFlLENBQUM7UUFDMUIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDdkMsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ2pCLFFBQVE7UUFDTixLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6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LGtCQUFrQjtTQUN0QztpQkFUUTs7Ozs7O0dBTVI7S0FJRixDQUFDO0dBRVcsZUFBZSxDQTRIM0I7U0E1SFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXRhYmxlLWNvbHVtbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8dGggKm5nSWY9XCJvYmpbbmFtZV0uaXNEaXNwbGF5XCIgW3N0eWxlLndpZHRoXT1cIm9ialtuYW1lXS53aWR0aCArICdweCdcIiAgW3N0eWxlLm1heC13aWR0aF09XCJvYmpbbmFtZV0ud2lkdGggKyAncHgnXCIgIFtzdHlsZS5taW4td2lkdGhdPVwib2JqW25hbWVdLndpZHRoICsgJ3B4J1wiICAgIFtzdHlsZS50ZXh0LWFsaWduXT1cIm9ialtuYW1lXS5jb2x1bW5EZWZpbmF0aW5BbGlnbm1lbnRcIiAoY2xpY2spPVwic29ydCgpXCJcclxuXHRbbmdTdHlsZV09XCJoZWFkZXJTdHlsZVwiPlxyXG5cdHt7b2JqW25hbWVdLnRpdGxlfX1cclxuXHQ8ZGl2IFtuZ0NsYXNzXT1cInsnc29ydF9pY29uX2RpdmwnOiBvYmpbbmFtZV0uY29sdW1uRGVmaW5hdGluQWxpZ25tZW50ICE9ICdyaWdodCcsJ3NvcnRfaWNvbl9kaXZyJzogb2JqW25hbWVdLmNvbHVtbkRlZmluYXRpbkFsaWdubWVudCA9PSAncmlnaHQnIH1cIlxyXG5cdFx0Y2xhc3M9XCJzb3J0X2ljb25fZGl2XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiaGktMFwiPlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXNvcnQtYXNjIHNvcnRfaWNvbl9hc2MgY29nLWxpZ2h0Ymx1ZVwiXHJcblx0XHRcdFx0Km5nSWY9XCJvYmpbbmFtZV0ub3JkZXJCeSA9PSAnQVNDJyAmJiBvYmpbbmFtZV0uaXNDdXJyZW50XCI+PC9pPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aSBjbGFzcz1cImZhIGZhLXNvcnQtZGVzYyBjb2ctbGlnaHRibHVlXCIgKm5nSWY9XCJvYmpbbmFtZV0ub3JkZXJCeSA9PSAnREVTQycgJiYgb2JqW25hbWVdLmlzQ3VycmVudFwiPjwvaT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RoPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIHRoe3BhZGRpbmctdG9wOiAxcHg7cGFkZGluZy1ib3R0b206IDFweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7Y3Vyc29yOiBwb2ludGVyO292ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDt9XHJcbiAgLmhpLTB7aGVpZ2h0OiAwcHg7fVxyXG4gIC5zb3J0X2ljb25fZGl2bCB7ZGlzcGxheTogaW5saW5lLWJsb2NrO2Zsb2F0OiByaWdodDt9XHJcbiAgLnNvcnRfaWNvbl9kaXZyIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IGxlZnQ7fVxyXG4gIC5jb2ctbGlnaHRibHVle2NvbG9yOmxpZ2h0Ymx1ZTt9XHJcbiAgYF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyh3aW5kb3c6cmVzaXplKSc6ICdvblJlc2l6ZSgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBuYW1lOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgbWlud2lkdGg6IGFueSA9IDcwMDtcclxuICBASW5wdXQoKSBvYmo7XHJcbiAgQElucHV0KCkgaWQ6IGFueSA9ICdzbWwtZGF0YXRhYmxlJztcclxuICBASW5wdXQoKSBoZWFkZXJTdHlsZTogYW55ID0ge307XHJcbiAgQElucHV0KCkgYWxpZ25tZW50OiBhbnkgPSB7fTtcclxuICBAT3V0cHV0KCkgc29ydENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICB0YWJsZV93aWR0aDogYW55ID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLm9iaikge1xyXG4gICAgICB0aGlzLm9ialtrZXldWydpc0Rpc3BsYXknXSA9IHRydWU7XHJcbiAgICAgIGlmICghdGhpcy5vYmpba2V5XVsnaXNSZW1vdmVkJ10pIHtcclxuICAgICAgICB0aGlzLm9ialtrZXldWydpc1JlbW92ZWQnXSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICBsZXQgd2lkdGggPSAkKCcuJyArIHRoaXMuaWQpLndpZHRoKCk7XHJcbiAgICB0aGlzLnRhYmxlX3dpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbigpO1xyXG4gIH1cclxuICByZXNpemVDb2x1bW4oKSB7XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgbGV0IHRlbXAxID0gW107XHJcbiAgICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gICAgbGV0IHRvdGFsTWlud2lkdGggPSAwO1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMub2JqKSB7XHJcbiAgICAgIHRlbXAucHVzaCh0aGlzLm9ialtrZXldKTtcclxuICAgICAgaWYgKHRoaXMub2JqW2tleV1bJ2lzRGlzcGxheSddKSB7XHJcbiAgICAgICAgbGV0IHcgPSBpc05hTihwYXJzZUludCh0aGlzLm9ialtrZXldLndpZHRoKSkgPyAwIDogdGhpcy5vYmpba2V5XS53aWR0aDtcclxuICAgICAgICB0b3RhbFN1bSA9IHRvdGFsU3VtICsgcGFyc2VJbnQodyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9ialtrZXldLmlzRml4ZWRXaWR0aCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMub2JqW2tleV0ubWluV2lkdGgpIHtcclxuICAgICAgICAgICAgbGV0IG13ID0gaXNOYU4ocGFyc2VJbnQodGhpcy5vYmpba2V5XS5taW5XaWR0aCkpID8gMCA6IHRoaXMub2JqW2tleV0ubWluV2lkdGg7XHJcbiAgICAgICAgICAgIHRvdGFsTWlud2lkdGggPSB0b3RhbE1pbndpZHRoICsgcGFyc2VJbnQobXcpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vYmpba2V5XVsnbWluV2lkdGgnXSA9IDEwMDtcclxuICAgICAgICAgICAgbGV0IG13ID0gaXNOYU4ocGFyc2VJbnQodGhpcy5vYmpba2V5XS5taW5XaWR0aCkpID8gMCA6IHRoaXMub2JqW2tleV0ubWluV2lkdGg7XHJcbiAgICAgICAgICAgIHRvdGFsTWlud2lkdGggPSB0b3RhbE1pbndpZHRoICsgcGFyc2VJbnQobXcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBsZXQgbXcgPSBpc05hTihwYXJzZUludCh0aGlzLm9ialtrZXldLndpZHRoKSkgPyAwIDogdGhpcy5vYmpba2V5XS53aWR0aDtcclxuICAgICAgICAgIHRvdGFsTWlud2lkdGggPSB0b3RhbE1pbndpZHRoICsgcGFyc2VJbnQobXcpO1xyXG4gICAgICAgICAgdGhpcy5vYmpba2V5XVsnbWluV2lkdGgnXSA9IHRoaXMub2JqW2tleV0ud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuVHlwZSA9IHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICBpc1JlbW92ZWQ6IHRoaXMub2JqW2tleV1bJ2lzUmVtb3ZlZCddLFxyXG4gICAgICAgIGlzRGlzcGxheTogdGhpcy5vYmpba2V5XVsnaXNEaXNwbGF5J10sXHJcbiAgICAgICAgaW5kZXg6IHRoaXMub2JqW2tleV1bJ2luZGV4J10sXHJcbiAgICAgICAgbWluV2lkdGg6IHRoaXMub2JqW2tleV1bJ21pbldpZHRoJ11cclxuICAgICAgfVxyXG4gICAgICB0ZW1wMS5wdXNoKG5UeXBlKTtcclxuICAgIH1cclxuICAgIGxldCBzZWwxID0gdGVtcC5maWx0ZXIoZCA9PiAhZC5pc0ZpeGVkV2lkdGgpO1xyXG4gICAgbGV0IHNlbDIgPSB0ZW1wLmZpbHRlcihkID0+IGQuaXNGaXhlZFdpZHRoKTtcclxuICAgIGlmICh0aGlzLnRhYmxlX3dpZHRoID4gdG90YWxTdW0pIHtcclxuICAgICAgbGV0IGRpZmYgPSAoKHRoaXMudGFibGVfd2lkdGggLSB0b3RhbFN1bSkgLyBzZWwxLmxlbmd0aCk7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsMS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGxldCB3ID0gaXNOYU4ocGFyc2VJbnQoc2VsMVtqXS53aWR0aCkpID8gMCA6IHNlbDFbal0ud2lkdGg7XHJcbiAgICAgICAgc2VsMVtqXS53aWR0aCA9IHBhcnNlSW50KHcpICsgZGlmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGFibGVfd2lkdGggPCB0b3RhbFN1bSkge1xyXG4gICAgICBsZXQgZGlmZiA9ICgodG90YWxTdW0gLSB0aGlzLnRhYmxlX3dpZHRoKSAvIHNlbDEubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWwxLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHcgPSBpc05hTihwYXJzZUludChzZWwxW2pdLndpZHRoKSkgPyAwIDogc2VsMVtqXS53aWR0aDtcclxuICAgICAgICBsZXQgc2V0ID0gcGFyc2VJbnQodykgLSBkaWZmO1xyXG4gICAgICAgIGlmIChzZXQgPj0gc2VsMVtqXS5taW5XaWR0aCkge1xyXG4gICAgICAgICAgc2VsMVtqXS53aWR0aCA9IHNldDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRhYmxlX3dpZHRoIDwgdG90YWxNaW53aWR0aCkge1xyXG4gICAgICBsZXQgc2VsX0EgPSB0ZW1wMS5maWx0ZXIoZCA9PiAoZC5pc0Rpc3BsYXkgJiYgZC5pc1JlbW92ZWQpKTtcclxuICAgICAgaWYgKHNlbF9BLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLm9ialtzZWxfQVswXS5rZXldWydpc0Rpc3BsYXknXSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxfQiA9IHRlbXAxLmZpbHRlcihkID0+IChkLmlzRGlzcGxheSAmJiAhZC5pc1JlbW92ZWQpKTtcclxuICAgICAgICBpZiAoc2VsX0IubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gKHNlbF9CLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgdGhpcy5vYmpbc2VsX0JbaW5kZXhdLmtleV1bJ2lzRGlzcGxheSddID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgc2VsX0MgPSB0ZW1wMS5maWx0ZXIoZCA9PiAoIWQuaXNEaXNwbGF5ICYmICFkLmlzUmVtb3ZlZCkpO1xyXG4gICAgICBpZiAoc2VsX0MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnRhYmxlX3dpZHRoIC0gdG90YWxNaW53aWR0aDtcclxuICAgICAgICBpZiAoZGlmZiA+PSBzZWxfQ1tpbmRleF1bJ21pbldpZHRoJ10pIHtcclxuICAgICAgICAgIHRoaXMub2JqW3NlbF9DW2luZGV4XS5rZXldWydpc0Rpc3BsYXknXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBzZWxfRCA9IHRlbXAxLmZpbHRlcihkID0+ICghZC5pc0Rpc3BsYXkgJiYgZC5pc1JlbW92ZWQpKTtcclxuICAgICAgICBpZiAoc2VsX0QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgbGV0IGluZGV4ID0gKHNlbF9ELmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgbGV0IGRpZmYgPSB0aGlzLnRhYmxlX3dpZHRoIC0gdG90YWxNaW53aWR0aDtcclxuICAgICAgICAgIGlmIChkaWZmID49IHNlbF9EW2luZGV4XVsnbWluV2lkdGgnXSkge1xyXG4gICAgICAgICAgICB0aGlzLm9ialtzZWxfRFtpbmRleF0ua2V5XVsnaXNEaXNwbGF5J10gPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBzb3J0KCkge1xyXG4gICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgIG9yZGVyYnk6IHRoaXMub2JqW3RoaXMubmFtZV0ub3JkZXJCeVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMub2JqKSB7XHJcbiAgICAgIGlmIChrZXkgPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5uYW1lXS5pc0N1cnJlbnQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMub2JqW2tleV0uaXNDdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc29ydENsaWNrLmVtaXQoblR5cGUpO1xyXG4gIH1cclxufVxyXG4iXX0=