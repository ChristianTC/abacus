import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.value = '';
        this.searchClick = new EventEmitter();
        this.searchText = '';
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.keyup = function (e) {
        if (e.keyCode === 13) {
            this.searchClick.emit(this.searchText);
        }
    };
    __decorate([
        Input()
    ], SearchComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], SearchComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], SearchComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], SearchComponent.prototype, "width", void 0);
    __decorate([
        Output()
    ], SearchComponent.prototype, "searchClick", void 0);
    SearchComponent = __decorate([
        Component({
            selector: 'sml-table-header-search',
            template: "\n  <div class=\"form-row align-items-center\">\n    <div class=\"col-md-12 col-12 mb-1\">\n        <input type=\"text\" class=\"form-control h-39 smlSearch\" [(ngModel)]=\"searchText\" placeholder=\"{{placeholder}}\"\n            id=\"txt-{{name}}\" name=\"txt-{{name}}\" (keyup)=\"keyup($event)\">\n    </div>\n</div>\n  ",
            styles: ["\n  .h-39{height: 39px;}\n  .smlSearch{font-size: 9pt !important;border-radius:4px !important;border-color: #ccc !important}\n  .smlSearch:focus{outline: none;box-shadow: none;}\n  "]
        })
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdGFibGUvaGVhZGVyL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBbUIvRTtJQVFFO1FBTlMsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUlmLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzQyxlQUFVLEdBQVEsRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELCtCQUFLLEdBQUwsVUFBTSxDQUFDO1FBQ0wsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBZlE7UUFBUixLQUFLLEVBQUU7a0RBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO2lEQUFNO0lBQ0w7UUFBUixLQUFLLEVBQUU7d0RBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTtrREFBTztJQUNMO1FBQVQsTUFBTSxFQUFFO3dEQUFrQztJQU5oQyxlQUFlO1FBakIzQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFFBQVEsRUFBRSxxVUFPVDtxQkFDUSx1TEFJUjtTQUNGLENBQUM7T0FFVyxlQUFlLENBa0IzQjtJQUFELHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXRhYmxlLWhlYWRlci1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImZvcm0tcm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtMTIgbWItMVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGgtMzkgc21sU2VhcmNoXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgcGxhY2Vob2xkZXI9XCJ7e3BsYWNlaG9sZGVyfX1cIlxyXG4gICAgICAgICAgICBpZD1cInR4dC17e25hbWV9fVwiIG5hbWU9XCJ0eHQte3tuYW1lfX1cIiAoa2V5dXApPVwia2V5dXAoJGV2ZW50KVwiPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5oLTM5e2hlaWdodDogMzlweDt9XHJcbiAgLnNtbFNlYXJjaHtmb250LXNpemU6IDlwdCAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6NHB4ICFpbXBvcnRhbnQ7Ym9yZGVyLWNvbG9yOiAjY2NjICFpbXBvcnRhbnR9XHJcbiAgLnNtbFNlYXJjaDpmb2N1c3tvdXRsaW5lOiBub25lO2JveC1zaGFkb3c6IG5vbmU7fVxyXG4gIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWU7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI7XHJcbiAgQElucHV0KCkgd2lkdGg7XHJcbiAgQE91dHB1dCgpIHNlYXJjaENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHNlYXJjaFRleHQ6IGFueSA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAga2V5dXAoZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaENsaWNrLmVtaXQodGhpcy5zZWFyY2hUZXh0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19