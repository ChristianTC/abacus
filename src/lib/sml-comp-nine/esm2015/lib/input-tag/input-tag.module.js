import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTagComponent } from './input-tag.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TagInputModule } from 'ngx-chips';
let InputTagModule = class InputTagModule {
};
InputTagModule = __decorate([
    NgModule({
        declarations: [InputTagComponent],
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            TagInputModule
        ],
        exports: [InputTagComponent]
    })
], InputTagModule);
export { InputTagModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtdGFnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvaW5wdXQtdGFnL2lucHV0LXRhZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBYTNDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBSSxDQUFBO0FBQWxCLGNBQWM7SUFYMUIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7UUFDakMsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFDLENBQUMsaUJBQWlCLENBQUM7S0FFNUIsQ0FBQztHQUNXLGNBQWMsQ0FBSTtTQUFsQixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSW5wdXRUYWdDb21wb25lbnQgfSBmcm9tICcuL2lucHV0LXRhZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVGFnSW5wdXRNb2R1bGUgfSBmcm9tICduZ3gtY2hpcHMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtJbnB1dFRhZ0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgVGFnSW5wdXRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6W0lucHV0VGFnQ29tcG9uZW50XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0VGFnTW9kdWxlIHsgfSJdfQ==