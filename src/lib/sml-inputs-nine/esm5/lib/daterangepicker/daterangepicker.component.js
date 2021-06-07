import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
var DaterangepickerComponent = /** @class */ (function () {
    function DaterangepickerComponent(elementRef) {
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    DaterangepickerComponent.prototype.ngOnInit = function () {
        if (this.value) {
            this.value = this.value.toLocaleDateString();
        }
        if (this.fromValue) {
            this.fromValue = this.fromValue.toLocaleDateString();
        }
    };
    DaterangepickerComponent.prototype.ngOnChanges = function (event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            var css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.width = css['c-width'];
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            var css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
        }
    };
    DaterangepickerComponent.prototype.emitValue = function (val) {
        this.value = val.value.split(",")[0];
        this.fromValue = val.value.split(",")[1];
        this.getvalue.emit({ to: this.value, from: this.fromValue });
    };
    DaterangepickerComponent.prototype.clk = function () {
        var w = this.width;
        if (w == '100%') {
            w = $('#topdiv-' + this.name).width();
        }
        var sd = parseInt(w) - 296;
        $('owl-date-time-container').css({ left: sd });
    };
    DaterangepickerComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "fromValue", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "format", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "width", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "signalStyle", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], DaterangepickerComponent.prototype, "valueStyle", void 0);
    __decorate([
        Output()
    ], DaterangepickerComponent.prototype, "getvalue", void 0);
    DaterangepickerComponent = __decorate([
        Component({
            selector: 'sml-input-daterangepicker',
            template: "\n  <div class=\"position-relative\" id=\"topdiv-{{name}}\">\n  <div class=\"input-field\"\n  [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\" \n  [ngStyle]=\"borderStyle\">\n      <input \n        [value]=\"value\" \n        [name]=\"name\" \n        [owlDateTime]=\"dtRange1\" \n        [selectMode]=\"'range'\" \n        [rangeSeparator]=\"','\"\n        (dateTimeInput)=\"emitValue(getRangeVal)\" \n        class=\"form-control ctrtext\" #getRangeVal required>\n      <input type=\"text\"\n        [value]=\"value\" \n        [name]=\"name\" \n        class=\"form-control\" \n        [ngStyle]=\"valueStyle\">\n      <span class=\"dateSeprator\">to</span>\n      <input \n        type=\"text\" \n        [value]=\"fromValue\"\n        [name]=\"name\" \n        class=\"form-control\"\n        [ngStyle]=\"valueStyle\">\n      <owl-date-time [pickerType]=\"'calendar'\" #dtRange1 [startAt]=\"value\"></owl-date-time>\n      <button [owlDateTimeTrigger]=\"dtRange1\" (click)=\"clk()\" class=\"btn btn-link icon\" type=\"button\"></button>\n      <label class=\"label\" [ngStyle]=\"style\">{{ label }}</label>\n    </div>\n  </div>\n  ",
            styles: ["\n  /* css variable */\n  :host {\n    --c-width: 645px;\n    --c-height: 25px;\n    --label-left: 10px;\n    --label-top: 0px;\n    --value-left: 10px;\n    --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n    position: relative;\n    width: var(--c-width) !important;\n  }\n  .input-field {\n    border: 1px solid #dee2e6;\n    border-radius: 2px;\n    min-height: var(--c-height) !important;\n    height: auto;\n    display: flex;\n  }\n  .ctrtext {\n    position: absolute;\n    z-index: -1;\n    opacity: 0\n  }\n  /* control css */\n  .form-control {\n    display: block;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    color: #495057;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: none;\n    width: 13%;\n    min-height: var(--c-height) !important;\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n    background-color: inherit;\n    box-shadow: none !important;\n  }\n  .signal-line{\n    border-top: none !important;\n    border-left: none !important;\n    border-right: none !important;\n    border-radius: 0px !important;\n  }\n  /* label css */\n  .label {\n    position: absolute; \n    top: -24px;\n    left: 0px; \n    font-size: 12px;\n    padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n    position: relative;\n    padding: 14px 24px 2px 0px;\n  }\n  .float-group .form-control {\n    padding-top: var(--value-top);\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: var(--value-left);\n  }\n  .float-group .label {\n    font-size: 9px;\n    font-weight: bold !important;  /* floating lable always bold */\n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  .float-group .form-control:focus {\n    outline: none;\n    box-shadow: none;\n  }\n  .float-group-static .label {\n    font-size: 9px;\n    font-weight: bold !important; \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  }\n  \n  .dateSeprator {\n    display: inline-flex;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1;\n    justify-content: center;\n    align-items: center\n  }\n  \n  .float-group .dateSeprator {\n    display: block;\n    min-width: 30px;\n    color: #2d353c;\n    font-weight: 400;\n    font-size: 14;\n    line-height: 1.5;\n    justify-content: center;\n    text-align: center;\n    padding-top: var(--value-top);\n  }\n  \n  /* .calenderContainer .form-control:focus + .label,\n  .calenderContainer .form-control:valid + .label,\n  .calenderContainer .form-control[ng-reflect-model] +  .label,\n  .calenderContainer .form-control[aria-owns] +  .label{\n    font-size: 9px;\n    font-weight: bold !important; \n    position: absolute;\n    top: var(--label-top);\n    left: var(--label-left);\n    transform: translateY(0px);\n    transition: all 200ms;\n    opacity: 1;\n    margin: 0;\n    width: 87%;\n    height: auto;\n  } */\n  /* button css */\n  button.icon, button.icon:active {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;\n    width: 25px;\n    height: 23px;\n    background-repeat: no-repeat;\n    background-size: 20px;\n    background-position: center;\n    position: absolute;\n    right: 7px;\n    top: 8px;\n  }\n  .float-group button.icon, button.icon:active {\n    right: 5px;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  .btn-link {\n    font-weight: 400;\n    color: #007bff;\n    background-color: transparent;\n  }\n  .btn {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}\n  "]
        })
    ], DaterangepickerComponent);
    return DaterangepickerComponent;
}());
export { DaterangepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeU4zRjtJQWNFLGtDQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmpDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUd0QyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUNELDhDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDckUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsU0FB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1pbnB1dC1kYXRlcmFuZ2VwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCIgaWQ9XCJ0b3BkaXYte3tuYW1lfX1cIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIlxyXG4gIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIiBcclxuICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCIgXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiIFxyXG4gICAgICAgIFtvd2xEYXRlVGltZV09XCJkdFJhbmdlMVwiIFxyXG4gICAgICAgIFtzZWxlY3RNb2RlXT1cIidyYW5nZSdcIiBcclxuICAgICAgICBbcmFuZ2VTZXBhcmF0b3JdPVwiJywnXCJcclxuICAgICAgICAoZGF0ZVRpbWVJbnB1dCk9XCJlbWl0VmFsdWUoZ2V0UmFuZ2VWYWwpXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgY3RydGV4dFwiICNnZXRSYW5nZVZhbCByZXF1aXJlZD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIiBcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCIgXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZGF0ZVNlcHJhdG9yXCI+dG88L3NwYW4+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgIFt2YWx1ZV09XCJmcm9tVmFsdWVcIlxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIiBcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiPlxyXG4gICAgICA8b3dsLWRhdGUtdGltZSBbcGlja2VyVHlwZV09XCInY2FsZW5kYXInXCIgI2R0UmFuZ2UxIFtzdGFydEF0XT1cInZhbHVlXCI+PC9vd2wtZGF0ZS10aW1lPlxyXG4gICAgICA8YnV0dG9uIFtvd2xEYXRlVGltZVRyaWdnZXJdPVwiZHRSYW5nZTFcIiAoY2xpY2spPVwiY2xrKClcIiBjbGFzcz1cImJ0biBidG4tbGluayBpY29uXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLyogY3NzIHZhcmlhYmxlICovXHJcbiAgOmhvc3Qge1xyXG4gICAgLS1jLXdpZHRoOiA2NDVweDtcclxuICAgIC0tYy1oZWlnaHQ6IDI1cHg7XHJcbiAgICAtLWxhYmVsLWxlZnQ6IDEwcHg7XHJcbiAgICAtLWxhYmVsLXRvcDogMHB4O1xyXG4gICAgLS12YWx1ZS1sZWZ0OiAxMHB4O1xyXG4gICAgLS12YWx1ZS10b3A6IDBweDtcclxuICB9XHJcbiAgLyogYm94IGNzcyAqL1xyXG4gIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIC5jdHJ0ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgb3BhY2l0eTogMFxyXG4gIH1cclxuICAvKiBjb250cm9sIGNzcyAqL1xyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEzJTtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lnbmFsLWxpbmV7XHJcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogbGFiZWwgY3NzICovXHJcbiAgLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gICAgbGVmdDogMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMnB4IDBweDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXZhbHVlLXRvcCk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwLXN0YXRpYyAubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLmRhdGVTZXByYXRvciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIGNvbG9yOiAjMmQzNTNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIH1cclxuICBcclxuICAuZmxvYXQtZ3JvdXAgLmRhdGVTZXByYXRvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIGNvbG9yOiAjMmQzNTNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuICB9XHJcbiAgXHJcbiAgLyogLmNhbGVuZGVyQ29udGFpbmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyAubGFiZWwsXHJcbiAgLmNhbGVuZGVyQ29udGFpbmVyIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyAubGFiZWwsXHJcbiAgLmNhbGVuZGVyQ29udGFpbmVyIC5mb3JtLWNvbnRyb2xbbmctcmVmbGVjdC1tb2RlbF0gKyAgLmxhYmVsLFxyXG4gIC5jYWxlbmRlckNvbnRhaW5lciAuZm9ybS1jb250cm9sW2FyaWEtb3duc10gKyAgLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9ICovXHJcbiAgLyogYnV0dG9uIGNzcyAqL1xyXG4gIGJ1dHRvbi5pY29uLCBidXR0b24uaWNvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWNDQVlBQUFBRU4yMGZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFFVVNVUkJWRWlKN1pReFRvVkFFSVkvWUNIR3hONlhHT0lwbnBhRXNCU2VRQzlBclpibTlUWjZBRHlCTnpBaFFHR2w4Uml2NEJMQVdBZ21rcEJZa0gxYjhGV1QyV0sveko4Wko0cWlJNlhVSTNBTm5HS1dCbmh0Mi9aQkRSSzNoZ1ZHTnNDZDcvdWkrSmtFSXJLdHF1ckxwRVdhcGhkOTMzK0l5STNMRUlkcENZQ2lLRDZIY3VPYS9ud09hMFNjSkVuazBCSmcwVVRVV0pSbDZSeENZRXpFbW9tc0lsUFUzSVBXK2dySUFicXV5K3E2Zmx1eS8yOFJJQmVSTXdEWGRYTWdYTGovQjJ1aW1SWHB1aTREOXNCZVJMS2wrMU4rTCt0NlJ3YldyWmxpVFRUcjFveFl0elZXaVRRQWNSeHZUWCtlSk1ubFVEYU8xdnBaUk81TlMweDQ4c0l3ZlBjODd4ZzRCMDRNQ3pRaThoSUV3ZTRibDFEbkZNQ04yenNBQUFBQVNVVk9SSzVDWUlJPScpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCBidXR0b24uaWNvbiwgYnV0dG9uLmljb246YWN0aXZlIHtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgLmJ0bi1saW5rIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmJ0bi5idG4tbGluazpob3ZlciwgLmJ0bi5idG4tbGluazpmb2N1cyB7YmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O2JhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB2YWx1ZTtcclxuICBASW5wdXQoKSBmcm9tVmFsdWU7XHJcbiAgQElucHV0KCkgZm9ybWF0O1xyXG4gIEBJbnB1dCgpIG5hbWU7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSB3aWR0aDtcclxuICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcbiAgQE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZnJvbVZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZnJvbVZhbHVlID0gdGhpcy5mcm9tVmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgdGhpcy53aWR0aCA9IGNzc1snYy13aWR0aCddO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuICBlbWl0VmFsdWUodmFsKSB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsLnZhbHVlLnNwbGl0KFwiLFwiKVswXVxyXG4gICAgdGhpcy5mcm9tVmFsdWUgPSB2YWwudmFsdWUuc3BsaXQoXCIsXCIpWzFdXHJcbiAgICB0aGlzLmdldHZhbHVlLmVtaXQoeyB0bzogdGhpcy52YWx1ZSwgZnJvbTogdGhpcy5mcm9tVmFsdWUgfSlcclxuICB9XHJcbiAgY2xrKCkge1xyXG4gICAgdmFyIHcgPSB0aGlzLndpZHRoO1xyXG4gICAgaWYgKHcgPT0gJzEwMCUnKSB7XHJcbiAgICAgIHcgPSAkKCcjdG9wZGl2LScgKyB0aGlzLm5hbWUpLndpZHRoKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc2QgPSBwYXJzZUludCh3KSAtIDI5NjtcclxuICAgICQoJ293bC1kYXRlLXRpbWUtY29udGFpbmVyJykuY3NzKHsgbGVmdDogc2QgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==