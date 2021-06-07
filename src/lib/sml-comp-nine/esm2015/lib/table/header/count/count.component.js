import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CountComponent = class CountComponent {
    constructor() {
        this.changevalue = new EventEmitter;
    }
    ngOnInit() {
    }
    getselectvalue(event) {
        this.changevalue.emit(event.id);
    }
};
__decorate([
    Input()
], CountComponent.prototype, "listValue", void 0);
__decorate([
    Input()
], CountComponent.prototype, "value", void 0);
__decorate([
    Output()
], CountComponent.prototype, "changevalue", void 0);
CountComponent = __decorate([
    Component({
        selector: 'sml-table-header-count',
        template: `
  <div class="form-row align-items-center">
    <div class="col-md-12 col-12 mb-1" style="padding-right:4px !important;">
    <ng-select [items]="listValue" [searchable]="false" [clearable]="false" bindLabel="name" bindValue="id" (change)="getselectvalue($event)" [(ngModel)]="value">
    </ng-select>
    </div>
   </div>`,
        styles: [`
    :host /deep/ .ng-select.ng-select-single .ng-select-container {height: 39px !important;}
    :host /deep/ .ng-select:focus{outline: none !important;box-shadow: none !important;}
    :host /deep/ .ng-dropdown-panel .ng-dropdown-panel-items .ng-option{font-size: 9pt !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value {font-size: 9pt !important;}
    .labelList{font-size:14px !important;position:relative;}
    .w-100{width:100%;}
    .mb-5{margin-bottom:3rem!important}
    .form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px;}
    .col-12{flex:0 0 100%;max-width:100%;}
    .mb-0{margin-bottom:0px!important;}
    .form-row>.col, .form-row>[class*=col-]{padding-right:5px;padding-left:5px;}
    .d-flex{display:flex;}
    .statusIcon img{width:16px;}
    .statusIcon{display:none;position:absolute;right:28px;top:0}
    .invalidStatus .statusIcon, .validStatus .statusIcon{display:block}
    .floating{border:1px solid #d6d6d6;border-radius:2px;position:relative;padding:2px 0 0 0;}
    .label{position:absolute;left:16px;top:50%;margin-bottom:0;transform:translateY(-50%);transition:all 0.1s;font-size:12px;}
    .showFloat:focus ~ .label, .select2-container--focus ~ .label, .select2-container--open + .label, .float .label{top:3px;-webkit-transform:translateY(0);transform:translateY(0);font-size:9px;left:12px;font-weight:bold;}
    .pl-0{padding-left:0px;}    
  `]
    })
], CountComponent);
export { CountComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9oZWFkZXIvY291bnQvY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBa0MvRSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBTXZCO1FBRlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUV6QixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FFSixDQUFBO0FBYlk7SUFBUixLQUFLLEVBQUU7aURBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTs2Q0FBWTtBQUNWO0lBQVQsTUFBTSxFQUFFO21EQUFnQztBQUpoQyxjQUFjO0lBaEMxQixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLFFBQVEsRUFBRTs7Ozs7O1VBTUo7aUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JWO0tBQ0YsQ0FBQztHQUVXLGNBQWMsQ0FlMUI7U0FmWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC10YWJsZS1oZWFkZXItY291bnQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC0xMiBtYi0xXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OjRweCAhaW1wb3J0YW50O1wiPlxyXG4gICAgPG5nLXNlbGVjdCBbaXRlbXNdPVwibGlzdFZhbHVlXCIgW3NlYXJjaGFibGVdPVwiZmFsc2VcIiBbY2xlYXJhYmxlXT1cImZhbHNlXCIgYmluZExhYmVsPVwibmFtZVwiIGJpbmRWYWx1ZT1cImlkXCIgKGNoYW5nZSk9XCJnZXRzZWxlY3R2YWx1ZSgkZXZlbnQpXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPlxyXG4gICAgPC9uZy1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICAgPC9kaXY+YCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge2hlaWdodDogMzlweCAhaW1wb3J0YW50O31cclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0OmZvY3Vze291dGxpbmU6IG5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7fVxyXG4gICAgOmhvc3QgL2RlZXAvIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntmb250LXNpemU6IDlwdCAhaW1wb3J0YW50O31cclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUge2ZvbnQtc2l6ZTogOXB0ICFpbXBvcnRhbnQ7fVxyXG4gICAgLmxhYmVsTGlzdHtmb250LXNpemU6MTRweCAhaW1wb3J0YW50O3Bvc2l0aW9uOnJlbGF0aXZlO31cclxuICAgIC53LTEwMHt3aWR0aDoxMDAlO31cclxuICAgIC5tYi01e21hcmdpbi1ib3R0b206M3JlbSFpbXBvcnRhbnR9XHJcbiAgICAuZm9ybS1yb3d7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7bWFyZ2luLXJpZ2h0Oi01cHg7bWFyZ2luLWxlZnQ6LTVweDt9XHJcbiAgICAuY29sLTEye2ZsZXg6MCAwIDEwMCU7bWF4LXdpZHRoOjEwMCU7fVxyXG4gICAgLm1iLTB7bWFyZ2luLWJvdHRvbTowcHghaW1wb3J0YW50O31cclxuICAgIC5mb3JtLXJvdz4uY29sLCAuZm9ybS1yb3c+W2NsYXNzKj1jb2wtXXtwYWRkaW5nLXJpZ2h0OjVweDtwYWRkaW5nLWxlZnQ6NXB4O31cclxuICAgIC5kLWZsZXh7ZGlzcGxheTpmbGV4O31cclxuICAgIC5zdGF0dXNJY29uIGltZ3t3aWR0aDoxNnB4O31cclxuICAgIC5zdGF0dXNJY29ue2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoyOHB4O3RvcDowfVxyXG4gICAgLmludmFsaWRTdGF0dXMgLnN0YXR1c0ljb24sIC52YWxpZFN0YXR1cyAuc3RhdHVzSWNvbntkaXNwbGF5OmJsb2NrfVxyXG4gICAgLmZsb2F0aW5ne2JvcmRlcjoxcHggc29saWQgI2Q2ZDZkNjtib3JkZXItcmFkaXVzOjJweDtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjJweCAwIDAgMDt9XHJcbiAgICAubGFiZWx7cG9zaXRpb246YWJzb2x1dGU7bGVmdDoxNnB4O3RvcDo1MCU7bWFyZ2luLWJvdHRvbTowO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zaXRpb246YWxsIDAuMXM7Zm9udC1zaXplOjEycHg7fVxyXG4gICAgLnNob3dGbG9hdDpmb2N1cyB+IC5sYWJlbCwgLnNlbGVjdDItY29udGFpbmVyLS1mb2N1cyB+IC5sYWJlbCwgLnNlbGVjdDItY29udGFpbmVyLS1vcGVuICsgLmxhYmVsLCAuZmxvYXQgLmxhYmVse3RvcDozcHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtmb250LXNpemU6OXB4O2xlZnQ6MTJweDtmb250LXdlaWdodDpib2xkO31cclxuICAgIC5wbC0we3BhZGRpbmctbGVmdDowcHg7fSAgICBcclxuICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvdW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBsaXN0VmFsdWU7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTogYW55O1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZXZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldHNlbGVjdHZhbHVlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2V2YWx1ZS5lbWl0KGV2ZW50LmlkKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19