import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.width = '';
        this.minwidth = 700;
        this.maxwidth = '';
        this.includesearch = true;
        this.includecount = true;
        this.display = true;
        this.alignment = {};
        this.changerowcount = new EventEmitter;
        this.searchRecord = new EventEmitter;
        //##########RowCountDropdown################
        this.textObj = {
            name: 'search',
            placeholder: 'Search..',
            value: ''
        };
        this.drpObj = {
            drpDataList: [
                { id: '25', name: 'Show 25 entries' },
                { id: '50', name: 'Show 50 entries' },
                { id: '100', name: 'Show 100 entries' }
            ],
            selectedValue: '25',
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.changeRowDisplayCount = function (event) {
        this.changerowcount.emit(event);
    };
    HeaderComponent.prototype.searchClick = function (event) {
        this.searchRecord.emit(event);
    };
    __decorate([
        Input()
    ], HeaderComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "minwidth", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "maxwidth", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "includesearch", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "includecount", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "display", void 0);
    __decorate([
        Input()
    ], HeaderComponent.prototype, "alignment", void 0);
    __decorate([
        Output()
    ], HeaderComponent.prototype, "changerowcount", void 0);
    __decorate([
        Output()
    ], HeaderComponent.prototype, "searchRecord", void 0);
    HeaderComponent = __decorate([
        Component({
            selector: 'sml-table-header',
            template: "\n  <div>\n    <div class=\"row\" *ngIf=\"display\">\n        <div class=\"col-md-12\" *ngIf=\"alignment.searchposition != 'right' ||  alignment.show25 != 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}\">\n                <sml-table-header-search *ngIf=\"includesearch\" [name]=\"textObj.name\" [value]=\"textObj.value\"\n                    [placeholder]=\"textObj.placeholder\" (searchClick)=\"searchClick($event)\">\n                </sml-table-header-search>\n            </div>\n            <div class=\"dis-block\">\n                <ng-container *ngTemplateOutlet=\"headerReamaingContent\"></ng-container>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}\">\n                <sml-table-header-count *ngIf=\"includecount\" [listValue]=\"drpObj.drpDataList\" [value]=\"drpObj.selectedValue\"\n                    (changevalue)=\"changeRowDisplayCount($event)\"></sml-table-header-count>\n            </div>\n        </div>\n        <div class=\"col-md-12\" *ngIf=\"alignment.searchposition == 'right' &&  alignment.show25 == 'right'\">\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}\">\n                <sml-table-header-count *ngIf=\"includecount\" [listValue]=\"drpObj.drpDataList\" [value]=\"drpObj.selectedValue\"\n                    (changevalue)=\"changeRowDisplayCount($event)\"></sml-table-header-count>\n            </div>\n            <div class=\"dis-block\">\n                <ng-container *ngTemplateOutlet=\"headerReamaingContent\"></ng-container>\n            </div>\n            <div class=\"dis-block\"\n                [ngClass]=\"{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}\">\n                <sml-table-header-search *ngIf=\"includesearch\" [name]=\"textObj.name\" [value]=\"textObj.value\"\n                    [placeholder]=\"textObj.placeholder\" (searchClick)=\"searchClick($event)\">\n                </sml-table-header-search>\n            </div>\n        </div>\n    </div>\n</div>\n<ng-template #headerReamaingContent>\n    <ng-content></ng-content>\n</ng-template>\n  ",
            styles: ["\n    .dis-block{display: inline-block;min-width: 200px;}\n    .f-l{float: left;}\n    .f-r{float: right;}\n    .pl-5{padding-left: 5px !important;}\n    .pr-5{padding-right: 5px !important;}\n  "]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRC9FO0lBMEJJO1FBeEJTLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFRLEdBQUcsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFFMUMsNENBQTRDO1FBQzVDLFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLFVBQVU7WUFDdkIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFBO1FBQ0QsV0FBTSxHQUFHO1lBQ0wsV0FBVyxFQUFFO2dCQUNULEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3JDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3JDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7YUFDMUM7WUFDRCxhQUFhLEVBQUUsSUFBSTtTQUN0QixDQUFBO0lBQ2UsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNELCtDQUFxQixHQUFyQixVQUFzQixLQUFLO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxxQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFqQ1E7UUFBUixLQUFLLEVBQUU7a0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO3FEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtxREFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7MERBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO3lEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtvREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7c0RBQXFCO0lBQ25CO1FBQVQsTUFBTSxFQUFFOzJEQUFtQztJQUNsQztRQUFULE1BQU0sRUFBRTt5REFBaUM7SUFWakMsZUFBZTtRQXBEM0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsMm5GQXdDWDtxQkFDVSxxTUFNVjtTQUNGLENBQUM7T0FFVyxlQUFlLENBb0MzQjtJQUFELHNCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FwQ1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtdGFibGUtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gIT0gJ3JpZ2h0JyB8fCAgYWxpZ25tZW50LnNob3cyNSAhPSAncmlnaHQnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdyaWdodCcsJ3ByLTUnOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ3JpZ2h0J31cIj5cclxuICAgICAgICAgICAgICAgIDxzbWwtdGFibGUtaGVhZGVyLXNlYXJjaCAqbmdJZj1cImluY2x1ZGVzZWFyY2hcIiBbbmFtZV09XCJ0ZXh0T2JqLm5hbWVcIiBbdmFsdWVdPVwidGV4dE9iai52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRleHRPYmoucGxhY2Vob2xkZXJcIiAoc2VhcmNoQ2xpY2spPVwic2VhcmNoQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9zbWwtdGFibGUtaGVhZGVyLXNlYXJjaD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJSZWFtYWluZ0NvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNob3cyNSA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3cyNSA9PSAnbGVmdCcsJ2YtbCc6IGFsaWdubWVudC5zaG93MjUgPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2hvdzI1ID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWhlYWRlci1jb3VudCAqbmdJZj1cImluY2x1ZGVjb3VudFwiIFtsaXN0VmFsdWVdPVwiZHJwT2JqLmRycERhdGFMaXN0XCIgW3ZhbHVlXT1cImRycE9iai5zZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdldmFsdWUpPVwiY2hhbmdlUm93RGlzcGxheUNvdW50KCRldmVudClcIj48L3NtbC10YWJsZS1oZWFkZXItY291bnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIiAqbmdJZj1cImFsaWdubWVudC5zZWFyY2hwb3NpdGlvbiA9PSAncmlnaHQnICYmICBhbGlnbm1lbnQuc2hvdzI1ID09ICdyaWdodCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BsLTUnOiBhbGlnbm1lbnQuc2hvdzI1ID09ICdyaWdodCcsJ3ByLTUnOiBhbGlnbm1lbnQuc2hvdzI1ID09ICdsZWZ0JywnZi1sJzogYWxpZ25tZW50LnNob3cyNSA9PSAnbGVmdCcsJ2Ytcic6IGFsaWdubWVudC5zaG93MjUgPT0gJ3JpZ2h0J31cIj5cclxuICAgICAgICAgICAgICAgIDxzbWwtdGFibGUtaGVhZGVyLWNvdW50ICpuZ0lmPVwiaW5jbHVkZWNvdW50XCIgW2xpc3RWYWx1ZV09XCJkcnBPYmouZHJwRGF0YUxpc3RcIiBbdmFsdWVdPVwiZHJwT2JqLnNlbGVjdGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2V2YWx1ZSk9XCJjaGFuZ2VSb3dEaXNwbGF5Q291bnQoJGV2ZW50KVwiPjwvc21sLXRhYmxlLWhlYWRlci1jb3VudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJoZWFkZXJSZWFtYWluZ0NvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdyaWdodCcsJ3ByLTUnOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ3JpZ2h0J31cIj5cclxuICAgICAgICAgICAgICAgIDxzbWwtdGFibGUtaGVhZGVyLXNlYXJjaCAqbmdJZj1cImluY2x1ZGVzZWFyY2hcIiBbbmFtZV09XCJ0ZXh0T2JqLm5hbWVcIiBbdmFsdWVdPVwidGV4dE9iai52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInRleHRPYmoucGxhY2Vob2xkZXJcIiAoc2VhcmNoQ2xpY2spPVwic2VhcmNoQ2xpY2soJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPC9zbWwtdGFibGUtaGVhZGVyLXNlYXJjaD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxuZy10ZW1wbGF0ZSAjaGVhZGVyUmVhbWFpbmdDb250ZW50PlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAuZGlzLWJsb2Nre2Rpc3BsYXk6IGlubGluZS1ibG9jazttaW4td2lkdGg6IDIwMHB4O31cclxuICAgIC5mLWx7ZmxvYXQ6IGxlZnQ7fVxyXG4gICAgLmYtcntmbG9hdDogcmlnaHQ7fVxyXG4gICAgLnBsLTV7cGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDt9XHJcbiAgICAucHItNXtwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDt9XHJcbiAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHdpZHRoOiBhbnkgPSAnJztcclxuICAgIEBJbnB1dCgpIG1pbndpZHRoOiBhbnkgPSA3MDA7XHJcbiAgICBASW5wdXQoKSBtYXh3aWR0aDogYW55ID0gJyc7XHJcbiAgICBASW5wdXQoKSBpbmNsdWRlc2VhcmNoOiBhbnkgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgaW5jbHVkZWNvdW50OiBhbnkgPSB0cnVlO1xyXG4gICAgQElucHV0KCkgZGlzcGxheTogYW55ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGFsaWdubWVudDogYW55ID0ge307XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlcm93Y291bnQgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgQE91dHB1dCgpIHNlYXJjaFJlY29yZCA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgLy8jIyMjIyMjIyMjUm93Q291bnREcm9wZG93biMjIyMjIyMjIyMjIyMjIyNcclxuICAgIHRleHRPYmogPSB7XHJcbiAgICAgICAgbmFtZTogJ3NlYXJjaCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2guLicsXHJcbiAgICAgICAgdmFsdWU6ICcnXHJcbiAgICB9XHJcbiAgICBkcnBPYmogPSB7XHJcbiAgICAgICAgZHJwRGF0YUxpc3Q6IFtcclxuICAgICAgICAgICAgeyBpZDogJzI1JywgbmFtZTogJ1Nob3cgMjUgZW50cmllcycgfSxcclxuICAgICAgICAgICAgeyBpZDogJzUwJywgbmFtZTogJ1Nob3cgNTAgZW50cmllcycgfSxcclxuICAgICAgICAgICAgeyBpZDogJzEwMCcsIG5hbWU6ICdTaG93IDEwMCBlbnRyaWVzJyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWxlY3RlZFZhbHVlOiAnMjUnLFxyXG4gICAgfVxyXG4gICAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuICAgIGNoYW5nZVJvd0Rpc3BsYXlDb3VudChldmVudCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlcm93Y291bnQuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hDbGljayhldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUmVjb3JkLmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==