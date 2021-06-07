import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaterangepickerComponent } from './daterangepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
var DaterangepickerModule = /** @class */ (function () {
    function DaterangepickerModule() {
    }
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
    return DaterangepickerModule;
}());
export { DaterangepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1pbnB1dHMtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWU5RTtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBYmpDLFFBQVEsQ0FBQztZQUNULFlBQVksRUFBRSxDQUFDLHdCQUF3QixDQUFDO1lBQ3hDLE9BQU8sRUFBRTtnQkFDUixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxpQkFBaUI7Z0JBQ2pCLHVCQUF1QjtnQkFDdkIsMkJBQTJCO2FBQzNCO1lBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FFbkMsQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQSxBQUF0QyxJQUFzQztTQUF6QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lTW9kdWxlLCBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnRdLFxyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdE5nYk1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0T3dsRGF0ZVRpbWVNb2R1bGUsXHJcblx0XHRPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSxcclxuXHRcdE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtEYXRlcmFuZ2VwaWNrZXJDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXJhbmdlcGlja2VyTW9kdWxlIHsgfSJdfQ==