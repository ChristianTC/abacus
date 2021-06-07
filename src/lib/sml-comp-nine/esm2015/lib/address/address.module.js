import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddressComponent } from './address.component';
import { ButtonModule } from './../button/button.module';
import { AgmCoreModule } from '@agm/core';
import { TextModule, SelectModule } from 'sml-inputs-nine';
let AddressModule = class AddressModule {
};
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
export { AddressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2FkZHJlc3MvYWRkcmVzcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQW1CM0QsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtDQUFJLENBQUE7QUFBakIsYUFBYTtJQWpCekIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7UUFDaEMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2QsWUFBWTtZQUNaLFVBQVU7WUFDVixZQUFZO1lBQ1osYUFBYSxDQUFDLE9BQU8sQ0FBQztnQkFDcEIsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3RCLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FFVyxhQUFhLENBQUk7U0FBakIsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ1NlbGVjdE1vZHVsZSB9IGZyb20gJ0BuZy1zZWxlY3Qvbmctc2VsZWN0JztcclxuaW1wb3J0IHsgQWRkcmVzc0NvbXBvbmVudCB9IGZyb20gJy4vYWRkcmVzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuLy4uL2J1dHRvbi9idXR0b24ubW9kdWxlJztcclxuaW1wb3J0IHsgQWdtQ29yZU1vZHVsZSB9IGZyb20gJ0BhZ20vY29yZSc7XHJcbmltcG9ydCB7IFRleHRNb2R1bGUsIFNlbGVjdE1vZHVsZSB9IGZyb20gJ3NtbC1pbnB1dHMtbmluZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FkZHJlc3NDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTmdTZWxlY3RNb2R1bGUsXHJcbiAgICBCdXR0b25Nb2R1bGUsXHJcbiAgICBUZXh0TW9kdWxlLFxyXG4gICAgU2VsZWN0TW9kdWxlLFxyXG4gICAgQWdtQ29yZU1vZHVsZS5mb3JSb290KHtcclxuICAgICAgYXBpS2V5OiBcIkFJemFTeUFxT0o5MDdndDF3TzdkOTZnQlkzclhoWHBLLWdpNG9Qd1wiLFxyXG4gICAgICBsaWJyYXJpZXM6IFtcInBsYWNlc1wiXVxyXG4gICAgfSksXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQWRkcmVzc0NvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRyZXNzTW9kdWxlIHsgfSJdfQ==