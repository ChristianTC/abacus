import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
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
    return AlertModule;
}());
export { AlertModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC9hbGVydC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVdqRTtJQUFBO0lBQTJCLENBQUM7SUFBZixXQUFXO1FBVHZCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUM5QixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7YUFDNUI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDMUIsQ0FBQztPQUVXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWxlcnRDb21wb25lbnQgfSBmcm9tICcuL2FsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN3ZWV0QWxlcnQyTW9kdWxlIH0gZnJvbSAnQHN3ZWV0YWxlcnQyL25neC1zd2VldGFsZXJ0Mic7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FsZXJ0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBTd2VldEFsZXJ0Mk1vZHVsZS5mb3JSb290KCksXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQWxlcnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWxlcnRNb2R1bGUgeyB9Il19