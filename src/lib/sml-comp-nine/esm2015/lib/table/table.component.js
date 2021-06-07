import { __decorate } from "tslib";
import { Component, OnInit, Input, ElementRef } from '@angular/core';
let TableComponent = class TableComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.obj = { border: 0 };
        this.id = 'sml-datatable';
        this.width = '';
        this.height = '';
        this.minwidth = 700;
        this.isfixedheight = false;
        this.scrollX = false;
        this.screenWidth = 0;
    }
    ngOnInit() {
        this.interSmlTable = setInterval(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }
    ngOnDestroy() {
        if (this.interSmlTable) {
            clearInterval(this.interSmlTable);
        }
    }
    onResize(event) {
        let width = $('.' + this.id).width();
        this.screenWidth = $('.' + this.id).width();
        this.width = width;
        let t_height = $("#y-" + this.id).height();
        if (t_height < 90) {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'inherit');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'inherit');
        }
        else {
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-nonhideen', 'hidden');
            this.elementRef.nativeElement.style.setProperty('--c-scroll-value-hideen', 'overlay');
        }
    }
};
TableComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TableComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableComponent.prototype, "isfixedheight", void 0);
__decorate([
    Input()
], TableComponent.prototype, "scrollX", void 0);
TableComponent = __decorate([
    Component({
        selector: 'sml-table',
        template: `
  <div class="table-100 {{id}}">
	<div>
		<ng-content select="sml-table-header"></ng-content>
  </div>
  <div id="x-{{id}}" [ngStyle]="{'width': screenWidth + 'px', 'overflow-x' : scrollX ? 'auto' : 'none' }" >
	<table class="table table-bordered h-auto" [ngClass]="{'over-flow': !isfixedheight}"
		[style.width]="width + 'px'" [style.max-height]="height + 'px'" border="{{obj?.border}}">
		<thead>
			<tr>
				<ng-content select="sml-table-column"></ng-content>
			</tr>
		</thead>
		<tbody id="y-{{id}}"  class="h-auto sml-table-scroll-y" [style.max-height]="height + 'px'">
			<ng-content select="sml-table-body"></ng-content>
		</tbody>
  </table>
  </div>
	<div>
		<ng-content select="sml-table-footer"></ng-content>
	</div>
</div>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  :host{--c-scroll-value-nonhideen:'hidden';--c-scroll-value-hideen:'overlay';}
  :host /deep/ sml-table-column{display:contents;}
  :host /deep/ sml-table-body{display:contents;}
  :host /deep/ sml-table-footer-pagination{float:right;}
  .over-flow{overflow:hidden !important;}
  .table-bordered{border-bottom:1px solid #dee2e6 !important;border-top:none !important;border-left:none !important;border-right:none !important;}
   thead{display:block;}
   tbody{display:block;}
  .table-100{width:100%;}
  .h-auto{height:auto !important;}
  .sml-table-scroll-y{overflow-y:var(--c-scroll-value-nonhideen);overflow-x:var(--c-scroll-value-nonhideen);}
  .sml-table-scroll-y:hover{overflow-y:var(--c-scroll-value-hideen);}
  .sml-table-scroll-y::-webkit-scrollbar{width:8px;background-color:#fbfbfb;}
  .sml-table-scroll-y::-webkit-scrollbar-track{width:3px;background:rgba(222, 222, 222, .75);}
  .sml-table-scroll-y::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, .5);border-radius:4px;}
  `]
    })
], TableComponent);
export { TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpRHJFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFVekIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVRqQyxRQUFHLEdBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDekIsT0FBRSxHQUFRLGVBQWUsQ0FBQztRQUMxQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEdBQUcsQ0FBQztRQUNwQixrQkFBYSxHQUFRLEtBQUssQ0FBQztRQUMzQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQzlCLGdCQUFXLEdBQVEsQ0FBQyxDQUFDO0lBRXlCLENBQUM7SUFDL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNwQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFDRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsNEJBQTRCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN2RjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN4RixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBeEJpQyxVQUFVOztBQVRqQztJQUFSLEtBQUssRUFBRTsyQ0FBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7MENBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFOzZDQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTs4Q0FBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7Z0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3FEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTsrQ0FBc0I7QUFQbkIsY0FBYztJQS9DMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO1FBa0JELElBQUksRUFBRTtZQUNKLGlCQUFpQixFQUFFLGtCQUFrQjtTQUN0QztpQkFuQlE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlI7S0FJRixDQUFDO0dBRVcsY0FBYyxDQWtDMUI7U0FsQ1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtdGFibGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInRhYmxlLTEwMCB7e2lkfX1cIj5cclxuXHQ8ZGl2PlxyXG5cdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwic21sLXRhYmxlLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGlkPVwieC17e2lkfX1cIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogc2NyZWVuV2lkdGggKyAncHgnLCAnb3ZlcmZsb3cteCcgOiBzY3JvbGxYID8gJ2F1dG8nIDogJ25vbmUnIH1cIiA+XHJcblx0PHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWQgaC1hdXRvXCIgW25nQ2xhc3NdPVwieydvdmVyLWZsb3cnOiAhaXNmaXhlZGhlaWdodH1cIlxyXG5cdFx0W3N0eWxlLndpZHRoXT1cIndpZHRoICsgJ3B4J1wiIFtzdHlsZS5tYXgtaGVpZ2h0XT1cImhlaWdodCArICdweCdcIiBib3JkZXI9XCJ7e29iaj8uYm9yZGVyfX1cIj5cclxuXHRcdDx0aGVhZD5cclxuXHRcdFx0PHRyPlxyXG5cdFx0XHRcdDxuZy1jb250ZW50IHNlbGVjdD1cInNtbC10YWJsZS1jb2x1bW5cIj48L25nLWNvbnRlbnQ+XHJcblx0XHRcdDwvdHI+XHJcblx0XHQ8L3RoZWFkPlxyXG5cdFx0PHRib2R5IGlkPVwieS17e2lkfX1cIiAgY2xhc3M9XCJoLWF1dG8gc21sLXRhYmxlLXNjcm9sbC15XCIgW3N0eWxlLm1heC1oZWlnaHRdPVwiaGVpZ2h0ICsgJ3B4J1wiPlxyXG5cdFx0XHQ8bmctY29udGVudCBzZWxlY3Q9XCJzbWwtdGFibGUtYm9keVwiPjwvbmctY29udGVudD5cclxuXHRcdDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuXHQ8ZGl2PlxyXG5cdFx0PG5nLWNvbnRlbnQgc2VsZWN0PVwic21sLXRhYmxlLWZvb3RlclwiPjwvbmctY29udGVudD5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgOmhvc3R7LS1jLXNjcm9sbC12YWx1ZS1ub25oaWRlZW46J2hpZGRlbic7LS1jLXNjcm9sbC12YWx1ZS1oaWRlZW46J292ZXJsYXknO31cclxuICA6aG9zdCAvZGVlcC8gc21sLXRhYmxlLWNvbHVtbntkaXNwbGF5OmNvbnRlbnRzO31cclxuICA6aG9zdCAvZGVlcC8gc21sLXRhYmxlLWJvZHl7ZGlzcGxheTpjb250ZW50czt9XHJcbiAgOmhvc3QgL2RlZXAvIHNtbC10YWJsZS1mb290ZXItcGFnaW5hdGlvbntmbG9hdDpyaWdodDt9XHJcbiAgLm92ZXItZmxvd3tvdmVyZmxvdzpoaWRkZW4gIWltcG9ydGFudDt9XHJcbiAgLnRhYmxlLWJvcmRlcmVke2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtib3JkZXItbGVmdDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0Om5vbmUgIWltcG9ydGFudDt9XHJcbiAgIHRoZWFke2Rpc3BsYXk6YmxvY2s7fVxyXG4gICB0Ym9keXtkaXNwbGF5OmJsb2NrO31cclxuICAudGFibGUtMTAwe3dpZHRoOjEwMCU7fVxyXG4gIC5oLWF1dG97aGVpZ2h0OmF1dG8gIWltcG9ydGFudDt9XHJcbiAgLnNtbC10YWJsZS1zY3JvbGwteXtvdmVyZmxvdy15OnZhcigtLWMtc2Nyb2xsLXZhbHVlLW5vbmhpZGVlbik7b3ZlcmZsb3cteDp2YXIoLS1jLXNjcm9sbC12YWx1ZS1ub25oaWRlZW4pO31cclxuICAuc21sLXRhYmxlLXNjcm9sbC15OmhvdmVye292ZXJmbG93LXk6dmFyKC0tYy1zY3JvbGwtdmFsdWUtaGlkZWVuKTt9XHJcbiAgLnNtbC10YWJsZS1zY3JvbGwteTo6LXdlYmtpdC1zY3JvbGxiYXJ7d2lkdGg6OHB4O2JhY2tncm91bmQtY29sb3I6I2ZiZmJmYjt9XHJcbiAgLnNtbC10YWJsZS1zY3JvbGwteTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7d2lkdGg6M3B4O2JhY2tncm91bmQ6cmdiYSgyMjIsIDIyMiwgMjIyLCAuNzUpO31cclxuICAuc21sLXRhYmxlLXNjcm9sbC15Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgLjUpO2JvcmRlci1yYWRpdXM6NHB4O31cclxuICBgXSxcclxuICBob3N0OiB7XHJcbiAgICAnKHdpbmRvdzpyZXNpemUpJzogJ29uUmVzaXplKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBvYmo6IGFueSA9IHsgYm9yZGVyOiAwIH07XHJcbiAgQElucHV0KCkgaWQ6IGFueSA9ICdzbWwtZGF0YXRhYmxlJztcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBtaW53aWR0aDogYW55ID0gNzAwO1xyXG4gIEBJbnB1dCgpIGlzZml4ZWRoZWlnaHQ6IGFueSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNjcm9sbFg6IGFueSA9IGZhbHNlO1xyXG4gIHNjcmVlbldpZHRoOiBhbnkgPSAwO1xyXG4gIGludGVyU21sVGFibGU6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbnRlclNtbFRhYmxlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuaW50ZXJTbWxUYWJsZSkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJTbWxUYWJsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICBsZXQgd2lkdGggPSAkKCcuJyArIHRoaXMuaWQpLndpZHRoKCk7XHJcbiAgICB0aGlzLnNjcmVlbldpZHRoID0gJCgnLicgKyB0aGlzLmlkKS53aWR0aCgpO1xyXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgbGV0IHRfaGVpZ2h0ID0gJChcIiN5LVwiICsgdGhpcy5pZCkuaGVpZ2h0KCk7XHJcbiAgICBpZiAodF9oZWlnaHQgPCA5MCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXNjcm9sbC12YWx1ZS1ub25oaWRlZW4nLCAnaW5oZXJpdCcpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXNjcm9sbC12YWx1ZS1oaWRlZW4nLCAnaW5oZXJpdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1zY3JvbGwtdmFsdWUtbm9uaGlkZWVuJywgJ2hpZGRlbicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXNjcm9sbC12YWx1ZS1oaWRlZW4nLCAnb3ZlcmxheScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=