import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let RadioComponent = class RadioComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.radioChangeHandler = new EventEmitter();
        this.changeevt1 = (event) => {
            this.radioChangeHandler.emit(event);
        };
    }
    ngOnInit() { }
    ngOnChanges(event) {
        if (event.radioStyle != undefined && event.radioStyle.currentValue != undefined) {
            let css = event.radioStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--radio-width', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--radio-height', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--radio-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--radio-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--radio-background', css.background);
            this.elementRef.nativeElement.style.setProperty('--radio-background-unchecked', css['background-unchecked']);
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
};
RadioComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], RadioComponent.prototype, "id", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "jsonData", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "value", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "label", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "labelStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "radioStyle", void 0);
__decorate([
    Input()
], RadioComponent.prototype, "signalStyle", void 0);
__decorate([
    Output()
], RadioComponent.prototype, "radioChangeHandler", void 0);
RadioComponent = __decorate([
    Component({
        selector: 'sml-input-radio',
        template: `
    <div class="position-relative">
    <div class="input-field"  
      [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
      [ngStyle]="borderStyle" >
      <div class="radio">
        <div *ngFor="let data of jsonData;let i=index" [ngClass]="{'dis-inline': radioStyle?.isInline , 'dis-block': !radioStyle?.isInline}">
          <input *ngIf="data.disabled == undefined || data.disabled == null || data.disabled == '' || data.disabled == false" type="radio" id="{{id}}-{{i}}" name="{{id}}-{{i}}"  [value]="data.value" [(ngModel)]="value" (change)="changeevt1(value)">
          <input *ngIf="data.disabled != undefined || data.disabled != null || data.disabled != '' || data.disabled == true" type="radio" id="{{id}}-{{i}}" name="{{id}}-{{i}}"  [value]="data.value" [(ngModel)]="value" (change)="changeevt1(value)" disabled>
          <label for="{{id}}-{{i}}" class="clabel"></label>
          <label for="{{id}}-{{i}}" [ngStyle]="valueStyle" class="vlabel">{{data.name}}</label>
        </div>
      </div>
      <label class="label" [ngStyle]="labelStyle">{{label?label:'Label Name'}}</label>
    </div>
    </div>
    `,
        styles: [`
    /* css variable */
    :host {
        --c-width: 645px;
        --c-height: 25px;
        --radio-width: 20px;
        --radio-height: 20px;
        --radio-border-width: 1px;
        --radio-border-color: #D5DBE0;
        --radio-background: #348fe2;
        --radio-background-unchecked: #D5DBE0;
        --label-left: 10px;
        --label-top: 0px;
        --value-left: 10px;
        --value-top: 0px;
    }
    /* radio css */
    .clabel {
        position: relative;
        cursor: pointer;
        width: var(--radio-width);
        height: var(--radio-height);
        line-height: 20px;
        display: inline-block;
        color: #666;
        margin-bottom: 0px;
    }
    .vlabel{
        line-height: var(--radio-height);
        vertical-align: top;
        margin-left: 5px;
        margin-right: 10px;
        margin-bottom: 0px;
    }
    .dis-inline{
        display: inline-block;
    }
    .dis-block{
        display: block;
    }
    .radio{
        display: block;
        padding-top: 8px;
        padding-right: 0.75rem;
        padding-bottom: 4px;
        padding-left: var(--value-left);
        min-height: var(--c-height) !important;
    }
    [type="radio"]:checked, [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    [type="radio"]:checked+label.clabel:before, [type="radio"]:not(:checked)+label.clabel:before {
        content: '';
        position: absolute;
        left: 0;
        top: 1px;
        width: var(--radio-width);
        height: var(--radio-height);
        border-width: var(--radio-border-width) !important;
        border-color: var(--radio-border-color) !important;
        border:1px solid;
        border-radius: 100%;
        background: var(--radio-background-unchecked);
    }
    [type="radio"]:checked+label.clabel:after, [type="radio"]:not(:checked)+label.clabel:after {
        content: '';
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        line-height: 1;
        position: absolute;
        top: 5px;
        left: 4px;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-size: 10px;
        color: #fff
    }
    [type="radio"]:not(:checked)+label.clabel:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked+label.clabel:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    [type="radio"]:checked+label.clabel::before {
        background-color: var(--radio-background);
        border-width: var(--radio-border-width) !important;
        border-color: var(--radio-border-color) !important;
        border:1px solid;
        border-radius: 100%;
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
    .signal-line{
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        border-radius: 0px !important;
    }
    /* labelcss */
    
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
    .float-group .radio {
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
], RadioComponent);
export { RadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWlucHV0cy1uaW5lLyIsInNvdXJjZXMiOlsibGliL3JhZGlvL3JhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0szRixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBYXZCLFlBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGaEMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQTJCbEQsZUFBVSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUE7SUEzQjZDLENBQUM7SUFDL0MsUUFBUSxLQUFLLENBQUM7SUFDZCxXQUFXLENBQUMsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQzdFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFB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bXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyICxFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc21sLWlucHV0LXJhZGlvJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiICBcclxuICAgICAgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGV9XCJcclxuICAgICAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIiA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb1wiPlxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGRhdGEgb2YganNvbkRhdGE7bGV0IGk9aW5kZXhcIiBbbmdDbGFzc109XCJ7J2Rpcy1pbmxpbmUnOiByYWRpb1N0eWxlPy5pc0lubGluZSAsICdkaXMtYmxvY2snOiAhcmFkaW9TdHlsZT8uaXNJbmxpbmV9XCI+XHJcbiAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJkYXRhLmRpc2FibGVkID09IHVuZGVmaW5lZCB8fCBkYXRhLmRpc2FibGVkID09IG51bGwgfHwgZGF0YS5kaXNhYmxlZCA9PSAnJyB8fCBkYXRhLmRpc2FibGVkID09IGZhbHNlXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ7e2lkfX0te3tpfX1cIiBuYW1lPVwie3tpZH19LXt7aX19XCIgIFt2YWx1ZV09XCJkYXRhLnZhbHVlXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlZXZ0MSh2YWx1ZSlcIj5cclxuICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImRhdGEuZGlzYWJsZWQgIT0gdW5kZWZpbmVkIHx8IGRhdGEuZGlzYWJsZWQgIT0gbnVsbCB8fCBkYXRhLmRpc2FibGVkICE9ICcnIHx8IGRhdGEuZGlzYWJsZWQgPT0gdHJ1ZVwiIHR5cGU9XCJyYWRpb1wiIGlkPVwie3tpZH19LXt7aX19XCIgbmFtZT1cInt7aWR9fS17e2l9fVwiICBbdmFsdWVdPVwiZGF0YS52YWx1ZVwiIFsobmdNb2RlbCldPVwidmFsdWVcIiAoY2hhbmdlKT1cImNoYW5nZWV2dDEodmFsdWUpXCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwie3tpZH19LXt7aX19XCIgY2xhc3M9XCJjbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInt7aWR9fS17e2l9fVwiIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIiBjbGFzcz1cInZsYWJlbFwiPnt7ZGF0YS5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBbbmdTdHlsZV09XCJsYWJlbFN0eWxlXCI+e3tsYWJlbD9sYWJlbDonTGFiZWwgTmFtZSd9fTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgIC8qIGNzcyB2YXJpYWJsZSAqL1xyXG4gICAgOmhvc3Qge1xyXG4gICAgICAgIC0tYy13aWR0aDogNjQ1cHg7XHJcbiAgICAgICAgLS1jLWhlaWdodDogMjVweDtcclxuICAgICAgICAtLXJhZGlvLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgIC0tcmFkaW8taGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIC0tcmFkaW8tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgLS1yYWRpby1ib3JkZXItY29sb3I6ICNENURCRTA7XHJcbiAgICAgICAgLS1yYWRpby1iYWNrZ3JvdW5kOiAjMzQ4ZmUyO1xyXG4gICAgICAgIC0tcmFkaW8tYmFja2dyb3VuZC11bmNoZWNrZWQ6ICNENURCRTA7XHJcbiAgICAgICAgLS1sYWJlbC1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAgICAgLS12YWx1ZS1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC0tdmFsdWUtdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAvKiByYWRpbyBjc3MgKi9cclxuICAgIC5jbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLXJhZGlvLXdpZHRoKTtcclxuICAgICAgICBoZWlnaHQ6IHZhcigtLXJhZGlvLWhlaWdodCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC52bGFiZWx7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXJhZGlvLWhlaWdodCk7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGlzLWlubGluZXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuZGlzLWJsb2Nre1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnJhZGlve1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQsIFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC05OTk5cHg7XHJcbiAgICB9XHJcbiAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwuY2xhYmVsOmJlZm9yZSwgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpK2xhYmVsLmNsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1yYWRpby13aWR0aCk7XHJcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1yYWRpby1oZWlnaHQpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogdmFyKC0tcmFkaW8tYm9yZGVyLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yYWRpby1iYWNrZ3JvdW5kLXVuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwuY2xhYmVsOmFmdGVyLCBbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkrbGFiZWwuY2xhYmVsOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgfVxyXG4gICAgW3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpK2xhYmVsLmNsYWJlbDphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgIFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCtsYWJlbC5jbGFiZWw6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICBbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQrbGFiZWwuY2xhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJhZGlvLWJhY2tncm91bmQpO1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogdmFyKC0tcmFkaW8tYm9yZGVyLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcmFkaW8tYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjoxcHggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuICAgIC8qIGJveCBjc3MgKi9cclxuICAgIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2lnbmFsLWxpbmV7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBsYWJlbGNzcyAqL1xyXG4gICAgXHJcbiAgICAubGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC0yNHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDsgXHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gICAgfSBcclxuICAgIC5mbG9hdC1ncm91cCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjRweCAwcHggMHB4O1xyXG4gICAgfSBcclxuICAgIC5mbG9hdC1ncm91cCAucmFkaW8ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgLyogZmxvYXRpbmcgbGFibGUgYWx3YXlzIGJvbGQgKi9cclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgaWQ7XHJcbiAgICBASW5wdXQoKSBqc29uRGF0YTtcclxuICAgIEBJbnB1dCgpIHZhbHVlO1xyXG4gICAgQElucHV0KCkgbGFiZWw7XHJcbiAgICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgbGFiZWxTdHlsZTtcclxuICAgIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSByYWRpb1N0eWxlO1xyXG4gICAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgcmFkaW9DaGFuZ2VIYW5kbGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQucmFkaW9TdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQucmFkaW9TdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC5yYWRpb1N0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmFkaW8td2lkdGgnLCBjc3NbJ3dpZHRoLWhlaWdodCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tcmFkaW8taGVpZ2h0JywgY3NzWyd3aWR0aC1oZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXJhZGlvLWJvcmRlci13aWR0aCcsIGNzcy5ib3JkZXJ3aWR0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXJhZGlvLWJvcmRlci1jb2xvcicsIGNzcy5ib3JkZXJjb2xvcik7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXJhZGlvLWJhY2tncm91bmQnLCBjc3MuYmFja2dyb3VuZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXJhZGlvLWJhY2tncm91bmQtdW5jaGVja2VkJywgY3NzWydiYWNrZ3JvdW5kLXVuY2hlY2tlZCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmxhYmVsU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LmxhYmVsU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQubGFiZWxTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGFuZ2VldnQxID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLnJhZGlvQ2hhbmdlSGFuZGxlci5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=