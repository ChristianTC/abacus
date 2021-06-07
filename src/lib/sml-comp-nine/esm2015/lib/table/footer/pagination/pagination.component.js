import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.clickPage = new EventEmitter();
        this.noItems = [];
        this.paginators = 5;
    }
    ngOnInit() {
        this.setPaginator(this.noPage);
    }
    setPaginator(n) {
        var result = this.totalRecords / this.pageSize;
        var noItems = Math.trunc(result);
        noItems = noItems + ((result > noItems) ? 1 : 0);
        this.nItem = noItems;
        var lastItem = this.noItems[4];
        var firstItem = this.noItems[0];
        var init = 0;
        var last = 0;
        this.noItems = [];
        if (n == 1) {
            if (this.nItem > this.paginators) {
                init = 1;
                last = this.paginators + 1;
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        else {
            if (this.nItem > this.paginators) {
                if (this.nItem == lastItem) {
                    if (n == (lastItem - this.paginators + 1)) {
                        if (n > 1) {
                            init = firstItem - 1;
                            last = lastItem;
                        }
                        else {
                            init = 1;
                            last = this.paginators + 1;
                        }
                    }
                    else {
                        init = firstItem;
                        last = lastItem + 1;
                    }
                }
                else {
                    if (n == 1) {
                        init = 1;
                        last = this.paginators + 1;
                    }
                    else {
                        init = n - 1;
                        last = this.paginators + init;
                    }
                }
                if ((last - 1) > this.nItem) {
                    last = this.nItem + 1;
                    init = last - this.paginators;
                }
            }
            else {
                init = 1;
                last = this.nItem + 1;
            }
        }
        for (var i = init; i < last; i++) {
            this.noItems.push(i);
        }
    }
    changePage(n) {
        this.noPage = n;
        this.clickPage.emit(n);
    }
};
__decorate([
    Input()
], PaginationComponent.prototype, "totalRecords", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "noPage", void 0);
__decorate([
    Input()
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    Output()
], PaginationComponent.prototype, "clickPage", void 0);
PaginationComponent = __decorate([
    Component({
        selector: 'sml-table-footer-pagination',
        template: `
	<ul class="pagination">
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == 1 }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(1);">«</a>
  </li>
  <li *ngFor="let item of noItems" class="page-item"
    [ngClass]="{ 'active' : item == noPage, 'disabled' : item == noPage }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(item);">{{ item }}</a>
  </li>
  <li class="page-item" [ngClass]="{ 'disabled' : noPage == nItem }">
    <a class="page-link" style="cursor: pointer" (click)="changePage(nItem);">»</a>
  </li>
</ul>
	`,
        styles: [`.page-link{font-size:9pt !important}`]
    })
], PaginationComponent);
export { PaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2Zvb3Rlci9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBcUIvRSxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtJQVUvQjtRQUxVLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pDLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFFdkIsZUFBVSxHQUFXLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDakIsUUFBUTtRQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBQztRQUNiLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNyQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO2lCQUFNO2dCQUNOLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Q7YUFBTTtZQUNOLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO29CQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ1YsSUFBSSxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLElBQUksR0FBRyxRQUFRLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNOLElBQUksR0FBRyxDQUFDLENBQUM7NEJBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3lCQUMzQjtxQkFDRDt5QkFBTTt3QkFDTixJQUFJLEdBQUcsU0FBUyxDQUFDO3dCQUNqQixJQUFJLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Q7cUJBQU07b0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNYLElBQUksR0FBRyxDQUFDLENBQUM7d0JBQ1QsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjt5QkFBTTt3QkFDTixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDYixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7cUJBQzlCO2lCQUNEO2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO29CQUN0QixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzlCO2FBQ0Q7aUJBQU07Z0JBQ04sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FDRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDRixDQUFDO0lBQ0QsVUFBVSxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0QsQ0FBQTtBQXhFUztJQUFSLEtBQUssRUFBRTt5REFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7bURBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7cURBQWtCO0FBQ2hCO0lBQVQsTUFBTSxFQUFFO3NEQUFnQztBQUw3QixtQkFBbUI7SUFuQi9CLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7O0VBYVQ7aUJBQ1Esc0NBQXNDO0tBQy9DLENBQUM7R0FFVyxtQkFBbUIsQ0EwRS9CO1NBMUVZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc21sLXRhYmxlLWZvb3Rlci1wYWdpbmF0aW9uJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIj5cclxuICA8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiBbbmdDbGFzc109XCJ7ICdkaXNhYmxlZCcgOiBub1BhZ2UgPT0gMSB9XCI+XHJcbiAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2UoMSk7XCI+wqs8L2E+XHJcbiAgPC9saT5cclxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygbm9JdGVtc1wiIGNsYXNzPVwicGFnZS1pdGVtXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgJ2FjdGl2ZScgOiBpdGVtID09IG5vUGFnZSwgJ2Rpc2FibGVkJyA6IGl0ZW0gPT0gbm9QYWdlIH1cIj5cclxuICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiAoY2xpY2spPVwiY2hhbmdlUGFnZShpdGVtKTtcIj57eyBpdGVtIH19PC9hPlxyXG4gIDwvbGk+XHJcbiAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwieyAnZGlzYWJsZWQnIDogbm9QYWdlID09IG5JdGVtIH1cIj5cclxuICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiAoY2xpY2spPVwiY2hhbmdlUGFnZShuSXRlbSk7XCI+wrs8L2E+XHJcbiAgPC9saT5cclxuPC91bD5cclxuXHRgLFxyXG5cdHN0eWxlczogW2AucGFnZS1saW5re2ZvbnQtc2l6ZTo5cHQgIWltcG9ydGFudH1gXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHRASW5wdXQoKSB0b3RhbFJlY29yZHM6IG51bWJlcjtcclxuXHRASW5wdXQoKSBub1BhZ2U6IG51bWJlcjtcclxuXHRASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xyXG5cdEBPdXRwdXQoKSBjbGlja1BhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblx0bm9JdGVtczogbnVtYmVyW10gPSBbXTtcclxuXHRuSXRlbTogbnVtYmVyO1xyXG5cdHBhZ2luYXRvcnM6IG51bWJlciA9IDU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkgeyB9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0ICAgIHRoaXMuc2V0UGFnaW5hdG9yKHRoaXMubm9QYWdlKTtcclxuXHR9XHJcblxyXG5cdHNldFBhZ2luYXRvcihuKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gdGhpcy50b3RhbFJlY29yZHMgLyB0aGlzLnBhZ2VTaXplO1xyXG5cdFx0dmFyIG5vSXRlbXMgPSBNYXRoLnRydW5jKHJlc3VsdCk7XHJcblx0XHRub0l0ZW1zID0gbm9JdGVtcyArICgocmVzdWx0ID4gbm9JdGVtcykgPyAxIDogMCk7XHJcblx0XHR0aGlzLm5JdGVtID0gbm9JdGVtcztcclxuXHRcdHZhciBsYXN0SXRlbSA9IHRoaXMubm9JdGVtc1s0XTtcclxuXHRcdHZhciBmaXJzdEl0ZW0gPSB0aGlzLm5vSXRlbXNbMF07XHJcblx0XHR2YXIgaW5pdCA9IDA7XHJcblx0XHR2YXIgbGFzdCA9IDA7XHJcblx0XHR0aGlzLm5vSXRlbXMgPSBbXTtcclxuXHRcdGlmIChuID09IDEpIHtcclxuXHRcdFx0aWYgKHRoaXMubkl0ZW0gPiB0aGlzLnBhZ2luYXRvcnMpIHtcclxuXHRcdFx0XHRpbml0ID0gMTtcclxuXHRcdFx0XHRsYXN0ID0gdGhpcy5wYWdpbmF0b3JzICsgMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbml0ID0gMTtcclxuXHRcdFx0XHRsYXN0ID0gdGhpcy5uSXRlbSArIDE7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLm5JdGVtID4gdGhpcy5wYWdpbmF0b3JzKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubkl0ZW0gPT0gbGFzdEl0ZW0pIHtcclxuXHRcdFx0XHRcdGlmIChuID09IChsYXN0SXRlbSAtIHRoaXMucGFnaW5hdG9ycyArIDEpKSB7XHJcblx0XHRcdFx0XHRcdGlmIChuID4gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGluaXQgPSBmaXJzdEl0ZW0gLSAxO1xyXG5cdFx0XHRcdFx0XHRcdGxhc3QgPSBsYXN0SXRlbTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpbml0ID0gMTtcclxuXHRcdFx0XHRcdFx0XHRsYXN0ID0gdGhpcy5wYWdpbmF0b3JzICsgMTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aW5pdCA9IGZpcnN0SXRlbTtcclxuXHRcdFx0XHRcdFx0bGFzdCA9IGxhc3RJdGVtICsgMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKG4gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRpbml0ID0gMTtcclxuXHRcdFx0XHRcdFx0bGFzdCA9IHRoaXMucGFnaW5hdG9ycyArIDE7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRpbml0ID0gbiAtIDE7XHJcblx0XHRcdFx0XHRcdGxhc3QgPSB0aGlzLnBhZ2luYXRvcnMgKyBpbml0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoKGxhc3QgLSAxKSA+IHRoaXMubkl0ZW0pIHtcclxuXHRcdFx0XHRcdGxhc3QgPSB0aGlzLm5JdGVtICsgMTtcclxuXHRcdFx0XHRcdGluaXQgPSBsYXN0IC0gdGhpcy5wYWdpbmF0b3JzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpbml0ID0gMTtcclxuXHRcdFx0XHRsYXN0ID0gdGhpcy5uSXRlbSArIDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAodmFyIGkgPSBpbml0OyBpIDwgbGFzdDsgaSsrKSB7XHJcblx0XHRcdHRoaXMubm9JdGVtcy5wdXNoKGkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRjaGFuZ2VQYWdlKG4pIHtcclxuXHRcdHRoaXMubm9QYWdlID0gbjtcclxuXHRcdHRoaXMuY2xpY2tQYWdlLmVtaXQobik7XHJcblx0fVxyXG59XHJcbiJdfQ==