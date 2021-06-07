import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
let AlertModule = class AlertModule {
};
AlertModule = __decorate([
    NgModule({
        declarations: [AlertComponent],
        imports: [
            CommonModule,
            SweetAlert2Module.forRoot(),
        ],
        exports: [AlertComponent]
    })
], AlertModule);
export { AlertModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC9hbGVydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVdqRSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUksQ0FBQTtBQUFmLFdBQVc7SUFUdkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7U0FDNUI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDMUIsQ0FBQztHQUVXLFdBQVcsQ0FBSTtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBBbGVydENvbXBvbmVudCB9IGZyb20gJy4vYWxlcnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3dlZXRBbGVydDJNb2R1bGUgfSBmcm9tICdAc3dlZXRhbGVydDIvbmd4LXN3ZWV0YWxlcnQyJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQWxlcnRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFN3ZWV0QWxlcnQyTW9kdWxlLmZvclJvb3QoKSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtBbGVydENvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBbGVydE1vZHVsZSB7IH0iXX0=