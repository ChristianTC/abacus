import { __decorate } from "tslib";
import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
let ButtonComponent = class ButtonComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.buttonClick = new EventEmitter;
    }
    ngOnInit() {
    }
    ngOnChanges(event) {
        if (event.buttonStyle != undefined && event.buttonStyle.currentValue != undefined) {
            let css = event.buttonStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--focus-color', css['focus-color']);
            this.elementRef.nativeElement.style.setProperty('--focus-spread', css['focus-spread']);
            this.elementRef.nativeElement.style.setProperty('--focus-blur', css['focus-blur']);
            this.elementRef.nativeElement.style.setProperty('--focus-x', css['focus-x']);
            this.elementRef.nativeElement.style.setProperty('--focus-y', css['focus-y']);
        }
    }
    clickEvent() {
        this.buttonClick.emit();
    }
};
ButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Input()
], ButtonComponent.prototype, "icon", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "label", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "btnCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "iconCl", void 0);
__decorate([
    Input()
], ButtonComponent.prototype, "buttonStyle", void 0);
__decorate([
    Output()
], ButtonComponent.prototype, "buttonClick", void 0);
ButtonComponent = __decorate([
    Component({
        selector: 'sml-button',
        template: `
  <button type="button" class="btn" [ngClass]="btnCl" [ngStyle]="buttonStyle" (click)="clickEvent()">
  <i *ngIf="icon" class="fas" [ngClass]="iconCl"></i>
  <span *ngIf="!icon">{{label}}</span>
  </button>
  `,
        styles: [`
  /* css variable */
  :host {
          --focus-color: #82B056;
      --focus-spread: 0px;
      --focus-blur: 0px;
      --focus-x: 0px;
      --focus-y: 0px;
  }
  
  .btn.btn-sm{
      width: 90% !important;
      padding: 8px 20px !important;
      font-size: 14px; margin: 0 5px;
  }
  .btn:focus {
      outline: 0;
      box-shadow: var(--focus-x) var(--focus-y) var(--focus-blur) var(--focus-spread) var(--focus-color) !important;
  }
  `]
    })
], ButtonComponent);
export { ButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFpQ3RHLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFRMUIsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUZoQyxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO0lBR3pDLENBQUM7SUFDRCxRQUFRO0lBQ1IsQ0FBQztJQUNELFdBQVcsQ0FBQyxLQUFLO1FBQ2YsSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksSUFBSSxTQUFTLEVBQUU7WUFDakYsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTs7WUFqQmlDLFVBQVU7O0FBUGpDO0lBQVIsS0FBSyxFQUFFOzZDQUFXO0FBQ1Y7SUFBUixLQUFLLEVBQUU7OENBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTs4Q0FBWTtBQUNYO0lBQVIsS0FBSyxFQUFFOytDQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7b0RBQWtCO0FBQ2hCO0lBQVQsTUFBTSxFQUFFO29EQUFnQztBQU45QixlQUFlO0lBN0IzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7O0dBS1Q7aUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQXlCM0I7U0F6QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiIFtuZ0NsYXNzXT1cImJ0bkNsXCIgW25nU3R5bGVdPVwiYnV0dG9uU3R5bGVcIiAoY2xpY2spPVwiY2xpY2tFdmVudCgpXCI+XHJcbiAgPGkgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJmYXNcIiBbbmdDbGFzc109XCJpY29uQ2xcIj48L2k+XHJcbiAgPHNwYW4gKm5nSWY9XCIhaWNvblwiPnt7bGFiZWx9fTwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAvKiBjc3MgdmFyaWFibGUgKi9cclxuICA6aG9zdCB7XHJcbiAgICAgICAgICAtLWZvY3VzLWNvbG9yOiAjODJCMDU2O1xyXG4gICAgICAtLWZvY3VzLXNwcmVhZDogMHB4O1xyXG4gICAgICAtLWZvY3VzLWJsdXI6IDBweDtcclxuICAgICAgLS1mb2N1cy14OiAwcHg7XHJcbiAgICAgIC0tZm9jdXMteTogMHB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLmJ0bi1zbXtcclxuICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7IG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIC5idG46Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1mb2N1cy14KSB2YXIoLS1mb2N1cy15KSB2YXIoLS1mb2N1cy1ibHVyKSB2YXIoLS1mb2N1cy1zcHJlYWQpIHZhcigtLWZvY3VzLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaWNvbjogYW55O1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBhbnk7XHJcbiAgQElucHV0KCkgYnRuQ2w6IGFueTtcclxuICBASW5wdXQoKSBpY29uQ2w6IGFueTtcclxuICBASW5wdXQoKSBidXR0b25TdHlsZTogYW55O1xyXG4gIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5idXR0b25TdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuYnV0dG9uU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBsZXQgY3NzID0gZXZlbnQuYnV0dG9uU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb2N1cy1jb2xvcicsIGNzc1snZm9jdXMtY29sb3InXSk7XHJcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWZvY3VzLXNwcmVhZCcsIGNzc1snZm9jdXMtc3ByZWFkJ10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb2N1cy1ibHVyJywgY3NzWydmb2N1cy1ibHVyJ10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb2N1cy14JywgY3NzWydmb2N1cy14J10pO1xyXG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mb2N1cy15JywgY3NzWydmb2N1cy15J10pO1xyXG4gICAgfVxyXG4gIH1cclxuICBjbGlja0V2ZW50KCkge1xyXG4gICAgdGhpcy5idXR0b25DbGljay5lbWl0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==