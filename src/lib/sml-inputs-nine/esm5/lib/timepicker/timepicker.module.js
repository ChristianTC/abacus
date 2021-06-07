import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatetimepickerComponent } from './timepicker.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
var TimepickerModule = /** @class */ (function () {
    function TimepickerModule() {
    }
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
    return TimepickerModule;
}());
export { TimepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtaW5wdXRzLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWM5RTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBWjVCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ25CLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLDJCQUEyQjthQUM1QjtZQUNELE9BQU8sRUFBQyxDQUFDLHVCQUF1QixDQUFDO1NBQ2xDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7U0FBcEIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGF0ZXRpbWVwaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBPd2xEYXRlVGltZU1vZHVsZSwgT3dsTmF0aXZlRGF0ZVRpbWVNb2R1bGUgfSBmcm9tICduZy1waWNrLWRhdGV0aW1lJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRGF0ZXRpbWVwaWNrZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE5nYk1vZHVsZS5mb3JSb290KCksXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE93bERhdGVUaW1lTW9kdWxlLCBcclxuICAgIE93bE5hdGl2ZURhdGVUaW1lTW9kdWxlLFxyXG4gICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOltEYXRldGltZXBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJNb2R1bGUgeyB9Il19