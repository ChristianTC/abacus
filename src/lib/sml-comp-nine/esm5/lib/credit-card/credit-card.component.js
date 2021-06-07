import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var CreditCardComponent = /** @class */ (function () {
    function CreditCardComponent() {
        this.onSubmit = new EventEmitter();
    }
    CreditCardComponent.prototype.ngOnInit = function () { };
    CreditCardComponent.prototype.processPayment = function (event) { this.onSubmit.emit(event); };
    __decorate([
        Output()
    ], CreditCardComponent.prototype, "onSubmit", void 0);
    CreditCardComponent = __decorate([
        Component({
            selector: 'sml-credit-card',
            template: "\n  <div class=\"w-100\">\n    <ng-payment-card (formSaved)=\"processPayment($event)\"></ng-payment-card>\n  </div>\n  ",
            styles: ["\n  :host /deep/ ng-payment-card .cc-wrapper .cc-box{margin-top: 90px !important;}\n  .w-100{width: 100%;}\n  "]
        })
    ], CreditCardComponent);
    return CreditCardComponent;
}());
export { CreditCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFjL0U7SUFJRTtRQUZVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFFakIsc0NBQVEsR0FBUixjQUFZLENBQUM7SUFFYiw0Q0FBYyxHQUFkLFVBQWUsS0FBSyxJQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztJQU52QztRQUFULE1BQU0sRUFBRTt5REFBK0I7SUFGN0IsbUJBQW1CO1FBWi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLHlIQUlUO3FCQUNRLGdIQUdSO1NBQ0YsQ0FBQztPQUNXLG1CQUFtQixDQVUvQjtJQUFELDBCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtY3JlZGl0LWNhcmQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICA8bmctcGF5bWVudC1jYXJkIChmb3JtU2F2ZWQpPVwicHJvY2Vzc1BheW1lbnQoJGV2ZW50KVwiPjwvbmctcGF5bWVudC1jYXJkPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIDpob3N0IC9kZWVwLyBuZy1wYXltZW50LWNhcmQgLmNjLXdyYXBwZXIgLmNjLWJveHttYXJnaW4tdG9wOiA5MHB4ICFpbXBvcnRhbnQ7fVxyXG4gIC53LTEwMHt3aWR0aDogMTAwJTt9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBAT3V0cHV0KCkgb25TdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgcHJvY2Vzc1BheW1lbnQoZXZlbnQpe3RoaXMub25TdWJtaXQuZW1pdChldmVudCk7fVxyXG5cclxufVxyXG4iXX0=