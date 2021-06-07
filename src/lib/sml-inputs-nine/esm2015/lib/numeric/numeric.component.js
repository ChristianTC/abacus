import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
let NumericComponent = class NumericComponent {
    constructor(elementRef) {
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
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.valueStyle != undefined && event.valueStyle.currentValue != undefined) {
            let css = event.valueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
        }
    }
    clickEvent(data) {
        if (data != undefined) {
            this.getvalue.emit(data.replace(/[,$]/g, ''));
        }
    }
    getValue(event) {
        if (event.target.value != undefined) {
            this.getvalue.emit(event.target.value.replace(/[,$]/g, ''));
        }
    }
    onBlur(event) {
        if (event.target.value != undefined) {
            this.onblur.emit(event.target.value.replace(/[,$]/g, ''));
        }
    }
};
NumericComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `<div class="position-relative">
    <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': 

signalStyle,'float-group-static': staticStyle}"
        [ngStyle]="borderStyle">
        <input class="form-control" currencyMask 
            [(ngModel)]="value" 
            [options]="options" 
            [ngStyle]="valueStyle" 
            [disabled]="readOnly"
            (click)="clickEvent(value)" 
            (keyup)="getValue($event)" 
            (blur)="onBlur($event)" 
            id="{{name}}" 
            name="{{name}}" required>
        <label for="{{name}}" class="label" [ngStyle]="style">
            {{ label }}
        </label>
    </div>
	</div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:25px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:0px;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.form-control{display:block;padding-top:0.375rem;padding-right:var(--value-left);padding-bottom:0.375rem;padding-left:0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:none;text-align:right;min-height:var(--c-height) !important;transition:border-color .15s ease-in-out, box-shadow .15s ease-in-out;}
	.form-control{background-color:inherit;box-shadow:none !important;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;text-align: left;}
	.float-group{position:relative;padding:14px 0px 2px 24px;}
	.float-group .form-control{padding-top:var(--value-top);padding-right:var(--value-left);padding-bottom:0px;padding-left:var(--value-left);}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
	}
	
	.float-group .form-control:focus{outline:none !important;box-shadow:none;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group .form-control:focus + label,.float-group .form-control:valid + label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.readOnly{pointer-events:none;opacity:0.7;}	
	`]
    })
], NumericComponent);
export { NumericComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtZXJpYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbnVtZXJpYy9udW1lcmljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBaUQzRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQWdCNUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWRqQyxTQUFJLEdBQVEsb0JBQW9CLENBQUM7UUFDakMsVUFBSyxHQUFRLElBQUksQ0FBQztRQUVsQixVQUFLLEdBQVcsWUFBWSxDQUFDO1FBQzdCLGFBQVEsR0FBUSxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQzVCLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUdwQyxDQUFDO0lBQ0QsUUFBUTtJQUNSLENBQUM7SUFDRCxXQUFXLENBQUMsS0FBSztRQUNoQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUN0RSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ2hGLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFJO1FBQ2QsSUFBRyxJQUFJLElBQUksU0FBUyxFQUFDO1lBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDOUM7SUFDRixDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUs7UUFDWCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7SUFDRixDQUFDO0NBQ0QsQ0FBQTs7WUFqQ2dDLFVBQVU7O0FBZmpDO0lBQVIsS0FBSyxFQUFFO2tEQUFVO0FBQ1Q7SUFBUixLQUFLLEVBQUU7OENBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFOytDQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtpREFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOytDQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTtrREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7K0NBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtxREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7cURBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO3FEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTtxREFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7b0RBQWlCO0FBQ2Y7SUFBVCxNQUFNLEVBQUU7a0RBQTZCO0FBQzVCO0lBQVQsTUFBTSxFQUFFO2dEQUEyQjtBQWR4QixnQkFBZ0I7SUEvQzVCLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9CVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNCUjtLQUNELENBQUM7R0FDVyxnQkFBZ0IsQ0FpRDVCO1NBakRZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc21sLWlucHV0LW51bWVyaWMnLFxyXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBcclxuXHJcbnNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgY3VycmVuY3lNYXNrIFxyXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCIgXHJcbiAgICAgICAgICAgIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBcclxuICAgICAgICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiIFxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tFdmVudCh2YWx1ZSlcIiBcclxuICAgICAgICAgICAgKGtleXVwKT1cImdldFZhbHVlKCRldmVudClcIiBcclxuICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIiBcclxuICAgICAgICAgICAgaWQ9XCJ7e25hbWV9fVwiIFxyXG4gICAgICAgICAgICBuYW1lPVwie3tuYW1lfX1cIiByZXF1aXJlZD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwie3tuYW1lfX1cIiBjbGFzcz1cImxhYmVsXCIgW25nU3R5bGVdPVwic3R5bGVcIj5cclxuICAgICAgICAgICAge3sgbGFiZWwgfX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcblx0PC9kaXY+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgXHJcblx0Omhvc3R7LS1jLXdpZHRoOjY0NXB4Oy0tYy1oZWlnaHQ6MjVweDstLWxhYmVsLWxlZnQ6MTBweDstLWxhYmVsLXRvcDowcHg7LS12YWx1ZS1sZWZ0OjEwcHg7LS12YWx1ZS10b3A6MHB4O31cclxuXHQuaW5wdXQtZmllbGR7Ym9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O2JvcmRlci1yYWRpdXM6MnB4O3dpZHRoOnZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7bWluLWhlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtoZWlnaHQ6YXV0bzt9XHJcblx0LmZvcm0tY29udHJvbHtkaXNwbGF5OmJsb2NrO3BhZGRpbmctdG9wOjAuMzc1cmVtO3BhZGRpbmctcmlnaHQ6dmFyKC0tdmFsdWUtbGVmdCk7cGFkZGluZy1ib3R0b206MC4zNzVyZW07cGFkZGluZy1sZWZ0OjAuNzVyZW07Zm9udC1zaXplOjFyZW07bGluZS1oZWlnaHQ6MS41O2NvbG9yOiM0OTUwNTc7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JhY2tncm91bmQtY2xpcDpwYWRkaW5nLWJveDtib3JkZXI6bm9uZTt0ZXh0LWFsaWduOnJpZ2h0O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O31cclxuXHQuZm9ybS1jb250cm9se2JhY2tncm91bmQtY29sb3I6aW5oZXJpdDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDt9XHJcblx0LnNpZ25hbC1saW5le2JvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1sZWZ0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7fVxyXG5cdC5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTI0cHg7bGVmdDowcHg7Zm9udC1zaXplOjEycHg7cGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogbGVmdDt9XHJcblx0LmZsb2F0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTRweCAwcHggMnB4IDI0cHg7fVxyXG5cdC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9se3BhZGRpbmctdG9wOnZhcigtLXZhbHVlLXRvcCk7cGFkZGluZy1yaWdodDp2YXIoLS12YWx1ZS1sZWZ0KTtwYWRkaW5nLWJvdHRvbTowcHg7cGFkZGluZy1sZWZ0OnZhcigtLXZhbHVlLWxlZnQpO31cclxuXHQuZmxvYXQtZ3JvdXAgLmxhYmVse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0bzt9XHJcblx0XHJcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSkge1xyXG4gICAgICAgICo6Oi1tcy1iYWNrZHJvcCwgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdFxyXG5cdC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3Vze291dGxpbmU6bm9uZSAhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZTt9XHJcblx0LmZsb2F0LWdyb3VwLXN0YXRpYyAubGFiZWx7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOnZhcigtLWxhYmVsLXRvcCk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzICsgbGFiZWwsLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyBsYWJlbHtmb250LXNpemU6OXB4O2ZvbnQtd2VpZ2h0OmJvbGQgIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6dmFyKC0tbGFiZWwtdG9wKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0bzt9XHJcblx0LnJlYWRPbmx5e3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTowLjc7fVx0XHJcblx0YF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWVyaWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGpzb25EYXRhO1xyXG5cdEBJbnB1dCgpIG5hbWU6IGFueSA9ICdzbWwtaW5wdXQtbnVtYmVyaWMnO1xyXG5cdEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBudWxsO1xyXG5cdEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcclxuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0xhYmVsIE5hbWUnO1xyXG5cdEBJbnB1dCgpIHJlYWRPbmx5OiBhbnkgPSBmYWxzZTtcclxuXHRASW5wdXQoKSBzdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcblx0QElucHV0KCkgc3dpdGNoU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcblx0QElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuXHRAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cdEBPdXRwdXQoKSBvbmJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHR9XHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cdG5nT25DaGFuZ2VzKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuXHRcdH1cclxuXHRcdGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2xpY2tFdmVudChkYXRhKSB7XHJcblx0XHRpZihkYXRhICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdHRoaXMuZ2V0dmFsdWUuZW1pdChkYXRhLnJlcGxhY2UoL1ssJF0vZywgJycpKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0VmFsdWUoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC50YXJnZXQudmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuZ2V0dmFsdWUuZW1pdChldmVudC50YXJnZXQudmFsdWUucmVwbGFjZSgvWywkXS9nLCAnJykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkJsdXIoZXZlbnQpIHtcclxuXHRcdGlmIChldmVudC50YXJnZXQudmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMub25ibHVyLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1ssJF0vZywgJycpKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19