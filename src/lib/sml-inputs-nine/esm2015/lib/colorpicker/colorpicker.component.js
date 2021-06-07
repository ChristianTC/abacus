import { __decorate } from "tslib";
import { Component, Input, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
let ColorPickerComponent = class ColorPickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.color = '#d6d6d6';
        this.isLabel = false;
        this.staticStyle = false;
        this.event = new EventEmitter();
        this.selectedColor = new EventEmitter();
        this.show = false;
        this.defaultColors = [
            '#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF',
            '#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF',
            '#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE',
            '#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD',
            '#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5',
            '#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B',
            '#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842',
            '#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'
        ];
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
    changeColor(color) {
        this.color = color;
        this.event.emit(this.color);
        this.selectedColor.emit(this.color);
        this.show = false;
    }
    changeColorManual(color) {
        const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
        if (isValid) {
            this.color = color;
            this.event.emit(this.color);
            this.selectedColor.emit(this.color);
        }
    }
    toggleColors() {
        this.show = !this.show;
    }
};
ColorPickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ColorPickerComponent.prototype, "heading", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "color", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "isLabel", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], ColorPickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "event", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "selectedColor", void 0);
ColorPickerComponent = __decorate([
    Component({
        selector: 'sml-input-colorpicker',
        template: `
  <div class="color-picker position-relative">
  <div class="input-field" 
       [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle ,'float-group-static': staticStyle}"
       [ngStyle]="borderStyle"
       >
    <input 
        type="text" 
        name="color" 
        class="form-control"
        [ngStyle]="valueStyle"
        [value]="color"
        required>
        <span (click)="toggleColors()" class="icon"  [style.background]="color"></span>
    <label *ngIf="isLabel" 
          [ngStyle]="style" 
          class="label">
          {{label}}
    </label>
  </div>
  <div *ngIf="show" class="opened">
    <div class="colors">
      <div (click)="changeColor(paint)" *ngFor="let paint of defaultColors" class="circle"
      [ngStyle]="{'background': paint}"></div>
    </div> 
  </div>
  </div>
  `,
        styles: [`
  :host {
    --c-width: 100%;
    --c-height: 25px;
    --label-left: 10px;
    --label-top: 0px;
    --value-left: 10px;
    --value-top: 0px;
}
.color-picker .circle {
    height: 19px;
    width: 19px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #fff;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
.color-picker .opened {
    box-shadow: 0 7px 13px 0 rgba(86, 95, 102, 0.07);
    background: #fff;
    max-width: 164px;
    padding: 1px;
    z-index: 99;
    border-radius: 5px;
    position: absolute;
    margin-top: 5px;
    right: 0px;
}
.color-picker .opened .colors {
    display: flex;
    flex-wrap: wrap;
}
.color-picker .opened .colors .circle {
    flex: 20px 0 0;
}
.color-picker .opened .colors .circle:nth-child(5n) {
    margin-right: 0;
}
.color-picker .opened .hex-code {
    display: flex;
    margin-top: 20px;
}
.color-picker .opened .hex-code p {
    width: 50%;
    text-align: center;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    line-height: 45px;
}
.color-picker .opened .hex-code .g-input {
    border: 1px solid #e8ebed;
    height: 45px;
    border-radius: 5px;
    width: 120px;
}
.color-picker .opened .hex-code .g-input input {
    border: none;
    width: 100%;
    text-transform: uppercase;
    outline: none;
    text-align: center;
    letter-spacing: 1.5px;
    color: #595b65;
    height: 100%;
    border-radius: 2px;
    margin: 0;
    padding: 0;
}
.color-picker .colorpicker {
    position: relative;
    border-radius: 3px;
    width: 100%;
    border: 1px solid #c3c0c0;
}
.color-picker .icon {
    position: absolute;
    background: #ccc;
    width: 20px;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);
    right: 9px;
    border-radius: 3px;
}
.color-picker .text-black-lighter {
    color: #404040 !important;
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
/* Control Css */
.form-control {
    display: block;
    padding-top: 0.375rem;
    padding-right: 0.75rem;
    padding-bottom: 0.375rem;
    padding-left: var(--value-left);
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
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
/* label css */
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
    padding: 14px 24px 2px 0px;
}
.float-group .form-control {
    padding-top: var(--value-top);
    padding-right: 0px;
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
.float-group .form-control:focus {
    outline: none !important;
    box-shadow: none;
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
`]
    })
], ColorPickerComponent);
export { ColorPickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3JwaWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWlucHV0cy1uaW5lLyIsInNvdXJjZXMiOlsibGliL2NvbG9ycGlja2VyL2NvbG9ycGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK04zRixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQTBCN0IsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXhCakMsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBTXJCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFVBQUssR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN6RCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEMsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGtCQUFhLEdBQWE7WUFDN0IsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7WUFDdEYsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFF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LElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDTSxZQUFZO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztDQUNKLENBQUE7O1lBeENtQyxVQUFVOztBQXpCakM7SUFBUixLQUFLLEVBQUU7cURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO21EQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTtxREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7eURBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO21EQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7bURBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTt3REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7eURBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3lEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTt5REFBa0I7QUFDaEI7SUFBVCxNQUFNLEVBQUU7bURBQTBEO0FBQ3pEO0lBQVQsTUFBTSxFQUFFOzJEQUFvQztBQVpwQyxvQkFBb0I7SUE3TmhDLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQlg7aUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZMWjtLQUNBLENBQUM7R0FDVyxvQkFBb0IsQ0FrRWhDO1NBbEVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtaW5wdXQtY29sb3JwaWNrZXInLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgXHJcbiAgICAgICBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSAsJ2Zsb2F0LWdyb3VwLXN0YXRpYyc6IHN0YXRpY1N0eWxlfVwiXHJcbiAgICAgICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiXHJcbiAgICAgICA+XHJcbiAgICA8aW5wdXQgXHJcbiAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICBuYW1lPVwiY29sb3JcIiBcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cImNvbG9yXCJcclxuICAgICAgICByZXF1aXJlZD5cclxuICAgICAgICA8c3BhbiAoY2xpY2spPVwidG9nZ2xlQ29sb3JzKClcIiBjbGFzcz1cImljb25cIiAgW3N0eWxlLmJhY2tncm91bmRdPVwiY29sb3JcIj48L3NwYW4+XHJcbiAgICA8bGFiZWwgKm5nSWY9XCJpc0xhYmVsXCIgXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiIFxyXG4gICAgICAgICAgY2xhc3M9XCJsYWJlbFwiPlxyXG4gICAgICAgICAge3tsYWJlbH19XHJcbiAgICA8L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgKm5nSWY9XCJzaG93XCIgY2xhc3M9XCJvcGVuZWRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2xvcnNcIj5cclxuICAgICAgPGRpdiAoY2xpY2spPVwiY2hhbmdlQ29sb3IocGFpbnQpXCIgKm5nRm9yPVwibGV0IHBhaW50IG9mIGRlZmF1bHRDb2xvcnNcIiBjbGFzcz1cImNpcmNsZVwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZCc6IHBhaW50fVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+IFxyXG4gIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgOmhvc3Qge1xyXG4gICAgLS1jLXdpZHRoOiAxMDAlO1xyXG4gICAgLS1jLWhlaWdodDogMjVweDtcclxuICAgIC0tbGFiZWwtbGVmdDogMTBweDtcclxuICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAtLXZhbHVlLWxlZnQ6IDEwcHg7XHJcbiAgICAtLXZhbHVlLXRvcDogMHB4O1xyXG59XHJcbi5jb2xvci1waWNrZXIgLmNpcmNsZSB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29sb3ItcGlja2VyIC5vcGVuZWQge1xyXG4gICAgYm94LXNoYWRvdzogMCA3cHggMTNweCAwIHJnYmEoODYsIDk1LCAxMDIsIDAuMDcpO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1heC13aWR0aDogMTY0cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmNvbG9yLXBpY2tlciAub3BlbmVkIC5jb2xvcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uY29sb3ItcGlja2VyIC5vcGVuZWQgLmNvbG9ycyAuY2lyY2xlIHtcclxuICAgIGZsZXg6IDIwcHggMCAwO1xyXG59XHJcbi5jb2xvci1waWNrZXIgLm9wZW5lZCAuY29sb3JzIC5jaXJjbGU6bnRoLWNoaWxkKDVuKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmNvbG9yLXBpY2tlciAub3BlbmVkIC5oZXgtY29kZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY29sb3ItcGlja2VyIC5vcGVuZWQgLmhleC1jb2RlIHAge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxufVxyXG4uY29sb3ItcGlja2VyIC5vcGVuZWQgLmhleC1jb2RlIC5nLWlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGViZWQ7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmNvbG9yLXBpY2tlciAub3BlbmVkIC5oZXgtY29kZSAuZy1pbnB1dCBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgY29sb3I6ICM1OTViNjU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb2xvci1waWNrZXIgLmNvbG9ycGlja2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzBjMDtcclxufVxyXG4uY29sb3ItcGlja2VyIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgcmlnaHQ6IDlweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4uY29sb3ItcGlja2VyIC50ZXh0LWJsYWNrLWxpZ2h0ZXIge1xyXG4gICAgY29sb3I6ICM0MDQwNDAgIWltcG9ydGFudDtcclxufVxyXG4vKiBib3ggY3NzICovXHJcbi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxufVxyXG4uaW5wdXQtZmllbGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi8qIENvbnRyb2wgQ3NzICovXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zNzVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2lnbmFsLWxpbmV7XHJcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4vKiBsYWJlbCBjc3MgKi9cclxuLmxhYmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBsZWZ0OiAwcHg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5mbG9hdC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMnB4IDBweDtcclxufVxyXG4uZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG59XHJcbi5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4uZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMtd2l0aGluIH4gLmxhYmVsLC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOnZhbGlkIH4gLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGhlYWRpbmc6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnI2Q2ZDZkNic7XHJcbiAgICBASW5wdXQoKSBpc0xhYmVsOiBhbnkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgICBAT3V0cHV0KCkgZXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDb2xvciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwdWJsaWMgc2hvdyA9IGZhbHNlO1xyXG4gICAgcHVibGljIGRlZmF1bHRDb2xvcnM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICcjMDAwMDAwJywgJyM0MjQyNDInLCAnIzYzNjM2MycsICcjOUM5Qzk0JywgJyNDRUM2Q0UnLCAnI0VGRUZFRicsICcjRjdGN0Y3JywgJyNGRkZGRkYnLFxyXG4gICAgICAgICcjRkYwMDAwJywgJyNGRjlDMDAnLCAnI0ZGRkYwMCcsICcjMDBGRjAwJywgJyMwMEZGRkYnLCAnIzAwMDBGRicsICcjOUMwMEZGJywgJyNGRjAwRkYnLFxyXG4gICAgICAgICcjRjdDNkNFJywgJyNGRkU3Q0UnLCAnI0ZGRUZDNicsICcjRDZFRkQ2JywgJyNDRURFRTcnLCAnI0NFRTdGNycsICcjRDZENkU3JywgJyNFN0Q2REUnLFxyXG4gICAgICAgICcjRTc5QzlDJywgJyNGRkM2OUMnLCAnI0ZGRTc5QycsICcjQjVENkE1JywgJyNBNUM2Q0UnLCAnIzlDQzZFRicsICcjQjVBNUQ2JywgJyNENkE1QkQnLFxyXG4gICAgICAgICcjRTc2MzYzJywgJyNGN0FENkInLCAnI0ZGRDY2MycsICcjOTRCRDdCJywgJyM3M0E1QUQnLCAnIzZCQURERScsICcjOEM3QkM2JywgJyNDNjdCQTUnLFxyXG4gICAgICAgICcjQ0UwMDAwJywgJyNFNzk0MzknLCAnI0VGQzYzMScsICcjNkJBNTRBJywgJyM0QTdCOEMnLCAnIzM5ODRDNicsICcjNjM0QUE1JywgJyNBNTRBN0InLFxyXG4gICAgICAgICcjOUMwMDAwJywgJyNCNTYzMDgnLCAnI0JEOTQwMCcsICcjMzk3QjIxJywgJyMxMDRBNUEnLCAnIzA4NTI5NCcsICcjMzExODczJywgJyM3MzE4NDInLFxyXG4gICAgICAgICcjNjMwMDAwJywgJyM3QjM5MDAnLCAnIzg0NjMwMCcsICcjMjk1MjE4JywgJyMwODMxMzknLCAnIzAwMzE2MycsICcjMjExMDRBJywgJyM0QTEwMzEnXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgfVxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzdHlsZU9iamVjdCgpOiBPYmplY3Qge1xyXG4gICAgICAgIGxldCBuVHlwZSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oblR5cGUsIHRoaXMudmFsdWVTdHlsZSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuVHlwZSwgdGhpcy5ib3JkZXJTdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIG5UeXBlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5ldmVudC5lbWl0KHRoaXMuY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb2xvci5lbWl0KHRoaXMuY29sb3IpXHJcbiAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY2hhbmdlQ29sb3JNYW51YWwoY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChjb2xvcik7XHJcblxyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5ldmVudC5lbWl0KHRoaXMuY29sb3IpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29sb3IuZW1pdCh0aGlzLmNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9nZ2xlQ29sb3JzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XHJcbiAgICB9XHJcbn1cclxuIl19