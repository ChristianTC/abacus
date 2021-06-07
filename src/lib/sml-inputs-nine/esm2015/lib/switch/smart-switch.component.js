import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let SwitchComponent = class SwitchComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isChecked = false;
        this.isBorderStyle = false;
        this.toggleStyle = new EventEmitter();
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.switchStyles != undefined && event.switchStyles.currentValue != undefined) {
            let css = event.switchStyles.currentValue;
            this.elementRef.nativeElement.style.setProperty('--switch-width', css.width);
            this.elementRef.nativeElement.style.setProperty('--switch-height', css.height);
            this.elementRef.nativeElement.style.setProperty('--switch-ball-size', this.getBallSize(css));
            this.elementRef.nativeElement.style.setProperty('--switch-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--switch-border-radius', css.borderradius);
            this.elementRef.nativeElement.style.setProperty('--switch-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--switch-background-checked', css.background);
            this.elementRef.nativeElement.style.setProperty('--switch-background-unchecked', css['background-unchecked']);
            this.elementRef.nativeElement.style.setProperty('--switch-color', css.colorcheck);
            this.elementRef.nativeElement.style.setProperty('--switch-radius', css.ballradius);
            this.elementRef.nativeElement.style.setProperty('--switch-transformx', this.getTransformx(css));
        }
        if (event.labelStyle != undefined && event.labelStyle.currentValue != undefined) {
            let css = event.labelStyle.currentValue;
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
    getTransformx(css) {
        let w = css.width.replace('px', '');
        let h = css.height.replace('px', '');
        let trx = ((w - (h - 8)) - 8);
        return trx + 'px';
    }
    getBallSize(css) {
        let h = css.height.replace('px', '');
        let bw = css.borderwidth.replace('px', '');
        return (h - 8 - (bw * 2)) + 'px';
    }
    onChange(event) {
        this.toggleStyle.emit(this.isChecked);
    }
};
SwitchComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], SwitchComponent.prototype, "labelText", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "label", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "isChecked", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "switchStyles", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "isBorderStyle", void 0);
__decorate([
    Output()
], SwitchComponent.prototype, "toggleStyle", void 0);
SwitchComponent = __decorate([
    Component({
        selector: 'sml-input-switch',
        template: `
  <div class="position-relative">
  <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
    [ngStyle]="borderStyle">
    <div class="form-ctr">
      <label class="switch">
        <input type="checkbox" [(ngModel)]="isChecked" 
        (change)="onChange($event)" id="togBtn">
        <div class="slider round">
          <span class="on" [ngStyle]="valueStyle">{{switchStyles?.labelChekecd}}</span>
          <span class="off" [ngStyle]="valueStyle">{{switchStyles?.labelUnChekecd}}</span>
        </div>
      </label>
      <label class="label" [ngStyle]="labelStyle">{{label}}</label>
    </div>
  </div>
  </div>
  `,
        styles: [`
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --switch-width: 70px;
    --switch-height: 34px;
    --switch-height: 34px;
    --switch-ball-size: 26px;
    --switch-border-width: 0px;
    --switch-border-radius: 34px;
    --switch-border-color: #D5DBE0;
    --switch-background-checked: #348fe2;
    --switch-background-unchecked:#D5DBE0;
    --switch-color: #ffffff;
    --switch-radius: 34px;
    --switch-transformx: 35px;
    --label-left: 10px;
    --label-top: 0px;
    --value-left: 10px;
    --value-top: 0px;
}
/* box css */
.position-relative {
    position: relative;
}
.input-field {
    border: 1px solid #dee2e6;
    border-radius: 2px;
    width: var(--c-width) !important;
    min-height: var(--c-height) !important;
    height: auto;
}
.switch {
    position: relative;
    display: inline-block;
    width: var(--switch-width);
    height: var(--switch-height);
}
.switch input {
    display:none;
}
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--switch-background-unchecked);
    -webkit-transition: .4s;
    transition: .4s;
}
.slider:before {
    position: absolute;
    content: "";
    height: var(--switch-ball-size);
    width: var(--switch-ball-size);
    left: 4px;
    bottom: 4px;
    background-color: var(--switch-color);
    -webkit-transition: .4s;
    transition: .4s;
}
input:checked + .slider {
    background-color: var(--switch-background-checked);
}
input:focus + .slider {
    box-shadow: 0 0 1px var(--switch-background-checked);
}
input:checked + .slider:before {
    -webkit-transform: translateX(var(--switch-transformx));
    -ms-transform: translateX(var(--switch-transformx));    
    transform: translateX(var(--switch-transformx));
}  
.on{
    display: none;
}
.on{
    color: var(--switch-color);
    position: absolute;
    transform: translate(-60%,-50%);
    top: 50%;
    left: 40%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
}
.off{
    color: var(--switch-color);
    position: absolute;
    transform: translate(-40%,-50%);
    top: 50%;
    left: 60%;
    font-size: 10px;
    font-family: Verdana, sans-serif;
}
input:checked+ .slider .on{
    display: block;
}
input:checked + .slider .off{
    display: none;
}
.slider.round {
    border-radius: var(--switch-border-radius);
    border-width: var(--switch-border-width) !important;
    border-color: var(--switch-border-color) !important;
    border: 1px solid;
}
.slider.round:before {
    border-radius: var(--switch-radius);
}
.form-ctr{
    display: block;
    padding-top: 8px;
    padding-right: 0.75rem;
    padding-bottom: 3px;
    padding-left: var(--value-left);
    min-height: var(--c-height) !important;
}
.signal-line{
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0px !important;
}
label{
    margin-bottom: 0px !important;
}
.label {
    position: absolute;
    top: -24px;
    left: 0px; 
    font-size: 12px;
    transition: all 0.1s;
}
.float-group {
    position: relative;
    padding: 14px 24px 0px 0px;
}
.float-group .form-ctr {
    padding-top: var(--value-top);
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: var(--value-left);
}
.float-group .label {
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
  `]
    })
], SwitchComponent);
export { SwitchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9zd2l0Y2gvc21hcnQtc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBc0wzRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBY3hCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFWakMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQU8zQixrQkFBYSxHQUFRLEtBQUssQ0FBQztRQUMxQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFHM0MsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBQ0QsV0FBVyxDQUFDLEtBQUs7UUFDYixJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUNqRixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RixJ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aUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2SlY7S0FDRixDQUFDO0dBRVcsZUFBZSxDQTZEM0I7U0E3RFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtaW5wdXQtc3dpdGNoJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGV9XCJcclxuICAgIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jdHJcIj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwic3dpdGNoXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCIgXHJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgaWQ9XCJ0b2dCdG5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyIHJvdW5kXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm9uXCIgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiPnt7c3dpdGNoU3R5bGVzPy5sYWJlbENoZWtlY2R9fTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwib2ZmXCIgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiPnt7c3dpdGNoU3R5bGVzPy5sYWJlbFVuQ2hla2VjZH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIFtuZ1N0eWxlXT1cImxhYmVsU3R5bGVcIj57e2xhYmVsfX08L2xhYmVsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICA6aG9zdCB7XHJcbiAgICAtLWMtd2lkdGg6IDY0NXB4O1xyXG4gICAgLS1jLWhlaWdodDogMjVweDtcclxuICAgIC0tc3dpdGNoLXdpZHRoOiA3MHB4O1xyXG4gICAgLS1zd2l0Y2gtaGVpZ2h0OiAzNHB4O1xyXG4gICAgLS1zd2l0Y2gtaGVpZ2h0OiAzNHB4O1xyXG4gICAgLS1zd2l0Y2gtYmFsbC1zaXplOiAyNnB4O1xyXG4gICAgLS1zd2l0Y2gtYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAtLXN3aXRjaC1ib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gICAgLS1zd2l0Y2gtYm9yZGVyLWNvbG9yOiAjRDVEQkUwO1xyXG4gICAgLS1zd2l0Y2gtYmFja2dyb3VuZC1jaGVja2VkOiAjMzQ4ZmUyO1xyXG4gICAgLS1zd2l0Y2gtYmFja2dyb3VuZC11bmNoZWNrZWQ6I0Q1REJFMDtcclxuICAgIC0tc3dpdGNoLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLS1zd2l0Y2gtcmFkaXVzOiAzNHB4O1xyXG4gICAgLS1zd2l0Y2gtdHJhbnNmb3JteDogMzVweDtcclxuICAgIC0tbGFiZWwtbGVmdDogMTBweDtcclxuICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAtLXZhbHVlLWxlZnQ6IDEwcHg7XHJcbiAgICAtLXZhbHVlLXRvcDogMHB4O1xyXG59XHJcbi8qIGJveCBjc3MgKi9cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHdpZHRoOiB2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogdmFyKC0tc3dpdGNoLXdpZHRoKTtcclxuICAgIGhlaWdodDogdmFyKC0tc3dpdGNoLWhlaWdodCk7XHJcbn1cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYmFja2dyb3VuZC11bmNoZWNrZWQpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogdmFyKC0tc3dpdGNoLWJhbGwtc2l6ZSk7XHJcbiAgICB3aWR0aDogdmFyKC0tc3dpdGNoLWJhbGwtc2l6ZSk7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN3aXRjaC1jb2xvcik7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYmFja2dyb3VuZC1jaGVja2VkKTtcclxufVxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCB2YXIoLS1zd2l0Y2gtYmFja2dyb3VuZC1jaGVja2VkKTtcclxufVxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tc3dpdGNoLXRyYW5zZm9ybXgpKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tc3dpdGNoLXRyYW5zZm9ybXgpKTsgICAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tc3dpdGNoLXRyYW5zZm9ybXgpKTtcclxufSAgXHJcbi5vbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm9ue1xyXG4gICAgY29sb3I6IHZhcigtLXN3aXRjaC1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4ub2Zme1xyXG4gICAgY29sb3I6IHZhcigtLXN3aXRjaC1jb2xvcik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDAlLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA2MCU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG5pbnB1dDpjaGVja2VkKyAuc2xpZGVyIC5vbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3dpdGNoLWJvcmRlci1yYWRpdXMpO1xyXG4gICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1zd2l0Y2gtYm9yZGVyLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zd2l0Y2gtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbn1cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tc3dpdGNoLXJhZGl1cyk7XHJcbn1cclxuLmZvcm0tY3Rye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNpZ25hbC1saW5le1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxubGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMjRweDtcclxuICAgIGxlZnQ6IDBweDsgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcclxufVxyXG4uZmxvYXQtZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTRweCAyNHB4IDBweCAwcHg7XHJcbn1cclxuLmZsb2F0LWdyb3VwIC5mb3JtLWN0ciB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG59XHJcbi5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHdpZHRoOiA4NyU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGxhYmVsVGV4dDogYW55O1xyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlzQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc3dpdGNoU3R5bGVzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgbGFiZWxTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgaXNCb3JkZXJTdHlsZTogYW55ID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgdG9nZ2xlU3R5bGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuc3dpdGNoU3R5bGVzICE9IHVuZGVmaW5lZCAmJiBldmVudC5zd2l0Y2hTdHlsZXMuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuc3dpdGNoU3R5bGVzLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3dpdGNoLXdpZHRoJywgY3NzLndpZHRoKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3dpdGNoLWhlaWdodCcsIGNzcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2l0Y2gtYmFsbC1zaXplJywgdGhpcy5nZXRCYWxsU2l6ZShjc3MpKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tc3dpdGNoLWJvcmRlci13aWR0aCcsIGNzcy5ib3JkZXJ3aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN3aXRjaC1ib3JkZXItcmFkaXVzJywgY3NzLmJvcmRlcnJhZGl1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN3aXRjaC1ib3JkZXItY29sb3InLCBjc3MuYm9yZGVyY29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2l0Y2gtYmFja2dyb3VuZC1jaGVja2VkJywgY3NzLmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2l0Y2gtYmFja2dyb3VuZC11bmNoZWNrZWQnLCBjc3NbJ2JhY2tncm91bmQtdW5jaGVja2VkJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zd2l0Y2gtY29sb3InLCBjc3MuY29sb3JjaGVjayk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN3aXRjaC1yYWRpdXMnLCBjc3MuYmFsbHJhZGl1cyk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXN3aXRjaC10cmFuc2Zvcm14JywgdGhpcy5nZXRUcmFuc2Zvcm14KGNzcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQubGFiZWxTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQubGFiZWxTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC5sYWJlbFN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFRyYW5zZm9ybXgoY3NzKSB7XHJcbiAgICAgICAgbGV0IHcgPSBjc3Mud2lkdGgucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICAgICAgbGV0IGggPSBjc3MuaGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgICAgIGxldCB0cnggPSAoKHcgLSAoaCAtIDgpKSAtIDgpO1xyXG4gICAgICAgIHJldHVybiB0cnggKyAncHgnO1xyXG4gICAgfVxyXG4gICAgZ2V0QmFsbFNpemUoY3NzKSB7XHJcbiAgICAgICAgbGV0IGggPSBjc3MuaGVpZ2h0LnJlcGxhY2UoJ3B4JywgJycpO1xyXG4gICAgICAgIGxldCBidyA9IGNzcy5ib3JkZXJ3aWR0aC5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgICAgICByZXR1cm4gKGggLSA4IC0gKGJ3ICogMikpICsgJ3B4JztcclxuICAgIH1cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVTdHlsZS5lbWl0KHRoaXMuaXNDaGVja2VkKTtcclxuICAgICB9XHJcbn1cclxuIl19