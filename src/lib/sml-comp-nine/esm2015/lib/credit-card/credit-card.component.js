import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
let CreditCardComponent = class CreditCardComponent {
    constructor() {
        this.onSubmit = new EventEmitter();
    }
    ngOnInit() { }
    processPayment(event) { this.onSubmit.emit(event); }
};
__decorate([
    Output()
], CreditCardComponent.prototype, "onSubmit", void 0);
CreditCardComponent = __decorate([
    Component({
        selector: 'sml-credit-card',
        template: `
  <div class="w-100">
    <ng-payment-card (formSaved)="processPayment($event)"></ng-payment-card>
  </div>
  `,
        styles: [`
  :host /deep/ ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}
  .w-100{width: 100%;}
  `]
    })
], CreditCardComponent);
export { CreditCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjL0UsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUI7UUFGVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBRWpCLFFBQVEsS0FBSSxDQUFDO0lBRWIsY0FBYyxDQUFDLEtBQUssSUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7Q0FFbEQsQ0FBQTtBQVJXO0lBQVQsTUFBTSxFQUFFO3FEQUErQjtBQUY3QixtQkFBbUI7SUFaL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7R0FJVDtpQkFDUTs7O0dBR1I7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBVS9CO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtY3JlZGl0LWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICA8bmctcGF5bWVudC1jYXJkIChmb3JtU2F2ZWQpPVwicHJvY2Vzc1BheW1lbnQoJGV2ZW50KVwiPjwvbmctcGF5bWVudC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIDpob3N0IC9kZWVwLyBuZy1wYXltZW50LWNhcmQgLmNjLXdyYXBwZXIgLmNjLWJveHttYXJnaW4tdG9wOiA5MHB4ICFpbXBvcnRhbnQ7fVxyXG4gIC53LTEwMHt3aWR0aDogMTAwJTt9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgcHJvY2Vzc1BheW1lbnQoZXZlbnQpe3RoaXMub25TdWJtaXQuZW1pdChldmVudCk7fVxyXG5cclxufVxyXG4iXX0=