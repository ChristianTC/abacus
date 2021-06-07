import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMaskModule } from 'ngx-mask';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    DatepickerModule = __decorate([
        NgModule({
            declarations: [DatepickerComponent],
            imports: [
                CommonModule,
                NgbModule,
                FormsModule,
                NgxMaskModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
                NgxMaterialTimepickerModule
            ],
            exports: [DatepickerComponent]
        })
    ], DatepickerModule);
    return DatepickerModule;
}());
export { DatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0I5RTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBZDVCLFFBQVEsQ0FBQztZQUNULFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ25DLE9BQU8sRUFBRTtnQkFDUixZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsV0FBVztnQkFDWCxhQUFhO2dCQUNiLGlCQUFpQjtnQkFDakIsdUJBQXVCO2dCQUN2QiwyQkFBMkI7YUFDM0I7WUFDRCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUU5QixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO1NBQXBCLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERhdGVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXInO1xyXG5pbXBvcnQgeyBOZ3hNYXNrTW9kdWxlIH0gZnJvbSAnbmd4LW1hc2snXHJcbmltcG9ydCB7IE93bERhdGVUaW1lTW9kdWxlLCBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtEYXRlcGlja2VyQ29tcG9uZW50XSxcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHROZ2JNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdE5neE1hc2tNb2R1bGUsXHJcblx0XHRPd2xEYXRlVGltZU1vZHVsZSxcclxuXHRcdE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlLFxyXG5cdFx0Tmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbRGF0ZXBpY2tlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTW9kdWxlIHsgfSJdfQ==