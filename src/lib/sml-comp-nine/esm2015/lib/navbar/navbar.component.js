import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.iswelcome = 'false';
        this.navStyle = {
            logo: '/assets/logo.png'
        };
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], NavbarComponent.prototype, "iswelcome", void 0);
__decorate([
    Input()
], NavbarComponent.prototype, "navStyle", void 0);
NavbarComponent = __decorate([
    Component({
        selector: 'sml-navbar',
        template: `
  <nav class="navbar navbar-expand-sm customNavbar position-relative"  [ngStyle]="navStyle">
  <a class="nav-link" routerLink="/dashboard">
    <img src="{{navStyle?.logo ? navStyle?.logo : '/assets/logo.png'}}" height="20" width="40"  alt="" class="logo">
  </a>
  <button class="navbar-toggler">
    <span class="navbar-toggler-icon"></span>
  </button>
  <ng-content select="sml-navbar-menu"></ng-content>  
  <li class="positionRight nav-item dropdown profileUser" *ngIf="iswelcome == 'true'">
    <ng-content  select="sml-navbar-menu-profilemenu"></ng-content>
  </li>
</nav>
  `,
        styles: [`
  .positionRight{position: absolute; right:10px; list-style: none}
.customNavbar { background-color: #2d353c; }
.navbar{padding: 2px 1rem !important}
.nav-link { color: #ffffff; }
.logo { width: 40px }
  `]
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQTBCL0UsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQVExQjtRQUxTLGNBQVMsR0FBUSxPQUFPLENBQUM7UUFDekIsYUFBUSxHQUFRO1lBQ3ZCLElBQUksRUFBRSxrQkFBa0I7U0FDekIsQ0FBQztJQUdGLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztDQUNGLENBQUE7QUFWVTtJQUFSLEtBQUssRUFBRTtrREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7aURBRU47QUFOUyxlQUFlO0lBeEIzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtpQkFDUTs7Ozs7O0dBTVI7S0FDRixDQUFDO0dBQ1csZUFBZSxDQWEzQjtTQWJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC1uYXZiYXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIGN1c3RvbU5hdmJhciBwb3NpdGlvbi1yZWxhdGl2ZVwiICBbbmdTdHlsZV09XCJuYXZTdHlsZVwiPlxyXG4gIDxhIGNsYXNzPVwibmF2LWxpbmtcIiByb3V0ZXJMaW5rPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgPGltZyBzcmM9XCJ7e25hdlN0eWxlPy5sb2dvID8gbmF2U3R5bGU/LmxvZ28gOiAnL2Fzc2V0cy9sb2dvLnBuZyd9fVwiIGhlaWdodD1cIjIwXCIgd2lkdGg9XCI0MFwiICBhbHQ9XCJcIiBjbGFzcz1cImxvZ29cIj5cclxuICA8L2E+XHJcbiAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgPC9idXR0b24+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic21sLW5hdmJhci1tZW51XCI+PC9uZy1jb250ZW50PiAgXHJcbiAgPGxpIGNsYXNzPVwicG9zaXRpb25SaWdodCBuYXYtaXRlbSBkcm9wZG93biBwcm9maWxlVXNlclwiICpuZ0lmPVwiaXN3ZWxjb21lID09ICd0cnVlJ1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgIHNlbGVjdD1cInNtbC1uYXZiYXItbWVudS1wcm9maWxlbWVudVwiPjwvbmctY29udGVudD5cclxuICA8L2xpPlxyXG48L25hdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAucG9zaXRpb25SaWdodHtwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OjEwcHg7IGxpc3Qtc3R5bGU6IG5vbmV9XHJcbi5jdXN0b21OYXZiYXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNTNjOyB9XHJcbi5uYXZiYXJ7cGFkZGluZzogMnB4IDFyZW0gIWltcG9ydGFudH1cclxuLm5hdi1saW5rIHsgY29sb3I6ICNmZmZmZmY7IH1cclxuLmxvZ28geyB3aWR0aDogNDBweCB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIFxyXG4gIEBJbnB1dCgpIGlzd2VsY29tZTogYW55ID0gJ2ZhbHNlJztcclxuICBASW5wdXQoKSBuYXZTdHlsZTogYW55ID0ge1xyXG4gICAgbG9nbzogJy9hc3NldHMvbG9nby5wbmcnXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcbn1cclxuIl19