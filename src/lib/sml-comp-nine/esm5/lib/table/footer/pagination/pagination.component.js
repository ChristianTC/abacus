import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.clickPage = new EventEmitter();
        this.noItems = [];
        this.paginators = 5;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.setPaginator(this.noPage);
    };
    PaginationComponent.prototype.setPaginator = function (n) {
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
    };
    PaginationComponent.prototype.changePage = function (n) {
        this.noPage = n;
        this.clickPage.emit(n);
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
            template: "\n\t<ul class=\"pagination\">\n  <li class=\"page-item\" [ngClass]=\"{ 'disabled' : noPage == 1 }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(1);\">\u00AB</a>\n  </li>\n  <li *ngFor=\"let item of noItems\" class=\"page-item\"\n    [ngClass]=\"{ 'active' : item == noPage, 'disabled' : item == noPage }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(item);\">{{ item }}</a>\n  </li>\n  <li class=\"page-item\" [ngClass]=\"{ 'disabled' : noPage == nItem }\">\n    <a class=\"page-link\" style=\"cursor: pointer\" (click)=\"changePage(nItem);\">\u00BB</a>\n  </li>\n</ul>\n\t",
            styles: [".page-link{font-size:9pt !important}"]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
export { PaginationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2Zvb3Rlci9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBcUIvRTtJQVVDO1FBTFUsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUV2QixlQUFVLEdBQVcsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUNqQixzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxDQUFDO1FBQ2IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDdEI7U0FDRDthQUFNO1lBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDVixJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxHQUFHLFFBQVEsQ0FBQzt5QkFDaEI7NkJBQU07NEJBQ04sSUFBSSxHQUFHLENBQUMsQ0FBQzs0QkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7eUJBQzNCO3FCQUNEO3lCQUFNO3dCQUNOLElBQUksR0FBRyxTQUFTLENBQUM7d0JBQ2pCLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQjtpQkFDRDtxQkFBTTtvQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ1gsSUFBSSxHQUFHLENBQUMsQ0FBQzt3QkFDVCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7cUJBQzNCO3lCQUFNO3dCQUNOLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztxQkFDOUI7aUJBQ0Q7Z0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUM1QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3RCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDOUI7YUFDRDtpQkFBTTtnQkFDTixJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNULElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUN0QjtTQUNEO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtJQUNGLENBQUM7SUFDRCx3Q0FBVSxHQUFWLFVBQVcsQ0FBQztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUF2RVE7UUFBUixLQUFLLEVBQUU7NkRBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3VEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3lEQUFrQjtJQUNoQjtRQUFULE1BQU0sRUFBRTswREFBZ0M7SUFMN0IsbUJBQW1CO1FBbkIvQixTQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFFBQVEsRUFBRSwrbkJBYVQ7cUJBQ1Esc0NBQXNDO1NBQy9DLENBQUM7T0FFVyxtQkFBbUIsQ0EwRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTFFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC10YWJsZS1mb290ZXItcGFnaW5hdGlvbicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XHJcbiAgPGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwieyAnZGlzYWJsZWQnIDogbm9QYWdlID09IDEgfVwiPlxyXG4gICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIChjbGljayk9XCJjaGFuZ2VQYWdlKDEpO1wiPsKrPC9hPlxyXG4gIDwvbGk+XHJcbiAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5vSXRlbXNcIiBjbGFzcz1cInBhZ2UtaXRlbVwiXHJcbiAgICBbbmdDbGFzc109XCJ7ICdhY3RpdmUnIDogaXRlbSA9PSBub1BhZ2UsICdkaXNhYmxlZCcgOiBpdGVtID09IG5vUGFnZSB9XCI+XHJcbiAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2UoaXRlbSk7XCI+e3sgaXRlbSB9fTwvYT5cclxuICA8L2xpPlxyXG4gIDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIFtuZ0NsYXNzXT1cInsgJ2Rpc2FibGVkJyA6IG5vUGFnZSA9PSBuSXRlbSB9XCI+XHJcbiAgICA8YSBjbGFzcz1cInBhZ2UtbGlua1wiIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyXCIgKGNsaWNrKT1cImNoYW5nZVBhZ2Uobkl0ZW0pO1wiPsK7PC9hPlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgLnBhZ2UtbGlua3tmb250LXNpemU6OXB0ICFpbXBvcnRhbnR9YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgdG90YWxSZWNvcmRzOiBudW1iZXI7XHJcblx0QElucHV0KCkgbm9QYWdlOiBudW1iZXI7XHJcblx0QElucHV0KCkgcGFnZVNpemU6IG51bWJlcjtcclxuXHRAT3V0cHV0KCkgY2xpY2tQYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdG5vSXRlbXM6IG51bWJlcltdID0gW107XHJcblx0bkl0ZW06IG51bWJlcjtcclxuXHRwYWdpbmF0b3JzOiBudW1iZXIgPSA1O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdCAgICB0aGlzLnNldFBhZ2luYXRvcih0aGlzLm5vUGFnZSk7XHJcblx0fVxyXG5cclxuXHRzZXRQYWdpbmF0b3Iobikge1xyXG5cdFx0dmFyIHJlc3VsdCA9IHRoaXMudG90YWxSZWNvcmRzIC8gdGhpcy5wYWdlU2l6ZTtcclxuXHRcdHZhciBub0l0ZW1zID0gTWF0aC50cnVuYyhyZXN1bHQpO1xyXG5cdFx0bm9JdGVtcyA9IG5vSXRlbXMgKyAoKHJlc3VsdCA+IG5vSXRlbXMpID8gMSA6IDApO1xyXG5cdFx0dGhpcy5uSXRlbSA9IG5vSXRlbXM7XHJcblx0XHR2YXIgbGFzdEl0ZW0gPSB0aGlzLm5vSXRlbXNbNF07XHJcblx0XHR2YXIgZmlyc3RJdGVtID0gdGhpcy5ub0l0ZW1zWzBdO1xyXG5cdFx0dmFyIGluaXQgPSAwO1xyXG5cdFx0dmFyIGxhc3QgPSAwO1xyXG5cdFx0dGhpcy5ub0l0ZW1zID0gW107XHJcblx0XHRpZiAobiA9PSAxKSB7XHJcblx0XHRcdGlmICh0aGlzLm5JdGVtID4gdGhpcy5wYWdpbmF0b3JzKSB7XHJcblx0XHRcdFx0aW5pdCA9IDE7XHJcblx0XHRcdFx0bGFzdCA9IHRoaXMucGFnaW5hdG9ycyArIDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW5pdCA9IDE7XHJcblx0XHRcdFx0bGFzdCA9IHRoaXMubkl0ZW0gKyAxO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5uSXRlbSA+IHRoaXMucGFnaW5hdG9ycykge1xyXG5cdFx0XHRcdGlmICh0aGlzLm5JdGVtID09IGxhc3RJdGVtKSB7XHJcblx0XHRcdFx0XHRpZiAobiA9PSAobGFzdEl0ZW0gLSB0aGlzLnBhZ2luYXRvcnMgKyAxKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAobiA+IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRpbml0ID0gZmlyc3RJdGVtIC0gMTtcclxuXHRcdFx0XHRcdFx0XHRsYXN0ID0gbGFzdEl0ZW07XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0aW5pdCA9IDE7XHJcblx0XHRcdFx0XHRcdFx0bGFzdCA9IHRoaXMucGFnaW5hdG9ycyArIDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGluaXQgPSBmaXJzdEl0ZW07XHJcblx0XHRcdFx0XHRcdGxhc3QgPSBsYXN0SXRlbSArIDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChuID09IDEpIHtcclxuXHRcdFx0XHRcdFx0aW5pdCA9IDE7XHJcblx0XHRcdFx0XHRcdGxhc3QgPSB0aGlzLnBhZ2luYXRvcnMgKyAxO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aW5pdCA9IG4gLSAxO1xyXG5cdFx0XHRcdFx0XHRsYXN0ID0gdGhpcy5wYWdpbmF0b3JzICsgaW5pdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKChsYXN0IC0gMSkgPiB0aGlzLm5JdGVtKSB7XHJcblx0XHRcdFx0XHRsYXN0ID0gdGhpcy5uSXRlbSArIDE7XHJcblx0XHRcdFx0XHRpbml0ID0gbGFzdCAtIHRoaXMucGFnaW5hdG9ycztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aW5pdCA9IDE7XHJcblx0XHRcdFx0bGFzdCA9IHRoaXMubkl0ZW0gKyAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmb3IgKHZhciBpID0gaW5pdDsgaSA8IGxhc3Q7IGkrKykge1xyXG5cdFx0XHR0aGlzLm5vSXRlbXMucHVzaChpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2hhbmdlUGFnZShuKSB7XHJcblx0XHR0aGlzLm5vUGFnZSA9IG47XHJcblx0XHR0aGlzLmNsaWNrUGFnZS5lbWl0KG4pO1xyXG5cdH1cclxufVxyXG4iXX0=