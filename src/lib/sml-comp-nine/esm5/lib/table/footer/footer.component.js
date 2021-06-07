import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includepagecount = true;
        this.includepagination = true;
        this.display = true;
        this.totalcount = 0;
        this.recordcount = 0;
        this.pagesize = 0;
        this.page = 1;
        this.alignment = {};
        this.changepage = new EventEmitter();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.pageNumberUpdate = function (event) {
        this.changepage.emit(event);
    };
    __decorate([
        Input()
    ], FooterComponent.prototype, "obj", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "minwidth", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "maxwidth", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "includepagecount", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "includepagination", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "display", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "totalcount", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "recordcount", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "pagesize", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "page", void 0);
    __decorate([
        Input()
    ], FooterComponent.prototype, "alignment", void 0);
    __decorate([
        Output()
    ], FooterComponent.prototype, "changepage", void 0);
    FooterComponent = __decorate([
        Component({
            selector: 'sml-table-footer',
            template: "\n  <div>\n    <div class=\"row\" *ngIf=\"display\">\n        <div class=\"col-md-12\"\n            *ngIf=\"alignment.showposition != 'right' ||  alignment.showpaginationposition != 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}\">\n                <div *ngIf=\"includepagecount\" class=\"pt-8\" style=\"font-size:9pt;\">\n                    Showing {{recordcount}} of {{totalcount}}\n                </div>\n            </div>\n            <div class=\"dis-block\">\n                <ng-content></ng-content>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}\">\n                <sml-table-footer-pagination *ngIf=\"includepagination && totalcount > recordcount && totalcount > 0\"\n                    [noPage]=\"page\" [totalRecords]=\"totalcount\" [pageSize]=\"pagesize\"\n                    (clickPage)=\"pageNumberUpdate($event)\">\n                </sml-table-footer-pagination>\n            </div>\n        </div>\n        <div class=\"col-md-12\"\n            *ngIf=\"alignment.showposition == 'right' &&  alignment.showpaginationposition == 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}\">\n                <sml-table-footer-pagination *ngIf=\"includepagination && totalcount > recordcount && totalcount > 0\"\n                    [noPage]=\"page\" [totalRecords]=\"totalcount\" [pageSize]=\"pagesize\"\n                    (clickPage)=\"pageNumberUpdate($event)\">\n                </sml-table-footer-pagination>\n            </div>\n            <div class=\"dis-block\">\n                <ng-content></ng-content>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}\">\n                <div *ngIf=\"includepagecount\" class=\"pt-8\">\n                    Showing {{recordcount}} of {{totalcount}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n  ",
            styles: ["\n  .dis-block{\n    display: inline-block;\n}\n.f-l{\n    float: left;\n}\n.f-r{\n    float: right;\n}\n.pt-8{\n    padding-top: 8px;\n}\n.pl-5{\n    padding-left: 5px !important;\n}\n.pr-5{\n    padding-right: 5px !important;\n}\n  "]
        })
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRS9FO0lBZ0JFO1FBYlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVEsR0FBRyxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVEsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFRLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQU8sSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFRLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQVEsQ0FBQyxDQUFDO1FBQ2QsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRWpCLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXJCUTtRQUFSLEtBQUssRUFBRTtnREFBSztJQUNKO1FBQVIsS0FBSyxFQUFFO2tEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtxREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7cURBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzZEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTs4REFBK0I7SUFDOUI7UUFBUixLQUFLLEVBQUU7b0RBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3VEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTt3REFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7cURBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO2lEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7c0RBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFO3VEQUFpQztJQWQvQixlQUFlO1FBcEUzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxtbkZBMkNUO3FCQUNRLDRPQW1CUjtTQUNGLENBQUM7T0FFVyxlQUFlLENBeUIzQjtJQUFELHNCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXRhYmxlLWZvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImFsaWdubWVudC5zaG93cG9zaXRpb24gIT0gJ3JpZ2h0JyB8fCAgYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gIT0gJ3JpZ2h0J1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ3JpZ2h0JywncHItNSc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2hvd3Bvc2l0aW9uID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAncmlnaHQnfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImluY2x1ZGVwYWdlY291bnRcIiBjbGFzcz1cInB0LThcIiBzdHlsZT1cImZvbnQtc2l6ZTo5cHQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2hvd2luZyB7e3JlY29yZGNvdW50fX0gb2Yge3t0b3RhbGNvdW50fX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcy1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BsLTUnOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAnbGVmdCcsJ2Ytcic6IGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWZvb3Rlci1wYWdpbmF0aW9uICpuZ0lmPVwiaW5jbHVkZXBhZ2luYXRpb24gJiYgdG90YWxjb3VudCA+IHJlY29yZGNvdW50ICYmIHRvdGFsY291bnQgPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbm9QYWdlXT1cInBhZ2VcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsY291bnRcIiBbcGFnZVNpemVdPVwicGFnZXNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGlja1BhZ2UpPVwicGFnZU51bWJlclVwZGF0ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3NtbC10YWJsZS1mb290ZXItcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAncmlnaHQnICYmICBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAncmlnaHQnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gPT0gJ3JpZ2h0JywncHItNSc6IGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdsZWZ0JywnZi1sJzogYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAncmlnaHQnfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtbC10YWJsZS1mb290ZXItcGFnaW5hdGlvbiAqbmdJZj1cImluY2x1ZGVwYWdpbmF0aW9uICYmIHRvdGFsY291bnQgPiByZWNvcmRjb3VudCAmJiB0b3RhbGNvdW50ID4gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25vUGFnZV09XCJwYWdlXCIgW3RvdGFsUmVjb3Jkc109XCJ0b3RhbGNvdW50XCIgW3BhZ2VTaXplXT1cInBhZ2VzaXplXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2tQYWdlKT1cInBhZ2VOdW1iZXJVcGRhdGUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9zbWwtdGFibGUtZm9vdGVyLXBhZ2luYXRpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ3JpZ2h0JywncHItNSc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2hvd3Bvc2l0aW9uID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAncmlnaHQnfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImluY2x1ZGVwYWdlY291bnRcIiBjbGFzcz1cInB0LThcIj5cclxuICAgICAgICAgICAgICAgICAgICBTaG93aW5nIHt7cmVjb3JkY291bnR9fSBvZiB7e3RvdGFsY291bnR9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5kaXMtYmxvY2t7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmYtbHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5mLXJ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnB0LTh7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG59XHJcbi5wbC01e1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4ucHItNXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbiAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvYmo7XHJcbiAgQElucHV0KCkgd2lkdGg6IGFueSA9ICcnO1xyXG4gIEBJbnB1dCgpIG1pbndpZHRoOiBhbnkgPSA3MDA7XHJcbiAgQElucHV0KCkgbWF4d2lkdGg6IGFueSA9ICcnO1xyXG4gIEBJbnB1dCgpIGluY2x1ZGVwYWdlY291bnQ6IGFueSA9IHRydWU7XHJcbiAgQElucHV0KCkgaW5jbHVkZXBhZ2luYXRpb246IGFueSA9IHRydWU7XHJcbiAgQElucHV0KCkgZGlzcGxheTphbnkgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHRvdGFsY291bnQ6IGFueSA9IDA7XHJcbiAgQElucHV0KCkgcmVjb3JkY291bnQ6IGFueSA9IDA7XHJcbiAgQElucHV0KCkgcGFnZXNpemU6IGFueSA9IDA7XHJcbiAgQElucHV0KCkgcGFnZTogYW55ID0gMTtcclxuICBASW5wdXQoKSBhbGlnbm1lbnQ6IGFueSA9IHt9O1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2VwYWdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIHBhZ2VOdW1iZXJVcGRhdGUoZXZlbnQpIHtcclxuICAgIHRoaXMuY2hhbmdlcGFnZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==