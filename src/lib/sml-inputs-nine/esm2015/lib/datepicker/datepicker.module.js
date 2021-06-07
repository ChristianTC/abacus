import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMaskModule } from 'ngx-mask';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
let DatepickerModule = class DatepickerModule {
};
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
export { DatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvZGF0ZXBpY2tlci9kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBZ0I5RSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBZDVCLFFBQVEsQ0FBQztRQUNULFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRTtZQUNSLFlBQVk7WUFDWixTQUFTO1lBQ1QsV0FBVztZQUNYLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtTQUMzQjtRQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBRTlCLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEYXRlcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcclxuaW1wb3J0IHsgTmd4TWFza01vZHVsZSB9IGZyb20gJ25neC1tYXNrJ1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbRGF0ZXBpY2tlckNvbXBvbmVudF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0TmdiTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHROZ3hNYXNrTW9kdWxlLFxyXG5cdFx0T3dsRGF0ZVRpbWVNb2R1bGUsXHJcblx0XHRPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSxcclxuXHRcdE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW0RhdGVwaWNrZXJDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vZHVsZSB7IH0iXX0=