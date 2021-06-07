import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ProgressbarComponent = class ProgressbarComponent {
    constructor() {
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
    ngOnInit() {
        var width = 1;
        this.identity = setInterval(() => {
            this.scene();
        }, this.interval);
    }
    scene() {
        if (this.value >= 100) {
            clearInterval(this.identity);
        }
        else {
            this.value = this.value + 1;
        }
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
        template: `
	<div class="w-100">
    <div class="progress">
        <div class="progress-bar {{classes}}" role="progressbar" [ngStyle]="{'width': value + '%' }" aria-valuemin="0" aria-valuemax="100">
            {{value}}%
        </div>
    </div>
</div>
	`,
        styles: [`
	.progress-bar-success {
		background-color: #5cb85c;
	}
	.progress-bar-info {
		background-color: #5bc0de;
	}
	.progress-bar-warning {
		background-color: #f0ad4e;
	}
	.progress-bar-danger {
		background-color: #d9534f;
	}
	.progress-bar.active, .progress.active .progress-bar {
		-webkit-animation: progress-bar-stripes 2s linear infinite;
		-o-animation: progress-bar-stripes 2s linear infinite;
		animation: progress-bar-stripes 2s linear infinite;
	}
	`]
    })
], ProgressbarComponent);
export { ProgressbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFrQy9FLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBWS9CO1FBWFEsT0FBRSxHQUFRLGtCQUFrQixDQUFDO1FBQzVCLFVBQUssR0FBUSxDQUFDLENBQUM7UUFDZixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixZQUFPLEdBQVEsZ0RBQWdELENBQUM7UUFDekUsb0RBQW9EO1FBQ3BELHNCQUFzQjtRQUN0Qix5Q0FBeUM7UUFDaEMsYUFBUSxHQUFRLEdBQUcsQ0FBQztRQUNuQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd6QyxDQUFDO0lBQ0QsUUFBUTtRQUNOLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNyQixhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUExQlM7SUFBUixLQUFLLEVBQUU7Z0RBQThCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO21EQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO2tEQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO21EQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTtxREFBaUU7QUFJaEU7SUFBUixLQUFLLEVBQUU7c0RBQXFCO0FBQ25CO0lBQVQsTUFBTSxFQUFFO3VEQUFnQztBQVY5QixvQkFBb0I7SUFoQ2hDLFNBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFOzs7Ozs7OztFQVFUO2lCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQlI7S0FDRCxDQUFDO0dBRVcsb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1wcm9ncmVzcy1iYXInLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0PGRpdiBjbGFzcz1cInctMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyIHt7Y2xhc3Nlc319XCIgcm9sZT1cInByb2dyZXNzYmFyXCIgW25nU3R5bGVdPVwieyd3aWR0aCc6IHZhbHVlICsgJyUnIH1cIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj5cclxuICAgICAgICAgICAge3t2YWx1ZX19JVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cdGAsXHJcblx0c3R5bGVzOiBbYFxyXG5cdC5wcm9ncmVzcy1iYXItc3VjY2VzcyB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xyXG5cdH1cclxuXHQucHJvZ3Jlc3MtYmFyLWluZm8ge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzViYzBkZTtcclxuXHR9XHJcblx0LnByb2dyZXNzLWJhci13YXJuaW5nIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGFkNGU7XHJcblx0fVxyXG5cdC5wcm9ncmVzcy1iYXItZGFuZ2VyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XHJcblx0fVxyXG5cdC5wcm9ncmVzcy1iYXIuYWN0aXZlLCAucHJvZ3Jlc3MuYWN0aXZlIC5wcm9ncmVzcy1iYXIge1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzLWJhci1zdHJpcGVzIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHRcdC1vLWFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0YW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG5cdGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdEBJbnB1dCgpIGlkOiBhbnkgPSAnc21sLXByb2dyZXNzLWJhcic7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9IDA7XHJcbiAgQElucHV0KCkgdHlwZTogYW55ID0gJyc7XHJcbiAgQElucHV0KCkgY29sb3I6IGFueSA9ICcnO1xyXG4gIEBJbnB1dCgpIGNsYXNzZXM6IGFueSA9ICdwcm9ncmVzcy1iYXItaW5mbyBwcm9ncmVzcy1iYXItc3RyaXBlZCAgYWN0aXZlJztcclxuICAvLyBwcm9ncmVzcy1iYXItd2FybmluZyBwcm9ncmVzcy1iYXItc3RyaXBlZCAgYWN0aXZlXHJcbiAgLy8gcHJvZ3Jlc3MtYmFyLWRhbmdlclxyXG4gIC8vIHByb2dyZXNzLWJhci1pbmZvIHByb2dyZXNzLWJhci1zdHJpcGVkXHJcbiAgQElucHV0KCkgaW50ZXJ2YWw6IGFueSA9IDEwMDtcclxuICBAT3V0cHV0KCkgY29tcGxldGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGlkZW50aXR5O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHZhciB3aWR0aCA9IDE7XHJcbiAgICB0aGlzLmlkZW50aXR5ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNjZW5lKCk7XHJcbiAgICB9LCB0aGlzLmludGVydmFsKTtcclxuICB9XHJcbiAgc2NlbmUoKSB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSA+PSAxMDApIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkZW50aXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlICsgMTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19