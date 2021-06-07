import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ColumnComponent = /** @class */ (function () {
    function ColumnComponent() {
        this.name = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.headerStyle = {};
        this.alignment = {};
        this.sortClick = new EventEmitter;
        this.table_width = 0;
    }
    ColumnComponent.prototype.ngOnInit = function () {
        for (var key in this.obj) {
            this.obj[key]['isDisplay'] = true;
            if (!this.obj[key]['isRemoved']) {
                this.obj[key]['isRemoved'] = false;
            }
        }
    };
    ColumnComponent.prototype.onResize = function (event) {
        var width = $('.' + this.id).width();
        this.table_width = width;
        this.resizeColumn();
    };
    ColumnComponent.prototype.resizeColumn = function () {
        var temp = [];
        var temp1 = [];
        var totalSum = 0;
        var totalMinwidth = 0;
        for (var key in this.obj) {
            temp.push(this.obj[key]);
            if (this.obj[key]['isDisplay']) {
                var w = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                totalSum = totalSum + parseInt(w);
                if (!this.obj[key].isFixedWidth) {
                    if (this.obj[key].minWidth) {
                        var mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                    else {
                        this.obj[key]['minWidth'] = 100;
                        var mw = isNaN(parseInt(this.obj[key].minWidth)) ? 0 : this.obj[key].minWidth;
                        totalMinwidth = totalMinwidth + parseInt(mw);
                    }
                }
                else {
                    var mw = isNaN(parseInt(this.obj[key].width)) ? 0 : this.obj[key].width;
                    totalMinwidth = totalMinwidth + parseInt(mw);
                    this.obj[key]['minWidth'] = this.obj[key].width;
                }
            }
            var nType = {
                key: key,
                isRemoved: this.obj[key]['isRemoved'],
                isDisplay: this.obj[key]['isDisplay'],
                index: this.obj[key]['index'],
                minWidth: this.obj[key]['minWidth']
            };
            temp1.push(nType);
        }
        var sel1 = temp.filter(function (d) { return !d.isFixedWidth; });
        var sel2 = temp.filter(function (d) { return d.isFixedWidth; });
        if (this.table_width > totalSum) {
            var diff = ((this.table_width - totalSum) / sel1.length);
            for (var j = 0; j < sel1.length; j++) {
                var w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                sel1[j].width = parseInt(w) + diff;
            }
        }
        if (this.table_width < totalSum) {
            var diff = ((totalSum - this.table_width) / sel1.length);
            for (var j = 0; j < sel1.length; j++) {
                var w = isNaN(parseInt(sel1[j].width)) ? 0 : sel1[j].width;
                var set = parseInt(w) - diff;
                if (set >= sel1[j].minWidth) {
                    sel1[j].width = set;
                }
            }
        }
        if (this.table_width < totalMinwidth) {
            var sel_A = temp1.filter(function (d) { return (d.isDisplay && d.isRemoved); });
            if (sel_A.length > 0) {
                this.obj[sel_A[0].key]['isDisplay'] = false;
            }
            else {
                var sel_B = temp1.filter(function (d) { return (d.isDisplay && !d.isRemoved); });
                if (sel_B.length > 0) {
                    var index = (sel_B.length - 1);
                    this.obj[sel_B[index].key]['isDisplay'] = false;
                }
            }
        }
        else {
            var sel_C = temp1.filter(function (d) { return (!d.isDisplay && !d.isRemoved); });
            if (sel_C.length > 0) {
                var index = 0;
                var diff = this.table_width - totalMinwidth;
                if (diff >= sel_C[index]['minWidth']) {
                    this.obj[sel_C[index].key]['isDisplay'] = true;
                }
            }
            else {
                var sel_D = temp1.filter(function (d) { return (!d.isDisplay && d.isRemoved); });
                if (sel_D.length > 0) {
                    var index = (sel_D.length - 1);
                    var diff = this.table_width - totalMinwidth;
                    if (diff >= sel_D[index]['minWidth']) {
                        this.obj[sel_D[index].key]['isDisplay'] = true;
                    }
                }
            }
        }
    };
    ColumnComponent.prototype.sort = function () {
        var nType = {
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
            template: "\n  <th *ngIf=\"obj[name].isDisplay\" [style.width]=\"obj[name].width + 'px'\"  [style.max-width]=\"obj[name].width + 'px'\"  [style.min-width]=\"obj[name].width + 'px'\"    [style.text-align]=\"obj[name].columnDefinatinAlignment\" (click)=\"sort()\"\n\t[ngStyle]=\"headerStyle\">\n\t{{obj[name].title}}\n\t<div [ngClass]=\"{'sort_icon_divl': obj[name].columnDefinatinAlignment != 'right','sort_icon_divr': obj[name].columnDefinatinAlignment == 'right' }\"\n\t\tclass=\"sort_icon_div\">\n\t\t<div class=\"hi-0\">\n\t\t\t<i class=\"fa fa-sort-asc sort_icon_asc cog-lightblue\"\n\t\t\t\t*ngIf=\"obj[name].orderBy == 'ASC' && obj[name].isCurrent\"></i>\n\t\t</div>\n\t\t<div>\n\t\t\t<i class=\"fa fa-sort-desc cog-lightblue\" *ngIf=\"obj[name].orderBy == 'DESC' && obj[name].isCurrent\"></i>\n\t\t</div>\n\t</div>\n</th>\n  ",
            host: {
                '(window:resize)': 'onResize($event)'
            },
            styles: ["\n  th{padding-top: 1px;padding-bottom: 1px;vertical-align: middle !important;cursor: pointer;overflow: hidden !important;}\n  .hi-0{height: 0px;}\n  .sort_icon_divl {display: inline-block;float: right;}\n  .sort_icon_divr {display: inline-block;float: left;}\n  .cog-lightblue{color:lightblue;}\n  "]
        })
    ], ColumnComponent);
    return ColumnComponent;
}());
export { ColumnComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvY29sdW1uL2NvbHVtbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnQy9FO0lBWUU7UUFWUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVEsR0FBRyxDQUFDO1FBRXBCLE9BQUUsR0FBUSxlQUFlLENBQUM7UUFDMUIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDdkMsZ0JBQVcsR0FBUSxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ2pCLGtDQUFRLEdBQVI7UUFDRSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3BDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0Qsa0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDWixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFB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RUFBRSx1ekJBZVQ7WUFRRCxJQUFJLEVBQUU7Z0JBQ0osaUJBQWlCLEVBQUUsa0JBQWtCO2FBQ3RDO3FCQVRRLDZTQU1SO1NBSUYsQ0FBQztPQUVXLGVBQWUsQ0E0SDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQTVIWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtdGFibGUtY29sdW1uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx0aCAqbmdJZj1cIm9ialtuYW1lXS5pc0Rpc3BsYXlcIiBbc3R5bGUud2lkdGhdPVwib2JqW25hbWVdLndpZHRoICsgJ3B4J1wiICBbc3R5bGUubWF4LXdpZHRoXT1cIm9ialtuYW1lXS53aWR0aCArICdweCdcIiAgW3N0eWxlLm1pbi13aWR0aF09XCJvYmpbbmFtZV0ud2lkdGggKyAncHgnXCIgICAgW3N0eWxlLnRleHQtYWxpZ25dPVwib2JqW25hbWVdLmNvbHVtbkRlZmluYXRpbkFsaWdubWVudFwiIChjbGljayk9XCJzb3J0KClcIlxyXG5cdFtuZ1N0eWxlXT1cImhlYWRlclN0eWxlXCI+XHJcblx0e3tvYmpbbmFtZV0udGl0bGV9fVxyXG5cdDxkaXYgW25nQ2xhc3NdPVwieydzb3J0X2ljb25fZGl2bCc6IG9ialtuYW1lXS5jb2x1bW5EZWZpbmF0aW5BbGlnbm1lbnQgIT0gJ3JpZ2h0Jywnc29ydF9pY29uX2RpdnInOiBvYmpbbmFtZV0uY29sdW1uRGVmaW5hdGluQWxpZ25tZW50ID09ICdyaWdodCcgfVwiXHJcblx0XHRjbGFzcz1cInNvcnRfaWNvbl9kaXZcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJoaS0wXCI+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtc29ydC1hc2Mgc29ydF9pY29uX2FzYyBjb2ctbGlnaHRibHVlXCJcclxuXHRcdFx0XHQqbmdJZj1cIm9ialtuYW1lXS5vcmRlckJ5ID09ICdBU0MnICYmIG9ialtuYW1lXS5pc0N1cnJlbnRcIj48L2k+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtc29ydC1kZXNjIGNvZy1saWdodGJsdWVcIiAqbmdJZj1cIm9ialtuYW1lXS5vcmRlckJ5ID09ICdERVNDJyAmJiBvYmpbbmFtZV0uaXNDdXJyZW50XCI+PC9pPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGg+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgdGh7cGFkZGluZy10b3A6IDFweDtwYWRkaW5nLWJvdHRvbTogMXB4O3ZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtjdXJzb3I6IHBvaW50ZXI7b3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O31cclxuICAuaGktMHtoZWlnaHQ6IDBweDt9XHJcbiAgLnNvcnRfaWNvbl9kaXZsIHtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ZmxvYXQ6IHJpZ2h0O31cclxuICAuc29ydF9pY29uX2RpdnIge2Rpc3BsYXk6IGlubGluZS1ibG9jaztmbG9hdDogbGVmdDt9XHJcbiAgLmNvZy1saWdodGJsdWV7Y29sb3I6bGlnaHRibHVlO31cclxuICBgXSxcclxuICBob3N0OiB7XHJcbiAgICAnKHdpbmRvdzpyZXNpemUpJzogJ29uUmVzaXplKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IGFueSA9ICcnO1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBtaW53aWR0aDogYW55ID0gNzAwO1xyXG4gIEBJbnB1dCgpIG9iajtcclxuICBASW5wdXQoKSBpZDogYW55ID0gJ3NtbC1kYXRhdGFibGUnO1xyXG4gIEBJbnB1dCgpIGhlYWRlclN0eWxlOiBhbnkgPSB7fTtcclxuICBASW5wdXQoKSBhbGlnbm1lbnQ6IGFueSA9IHt9O1xyXG4gIEBPdXRwdXQoKSBzb3J0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIHRhYmxlX3dpZHRoOiBhbnkgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMub2JqKSB7XHJcbiAgICAgIHRoaXMub2JqW2tleV1bJ2lzRGlzcGxheSddID0gdHJ1ZTtcclxuICAgICAgaWYgKCF0aGlzLm9ialtrZXldWydpc1JlbW92ZWQnXSkge1xyXG4gICAgICAgIHRoaXMub2JqW2tleV1bJ2lzUmVtb3ZlZCddID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25SZXNpemUoZXZlbnQpIHtcclxuICAgIGxldCB3aWR0aCA9ICQoJy4nICsgdGhpcy5pZCkud2lkdGgoKTtcclxuICAgIHRoaXMudGFibGVfd2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMucmVzaXplQ29sdW1uKCk7XHJcbiAgfVxyXG4gIHJlc2l6ZUNvbHVtbigpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBsZXQgdGVtcDEgPSBbXTtcclxuICAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbiAgICBsZXQgdG90YWxNaW53aWR0aCA9IDA7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5vYmopIHtcclxuICAgICAgdGVtcC5wdXNoKHRoaXMub2JqW2tleV0pO1xyXG4gICAgICBpZiAodGhpcy5vYmpba2V5XVsnaXNEaXNwbGF5J10pIHtcclxuICAgICAgICBsZXQgdyA9IGlzTmFOKHBhcnNlSW50KHRoaXMub2JqW2tleV0ud2lkdGgpKSA/IDAgOiB0aGlzLm9ialtrZXldLndpZHRoO1xyXG4gICAgICAgIHRvdGFsU3VtID0gdG90YWxTdW0gKyBwYXJzZUludCh3KTtcclxuICAgICAgICBpZiAoIXRoaXMub2JqW2tleV0uaXNGaXhlZFdpZHRoKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5vYmpba2V5XS5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICBsZXQgbXcgPSBpc05hTihwYXJzZUludCh0aGlzLm9ialtrZXldLm1pbldpZHRoKSkgPyAwIDogdGhpcy5vYmpba2V5XS5taW5XaWR0aDtcclxuICAgICAgICAgICAgdG90YWxNaW53aWR0aCA9IHRvdGFsTWlud2lkdGggKyBwYXJzZUludChtdyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9ialtrZXldWydtaW5XaWR0aCddID0gMTAwO1xyXG4gICAgICAgICAgICBsZXQgbXcgPSBpc05hTihwYXJzZUludCh0aGlzLm9ialtrZXldLm1pbldpZHRoKSkgPyAwIDogdGhpcy5vYmpba2V5XS5taW5XaWR0aDtcclxuICAgICAgICAgICAgdG90YWxNaW53aWR0aCA9IHRvdGFsTWlud2lkdGggKyBwYXJzZUludChtdyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBtdyA9IGlzTmFOKHBhcnNlSW50KHRoaXMub2JqW2tleV0ud2lkdGgpKSA/IDAgOiB0aGlzLm9ialtrZXldLndpZHRoO1xyXG4gICAgICAgICAgdG90YWxNaW53aWR0aCA9IHRvdGFsTWlud2lkdGggKyBwYXJzZUludChtdyk7XHJcbiAgICAgICAgICB0aGlzLm9ialtrZXldWydtaW5XaWR0aCddID0gdGhpcy5vYmpba2V5XS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIGlzUmVtb3ZlZDogdGhpcy5vYmpba2V5XVsnaXNSZW1vdmVkJ10sXHJcbiAgICAgICAgaXNEaXNwbGF5OiB0aGlzLm9ialtrZXldWydpc0Rpc3BsYXknXSxcclxuICAgICAgICBpbmRleDogdGhpcy5vYmpba2V5XVsnaW5kZXgnXSxcclxuICAgICAgICBtaW5XaWR0aDogdGhpcy5vYmpba2V5XVsnbWluV2lkdGgnXVxyXG4gICAgICB9XHJcbiAgICAgIHRlbXAxLnB1c2goblR5cGUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHNlbDEgPSB0ZW1wLmZpbHRlcihkID0+ICFkLmlzRml4ZWRXaWR0aCk7XHJcbiAgICBsZXQgc2VsMiA9IHRlbXAuZmlsdGVyKGQgPT4gZC5pc0ZpeGVkV2lkdGgpO1xyXG4gICAgaWYgKHRoaXMudGFibGVfd2lkdGggPiB0b3RhbFN1bSkge1xyXG4gICAgICBsZXQgZGlmZiA9ICgodGhpcy50YWJsZV93aWR0aCAtIHRvdGFsU3VtKSAvIHNlbDEubGVuZ3RoKTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWwxLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgbGV0IHcgPSBpc05hTihwYXJzZUludChzZWwxW2pdLndpZHRoKSkgPyAwIDogc2VsMVtqXS53aWR0aDtcclxuICAgICAgICBzZWwxW2pdLndpZHRoID0gcGFyc2VJbnQodykgKyBkaWZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy50YWJsZV93aWR0aCA8IHRvdGFsU3VtKSB7XHJcbiAgICAgIGxldCBkaWZmID0gKCh0b3RhbFN1bSAtIHRoaXMudGFibGVfd2lkdGgpIC8gc2VsMS5sZW5ndGgpO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbDEubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBsZXQgdyA9IGlzTmFOKHBhcnNlSW50KHNlbDFbal0ud2lkdGgpKSA/IDAgOiBzZWwxW2pdLndpZHRoO1xyXG4gICAgICAgIGxldCBzZXQgPSBwYXJzZUludCh3KSAtIGRpZmY7XHJcbiAgICAgICAgaWYgKHNldCA+PSBzZWwxW2pdLm1pbldpZHRoKSB7XHJcbiAgICAgICAgICBzZWwxW2pdLndpZHRoID0gc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGFibGVfd2lkdGggPCB0b3RhbE1pbndpZHRoKSB7XHJcbiAgICAgIGxldCBzZWxfQSA9IHRlbXAxLmZpbHRlcihkID0+IChkLmlzRGlzcGxheSAmJiBkLmlzUmVtb3ZlZCkpO1xyXG4gICAgICBpZiAoc2VsX0EubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMub2JqW3NlbF9BWzBdLmtleV1bJ2lzRGlzcGxheSddID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbF9CID0gdGVtcDEuZmlsdGVyKGQgPT4gKGQuaXNEaXNwbGF5ICYmICFkLmlzUmVtb3ZlZCkpO1xyXG4gICAgICAgIGlmIChzZWxfQi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSAoc2VsX0IubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB0aGlzLm9ialtzZWxfQltpbmRleF0ua2V5XVsnaXNEaXNwbGF5J10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBzZWxfQyA9IHRlbXAxLmZpbHRlcihkID0+ICghZC5pc0Rpc3BsYXkgJiYgIWQuaXNSZW1vdmVkKSk7XHJcbiAgICAgIGlmIChzZWxfQy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBsZXQgZGlmZiA9IHRoaXMudGFibGVfd2lkdGggLSB0b3RhbE1pbndpZHRoO1xyXG4gICAgICAgIGlmIChkaWZmID49IHNlbF9DW2luZGV4XVsnbWluV2lkdGgnXSkge1xyXG4gICAgICAgICAgdGhpcy5vYmpbc2VsX0NbaW5kZXhdLmtleV1bJ2lzRGlzcGxheSddID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHNlbF9EID0gdGVtcDEuZmlsdGVyKGQgPT4gKCFkLmlzRGlzcGxheSAmJiBkLmlzUmVtb3ZlZCkpO1xyXG4gICAgICAgIGlmIChzZWxfRC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSAoc2VsX0QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICBsZXQgZGlmZiA9IHRoaXMudGFibGVfd2lkdGggLSB0b3RhbE1pbndpZHRoO1xyXG4gICAgICAgICAgaWYgKGRpZmYgPj0gc2VsX0RbaW5kZXhdWydtaW5XaWR0aCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqW3NlbF9EW2luZGV4XS5rZXldWydpc0Rpc3BsYXknXSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNvcnQoKSB7XHJcbiAgICBsZXQgblR5cGUgPSB7XHJcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgb3JkZXJieTogdGhpcy5vYmpbdGhpcy5uYW1lXS5vcmRlckJ5XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5vYmopIHtcclxuICAgICAgaWYgKGtleSA9PSB0aGlzLm5hbWUpIHtcclxuICAgICAgICB0aGlzLm9ialt0aGlzLm5hbWVdLmlzQ3VycmVudCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vYmpba2V5XS5pc0N1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zb3J0Q2xpY2suZW1pdChuVHlwZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==