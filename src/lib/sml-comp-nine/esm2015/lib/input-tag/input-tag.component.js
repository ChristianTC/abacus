import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let InputTagComponent = class InputTagComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.label = 'Label Name';
        this.name = 'sml-tag-input';
        this.items = [];
        this.getvalue = new EventEmitter();
        this.switchStyle = true;
        this.signalStyle = false;
        this.staticStyle = true;
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
            this.elementRef.nativeElement.style.setProperty('--font-color', css['color']);
            this.elementRef.nativeElement.style.setProperty('--font-size', css['font-size']);
            this.elementRef.nativeElement.style.setProperty('--font-weight', css['font-weight']);
            this.elementRef.nativeElement.style.setProperty('--font-family', css['font-family']);
        }
        if (event.borderStyle != undefined && event.borderStyle.currentValue != undefined) {
            let css = event.borderStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--back-color', css['background-color']);
        }
    }
    onItemAdded(event) {
        this.getvalue.emit(this.items);
    }
    onItemRemove(event) {
        this.getvalue.emit(this.items);
    }
};
InputTagComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `
    <div class="position-relative">
        <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
            [ngStyle]="borderStyle">
            <tag-input [(ngModel)]='items'  [modelAsStrings]="true" (onAdd)="onItemAdded($event)" (onRemove)="onItemRemove($event)" theme='bootstrap3-info'>
            </tag-input>
            <label for="{{name}}" class="label" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
    </div>
	`,
        styles: [`
	:host{--c-width:645px;--c-height:44px;--label-left:10px;--label-top:0px;--value-left:10px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
	.position-relative{position:relative;}
	.input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
	.signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
	.label{position:absolute;top:-24px;left:0px;font-size:12px;padding:0px;}
	.float-group{position:relative;padding:1px 1px 1px 1px;}
	.float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	.float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
	:host /deep/ tag-input .ng2-tag-input.bootstrap3-info{height:auto !important;line-height:33px !important;}
	:host /deep/ tag-input tag{line-height:20px !important;height:27px !important;}
	:host /deep/ delete-icon svg{height:22px !important;}
	:host /deep/ tag-input .bootstrap3-info.ng2-tag-input{background: var(--back-color);padding:0px !important;padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
	:host /deep/ tag-input .ng2-tag-input{border:none !important;box-shadow:none !important;}
	:host /deep/ .ng2-tag-input__text-input{padding:0px !important;height:32px !important;background: var(--back-color);}
	`]
    })
], InputTagComponent);
export { InputTagComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtdGFnL2lucHV0LXRhZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtDM0YsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFhN0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVhqQyxVQUFLLEdBQVEsWUFBWSxDQUFDO1FBQzFCLFNBQUksR0FBUSxlQUFlLENBQUE7UUFDM0IsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO0lBS1MsQ0FBQztJQUUvQyxRQUFRO0lBQ1IsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2hCLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ3RFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9F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OlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzbWwtdGFnLWlucHV0JyxcclxuXHR0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGUsJ2Zsb2F0LWdyb3VwLXN0YXRpYyc6IHN0YXRpY1N0eWxlfVwiXHJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICAgICAgICAgIDx0YWctaW5wdXQgWyhuZ01vZGVsKV09J2l0ZW1zJyAgW21vZGVsQXNTdHJpbmdzXT1cInRydWVcIiAob25BZGQpPVwib25JdGVtQWRkZWQoJGV2ZW50KVwiIChvblJlbW92ZSk9XCJvbkl0ZW1SZW1vdmUoJGV2ZW50KVwiIHRoZW1lPSdib290c3RyYXAzLWluZm8nPlxyXG4gICAgICAgICAgICA8L3RhZy1pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cInt7bmFtZX19XCIgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cInN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgXHJcblx0Omhvc3R7LS1jLXdpZHRoOjY0NXB4Oy0tYy1oZWlnaHQ6NDRweDstLWxhYmVsLWxlZnQ6MTBweDstLWxhYmVsLXRvcDowcHg7LS12YWx1ZS1sZWZ0OjEwcHg7LS12YWx1ZS10b3A6MTdweDstLWZvbnQtY29sb3I6cmdiYSgwLDAsMCwuODcpOy0tYmFjay1jb2xvcjojZmZmOy0tZm9udC1zaXplOjE0cHg7LS1mb250LXdlaWdodDoyMDA7LS1mb250LWZhbWlseTpBcmlhbDt9XHJcblx0LnBvc2l0aW9uLXJlbGF0aXZle3Bvc2l0aW9uOnJlbGF0aXZlO31cclxuXHQuaW5wdXQtZmllbGR7Ym9yZGVyOjFweCBzb2xpZCAjZGVlMmU2O2JvcmRlci1yYWRpdXM6MnB4O3dpZHRoOnZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7bWluLWhlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtoZWlnaHQ6YXV0bzt9XHJcblx0LnNpZ25hbC1saW5le2JvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1sZWZ0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7fVxyXG5cdC5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTI0cHg7bGVmdDowcHg7Zm9udC1zaXplOjEycHg7cGFkZGluZzowcHg7fVxyXG5cdC5mbG9hdC1ncm91cHtwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjFweCAxcHggMXB4IDFweDt9XHJcblx0LmZsb2F0LWdyb3VwIC5sYWJlbHtmb250LXNpemU6MTJweDtmb250LXdlaWdodDpub3JtYWw7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTtsZWZ0OnZhcigtLWxhYmVsLWxlZnQpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG5cdC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVse2ZvbnQtc2l6ZTo5cHg7Zm9udC13ZWlnaHQ6Ym9sZCAhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDp2YXIoLS1sYWJlbC10b3ApO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KTt0cmFuc2l0aW9uOmFsbCAyMDBtcztvcGFjaXR5OjE7bWFyZ2luOjA7d2lkdGg6ODclO2hlaWdodDphdXRvO31cclxuXHQ6aG9zdCAvZGVlcC8gdGFnLWlucHV0IC5uZzItdGFnLWlucHV0LmJvb3RzdHJhcDMtaW5mb3toZWlnaHQ6YXV0byAhaW1wb3J0YW50O2xpbmUtaGVpZ2h0OjMzcHggIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIHRhZy1pbnB1dCB0YWd7bGluZS1oZWlnaHQ6MjBweCAhaW1wb3J0YW50O2hlaWdodDoyN3B4ICFpbXBvcnRhbnQ7fVxyXG5cdDpob3N0IC9kZWVwLyBkZWxldGUtaWNvbiBzdmd7aGVpZ2h0OjIycHggIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIHRhZy1pbnB1dCAuYm9vdHN0cmFwMy1pbmZvLm5nMi10YWctaW5wdXR7YmFja2dyb3VuZDogdmFyKC0tYmFjay1jb2xvcik7cGFkZGluZzowcHggIWltcG9ydGFudDtwYWRkaW5nLWxlZnQ6dmFyKC0tdmFsdWUtbGVmdCkgIWltcG9ydGFudDtwYWRkaW5nLXRvcDp2YXIoLS12YWx1ZS10b3ApICFpbXBvcnRhbnQ7fVxyXG5cdDpob3N0IC9kZWVwLyB0YWctaW5wdXQgLm5nMi10YWctaW5wdXR7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDtib3gtc2hhZG93Om5vbmUgIWltcG9ydGFudDt9XHJcblx0Omhvc3QgL2RlZXAvIC5uZzItdGFnLWlucHV0X190ZXh0LWlucHV0e3BhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7aGVpZ2h0OjMycHggIWltcG9ydGFudDtiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrLWNvbG9yKTt9XHJcblx0YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dFRhZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBJbnB1dCgpIGxhYmVsOiBhbnkgPSAnTGFiZWwgTmFtZSc7XHJcblx0QElucHV0KCkgbmFtZTogYW55ID0gJ3NtbC10YWctaW5wdXQnXHJcblx0QElucHV0KCkgaXRlbXM6IGFueSA9IFtdO1xyXG5cdEBPdXRwdXQoKSBnZXR2YWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHRASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcblx0QElucHV0KCkgc3R5bGU6IGFueTtcclxuXHRASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG5cdEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cdG5nT25DaGFuZ2VzKGV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuXHRcdH1cclxuXHRcdGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHRcdFx0bGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuXHRcdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC1jb2xvcicsIGNzc1snY29sb3InXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtc2l6ZScsIGNzc1snZm9udC1zaXplJ10pO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXdlaWdodCcsIGNzc1snZm9udC13ZWlnaHQnXSk7XHJcblx0XHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtZmFtaWx5JywgY3NzWydmb250LWZhbWlseSddKTtcclxuXHRcdH1cclxuXHRcdGlmIChldmVudC5ib3JkZXJTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuYm9yZGVyU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRsZXQgY3NzID0gZXZlbnQuYm9yZGVyU3R5bGUuY3VycmVudFZhbHVlO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrLWNvbG9yJywgY3NzWydiYWNrZ3JvdW5kLWNvbG9yJ10pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkl0ZW1BZGRlZChldmVudCkge1xyXG5cdFx0dGhpcy5nZXR2YWx1ZS5lbWl0KHRoaXMuaXRlbXMpO1xyXG5cdH1cclxuXHRvbkl0ZW1SZW1vdmUoZXZlbnQpIHtcclxuXHRcdHRoaXMuZ2V0dmFsdWUuZW1pdCh0aGlzLml0ZW1zKTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==