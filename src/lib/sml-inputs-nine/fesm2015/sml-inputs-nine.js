import { __decorate } from 'tslib';
import { EventEmitter, ElementRef, Input, Output, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgSelectModule } from '@ng-select/ng-select';

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

let CheckboxModule = class CheckboxModule {
};
CheckboxModule = __decorate([
    NgModule({
        declarations: [CheckboxComponent],
        imports: [
            CommonModule, FormsModule
        ],
        exports: [CheckboxComponent]
    })
], CheckboxModule);

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

let SwitchModule = class SwitchModule {
};
SwitchModule = __decorate([
    NgModule({
        declarations: [SwitchComponent],
        imports: [
            CommonModule,
            NgbModule,
            FormsModule
        ],
        exports: [SwitchComponent]
    })
], SwitchModule);

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

let RadioModule = class RadioModule {
};
RadioModule = __decorate([
    NgModule({
        declarations: [RadioComponent],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [RadioComponent]
    })
], RadioModule);

let TextComponent = class TextComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.type = 'text';
        this.maxlength = 255;
        this.showMask = false;
        this.value = "";
        this.staticStyle = false;
        this.readOnly = false;
        this.onlyText = false;
        this.noPutCharacter = 0;
        this.getvalue = new EventEmitter;
        this.onblur = new EventEmitter;
    }
    ngOnInit() { }
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
    getValue(event) {
        var getVal = event.target.value;
        this.getvalue.emit(event.target.value);
    }
    onBlur(event) {
        this.onblur.emit(event.target.value);
    }
    onEndfocus(event) {
        if (this.maskType != '' && this.maskType != null && this.maskType != undefined) {
            setTimeout(() => {
                event.target.selectionStart = this.noPutCharacter == 0 ? event.target.value.length : this.noPutCharacter;
                event.target.selectionEnd = this.noPutCharacter == 0 ? event.target.value.length : this.noPutCharacter;
            }, 500);
        }
    }
    keyPress(e) {
        //e.target.selectionStart++;
        //e.target.selectionEnd++;
        if (this.onlyText == false) {
            e.target.selectionStart++;
        }
        e.target.selectionEnd++;
    }
};
TextComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TextComponent.prototype, "type", void 0);
__decorate([
    Input()
], TextComponent.prototype, "maxlength", void 0);
__decorate([
    Input()
], TextComponent.prototype, "showMask", void 0);
__decorate([
    Input()
], TextComponent.prototype, "value", void 0);
__decorate([
    Input()
], TextComponent.prototype, "name", void 0);
__decorate([
    Input()
], TextComponent.prototype, "maskType", void 0);
__decorate([
    Input()
], TextComponent.prototype, "patterns", void 0);
__decorate([
    Input()
], TextComponent.prototype, "expression", void 0);
__decorate([
    Input()
], TextComponent.prototype, "label", void 0);
__decorate([
    Input()
], TextComponent.prototype, "fixValue", void 0);
__decorate([
    Input()
], TextComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "style", void 0);
__decorate([
    Input()
], TextComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "inputStyle", void 0);
__decorate([
    Input()
], TextComponent.prototype, "readOnly", void 0);
__decorate([
    Input()
], TextComponent.prototype, "onlyText", void 0);
__decorate([
    Input()
], TextComponent.prototype, "noPutCharacter", void 0);
__decorate([
    Output()
], TextComponent.prototype, "getvalue", void 0);
__decorate([
    Output()
], TextComponent.prototype, "onblur", void 0);
TextComponent = __decorate([
    Component({
        selector: 'sml-input-text',
        template: `
    <div class="position-relative">
    <div class="input-field" 
        [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
        [ngStyle]="borderStyle">
        <input *ngIf="!readOnly" id="{{name}}" 
               name="{{name}}" 
               class="form-control" 
               [type]="type"
               [attr.maxlength]="maxlength"
               [patterns]="patterns" 
               [shownMaskExpression]="expression"
               [mask]="maskType" 
               [showMaskTyped]="showMask"
               [(ngModel)]="value"
               (focus)= "onEndfocus($event)"
               [ngStyle]="valueStyle"
               (blur)="onBlur($event)" 
               (keyup)="getValue($event)"
               (keypress)="keyPress($event)" required>
        <input *ngIf="readOnly" id="{{name}}" 
               name="{{name}}" 
               class="form-control" 
               [type]="type"
               [attr.maxlength]="maxlength"
               [patterns]="patterns" 
               [shownMaskExpression]="expression"
               [mask]="maskType" 
               [showMaskTyped]="showMask"
               [(ngModel)]="value"
               (focus)= "onEndfocus($event)"
               [ngStyle]="valueStyle"
               (blur)="onBlur($event)" 
               (keyup)="getValue($event)"
               (keypress)="keyPress($event)" required readonly>
        <label for="{{name}}" 
               class="label" 
               [ngStyle]="style">
               {{ label }}
        </label>
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
    }
    .input-field {
        border: 1px solid #dee2e6;
        border-radius: 2px;
        width: var(--c-width) !important;
        min-height: var(--c-height) !important;
        height: auto;
    }
    /* control css */
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
    .float-group .form-control:focus {
        outline: none !important;
        box-shadow: none;
    }
    
    .float-group .form-control:focus + label,
    .float-group .form-control:valid + label {
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
], TextComponent);

let TextModule = class TextModule {
};
TextModule = __decorate([
    NgModule({
        declarations: [TextComponent],
        imports: [
            CommonModule,
            NgbModule,
            NgxMaskModule.forRoot(),
            FormsModule
        ],
        exports: [TextComponent]
    })
], TextModule);

let TagInputComponent = class TagInputComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.value = "";
        this.name = "sml-input-type";
        this.onEnter = new EventEmitter;
    }
    ngOnInit() { }
    ngOnChanges(event) { }
    onEnterClick() {
        if (this.value != "") {
            let array = this.value.split(",");
            this.onEnter.emit(array);
            this.value = "";
        }
    }
};
TagInputComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TagInputComponent.prototype, "value", void 0);
__decorate([
    Input()
], TagInputComponent.prototype, "name", void 0);
__decorate([
    Output()
], TagInputComponent.prototype, "onEnter", void 0);
TagInputComponent = __decorate([
    Component({
        selector: 'sml-input-tag',
        template: `
    <div class="position-relative">
        <textarea row="3"  id="{{name}}" class="cus-textarea" placeholder="Type and press enter" name="{{name}}" (keyup.enter)="onEnterClick()"  [(ngModel)]="value" ></textarea>
    </div>
    `,
        styles: [`
        .position-relative {
            position: relative;
        }
        .cus-textarea {
            width: 100% !important;
            padding-left: 7px;
        }
    `]
    })
], TagInputComponent);

let TagInputModule = class TagInputModule {
};
TagInputModule = __decorate([
    NgModule({
        declarations: [TagInputComponent],
        imports: [
            CommonModule,
            FormsModule
        ],
        exports: [TagInputComponent]
    })
], TagInputModule);

let TextareaComponent = class TextareaComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.staticStyle = false;
        this.readOnly = false;
        this.getvalue = new EventEmitter;
        this.onblur = new EventEmitter;
    }
    ngOnInit() { }
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
    getValue(event) {
        this.getvalue.emit(event.target.value);
    }
    onBlur(event) {
        this.onblur.emit(event.target.value);
    }
};
TextareaComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], TextareaComponent.prototype, "value", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "name", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "row", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "column", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "label", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "maxLenght", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "style", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "staticStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "inputStyle", void 0);
__decorate([
    Input()
], TextareaComponent.prototype, "readOnly", void 0);
__decorate([
    Output()
], TextareaComponent.prototype, "getvalue", void 0);
__decorate([
    Output()
], TextareaComponent.prototype, "onblur", void 0);
TextareaComponent = __decorate([
    Component({
        selector: 'sml-input-textarea',
        template: `
  <div class="position-relative">
  <div class="input-field" 
      [ngStyle]="borderStyle" 
      [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
      <textarea *ngIf="!readOnly"
      type="text" 
      class="form-control" 
      [value]="value"  
      [rows]="row" 
      [cols]="column"
      (keyup)="getValue($event)" 
      (blur)="onBlur($event)"
      [ngStyle]="valueStyle"
      required></textarea>
      <textarea *ngIf="readOnly"
      type="text" 
      class="form-control" 
      [value]="value"  
      [rows]="row" 
      [cols]="column"
      (keyup)="getValue($event)" 
      (blur)="onBlur($event)"
      [ngStyle]="valueStyle"
      required readOnly></textarea>
    <label class="label" 
          [ngStyle]="style">
          {{ label }} <span *ngIf="maxLenght">: {{ maxLenght }}</span>
    </label>
  </div>
</div>
  `,
        styles: [`
  /* css variable */
  :host {
      --c-width: 645px;
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
      border: 1px solid rgb(222, 226, 230);
      border-radius: 2px;
      width: var(--c-width) !important;
  }
  /* control css */
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
      resize: none;
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
  
  .float-group .form-control:focus {
      box-shadow: none;
      border: none
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
  .float-group .form-control:focus-within ~ .label,
  .float-group .form-control:valid ~ .label {
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
], TextareaComponent);

let TextareaModule = class TextareaModule {
};
TextareaModule = __decorate([
    NgModule({
        declarations: [TextareaComponent],
        imports: [
            CommonModule
        ],
        exports: [TextareaComponent]
    })
], TextareaModule);

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

let UpdownModule = class UpdownModule {
};
UpdownModule = __decorate([
    NgModule({
        declarations: [UpdownComponent],
        imports: [
            CommonModule,
            NgbModule,
            FormsModule
        ],
        exports: [UpdownComponent]
    })
], UpdownModule);

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

let ColorPickersModule = class ColorPickersModule {
};
ColorPickersModule = __decorate([
    NgModule({
        declarations: [ColorPickerComponent],
        imports: [
            CommonModule, FormsModule, ColorPickerModule
        ],
        exports: [ColorPickerComponent]
    })
], ColorPickersModule);

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

let DatepickerModule = class DatepickerModule {
};
DatepickerModule = __decorate([
    NgModule({
        declarations: [DatepickerComponent],
        imports: [
            CommonModule,
            NgbModule,
            FormsModule,
            NgxMaskModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule
        ],
        exports: [DatepickerComponent]
    })
], DatepickerModule);

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

let DaterangepickerModule = class DaterangepickerModule {
};
DaterangepickerModule = __decorate([
    NgModule({
        declarations: [DaterangepickerComponent],
        imports: [
            CommonModule,
            NgbModule,
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule,
        ],
        exports: [DaterangepickerComponent]
    })
], DaterangepickerModule);

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

let NumericModule = class NumericModule {
};
NumericModule = __decorate([
    NgModule({
        declarations: [NumericComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgxCurrencyModule
        ],
        exports: [NumericComponent]
    })
], NumericModule);

let SelectComponent = class SelectComponent {
    constructor(elementRef) {
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
    ngOnInit() {
        if (this.value == "") {
            this.value = null;
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
    getselectvalue(event) {
        if (event) {
            this.selectvalue.emit(event.id);
        }
        else {
            this.value = null;
            this.selectvalue.emit("");
        }
    }
    onOpen() {
        this.isOpen = true;
    }
    onClose() {
        this.isOpen = false;
    }
};
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
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
        template: `
    <div class="position-relative">
        <div class="input-field" [ngStyle]="borderStyle" [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}">
            <ng-select *ngIf="!swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" [multiple]="multiple">
            </ng-select>
            <ng-select *ngIf="swGroupBy" [items]="listValue" bindLabel="name" [clearable]="clearable" [disabled]="disabled" bindValue="id" (change)="getselectvalue($event)"
                [(ngModel)]="value"   (open)="onOpen()" (close)="onClose()" groupBy="group" [multiple]="multiple">
                <ng-template ng-optgroup-tmp let-item="item">
                    {{item.group}}
                </ng-template>
            </ng-select>
            <label *ngIf="switchStyle" class="label" [ngClass]="{'z-9999': isOpen}" [ngStyle]="style">
                {{ label }}
            </label>
        </div>
        <label *ngIf="!switchStyle" class="label"  [ngStyle]="style">
            {{ label }}
        </label>
    </div>
    `,
        styles: [`
    :host{--c-width:645px;--c-height:44px;--label-left:4px;--label-top:2px;--value-left:4px;--value-top:17px;--font-color:rgba(0,0,0,.87);--back-color:#fff;--font-size:14px;--font-weight:200;--font-family:Arial;}
    .position-relative{position:relative;}
    .input-field{border:1px solid #dee2e6;border-radius:2px;width:var(--c-width) !important;min-height:var(--c-height) !important;height:auto;}
    .float-groupdd{position:relative;padding:0px;}
    .signal-line{border-top:none !important;border-left:none !important;border-right:none !important;border-radius:0px !important;}
    .label{position:absolute;top:-24px;left:0px;font-size:12px;padding: 0px !important;
        text-align: left;}
    .z-9999{z-index:9999;}
    .float-groupdd .label{position:absolute;top:-24px;left:0px;font-size:12px;}
    .float-group{position:relative;padding:14px 2px 0px 0px;}
    .float-group .label{font-size:12px;font-weight:normal;position:absolute;top:50%;transform:translateY(-50%);left:var(--label-left);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto}
    

    @media all and (-ms-high-contrast:none) {
        *::-ms-backdrop, .float-group .label {
            top: 0%!important;
            transform: translateY(50%);
        }
    }
    
    .float-group-static .label{font-size:9px;font-weight:bold !important;position:absolute;top:var(--label-top);left:var(--label-left);transform:translateY(0px);transition:all 200ms;opacity:1;margin:0;width:87%;height:auto;}
    :host /deep/ .ng-select .ng-select-container{border:none !important;}
    :host /deep/ .ng-select .ng-select-container .ng-value-container{padding-left:var(--value-left) !important;padding-top:var(--value-top) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container{height:var(--c-height) !important;font-size:var(--font-size) !important;font-weight:var(--font-weight) !important;font-family:var(--font-family) !important;background-color:var(--back-color) !important;color:var(--font-color) !important;}
    :host /deep/ .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:var(--value-top) !important;}
    `]
    })
], SelectComponent);

let SelectModule = class SelectModule {
};
SelectModule = __decorate([
    NgModule({
        declarations: [SelectComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgSelectModule
        ],
        exports: [SelectComponent]
    })
], SelectModule);

let DatetimepickerComponent = class DatetimepickerComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.name = 'sml-timepicker';
        this.staticStyle = false;
        this.getvalue = new EventEmitter;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('input[id$=' + this.name + ']')['inputmask']("hh:mm:ss", {
            mask: "h:s t\m",
            placeholder: "HH:MM:SS",
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
    selectChanged(event) {
        this.getvalue.emit(event);
    }
    onBlurMethod() {
        this.time = $('#' + this.name).val();
        this.getvalue.emit(this.time);
    }
};
DatetimepickerComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], DatetimepickerComponent.prototype, "time", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "name", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "width", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "label", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "switchStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "style", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "borderStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "valueStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "signalStyle", void 0);
__decorate([
    Input()
], DatetimepickerComponent.prototype, "staticStyle", void 0);
__decorate([
    Output()
], DatetimepickerComponent.prototype, "getvalue", void 0);
DatetimepickerComponent = __decorate([
    Component({
        selector: 'sml-input-timepicker',
        template: `
	<div class="position-relative">
	<div class="input-field" 
	  [ngClass]="{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}"
	  [ngStyle]="borderStyle">
	  <input
	  	class="form-control" 	
	  	[id]="name"
      	[name]="name"
		[ngxTimepicker]="picker"
		[disableClick]="true"
		[(ngModel)]="time"
		(ngModelChange)="selectChanged($event)"
		(blur)="onBlurMethod()"
		[ngStyle]="valueStyle"
		style="text-transform: uppercase;"
		required>
	  <label class="label" [ngStyle]="style">{{ label }}</label>
	  <ngx-material-timepicker #picker></ngx-material-timepicker>
	  <ngx-material-timepicker-toggle [for]="picker"></ngx-material-timepicker-toggle>
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
	
	.float-group .form-control:focus + label,
	.float-group .form-control:valid + label {
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
	ngx-material-timepicker-toggle {
		position: absolute;
		top: 50%;
		right: 2px;
		transform: translateY(-50%)
	}	
	`]
    })
], DatetimepickerComponent);

let TimepickerModule = class TimepickerModule {
};
TimepickerModule = __decorate([
    NgModule({
        declarations: [DatetimepickerComponent],
        imports: [
            CommonModule,
            NgbModule.forRoot(),
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule
        ],
        exports: [DatetimepickerComponent]
    })
], TimepickerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxComponent, CheckboxModule, ColorPickerComponent, ColorPickersModule, DatepickerComponent, DatepickerModule, DaterangepickerComponent, DaterangepickerModule, DatetimepickerComponent, NumericComponent, NumericModule, RadioComponent, RadioModule, SelectComponent, SelectModule, SwitchComponent, SwitchModule, TagInputComponent, TagInputModule, TextComponent, TextModule, TextareaComponent, TextareaModule, TimepickerModule, UpdownComponent, UpdownModule };
//# sourceMappingURL=sml-inputs-nine.js.map
