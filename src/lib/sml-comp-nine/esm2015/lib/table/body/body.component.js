import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let TableBodyComponent = class TableBodyComponent {
    constructor() {
        this.data = [];
        this.dropdownButtons = [];
        this.dropdownButtonsList = false;
        this.columns = [];
        this.rowstyle = {};
        this.alignment = {};
        this.height = '';
        this.width = '';
        this.minwidth = 700;
        this.id = 'sml-datatable';
        this.isLoading = false;
        this.dropdownButtonStyle = {};
        this.actionClick = new EventEmitter;
        this.valueClick = new EventEmitter;
        this.textBoxEvent = new EventEmitter;
        this.dropdownButton = [];
    }
    ngOnInit() { }
    onResize(event) {
        let width = $('.' + this.id).width();
        // if (width > parseInt(this.minwidth)) {
        this.width = width;
        // }
    }
    trackByIndex(index) {
        return index;
    }
    trackByIndex1(index) {
        return index;
    }
    clickMethod(actionType, row) {
        let nType = {
            actionName: actionType,
            item: row
        };
        this.actionClick.emit(nType);
    }
    columnClick(row, col) {
        let nType = {
            row: row,
            column: col
        };
        if (!this.obj[col].isHtml) {
            this.valueClick.emit(nType);
        }
        if (this.obj[col].isHtml && this.obj[col].isCheckbox) {
            this.valueClick.emit(nType);
        }
    }
    textBoxMethod(row, col, type) {
        let nType = {
            row: row,
            type: type,
            column: col,
        };
        this.textBoxEvent.emit(nType);
    }
};
__decorate([
    Input()
], TableBodyComponent.prototype, "data", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtons", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonsList", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "columns", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "rowstyle", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "alignment", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "height", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "width", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "minwidth", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "obj", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "id", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], TableBodyComponent.prototype, "dropdownButtonStyle", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "actionClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "valueClick", void 0);
__decorate([
    Output()
], TableBodyComponent.prototype, "textBoxEvent", void 0);
TableBodyComponent = __decorate([
    Component({
        selector: 'sml-table-body',
        template: `
  <tr *ngFor="let row of data;let index = index; trackBy: trackByIndex1" id="tr-{{id}}-{{index}}" [style.background]="index % 2 == 0 ? rowstyle.bgEven : rowstyle.bgOdd">
  <td *ngFor="let col of columns;let cindex = index; trackBy: trackByIndex" id="td-{{id}}-{{index}}-{{cindex}}"  (click)="columnClick(row,col)"  [style.width]="obj[col].width + 'px'"  [style.max-width]="obj[col].width + 'px'"  [style.min-width]="obj[col].width + 'px'"  [style.text-align]="alignment[col].columnDefinatinAlignment" [ngClass]="{'breakWord': obj[col].isFixedWidth , 'td_over': !obj[col].isHtml , 'pointer-cursor': obj[col]?.isColumnClick ,'dis-none': !obj[col].isDisplay }"  [ngStyle]="rowstyle">
    <span *ngIf="!obj[col].isHtml" style="white-space: pre-wrap; word-break: keep-all;">{{row[col]}}</span>
    <span *ngIf="obj[col].isHtml">
      <div *ngIf="!obj[col].isCheckbox && !obj[col].isImage && !obj[col].isTextbox">
        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && !obj[col].isSingleButton">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(dropdownButtons[0].Action,row);">
                {{ dropdownButtons[0].Title }}
            </div>
            <span *ngIf="dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == false && dropdownButtons.length > 0 && obj[col].isSingleButton">
          <div class="btn-group dropdown pad-r-2" *ngFor="let button of dropdownButtons;let i=index;">
              <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                  {{ button.Title }}
              </div>
          </div>
        </div>

        <div class="btn-group dropdown" *ngIf="dropdownButtonsList == true && !obj[col].isSingleButton && row.dropdownButtons.length > 0">
            <div id="idComponent" class="DropdownButton" (click)="clickMethod(row.dropdownButtons[0].Action,row);">
                {{ row.dropdownButtons[0].Title }}
            </div>
            <span *ngIf="row.dropdownButtons.length > 1" class="caret DropdownButtonSpan dropdown-toggle" data-toggle="dropdown"></span>
            <ul *ngIf="row.dropdownButtons.length > 1" class="dropdown-menu DropdownButtonUl dropdown-menu-right" [ngStyle]="dropdownButtonStyle">
              <span *ngFor="let button of row.dropdownButtons;let i=index;" >
                <li *ngIf="i != 0" class="DropdownButtonLi" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </li>
              </span>   
            </ul>
        </div>
        <div *ngIf="dropdownButtonsList == true && obj[col].isSingleButton">
            <div class="btn-group dropdown pad-r-2" *ngFor="let button of row.dropdownButtons;let i=index;">
                <div id="idComponent" class="DropdownButton" (click)="clickMethod(button.Action,row);">
                    {{ button.Title }}
                </div>
            </div>
        </div>
      </div>
      <div *ngIf="obj[col].isCheckbox">
            <input type="checkbox" class="pointer-cursor" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
      <div *ngIf="obj[col].isImage">
          <img src="{{row[col]}}" style="width: 15px; height: 15px;" />
      </div>
      <div *ngIf="obj[col].isTextbox" style="text-align: center;">
          <input type="text" style="text-align: right;width: 80px;padding-right: 2px;"  (change)="textBoxMethod(row,col,'change')" (keydown)="textBoxMethod(row,$event,'keydown')"  (focus)="textBoxMethod(row,col,'focus')" (blur)="textBoxMethod(row,col,'blur')" name="{{index}}" id="{{index}}" [(ngModel)]="row[col]" />
      </div>
    </span>
  </td>
</tr>
<tr *ngIf="isLoading">
  <td [attr.colspan]="columns.length" [style.width]="width + 'px'"  [style.max-height]="height + 'px'" class="text-center h-auto" >
      <img src="./assets/loading.gif" width="100" />
  </td>
</tr>
  `,
        host: {
            '(window:resize)': 'onResize($event)'
        },
        styles: [`
  td {
    padding-top: 1px;
    padding-bottom: 1px;
    vertical-align: middle !important;
  }
tr:hover{
  background: #FFFF00;
}
tr:last-child > td {
	border-bottom: 0 !important;
}
.td_over{
  overflow: hidden !important;
}
.dis-none{
  display:none !important;
}
.pad-r-2{
  padding-right:2px !important;
}
.breakWord{
  word-break: break-all !important;
}
.text-center{
    text-align: center;
}
.btn:focus {
    box-shadow: none !important;
}
.pointer-cursor {
    cursor: pointer !important;
}
.DropdownButtonLi {
    padding: 5px;
    cursor: pointer;
}
.DropdownButtonLi:hover {
    background-color:#e6e6e6;
}
.DropdownButton  {
    -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
	-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f9f9f9), color-stop(1, #e9e9e9));
	background:-moz-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-webkit-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-o-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:-ms-linear-gradient(top, #f9f9f9 5%, #e9e9e9 100%);
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f9f9f9', endColorstr='#e9e9e9',GradientType=0);
	background-color:#f9f9f9;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#666666;
	font-family:Arial;
	font-size:0.8em;
	padding:3px 6px;
	text-decoration:none;
}
.DropdownButton:hover  {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #d6d6d6));
	background:-moz-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-webkit-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-o-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:-ms-linear-gradient(top, #e6e6e6 5%, #d6d6d6 100%);
	background:linear-gradient(to bottom, #e6e6e6 5%, #d6d6d6 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#d6d6d6',GradientType=0);
	background-color:#e6e6e6;
}
.DropdownButtonUl {
	  width: 100px;
    margin-left: -50%;
}
.DropdownButtonSpan {
	width: 23px;
    height: 23px;
    -moz-border-radius:3px;
	-webkit-border-radius:3px;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
    background-color: #f9f9f9;
    padding-left: 1px;
    margin-left: -2px;
    padding-top: 2px;
}
.DropdownButtonSpan:hover, .DropdownButtonSpan:active {
    background-color:#e6e6e6;
}
.dropdown-menu {
    min-width: 0px;
    font-size: 12px;
}
.h-auto{
  height: auto !important;
}
  `]
    })
], TableBodyComponent);
export { TableBodyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL3RhYmxlL2JvZHkvYm9keS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFnTC9FLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBcUIzQjtRQW5CUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2Ysb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsd0JBQW1CLEdBQVEsS0FBSyxDQUFDO1FBQ2pDLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQVEsR0FBRyxDQUFDO1FBRXBCLE9BQUUsR0FBUSxlQUFlLENBQUM7UUFDMUIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUN2Qix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUMvQixlQUFVLEdBQUcsSUFBSSxZQUFZLENBQUM7UUFDOUIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztRQUUxQyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUdwQixDQUFDO0lBQ0QsUUFBUSxLQUFLLENBQUM7SUFDZCxRQUFRLENBQUMsS0FBSztRQUNWLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pDLHlDQUF5QztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJO0lBQ0osQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFLO1FBQ2QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELGFBQWEsQ0FBQyxLQUFLO1FBQ2YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNELFdBQVcsQ0FBQyxVQUFVLEVBQUUsR0FBRztRQUN2QixJQUFJLEtBQUssR0FBRztZQUNaLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLElBQUksRUFBRSxHQUFHO1NBQ1IsQ0FBQTtRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDRCxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUc7UUFDaEIsSUFBSSxLQUFLLEdBQUc7WUFDWixHQUFHLEVBQUUsR0FBRztZQUNSLE1BQU0sRUFBRSxHQUFHO1NBQ1YsQ0FBQTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ0QsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUN4QixJQUFJLEtBQUssR0FBRztZQUNaLEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsR0FBRztTQUNWLENBQUE7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0osQ0FBQTtBQTdEWTtJQUFSLEtBQUssRUFBRTtnREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTsyREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7K0RBQWtDO0FBQ2pDO0lBQVIsS0FBSyxFQUFFO21EQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtvREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7cURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO2tEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtpREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7b0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOytDQUFLO0FBQ0o7SUFBUixLQUFLLEVBQUU7OENBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO3FEQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTsrREFBK0I7QUFDN0I7SUFBVCxNQUFNLEVBQUU7dURBQWdDO0FBQy9CO0lBQVQsTUFBTSxFQUFFO3NEQUErQjtBQUM5QjtJQUFULE1BQU0sRUFBRTt3REFBaUM7QUFqQmpDLGtCQUFrQjtJQTlLOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUVUO1FBc0dELElBQUksRUFBRTtZQUNKLGlCQUFpQixFQUFFLGtCQUFrQjtTQUN0QztpQkF2R1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvR1I7S0FJRixDQUFDO0dBRVcsa0JBQWtCLENBK0Q5QjtTQS9EWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NtbC10YWJsZS1ib2R5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGRhdGE7bGV0IGluZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlJbmRleDFcIiBpZD1cInRyLXt7aWR9fS17e2luZGV4fX1cIiBbc3R5bGUuYmFja2dyb3VuZF09XCJpbmRleCAlIDIgPT0gMCA/IHJvd3N0eWxlLmJnRXZlbiA6IHJvd3N0eWxlLmJnT2RkXCI+XHJcbiAgPHRkICpuZ0Zvcj1cImxldCBjb2wgb2YgY29sdW1ucztsZXQgY2luZGV4ID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlJbmRleFwiIGlkPVwidGQte3tpZH19LXt7aW5kZXh9fS17e2NpbmRleH19XCIgIChjbGljayk9XCJjb2x1bW5DbGljayhyb3csY29sKVwiICBbc3R5bGUud2lkdGhdPVwib2JqW2NvbF0ud2lkdGggKyAncHgnXCIgIFtzdHlsZS5tYXgtd2lkdGhdPVwib2JqW2NvbF0ud2lkdGggKyAncHgnXCIgIFtzdHlsZS5taW4td2lkdGhdPVwib2JqW2NvbF0ud2lkdGggKyAncHgnXCIgIFtzdHlsZS50ZXh0LWFsaWduXT1cImFsaWdubWVudFtjb2xdLmNvbHVtbkRlZmluYXRpbkFsaWdubWVudFwiIFtuZ0NsYXNzXT1cInsnYnJlYWtXb3JkJzogb2JqW2NvbF0uaXNGaXhlZFdpZHRoICwgJ3RkX292ZXInOiAhb2JqW2NvbF0uaXNIdG1sICwgJ3BvaW50ZXItY3Vyc29yJzogb2JqW2NvbF0/LmlzQ29sdW1uQ2xpY2sgLCdkaXMtbm9uZSc6ICFvYmpbY29sXS5pc0Rpc3BsYXkgfVwiICBbbmdTdHlsZV09XCJyb3dzdHlsZVwiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhb2JqW2NvbF0uaXNIdG1sXCIgc3R5bGU9XCJ3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IHdvcmQtYnJlYWs6IGtlZXAtYWxsO1wiPnt7cm93W2NvbF19fTwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwib2JqW2NvbF0uaXNIdG1sXCI+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCIhb2JqW2NvbF0uaXNDaGVja2JveCAmJiAhb2JqW2NvbF0uaXNJbWFnZSAmJiAhb2JqW2NvbF0uaXNUZXh0Ym94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBkcm9wZG93blwiICpuZ0lmPVwiZHJvcGRvd25CdXR0b25zTGlzdCA9PSBmYWxzZSAmJiBkcm9wZG93bkJ1dHRvbnMubGVuZ3RoID4gMCAmJiAhb2JqW2NvbF0uaXNTaW5nbGVCdXR0b25cIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImlkQ29tcG9uZW50XCIgY2xhc3M9XCJEcm9wZG93bkJ1dHRvblwiIChjbGljayk9XCJjbGlja01ldGhvZChkcm9wZG93bkJ1dHRvbnNbMF0uQWN0aW9uLHJvdyk7XCI+XHJcbiAgICAgICAgICAgICAgICB7eyBkcm9wZG93bkJ1dHRvbnNbMF0uVGl0bGUgfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHJvcGRvd25CdXR0b25zLmxlbmd0aCA+IDFcIiBjbGFzcz1cImNhcmV0IERyb3Bkb3duQnV0dG9uU3BhbiBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgKm5nSWY9XCJkcm9wZG93bkJ1dHRvbnMubGVuZ3RoID4gMVwiIGNsYXNzPVwiZHJvcGRvd24tbWVudSBEcm9wZG93bkJ1dHRvblVsIGRyb3Bkb3duLW1lbnUtcmlnaHRcIiBbbmdTdHlsZV09XCJkcm9wZG93bkJ1dHRvblN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBkcm9wZG93bkJ1dHRvbnM7bGV0IGk9aW5kZXg7XCIgPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0lmPVwiaSAhPSAwXCIgY2xhc3M9XCJEcm9wZG93bkJ1dHRvbkxpXCIgKGNsaWNrKT1cImNsaWNrTWV0aG9kKGJ1dHRvbi5BY3Rpb24scm93KTtcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBidXR0b24uVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPiAgIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkcm9wZG93bkJ1dHRvbnNMaXN0ID09IGZhbHNlICYmIGRyb3Bkb3duQnV0dG9ucy5sZW5ndGggPiAwICYmIG9ialtjb2xdLmlzU2luZ2xlQnV0dG9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGRyb3Bkb3duIHBhZC1yLTJcIiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGRyb3Bkb3duQnV0dG9ucztsZXQgaT1pbmRleDtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiaWRDb21wb25lbnRcIiBjbGFzcz1cIkRyb3Bkb3duQnV0dG9uXCIgKGNsaWNrKT1cImNsaWNrTWV0aG9kKGJ1dHRvbi5BY3Rpb24scm93KTtcIj5cclxuICAgICAgICAgICAgICAgICAge3sgYnV0dG9uLlRpdGxlIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBkcm9wZG93blwiICpuZ0lmPVwiZHJvcGRvd25CdXR0b25zTGlzdCA9PSB0cnVlICYmICFvYmpbY29sXS5pc1NpbmdsZUJ1dHRvbiAmJiByb3cuZHJvcGRvd25CdXR0b25zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImlkQ29tcG9uZW50XCIgY2xhc3M9XCJEcm9wZG93bkJ1dHRvblwiIChjbGljayk9XCJjbGlja01ldGhvZChyb3cuZHJvcGRvd25CdXR0b25zWzBdLkFjdGlvbixyb3cpO1wiPlxyXG4gICAgICAgICAgICAgICAge3sgcm93LmRyb3Bkb3duQnV0dG9uc1swXS5UaXRsZSB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZHJvcGRvd25CdXR0b25zLmxlbmd0aCA+IDFcIiBjbGFzcz1cImNhcmV0IERyb3Bkb3duQnV0dG9uU3BhbiBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWwgKm5nSWY9XCJyb3cuZHJvcGRvd25CdXR0b25zLmxlbmd0aCA+IDFcIiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgRHJvcGRvd25CdXR0b25VbCBkcm9wZG93bi1tZW51LXJpZ2h0XCIgW25nU3R5bGVdPVwiZHJvcGRvd25CdXR0b25TdHlsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBidXR0b24gb2Ygcm93LmRyb3Bkb3duQnV0dG9ucztsZXQgaT1pbmRleDtcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nSWY9XCJpICE9IDBcIiBjbGFzcz1cIkRyb3Bkb3duQnV0dG9uTGlcIiAoY2xpY2spPVwiY2xpY2tNZXRob2QoYnV0dG9uLkFjdGlvbixyb3cpO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGJ1dHRvbi5UaXRsZSB9fVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3NwYW4+ICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImRyb3Bkb3duQnV0dG9uc0xpc3QgPT0gdHJ1ZSAmJiBvYmpbY29sXS5pc1NpbmdsZUJ1dHRvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGRyb3Bkb3duIHBhZC1yLTJcIiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHJvdy5kcm9wZG93bkJ1dHRvbnM7bGV0IGk9aW5kZXg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiaWRDb21wb25lbnRcIiBjbGFzcz1cIkRyb3Bkb3duQnV0dG9uXCIgKGNsaWNrKT1cImNsaWNrTWV0aG9kKGJ1dHRvbi5BY3Rpb24scm93KTtcIj5cclxuICAgICAgICAgICAgICAgICAgICB7eyBidXR0b24uVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJvYmpbY29sXS5pc0NoZWNrYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInBvaW50ZXItY3Vyc29yXCIgbmFtZT1cInt7aW5kZXh9fVwiIGlkPVwie3tpbmRleH19XCIgWyhuZ01vZGVsKV09XCJyb3dbY29sXVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2ICpuZ0lmPVwib2JqW2NvbF0uaXNJbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJ7e3Jvd1tjb2xdfX1cIiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgKm5nSWY9XCJvYmpbY29sXS5pc1RleHRib3hcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7d2lkdGg6IDgwcHg7cGFkZGluZy1yaWdodDogMnB4O1wiICAoY2hhbmdlKT1cInRleHRCb3hNZXRob2Qocm93LGNvbCwnY2hhbmdlJylcIiAoa2V5ZG93bik9XCJ0ZXh0Qm94TWV0aG9kKHJvdywkZXZlbnQsJ2tleWRvd24nKVwiICAoZm9jdXMpPVwidGV4dEJveE1ldGhvZChyb3csY29sLCdmb2N1cycpXCIgKGJsdXIpPVwidGV4dEJveE1ldGhvZChyb3csY29sLCdibHVyJylcIiBuYW1lPVwie3tpbmRleH19XCIgaWQ9XCJ7e2luZGV4fX1cIiBbKG5nTW9kZWwpXT1cInJvd1tjb2xdXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC90ZD5cclxuPC90cj5cclxuPHRyICpuZ0lmPVwiaXNMb2FkaW5nXCI+XHJcbiAgPHRkIFthdHRyLmNvbHNwYW5dPVwiY29sdW1ucy5sZW5ndGhcIiBbc3R5bGUud2lkdGhdPVwid2lkdGggKyAncHgnXCIgIFtzdHlsZS5tYXgtaGVpZ2h0XT1cImhlaWdodCArICdweCdcIiBjbGFzcz1cInRleHQtY2VudGVyIGgtYXV0b1wiID5cclxuICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2FkaW5nLmdpZlwiIHdpZHRoPVwiMTAwXCIgLz5cclxuICA8L3RkPlxyXG48L3RyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gIH1cclxudHI6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkYwMDtcclxufVxyXG50cjpsYXN0LWNoaWxkID4gdGQge1xyXG5cdGJvcmRlci1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG4udGRfb3ZlcntcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRpcy1ub25le1xyXG4gIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbi5wYWQtci0ye1xyXG4gIHBhZGRpbmctcmlnaHQ6MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJyZWFrV29yZHtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGwgIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bjpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvaW50ZXItY3Vyc29yIHtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5Ecm9wZG93bkJ1dHRvbkxpIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uRHJvcGRvd25CdXR0b25MaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7XHJcbn1cclxuLkRyb3Bkb3duQnV0dG9uICB7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAwcHggMHB4ICNmZmZmZmY7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDBweCAxcHggMHB4IDBweCAjZmZmZmZmO1xyXG5cdGJveC1zaGFkb3c6aW5zZXQgMHB4IDFweCAwcHggMHB4ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICNmOWY5ZjkpLCBjb2xvci1zdG9wKDEsICNlOWU5ZTkpKTtcclxuXHRiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSA1JSwgI2U5ZTllOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSA1JSwgI2U5ZTllOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmOWY5ZjkgNSUsICNlOWU5ZTkgMTAwJSk7XHJcblx0YmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y5ZjlmOSA1JSwgI2U5ZTllOSAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmOWY5ZjkgNSUsICNlOWU5ZTkgMTAwJSk7XHJcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZjlmOWY5JywgZW5kQ29sb3JzdHI9JyNlOWU5ZTknLEdyYWRpZW50VHlwZT0wKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7XHJcblx0LW1vei1ib3JkZXItcmFkaXVzOjNweDtcclxuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdGJvcmRlcjoxcHggc29saWQgI2RjZGNkYztcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxuXHRjb2xvcjojNjY2NjY2O1xyXG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xyXG5cdGZvbnQtc2l6ZTowLjhlbTtcclxuXHRwYWRkaW5nOjNweCA2cHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLkRyb3Bkb3duQnV0dG9uOmhvdmVyICB7XHJcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICNlNmU2ZTYpLCBjb2xvci1zdG9wKDEsICNkNmQ2ZDYpKTtcclxuXHRiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2U2ZTZlNiA1JSwgI2Q2ZDZkNiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2U2ZTZlNiA1JSwgI2Q2ZDZkNiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlNmU2ZTYgNSUsICNkNmQ2ZDYgMTAwJSk7XHJcblx0YmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2U2ZTZlNiA1JSwgI2Q2ZDZkNiAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNlNmU2ZTYgNSUsICNkNmQ2ZDYgMTAwJSk7XHJcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZTZlNmU2JywgZW5kQ29sb3JzdHI9JyNkNmQ2ZDYnLEdyYWRpZW50VHlwZT0wKTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7XHJcbn1cclxuLkRyb3Bkb3duQnV0dG9uVWwge1xyXG5cdCAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MCU7XHJcbn1cclxuLkRyb3Bkb3duQnV0dG9uU3BhbiB7XHJcblx0d2lkdGg6IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcbi5Ecm9wZG93bkJ1dHRvblNwYW46aG92ZXIsIC5Ecm9wZG93bkJ1dHRvblNwYW46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2U2ZTZlNjtcclxufVxyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaC1hdXRve1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiAgYF0sXHJcbiAgaG9zdDoge1xyXG4gICAgJyh3aW5kb3c6cmVzaXplKSc6ICdvblJlc2l6ZSgkZXZlbnQpJ1xyXG4gIH1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGRhdGE6IGFueSA9IFtdO1xyXG4gICAgQElucHV0KCkgZHJvcGRvd25CdXR0b25zOiBhbnkgPSBbXTtcclxuICAgIEBJbnB1dCgpIGRyb3Bkb3duQnV0dG9uc0xpc3Q6IGFueSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY29sdW1uczogYW55ID0gW107XHJcbiAgICBASW5wdXQoKSByb3dzdHlsZTogYW55ID0ge307XHJcbiAgICBASW5wdXQoKSBhbGlnbm1lbnQ6IGFueSA9IHt9O1xyXG4gICAgQElucHV0KCkgaGVpZ2h0OiBhbnkgPSAnJztcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBhbnkgPSAnJztcclxuICAgIEBJbnB1dCgpIG1pbndpZHRoOiBhbnkgPSA3MDA7XHJcbiAgICBASW5wdXQoKSBvYmo7XHJcbiAgICBASW5wdXQoKSBpZDogYW55ID0gJ3NtbC1kYXRhdGFibGUnO1xyXG4gICAgQElucHV0KCkgaXNMb2FkaW5nOiBhbnkgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGRyb3Bkb3duQnV0dG9uU3R5bGU6IGFueSA9IHt9O1xyXG4gICAgQE91dHB1dCgpIGFjdGlvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICAgIEBPdXRwdXQoKSB0ZXh0Qm94RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGRyb3Bkb3duQnV0dG9uID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHsgfVxyXG4gICAgb25SZXNpemUoZXZlbnQpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAkKCcuJyArIHRoaXMuaWQpLndpZHRoKCk7XHJcbiAgICAvLyBpZiAod2lkdGggPiBwYXJzZUludCh0aGlzLm1pbndpZHRoKSkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgIC8vIH1cclxuICAgIH1cclxuICAgIHRyYWNrQnlJbmRleChpbmRleCkge1xyXG4gICAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICAgIHRyYWNrQnlJbmRleDEoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBjbGlja01ldGhvZChhY3Rpb25UeXBlLCByb3cpIHtcclxuICAgICAgICBsZXQgblR5cGUgPSB7XHJcbiAgICAgICAgYWN0aW9uTmFtZTogYWN0aW9uVHlwZSxcclxuICAgICAgICBpdGVtOiByb3dcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hY3Rpb25DbGljay5lbWl0KG5UeXBlKTtcclxuICAgIH1cclxuICAgIGNvbHVtbkNsaWNrKHJvdywgY29sKSB7XHJcbiAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgIHJvdzogcm93LFxyXG4gICAgICAgIGNvbHVtbjogY29sXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5vYmpbY29sXS5pc0h0bWwpIHtcclxuICAgICAgICB0aGlzLnZhbHVlQ2xpY2suZW1pdChuVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9ialtjb2xdLmlzSHRtbCAmJiB0aGlzLm9ialtjb2xdLmlzQ2hlY2tib3gpIHtcclxuICAgICAgICB0aGlzLnZhbHVlQ2xpY2suZW1pdChuVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGV4dEJveE1ldGhvZChyb3csIGNvbCwgdHlwZSkge1xyXG4gICAgICAgIGxldCBuVHlwZSA9IHtcclxuICAgICAgICByb3c6IHJvdyxcclxuICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgIGNvbHVtbjogY29sLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRCb3hFdmVudC5lbWl0KG5UeXBlKTtcclxuICAgIH1cclxufVxyXG4iXX0=