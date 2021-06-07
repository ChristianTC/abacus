import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './menu/submenu/submenu.component';
import { ProfileMenuComponent } from './menu/profile-menu/profile-menu.component';
import { ProfileSubMenuComponent } from './menu/profile-menu/profile-submenu/profile-submenu.component';
let NavbarModule = class NavbarModule {
};
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
export { NavbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBdUJ4RyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUksQ0FBQTtBQUFoQixZQUFZO0lBckJ4QixRQUFRLENBQUM7UUFDVCxZQUFZLEVBQUU7WUFDYixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsdUJBQXVCO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsWUFBWTtZQUNaLFlBQVk7U0FDWjtRQUNELE9BQU8sRUFBRTtZQUNSLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLG9CQUFvQjtZQUNwQix1QkFBdUI7U0FDdkI7S0FDRCxDQUFDO0dBRVcsWUFBWSxDQUFJO1NBQWhCLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3VibWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9zdWJtZW51L3N1Ym1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZmlsZU1lbnVDb21wb25lbnQgfSBmcm9tICcuL21lbnUvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9maWxlU3ViTWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS9wcm9maWxlLW1lbnUvcHJvZmlsZS1zdWJtZW51L3Byb2ZpbGUtc3VibWVudS5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdE5hdmJhckNvbXBvbmVudCxcclxuXHRcdFN1Ym1lbnVDb21wb25lbnQsXHJcblx0XHRNZW51Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZU1lbnVDb21wb25lbnQsXHJcblx0XHRQcm9maWxlU3ViTWVudUNvbXBvbmVudFxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Um91dGVyTW9kdWxlXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHROYXZiYXJDb21wb25lbnQsXHJcblx0XHRTdWJtZW51Q29tcG9uZW50LFxyXG5cdFx0TWVudUNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVNZW51Q29tcG9uZW50LFxyXG5cdFx0UHJvZmlsZVN1Yk1lbnVDb21wb25lbnQsXHJcblx0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmJhck1vZHVsZSB7IH0iXX0=