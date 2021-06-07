import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var TextComponent = /** @class */ (function () {
    function TextComponent(elementRef) {
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
    TextComponent.prototype.ngOnInit = function () { };
    TextComponent.prototype.ngOnChanges = function (event) {
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
        }
    };
    TextComponent.prototype.getValue = function (event) {
        var getVal = event.target.value;
        this.getvalue.emit(event.target.value);
    };
    TextComponent.prototype.onBlur = function (event) {
        this.onblur.emit(event.target.value);
    };
    TextComponent.prototype.onEndfocus = function (event) {
        var _this = this;
        if (this.maskType != '' && this.maskType != null && this.maskType != undefined) {
            setTimeout(function () {
                event.target.selectionStart = _this.noPutCharacter == 0 ? event.target.value.length : _this.noPutCharacter;
                event.target.selectionEnd = _this.noPutCharacter == 0 ? event.target.value.length : _this.noPutCharacter;
            }, 500);
        }
    };
    TextComponent.prototype.keyPress = function (e) {
        //e.target.selectionStart++;
        //e.target.selectionEnd++;
        if (this.onlyText == false) {
            e.target.selectionStart++;
        }
        e.target.selectionEnd++;
    };
    TextComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
            template: "\n    <div class=\"position-relative\">\n    <div class=\"input-field\" \n        [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n        [ngStyle]=\"borderStyle\">\n        <input *ngIf=\"!readOnly\" id=\"{{name}}\" \n               name=\"{{name}}\" \n               class=\"form-control\" \n               [type]=\"type\"\n               [attr.maxlength]=\"maxlength\"\n               [patterns]=\"patterns\" \n               [shownMaskExpression]=\"expression\"\n               [mask]=\"maskType\" \n               [showMaskTyped]=\"showMask\"\n               [(ngModel)]=\"value\"\n               (focus)= \"onEndfocus($event)\"\n               [ngStyle]=\"valueStyle\"\n               (blur)=\"onBlur($event)\" \n               (keyup)=\"getValue($event)\"\n               (keypress)=\"keyPress($event)\" required>\n        <input *ngIf=\"readOnly\" id=\"{{name}}\" \n               name=\"{{name}}\" \n               class=\"form-control\" \n               [type]=\"type\"\n               [attr.maxlength]=\"maxlength\"\n               [patterns]=\"patterns\" \n               [shownMaskExpression]=\"expression\"\n               [mask]=\"maskType\" \n               [showMaskTyped]=\"showMask\"\n               [(ngModel)]=\"value\"\n               (focus)= \"onEndfocus($event)\"\n               [ngStyle]=\"valueStyle\"\n               (blur)=\"onBlur($event)\" \n               (keyup)=\"getValue($event)\"\n               (keypress)=\"keyPress($event)\" required readonly>\n        <label for=\"{{name}}\" \n               class=\"label\" \n               [ngStyle]=\"style\">\n               {{ label }}\n        </label>\n    </div>\n</div>\n    ",
            styles: ["\n    /* css variable */\n    :host {\n        --c-width: 645px;\n        --c-height: 25px;\n        --label-left: 10px;\n        --label-top: 0px;\n        --value-left: 10px;\n        --value-top: 0px;\n    }\n    \n    /* box css */\n    .position-relative {\n        position: relative;\n    }\n    .input-field {\n        border: 1px solid #dee2e6;\n        border-radius: 2px;\n        width: var(--c-width) !important;\n        min-height: var(--c-height) !important;\n        height: auto;\n    }\n    /* control css */\n    .form-control {\n        display: block;\n        padding-top: 0.375rem;\n        padding-right: 0.75rem;\n        padding-bottom: 0.375rem;\n        padding-left: var(--value-left);\n        font-size: 1rem;\n        line-height: 1.5;\n        color: #495057;\n        background-color: #fff;\n        background-clip: padding-box;\n        border: none;\n        min-height: var(--c-height) !important;\n        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n    }\n    .form-control {\n        background-color: inherit;\n        box-shadow: none !important;\n    }\n    .signal-line{\n        border-top: none !important;\n        border-left: none !important;\n        border-right: none !important;\n        border-radius: 0px !important;\n    }\n    /* labelcss */\n    .label{\n        position: absolute; \n        top: -24px;\n        left: 0px; \n        font-size: 12px;\n        padding: 0px !important;\n        text-align: left;\n    }\n    .float-group {\n        position: relative;\n        padding: 14px 24px 2px 0px;\n    }\n    .float-group .form-control {\n        padding-top: var(--value-top);\n        padding-right: 0px;\n        padding-bottom: 0px;\n        padding-left: var(--value-left);\n    }\n    .float-group .label {\n        font-size: 12px;\n        font-weight: normal;\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        left: var(--label-left);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n\n    @media all and (-ms-high-contrast:none) {\n        *::-ms-backdrop, .float-group .label {\n            top: 0%!important;\n            transform: translateY(50%);\n        }\n    }\n\n\n\n    .float-group-static .label {\n        font-size: 9px;\n        font-weight: bold !important;\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }\n    .float-group .form-control:focus {\n        outline: none !important;\n        box-shadow: none;\n    }\n    \n    .float-group .form-control:focus + label,\n    .float-group .form-control:valid + label {\n        font-size: 9px;\n        font-weight: bold !important;  /* floating lable always bold */\n        position: absolute;\n        top: var(--label-top);\n        left: var(--label-left);\n        transform: translateY(0px);\n        transition: all 200ms;\n        opacity: 1;\n        margin: 0;\n        width: 87%;\n        height: auto;\n    }    \n    "]
        })
    ], TextComponent);
    return TextComponent;
}());
export { TextComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGV4dC90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMkszRjtJQXdCSSx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQXZCakMsU0FBSSxHQUFRLE1BQU0sQ0FBQztRQUNuQixjQUFTLEdBQVEsR0FBRyxDQUFDO1FBQ3JCLGFBQVEsR0FBUSxLQUFLLENBQUM7UUFDdEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQVNoQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUs3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDMUIsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLFdBQU0sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUVhLENBQUM7SUFFL0MsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxtQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ25FLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENB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SyxFQUFFO21EQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtzREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7c0RBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3NEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTtnREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3NEQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtxREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7cURBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO21EQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTttREFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7eURBQTRCO0lBQzFCO1FBQVQsTUFBTSxFQUFFO21EQUE2QjtJQUMvQjtRQUFULE1BQU0sRUFBRTtpREFBMkI7SUF0QnhCLGFBQWE7UUF6S3pCLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLG90REEwQ1Q7cUJBQ1EsbXFHQTBIUjtTQUNKLENBQUM7T0FDVyxhQUFhLENBc0V6QjtJQUFELG9CQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F0RVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtaW5wdXQtdGV4dCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBcclxuICAgICAgICBbbmdDbGFzc109XCJ7J2Zsb2F0LWdyb3VwJzpzd2l0Y2hTdHlsZSwnZmxvYXQtZ3JvdXBkZCc6ICFzd2l0Y2hTdHlsZSwnc2lnbmFsLWxpbmUnOiBzaWduYWxTdHlsZSwnZmxvYXQtZ3JvdXAtc3RhdGljJzogc3RhdGljU3R5bGV9XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJib3JkZXJTdHlsZVwiPlxyXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cIiFyZWFkT25seVwiIGlkPVwie3tuYW1lfX1cIiBcclxuICAgICAgICAgICAgICAgbmFtZT1cInt7bmFtZX19XCIgXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgIFt0eXBlXT1cInR5cGVcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5tYXhsZW5ndGhdPVwibWF4bGVuZ3RoXCJcclxuICAgICAgICAgICAgICAgW3BhdHRlcm5zXT1cInBhdHRlcm5zXCIgXHJcbiAgICAgICAgICAgICAgIFtzaG93bk1hc2tFeHByZXNzaW9uXT1cImV4cHJlc3Npb25cIlxyXG4gICAgICAgICAgICAgICBbbWFza109XCJtYXNrVHlwZVwiIFxyXG4gICAgICAgICAgICAgICBbc2hvd01hc2tUeXBlZF09XCJzaG93TWFza1wiXHJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAoZm9jdXMpPSBcIm9uRW5kZm9jdXMoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInZhbHVlU3R5bGVcIlxyXG4gICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICAgICAoa2V5dXApPVwiZ2V0VmFsdWUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgIChrZXlwcmVzcyk9XCJrZXlQcmVzcygkZXZlbnQpXCIgcmVxdWlyZWQ+XHJcbiAgICAgICAgPGlucHV0ICpuZ0lmPVwicmVhZE9ubHlcIiBpZD1cInt7bmFtZX19XCIgXHJcbiAgICAgICAgICAgICAgIG5hbWU9XCJ7e25hbWV9fVwiIFxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIubWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiXHJcbiAgICAgICAgICAgICAgIFtwYXR0ZXJuc109XCJwYXR0ZXJuc1wiIFxyXG4gICAgICAgICAgICAgICBbc2hvd25NYXNrRXhwcmVzc2lvbl09XCJleHByZXNzaW9uXCJcclxuICAgICAgICAgICAgICAgW21hc2tdPVwibWFza1R5cGVcIiBcclxuICAgICAgICAgICAgICAgW3Nob3dNYXNrVHlwZWRdPVwic2hvd01hc2tcIlxyXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgKGZvY3VzKT0gXCJvbkVuZGZvY3VzKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgKGtleXVwKT1cImdldFZhbHVlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAoa2V5cHJlc3MpPVwia2V5UHJlc3MoJGV2ZW50KVwiIHJlcXVpcmVkIHJlYWRvbmx5PlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJ7e25hbWV9fVwiIFxyXG4gICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsXCIgXHJcbiAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAvKiBjc3MgdmFyaWFibGUgKi9cclxuICAgIDpob3N0IHtcclxuICAgICAgICAtLWMtd2lkdGg6IDY0NXB4O1xyXG4gICAgICAgIC0tYy1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgLS1sYWJlbC1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAgICAgLS12YWx1ZS1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC0tdmFsdWUtdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIGJveCBjc3MgKi9cclxuICAgIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICB3aWR0aDogdmFyKC0tYy13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAvKiBjb250cm9sIGNzcyAqL1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2lnbmFsLWxpbmV7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvKiBsYWJlbGNzcyAqL1xyXG4gICAgLmxhYmVse1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgdG9wOiAtMjRweDtcclxuICAgICAgICBsZWZ0OiAwcHg7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmZsb2F0LWdyb3VwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAyNHB4IDJweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLXZhbHVlLXRvcCk7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICAgIH1cclxuICAgIC5mbG9hdC1ncm91cCAubGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSB7XHJcbiAgICAgICAgKjo6LW1zLWJhY2tkcm9wLCAuZmxvYXQtZ3JvdXAgLmxhYmVsIHtcclxuICAgICAgICAgICAgdG9wOiAwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbDpmb2N1cyArIGxhYmVsLFxyXG4gICAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6dmFsaWQgKyBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDsgIC8qIGZsb2F0aW5nIGxhYmxlIGFsd2F5cyBib2xkICovXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgICAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9ICAgIFxyXG4gICAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgdHlwZTogYW55ID0gJ3RleHQnO1xyXG4gICAgQElucHV0KCkgbWF4bGVuZ3RoOiBhbnkgPSAyNTU7XHJcbiAgICBASW5wdXQoKSBzaG93TWFzazogYW55ID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSB2YWx1ZTogYW55ID0gXCJcIjtcclxuICAgIEBJbnB1dCgpIG5hbWU7XHJcbiAgICBASW5wdXQoKSBtYXNrVHlwZTtcclxuICAgIEBJbnB1dCgpIHBhdHRlcm5zO1xyXG4gICAgQElucHV0KCkgZXhwcmVzc2lvbjtcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBmaXhWYWx1ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc3dpdGNoU3R5bGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzaWduYWxTdHlsZTogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHN0YXRpY1N0eWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgYm9yZGVyU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHZhbHVlU3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGlucHV0U3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBvbmx5VGV4dDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbm9QdXRDaGFyYWN0ZXI6IG51bWJlciA9IDA7XHJcbiAgICBAT3V0cHV0KCkgZ2V0dmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cdEBPdXRwdXQoKSBvbmJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGdldFZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuZ2V0dmFsdWUuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgXHJcblx0b25CbHVyKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHJcbiAgICBvbkVuZGZvY3VzKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFza1R5cGUgIT0gJycgJiYgdGhpcy5tYXNrVHlwZSAhPSBudWxsICYmIHRoaXMubWFza1R5cGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5ub1B1dENoYXJhY3RlciA9PSAwID8gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA6IHRoaXMubm9QdXRDaGFyYWN0ZXI7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kID0gdGhpcy5ub1B1dENoYXJhY3RlciA9PSAwID8gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA6IHRoaXMubm9QdXRDaGFyYWN0ZXI7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICAvL2UudGFyZ2V0LnNlbGVjdGlvblN0YXJ0Kys7XHJcbiAgICAgICAgLy9lLnRhcmdldC5zZWxlY3Rpb25FbmQrKztcclxuICAgICAgICBpZih0aGlzLm9ubHlUZXh0ID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LnNlbGVjdGlvblN0YXJ0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LnNlbGVjdGlvbkVuZCsrO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==