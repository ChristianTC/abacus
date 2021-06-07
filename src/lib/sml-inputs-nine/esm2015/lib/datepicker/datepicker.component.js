import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
let DatepickerComponent = class DatepickerComponent {
    constructor(calendar, elementRef) {
        this.calendar = calendar;
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.readOnly = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('input[id$=' + this.name + ']')['inputmask']("mm/dd/yyyy", {
            mask: "1/2/y",
            placeholder: "__/__/____",
            insertMode: false,
            clearMaskOnLostFocus: false,
            showMaskOnHover: false,
            hourFormat: 12
        });
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
    getValue(event) {
        this.getvalue.emit(event.value);
    }
    onBlurMethod() {
        let date = $('#' + this.name).val();
        this.value = new Date(date.toString());
        this.getvalue.emit(this.value);
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
DatepickerComponent.ctorParameters = () => [
    { type: NgbCalendar },
    { type: ElementRef }
];
__decorate([
    Input()
], DatepickerComponent.prototype, "value", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "format", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "fieldStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "isChecked", void 0);
__decorate([
    Input()
], DatepickerComponent.prototype, "readOnly", void 0);
__decorate([
    Output()
], DatepickerComponent.prototype, "getvalue", void 0);
DatepickerComponent = __decorate([
    Component({
        selector: 'sml-input-datepicker',
        template: `
  <div class="position-relative" id="topdiv-{{name}}">
  <div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
    [ngStyle]="borderStyle">
    <input *ngIf="!readOnly"
      [(ngModel)]="value"  
      [id]="name" 
      [name]="name"
      [owlDateTime]="dt3" 
      class="form-control"
      (dateTimeInput)="getValue($event)"
      (blur)="onBlurMethod()"
      [ngClass]="{'valid':value}" 
      [ngStyle]="valueStyle"
      required>
    <input *ngIf="readOnly"
      [(ngModel)]="value"  
      [id]="name" 
      [name]="name"
      [owlDateTime]="dt4" 
      class="form-control"
      (dateTimeInput)="getValue($event)"
      (blur)="onBlurMethod()"
      [ngClass]="{'valid':value}" 
      [ngStyle]="valueStyle"
      required readOnly>
    <label class="label" [for]="name" [ngStyle]="style">{{ label }}</label>
    <owl-date-time [pickerType]="'calendar'" [startAt]="value" #dt3></owl-date-time>
    <owl-date-time [pickerType]="'calendar'" [startAt]="value" #dt4></owl-date-time>
    <button *ngIf="!readOnly" [owlDateTimeTrigger]="dt3" (click)="clk()" class="btn btn-link icon" type="button"></button>
    <button *ngIf="readOnly" (click)="clk()" class="btn btn-link icon" type="button" disabled></button>
  </div>
  </div>
  `,
        styles: [`
  /* Css Variable */
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
  
  /* Label Css */
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
  
    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
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
    outline: none;
    box-shadow: none;
  }
  .float-group .form-control:focus + .label,
  .float-group .form-control:valid + .label{
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
  /* Button Css */
  button.icon,button.icon:active {
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
  .float-group button.icon,.float-group button.icon:active { 
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
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out
    ,box-shadow .15s ease-in-out;
  }
  .btn.btn-link:hover, .btn.btn-link:focus {background-size: cover !important;background-position: center !important;}  
  `]
    })
], DatepickerComponent);
export { DatepickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQXdNekQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFrQjlCLFlBQW9CLFFBQXFCLEVBQVUsVUFBc0I7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSaEUsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFJN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUM7SUFJdEMsQ0FBQztJQUNELFFBQVE7SUFDUixDQUFDO0lBQ0QsZUFBZTtRQUNiLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDNUMsWUFBWSxFQUFFO1lBQ1osSUFBSSxFQUFFLE9BQU87WUFDYixXQUFXLEVBQUUsWUFBWTtZQUN6QixVQUFVLEVBQUUsS0FBSztZQUNqQixvQkFBb0IsRUFBRSxLQUFLO1lBQzNCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDckUsSUFBSSxHQUFHLEdBQUcsS0FBSyxD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SUFBUixLQUFLLEVBQUU7c0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3FEQUEyQjtBQUN6QjtJQUFULE1BQU0sRUFBRTtxREFBNkI7QUFmM0IsbUJBQW1CO0lBdE0vQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUO2lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0tSO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQWlFL0I7U0FqRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ2JDYWxlbmRhciB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWlucHV0LWRhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCIgaWQ9XCJ0b3BkaXYte3tuYW1lfX1cIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgIFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCIhcmVhZE9ubHlcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCIgIFxyXG4gICAgICBbaWRdPVwibmFtZVwiIFxyXG4gICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgW293bERhdGVUaW1lXT1cImR0M1wiIFxyXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIChkYXRlVGltZUlucHV0KT1cImdldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAoYmx1cik9XCJvbkJsdXJNZXRob2QoKVwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsndmFsaWQnOnZhbHVlfVwiIFxyXG4gICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgcmVxdWlyZWQ+XHJcbiAgICA8aW5wdXQgKm5nSWY9XCJyZWFkT25seVwiXHJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIiAgXHJcbiAgICAgIFtpZF09XCJuYW1lXCIgXHJcbiAgICAgIFtuYW1lXT1cIm5hbWVcIlxyXG4gICAgICBbb3dsRGF0ZVRpbWVdPVwiZHQ0XCIgXHJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgKGRhdGVUaW1lSW5wdXQpPVwiZ2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgIChibHVyKT1cIm9uQmx1ck1ldGhvZCgpXCJcclxuICAgICAgW25nQ2xhc3NdPVwieyd2YWxpZCc6dmFsdWV9XCIgXHJcbiAgICAgIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICByZXF1aXJlZCByZWFkT25seT5cclxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgW2Zvcl09XCJuYW1lXCIgW25nU3R5bGVdPVwic3R5bGVcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbiAgICA8b3dsLWRhdGUtdGltZSBbcGlja2VyVHlwZV09XCInY2FsZW5kYXInXCIgW3N0YXJ0QXRdPVwidmFsdWVcIiAjZHQzPjwvb3dsLWRhdGUtdGltZT5cclxuICAgIDxvd2wtZGF0ZS10aW1lIFtwaWNrZXJUeXBlXT1cIidjYWxlbmRhcidcIiBbc3RhcnRBdF09XCJ2YWx1ZVwiICNkdDQ+PC9vd2wtZGF0ZS10aW1lPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFyZWFkT25seVwiIFtvd2xEYXRlVGltZVRyaWdnZXJdPVwiZHQzXCIgKGNsaWNrKT1cImNsaygpXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgaWNvblwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJyZWFkT25seVwiIChjbGljayk9XCJjbGsoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGljb25cIiB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ+PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLyogQ3NzIFZhcmlhYmxlICovXHJcbiAgOmhvc3Qge1xyXG4gICAgLS1jLXdpZHRoOiA2NDVweDtcclxuICAgIC0tYy1oZWlnaHQ6IDI1cHg7XHJcbiAgICAtLWxhYmVsLWxlZnQ6IDEwcHg7XHJcbiAgICAtLWxhYmVsLXRvcDogMHB4O1xyXG4gICAgLS12YWx1ZS1sZWZ0OiAxMHB4O1xyXG4gICAgLS12YWx1ZS10b3A6IDBweDtcclxuICB9XHJcbiAgLyogYm94IGNzcyAqL1xyXG4gIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLyogQ29udHJvbCBDc3MgKi9cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjM3NXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2lnbmFsLWxpbmV7XHJcbiAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGFiZWwgQ3NzICovXHJcbiAgLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gICAgbGVmdDogMHB4OyBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMnB4IDBweDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXZhbHVlLXRvcCk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSB7XHJcbiAgICAgICAgKjo6LW1zLWJhY2tkcm9wLCAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgICAgICAgICAgdG9wOiAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyArIC5sYWJlbCxcclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDp2YWxpZCArIC5sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC8qIEJ1dHRvbiBDc3MgKi9cclxuICBidXR0b24uaWNvbixidXR0b24uaWNvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNJQUFBQWNDQVlBQUFBRU4yMGZBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFFVVNVUkJWRWlKN1pReFRvVkFFSVkvWUNIR3hONlhHT0lwbnBhRXNCU2VRQzlBclpibTlUWjZBRHlCTnpBaFFHR2w4Uml2NEJMQVdBZ21rcEJZa0gxYjhGV1QyV0sveko4Wko0cWlJNlhVSTNBTm5HS1dCbmh0Mi9aQkRSSzNoZ1ZHTnNDZDcvdWkrSmtFSXJLdHF1ckxwRVdhcGhkOTMzK0l5STNMRUlkcENZQ2lLRDZIY3VPYS9ud09hMFNjSkVuazBCSmcwVVRVV0pSbDZSeENZRXpFbW9tc0lsUFUzSVBXK2dySUFicXV5K3E2Zmx1eS8yOFJJQmVSTXdEWGRYTWdYTGovQjJ1aW1SWHB1aTREOXNCZVJMS2wrMU4rTCt0NlJ3YldyWmxpVFRUcjFveFl0elZXaVRRQWNSeHZUWCtlSk1ubFVEYU8xdnBaUk81TlMweDQ4c0l3ZlBjODd4ZzRCMDRNQ3pRaThoSUV3ZTRibDFEbkZNQ04yenNBQUFBQVNVVk9SSzVDWUlJPScpICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjNweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCBidXR0b24uaWNvbiwuZmxvYXQtZ3JvdXAgYnV0dG9uLmljb246YWN0aXZlIHsgXHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIC5idG4tbGluayB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0XHJcbiAgICAsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuYnRuLmJ0bi1saW5rOmhvdmVyLCAuYnRuLmJ0bi1saW5rOmZvY3VzIHtiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7fSAgXHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHZhbHVlO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDtcclxuICBASW5wdXQoKSBuYW1lO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgd2lkdGg7XHJcbiAgQElucHV0KCkgc3dpdGNoU3R5bGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHNpZ25hbFN0eWxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZmllbGRTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBpc0NoZWNrZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIGRhdGU6IHsgeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FsZW5kYXI6IE5nYkNhbGVuZGFyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICQoJ2lucHV0W2lkJD0nICsgdGhpcy5uYW1lICsgJ10nKVsnaW5wdXRtYXNrJ10oXHJcbiAgICAgIFwibW0vZGQveXl5eVwiLCB7XHJcbiAgICAgICAgbWFzazogXCIxLzIveVwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIl9fL19fL19fX19cIixcclxuICAgICAgICBpbnNlcnRNb2RlOiBmYWxzZSxcclxuICAgICAgICBjbGVhck1hc2tPbkxvc3RGb2N1czogZmFsc2UsXHJcbiAgICAgICAgc2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgICBob3VyRm9ybWF0OiAxMlxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBuZ09uQ2hhbmdlcyhldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5zdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGxldCBjc3MgPSBldmVudC5zdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcbiAgICAgIHRoaXMud2lkdGggPSBjc3NbJ2Mtd2lkdGgnXTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0VmFsdWUoZXZlbnQpIHtcclxuICAgIHRoaXMuZ2V0dmFsdWUuZW1pdChldmVudC52YWx1ZSk7XHJcbiAgfVxyXG4gIG9uQmx1ck1ldGhvZCgpIHtcclxuICAgIGxldCBkYXRlID0gJCgnIycgKyB0aGlzLm5hbWUpLnZhbCgpO1xyXG4gICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKGRhdGUudG9TdHJpbmcoKSk7XHJcbiAgICB0aGlzLmdldHZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG4gIGNsaygpIHtcclxuICAgIHZhciB3ID0gdGhpcy53aWR0aDtcclxuICAgIGlmICh3ID09ICcxMDAlJykge1xyXG4gICAgICB3ID0gJCgnI3RvcGRpdi0nICsgdGhpcy5uYW1lKS53aWR0aCgpO1xyXG4gICAgfVxyXG4gICAgdmFyIHNkID0gcGFyc2VJbnQodykgLSAyOTY7XHJcbiAgICAkKCdvd2wtZGF0ZS10aW1lLWNvbnRhaW5lcicpLmNzcyh7IGxlZnQ6IHNkIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=