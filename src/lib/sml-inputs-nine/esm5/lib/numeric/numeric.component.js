import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
var NumericComponent = /** @class */ (function () {
    function NumericComponent(elementRef) {
        this.elementRef = elementRef;
        this.name = 'sml-input-numberic';
        this.value = null;
        this.label = 'Label Name';
        this.readOnly = false;
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
        this.getvalue = new EventEmitter;
        this.onblur = new EventEmitter;
    }
    NumericComponent.prototype.ngOnInit = function () {
    };
    NumericComponent.prototype.ngOnChanges = function (event) {
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
        }
    };
    NumericComponent.prototype.clickEvent = function (data) {
        if (data != undefined) {
            this.getvalue.emit(data.replace(/[,$]/g, ''));
        }
    };
    NumericComponent.prototype.getValue = function (event) {
        if (event.target.value != undefined) {
            this.getvalue.emit(event.target.value.replace(/[,$]/g, ''));
        }
    };
    NumericComponent.prototype.onBlur = function (event) {
        if (event.target.value != undefined) {
            this.onblur.emit(event.target.value.replace(/[,$]/g, ''));
        }
    };
    NumericComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], NumericComponent.prototype, "jsonData", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "options", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "readOnly", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "signalStyle", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], NumericComponent.prototype, "valueStyle", void 0);
    __decorate([
        Output()
    ], NumericComponent.prototype, "getvalue", void 0);
    __decorate([
        Output()
    ], NumericComponent.prototype, "onblur", void 0);
    NumericComponent = __decorate([
        Component({
            selector: 'sml-input-numeric',
            template: "<div class=\"position-relative\">\n    <div class=\"input-field\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': \n\nsignalStyle,'float-group-static': staticStyle}\"\n        [ngStyle]=\"borderStyle\">\n        <input class=\"form-control\" currencyMask \n            [(ngModel)]=\"value\" \n            [options]=\"options\" \n            [ngStyle]=\"valueStyle\" \n            [disabled]=\"readOnly\"\n            (click)=\"clickEvent(value)\" \n            (keyup)=\"getValue($event)\" \n            (blur)=\"onBlur($event)\" \n            id=\"{{name}}\" \n            name=\"{{name}}\" required>\n        <label for=\"{{name}}\" class=\"label\" [ngStyle]=\"style\">\n            {{ label }}\n        </label>\n    </div>\n\t</div>\n\t",
            styles: ["\n\t:host{--c-width:645px;--c-height:25px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:0px;}\n\t.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n\t.form-control{display:block;padding-top:0.375rem;padding-right:var(--value-left);padding-bottom:0.375rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;text-align:right;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}\n\t.form-control{background-color:inherit;box-shadow:none !important;}\n\t.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n\t.label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;text-align: left;}\n\t.float-group{position:relative;padding:14px 0px 2px 24px;}\n\t.float-group .form-control{padding-top:var(--value-top);padding-right:var(--value-left);padding-bottom:0px;padding-left:var(--value-left);}\n\t.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n\t}\n\t\n\t.float-group .form-control:focus{outline:none !important;box-shadow:none;}\n\t.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.float-group .form-control:focus + label,.float-group .form-control:valid + label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n\t.readOnly{pointer-events:none;opacity:0.7;}\t\n\t"]
        })
    ], NumericComponent);
    return NumericComponent;
}());
export { NumericComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbnVtZXJpYy9udW1lcmljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUQzRjtJQWdCQywwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWRqQyxTQUFJLEdBQVEsb0JBQW9CLENBQUM7UUFDakMsVUFBSyxHQUFRLElBQUksQ0FBQztRQUVsQixVQUFLLEdBQVcsWUFBWSxDQUFDO1FBQzdCLGFBQVEsR0FBUSxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUdwQyxDQUFDO0lBQ0QsbUNBQVEsR0FBUjtJQUNBLENBQUM7SUFDRCxzQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNoQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUN0RSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ2hGLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQztJQUNELHFDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2QsSUFBRyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDO0lBQ0QsbUNBQVEsR0FBUixVQUFTLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBQ0QsaUNBQU0sR0FBTixVQUFPLEtBQUs7UUFDWCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7SUFDRixDQUFDOztnQkFoQytCLFVBQVU7O0lBZmpDO1FBQVIsS0FBSyxFQUFFO3NEQUFVO0lBQ1Q7UUFBUixLQUFLLEVBQUU7a0RBQWtDO0lBQ2pDO1FBQVIsS0FBSyxFQUFFO21EQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTtxREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO21EQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTtzREFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7bURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTt5REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7eURBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFO3lEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTt5REFBNkI7SUFDNUI7UUFBUixLQUFLLEVBQUU7d0RBQWlCO0lBQ2Y7UUFBVCxNQUFNLEVBQUU7c0RBQTZCO0lBQzVCO1FBQVQsTUFBTSxFQUFFO29EQUEyQjtJQWR4QixnQkFBZ0I7UUEvQzVCLFNBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsUUFBUSxFQUFFLDB3QkFvQlQ7cUJBQ1EsMG1FQXNCUjtTQUNELENBQUM7T0FDVyxnQkFBZ0IsQ0FpRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQWpEWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1pbnB1dC1udW1lcmljJyxcclxuXHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogXHJcblxyXG5zaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGN1cnJlbmN5TWFzayBcclxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIFxyXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCIgXHJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIiBcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cInJlYWRPbmx5XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrRXZlbnQodmFsdWUpXCIgXHJcbiAgICAgICAgICAgIChrZXl1cCk9XCJnZXRWYWx1ZSgkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgIGlkPVwie3tuYW1lfX1cIiBcclxuICAgICAgICAgICAgbmFtZT1cInt7bmFtZX19XCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInt7bmFtZX19XCIgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+XHJcbiAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdGAsXHJcblx0c3R5bGVzOiBbYFxyXG5cdDpob3N0ey0tYy13aWR0aDo2NDVweDstLWMtaGVpZ2h0OjI1cHg7LS1sYWJlbC1sZWZ0OjEwcHg7LS1sYWJlbC10b3A6MHB4Oy0tdmFsdWUtbGVmdDoxMHB4Oy0tdmFsdWUtdG9wOjBweDt9XHJcblx0LmlucHV0LWZpZWxke2JvcmRlcjoxcHggc29saWQgI2RlZTJlNjtib3JkZXItcmFkaXVzOjJweDt3aWR0aDp2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87fVxyXG5cdC5mb3JtLWNvbnRyb2x7ZGlzcGxheTpibG9jaztwYWRkaW5nLXRvcDowLjM3NXJlbTtwYWRkaW5nLXJpZ2h0OnZhcigtLXZhbHVlLWxlZnQpO3BhZGRpbmctYm90dG9tOjAuMzc1cmVtO3BhZGRpbmctbGVmdDowLjc1cmVtO2ZvbnQtc2l6ZToxcmVtO2xpbmUtaGVpZ2h0OjEuNTtjb2xvcjojNDk1MDU3O2JhY2tncm91bmQtY29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7Ym9yZGVyOm5vbmU7dGV4dC1hbGlnbjpyaWdodDttaW4taGVpZ2h0OnZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDt9XHJcblx0LmZvcm0tY29udHJvbHtiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7Ym94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7fVxyXG5cdC5zaWduYWwtbGluZXtib3JkZXItdG9wOm5vbmUgIWltcG9ydGFudDtib3JkZXItbGVmdDpub25lICFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjBweCAhaW1wb3J0YW50O31cclxuXHQubGFiZWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0yNHB4O2xlZnQ6MHB4O2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmc6IDBweCAhaW1wb3J0YW50O3RleHQtYWxpZ246IGxlZnQ7fVxyXG5cdC5mbG9hdC1ncm91cHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjE0cHggMHB4IDJweCAyNHB4O31cclxuXHQuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbHtwYWRkaW5nLXRvcDp2YXIoLS12YWx1ZS10b3ApO3BhZGRpbmctcmlnaHQ6dmFyKC0tdmFsdWUtbGVmdCk7cGFkZGluZy1ib3R0b206MHB4O3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KTt9XHJcblx0LmZsb2F0LWdyb3VwIC5sYWJlbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDpub3JtYWw7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdFxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpIHtcclxuICAgICAgICAqOjotbXMtYmFja2Ryb3AsIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgICAgICAgICB0b3A6IDAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHQuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1c3tvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmU7fVxyXG5cdC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVse2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDp2YXIoLS1sYWJlbC10b3ApO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvO31cclxuXHQuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyArIGxhYmVsLC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOnZhbGlkICsgbGFiZWx7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOnZhcigtLWxhYmVsLXRvcCk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdC5yZWFkT25seXtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6MC43O31cdFxyXG5cdGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1lcmljQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRASW5wdXQoKSBqc29uRGF0YTtcclxuXHRASW5wdXQoKSBuYW1lOiBhbnkgPSAnc21sLWlucHV0LW51bWJlcmljJztcclxuXHRASW5wdXQoKSB2YWx1ZTogYW55ID0gbnVsbDtcclxuXHRASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICdMYWJlbCBOYW1lJztcclxuXHRASW5wdXQoKSByZWFkT25seTogYW55ID0gZmFsc2U7XHJcblx0QElucHV0KCkgc3R5bGU6IGFueTtcclxuXHRASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRASW5wdXQoKSBzaWduYWxTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHRASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcblx0QE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHRAT3V0cHV0KCkgb25ibHVyID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHRuZ09uQ2hhbmdlcyhldmVudCkge1xyXG5cdFx0aWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGNsaWNrRXZlbnQoZGF0YSkge1xyXG5cdFx0aWYoZGF0YSAhPSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLmdldHZhbHVlLmVtaXQoZGF0YS5yZXBsYWNlKC9bLCRdL2csICcnKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldFZhbHVlKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLmdldHZhbHVlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1ssJF0vZywgJycpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0b25CbHVyKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHR0aGlzLm9uYmx1ci5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZS5yZXBsYWNlKC9bLCRdL2csICcnKSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiJdfQ==