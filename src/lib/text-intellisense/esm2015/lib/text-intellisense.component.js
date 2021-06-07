import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class TextIntellisenseComponent {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnRlbGxpc2Vuc2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXh0aW50ZWxsaXNlbnNlL3NyYy9saWIvdGV4dC1pbnRlbGxpc2Vuc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQStCLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RixNQUFNLE9BQU8seUJBQXlCO0lBbUNwQyxZQUFvQixVQUFzQixFQUFVLElBQWdCO1FBQWhELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBakMzRCxPQUFFLEdBQVcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsY0FBUyxHQUFXLFdBQVcsQ0FBQztRQUNoQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFNBQUksR0FBVyxNQUFNLENBQUM7UUFDdEIsY0FBUyxHQUFXLEdBQUcsQ0FBQztRQUN4QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIscUJBQWdCLEdBQVcsR0FBRyxDQUFDO1FBQy9CLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVEsT0FBTyxDQUFDO1FBQ3hCLFdBQU0sR0FBUSxNQUFNLENBQUM7UUFDckIsY0FBUyxHQUFRLHVCQUF1QixDQUFDO1FB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QUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxLQUFLLEdBQUc7d0JBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO3dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7cUJBQzFCLENBQUE7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUN6QzthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUgsc0RBbkdDLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBQyw4bENBQWlELDBkQUU3Rjs7WUFOcUQsVUFBVTtZQUMxRCxVQUFVOzs7aUJBT2hCLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBdEI0SSxKQXVCakosS0FBSzt1QkFDTCxNQUFNO3dCQUNOLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmRlY2xhcmUgdmFyICQ6YW55O1xyXG5cclxuQENvbXBvbmVudCh7c2VsZWN0b3I6ICdlbXVuYS10ZXh0LWludGVsbGlzZW5zZScsdGVtcGxhdGVVcmw6ICcuL3RleHQtaW50ZWxsaXNlbnNlLmNvbXBvbmVudC5odG1sJyxzdHlsZVVybHM6IFsnLi90ZXh0LWludGVsbGlzZW5zZS5jb21wb25lbnQuc2NzcyddfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SW50ZWxsaXNlbnNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgSWQ6IHN0cmluZyA9IFwiSWRcIjtcclxuICBASW5wdXQoKSBOYW1lOiBzdHJpbmcgPSBcIk5hbWVcIjtcclxuICBASW5wdXQoKSBMYWJlbE5hbWU6IHN0cmluZyA9IFwiTGFiZWxOYW1lXCI7XHJcbiAgQElucHV0KCkgVGFiSW5kZXg6IG51bWJlciA9IDE7XHJcbiAgQElucHV0KCkgVHlwZTogc3RyaW5nID0gJ3RleHQnO1xyXG4gIEBJbnB1dCgpIE1heGxlbmd0aDogbnVtYmVyID0gMjU1O1xyXG4gIEBJbnB1dCgpIFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xyXG4gIEBJbnB1dCgpIFJvd3M6IG51bWJlciA9IDE7XHJcbiAgQElucHV0KCkgVHJpZ2dlckNoYXJhY3Rlcjogc3RyaW5nID0gXCJ7XCI7XHJcbiAgQElucHV0KCkgTGFiZWxTdHlsZTogYW55ID0ge307XHJcbiAgQElucHV0KCkgQm9yZGVyU3R5bGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIFZhbHVlU3R5bGU6IGFueSA9IHt9O1xyXG4gIEBJbnB1dCgpIFJlYWRPbmx5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBMYWJlbFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRhdGFiYXNlOiBhbnkgPSBcIkFETUlOXCI7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImxpc3RcIjtcclxuICBASW5wdXQoKSBwcm9jZWR1cmU6IGFueSA9IFwiTkFTU19GSUVMRFNfTGlzdENvbWJvXCI7XHJcbiAgQElucHV0KCkgZmllbGROYW1lOiBhbnkgPSBcIlRhYmxlRnVsbE5hbWVcIjtcclxuICBASW5wdXQoKSBhcGlVUkw6IGFueSA9ICdodHRwczovL2VtdW5hdGVtcGxhdGUuYWFhZGV2LmluZm8vQXBpLyc7XHJcbiAgQE91dHB1dCgpIEdldFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgQmx1clZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICByYW5kS2V5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDApICsgMTtcclxuICBzaG93TGlzdCA9IGZhbHNlO1xyXG4gIGxpc3REYXRhOiBhbnkgPSBbXTtcclxuICBHZW5lcmljVG9rZW46IGFueSA9IFwiXCI7XHJcbiAgbGVmdENzcyA9IFwiYXV0b1wiO1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ2V0VG9rZW4oKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuTGFiZWxTdHlsZSAhPSB1bmRlZmluZWQgJiYgZXZlbnQuTGFiZWxTdHlsZS5jdXJyZW50VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGV0IGNzcyA9IGV2ZW50LkxhYmVsU3R5bGUuY3VycmVudFZhbHVlO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWMtd2lkdGgnLCBjc3NbJ2Mtd2lkdGgnXSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tYy1oZWlnaHQnLCBjc3NbJ2MtaGVpZ2h0J10pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWxhYmVsLWxlZnQnLCBjc3NbJ2xhYmVsLWxlZnQnXSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tbGFiZWwtdG9wJywgY3NzWydsYWJlbC10b3AnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LlZhbHVlU3R5bGUgIT0gdW5kZWZpbmVkICYmIGV2ZW50LlZhbHVlU3R5bGUuY3VycmVudFZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGxldCBjc3MgPSBldmVudC5WYWx1ZVN0eWxlLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWx1ZS1sZWZ0JywgY3NzWyd2YWx1ZS1sZWZ0J10pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlLXRvcCcsIGNzc1sndmFsdWUtdG9wJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgR2V0VmFsdWVFdmVudChldmVudCkge1xyXG4gICAgdmFyIGdldFZhbCA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgdGhpcy5HZXRWYWx1ZS5lbWl0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBPbkJsdXJFdmVudChldmVudCkge1xyXG4gICAgdGhpcy5CbHVyVmFsdWUuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBpZiAodGhpcy5HZW5lcmljVG9rZW4gPT0gXCJcIikge1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVVJMICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmljVG9rZW4gPSByZXNbXCJHZW5lcmljVG9rZW5cIl07XHJcbiAgICAgICAgdGhpcy5nZXRHbG9iYWxGaWVsZCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEdsb2JhbEZpZWxkKCkge1xyXG4gICAgY29uc3QgdXJsID0gdGhpcy5hcGlVUkwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9cIiArIHRoaXMuc2NoZW1hICsgXCIvXCIgKyB0aGlzLnByb2NlZHVyZSArIFwiP2FwaV9rZXk9XCIgKyB0aGlzLkdlbmVyaWNUb2tlbjtcclxuICAgIHRoaXMuaHR0cC5wb3N0KHVybCwge30sIHRoaXMuaHR0cE9wdGlvbkpTT04pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBbXTtcclxuICAgICAgICB0ZW1wID0gcmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgICAgICBpZDogdGVtcFtpXS5Db2RlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRlbXBbaV0uRGVzY3JpcHRpb25cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMubGlzdERhdGEucHVzaCh0ZW1wW2ldLkRlc2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5saXN0RGF0YSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgIHRoaXMubGlzdERhdGEgPSBbXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZmluZENob2ljZXMgPSAoc2VhcmNoVGV4dDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5saXN0RGF0YS5maWx0ZXIoaXRlbSA9PlxyXG4gICAgICBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENob2ljZUxhYmVsID0gKGNob2ljZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodGhpcy5UcmlnZ2VyQ2hhcmFjdGVyICE9PSAneycpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuVHJpZ2dlckNoYXJhY3RlciArIGNob2ljZSArICcgJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAneycgKyBjaG9pY2UgKyAnfSAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXX0=