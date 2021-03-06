import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './table.component';
import { ColumnComponent } from './column/column.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './footer/pagination/pagination.component';
import { TableBodyComponent } from './body/body.component';
import { SearchComponent } from './header/search/search.component';
import { CountComponent } from './header/count/count.component';
let TableModule = class TableModule {
};
TableModule = __decorate([
    NgModule({
        declarations: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent],
        imports: [
            CommonModule,
            FormsModule,
            NgSelectModule
        ],
        exports: [TableComponent, ColumnComponent, HeaderComponent, FooterComponent, PaginationComponent, TableBodyComponent, SearchComponent, CountComponent]
    })
], TableModule);
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFhaEUsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFJLENBQUE7QUFBZixXQUFXO0lBVnZCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO1FBQzNKLE9BQU8sRUFBRTtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7S0FDdkosQ0FBQztHQUVXLFdBQVcsQ0FBSTtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdTZWxlY3RNb2R1bGUgfSBmcm9tICdAbmctc2VsZWN0L25nLXNlbGVjdCc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb2x1bW5Db21wb25lbnQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlQm9keUNvbXBvbmVudCB9IGZyb20gJy4vYm9keS9ib2R5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291bnRDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci9jb3VudC9jb3VudC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnQsIENvbHVtbkNvbXBvbmVudCwgSGVhZGVyQ29tcG9uZW50LCBGb290ZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnQsIFRhYmxlQm9keUNvbXBvbmVudCwgU2VhcmNoQ29tcG9uZW50LCBDb3VudENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBOZ1NlbGVjdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1RhYmxlQ29tcG9uZW50LCBDb2x1bW5Db21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgRm9vdGVyQ29tcG9uZW50LCBQYWdpbmF0aW9uQ29tcG9uZW50LCBUYWJsZUJvZHlDb21wb25lbnQsIFNlYXJjaENvbXBvbmVudCwgQ291bnRDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9Il19