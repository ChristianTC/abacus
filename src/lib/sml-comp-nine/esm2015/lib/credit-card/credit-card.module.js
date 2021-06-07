import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgPaymentCardModule } from 'ng-payment-card';
import { CreditCardComponent } from './credit-card.component';
let CreditCardModule = class CreditCardModule {
};
CreditCardModule = __decorate([
    NgModule({
        declarations: [CreditCardComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgPaymentCardModule,
            HttpClientModule
        ],
        exports: [CreditCardComponent]
    })
], CreditCardModule);
export { CreditCardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGl0LWNhcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQWE5RCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBWDVCLFFBQVEsQ0FBQztRQUNULFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRTtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGdCQUFnQjtTQUNoQjtRQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQzlCLENBQUM7R0FFVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdQYXltZW50Q2FyZE1vZHVsZSB9IGZyb20gJ25nLXBheW1lbnQtY2FyZCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NyZWRpdC1jYXJkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW0NyZWRpdENhcmRDb21wb25lbnRdLFxyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0TmdQYXltZW50Q2FyZE1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtDcmVkaXRDYXJkQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRNb2R1bGUgeyB9Il19