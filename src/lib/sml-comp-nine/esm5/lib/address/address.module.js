import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddressComponent } from './address.component';
import { ButtonModule } from './../button/button.module';
import { AgmCoreModule } from '@agm/core';
import { TextModule, SelectModule } from 'sml-inputs-nine';
var AddressModule = /** @class */ (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        NgModule({
            declarations: [AddressComponent],
            imports: [
                CommonModule,
                FormsModule,
                NgSelectModule,
                ButtonModule,
                TextModule,
                SelectModule,
                AgmCoreModule.forRoot({
                    apiKey: "AIzaSyAqOJ907gt1wO7d96gBY3rXhXpK-gi4oPw",
                    libraries: ["places"]
                }),
            ],
            exports: [AddressComponent]
        })
    ], AddressModule);
    return AddressModule;
}());
export { AddressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2FkZHJlc3MvYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQW1CM0Q7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFqQnpCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsWUFBWTtnQkFDWixhQUFhLENBQUMsT0FBTyxDQUFDO29CQUNwQixNQUFNLEVBQUUseUNBQXlDO29CQUNqRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7aUJBQ3RCLENBQUM7YUFDSDtZQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzVCLENBQUM7T0FFVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO1NBQWpCLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcbmltcG9ydCB7IEFkZHJlc3NDb21wb25lbnQgfSBmcm9tICcuL2FkZHJlc3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9idXR0b24vYnV0dG9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFnbUNvcmVNb2R1bGUgfSBmcm9tICdAYWdtL2NvcmUnO1xyXG5pbXBvcnQgeyBUZXh0TW9kdWxlLCBTZWxlY3RNb2R1bGUgfSBmcm9tICdzbWwtaW5wdXRzLW5pbmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtBZGRyZXNzQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE5nU2VsZWN0TW9kdWxlLFxyXG4gICAgQnV0dG9uTW9kdWxlLFxyXG4gICAgVGV4dE1vZHVsZSxcclxuICAgIFNlbGVjdE1vZHVsZSxcclxuICAgIEFnbUNvcmVNb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgIGFwaUtleTogXCJBSXphU3lBcU9KOTA3Z3Qxd083ZDk2Z0JZM3JYaFhwSy1naTRvUHdcIixcclxuICAgICAgbGlicmFyaWVzOiBbXCJwbGFjZXNcIl1cclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0FkZHJlc3NDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc01vZHVsZSB7IH0iXX0=