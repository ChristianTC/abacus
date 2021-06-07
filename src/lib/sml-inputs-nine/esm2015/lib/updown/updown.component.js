import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let UpdownComponent = class UpdownComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.initialValue = 0;
        this.isNagative = false;
        this.textAlign = 'right';
        this.isLabel = false;
        this.staticStyle = false;
        this.valueChange = new EventEmitter();
    }
    ngOnInit() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        else {
            this.initialValue = parseInt(this.initialValue);
        }
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
    styleObject() {
        let nType = {};
        Object.assign(nType, this.valueStyle);
        Object.assign(nType, this.borderStyle);
        return nType;
    }
    increaseValue() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        this.initialValue += 1;
        this.valueChange.emit(this.initialValue);
    }
    decreaseValue() {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        if (this.initialValue > 0) {
            this.initialValue -= 1;
            this.valueChange.emit(this.initialValue);
        }
        if (this.isNagative) {
            this.initialValue -= 1;
            this.valueChange.emit(this.initialValue);
        }
        return false;
    }
    onBlurMethod() {
        this.valueChange.emit(this.initialValue);
    }
};
UpdownComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], UpdownComponent.prototype, "initialValue", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "isNagative", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "textAlign", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "label", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "isLabel", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "style", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], UpdownComponent.prototype, "staticStyle", void 0);
__decorate([
    Output()
], UpdownComponent.prototype, "valueChange", void 0);
UpdownComponent = __decorate([
    Component({
        selector: 'sml-input-updown',
        template: `
  <div class="position-relative">
  <div class="input-field" 
    [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
    [ngStyle]="borderStyle">
    <input 
        type="number" 
        [(ngModel)]="initialValue" 
        [ngStyle]="valueStyle"
        (blur)="onBlurMethod()"
        [style.text-align]="textAlign"
        class="form-control" required>
    <div class="numberSpinner">
      <a href="javascript:void(0)" (click)="increaseValue()" class="spinnerBtn">
        <i class="fa fa-caret-up"></i>
      </a>
      <a href="javascript:void(0)" (click)="decreaseValue()" class="spinnerBtn">
        <i class="fa fa-caret-down"></i>
      </a>
    </div>
    <label *ngIf="isLabel" [ngStyle]="style" class="label">{{label}}</label>
  </div>
</div>
  `,
        styles: [`
  /* css variable */
  :host {
      --c-width: 100%;
      --c-height: 25px;
      --label-left: 10px;
      --label-top: 0px;
      --value-left: 10px;
      --value-top: 0px;
  }
  /* box css */
  .position-relative {
      position: relative;
      width: var(--c-width) !important;
  }
  .input-field {
      border: 1px solid #dee2e6;
      border-radius: 2px;
      min-height: var(--c-height) !important;
      height: auto;
  }
  /* control css */
  .form-control {
      display: block;
      padding-top: 0.375rem;
      padding-right: var(--value-left);
      padding-bottom: 0.375rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: none;
      text-align: right;
      min-height: var(--c-height) !important;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  .form-control {
      background-color: inherit;
      box-shadow: none !important;
  }
  .signal-line{
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      border-radius: 0px !important;
  }
  /* labelcss */
  .label{
      position: absolute; 
      top: -24px;
      left: 0px; 
      font-size: 12px;
      padding: 0px !important;
        text-align: left;
  }
  .float-group {
      position: relative;
      padding: 14px 7px 2px 0px;
  }
  .float-group .form-control {
      padding-top: var(--value-top);
      padding-right: var(--value-left);
      padding-bottom: 0px;
      padding-left: var(--value-left);
  }
  .float-group .label {
      font-size: 12px;
      font-weight: normal;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: var(--label-left);
      transition: all 200ms;
      opacity: 1;
      margin: 0;
      width: 87%;
      height: auto;
  }
  .float-group .form-control:focus {
      outline: none !important;
      box-shadow: none;
  }
  .float-group-static .label {
    font-size: 9px;
      font-weight: bold !important;  /* floating lable always bold */
      position: absolute;
      top: var(--label-top);
      left: var(--label-left);
      transform: translateY(0px);
      transition: all 200ms;
      opacity: 1;
      margin: 0;
      width: 87%;
      height: auto;
  }
  .float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {
      font-size: 9px;
      font-weight: bold !important;  /* floating lable always bold */
      position: absolute;
      top: var(--label-top);
      left: var(--label-left);
      transform: translateY(0px);
      transition: all 200ms;
      opacity: 1;
      margin: 0;
      width: 87%;
      height: auto;
  }
  
  .numberSpinner {
      display: inline-flex;
      flex-direction: column;
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      overflow: hidden;
      z-index: 1;
  }
  .spinnerBtn {
      background: #f1f1f1;
      border: none;
      font-size: 14px;
      color: initial;
      padding: 0 7px;
      display: flex;
      height: 50%;
      align-items: center;
      justify-content: center;
  }
  .spinnerBtn:active {
      color: #fff;
      background: #666666!important;
  }
  .spinnerBtn:hover {
      background: #d1d1d1;
      text-decoration: none;
  }
  input[type=number]::-webkit-inner-spin-button{
      opacity: 0;
      font-size: 14px
  } 
  `]
    })
], UpdownComponent);
export { UpdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi91cGRvd24vdXBkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0wzRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBY3hCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFiakMsaUJBQVksR0FBUSxDQUFDLENBQUM7UUFFdEIsZUFBVSxHQUFRLEtBQUssQ0FBQztRQUN4QixjQUFTLEdBQVEsT0FBTyxDQUFDO1FBRXpCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFLckIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRzNDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUN4RixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDbkUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUs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O21EQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTtrREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7OENBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtnREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7OENBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTttREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7b0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO29EQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTtvREFBOEI7QUFDNUI7SUFBVCxNQUFNLEVBQUU7b0RBQWtDO0FBWmxDLGVBQWU7SUE5SzNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCWDtpQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrSlY7S0FDRixDQUFDO0dBQ1csZUFBZSxDQXVFM0I7U0F2RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtaW5wdXQtdXBkb3duJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgXHJcbiAgICBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiIFxyXG4gICAgICAgIFsobmdNb2RlbCldPVwiaW5pdGlhbFZhbHVlXCIgXHJcbiAgICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiXHJcbiAgICAgICAgKGJsdXIpPVwib25CbHVyTWV0aG9kKClcIlxyXG4gICAgICAgIFtzdHlsZS50ZXh0LWFsaWduXT1cInRleHRBbGlnblwiXHJcbiAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiByZXF1aXJlZD5cclxuICAgIDxkaXYgY2xhc3M9XCJudW1iZXJTcGlubmVyXCI+XHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwiaW5jcmVhc2VWYWx1ZSgpXCIgY2xhc3M9XCJzcGlubmVyQnRuXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC11cFwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgKGNsaWNrKT1cImRlY3JlYXNlVmFsdWUoKVwiIGNsYXNzPVwic3Bpbm5lckJ0blwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2FyZXQtZG93blwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bGFiZWwgKm5nSWY9XCJpc0xhYmVsXCIgW25nU3R5bGVdPVwic3R5bGVcIiBjbGFzcz1cImxhYmVsXCI+e3tsYWJlbH19PC9sYWJlbD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAvKiBjc3MgdmFyaWFibGUgKi9cclxuICA6aG9zdCB7XHJcbiAgICAgIC0tYy13aWR0aDogMTAwJTtcclxuICAgICAgLS1jLWhlaWdodDogMjVweDtcclxuICAgICAgLS1sYWJlbC1sZWZ0OiAxMHB4O1xyXG4gICAgICAtLWxhYmVsLXRvcDogMHB4O1xyXG4gICAgICAtLXZhbHVlLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC0tdmFsdWUtdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC8qIGJveCBjc3MgKi9cclxuICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC8qIGNvbnRyb2wgY3NzICovXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMC4zNzVyZW07XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWduYWwtbGluZXtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC8qIGxhYmVsY3NzICovXHJcbiAgLmxhYmVse1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB0b3A6IC0yNHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7IFxyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTRweCA3cHggMnB4IDBweDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB3aWR0aDogODclO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB3aWR0aDogODclO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzLXdpdGhpbiB+IC5sYWJlbCwuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDp2YWxpZCB+IC5sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgLyogZmxvYXRpbmcgbGFibGUgYWx3YXlzIGJvbGQgKi9cclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm51bWJlclNwaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5zcGlubmVyQnRuIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuc3Bpbm5lckJ0bjphY3RpdmUge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzY2NjY2NiFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zcGlubmVyQnRuOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2QxZDFkMTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b257XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gIH0gXHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVwZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IGFueSA9IDA7XHJcbiAgICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgaXNOYWdhdGl2ZTogYW55ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSB0ZXh0QWxpZ246IGFueSA9ICdyaWdodCc7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaXNMYWJlbDogYW55ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuaW5pdGlhbFZhbHVlID09IFwiXCIgfHwgdGhpcy5pbml0aWFsVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBwYXJzZUludCh0aGlzLmluaXRpYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVPYmplY3QoKTogT2JqZWN0IHtcclxuICAgICAgICBsZXQgblR5cGUgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKG5UeXBlLCB0aGlzLnZhbHVlU3R5bGUpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oblR5cGUsIHRoaXMuYm9yZGVyU3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBuVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZVZhbHVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5pbml0aWFsVmFsdWUgPT0gXCJcIiB8fCB0aGlzLmluaXRpYWxWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgKz0gMTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5pbml0aWFsVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlYXNlVmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlID09IHVuZGVmaW5lZCB8fCB0aGlzLmluaXRpYWxWYWx1ZSA9PSBcIlwiIHx8IHRoaXMuaW5pdGlhbFZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmluaXRpYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTmFnYXRpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuaW5pdGlhbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgb25CbHVyTWV0aG9kKCkge1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmluaXRpYWxWYWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19