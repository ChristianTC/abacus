import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './menu/submenu/submenu.component';
import { ProfileMenuComponent } from './menu/profile-menu/profile-menu.component';
import { ProfileSubMenuComponent } from './menu/profile-menu/profile-submenu/profile-submenu.component';
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        NgModule({
            declarations: [
                NavbarComponent,
                SubmenuComponent,
                MenuComponent,
                ProfileMenuComponent,
                ProfileSubMenuComponent
            ],
            imports: [
                CommonModule,
                RouterModule
            ],
            exports: [
                NavbarComponent,
                SubmenuComponent,
                MenuComponent,
                ProfileMenuComponent,
                ProfileSubMenuComponent,
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());
export { NavbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBdUJ4RztJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXJCeEIsUUFBUSxDQUFDO1lBQ1QsWUFBWSxFQUFFO2dCQUNiLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLG9CQUFvQjtnQkFDcEIsdUJBQXVCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLFlBQVk7Z0JBQ1osWUFBWTthQUNaO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLG9CQUFvQjtnQkFDcEIsdUJBQXVCO2FBQ3ZCO1NBQ0QsQ0FBQztPQUVXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJtZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L3N1Ym1lbnUvc3VibWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9maWxlTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9wcm9maWxlLW1lbnUvcHJvZmlsZS1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2ZpbGVTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L3Byb2ZpbGUtbWVudS9wcm9maWxlLXN1Ym1lbnUvcHJvZmlsZS1zdWJtZW51LmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0TmF2YmFyQ29tcG9uZW50LFxyXG5cdFx0U3VibWVudUNvbXBvbmVudCxcclxuXHRcdE1lbnVDb21wb25lbnQsXHJcblx0XHRQcm9maWxlTWVudUNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVTdWJNZW51Q29tcG9uZW50XHJcblx0XSxcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRSb3V0ZXJNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE5hdmJhckNvbXBvbmVudCxcclxuXHRcdFN1Ym1lbnVDb21wb25lbnQsXHJcblx0XHRNZW51Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZU1lbnVDb21wb25lbnQsXHJcblx0XHRQcm9maWxlU3ViTWVudUNvbXBvbmVudCxcclxuXHRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2YmFyTW9kdWxlIHsgfSJdfQ==