import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ProgressbarComponent = /** @class */ (function () {
    function ProgressbarComponent() {
        this.id = 'sml-progress-bar';
        this.value = 0;
        this.type = '';
        this.color = '';
        this.classes = 'progress-bar-info progress-bar-striped  active';
        // progress-bar-warning progress-bar-striped  active
        // progress-bar-danger
        // progress-bar-info progress-bar-striped
        this.interval = 100;
        this.completed = new EventEmitter();
    }
    ProgressbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var width = 1;
        this.identity = setInterval(function () {
            _this.scene();
        }, this.interval);
    };
    ProgressbarComponent.prototype.scene = function () {
        if (this.value >= 100) {
            clearInterval(this.identity);
        }
        else {
            this.value = this.value + 1;
        }
    };
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "color", void 0);
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "classes", void 0);
    __decorate([
        Input()
    ], ProgressbarComponent.prototype, "interval", void 0);
    __decorate([
        Output()
    ], ProgressbarComponent.prototype, "completed", void 0);
    ProgressbarComponent = __decorate([
        Component({
            selector: 'sml-progress-bar',
            template: "\n\t<div class=\"w-100\">\n    <div class=\"progress\">\n        <div class=\"progress-bar {{classes}}\" role=\"progressbar\" [ngStyle]=\"{'width': value + '%' }\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n            {{value}}%\n        </div>\n    </div>\n</div>\n\t",
            styles: ["\n\t.progress-bar-success {\n\t\tbackground-color: #5cb85c;\n\t}\n\t.progress-bar-info {\n\t\tbackground-color: #5bc0de;\n\t}\n\t.progress-bar-warning {\n\t\tbackground-color: #f0ad4e;\n\t}\n\t.progress-bar-danger {\n\t\tbackground-color: #d9534f;\n\t}\n\t.progress-bar.active, .progress.active .progress-bar {\n\t\t-webkit-animation: progress-bar-stripes 2s linear infinite;\n\t\t-o-animation: progress-bar-stripes 2s linear infinite;\n\t\tanimation: progress-bar-stripes 2s linear infinite;\n\t}\n\t"]
        })
    ], ProgressbarComponent);
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrQy9FO0lBWUU7UUFYUSxPQUFFLEdBQVEsa0JBQWtCLENBQUM7UUFDNUIsVUFBSyxHQUFRLENBQUMsQ0FBQztRQUNmLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBQ2hCLFlBQU8sR0FBUSxnREFBZ0QsQ0FBQztRQUN6RSxvREFBb0Q7UUFDcEQsc0JBQXNCO1FBQ3RCLHlDQUF5QztRQUNoQyxhQUFRLEdBQVEsR0FBRyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3pDLENBQUM7SUFDRCx1Q0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztZQUMxQixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxvQ0FBSyxHQUFMO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQXpCTztRQUFSLEtBQUssRUFBRTtvREFBOEI7SUFDNUI7UUFBUixLQUFLLEVBQUU7dURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7c0RBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7dURBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO3lEQUFpRTtJQUloRTtRQUFSLEtBQUssRUFBRTswREFBcUI7SUFDbkI7UUFBVCxNQUFNLEVBQUU7MkRBQWdDO0lBVjlCLG9CQUFvQjtRQWhDaEMsU0FBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixRQUFRLEVBQUUsZ1JBUVQ7cUJBQ1EsdWZBa0JSO1NBQ0QsQ0FBQztPQUVXLG9CQUFvQixDQTJCaEM7SUFBRCwyQkFBQztDQUFBLEFBM0JELElBMkJDO1NBM0JZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnc21sLXByb2dyZXNzLWJhcicsXHJcblx0dGVtcGxhdGU6IGBcclxuXHQ8ZGl2IGNsYXNzPVwidy0xMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXIge3tjbGFzc2VzfX1cIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogdmFsdWUgKyAnJScgfVwiIGFyaWEtdmFsdWVtaW49XCIwXCIgYXJpYS12YWx1ZW1heD1cIjEwMFwiPlxyXG4gICAgICAgICAgICB7e3ZhbHVlfX0lXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblx0YCxcclxuXHRzdHlsZXM6IFtgXHJcblx0LnByb2dyZXNzLWJhci1zdWNjZXNzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcblx0fVxyXG5cdC5wcm9ncmVzcy1iYXItaW5mbyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjMGRlO1xyXG5cdH1cclxuXHQucHJvZ3Jlc3MtYmFyLXdhcm5pbmcge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZTtcclxuXHR9XHJcblx0LnByb2dyZXNzLWJhci1kYW5nZXIge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcclxuXHR9XHJcblx0LnByb2dyZXNzLWJhci5hY3RpdmUsIC5wcm9ncmVzcy5hY3RpdmUgLnByb2dyZXNzLWJhciB7XHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0LW8tYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHRhbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcblx0YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0QElucHV0KCkgaWQ6IGFueSA9ICdzbWwtcHJvZ3Jlc3MtYmFyJztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gMDtcclxuICBASW5wdXQoKSB0eXBlOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBjb2xvcjogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgY2xhc3NlczogYW55ID0gJ3Byb2dyZXNzLWJhci1pbmZvIHByb2dyZXNzLWJhci1zdHJpcGVkICBhY3RpdmUnO1xyXG4gIC8vIHByb2dyZXNzLWJhci13YXJuaW5nIHByb2dyZXNzLWJhci1zdHJpcGVkICBhY3RpdmVcclxuICAvLyBwcm9ncmVzcy1iYXItZGFuZ2VyXHJcbiAgLy8gcHJvZ3Jlc3MtYmFyLWluZm8gcHJvZ3Jlc3MtYmFyLXN0cmlwZWRcclxuICBASW5wdXQoKSBpbnRlcnZhbDogYW55ID0gMTAwO1xyXG4gIEBPdXRwdXQoKSBjb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgaWRlbnRpdHk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdmFyIHdpZHRoID0gMTtcclxuICAgIHRoaXMuaWRlbnRpdHkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2NlbmUoKTtcclxuICAgIH0sIHRoaXMuaW50ZXJ2YWwpO1xyXG4gIH1cclxuICBzY2VuZSgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlID49IDEwMCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuaWRlbnRpdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUgKyAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=