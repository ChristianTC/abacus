import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FooterComponent = class FooterComponent {
    constructor() {
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
    ngOnInit() {
    }
    pageNumberUpdate(event) {
        this.changepage.emit(event);
    }
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
        template: `
  <div>
    <div class="row" *ngIf="display">
        <div class="col-md-12"
            *ngIf="alignment.showposition != 'right' ||  alignment.showpaginationposition != 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8" style="font-size:9pt;">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
        </div>
        <div class="col-md-12"
            *ngIf="alignment.showposition == 'right' &&  alignment.showpaginationposition == 'right'">
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showpaginationposition == 'right','pr-5': alignment.showpaginationposition == 'left','f-l': alignment.showpaginationposition == 'left','f-r': alignment.showpaginationposition == 'right'}">
                <sml-table-footer-pagination *ngIf="includepagination && totalcount > recordcount && totalcount > 0"
                    [noPage]="page" [totalRecords]="totalcount" [pageSize]="pagesize"
                    (clickPage)="pageNumberUpdate($event)">
                </sml-table-footer-pagination>
            </div>
            <div class="dis-block">
                <ng-content></ng-content>
            </div>
            <div class="dis-block"
                [ngClass]="{'pl-5': alignment.showposition == 'right','pr-5': alignment.showposition == 'left','f-l': alignment.showposition == 'left','f-r': alignment.showposition == 'right'}">
                <div *ngIf="includepagecount" class="pt-8">
                    Showing {{recordcount}} of {{totalcount}}
                </div>
            </div>
        </div>
    </div>
</div>
  `,
        styles: [`
  .dis-block{
    display: inline-block;
}
.f-l{
    float: left;
}
.f-r{
    float: right;
}
.pt-8{
    padding-top: 8px;
}
.pl-5{
    padding-left: 5px !important;
}
.pr-5{
    padding-right: 5px !important;
}
  `]
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFzRS9FLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFnQjFCO1FBYlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVEsR0FBRyxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIscUJBQWdCLEdBQVEsSUFBSSxDQUFDO1FBQzdCLHNCQUFpQixHQUFRLElBQUksQ0FBQztRQUM5QixZQUFPLEdBQU8sSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBUSxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBUSxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFRLENBQUMsQ0FBQztRQUNsQixTQUFJLEdBQVEsQ0FBQyxDQUFDO1FBQ2QsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBSztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBRUYsQ0FBQTtBQXZCVTtJQUFSLEtBQUssRUFBRTs0Q0FBSztBQUNKO0lBQVIsS0FBSyxFQUFFOzhDQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtpREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7aURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3lEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTswREFBK0I7QUFDOUI7SUFBUixLQUFLLEVBQUU7Z0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO21EQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTtvREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7aURBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFOzZDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7a0RBQXFCO0FBQ25CO0lBQVQsTUFBTSxFQUFFO21EQUFpQztBQWQvQixlQUFlO0lBcEUzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJDVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CUjtLQUNGLENBQUM7R0FFVyxlQUFlLENBeUIzQjtTQXpCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtdGFibGUtZm9vdGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwiYWxpZ25tZW50LnNob3dwb3NpdGlvbiAhPSAncmlnaHQnIHx8ICBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiAhPSAncmlnaHQnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAnbGVmdCcsJ2YtbCc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2hvd3Bvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5jbHVkZXBhZ2Vjb3VudFwiIGNsYXNzPVwicHQtOFwiIHN0eWxlPVwiZm9udC1zaXplOjlwdDtcIj5cclxuICAgICAgICAgICAgICAgICAgICBTaG93aW5nIHt7cmVjb3JkY291bnR9fSBvZiB7e3RvdGFsY291bnR9fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsncGwtNSc6IGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdyaWdodCcsJ3ByLTUnOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAnbGVmdCcsJ2YtbCc6IGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdsZWZ0JywnZi1yJzogYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gPT0gJ3JpZ2h0J31cIj5cclxuICAgICAgICAgICAgICAgIDxzbWwtdGFibGUtZm9vdGVyLXBhZ2luYXRpb24gKm5nSWY9XCJpbmNsdWRlcGFnaW5hdGlvbiAmJiB0b3RhbGNvdW50ID4gcmVjb3JkY291bnQgJiYgdG90YWxjb3VudCA+IDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtub1BhZ2VdPVwicGFnZVwiIFt0b3RhbFJlY29yZHNdPVwidG90YWxjb3VudFwiIFtwYWdlU2l6ZV09XCJwYWdlc2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrUGFnZSk9XCJwYWdlTnVtYmVyVXBkYXRlKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwvc21sLXRhYmxlLWZvb3Rlci1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgKm5nSWY9XCJhbGlnbm1lbnQuc2hvd3Bvc2l0aW9uID09ICdyaWdodCcgJiYgIGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdyaWdodCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpcy1ibG9ja1wiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3BsLTUnOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3dwYWdpbmF0aW9ucG9zaXRpb24gPT0gJ2xlZnQnLCdmLWwnOiBhbGlnbm1lbnQuc2hvd3BhZ2luYXRpb25wb3NpdGlvbiA9PSAnbGVmdCcsJ2Ytcic6IGFsaWdubWVudC5zaG93cGFnaW5hdGlvbnBvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8c21sLXRhYmxlLWZvb3Rlci1wYWdpbmF0aW9uICpuZ0lmPVwiaW5jbHVkZXBhZ2luYXRpb24gJiYgdG90YWxjb3VudCA+IHJlY29yZGNvdW50ICYmIHRvdGFsY291bnQgPiAwXCJcclxuICAgICAgICAgICAgICAgICAgICBbbm9QYWdlXT1cInBhZ2VcIiBbdG90YWxSZWNvcmRzXT1cInRvdGFsY291bnRcIiBbcGFnZVNpemVdPVwicGFnZXNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGlja1BhZ2UpPVwicGFnZU51bWJlclVwZGF0ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L3NtbC10YWJsZS1mb290ZXItcGFnaW5hdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXMtYmxvY2tcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydwbC01JzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAncmlnaHQnLCdwci01JzogYWxpZ25tZW50LnNob3dwb3NpdGlvbiA9PSAnbGVmdCcsJ2YtbCc6IGFsaWdubWVudC5zaG93cG9zaXRpb24gPT0gJ2xlZnQnLCdmLXInOiBhbGlnbm1lbnQuc2hvd3Bvc2l0aW9uID09ICdyaWdodCd9XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaW5jbHVkZXBhZ2Vjb3VudFwiIGNsYXNzPVwicHQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNob3dpbmcge3tyZWNvcmRjb3VudH19IG9mIHt7dG90YWxjb3VudH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLmRpcy1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uZi1se1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmYtcntcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4ucHQtOHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn1cclxuLnBsLTV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wci01e1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG9iajtcclxuICBASW5wdXQoKSB3aWR0aDogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgbWlud2lkdGg6IGFueSA9IDcwMDtcclxuICBASW5wdXQoKSBtYXh3aWR0aDogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgaW5jbHVkZXBhZ2Vjb3VudDogYW55ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBpbmNsdWRlcGFnaW5hdGlvbjogYW55ID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNwbGF5OmFueSA9IHRydWU7XHJcbiAgQElucHV0KCkgdG90YWxjb3VudDogYW55ID0gMDtcclxuICBASW5wdXQoKSByZWNvcmRjb3VudDogYW55ID0gMDtcclxuICBASW5wdXQoKSBwYWdlc2l6ZTogYW55ID0gMDtcclxuICBASW5wdXQoKSBwYWdlOiBhbnkgPSAxO1xyXG4gIEBJbnB1dCgpIGFsaWdubWVudDogYW55ID0ge307XHJcbiAgQE91dHB1dCgpIGNoYW5nZXBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgcGFnZU51bWJlclVwZGF0ZShldmVudCkge1xyXG4gICAgdGhpcy5jaGFuZ2VwYWdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19