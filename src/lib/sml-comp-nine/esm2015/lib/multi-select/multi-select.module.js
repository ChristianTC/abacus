import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
let MultiSelectModule = class MultiSelectModule {
};
MultiSelectModule = __decorate([
    NgModule({
        declarations: [MultiSelectComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            NgSelectModule
        ],
        exports: [MultiSelectComponent]
    })
], MultiSelectModule);
export { MultiSelectModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFhdEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7Q0FBSSxDQUFBO0FBQXJCLGlCQUFpQjtJQVg3QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLGdCQUFnQjtZQUNoQixjQUFjO1NBQ2Y7UUFDRCxPQUFPLEVBQUMsQ0FBQyxvQkFBb0IsQ0FBQztLQUUvQixDQUFDO0dBQ1csaUJBQWlCLENBQUk7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTXVsdGlTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL211bHRpLXNlbGVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW011bHRpU2VsZWN0Q29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICBOZ1NlbGVjdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czpbTXVsdGlTZWxlY3RDb21wb25lbnRdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3RNb2R1bGUgeyB9Il19