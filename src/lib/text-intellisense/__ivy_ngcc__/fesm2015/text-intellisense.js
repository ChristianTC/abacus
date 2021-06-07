import { EventEmitter, Component, ElementRef, Input, Output, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { polyfill } from 'keyboardevent-key-polyfill';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'angular-text-input-autocomplete';
import * as ɵngcc4 from '@angular/forms';

function TextIntellisenseComponent_label_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "label", 4);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngStyle", ctx_r0.LabelStyle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.LabelName);
} }
const _c0 = function (a0, a1) { return { "emuna-label-top": a0, "emuna-disabled": a1 }; };
const _c1 = function (a0, a1) { return { "emuna-no-padding-top": a0, "emuna-disabled": a1 }; };
const _c2 = function (a0) { return { "emuna-disabled": a0 }; };
class TextIntellisenseComponent {
    constructor(elementRef, http) {
        this.elementRef = elementRef;
        this.http = http;
        this.Id = "Id";
        this.Name = "Name";
        this.LabelName = "LabelName";
        this.TabIndex = 1;
        this.Type = 'text';
        this.Maxlength = 255;
        this.Value = "";
        this.Rows = 1;
        this.TriggerCharacter = "{";
        this.LabelStyle = {};
        this.BorderStyle = {};
        this.ValueStyle = {};
        this.ReadOnly = false;
        this.Disabled = false;
        this.LabelTop = false;
        this.database = "ADMIN";
        this.schema = "list";
        this.procedure = "NASS_FIELDS_ListCombo";
        this.fieldName = "TableFullName";
        this.apiURL = 'https://emunatemplate.aaadev.info/Api/';
        this.GetValue = new EventEmitter;
        this.BlurValue = new EventEmitter;
        this.randKey = Math.floor(Math.random() * 10000000000) + 1;
        this.showList = false;
        this.listData = [];
        this.GenericToken = "";
        this.leftCss = "auto";
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.findChoices = (searchText) => {
            return this.listData.filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
        };
        this.getChoiceLabel = (choice) => {
            if (this.TriggerCharacter !== '{') {
                return this.TriggerCharacter + choice + ' ';
            }
            else {
                return '{' + choice + '} ';
            }
        };
    }
    ngOnInit() {
        this.getToken();
    }
    ngOnChanges(event) {
        if (event.LabelStyle != undefined && event.LabelStyle.currentValue != undefined) {
            let css = event.LabelStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--c-width', css['c-width']);
            this.elementRef.nativeElement.style.setProperty('--c-height', css['c-height']);
            this.elementRef.nativeElement.style.setProperty('--label-left', css['label-left']);
            this.elementRef.nativeElement.style.setProperty('--label-top', css['label-top']);
        }
        if (event.ValueStyle != undefined && event.ValueStyle.currentValue != undefined) {
            let css = event.ValueStyle.currentValue;
            this.elementRef.nativeElement.style.setProperty('--value-left', css['value-left']);
            this.elementRef.nativeElement.style.setProperty('--value-top', css['value-top']);
        }
    }
    GetValueEvent(event) {
        var getVal = event.target.value;
        this.GetValue.emit(event.target.value);
    }
    OnBlurEvent(event) {
        this.BlurValue.emit(event.target.value);
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getGlobalField();
            });
        }
    }
    getGlobalField() {
        const url = this.apiURL + "Data/Exec/" + this.database + "/" + this.schema + "/" + this.procedure + "?api_key=" + this.GenericToken;
        this.http.post(url, {}, this.httpOptionJSON).subscribe(res => {
            if (res) {
                this.listData = [];
                let temp = [];
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    let nType = {
                        id: temp[i].CodeId,
                        name: temp[i].Description
                    };
                    this.listData.push(temp[i].Description);
                }
            }
            else {
                this.listData = [];
            }
        }, error => {
            this.listData = [];
        });
    }
}
TextIntellisenseComponent.ɵfac = function TextIntellisenseComponent_Factory(t) { return new (t || TextIntellisenseComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.HttpClient)); };
TextIntellisenseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: TextIntellisenseComponent, selectors: [["emuna-text-intellisense"]], inputs: { Id: "Id", Name: "Name", LabelName: "LabelName", TabIndex: "TabIndex", Type: "Type", Maxlength: "Maxlength", Value: "Value", Rows: "Rows", TriggerCharacter: "TriggerCharacter", LabelStyle: "LabelStyle", BorderStyle: "BorderStyle", ValueStyle: "ValueStyle", ReadOnly: "ReadOnly", Disabled: "Disabled", LabelTop: "LabelTop", database: "database", schema: "schema", procedure: "procedure", fieldName: "fieldName", apiURL: "apiURL" }, outputs: { GetValue: "GetValue", BlurValue: "BlurValue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 29, consts: [[1, "emuna-controls", 3, "ngClass"], [1, "emuna-common-control", "emuna-textarea-control", 3, "ngStyle", "ngClass"], ["mwlTextInputAutocomplete", "", 3, "id", "name", "tabindex", "rows", "ngModel", "disabled", "ngClass", "ngStyle", "triggerCharacter", "findChoices", "getChoiceLabel", "ngModelChange", "blur", "keyup"], ["class", "emuna-label", 3, "ngStyle", 4, "ngIf"], [1, "emuna-label", 3, "ngStyle"]], template: function TextIntellisenseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "mwl-text-input-autocomplete-container");
        ɵngcc0.ɵɵelementStart(4, "textarea", 2);
        ɵngcc0.ɵɵlistener("ngModelChange", function TextIntellisenseComponent_Template_textarea_ngModelChange_4_listener($event) { return ctx.Value = $event; })("blur", function TextIntellisenseComponent_Template_textarea_blur_4_listener($event) { return ctx.OnBlurEvent($event); })("keyup", function TextIntellisenseComponent_Template_textarea_keyup_4_listener($event) { return ctx.GetValueEvent($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(5, TextIntellisenseComponent_label_5_Template, 2, 2, "label", 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("position-relative ", ctx.randKey, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(21, _c0, ctx.LabelTop, ctx.Disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngStyle", ctx.BorderStyle)("ngClass", ɵngcc0.ɵɵpureFunction2(24, _c1, ctx.LabelName == "", ctx.Disabled));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap("emuna-form-control-textarea");
        ɵngcc0.ɵɵproperty("id", ctx.Id)("name", ctx.Name)("tabindex", ctx.TabIndex)("rows", ctx.Rows)("ngModel", ctx.Value)("disabled", ctx.Disabled)("ngClass", ɵngcc0.ɵɵpureFunction1(27, _c2, ctx.Disabled))("ngStyle", ctx.ValueStyle)("triggerCharacter", ctx.TriggerCharacter)("findChoices", ctx.findChoices)("getChoiceLabel", ctx.getChoiceLabel);
        ɵngcc0.ɵɵattribute("maxlength", ctx.Maxlength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.LabelName != "");
    } }, directives: [ɵngcc2.NgClass, ɵngcc2.NgStyle, ɵngcc3.ɵb, ɵngcc3.ɵa, ɵngcc4.DefaultValueAccessor, ɵngcc4.MaxLengthValidator, ɵngcc4.NgControlStatus, ɵngcc4.NgModel, ɵngcc2.NgIf], styles: ["[_nghost-%COMP%]{--c-height:30px;--c-width:100%;--label-left:5px;--label-top:5px;--text-dark:#1d2936;--text-theme:#3ec6f4;--text-white:#fff;--value-left:10px;--value-top:0px}.emuna-controls.emuna-label-top[_ngcontent-%COMP%]{position:relative}.emuna-controls.emuna-label-top[_ngcontent-%COMP%]   .emuna-common-control[_ngcontent-%COMP%]{padding-top:0;position:inherit}.emuna-controls.emuna-label-top[_ngcontent-%COMP%]   .emuna-common-control[_ngcontent-%COMP%]   .emuna-label[_ngcontent-%COMP%]{left:0!important;top:-24px!important}.emuna-no-padding-top[_ngcontent-%COMP%]{padding-top:0!important}.emuna-label[_ngcontent-%COMP%]{color:var(--text-theme);left:var(--label-left);opacity:1;position:absolute;top:var(--label-top);transform:translateY(0);transition:all .2s}.emuna-textarea-control[_ngcontent-%COMP%]{background-color:var(--text-white);border:1px solid var(--text-theme);border-radius:0;max-width:100%;padding:15px 5px 0;position:relative}.emuna-form-control-textarea[_ngcontent-%COMP%]:focus{outline:none}.emuna-form-control-textarea[_ngcontent-%COMP%]{background-color:var(--text-white);border:none;color:var(--text-dark);display:block;font-size:16px;font-weight:400;height:calc(var(--c-height) + var(--value-top));max-width:100%;padding-left:var(--value-left);padding-top:3px;padding-top:var(--value-top);resize:none;width:var(--c-width)}.emuna-disabled[_ngcontent-%COMP%]{background-color:#e9ecef!important;cursor:not-allowed!important;opacity:.9!important;pointer-events:none!important}"] });
TextIntellisenseComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: HttpClient }
];
TextIntellisenseComponent.propDecorators = {
    Id: [{ type: Input }],
    Name: [{ type: Input }],
    LabelName: [{ type: Input }],
    TabIndex: [{ type: Input }],
    Type: [{ type: Input }],
    Maxlength: [{ type: Input }],
    Value: [{ type: Input }],
    Rows: [{ type: Input }],
    TriggerCharacter: [{ type: Input }],
    LabelStyle: [{ type: Input }],
    BorderStyle: [{ type: Input }],
    ValueStyle: [{ type: Input }],
    ReadOnly: [{ type: Input }],
    Disabled: [{ type: Input }],
    LabelTop: [{ type: Input }],
    database: [{ type: Input }],
    schema: [{ type: Input }],
    procedure: [{ type: Input }],
    fieldName: [{ type: Input }],
    apiURL: [{ type: Input }],
    GetValue: [{ type: Output }],
    BlurValue: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextIntellisenseComponent, [{
        type: Component,
        args: [{ selector: 'emuna-text-intellisense', template: "<div class=\"position-relative {{randKey}}\">\r\n\t<div class=\"emuna-controls\" [ngClass]=\"{'emuna-label-top': (LabelTop),'emuna-disabled': Disabled}\">\r\n\t\t<div class=\"emuna-common-control emuna-textarea-control\" [ngStyle]=\"BorderStyle\" [ngClass]=\"{'emuna-no-padding-top': (LabelName == ''),'emuna-disabled': Disabled}\">\r\n\t\t\t<mwl-text-input-autocomplete-container>\r\n\t\t\t<textarea mwlTextInputAutocomplete [id]=\"Id\" [name]=\"Name\" [class]=\"'emuna-form-control-textarea'\" [tabindex]=\"TabIndex\" [rows]=\"Rows\"\r\n\t\t\t [attr.maxlength]=\"Maxlength\" [(ngModel)]=\"Value\" [disabled]=\"Disabled\" [ngClass]=\"{'emuna-disabled': Disabled}\" [ngStyle]=\"ValueStyle\"\r\n\t\t\t (blur)=\"OnBlurEvent($event)\" (keyup)=\"GetValueEvent($event)\" [triggerCharacter]=\"TriggerCharacter\"\r\n        \t [findChoices]=\"findChoices\" [getChoiceLabel]=\"getChoiceLabel\"></textarea>\r\n        \t</mwl-text-input-autocomplete-container>\r\n\t\t\t<label *ngIf=\"LabelName != ''\" [ngStyle]=\"LabelStyle\" class=\"emuna-label\">{{LabelName}}</label>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n    ", styles: [":host{--c-height:30px;--c-width:100%;--label-left:5px;--label-top:5px;--text-dark:#1d2936;--text-theme:#3ec6f4;--text-white:#fff;--value-left:10px;--value-top:0px}.emuna-controls.emuna-label-top{position:relative}.emuna-controls.emuna-label-top .emuna-common-control{padding-top:0;position:inherit}.emuna-controls.emuna-label-top .emuna-common-control .emuna-label{left:0!important;top:-24px!important}.emuna-no-padding-top{padding-top:0!important}.emuna-label{color:var(--text-theme);left:var(--label-left);opacity:1;position:absolute;top:var(--label-top);transform:translateY(0);transition:all .2s}.emuna-textarea-control{background-color:var(--text-white);border:1px solid var(--text-theme);border-radius:0;max-width:100%;padding:15px 5px 0;position:relative}.emuna-form-control-textarea:focus{outline:none}.emuna-form-control-textarea{background-color:var(--text-white);border:none;color:var(--text-dark);display:block;font-size:16px;font-weight:400;height:calc(var(--c-height) + var(--value-top));max-width:100%;padding-left:var(--value-left);padding-top:3px;padding-top:var(--value-top);resize:none;width:var(--c-width)}.emuna-disabled{background-color:#e9ecef!important;cursor:not-allowed!important;opacity:.9!important;pointer-events:none!important}"] }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.HttpClient }]; }, { Id: [{
            type: Input
        }], Name: [{
            type: Input
        }], LabelName: [{
            type: Input
        }], TabIndex: [{
            type: Input
        }], Type: [{
            type: Input
        }], Maxlength: [{
            type: Input
        }], Value: [{
            type: Input
        }], Rows: [{
            type: Input
        }], TriggerCharacter: [{
            type: Input
        }], LabelStyle: [{
            type: Input
        }], BorderStyle: [{
            type: Input
        }], ValueStyle: [{
            type: Input
        }], ReadOnly: [{
            type: Input
        }], Disabled: [{
            type: Input
        }], LabelTop: [{
            type: Input
        }], database: [{
            type: Input
        }], schema: [{
            type: Input
        }], procedure: [{
            type: Input
        }], fieldName: [{
            type: Input
        }], apiURL: [{
            type: Input
        }], GetValue: [{
            type: Output
        }], BlurValue: [{
            type: Output
        }] }); })();

polyfill();
class TextIntellisense {
}
TextIntellisense.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TextIntellisense });
TextIntellisense.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function TextIntellisense_Factory(t) { return new (t || TextIntellisense)(); }, imports: [[
            CommonModule,
            FormsModule,
            HttpClientModule,
            TextInputAutocompleteModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TextIntellisense, { declarations: function () { return [TextIntellisenseComponent]; }, imports: function () { return [CommonModule,
        FormsModule,
        HttpClientModule,
        TextInputAutocompleteModule]; }, exports: function () { return [TextIntellisenseComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(TextIntellisense, [{
        type: NgModule,
        args: [{
                declarations: [TextIntellisenseComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    TextInputAutocompleteModule
                ],
                exports: [TextIntellisenseComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of list-search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TextIntellisense, TextIntellisenseComponent };

//# sourceMappingURL=text-intellisense.js.map