import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var UpdownComponent = /** @class */ (function () {
    function UpdownComponent(elementRef) {
        this.elementRef = elementRef;
        this.initialValue = 0;
        this.isNagative = false;
        this.textAlign = 'right';
        this.isLabel = false;
        this.staticStyle = false;
        this.valueChange = new EventEmitter();
    }
    UpdownComponent.prototype.ngOnInit = function () {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        else {
            this.initialValue = parseInt(this.initialValue);
        }
    };
    UpdownComponent.prototype.ngOnChanges = function (event) {
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
    UpdownComponent.prototype.styleObject = function () {
        var nType = {};
        Object.assign(nType, this.valueStyle);
        Object.assign(nType, this.borderStyle);
        return nType;
    };
    UpdownComponent.prototype.increaseValue = function () {
        if (this.initialValue == undefined || this.initialValue == "" || this.initialValue == null) {
            this.initialValue = 0;
        }
        this.initialValue += 1;
        this.valueChange.emit(this.initialValue);
    };
    UpdownComponent.prototype.decreaseValue = function () {
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
    };
    UpdownComponent.prototype.onBlurMethod = function () {
        this.valueChange.emit(this.initialValue);
    };
    UpdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
            template: "\n  <div class=\"position-relative\">\n  <div class=\"input-field\" \n    [ngClass]=\"{'float-group':switchStyle,'float-groupdd': !switchStyle,'signal-line': signalStyle,'float-group-static': staticStyle}\"\n    [ngStyle]=\"borderStyle\">\n    <input \n        type=\"number\" \n        [(ngModel)]=\"initialValue\" \n        [ngStyle]=\"valueStyle\"\n        (blur)=\"onBlurMethod()\"\n        [style.text-align]=\"textAlign\"\n        class=\"form-control\" required>\n    <div class=\"numberSpinner\">\n      <a href=\"javascript:void(0)\" (click)=\"increaseValue()\" class=\"spinnerBtn\">\n        <i class=\"fa fa-caret-up\"></i>\n      </a>\n      <a href=\"javascript:void(0)\" (click)=\"decreaseValue()\" class=\"spinnerBtn\">\n        <i class=\"fa fa-caret-down\"></i>\n      </a>\n    </div>\n    <label *ngIf=\"isLabel\" [ngStyle]=\"style\" class=\"label\">{{label}}</label>\n  </div>\n</div>\n  ",
            styles: ["\n  /* css variable */\n  :host {\n      --c-width: 100%;\n      --c-height: 25px;\n      --label-left: 10px;\n      --label-top: 0px;\n      --value-left: 10px;\n      --value-top: 0px;\n  }\n  /* box css */\n  .position-relative {\n      position: relative;\n      width: var(--c-width) !important;\n  }\n  .input-field {\n      border: 1px solid #dee2e6;\n      border-radius: 2px;\n      min-height: var(--c-height) !important;\n      height: auto;\n  }\n  /* control css */\n  .form-control {\n      display: block;\n      padding-top: 0.375rem;\n      padding-right: var(--value-left);\n      padding-bottom: 0.375rem;\n      padding-left: 0.75rem;\n      font-size: 1rem;\n      line-height: 1.5;\n      color: #495057;\n      background-color: #fff;\n      background-clip: padding-box;\n      border: none;\n      text-align: right;\n      min-height: var(--c-height) !important;\n      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  }\n  .form-control {\n      background-color: inherit;\n      box-shadow: none !important;\n  }\n  .signal-line{\n      border-top: none !important;\n      border-left: none !important;\n      border-right: none !important;\n      border-radius: 0px !important;\n  }\n  /* labelcss */\n  .label{\n      position: absolute; \n      top: -24px;\n      left: 0px; \n      font-size: 12px;\n      padding: 0px !important;\n        text-align: left;\n  }\n  .float-group {\n      position: relative;\n      padding: 14px 7px 2px 0px;\n  }\n  .float-group .form-control {\n      padding-top: var(--value-top);\n      padding-right: var(--value-left);\n      padding-bottom: 0px;\n      padding-left: var(--value-left);\n  }\n  .float-group .label {\n      font-size: 12px;\n      font-weight: normal;\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%);\n      left: var(--label-left);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group .form-control:focus {\n      outline: none !important;\n      box-shadow: none;\n  }\n  .float-group-static .label {\n    font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  .float-group .form-control:focus-within ~ .label,.float-group .form-control:valid ~ .label {\n      font-size: 9px;\n      font-weight: bold !important;  /* floating lable always bold */\n      position: absolute;\n      top: var(--label-top);\n      left: var(--label-left);\n      transform: translateY(0px);\n      transition: all 200ms;\n      opacity: 1;\n      margin: 0;\n      width: 87%;\n      height: auto;\n  }\n  \n  .numberSpinner {\n      display: inline-flex;\n      flex-direction: column;\n      position: absolute;\n      right: 0px;\n      top: 0px;\n      bottom: 0px;\n      border-top-right-radius: 2px;\n      border-bottom-right-radius: 2px;\n      overflow: hidden;\n      z-index: 1;\n  }\n  .spinnerBtn {\n      background: #f1f1f1;\n      border: none;\n      font-size: 14px;\n      color: initial;\n      padding: 0 7px;\n      display: flex;\n      height: 50%;\n      align-items: center;\n      justify-content: center;\n  }\n  .spinnerBtn:active {\n      color: #fff;\n      background: #666666!important;\n  }\n  .spinnerBtn:hover {\n      background: #d1d1d1;\n      text-decoration: none;\n  }\n  input[type=number]::-webkit-inner-spin-button{\n      opacity: 0;\n      font-size: 14px\n  } \n  "]
        })
    ], UpdownComponent);
    return UpdownComponent;
}());
export { UpdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi91cGRvd24vdXBkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0wzRjtJQWNJLHlCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBYmpDLGlCQUFZLEdBQVEsQ0FBQyxDQUFDO1FBRXRCLGVBQVUsR0FBUSxLQUFLLENBQUM7UUFDeEIsY0FBUyxHQUFRLE9BQU8sQ0FBQztRQUV6QixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBS3JCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUczQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNuRDtJQUNMLENBQUM7SUFDRCxxQ0FBVyxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksU0FBUyxFQUFFO1lBQ25FLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDN0UsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDSSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1Q0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUN4RixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDeEYsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDNUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0Qsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkF4RCtCLFVBQVU7O0lBYmpDO1FBQVIsS0FBSyxFQUFFO3lEQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTt3REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7dURBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO3NEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtrREFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO29EQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtrREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3VEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTt3REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7d0RBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO3dEQUE4QjtJQUM1QjtRQUFULE1BQU0sRUFBRTt3REFBa0M7SUFabEMsZUFBZTtRQTlLM0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsODRCQXVCWDtxQkFDVSx5bUhBa0pWO1NBQ0YsQ0FBQztPQUNXLGVBQWUsQ0F1RTNCO0lBQUQsc0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXZFWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1pbnB1dC11cGRvd24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICA8ZGl2IGNsYXNzPVwiaW5wdXQtZmllbGRcIiBcclxuICAgIFtuZ0NsYXNzXT1cInsnZmxvYXQtZ3JvdXAnOnN3aXRjaFN0eWxlLCdmbG9hdC1ncm91cGRkJzogIXN3aXRjaFN0eWxlLCdzaWduYWwtbGluZSc6IHNpZ25hbFN0eWxlLCdmbG9hdC1ncm91cC1zdGF0aWMnOiBzdGF0aWNTdHlsZX1cIlxyXG4gICAgW25nU3R5bGVdPVwiYm9yZGVyU3R5bGVcIj5cclxuICAgIDxpbnB1dCBcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCIgXHJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJpbml0aWFsVmFsdWVcIiBcclxuICAgICAgICBbbmdTdHlsZV09XCJ2YWx1ZVN0eWxlXCJcclxuICAgICAgICAoYmx1cik9XCJvbkJsdXJNZXRob2QoKVwiXHJcbiAgICAgICAgW3N0eWxlLnRleHQtYWxpZ25dPVwidGV4dEFsaWduXCJcclxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIHJlcXVpcmVkPlxyXG4gICAgPGRpdiBjbGFzcz1cIm51bWJlclNwaW5uZXJcIj5cclxuICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIChjbGljayk9XCJpbmNyZWFzZVZhbHVlKClcIiBjbGFzcz1cInNwaW5uZXJCdG5cIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhcmV0LXVwXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiAoY2xpY2spPVwiZGVjcmVhc2VWYWx1ZSgpXCIgY2xhc3M9XCJzcGlubmVyQnRuXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYXJldC1kb3duXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxsYWJlbCAqbmdJZj1cImlzTGFiZWxcIiBbbmdTdHlsZV09XCJzdHlsZVwiIGNsYXNzPVwibGFiZWxcIj57e2xhYmVsfX08L2xhYmVsPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gIC8qIGNzcyB2YXJpYWJsZSAqL1xyXG4gIDpob3N0IHtcclxuICAgICAgLS1jLXdpZHRoOiAxMDAlO1xyXG4gICAgICAtLWMtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAtLWxhYmVsLWxlZnQ6IDEwcHg7XHJcbiAgICAgIC0tbGFiZWwtdG9wOiAwcHg7XHJcbiAgICAgIC0tdmFsdWUtbGVmdDogMTBweDtcclxuICAgICAgLS12YWx1ZS10b3A6IDBweDtcclxuICB9XHJcbiAgLyogYm94IGNzcyAqL1xyXG4gIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IHZhcigtLWMtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tYy1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLyogY29udHJvbCBjc3MgKi9cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwLjM3NXJlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tdmFsdWUtbGVmdCk7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjM3NXJlbTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1jLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNpZ25hbC1saW5le1xyXG4gICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLyogbGFiZWxjc3MgKi9cclxuICAubGFiZWx7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHRvcDogLTI0cHg7XHJcbiAgICAgIGxlZnQ6IDBweDsgXHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxNHB4IDdweCAycHggMHB4O1xyXG4gIH1cclxuICAuZmxvYXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS12YWx1ZS10b3ApO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS12YWx1ZS1sZWZ0KTtcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBsZWZ0OiB2YXIoLS1sYWJlbC1sZWZ0KTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5mbG9hdC1ncm91cC1zdGF0aWMgLmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyAgLyogZmxvYXRpbmcgbGFibGUgYWx3YXlzIGJvbGQgKi9cclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IHZhcigtLWxhYmVsLXRvcCk7XHJcbiAgICAgIGxlZnQ6IHZhcigtLWxhYmVsLWxlZnQpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiA4NyU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmZsb2F0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zm9jdXMtd2l0aGluIH4gLmxhYmVsLC5mbG9hdC1ncm91cCAuZm9ybS1jb250cm9sOnZhbGlkIH4gLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7ICAvKiBmbG9hdGluZyBsYWJsZSBhbHdheXMgYm9sZCAqL1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogdmFyKC0tbGFiZWwtdG9wKTtcclxuICAgICAgbGVmdDogdmFyKC0tbGFiZWwtbGVmdCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgd2lkdGg6IDg3JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubnVtYmVyU3Bpbm5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnNwaW5uZXJCdG4ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IGluaXRpYWw7XHJcbiAgICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zcGlubmVyQnRuOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2IWltcG9ydGFudDtcclxuICB9XHJcbiAgLnNwaW5uZXJCdG46aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbntcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgfSBcclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVXBkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIGluaXRpYWxWYWx1ZTogYW55ID0gMDtcclxuICAgIEBJbnB1dCgpIHN3aXRjaFN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBpc05hZ2F0aXZlOiBhbnkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRleHRBbGlnbjogYW55ID0gJ3JpZ2h0JztcclxuICAgIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpc0xhYmVsOiBhbnkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBib3JkZXJTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgc2lnbmFsU3R5bGU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzdGF0aWNTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5pbml0aWFsVmFsdWUgPT0gXCJcIiB8fCB0aGlzLmluaXRpYWxWYWx1ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IHBhcnNlSW50KHRoaXMuaW5pdGlhbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcyhldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZXQgY3NzID0gZXZlbnQuc3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLXdpZHRoJywgY3NzWydjLXdpZHRoJ10pO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jLWhlaWdodCcsIGNzc1snYy1oZWlnaHQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLXRvcCcsIGNzc1snbGFiZWwtdG9wJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQudmFsdWVTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQudmFsdWVTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBjc3MgPSBldmVudC52YWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtbGVmdCcsIGNzc1sndmFsdWUtbGVmdCddKTtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUtdG9wJywgY3NzWyd2YWx1ZS10b3AnXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdHlsZU9iamVjdCgpOiBPYmplY3Qge1xyXG4gICAgICAgIGxldCBuVHlwZSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oblR5cGUsIHRoaXMudmFsdWVTdHlsZSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuVHlwZSwgdGhpcy5ib3JkZXJTdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIG5UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlVmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlID09IHVuZGVmaW5lZCB8fCB0aGlzLmluaXRpYWxWYWx1ZSA9PSBcIlwiIHx8IHRoaXMuaW5pdGlhbFZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSArPSAxO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmluaXRpYWxWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VWYWx1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgPT0gdW5kZWZpbmVkIHx8IHRoaXMuaW5pdGlhbFZhbHVlID09IFwiXCIgfHwgdGhpcy5pbml0aWFsVmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgLT0gMTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuaW5pdGlhbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOYWdhdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZSAtPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5pbml0aWFsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBvbkJsdXJNZXRob2QoKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuaW5pdGlhbFZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iXX0=