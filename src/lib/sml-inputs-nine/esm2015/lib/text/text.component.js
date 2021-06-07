import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
export { TextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGV4dC90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkszRixJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBd0J0QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBdkJqQyxTQUFJLEdBQVEsTUFBTSxDQUFDO1FBQ25CLGNBQVMsR0FBUSxHQUFHLENBQUM7UUFDckIsYUFBUSxHQUFRLEtBQUssQ0FBQztRQUN0QixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBU2hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBSzdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMxQixhQUFRLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxDQUFDO0lBRWEsQ0FBQztJQUUvQyxRQUFRLEtBQUssQ0FBQztJQUVkLFdBQVcsQ0FBQyxLQUFLO1FBQ2IsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDbkUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FB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QUFFOytDQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtrREFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7a0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO2tEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTs0Q0FBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO2tEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtpREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7aURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOytDQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTsrQ0FBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7cURBQTRCO0FBQzFCO0lBQVQsTUFBTSxFQUFFOytDQUE2QjtBQUMvQjtJQUFULE1BQU0sRUFBRTs2Q0FBMkI7QUF0QnhCLGFBQWE7SUF6S3pCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0EwQ1Q7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMEhSO0tBQ0osQ0FBQztHQUNXLGFBQWEsQ0FzRXpCO1NBdEVZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc21sLWlucHV0LXRleHQnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkXCIgXHJcbiAgICAgICAgW25nQ2xhc3NdPVwieydmbG9hdC1ncm91cCc6c3dpdGNoU3R5bGUsJ2Zsb2F0LWdyb3VwZGQnOiAhc3dpdGNoU3R5bGUsJ3NpZ25hbC1saW5lJzogc2lnbmFsU3R5bGUsJ2Zsb2F0LWdyb3VwLXN0YXRpYyc6IHN0YXRpY1N0eWxlfVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIj5cclxuICAgICAgICA8aW5wdXQgKm5nSWY9XCIhcmVhZE9ubHlcIiBpZD1cInt7bmFtZX19XCIgXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e25hbWV9fVwiIFxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgIFtwYXR0ZXJuc109XCJwYXR0ZXJuc1wiIFxyXG4gICAgICAgICAgICAgICBbc2hvd25NYXNrRXhwcmVzc2lvbl09XCJleHByZXNzaW9uXCJcclxuICAgICAgICAgICAgICAgW21hc2tdPVwibWFza1R5cGVcIiBcclxuICAgICAgICAgICAgICAgW3Nob3dNYXNrVHlwZWRdPVwic2hvd01hc2tcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgKGZvY3VzKT0gXCJvbkVuZGZvY3VzKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgKGtleXVwKT1cImdldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAoa2V5cHJlc3MpPVwia2V5UHJlc3MoJGV2ZW50KVwiIHJlcXVpcmVkPlxyXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cInJlYWRPbmx5XCIgaWQ9XCJ7e25hbWV9fVwiIFxyXG4gICAgICAgICAgICAgICBuYW1lPVwie3tuYW1lfX1cIiBcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICAgICAgICAgIFthdHRyLm1heGxlbmd0aF09XCJtYXhsZW5ndGhcIlxyXG4gICAgICAgICAgICAgICBbcGF0dGVybnNdPVwicGF0dGVybnNcIiBcclxuICAgICAgICAgICAgICAgW3Nob3duTWFza0V4cHJlc3Npb25dPVwiZXhwcmVzc2lvblwiXHJcbiAgICAgICAgICAgICAgIFttYXNrXT1cIm1hc2tUeXBlXCIgXHJcbiAgICAgICAgICAgICAgIFtzaG93TWFza1R5cGVkXT1cInNob3dNYXNrXCJcclxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgIChmb2N1cyk9IFwib25FbmRmb2N1cygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgW25nU3R5bGVdPVwidmFsdWVTdHlsZVwiXHJcbiAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1cigkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgICAgIChrZXl1cCk9XCJnZXRWYWx1ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgKGtleXByZXNzKT1cImtleVByZXNzKCRldmVudClcIiByZXF1aXJlZCByZWFkb25seT5cclxuICAgICAgICA8bGFiZWwgZm9yPVwie3tuYW1lfX1cIiBcclxuICAgICAgICAgICAgICAgY2xhc3M9XCJsYWJlbFwiIFxyXG4gICAgICAgICAgICAgICBbbmdTdHlsZV09XCJzdHlsZVwiPlxyXG4gICAgICAgICAgICAgICB7eyBsYWJlbCB9fVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgLyogY3NzIHZhcmlhYmxlICovXHJcbiAgICA6aG9zdCB7XHJcbiAgICAgICAgLS1jLXdpZHRoOiA2NDVweDtcclxuICAgICAgICAtLWMtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIC0tbGFiZWwtbGVmdDogMTBweDtcclxuICAgICAgICAtLWxhYmVsLXRvcDogMHB4O1xyXG4gICAgICAgIC0tdmFsdWUtbGVmdDogMTBweDtcclxuICAgICAgICAtLXZhbHVlLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBib3ggY3NzICovXHJcbiAgICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgd2lkdGg6IHZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLyogY29udHJvbCBjc3MgKi9cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjM3NXJlbTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXZhbHVlLWxlZnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnNpZ25hbC1saW5le1xyXG4gICAgICAgIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLyogbGFiZWxjc3MgKi9cclxuICAgIC5sYWJlbHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4OyBcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC5mbG9hdC1ncm91cCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMjRweCAycHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSkge1xyXG4gICAgICAgICo6Oi1tcy1iYWNrZHJvcCwgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICAgICAgICAgIHRvcDogMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuZmxvYXQtZ3JvdXAtc3RhdGljIC5sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiB2YXIoLS1sYWJlbC10b3ApO1xyXG4gICAgICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB3aWR0aDogODclO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMgKyBsYWJlbCxcclxuICAgIC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOnZhbGlkICsgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfSAgICBcclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHR5cGU6IGFueSA9ICd0ZXh0JztcclxuICAgIEBJbnB1dCgpIG1heGxlbmd0aDogYW55ID0gMjU1O1xyXG4gICAgQElucHV0KCkgc2hvd01hc2s6IGFueSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdmFsdWU6IGFueSA9IFwiXCI7XHJcbiAgICBASW5wdXQoKSBuYW1lO1xyXG4gICAgQElucHV0KCkgbWFza1R5cGU7XHJcbiAgICBASW5wdXQoKSBwYXR0ZXJucztcclxuICAgIEBJbnB1dCgpIGV4cHJlc3Npb247XHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZml4VmFsdWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGJvcmRlclN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBpbnB1dFN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgb25seVRleHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG5vUHV0Q2hhcmFjdGVyOiBudW1iZXIgPSAwO1xyXG4gICAgQE91dHB1dCgpIGdldHZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHRAT3V0cHV0KCkgb25ibHVyID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuc3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IGNzcyA9IGV2ZW50LnN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy13aWR0aCcsIGNzc1snYy13aWR0aCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC1sZWZ0JywgY3NzWydsYWJlbC1sZWZ0J10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sYWJlbC10b3AnLCBjc3NbJ2xhYmVsLXRvcCddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LnZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LnZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLWxlZnQnLCBjc3NbJ3ZhbHVlLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZShldmVudCkge1xyXG4gICAgICAgIHZhciBnZXRWYWwgPSBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLmdldHZhbHVlLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIFxyXG5cdG9uQmx1cihldmVudCkge1xyXG4gICAgICAgIHRoaXMub25ibHVyLmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG4gICAgb25FbmRmb2N1cyhldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hc2tUeXBlICE9ICcnICYmIHRoaXMubWFza1R5cGUgIT0gbnVsbCAmJiB0aGlzLm1hc2tUeXBlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCA9IHRoaXMubm9QdXRDaGFyYWN0ZXIgPT0gMCA/IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggOiB0aGlzLm5vUHV0Q2hhcmFjdGVyO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNlbGVjdGlvbkVuZCA9IHRoaXMubm9QdXRDaGFyYWN0ZXIgPT0gMCA/IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggOiB0aGlzLm5vUHV0Q2hhcmFjdGVyO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgLy9lLnRhcmdldC5zZWxlY3Rpb25TdGFydCsrO1xyXG4gICAgICAgIC8vZS50YXJnZXQuc2VsZWN0aW9uRW5kKys7XHJcbiAgICAgICAgaWYodGhpcy5vbmx5VGV4dCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBlLnRhcmdldC5zZWxlY3Rpb25TdGFydCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBlLnRhcmdldC5zZWxlY3Rpb25FbmQrKztcclxuICAgIH1cclxufVxyXG4iXX0=