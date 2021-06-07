import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
var TagInputComponent = /** @class */ (function () {
    function TagInputComponent(elementRef) {
        this.elementRef = elementRef;
        this.value = "";
        this.name = "sml-input-type";
        this.onEnter = new EventEmitter;
    }
    TagInputComponent.prototype.ngOnInit = function () { };
    TagInputComponent.prototype.ngOnChanges = function (event) { };
    TagInputComponent.prototype.onEnterClick = function () {
        if (this.value != "") {
            var array = this.value.split(",");
            this.onEnter.emit(array);
            this.value = "";
        }
    };
    TagInputComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
            template: "\n    <div class=\"position-relative\">\n        <textarea row=\"3\"  id=\"{{name}}\" class=\"cus-textarea\" placeholder=\"Type and press enter\" name=\"{{name}}\" (keyup.enter)=\"onEnterClick()\"  [(ngModel)]=\"value\" ></textarea>\n    </div>\n    ",
            styles: ["\n        .position-relative {\n            position: relative;\n        }\n        .cus-textarea {\n            width: 100% !important;\n            padding-left: 7px;\n        }\n    "]
        })
    ], TagInputComponent);
    return TagInputComponent;
}());
export { TagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90YWctaW5wdXQvdGFnLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUIzRjtJQU1JLDJCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmpDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFRLGdCQUFnQixDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUVTLENBQUM7SUFDL0Msb0NBQVEsR0FBUixjQUFhLENBQUM7SUFDZCx1Q0FBVyxHQUFYLFVBQVksS0FBSyxJQUFJLENBQUM7SUFFdEIsd0NBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDOztnQkFWK0IsVUFBVTs7SUFKakM7UUFBUixLQUFLLEVBQUU7b0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO21EQUE4QjtJQUM1QjtRQUFULE1BQU0sRUFBRTtzREFBNEI7SUFKNUIsaUJBQWlCO1FBakI3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsNFBBSVQ7cUJBQ1EsMkxBUVI7U0FDSixDQUFDO09BQ1csaUJBQWlCLENBaUI3QjtJQUFELHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FqQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NtbC1pbnB1dC10YWcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYSByb3c9XCIzXCIgIGlkPVwie3tuYW1lfX1cIiBjbGFzcz1cImN1cy10ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiVHlwZSBhbmQgcHJlc3MgZW50ZXJcIiBuYW1lPVwie3tuYW1lfX1cIiAoa2V5dXAuZW50ZXIpPVwib25FbnRlckNsaWNrKClcIiAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiID48L3RleHRhcmVhPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gICAgICAgIC5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmN1cy10ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWdJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgdmFsdWU6IGFueSA9IFwiXCI7XHJcbiAgICBASW5wdXQoKSBuYW1lOiBhbnkgPSBcInNtbC1pbnB1dC10eXBlXCI7XHJcbiAgICBAT3V0cHV0KCkgb25FbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuICAgIG5nT25Jbml0KCkgeyB9XHJcbiAgICBuZ09uQ2hhbmdlcyhldmVudCkgeyB9XHJcblxyXG4gICAgb25FbnRlckNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IGFycmF5ID0gdGhpcy52YWx1ZS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgICAgIHRoaXMub25FbnRlci5lbWl0KGFycmF5KTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==