import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor() {
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
    ngOnInit() {
    }
    changeRowDisplayCount(event) {
        this.changerowcount.emit(event);
    }
    searchClick(event) {
        this.searchRecord.emit(event);
    }
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
        template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12" *ngIf="alignment.searchposition != 'right' ||  alignment.show25 != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
        </div>
        <div class="col-md-12" *ngIf="alignment.searchposition == 'right' &&  alignment.show25 == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.show25 == 'right','pr-5': alignment.show25 == 'left','f-l': alignment.show25 == 'left','f-r': alignment.show25 == 'right'}">
                <sml-table-header-count *ngIf="includecount" [listValue]="drpObj.drpDataList" [value]="drpObj.selectedValue"
                    (changevalue)="changeRowDisplayCount($event)"></sml-table-header-count>
            </div>
            <div class="dis-block">
                <ng-container *ngTemplateOutlet="headerReamaingContent"></ng-container>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.searchposition == 'right','pr-5': alignment.searchposition == 'left','f-l': alignment.searchposition == 'left','f-r': alignment.searchposition == 'right'}">
                <sml-table-header-search *ngIf="includesearch" [name]="textObj.name" [value]="textObj.value"
                    [placeholder]="textObj.placeholder" (searchClick)="searchClick($event)">
                </sml-table-header-search>
            </div>
        </div>
    </div>
</div>
<ng-template #headerReamaingContent>
    <ng-content></ng-content>
