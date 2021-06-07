import { __decorate } from "tslib";
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
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
export { TagInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90YWctaW5wdXQvdGFnLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUIzRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQU0xQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmpDLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsU0FBSSxHQUFRLGdCQUFnQixDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLFlBQVksQ0FBQztJQUVTLENBQUM7SUFDL0MsUUFBUSxLQUFLLENBQUM7SUFDZCxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUM7SUFFdEIsWUFBWTtRQUNSLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0NBQ0osQ0FBQTs7WUFYbUMsVUFBVTs7QUFKakM7SUFBUixLQUFLLEVBQUU7Z0RBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOytDQUE4QjtBQUM1QjtJQUFULE1BQU0sRUFBRTtrREFBNEI7QUFKNUIsaUJBQWlCO0lBakI3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7S0FJVDtpQkFDUTs7Ozs7Ozs7S0FRUjtLQUNKLENBQUM7R0FDVyxpQkFBaUIsQ0FpQjdCO1NBakJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzbWwtaW5wdXQtdGFnJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cclxuICAgICAgICA8dGV4dGFyZWEgcm93PVwiM1wiICBpZD1cInt7bmFtZX19XCIgY2xhc3M9XCJjdXMtdGV4dGFyZWFcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYW5kIHByZXNzIGVudGVyXCIgbmFtZT1cInt7bmFtZX19XCIgKGtleXVwLmVudGVyKT1cIm9uRW50ZXJDbGljaygpXCIgIFsobmdNb2RlbCldPVwidmFsdWVcIiA+PC90ZXh0YXJlYT5cclxuICAgIDwvZGl2PlxyXG4gICAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdXMtdGV4dGFyZWEge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBcIlwiO1xyXG4gICAgQElucHV0KCkgbmFtZTogYW55ID0gXCJzbWwtaW5wdXQtdHlwZVwiO1xyXG4gICAgQE91dHB1dCgpIG9uRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgbmdPbkNoYW5nZXMoZXZlbnQpIHsgfVxyXG5cclxuICAgIG9uRW50ZXJDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnJheSA9IHRoaXMudmFsdWUuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRW50ZXIuZW1pdChhcnJheSk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=