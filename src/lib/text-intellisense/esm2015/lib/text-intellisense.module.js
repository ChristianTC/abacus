import { NgModule } from '@angular/core';
import { TextIntellisenseComponent } from './text-intellisense.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { polyfill as keyboardEventKeyPolyfill } from 'keyboardevent-key-polyfill';
import { TextInputAutocompleteModule } from 'angular-text-input-autocomplete';
import * as ɵngcc0 from '@angular/core';
keyboardEventKeyPolyfill();
export class TextIntellisense {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1pbnRlbGxpc2Vuc2UubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90ZXh0aW50ZWxsaXNlbnNlL3NyYy9saWIvdGV4dC1pbnRlbGxpc2Vuc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxJQUFJLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0FBRTlFLHdCQUF3QixFQUFFLENBQUM7QUFZM0IsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7Q0FBSTsrQkFWaEMsUUFBUSxTQUFDLGtCQUNSLFlBQVksRUFBRSxDQUFDLHlCQUF5QixDQUFDLGtCQUN6QyxPQUFPLEVBQUUsc0JBQ1IsWUFBWSxzQkFDWixXQUFXLHNCQUNYO2VBQWdCO2dCQUNoQjtpQkFBMkIsa0JBQzNCLGtCQUNELE9BQU8sRUFBRSxDQUFDLHlCQUF5QixDQUFDLGNBQ3JDOzs7Ozs7Ozs7Ozs7OzBCQUNJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGV4dEludGVsbGlzZW5zZUNvbXBvbmVudCB9IGZyb20gJy4vdGV4dC1pbnRlbGxpc2Vuc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IHBvbHlmaWxsIGFzIGtleWJvYXJkRXZlbnRLZXlQb2x5ZmlsbCB9IGZyb20gJ2tleWJvYXJkZXZlbnQta2V5LXBvbHlmaWxsJztcclxuaW1wb3J0IHsgVGV4dElucHV0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnYW5ndWxhci10ZXh0LWlucHV0LWF1dG9jb21wbGV0ZSc7XHJcblxyXG5rZXlib2FyZEV2ZW50S2V5UG9seWZpbGwoKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVGV4dEludGVsbGlzZW5zZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gIFx0Q29tbW9uTW9kdWxlLFxyXG4gIFx0Rm9ybXNNb2R1bGUsXHJcbiAgXHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gIFx0VGV4dElucHV0QXV0b2NvbXBsZXRlTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbVGV4dEludGVsbGlzZW5zZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRJbnRlbGxpc2Vuc2UgeyB9XHJcbiJdfQ==