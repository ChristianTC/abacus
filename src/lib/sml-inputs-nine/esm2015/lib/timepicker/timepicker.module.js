import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerComponent } from './timepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
let TimepickerModule = class TimepickerModule {
};
TimepickerModule = __decorate([
    NgModule({
        declarations: [DatetimepickerComponent],
        imports: [
            CommonModule,
            NgbModule.forRoot(),
            FormsModule,
            OwlDateTimeModule,
            OwlNativeDateTimeModule,
            NgxMaterialTimepickerModule
        ],
        exports: [DatetimepickerComponent]
    })
], TimepickerModule);
export { TimepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWM5RSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBWjVCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZDLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixTQUFTLENBQUMsT0FBTyxFQUFFO1lBQ25CLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtTQUM1QjtRQUNELE9BQU8sRUFBQyxDQUFDLHVCQUF1QixDQUFDO0tBQ2xDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEYXRldGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGV9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IE93bERhdGVUaW1lTW9kdWxlLCBPd2xOYXRpdmVEYXRlVGltZU1vZHVsZSB9IGZyb20gJ25nLXBpY2stZGF0ZXRpbWUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtEYXRldGltZXBpY2tlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgTmdiTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgT3dsRGF0ZVRpbWVNb2R1bGUsIFxyXG4gICAgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUsXHJcbiAgICBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6W0RhdGV0aW1lcGlja2VyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlck1vZHVsZSB7IH0iXX0=