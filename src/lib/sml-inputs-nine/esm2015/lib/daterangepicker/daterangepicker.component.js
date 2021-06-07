import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
let DaterangepickerComponent = class DaterangepickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
        if (this.value) {
            this.value = this.value.toLocaleDateString();
        }
        if (this.fromValue) {
            this.fromValue = this.fromValue.toLocaleDateString();
        }
    }
    ngOnChanges(event) {
        if (event.style != undefined && event.style.currentValue != undefined) {
            let css = event.style.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.width = css['c-width'];
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
    emitValue(val) {
        this.value = val.value.split(",")[0];
        this.fromValue = val.value.split(",")[1];
        this.getvalue.emit({ to: this.value, from: this.fromValue });
    }
    clk() {
        var w = this.width;
        if (w == '100%') {
            w = $('#topdiv-' + this.name).width();
        }
        var sd = parseInt(w) - 296;
        $('owl-date-time-container').css({ left: sd });
    }
};
DaterangepickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `
  <div class="position-relative" id="topdiv-{{name}}">
  <div class="input-field"
  [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}" 
  [ngStyle]="borderStyle">
      <input 
        [value]="value" 
        [name]="name" 
        [owlDateTime]="dtRange1" 
        [selectMode]="'range'" 
        [rangeSeparator]="','"
        (dateTimeInput)="emitValue(getRangeVal)" 
        class="form-control ctrtext" #getRangeVal required>
      <input type="text"
        [value]="value" 
        [name]="name" 
        class="form-control" 
        [ngStyle]="valueStyle">
      <span class="dateSeprator">to</span>
      <input 
        type="text" 
        [value]="fromValue"
        [name]="name" 
        class="form-control"
        [ngStyle]="valueStyle">
      <owl-date-time [pickerType]="'calendar'" #dtRange1 [startAt]="value"></owl-date-time>
      <button [owlDateTimeTrigger]="dtRange1" (click)="clk()" class="btn btn-link icon" type="button"></button>
      <label class="label" [ngStyle]="style">{{ label }}</label>
    </div>
  </div>
  `,
        styles: [`
  /* css variable */
  :host {
    --c-width: 645px;
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
    display: flex;
  }
  .ctrtext {
    position: absolute;
    z-index: -1;
    opacity: 0
  }
  /* control css */
  .form-control {
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    width: 13%;
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
  .label {
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
    outline: none;
    box-shadow: none;
  }
  .float-group-static .label {
    font-size: 9px;
    font-weight: bold !important; 
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
  
  .dateSeprator {
    display: inline-flex;
    min-width: 30px;
    color: #2d353c;
    font-weight: 400;
    font-size: 14;
    line-height: 1;
    justify-content: center;
    align-items: center
  }
  
  .float-group .dateSeprator {
    display: block;
    min-width: 30px;
    color: #2d353c;
    font-weight: 400;
    font-size: 14;
    line-height: 1.5;
    justify-content: center;
    text-align: center;
    padding-top: var(--value-top);
  }
  
  /* .calenderContainer .form-control:focus + .label,
  .calenderContainer .form-control:valid + .label,
  .calenderContainer .form-control[ng-reflect-model] +  .label,
  .calenderContainer .form-control[aria-owns] +  .label{
    font-size: 9px;
    font-weight: bold !important; 
    position: absolute;
    top: var(--label-top);
    left: var(--label-left);
    transform: translateY(0px);
    transition: all 200ms;
    opacity: 1;
    margin: 0;
    width: 87%;
    height: auto;
  } */
  /* button css */
  button.icon, button.icon:active {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEUSURBVEiJ7ZQxToVAEIY/YCHGxN6XGOIpnpaEsBSeQC9ArZbm9TZ6ADyBNzAhQGGl8Riv4BLAWAgmkpBYkH1b8FWT2WK/zJ8ZJ4qiI6XUI3ANnGKWBnht2/ZBDRK3hgVGNsCd7/ui+JkEIrKtqurLpEWaphd933+IyI3LEIdpCYCiKD6HcuOa/nwOa0ScJEnk0BJg0UTUWJRl6RxCYEzEmomsIlPU3IPW+grIAbquy+q6fluy/28RIBeRMwDXdXMgXLj/B2uimRXpui4D9sBeRLKl+1N+L+t6RwbWrZliTTTr1oxYtzVWiTQAcRxvTX+eJMnlUDaO1vpZRO5NS0x48sIwfPc87xg4B04MCzQi8hIEwe4bl1DnFMCN2zsAAAAASUVORK5CYII=') !important;
    width: 25px;
    height: 23px;
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: center;
    position: absolute;
    right: 7px;
    top: 8px;
  }
  .float-group button.icon, button.icon:active {
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
  .btn-link {
    font-weight: 400;
    color: #007bff;
    background-color: transparent;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  }
  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}
  `]
    })
], DaterangepickerComponent);
export { DaterangepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeU4zRixJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQWNuQyxZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmpDLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRzVCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztJQUd0QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDckUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDbEY7UUFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUMvRSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNsRjtJQUNILENBQUM7SUFDRCxTQUFTLENBQUMsR0FBRztRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBQ0QsR0FBRztRQUNELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO1lBQ2YsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMzQixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0YsQ0FBQTs7WUF4Q2lDLFVBQVU7O0FBYmpDO0lBQVIsS0FBSyxFQUFFO3VEQUFPO0FBQ047SUFBUixLQUFLLEVBQUU7MkRBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTt3REFBUTtBQUNQO0lBQVIsS0FBSyxFQUFFO3NEQUFNO0FBQ0w7SUFBUixLQUFLLEVBQUU7dURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTt1REFBTztBQUNOO0lBQVIsS0FBSyxFQUFFOzZEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTt1REFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOzZEQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTs2REFBOEI7QUFDN0I7SUFBUixLQUFLLEVBQUU7NkRBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzREQUFpQjtBQUNmO0lBQVQsTUFBTSxFQUFFOzBEQUE2QjtBQWIzQix3QkFBd0I7SUF2TnBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQ7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9MUjtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FzRHBDO1NBdERZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWlucHV0LWRhdGVyYW5nZXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIiBpZD1cInRvcGRpdi17e25hbWV9fVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiXHJcbiAgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGUsJ2Zsb2F0LWdyb3VwLXN0YXRpYyc6IHN0YXRpY1N0eWxlfVwiIFxyXG4gIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgICBbdmFsdWVdPVwidmFsdWVcIiBcclxuICAgICAgICBbbmFtZV09XCJuYW1lXCIgXHJcbiAgICAgICAgW293bERhdGVUaW1lXT1cImR0UmFuZ2UxXCIgXHJcbiAgICAgICAgW3NlbGVjdE1vZGVdPVwiJ3JhbmdlJ1wiIFxyXG4gICAgICAgIFtyYW5nZVNlcGFyYXRvcl09XCInLCdcIlxyXG4gICAgICAgIChkYXRlVGltZUlucHV0KT1cImVtaXRWYWx1ZShnZXRSYW5nZVZhbClcIiBcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBjdHJ0ZXh0XCIgI2dldFJhbmdlVmFsIHJlcXVpcmVkPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiIFxyXG4gICAgICAgIFtuYW1lXT1cIm5hbWVcIiBcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkYXRlU2VwcmF0b3JcIj50bzwvc3Bhbj5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgW3ZhbHVlXT1cImZyb21WYWx1ZVwiXHJcbiAgICAgICAgW25hbWVdPVwibmFtZVwiIFxyXG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCI+XHJcbiAgICAgIDxvd2wtZGF0ZS10aW1lIFtwaWNrZXJUeXBlXT1cIidjYWxlbmRhcidcIiAjZHRSYW5nZTEgW3N0YXJ0QXRdPVwidmFsdWVcIj48L293bC1kYXRlLXRpbWU+XHJcbiAgICAgIDxidXR0b24gW293bERhdGVUaW1lVHJpZ2dlcl09XCJkdFJhbmdlMVwiIChjbGljayk9XCJjbGsoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGljb25cIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgW25nU3R5bGVdPVwic3R5bGVcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAvKiBjc3MgdmFyaWFibGUgKi9cclxuICA6aG9zdCB7XHJcbiAgICAtLWMtd2lkdGg6IDY0NXB4O1xyXG4gICAgLS1jLWhlaWdodDogMjVweDtcclxuICAgIC0tbGFiZWwtbGVmdDogMTBweDtcclxuICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAtLXZhbHVlLWxlZnQ6IDEwcHg7XHJcbiAgICAtLXZhbHVlLXRvcDogMHB4O1xyXG4gIH1cclxuICAvKiBib3ggY3NzICovXHJcbiAgLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiB2YXIoLS1jLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW5wdXQtZmllbGQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmN0cnRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgfVxyXG4gIC8qIGNvbnRyb2wgY3NzICovXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTMlO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zaWduYWwtbGluZXtcclxuICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvKiBsYWJlbCBjc3MgKi9cclxuICAubGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBsZWZ0OiAwcHg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjRweCAycHggMHB4O1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tdmFsdWUtdG9wKTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuZGF0ZVNlcHJhdG9yIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgY29sb3I6ICMyZDM1M2M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgfVxyXG4gIFxyXG4gIC5mbG9hdC1ncm91cCAuZGF0ZVNlcHJhdG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgY29sb3I6ICMyZDM1M2M7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gIH1cclxuICBcclxuICAvKiAuY2FsZW5kZXJDb250YWluZXIgLmZvcm0tY29udHJvbDpmb2N1cyArIC5sYWJlbCxcclxuICAuY2FsZW5kZXJDb250YWluZXIgLmZvcm0tY29udHJvbDp2YWxpZCArIC5sYWJlbCxcclxuICAuY2FsZW5kZXJDb250YWluZXIgLmZvcm0tY29udHJvbFtuZy1yZWZsZWN0LW1vZGVsXSArICAubGFiZWwsXHJcbiAgLmNhbGVuZGVyQ29udGFpbmVyIC5mb3JtLWNvbnRyb2xbYXJpYS1vd25zXSArICAubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH0gKi9cclxuICAvKiBidXR0b24gY3NzICovXHJcbiAgYnV0dG9uLmljb24sIGJ1dHRvbi5pY29uOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0lBQUFBY0NBWUFBQUFFTjIwZkFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQUVVU1VSQlZFaUo3WlF4VG9WQUVJWS9ZQ0hHeE42WEdPSXBucGFFc0JTZVFDOUFyWmJtOVRaNkFEeUJOekFoUUdHbDhSaXY0QkxBV0FnbWtwQllrSDFiOEZXVDJXSy96SjhaSjRxaUk2WFVJM0FObkdLV0JuaHQyL1pCRFJLM2hnVkdOc0NkNy91aStKa0VJckt0cXVyTHBFV2FwaGQ5MzMrSXlJM0xFSWRwQ1lDaUtENkhjdU9hL253T2EwU2NKRW5rMEJKZzBVVFVXSlJsNlJ4Q1lFekVtb21zSWxQVTNJUFcrZ3JJQWJxdXkrcTZmbHV5LzI4UklCZVJNd0RYZFhNZ1hMai9CMnVpbVJYcHVpNEQ5c0JlUkxLbCsxTitMK3Q2UndiV3JabGlUVFRyMW94WXR6VldpVFFBY1J4dlRYK2VKTW5sVURhTzF2cFpSTzVOUzB4NDhzSXdmUGM4N3hnNEIwNE1DelFpOGhJRXdlNGJsMURuRk1DTjJ6c0FBQUFBU1VWT1JLNUNZSUk9JykgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICB0b3A6IDhweDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIGJ1dHRvbi5pY29uLCBidXR0b24uaWNvbjphY3RpdmUge1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICAuYnRuLWxpbmsge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuYnRuLmJ0bi1saW5rOmhvdmVyLCAuYnRuLmJ0bi1saW5rOmZvY3VzIHtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7fVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlO1xyXG4gIEBJbnB1dCgpIGZyb21WYWx1ZTtcclxuICBASW5wdXQoKSBmb3JtYXQ7XHJcbiAgQElucHV0KCkgbmFtZTtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHdpZHRoO1xyXG4gIEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3RhdGljU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICBAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mcm9tVmFsdWUpIHtcclxuICAgICAgdGhpcy5mcm9tVmFsdWUgPSB0aGlzLmZyb21WYWx1ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICB0aGlzLndpZHRoID0gY3NzWydjLXdpZHRoJ107XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtaGVpZ2h0JywgY3NzWydjLWhlaWdodCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtbGVmdCcsIGNzc1snbGFiZWwtbGVmdCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVtaXRWYWx1ZSh2YWwpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWwudmFsdWUuc3BsaXQoXCIsXCIpWzBdXHJcbiAgICB0aGlzLmZyb21WYWx1ZSA9IHZhbC52YWx1ZS5zcGxpdChcIixcIilbMV1cclxuICAgIHRoaXMuZ2V0dmFsdWUuZW1pdCh7IHRvOiB0aGlzLnZhbHVlLCBmcm9tOiB0aGlzLmZyb21WYWx1ZSB9KVxyXG4gIH1cclxuICBjbGsoKSB7XHJcbiAgICB2YXIgdyA9IHRoaXMud2lkdGg7XHJcbiAgICBpZiAodyA9PSAnMTAwJScpIHtcclxuICAgICAgdyA9ICQoJyN0b3BkaXYtJyArIHRoaXMubmFtZSkud2lkdGgoKTtcclxuICAgIH1cclxuICAgIHZhciBzZCA9IHBhcnNlSW50KHcpIC0gMjk2O1xyXG4gICAgJCgnb3dsLWRhdGUtdGltZS1jb250YWluZXInKS5jc3MoeyBsZWZ0OiBzZCB9KTtcclxuICB9XHJcbn1cclxuIl19