import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let CheckboxComponent = class CheckboxComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.value = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() { }
    ngOnChanges(event) {
        if (event.checkboxStyle != undefined && event.checkboxStyle.currentValue != undefined) {
            let css = event.checkboxStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--checkbox-width', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--checkbox-height', css['width-height']);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-width', css.borderwidth);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-radius', css.borderradius);
            this.elementRef.nativeElement.style.setProperty('--checkbox-border-color', css.bordercolor);
            this.elementRef.nativeElement.style.setProperty('--checkbox-background-checked', css.background);
            this.elementRef.nativeElement.style.setProperty('--checkbox-background-unchecked', css['background-unchecked']);
            this.elementRef.nativeElement.style.setProperty('--check-color', css.colorcheck);
            this.elementRef.nativeElement.style.setProperty('--checkbox-tick-size', this.getTicFontSize(css));
        }
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
    getTicFontSize(css) {
        let h = css['width-height'].replace('px', '');
        return (parseInt(h) / 2) + 'px';
    }
    onChange(event) {
        this.getvalue.emit(event.target.checked);
    }
};
CheckboxComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], CheckboxComponent.prototype, "value", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "name", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "label", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "labeltext", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "style", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], CheckboxComponent.prototype, "checkboxStyle", void 0);
__decorate([
    Output()
], CheckboxComponent.prototype, "getvalue", void 0);
CheckboxComponent = __decorate([
    Component({
        selector: 'sml-input-checkbox',
        template: `
  <div class="position-relative">
	<div class="input-field" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle}"
	 [ngStyle]="borderStyle">
		<div class="checkbox">
			<input type="checkbox" [(ngModel)]="value" [name]="name" (change)="onChange($event)" [id]="name">
			<label class="label1" [for]="name"></label>
			<div class="vlabel" [ngStyle]="valueStyle">{{label}}</div>
		</div>
		<label class="label" [ngStyle]="style">{{labeltext}}</label>
	</div>
  </div>
  `,
        styles: [`
  :host {
    --c-width: 645px;
    --c-height: 25px;
    --checkbox-width: 20px;
    --checkbox-height: 20px;
    --checkbox-tick-size: 10px;
    --checkbox-border-width: 1px;
    --checkbox-border-radius: 4px;
    --checkbox-border-color: #D5DBE0;
    --checkbox-background-checked: #348fe2;
    --checkbox-background-unchecked:#D5DBE0;
    --check-color: #ffffff;
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
  .vlabel{
    line-height: var(--checkbox-height);
    vertical-align: top;
    margin-left: 5px;
    margin-right: 10px;
    display: inline-block;
  }
  .checkbox input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    left: -9999px;
  }
  .checkbox{
    display: block;
    padding-top: 8px;
    padding-right: 0.75rem;
    padding-bottom: 4px;
    padding-left: var(--value-left);
    min-height: var(--c-height) !important;
  }
  .checkbox label {
    position: relative;
    display: inline-block;
    width: var(--checkbox-width);
    height: var(--checkbox-height);
  }
  .checkbox label::before,
  .checkbox label::after {
    position: absolute;
    content: "";
    display: inline-block;
  }
  .checkbox label::before{
      height: var(--checkbox-height);
      width: var(--checkbox-width);
      border: 1px solid #D5DBE0;
      border-radius: var(--checkbox-border-radius);
      border-width: var(--checkbox-border-width)  !important;
      border-color: var(--checkbox-border-color) !important;
      left: 0px;
      background: var(--checkbox-background-unchecked);
  }
  input[type="checkbox"]:checked + label:before {
    /*background: var(--checkbox-background-checked);
    border: 1px solid;
    border-radius: var(--checkbox-border-radius);
    border-width: var(--checkbox-border-width)  !important;
    border-color: var(--checkbox-border-color) !important;
    text-align: center;*/
    content: "✓";
    font-size: 24px;
    line-height: 0.6;
    color: #6ba238;
    transition: all .2s;
    font-family: Arial;
    font-weight: bolder;
  }
  .checkbox input[type="checkbox"]:checked + label::after {
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
      color: var( --check-color);
      position: absolute;
      content: "\f00c" !important;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-size: var(--checkbox-tick-size);
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
  }
  .checkbox input[type="checkbox"] + label::after {
    content: none;
  }
  .checkbox input[type="checkbox"]:checked + label::after {
    content: "";
  }
  .signal-line{
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0px !important;
  }
  .label1{
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
  .float-group .checkbox {
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
], CheckboxComponent);
export { CheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWlucHV0cy1uaW5lLyIsInNvdXJjZXMiOlsibGliL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBd0szRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWM1QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBWmpDLFVBQUssR0FBUSxLQUFLLENBQUM7UUFVbEIsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO0lBRVEsQ0FBQztJQUMvQyxRQUFRLEtBQUssQ0FBQztJQUNkLFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDckYsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzFGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNoSCxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbkc7UUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtZQUNyRSxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNsRjtRQUNELElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQy9FLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0gsQ0FBQztJQUNELGNBQWMsQ0FBQyxHQUFHO1FBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUE7O1lBcENpQyxVQUFVOztBQVpqQztJQUFSLEtBQUssRUFBRTtnREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7K0NBQU07QUFDTDtJQUFSLEtBQUssRUFBRTtnREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO29EQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtnREFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO3NEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtzREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7c0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO3FEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTt3REFBb0I7QUFDbEI7SUFBVCxNQUFNLEVBQUU7bURBQTZCO0FBWjNCLGlCQUFpQjtJQXRLN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFKUjtLQUNGLENBQUM7R0FDVyxpQkFBaUIsQ0FrRDdCO1NBbERZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWlucHV0LWNoZWNrYm94JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZFwiIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlfVwiXHJcblx0IFtuZ1N0eWxlXT1cImJvcmRlclN0eWxlXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwidmFsdWVcIiBbbmFtZV09XCJuYW1lXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2lkXT1cIm5hbWVcIj5cclxuXHRcdFx0PGxhYmVsIGNsYXNzPVwibGFiZWwxXCIgW2Zvcl09XCJuYW1lXCI+PC9sYWJlbD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInZsYWJlbFwiIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIj57e2xhYmVsfX08L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwibGFiZWxcIiBbbmdTdHlsZV09XCJzdHlsZVwiPnt7bGFiZWx0ZXh0fX08L2xhYmVsPlxyXG5cdDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIDpob3N0IHtcclxuICAgIC0tYy13aWR0aDogNjQ1cHg7XHJcbiAgICAtLWMtaGVpZ2h0OiAyNXB4O1xyXG4gICAgLS1jaGVja2JveC13aWR0aDogMjBweDtcclxuICAgIC0tY2hlY2tib3gtaGVpZ2h0OiAyMHB4O1xyXG4gICAgLS1jaGVja2JveC10aWNrLXNpemU6IDEwcHg7XHJcbiAgICAtLWNoZWNrYm94LWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgLS1jaGVja2JveC1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtLWNoZWNrYm94LWJvcmRlci1jb2xvcjogI0Q1REJFMDtcclxuICAgIC0tY2hlY2tib3gtYmFja2dyb3VuZC1jaGVja2VkOiAjMzQ4ZmUyO1xyXG4gICAgLS1jaGVja2JveC1iYWNrZ3JvdW5kLXVuY2hlY2tlZDojRDVEQkUwO1xyXG4gICAgLS1jaGVjay1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0tbGFiZWwtbGVmdDogMTBweDtcclxuICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAtLXZhbHVlLWxlZnQ6IDEwcHg7XHJcbiAgICAtLXZhbHVlLXRvcDogMHB4O1xyXG4gIH1cclxuICAvKiBib3ggY3NzICovXHJcbiAgLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmlucHV0LWZpZWxkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWMtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAudmxhYmVse1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweDtcclxuICB9XHJcbiAgLmNoZWNrYm94e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jaGVja2JveCBsYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogdmFyKC0tY2hlY2tib3gtd2lkdGgpO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1jaGVja2JveC1oZWlnaHQpO1xyXG4gIH1cclxuICAuY2hlY2tib3ggbGFiZWw6OmJlZm9yZSxcclxuICAuY2hlY2tib3ggbGFiZWw6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5jaGVja2JveCBsYWJlbDo6YmVmb3Jle1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWNoZWNrYm94LWhlaWdodCk7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1jaGVja2JveC13aWR0aCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENURCRTA7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWNoZWNrYm94LWJvcmRlci1yYWRpdXMpO1xyXG4gICAgICBib3JkZXItd2lkdGg6IHZhcigtLWNoZWNrYm94LWJvcmRlci13aWR0aCkgICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNoZWNrYm94LWJhY2tncm91bmQtdW5jaGVja2VkKTtcclxuICB9XHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgLypiYWNrZ3JvdW5kOiB2YXIoLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1jaGVja2JveC1ib3JkZXItcmFkaXVzKTtcclxuICAgIGJvcmRlci13aWR0aDogdmFyKC0tY2hlY2tib3gtYm9yZGVyLXdpZHRoKSAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2hlY2tib3gtYm9yZGVyLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyovXHJcbiAgICBjb250ZW50OiBcIuKck1wiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuNjtcclxuICAgIGNvbG9yOiAjNmJhMjM4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG4gIC5jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGNvbG9yOiB2YXIoIC0tY2hlY2stY29sb3IpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCIgIWltcG9ydGFudDtcclxuICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1jaGVja2JveC10aWNrLXNpemUpO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB9XHJcbiAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICAuY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICB9XHJcbiAgLnNpZ25hbC1saW5le1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5sYWJlbDF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTI0cHg7XHJcbiAgICBsZWZ0OiAwcHg7IFxyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDI0cHggMHB4IDBweDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5jaGVja2JveCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgLyogZmxvYXRpbmcgbGFibGUgYWx3YXlzIGJvbGQgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9ICAgIFxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaGVja2JveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuYW1lO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWx0ZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBzd2l0Y2hTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdmFsdWVTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGNoZWNrYm94U3R5bGU6IGFueTtcclxuICBAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG4gIG5nT25Jbml0KCkgeyB9XHJcbiAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5jaGVja2JveFN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC5jaGVja2JveFN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LmNoZWNrYm94U3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGVja2JveC13aWR0aCcsIGNzc1snd2lkdGgtaGVpZ2h0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGVja2JveC1oZWlnaHQnLCBjc3NbJ3dpZHRoLWhlaWdodCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2hlY2tib3gtYm9yZGVyLXdpZHRoJywgY3NzLmJvcmRlcndpZHRoKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2hlY2tib3gtYm9yZGVyLXJhZGl1cycsIGNzcy5ib3JkZXJyYWRpdXMpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGVja2JveC1ib3JkZXItY29sb3InLCBjc3MuYm9yZGVyY29sb3IpO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jaGVja2JveC1iYWNrZ3JvdW5kLWNoZWNrZWQnLCBjc3MuYmFja2dyb3VuZCk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNoZWNrYm94LWJhY2tncm91bmQtdW5jaGVja2VkJywgY3NzWydiYWNrZ3JvdW5kLXVuY2hlY2tlZCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY2hlY2stY29sb3InLCBjc3MuY29sb3JjaGVjayk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNoZWNrYm94LXRpY2stc2l6ZScsIHRoaXMuZ2V0VGljRm9udFNpemUoY3NzKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC52YWx1ZVN0eWxlICE9IHVuZGVmaW5lZCAmJiBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgbGV0IGNzcyA9IGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS10b3AnLCBjc3NbJ3ZhbHVlLXRvcCddKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0VGljRm9udFNpemUoY3NzKSB7XHJcbiAgICBsZXQgaCA9IGNzc1snd2lkdGgtaGVpZ2h0J10ucmVwbGFjZSgncHgnLCAnJyk7XHJcbiAgICByZXR1cm4gKHBhcnNlSW50KGgpIC8gMikgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuZ2V0dmFsdWUuZW1pdChldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcbiAgfSAgXHJcbn1cclxuIl19