</ng-template>
  `,
        styles: [`
    .dis-block{display: inline-block;min-width: 200px;}
    .f-l{float: left;}
    .f-r{float: right;}
    .pl-5{padding-left: 5px !important;}
    .pr-5{padding-right: 5px !important;}
  `]
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRC9FLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUEwQnhCO1FBeEJTLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFRLEdBQUcsQ0FBQztRQUNwQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLFlBQU8sR0FBUSxJQUFJLENBQUM7UUFDcEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixtQkFBYyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQ2xDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFFMUMsNENBQTRDO1FBQzVDLFlBQU8sR0FBRztZQUNOLElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLFVBQVU7WUFDdkIsS0FBSyxFQUFFLEVBQUU7U0FDWixDQUFBO1FBQ0QsV0FBTSxHQUFHO1lBQ0wsV0FBVyxFQUFFO2dCQUNULEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3JDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7Z0JBQ3JDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7YUFDMUM7WUFDRCxhQUFhLEVBQUUsSUFBSTtTQUN0QixDQUFBO0lBQ2UsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUNELHFCQUFxQixDQUFDLEtBQUs7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUNKLENBQUE7QUFsQ1k7SUFBUixLQUFLLEVBQUU7OENBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO2lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtpREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7c0RBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO3FEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTtnREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7a0RBQXFCO0FBQ25CO0lBQVQsTUFBTSxFQUFFO3VEQUFtQztBQUNsQztJQUFULE1BQU0sRUFBRTtxREFBaUM7QUFWakMsZUFBZTtJQXBEM0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Q1g7aUJBQ1U7Ozs7OztHQU1WO0tBQ0YsQ0FBQztHQUVXLGVBQWUsQ0FvQzNCO1NBcENZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc21sLXRhYmxlLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiICpuZ0lmPVwiYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uICE9ICdyaWdodCcgfHwgIGFsaWdubWVudC5zaG93MjUgIT0gJ3JpZ2h0J1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zZWFyY2hwb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdsZWZ0JywnZi1sJzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWhlYWRlci1zZWFyY2ggKm5nSWY9XCJpbmNsdWRlc2VhcmNoXCIgW25hbWVdPVwidGV4dE9iai5uYW1lXCIgW3ZhbHVlXT1cInRleHRPYmoudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0ZXh0T2JqLnBsYWNlaG9sZGVyXCIgKHNlYXJjaENsaWNrKT1cInNlYXJjaENsaWNrKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvc21sLXRhYmxlLWhlYWRlci1zZWFyY2g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyUmVhbWFpbmdDb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zaG93MjUgPT0gJ3JpZ2h0JywncHItNSc6IGFsaWdubWVudC5zaG93MjUgPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2hvdzI1ID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNob3cyNSA9PSAncmlnaHQnfVwiPlxyXG4gICAgICAgICAgICAgICAgPHNtbC10YWJsZS1oZWFkZXItY291bnQgKm5nSWY9XCJpbmNsdWRlY291bnRcIiBbbGlzdFZhbHVlXT1cImRycE9iai5kcnBEYXRhTGlzdFwiIFt2YWx1ZV09XCJkcnBPYmouc2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZXZhbHVlKT1cImNoYW5nZVJvd0Rpc3BsYXlDb3VudCgkZXZlbnQpXCI+PC9zbWwtdGFibGUtaGVhZGVyLWNvdW50PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgKm5nSWY9XCJhbGlnbm1lbnQuc2VhcmNocG9zaXRpb24gPT0gJ3JpZ2h0JyAmJiAgYWxpZ25tZW50LnNob3cyNSA9PSAncmlnaHQnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNob3cyNSA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3cyNSA9PSAnbGVmdCcsJ2YtbCc6IGFsaWdubWVudC5zaG93MjUgPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2hvdzI1ID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWhlYWRlci1jb3VudCAqbmdJZj1cImluY2x1ZGVjb3VudFwiIFtsaXN0VmFsdWVdPVwiZHJwT2JqLmRycERhdGFMaXN0XCIgW3ZhbHVlXT1cImRycE9iai5zZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdldmFsdWUpPVwiY2hhbmdlUm93RGlzcGxheUNvdW50KCRldmVudClcIj48L3NtbC10YWJsZS1oZWFkZXItY291bnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaGVhZGVyUmVhbWFpbmdDb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zZWFyY2hwb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdsZWZ0JywnZi1sJzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNlYXJjaHBvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWhlYWRlci1zZWFyY2ggKm5nSWY9XCJpbmNsdWRlc2VhcmNoXCIgW25hbWVdPVwidGV4dE9iai5uYW1lXCIgW3ZhbHVlXT1cInRleHRPYmoudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJ0ZXh0T2JqLnBsYWNlaG9sZGVyXCIgKHNlYXJjaENsaWNrKT1cInNlYXJjaENsaWNrKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvc21sLXRhYmxlLWhlYWRlci1zZWFyY2g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgI2hlYWRlclJlYW1haW5nQ29udGVudD5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgLmRpcy1ibG9ja3tkaXNwbGF5OiBpbmxpbmUtYmxvY2s7bWluLXdpZHRoOiAyMDBweDt9XHJcbiAgICAuZi1se2Zsb2F0OiBsZWZ0O31cclxuICAgIC5mLXJ7ZmxvYXQ6IHJpZ2h0O31cclxuICAgIC5wbC01e3BhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgLnByLTV7cGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7fVxyXG4gIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSB3aWR0aDogYW55ID0gJyc7XHJcbiAgICBASW5wdXQoKSBtaW53aWR0aDogYW55ID0gNzAwO1xyXG4gICAgQElucHV0KCkgbWF4d2lkdGg6IGFueSA9ICcnO1xyXG4gICAgQElucHV0KCkgaW5jbHVkZXNlYXJjaDogYW55ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGluY2x1ZGVjb3VudDogYW55ID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGRpc3BsYXk6IGFueSA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBhbGlnbm1lbnQ6IGFueSA9IHt9O1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZXJvd2NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICAgIEBPdXRwdXQoKSBzZWFyY2hSZWNvcmQgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIC8vIyMjIyMjIyMjI1Jvd0NvdW50RHJvcGRvd24jIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB0ZXh0T2JqID0ge1xyXG4gICAgICAgIG5hbWU6ICdzZWFyY2gnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoLi4nLFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfVxyXG4gICAgZHJwT2JqID0ge1xyXG4gICAgICAgIGRycERhdGFMaXN0OiBbXHJcbiAgICAgICAgICAgIHsgaWQ6ICcyNScsIG5hbWU6ICdTaG93IDI1IGVudHJpZXMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICc1MCcsIG5hbWU6ICdTaG93IDUwIGVudHJpZXMnIH0sXHJcbiAgICAgICAgICAgIHsgaWQ6ICcxMDAnLCBuYW1lOiAnU2hvdyAxMDAgZW50cmllcycgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZTogJzI1JyxcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VSb3dEaXNwbGF5Q291bnQoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZXJvd2NvdW50LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFJlY29yZC5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=