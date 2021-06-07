import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
let AlertComponent = class AlertComponent {
    constructor() { }
    ngOnInit() {
    }
    success() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'success'
        });
    }
    error() {
        Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong!',
            type: 'error',
        });
    }
    info() {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'info'
        });
    }
    warning() {
        Swal.fire({
            title: 'Done!',
            imageUrl: 'https://unsplash.it/400/200',
            text: 'This is not implemented yet :/',
            type: 'warning'
        });
    }
    doubt() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
    delete() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    }
};
AlertComponent = __decorate([
    Component({
        selector: 'sml-alert',
        template: `
  <div class="d-flex justify-content-between">
<button (click)="success()" class="btn btn-success btn-sm w-100 mx-1">
  Success
</button>
<button  (click)="error()" class="btn btn-danger btn-sm w-100 mx-1">
  Error
</button>
<button  (click)="info()" class="btn btn-primary btn-sm w-100 mx-1">
Info
</button>
<button  (click)="doubt()" class="btn btn-info btn-sm w-100 mx-1">
  Doubt
</button>
<button  (click)="warning()" class="btn btn-warning btn-sm w-100 mx-1">
  Warning
</button> 
<button class="btn btn-primary btn-sm" (click)="delete()">Delete File</button>
</div>
  `,
        styles: [`
  
  `]
    })
], AlertComponent);
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sSUFBSSxNQUFNLGlDQUFpQyxDQUFBO0FBNEJsRCxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBRXpCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFFUixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLHVCQUF1QjtZQUM3QixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLGdDQUFnQztZQUN0QyxJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLDZCQUE2QjtZQUN2QyxJQUFJLEVBQUUsZ0NBQWdDO1lBQ3RDLElBQUksRUFBRSxTQUFTO1NBQ2hCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUssRUFBRSxlQUFlO1lBQ3RCLElBQUksRUFBRSxzREFBc0Q7WUFDNUQsSUFBSSxFQUFFLFVBQVU7WUFDaEIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsZ0JBQWdCLEVBQUUsYUFBYTtTQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUNQLFVBQVUsRUFDVix1Q0FBdUMsRUFDdkMsU0FBUyxDQUNSLENBQUE7Z0JBQ0gsOERBQThEO2dCQUM5RCxxREFBcUQ7YUFDdEQ7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUNQLFdBQVcsRUFDWCxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUNOLENBQUE7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLHNEQUFzRDtZQUM1RCxJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxnQkFBZ0IsRUFBRSxhQUFhO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQixJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxJQUFJLENBQ1AsVUFBVSxFQUNWLHVDQUF1QyxFQUN2QyxTQUFTLENBQ1IsQ0FBQTtnQkFDSCw4REFBOEQ7Z0JBQzlELHFEQUFxRDthQUN0RDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQ1AsV0FBVyxFQUNYLGdDQUFnQyxFQUNoQyxPQUFPLENBQ04sQ0FBQTthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBR0YsQ0FBQTtBQWhHWSxjQUFjO0lBMUIxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7aUJBQ1E7O0dBRVI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQWdHMUI7U0FoR1ksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5qcydcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuPGJ1dHRvbiAoY2xpY2spPVwic3VjY2VzcygpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtIHctMTAwIG14LTFcIj5cclxuICBTdWNjZXNzXHJcbjwvYnV0dG9uPlxyXG48YnV0dG9uICAoY2xpY2spPVwiZXJyb3IoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIHctMTAwIG14LTFcIj5cclxuICBFcnJvclxyXG48L2J1dHRvbj5cclxuPGJ1dHRvbiAgKGNsaWNrKT1cImluZm8oKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSB3LTEwMCBteC0xXCI+XHJcbkluZm9cclxuPC9idXR0b24+XHJcbjxidXR0b24gIChjbGljayk9XCJkb3VidCgpXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLXNtIHctMTAwIG14LTFcIj5cclxuICBEb3VidFxyXG48L2J1dHRvbj5cclxuPGJ1dHRvbiAgKGNsaWNrKT1cIndhcm5pbmcoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIGJ0bi1zbSB3LTEwMCBteC0xXCI+XHJcbiAgV2FybmluZ1xyXG48L2J1dHRvbj4gXHJcbjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCIgKGNsaWNrKT1cImRlbGV0ZSgpXCI+RGVsZXRlIEZpbGU8L2J1dHRvbj5cclxuPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgXHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFsZXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgc3VjY2Vzcygpe1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdEb25lIScsXHJcbiAgICAgIHRleHQ6ICdUaGlzIGlzIG5vdCBpbXBsZW1lbnRlZCB5ZXQgOi8nLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycgICAgIFxyXG4gICAgfSkgXHJcbiAgfVxyXG5cclxuICBlcnJvcigpeyAgICBcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnT29wcy4uLicsXHJcbiAgICAgIHRleHQ6ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnLFxyXG4gICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGluZm8oKXtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnRG9uZSEnLFxyXG4gICAgICB0ZXh0OiAnVGhpcyBpcyBub3QgaW1wbGVtZW50ZWQgeWV0IDovJyxcclxuICAgICAgdHlwZTogJ2luZm8nICAgICBcclxuICAgIH0pIFxyXG4gIH0gXHJcblxyXG4gIHdhcm5pbmcoKXtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnRG9uZSEnLFxyXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMCcsXHJcbiAgICAgIHRleHQ6ICdUaGlzIGlzIG5vdCBpbXBsZW1lbnRlZCB5ZXQgOi8nLFxyXG4gICAgICB0eXBlOiAnd2FybmluZycgICAgIFxyXG4gICAgfSkgXHJcbiAgfSBcclxuXHJcbiAgZG91YnQoKXtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgIHRleHQ6ICdZb3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIHRoaXMgaW1hZ2luYXJ5IGZpbGUhJyxcclxuICAgICAgdHlwZTogJ3F1ZXN0aW9uJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8sIGtlZXAgaXQnXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAnWW91ciBpbWFnaW5hcnkgZmlsZSBoYXMgYmVlbiBkZWxldGVkLicsXHJcbiAgICAgICAgICAnc3VjY2VzcydcclxuICAgICAgICAgIClcclxuICAgICAgICAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzIHBsZWFzZSB2aXNpdFxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNoYW5kbGluZy1kaXNtaXNzYWxzXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi5jYW5jZWwpIHtcclxuICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAnQ2FuY2VsbGVkJyxcclxuICAgICAgICAgICdZb3VyIGltYWdpbmFyeSBmaWxlIGlzIHNhZmUgOiknLFxyXG4gICAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlKCl7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogJ0FyZSB5b3Ugc3VyZT8nLFxyXG4gICAgICB0ZXh0OiAnWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIGltYWdpbmFyeSBmaWxlIScsXHJcbiAgICAgIHR5cGU6ICdxdWVzdGlvbicsXHJcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnWWVzLCBkZWxldGUgaXQhJyxcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ05vLCBrZWVwIGl0J1xyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcclxuICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAnRGVsZXRlZCEnLFxyXG4gICAgICAgICAgJ1lvdXIgaW1hZ2luYXJ5IGZpbGUgaGFzIGJlZW4gZGVsZXRlZC4nLFxyXG4gICAgICAgICAgJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaGFuZGxpbmcgZGlzbWlzc2FscyBwbGVhc2UgdmlzaXRcclxuICAgICAgICAvLyBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jaGFuZGxpbmctZGlzbWlzc2Fsc1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSBTd2FsLkRpc21pc3NSZWFzb24uY2FuY2VsKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgJ0NhbmNlbGxlZCcsXHJcbiAgICAgICAgICAnWW91ciBpbWFnaW5hcnkgZmlsZSBpcyBzYWZlIDopJyxcclxuICAgICAgICAgICdlcnJvcidcclxuICAgICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=