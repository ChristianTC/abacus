import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var InputTagComponent = /** @class */ (function () {
    function InputTagComponent(elementRef) {
        this.elementRef = elementRef;
        this.label = 'Label Name';
        this.name = 'sml-tag-input';
        this.items = [];
        this.getvalue = new EventEmitter();
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
    }
    InputTagComponent.prototype.ngOnInit = function () {
    };
    InputTagComponent.prototype.ngOnChanges = function (event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            var css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            var css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            var css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    };
    InputTagComponent.prototype.onItemAdded = function (event) {
        this.getvalue.emit(this.items);
    };
    InputTagComponent.prototype.onItemRemove = function (event) {
        this.getvalue.emit(this.items);
    };
    InputTagComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], InputTagComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "items", void 0);
    __decorate([
        Output()
    ], InputTagComponent.prototype, "getvalue", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "signalStyle", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], InputTagComponent.prototype, "valueStyle", void 0);
    InputTagComponent = __decorate([
        Component({
            selector: 'sml-tag-input',
            template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n            [ngStyle]=\"borderStyle\">\n            <tag-input [(ngModel)]='items'  [modelAsStrings]=\"true\" (onAdd)=\"onItemAdded($event)\" (onRemove)=\"onItemRemove($event)\" theme='bootstrap3-info'>\n            </tag-input>\n            <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n    </div>\n\t",
            styles: ["\n\t:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n\t.position-relative{position:relative;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}\n\t.float-group{position:relative;padding:1px 1px 1px 1px;}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t:host /deep/ tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}\n\t:host /deep/ tag-input tag{line-height:20px !important;height:27px !important;}\n\t:host /deep/ delete-icon svg{height:22px !important;}\n\t:host /deep/ tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n\t:host /deep/ tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}\n\t:host /deep/ .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}\n\t"]
        })
    ], InputTagComponent);
    return InputTagComponent;
}());
export { InputTagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtdGFnL2lucHV0LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtDM0Y7SUFhQywyQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVhqQyxVQUFLLEdBQVEsWUFBWSxDQUFDO1FBQzFCLFNBQUksR0FBUSxlQUFlLENBQUE7UUFDM0IsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO0lBS1MsQ0FBQztJQUUvQyxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNELHVDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2hCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ3RFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxVQUFVLENB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cnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC10YWctaW5wdXQnLFxyXG5cdHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIj5cclxuICAgICAgICAgICAgPHRhZy1pbnB1dCBbKG5nTW9kZWwpXT0naXRlbXMnICBbbW9kZWxBc1N0cmluZ3NdPVwidHJ1ZVwiIChvbkFkZCk9XCJvbkl0ZW1BZGRlZCgkZXZlbnQpXCIgKG9uUmVtb3ZlKT1cIm9uSXRlbVJlbW92ZSgkZXZlbnQpXCIgdGhlbWU9J2Jvb3RzdHJhcDMtaW5mbyc+XHJcbiAgICAgICAgICAgIDwvdGFnLWlucHV0PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tuYW1lfX1cIiBjbGFzcz1cImxhYmVsXCIgW25nU3R5bGVdPVwic3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQ6aG9zdHstLWMtd2lkdGg6NjQ1cHg7LS1jLWhlaWdodDo0NHB4Oy0tbGFiZWwtbGVmdDoxMHB4Oy0tbGFiZWwtdG9wOjBweDstLXZhbHVlLWxlZnQ6MTBweDstLXZhbHVlLXRvcDoxN3B4Oy0tZm9udC1jb2xvcjpyZ2JhKDAsMCwwLC44Nyk7LS1iYWNrLWNvbG9yOiNmZmY7LS1mb250LXNpemU6MTRweDstLWZvbnQtd2VpZ2h0OjIwMDstLWZvbnQtZmFtaWx5OkFyaWFsO31cclxuXHQucG9zaXRpb24tcmVsYXRpdmV7cG9zaXRpb246cmVsYXRpdmU7fVxyXG5cdC5pbnB1dC1maWVsZHtib3JkZXI6MXB4IHNvbGlkICNkZWUyZTY7Ym9yZGVyLXJhZGl1czoycHg7d2lkdGg6dmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDttaW4taGVpZ2h0OnZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O2hlaWdodDphdXRvO31cclxuXHQuc2lnbmFsLWxpbmV7Ym9yZGVyLXRvcDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowcHggIWltcG9ydGFudDt9XHJcblx0LmxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjRweDtsZWZ0OjBweDtmb250LXNpemU6MTJweDtwYWRkaW5nOjBweDt9XHJcblx0LmZsb2F0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MXB4IDFweCAxcHggMXB4O31cclxuXHQuZmxvYXQtZ3JvdXAgLmxhYmVse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0bzt9XHJcblx0LmZsb2F0LWdyb3VwLXN0YXRpYyAubGFiZWx7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOnZhcigtLWxhYmVsLXRvcCk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdDpob3N0IC9kZWVwLyB0YWctaW5wdXQgLm5nMi10YWctaW5wdXQuYm9vdHN0cmFwMy1pbmZve2hlaWdodDphdXRvICFpbXBvcnRhbnQ7bGluZS1oZWlnaHQ6MzNweCAhaW1wb3J0YW50O31cclxuXHQ6aG9zdCAvZGVlcC8gdGFnLWlucHV0IHRhZ3tsaW5lLWhlaWdodDoyMHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OjI3cHggIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIGRlbGV0ZS1pY29uIHN2Z3toZWlnaHQ6MjJweCAhaW1wb3J0YW50O31cclxuXHQ6aG9zdCAvZGVlcC8gdGFnLWlucHV0IC5ib290c3RyYXAzLWluZm8ubmcyLXRhZy1pbnB1dHtiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrLWNvbG9yKTtwYWRkaW5nOjBweCAhaW1wb3J0YW50O3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KSAhaW1wb3J0YW50O3BhZGRpbmctdG9wOnZhcigtLXZhbHVlLXRvcCkgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIHRhZy1pbnB1dCAubmcyLXRhZy1pbnB1dHtib3JkZXI6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSAhaW1wb3J0YW50O31cclxuXHQ6aG9zdCAvZGVlcC8gLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXR7cGFkZGluZzowcHggIWltcG9ydGFudDtoZWlnaHQ6MzJweCAhaW1wb3J0YW50O2JhY2tncm91bmQ6IHZhcigtLWJhY2stY29sb3IpO31cclxuXHRgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0VGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0QElucHV0KCkgbGFiZWw6IGFueSA9ICdMYWJlbCBOYW1lJztcclxuXHRASW5wdXQoKSBuYW1lOiBhbnkgPSAnc21sLXRhZy1pbnB1dCdcclxuXHRASW5wdXQoKSBpdGVtczogYW55ID0gW107XHJcblx0QE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRASW5wdXQoKSBzaWduYWxTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRASW5wdXQoKSBzdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcblx0QElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHR9XHJcblx0bmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWNvbG9yJywgY3NzWydjb2xvciddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1zaXplJywgY3NzWydmb250LXNpemUnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtd2VpZ2h0JywgY3NzWydmb250LXdlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1mYW1pbHknLCBjc3NbJ2ZvbnQtZmFtaWx5J10pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGV2ZW50LmJvcmRlclN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5ib3JkZXJTdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJhY2stY29sb3InLCBjc3NbJ2JhY2tncm91bmQtY29sb3InXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uSXRlbUFkZGVkKGV2ZW50KSB7XHJcblx0XHR0aGlzLmdldHZhbHVlLmVtaXQodGhpcy5pdGVtcyk7XHJcblx0fVxyXG5cdG9uSXRlbVJlbW92ZShldmVudCkge1xyXG5cdFx0dGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMuaXRlbXMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19