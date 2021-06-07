(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ckeditor/ckeditor5-build-decoupled-document'), require('@angular/common'), require('@ckeditor/ckeditor5-angular'), require('@angular/forms')) :
  typeof define === 'function' && define.amd ? define('rich-text-editor', ['exports', '@angular/core', '@ckeditor/ckeditor5-build-decoupled-document', '@angular/common', '@ckeditor/ckeditor5-angular', '@angular/forms'], factory) :
  (global = global || self, factory(global['rich-text-editor'] = {}, global.ng.core, global.DecoupledEditor, global.ng.common, global.i2, global.ng.forms));
}(this, (function (exports, i0, DecoupledEditor, i1, i2, i3) { 'use strict';

  function RichTextEditorComponent_button_4_Template(rf, ctx) {
      if (rf & 1) {
          var _r3_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "button", 4);
          i0.ɵɵlistener("click", function RichTextEditorComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.expandEditor(); });
          i0.ɵɵelement(1, "i", 5);
          i0.ɵɵelementEnd();
      }
  }
  function RichTextEditorComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
          var _r5_1 = i0.ɵɵgetCurrentView();
          i0.ɵɵelementStart(0, "button", 4);
          i0.ɵɵlistener("click", function RichTextEditorComponent_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.callapseEditor(); });
          i0.ɵɵelement(1, "i", 6);
          i0.ɵɵelementEnd();
      }
  }
  var RichTextEditorComponent = /** @class */ (function () {
      function RichTextEditorComponent(elementRef) {
          this.elementRef = elementRef;
          this.Type = 'classic';
          this.Height = '300px';
          this.LabelStyle = {};
          this.Disabled = false;
          this.editorChange = new i0.EventEmitter();
          this.isExpand = false;
          // public Editor = ClassicEditor;
          this.Editor = DecoupledEditor;
      }
      RichTextEditorComponent.prototype.ngOnInit = function () {
      };
      RichTextEditorComponent.prototype.ngOnChanges = function (event) {
          if (event.Height) {
              console.log(event.Height);
              this.minHeight = event.Height.currentValue;
              this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
          }
      };
      RichTextEditorComponent.prototype.onChange = function (_a) {
          var editor = _a.editor;
          var data = editor.getData();
          this.editorChange.emit(data);
      };
      RichTextEditorComponent.prototype.onReady = function (editor) {
          editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
      };
      RichTextEditorComponent.prototype.expandEditor = function () {
          this.minHeight = 'calc(100vh - 72px)';
          this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
          this.isExpand = true;
      };
      RichTextEditorComponent.prototype.callapseEditor = function () {
          this.minHeight = this.Height;
          this.elementRef.nativeElement.style.setProperty('--ck-height', this.minHeight);
          this.isExpand = false;
      };
      return RichTextEditorComponent;
  }());
  RichTextEditorComponent.ɵfac = function RichTextEditorComponent_Factory(t) { return new (t || RichTextEditorComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
  RichTextEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RichTextEditorComponent, selectors: [["emuna-rich-text-editor"]], inputs: { Type: "Type", Height: "Height", LabelStyle: "LabelStyle", LabelName: "LabelName", Value: "Value", Disabled: "Disabled" }, outputs: { editorChange: "editorChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 8, consts: [[1, "ckeditor-area"], [2, "background", "#dcdcdc", "line-height", "32px", "padding-left", "10px"], ["class", "btn btn-exp", 3, "click", 4, "ngIf"], [3, "editor", "ngModel", "disabled", "ngModelChange", "change", "ready"], [1, "btn", "btn-exp", 3, "click"], [1, "fal", "fa-expand-arrows"], [1, "fal", "fa-compress-alt"]], template: function RichTextEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
              i0.ɵɵelementStart(0, "div", 0);
              i0.ɵɵelementStart(1, "div", 1);
              i0.ɵɵelementStart(2, "label");
              i0.ɵɵtext(3);
              i0.ɵɵelementEnd();
              i0.ɵɵtemplate(4, RichTextEditorComponent_button_4_Template, 2, 0, "button", 2);
              i0.ɵɵtemplate(5, RichTextEditorComponent_button_5_Template, 2, 0, "button", 2);
              i0.ɵɵelementEnd();
              i0.ɵɵelementStart(6, "ckeditor", 3);
              i0.ɵɵlistener("ngModelChange", function RichTextEditorComponent_Template_ckeditor_ngModelChange_6_listener($event) { return ctx.Value = $event; })("change", function RichTextEditorComponent_Template_ckeditor_change_6_listener($event) { return ctx.onChange($event); })("ready", function RichTextEditorComponent_Template_ckeditor_ready_6_listener($event) { return ctx.onReady($event); });
              i0.ɵɵelementEnd();
              i0.ɵɵelementEnd();
          }
          if (rf & 2) {
              i0.ɵɵclassProp("fixed-area", ctx.isExpand);
              i0.ɵɵadvance(3);
              i0.ɵɵtextInterpolate(ctx.LabelName);
              i0.ɵɵadvance(1);
              i0.ɵɵproperty("ngIf", !ctx.isExpand);
              i0.ɵɵadvance(1);
              i0.ɵɵproperty("ngIf", ctx.isExpand);
              i0.ɵɵadvance(1);
              i0.ɵɵproperty("editor", ctx.Editor)("ngModel", ctx.Value)("disabled", ctx.Disabled);
          }
      }, directives: [i1.NgIf, i2.CKEditorComponent, i3.NgControlStatus, i3.NgModel], styles: ["[_nghost-%COMP%] {\n      --ck-height: 200px;\n    }\n    .ckeditor-area[_ngcontent-%COMP%] {width:100%;position:relative;}\n    .fixed-area[_ngcontent-%COMP%] {\n      position: fixed !important;\n      top: 0px;\n      left: 0px;\n      right: 10px;\n      z-index: 1200;\n      height: 100vh;\n      background: #fff;\n      overflow: auto;\n    }\n    .btn-exp[_ngcontent-%COMP%], .btn-exp[_ngcontent-%COMP%]:hover, .btn-exp[_ngcontent-%COMP%]:focus {\n        position: absolute;\n        right: 10px;\n        z-index: 100;\n        top: 4px !important;\n        background: transparent;\n        border: none;\n        outline: none;\n        color: #000;\n        box-shadow: none;\n        padding: 2px 7px;\n        font-size: 14px;\n    }\n    .fixed-area[_ngcontent-%COMP%]   .btn-exp[_ngcontent-%COMP%] {\n      z-index:1400 !important;\n    }\n    [_nghost-%COMP%]  .ck-editor__editable_inline {\n      height: var(--ck-height);\n      overflow: auto;\n    }"] });
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(RichTextEditorComponent, [{
              type: i0.Component,
              args: [{
                      selector: 'emuna-rich-text-editor',
                      template: "\n  <div class=\"ckeditor-area\" [class.fixed-area]=\"isExpand\">\n    <div style=\"background: #dcdcdc;line-height: 32px;padding-left: 10px;\">\n      <label>{{LabelName}}</label>\n      <button *ngIf=\"!isExpand\" (click)=\"expandEditor()\" class=\"btn btn-exp\"><i class=\"fal fa-expand-arrows\"></i></button>\n      <button *ngIf=\"isExpand\"  (click)=\"callapseEditor()\" class=\"btn btn-exp\"><i class=\"fal fa-compress-alt\"></i></button>\n    </div>\n    <ckeditor [editor]=\"Editor\" [(ngModel)]=\"Value\" (change)=\"onChange($event)\" (ready)=\"onReady($event)\" [disabled]=\"Disabled\"></ckeditor>   \n  </div>\n  ",
                      styles: ["\n    :host {\n      --ck-height: 200px;\n    }\n    .ckeditor-area {width:100%;position:relative;}\n    .fixed-area {\n      position: fixed !important;\n      top: 0px;\n      left: 0px;\n      right: 10px;\n      z-index: 1200;\n      height: 100vh;\n      background: #fff;\n      overflow: auto;\n    }\n    .btn-exp,.btn-exp:hover,.btn-exp:focus {\n        position: absolute;\n        right: 10px;\n        z-index: 100;\n        top: 4px !important;\n        background: transparent;\n        border: none;\n        outline: none;\n        color: #000;\n        box-shadow: none;\n        padding: 2px 7px;\n        font-size: 14px;\n    }\n    .fixed-area .btn-exp {\n      z-index:1400 !important;\n    }\n    :host::ng-deep .ck-editor__editable_inline {\n      height: var(--ck-height);\n      overflow: auto;\n    }\n  "]
                  }]
          }], function () { return [{ type: i0.ElementRef }]; }, { Type: [{
                  type: i0.Input
              }], Height: [{
                  type: i0.Input
              }], LabelStyle: [{
                  type: i0.Input
              }], LabelName: [{
                  type: i0.Input
              }], Value: [{
                  type: i0.Input
              }], Disabled: [{
                  type: i0.Input
              }], editorChange: [{
                  type: i0.Output
              }] });
  })();

  var RichTextEditor = /** @class */ (function () {
      function RichTextEditor() {
      }
      return RichTextEditor;
  }());
  RichTextEditor.ɵmod = i0.ɵɵdefineNgModule({ type: RichTextEditor });
  RichTextEditor.ɵinj = i0.ɵɵdefineInjector({ factory: function RichTextEditor_Factory(t) { return new (t || RichTextEditor)(); }, imports: [[
              i1.CommonModule,
              i3.FormsModule,
              i2.CKEditorModule
          ]] });
  (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RichTextEditor, { declarations: [RichTextEditorComponent], imports: [i1.CommonModule,
              i3.FormsModule,
              i2.CKEditorModule], exports: [RichTextEditorComponent] });
  })();
  /*@__PURE__*/ (function () {
      i0.ɵsetClassMetadata(RichTextEditor, [{
              type: i0.NgModule,
              args: [{
                      declarations: [RichTextEditorComponent],
                      imports: [
                          i1.CommonModule,
                          i3.FormsModule,
                          i2.CKEditorModule
                      ],
                      exports: [RichTextEditorComponent]
                  }]
          }], null, null);
  })();

  /*
   * Public API Surface of rich-text-editor
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.RichTextEditor = RichTextEditor;
  exports.RichTextEditorComponent = RichTextEditorComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rich-text-editor.umd.js.map
