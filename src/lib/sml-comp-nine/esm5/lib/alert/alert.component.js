import { __decorate } from "tslib";
import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.success = function () {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'success'
        });
    };
    AlertComponent.prototype.error = function () {
        Swal.fire({
            title: 'Oops...',
            text: 'Something went wrong!',
            type: 'error',
        });
    };
    AlertComponent.prototype.info = function () {
        Swal.fire({
            title: 'Done!',
            text: 'This is not implemented yet :/',
            type: 'info'
        });
    };
    AlertComponent.prototype.warning = function () {
        Swal.fire({
            title: 'Done!',
            imageUrl: 'https://unsplash.it/400/200',
            text: 'This is not implemented yet :/',
            type: 'warning'
        });
    };
    AlertComponent.prototype.doubt = function () {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    AlertComponent.prototype.delete = function () {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(function (result) {
            if (result.value) {
                Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };
    AlertComponent = __decorate([
        Component({
            selector: 'sml-alert',
            template: "\n  <div class=\"d-flex justify-content-between\">\n<button (click)=\"success()\" class=\"btn btn-success btn-sm w-100 mx-1\">\n  Success\n</button>\n<button  (click)=\"error()\" class=\"btn btn-danger btn-sm w-100 mx-1\">\n  Error\n</button>\n<button  (click)=\"info()\" class=\"btn btn-primary btn-sm w-100 mx-1\">\nInfo\n</button>\n<button  (click)=\"doubt()\" class=\"btn btn-info btn-sm w-100 mx-1\">\n  Doubt\n</button>\n<button  (click)=\"warning()\" class=\"btn btn-warning btn-sm w-100 mx-1\">\n  Warning\n</button> \n<button class=\"btn btn-primary btn-sm\" (click)=\"delete()\">Delete File</button>\n</div>\n  ",
            styles: ["\n  \n  "]
        })
    ], AlertComponent);
    return AlertComponent;
}());
export { AlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc21sLWNvbXAtbmluZS8iLCJzb3VyY2VzIjpbImxpYi9hbGVydC9hbGVydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sSUFBSSxNQUFNLGlDQUFpQyxDQUFBO0FBNEJsRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNSLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLGdDQUFnQztZQUN0QyxJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDUixLQUFLLEVBQUUsU0FBUztZQUNoQixJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLElBQUksRUFBRSxPQUFPO1NBQ2QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsZ0NBQWdDO1lBQ3RDLElBQUksRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLElBQUksRUFBRSxnQ0FBZ0M7WUFDdEMsSUFBSSxFQUFFLFNBQVM7U0FDaEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLHNEQUFzRDtZQUM1RCxJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxnQkFBZ0IsRUFBRSxhQUFhO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUNQLFVBQVUsRUFDVix1Q0FBdUMsRUFDdkMsU0FBUyxDQUNSLENBQUE7Z0JBQ0gsOERBQThEO2dCQUM5RCxxREFBcUQ7YUFDdEQ7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUNQLFdBQVcsRUFDWCxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUNOLENBQUE7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLHNEQUFzRDtZQUM1RCxJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxnQkFBZ0IsRUFBRSxhQUFhO1NBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ2IsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUNQLFVBQVUsRUFDVix1Q0FBdUMsRUFDdkMsU0FBUyxDQUNSLENBQUE7Z0JBQ0gsOERBQThEO2dCQUM5RCxxREFBcUQ7YUFDdEQ7aUJBQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUNQLFdBQVcsRUFDWCxnQ0FBZ0MsRUFDaEMsT0FBTyxDQUNOLENBQUE7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQTdGVSxjQUFjO1FBMUIxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsK21CQW1CVDtxQkFDUSxVQUVSO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FnRzFCO0lBQUQscUJBQUM7Q0FBQSxBQWhHRCxJQWdHQztTQWhHWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mi9kaXN0L3N3ZWV0YWxlcnQyLmpzJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbWwtYWxlcnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG48YnV0dG9uIChjbGljayk9XCJzdWNjZXNzKClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gdy0xMDAgbXgtMVwiPlxyXG4gIFN1Y2Nlc3NcclxuPC9idXR0b24+XHJcbjxidXR0b24gIChjbGljayk9XCJlcnJvcigpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc20gdy0xMDAgbXgtMVwiPlxyXG4gIEVycm9yXHJcbjwvYnV0dG9uPlxyXG48YnV0dG9uICAoY2xpY2spPVwiaW5mbygpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIHctMTAwIG14LTFcIj5cclxuSW5mb1xyXG48L2J1dHRvbj5cclxuPGJ1dHRvbiAgKGNsaWNrKT1cImRvdWJ0KClcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tc20gdy0xMDAgbXgtMVwiPlxyXG4gIERvdWJ0XHJcbjwvYnV0dG9uPlxyXG48YnV0dG9uICAoY2xpY2spPVwid2FybmluZygpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmcgYnRuLXNtIHctMTAwIG14LTFcIj5cclxuICBXYXJuaW5nXHJcbjwvYnV0dG9uPiBcclxuPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIiAoY2xpY2spPVwiZGVsZXRlKClcIj5EZWxldGUgRmlsZTwvYnV0dG9uPlxyXG48L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICBcclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxlcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKCl7XHJcbiAgICBTd2FsLmZpcmUoe1xyXG4gICAgICB0aXRsZTogJ0RvbmUhJyxcclxuICAgICAgdGV4dDogJ1RoaXMgaXMgbm90IGltcGxlbWVudGVkIHlldCA6LycsXHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyAgICAgXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIGVycm9yKCl7ICAgIFxyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdPb3BzLi4uJyxcclxuICAgICAgdGV4dDogJ1NvbWV0aGluZyB3ZW50IHdyb25nIScsXHJcbiAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgaW5mbygpe1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdEb25lIScsXHJcbiAgICAgIHRleHQ6ICdUaGlzIGlzIG5vdCBpbXBsZW1lbnRlZCB5ZXQgOi8nLFxyXG4gICAgICB0eXBlOiAnaW5mbycgICAgIFxyXG4gICAgfSkgXHJcbiAgfSBcclxuXHJcbiAgd2FybmluZygpe1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdEb25lIScsXHJcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMjAwJyxcclxuICAgICAgdGV4dDogJ1RoaXMgaXMgbm90IGltcGxlbWVudGVkIHlldCA6LycsXHJcbiAgICAgIHR5cGU6ICd3YXJuaW5nJyAgICAgXHJcbiAgICB9KSBcclxuICB9IFxyXG5cclxuICBkb3VidCgpe1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6ICdBcmUgeW91IHN1cmU/JyxcclxuICAgICAgdGV4dDogJ1lvdSB3aWxsIG5vdCBiZSBhYmxlIHRvIHJlY292ZXIgdGhpcyBpbWFnaW5hcnkgZmlsZSEnLFxyXG4gICAgICB0eXBlOiAncXVlc3Rpb24nLFxyXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1llcywgZGVsZXRlIGl0IScsXHJcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdObywga2VlcCBpdCdcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKFxyXG4gICAgICAgICAgJ0RlbGV0ZWQhJyxcclxuICAgICAgICAgICdZb3VyIGltYWdpbmFyeSBmaWxlIGhhcyBiZWVuIGRlbGV0ZWQuJyxcclxuICAgICAgICAgICdzdWNjZXNzJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhhbmRsaW5nIGRpc21pc3NhbHMgcGxlYXNlIHZpc2l0XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2hhbmRsaW5nLWRpc21pc3NhbHNcclxuICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gU3dhbC5EaXNtaXNzUmVhc29uLmNhbmNlbCkge1xyXG4gICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICdDYW5jZWxsZWQnLFxyXG4gICAgICAgICAgJ1lvdXIgaW1hZ2luYXJ5IGZpbGUgaXMgc2FmZSA6KScsXHJcbiAgICAgICAgICAnZXJyb3InXHJcbiAgICAgICAgICApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZWxldGUoKXtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiAnQXJlIHlvdSBzdXJlPycsXHJcbiAgICAgIHRleHQ6ICdZb3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIHRoaXMgaW1hZ2luYXJ5IGZpbGUhJyxcclxuICAgICAgdHlwZTogJ3F1ZXN0aW9uJyxcclxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICdZZXMsIGRlbGV0ZSBpdCEnLFxyXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTm8sIGtlZXAgaXQnXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xyXG4gICAgICAgIFN3YWwuZmlyZShcclxuICAgICAgICAgICdEZWxldGVkIScsXHJcbiAgICAgICAgICAnWW91ciBpbWFnaW5hcnkgZmlsZSBoYXMgYmVlbiBkZWxldGVkLicsXHJcbiAgICAgICAgICAnc3VjY2VzcydcclxuICAgICAgICAgIClcclxuICAgICAgICAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBoYW5kbGluZyBkaXNtaXNzYWxzIHBsZWFzZSB2aXNpdFxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNoYW5kbGluZy1kaXNtaXNzYWxzXHJcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09IFN3YWwuRGlzbWlzc1JlYXNvbi5jYW5jZWwpIHtcclxuICAgICAgICBTd2FsLmZpcmUoXHJcbiAgICAgICAgICAnQ2FuY2VsbGVkJyxcclxuICAgICAgICAgICdZb3VyIGltYWdpbmFyeSBmaWxlIGlzIHNhZmUgOiknLFxyXG4gICAgICAgICAgJ2Vycm9yJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==