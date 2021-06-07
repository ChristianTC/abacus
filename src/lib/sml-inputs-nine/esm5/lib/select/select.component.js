import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
var SelectComponent = /** @class */ (function () {
    function SelectComponent(elementRef) {
        this.elementRef = elementRef;
        this.id = 'sml-input-select';
        this.label = "Label Name";
        this.disabled = false;
        this.clearable = false;
        this.listValue = [];
        this.value = "";
        this.signalStyle = false;
        this.staticStyle = true;
        this.switchStyle = true;
        this.swGroupBy = false;
        this.multiple = false;
        this.selectvalue = new EventEmitter;
        this.isOpen = false;
    }
    SelectComponent.prototype.ngOnInit = function () {
        if (this.value == "") {
            this.value = null;
        }
    };
    SelectComponent.prototype.ngOnChanges = function (event) {
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
    SelectComponent.prototype.getselectvalue = function (event) {
        if (event) {
            this.selectvalue.emit(event.id);
        }
        else {
            this.value = null;
            this.selectvalue.emit("");
        }
    };
    SelectComponent.prototype.onOpen = function () {
        this.isOpen = true;
    };
    SelectComponent.prototype.onClose = function () {
        this.isOpen = false;
    };
    SelectComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], SelectComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "clearable", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "listValue", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "borderStyle", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "valueStyle", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "signalStyle", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "staticStyle", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "switchStyle", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "swGroupBy", void 0);
    __decorate([
        Input()
    ], SelectComponent.prototype, "multiple", void 0);
    __decorate([
        Output()
    ], SelectComponent.prototype, "selectvalue", void 0);
    SelectComponent = __decorate([
        Component({
            selector: 'sml-input-select',
            template: "\n    <div class=\"position-relative\">\n        <div class=\"input-field\" [ngStyle]=\"borderStyle\" [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\">\n            <ng-select *ngIf=\"!swGroupBy\" [items]=\"listValue\" bindLabel=\"name\" [clearable]=\"clearable\" [disabled]=\"disabled\" bindValue=\"id\" (change)=\"getselectvalue($event)\"\n                [(ngModel)]=\"value\"   (open)=\"onOpen()\" (close)=\"onClose()\" [multiple]=\"multiple\">\n            </ng-select>\n            <ng-select *ngIf=\"swGroupBy\" [items]=\"listValue\" bindLabel=\"name\" [clearable]=\"clearable\" [disabled]=\"disabled\" bindValue=\"id\" (change)=\"getselectvalue($event)\"\n                [(ngModel)]=\"value\"   (open)=\"onOpen()\" (close)=\"onClose()\" groupBy=\"group\" [multiple]=\"multiple\">\n                <ng-template ng-optgroup-tmp let-item=\"item\">\n                    {{item.group}}\n                </ng-template>\n            </ng-select>\n            <label *ngIf=\"switchStyle\" class=\"label\" [ngClass]=\"{'z-9999': isOpen}\" [ngStyle]=\"style\">\n                {{ label }}\n            </label>\n        </div>\n        <label *ngIf=\"!switchStyle\" class=\"label\"  [ngStyle]=\"style\">\n            {{ label }}\n        </label>\n    </div>\n    ",
            styles: ["\n    :host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}\n    .position-relative{position:relative;}\n    .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}\n    .float-groupdd{position:relative;padding:0px;}\n    .signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}\n    .label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;\n        text-align: left;}\n    .z-9999{z-index:9999;}\n    .float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}\n    .float-group{position:relative;padding:14px 2px 0px 0px;}\n    .float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}\n    \n\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n    \n    .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}\n    :host /deep/ .ng-select .ng-select-container{border:none !important;}\n    :host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}\n    :host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}\n    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}\n    "]
        })
    ], SelectComponent);
    return SelectComponent;
}());
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxRGpIO0lBaUJJLHlCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBaEJqQyxPQUFFLEdBQVEsa0JBQWtCLENBQUM7UUFDN0IsVUFBSyxHQUFRLFlBQVksQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBSWhCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQ3pDLFdBQU0sR0FBTyxLQUFLLENBQUM7SUFFbkIsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUNELHFDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDbkUsSUFBSSxHQUFH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SUFDMUI7UUFBUixLQUFLLEVBQUU7cURBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO3NEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTtzREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7a0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO2tEQUFZO0lBQ1g7UUFBUixLQUFLLEVBQUU7d0RBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3VEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTt3REFBOEI7SUFDN0I7UUFBUixLQUFLLEVBQUU7d0RBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFO3dEQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTtzREFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7cURBQTJCO0lBQ3pCO1FBQVQsTUFBTSxFQUFFO3dEQUFnQztJQWZoQyxlQUFlO1FBbkQzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxzMENBb0JUO3FCQUNRLCtuRUEwQlI7U0FDSixDQUFDO09BQ1csZUFBZSxDQTREM0I7SUFBRCxzQkFBQztDQUFBLEFBNURELElBNERDO1NBNURZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1pbnB1dC1zZWxlY3QnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCIgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGUsJ2Zsb2F0LWdyb3VwLXN0YXRpYyc6IHN0YXRpY1N0eWxlfVwiPlxyXG4gICAgICAgICAgICA8bmctc2VsZWN0ICpuZ0lmPVwiIXN3R3JvdXBCeVwiIFtpdGVtc109XCJsaXN0VmFsdWVcIiBiaW5kTGFiZWw9XCJuYW1lXCIgW2NsZWFyYWJsZV09XCJjbGVhcmFibGVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBiaW5kVmFsdWU9XCJpZFwiIChjaGFuZ2UpPVwiZ2V0c2VsZWN0dmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCIgICAob3Blbik9XCJvbk9wZW4oKVwiIChjbG9zZSk9XCJvbkNsb3NlKClcIiBbbXVsdGlwbGVdPVwibXVsdGlwbGVcIj5cclxuICAgICAgICAgICAgPC9uZy1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDxuZy1zZWxlY3QgKm5nSWY9XCJzd0dyb3VwQnlcIiBbaXRlbXNdPVwibGlzdFZhbHVlXCIgYmluZExhYmVsPVwibmFtZVwiIFtjbGVhcmFibGVdPVwiY2xlYXJhYmxlXCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgYmluZFZhbHVlPVwiaWRcIiAoY2hhbmdlKT1cImdldHNlbGVjdHZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiICAgKG9wZW4pPVwib25PcGVuKClcIiAoY2xvc2UpPVwib25DbG9zZSgpXCIgZ3JvdXBCeT1cImdyb3VwXCIgW211bHRpcGxlXT1cIm11bHRpcGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmctb3B0Z3JvdXAtdG1wIGxldC1pdGVtPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5ncm91cH19XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L25nLXNlbGVjdD5cclxuICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwic3dpdGNoU3R5bGVcIiBjbGFzcz1cImxhYmVsXCIgW25nQ2xhc3NdPVwieyd6LTk5OTknOiBpc09wZW59XCIgW25nU3R5bGVdPVwic3R5bGVcIj5cclxuICAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGxhYmVsICpuZ0lmPVwiIXN3aXRjaFN0eWxlXCIgY2xhc3M9XCJsYWJlbFwiICBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICA6aG9zdHstLWMtd2lkdGg6NjQ1cHg7LS1jLWhlaWdodDo0NHB4Oy0tbGFiZWwtbGVmdDo0cHg7LS1sYWJlbC10b3A6MnB4Oy0tdmFsdWUtbGVmdDo0cHg7LS12YWx1ZS10b3A6MTdweDstLWZvbnQtY29sb3I6cmdiYSgwLDAsMCwuODcpOy0tYmFjay1jb2xvcjojZmZmOy0tZm9udC1zaXplOjE0cHg7LS1mb250LXdlaWdodDoyMDA7LS1mb250LWZhbWlseTpBcmlhbDt9XHJcbiAgICAucG9zaXRpb24tcmVsYXRpdmV7cG9zaXRpb246cmVsYXRpdmU7fVxyXG4gICAgLmlucHV0LWZpZWxke2JvcmRlcjoxcHggc29saWQgI2RlZTJlNjtib3JkZXItcmFkaXVzOjJweDt3aWR0aDp2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O21pbi1oZWlnaHQ6dmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87fVxyXG4gICAgLmZsb2F0LWdyb3VwZGR7cG9zaXRpb246cmVsYXRpdmU7cGFkZGluZzowcHg7fVxyXG4gICAgLnNpZ25hbC1saW5le2JvcmRlci10b3A6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1sZWZ0Om5vbmUgIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6MHB4ICFpbXBvcnRhbnQ7fVxyXG4gICAgLmxhYmVse3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMjRweDtsZWZ0OjBweDtmb250LXNpemU6MTJweDtwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O31cclxuICAgIC56LTk5OTl7ei1pbmRleDo5OTk5O31cclxuICAgIC5mbG9hdC1ncm91cGRkIC5sYWJlbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTI0cHg7bGVmdDowcHg7Zm9udC1zaXplOjEycHg7fVxyXG4gICAgLmZsb2F0LWdyb3Vwe3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTRweCAycHggMHB4IDBweDt9XHJcbiAgICAuZmxvYXQtZ3JvdXAgLmxhYmVse2ZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO2xlZnQ6dmFyKC0tbGFiZWwtbGVmdCk7dHJhbnNpdGlvbjphbGwgMjAwbXM7b3BhY2l0eToxO21hcmdpbjowO3dpZHRoOjg3JTtoZWlnaHQ6YXV0b31cclxuICAgIFxyXG5cclxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSB7XHJcbiAgICAgICAgKjo6LW1zLWJhY2tkcm9wLCAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgICAgICAgICAgdG9wOiAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZsb2F0LWdyb3VwLXN0YXRpYyAubGFiZWx7Zm9udC1zaXplOjlweDtmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOnZhcigtLWxhYmVsLXRvcCk7bGVmdDp2YXIoLS1sYWJlbC1sZWZ0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwcHgpO3RyYW5zaXRpb246YWxsIDIwMG1zO29wYWNpdHk6MTttYXJnaW46MDt3aWR0aDo4NyU7aGVpZ2h0OmF1dG87fVxyXG4gICAgOmhvc3QgL2RlZXAvIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyOm5vbmUgIWltcG9ydGFudDt9XHJcbiAgICA6aG9zdCAvZGVlcC8gLm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctbGVmdDp2YXIoLS12YWx1ZS1sZWZ0KSAhaW1wb3J0YW50O3BhZGRpbmctdG9wOnZhcigtLXZhbHVlLXRvcCkgIWltcG9ydGFudDt9XHJcbiAgICA6aG9zdCAvZGVlcC8gLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVye2hlaWdodDp2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplKSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OnZhcigtLWZvbnQtd2VpZ2h0KSAhaW1wb3J0YW50O2ZvbnQtZmFtaWx5OnZhcigtLWZvbnQtZmFtaWx5KSAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6dmFyKC0tYmFjay1jb2xvcikgIWltcG9ydGFudDtjb2xvcjp2YXIoLS1mb250LWNvbG9yKSAhaW1wb3J0YW50O31cclxuICAgIDpob3N0IC9kZWVwLyAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7dG9wOnZhcigtLXZhbHVlLXRvcCkgIWltcG9ydGFudDt9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGlkOiBhbnkgPSAnc21sLWlucHV0LXNlbGVjdCc7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogYW55ID0gXCJMYWJlbCBOYW1lXCI7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY2xlYXJhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBsaXN0VmFsdWU6IGFueSA9IFtdO1xyXG4gICAgQElucHV0KCkgdmFsdWU6IGFueSA9IFwiXCI7XHJcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzd0dyb3VwQnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgaXNPcGVuOmFueSA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZih0aGlzLnZhbHVlID09IFwiXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvbnQtY29sb3InLCBjc3NbJ2NvbG9yJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LXNpemUnLCBjc3NbJ2ZvbnQtc2l6ZSddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZm9udC13ZWlnaHQnLCBjc3NbJ2ZvbnQtd2VpZ2h0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb250LWZhbWlseScsIGNzc1snZm9udC1mYW1pbHknXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5ib3JkZXJTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuYm9yZGVyU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuYm9yZGVyU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1iYWNrLWNvbG9yJywgY3NzWydiYWNrZ3JvdW5kLWNvbG9yJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldHNlbGVjdHZhbHVlKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdHZhbHVlLmVtaXQoZXZlbnQuaWQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3R2YWx1ZS5lbWl0KFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uT3Blbigpe1xyXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIG9uQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==