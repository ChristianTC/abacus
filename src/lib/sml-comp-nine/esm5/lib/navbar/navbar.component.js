import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.iswelcome = 'false';
        this.navStyle = {
            logo: '/assets/logo.png'
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
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
            template: "\n  <nav class=\"navbar navbar-expand-sm customNavbar position-relative\"  [ngStyle]=\"navStyle\">\n  <a class=\"nav-link\" routerLink=\"/dashboard\">\n    <img src=\"{{navStyle?.logo ? navStyle?.logo : '/assets/logo.png'}}\" height=\"20\" width=\"40\"  alt=\"\" class=\"logo\">\n  </a>\n  <button class=\"navbar-toggler\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <ng-content select=\"sml-navbar-menu\"></ng-content>  \n  <li class=\"positionRight nav-item dropdown profileUser\" *ngIf=\"iswelcome == 'true'\">\n    <ng-content  select=\"sml-navbar-menu-profilemenu\"></ng-content>\n  </li>\n</nav>\n  ",
            styles: ["\n  .positionRight{position: absolute; right:10px; list-style: none}\n.customNavbar { background-color: #2d353c; }\n.navbar{padding: 2px 1rem !important}\n.nav-link { color: #ffffff; }\n.logo { width: 40px }\n  "]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF3QixNQUFNLGVBQWUsQ0FBQztBQTBCL0U7SUFRRTtRQUxTLGNBQVMsR0FBUSxPQUFPLENBQUM7UUFDekIsYUFBUSxHQUFRO1lBQ3ZCLElBQUksRUFBRSxrQkFBa0I7U0FDekIsQ0FBQztJQUdGLENBQUM7SUFFRCxrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQVRRO1FBQVIsS0FBSyxFQUFFO3NEQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTtxREFFTjtJQU5TLGVBQWU7UUF4QjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxxbkJBYVQ7cUJBQ1EscU5BTVI7U0FDRixDQUFDO09BQ1csZUFBZSxDQWEzQjtJQUFELHNCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLW5hdmJhcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gY3VzdG9tTmF2YmFyIHBvc2l0aW9uLXJlbGF0aXZlXCIgIFtuZ1N0eWxlXT1cIm5hdlN0eWxlXCI+XHJcbiAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIHJvdXRlckxpbms9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cInt7bmF2U3R5bGU/LmxvZ28gPyBuYXZTdHlsZT8ubG9nbyA6ICcvYXNzZXRzL2xvZ28ucG5nJ319XCIgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjQwXCIgIGFsdD1cIlwiIGNsYXNzPVwibG9nb1wiPlxyXG4gIDwvYT5cclxuICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8bmctY29udGVudCBzZWxlY3Q9XCJzbWwtbmF2YmFyLW1lbnVcIj48L25nLWNvbnRlbnQ+ICBcclxuICA8bGkgY2xhc3M9XCJwb3NpdGlvblJpZ2h0IG5hdi1pdGVtIGRyb3Bkb3duIHByb2ZpbGVVc2VyXCIgKm5nSWY9XCJpc3dlbGNvbWUgPT0gJ3RydWUnXCI+XHJcbiAgICA8bmctY29udGVudCAgc2VsZWN0PVwic21sLW5hdmJhci1tZW51LXByb2ZpbGVtZW51XCI+PC9uZy1jb250ZW50PlxyXG4gIDwvbGk+XHJcbjwvbmF2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5wb3NpdGlvblJpZ2h0e3Bvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6MTBweDsgbGlzdC1zdHlsZTogbm9uZX1cclxuLmN1c3RvbU5hdmJhciB7IGJhY2tncm91bmQtY29sb3I6ICMyZDM1M2M7IH1cclxuLm5hdmJhcntwYWRkaW5nOiAycHggMXJlbSAhaW1wb3J0YW50fVxyXG4ubmF2LWxpbmsgeyBjb2xvcjogI2ZmZmZmZjsgfVxyXG4ubG9nbyB7IHdpZHRoOiA0MHB4IH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgXHJcbiAgQElucHV0KCkgaXN3ZWxjb21lOiBhbnkgPSAnZmFsc2UnO1xyXG4gIEBJbnB1dCgpIG5hdlN0eWxlOiBhbnkgPSB7XHJcbiAgICBsb2dvOiAnL2Fzc2V0cy9sb2dvLnBuZydcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxufVxyXG4iXX0=