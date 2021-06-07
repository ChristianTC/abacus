import { EventEmitter, Component, ElementRef, Input, Output, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { polyfill } from 'keyboardevent-key-polyfill';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';

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
TextIntellisenseComponent.decorators = [
    { type: Component, args: [{ selector: 'emuna-text-intellisense', template: "<div class=\"position-relative {{randKey}}\">\r\n\t<div class=\"emuna-controls\" [ngClass]=\"{'emuna-label-top': (LabelTop),'emuna-disabled': Disabled}\">\r\n\t\t<div class=\"emuna-common-control emuna-textarea-control\" [ngStyle]=\"BorderStyle\" [ngClass]=\"{'emuna-no-padding-top': (LabelName == ''),'emuna-disabled': Disabled}\">\r\n\t\t\t<mwl-text-input-autocomplete-container>\r\n\t\t\t<textarea mwlTextInputAutocomplete [id]=\"Id\" [name]=\"Name\" [class]=\"'emuna-form-control-textarea'\" [tabindex]=\"TabIndex\" [rows]=\"Rows\"\r\n\t\t\t [attr.maxlength]=\"Maxlength\" [(ngModel)]=\"Value\" [disabled]=\"Disabled\" [ngClass]=\"{'emuna-disabled': Disabled}\" [ngStyle]=\"ValueStyle\"\r\n\t\t\t (blur)=\"OnBlurEvent($event)\" (keyup)=\"GetValueEvent($event)\" [triggerCharacter]=\"TriggerCharacter\"\r\n        \t [findChoices]=\"findChoices\" [getChoiceLabel]=\"getChoiceLabel\"></textarea>\r\n        \t</mwl-text-input-autocomplete-container>\r\n\t\t\t<label *ngIf=\"LabelName != ''\" [ngStyle]=\"LabelStyle\" class=\"emuna-label\">{{LabelName}}</label>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n    ", styles: [":host{--c-height:30px;--c-width:100%;--label-left:5px;--label-top:5px;--text-dark:#1d2936;--text-theme:#3ec6f4;--text-white:#fff;--value-left:10px;--value-top:0px}.emuna-controls.emuna-label-top{position:relative}.emuna-controls.emuna-label-top .emuna-common-control{padding-top:0;position:inherit}.emuna-controls.emuna-label-top .emuna-common-control .emuna-label{left:0!important;top:-24px!important}.emuna-no-padding-top{padding-top:0!important}.emuna-label{color:var(--text-theme);left:var(--label-left);opacity:1;position:absolute;top:var(--label-top);transform:translateY(0);transition:all .2s}.emuna-textarea-control{background-color:var(--text-white);border:1px solid var(--text-theme);border-radius:0;max-width:100%;padding:15px 5px 0;position:relative}.emuna-form-control-textarea:focus{outline:none}.emuna-form-control-textarea{background-color:var(--text-white);border:none;color:var(--text-dark);display:block;font-size:16px;font-weight:400;height:calc(var(--c-height) + var(--value-top));max-width:100%;padding-left:var(--value-left);padding-top:3px;padding-top:var(--value-top);resize:none;width:var(--c-width)}.emuna-disabled{background-color:#e9ecef!important;cursor:not-allowed!important;opacity:.9!important;pointer-events:none!important}"] },] }
];
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

polyfill();
class TextIntellisense {
}
TextIntellisense.decorators = [
    { type: NgModule, args: [{
                declarations: [TextIntellisenseComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpClientModule,
                    TextInputAutocompleteModule
                ],
                exports: [TextIntellisenseComponent]
            },] }
];

/*
 * Public API Surface of list-search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TextIntellisense, TextIntellisenseComponent };
//# sourceMappingURL=text-intellisense.js.map
