import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let ImageUploadBoxComponent = class ImageUploadBoxComponent {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://assist.aaadev.info/api/';
        this.fileurl = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.FilesGroupId = "0";
        this.FileId = "0";
        this.fileResponse = new EventEmitter;
        this.allowFiles = ['image/jpeg', 'image/png'];
        this.GenericToken = "";
        this.imagesData = {};
        this.isLoading = false;
        this.error_message = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getToken();
    }
    getToken() {
        if (this.GenericToken == "") {
            this.http.get(this.apiURL + "GetSystemInfo?passcode=flipper613").subscribe(res => {
                this.GenericToken = res["GenericToken"];
                this.getListdata();
            });
        }
        else {
            this.getListdata();
        }
    }
    getListdata() {
        if (this.FilesGroupId) {
            const body = {
                FilesGroupId: this.FilesGroupId
            };
            const url = this.apiURL + "Data/Exec/" + this.database + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                let temp = [];
                this.imagesData = {};
                temp = res;
                for (let i = 0; i < temp.length; i++) {
                    if (this.FileId == temp[i].FilesId) {
                        let nType = {
                            path: this.fileurl + temp[i].FileUrl,
                            description: temp[i].Description,
                            FilesId: temp[i].FilesId,
                            type: "Image"
                        };
                        this.imagesData = nType;
                    }
                }
                this.isLoading = true;
            }, erorr => {
                this.isLoading = true;
            });
        }
        else {
            this.isLoading = true;
        }
    }
    uploadAndProgress(files) {
        console.log(files);
        let flag = false;
        for (let j = 0; j < files.length; j++) {
            let sel = this.allowFiles.filter(d => d == files[j].type);
            if (sel.length == 0) {
                flag = true;
                break;
            }
        }
        if (flag) {
            this.error_message = "Invalid File Format. Allow Only This Format " + this.allowFiles.toString() + ".";
        }
        else {
            this.error_message = "";
            for (let i = 0; i < files.length; i++) {
                var formData = new FormData();
                formData.append('file', files[i], files[i].name);
                formData.append('id', '0');
                formData.append('filegroupid', this.FilesGroupId);
                formData.append('mediaType', 'example');
                formData.append('description', files[i].name);
                this.http.post(this.apiURL + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' })
                    .subscribe(event => {
                    if (event.type === HttpEventType.UploadProgress) {
                        this.percentDone = Math.round(100 * event.loaded / event.total);
                    }
                    else if (event instanceof HttpResponse) {
                        this.fileResponse.emit(event.body);
                        this.FilesGroupId = event.body['FilesGroupId'];
                        setTimeout(() => {
                            this.percentDone = 0;
                            let nType = {
                                path: this.fileurl + event.body['FileUrl'],
                                description: event.body['Description'],
                                FilesId: event.body['FilesId'],
                                type: "Image"
                            };
                            this.imagesData = nType;
                        }, 3000);
                    }
                });
            }
        }
    }
    deleteFIles(value) {
        this.http.delete(this.apiURL + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.imagesData = {};
            }
        });
    }
};
ImageUploadBoxComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "apiURL", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "database", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FilesGroupId", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "FileId", void 0);
__decorate([
    Output()
], ImageUploadBoxComponent.prototype, "fileResponse", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "allowFiles", void 0);
__decorate([
    Input()
], ImageUploadBoxComponent.prototype, "GenericToken", void 0);
ImageUploadBoxComponent = __decorate([
    Component({
        selector: 'sml-image-upload-box',
        template: `
  <div class="error-msg" *ngIf="error_message != ''">{{error_message}}</div>
<div *ngIf="!imagesData.path && isLoading" class="uploadImage d-flex align-items-center flex-column">
  <i class="fa fa-camera fz24"></i>
  <p>Upload Image</p>
  <input type="file" id="fileinput" (change)="uploadAndProgress($event.target.files)" class="drag" />
  <div class="fz24">
    <span *ngIf="percentDone"> Upload Percent: {{percentDone}}%</span>
  </div>
  <div class="progressContainer" *ngIf="percentDone">
    <div class="procesbar"></div>
    <div class="w-100 z9">
      <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
    </div>
  </div>
  </div>
  <div *ngIf="imagesData.path && isLoading" class="preview-img">
    <img [src]="imagesData.path" height="147" width="100%" onerror="this.onerror=null; this.src='assets/404_images.png'" class="hover-shadow cursor">
    <span class="remove_icon">
      <i class="fa fa-times" (click)="deleteFIles(imagesData.FilesId)"></i>
    </span>
  </div>
  `,
        styles: [`
  .uploadImage{background-color:#777777;border-radius:3px;padding:40px 20px;width:100%;font-size:14px;color:#cccccc;}
  .uploadImage .fa{font-size:30px;}
  .remove_icon{position:absolute;right:13px;top:-2px;cursor:pointer;}
  .drag{width:100%;height:100%;position:absolute;top:0;left:0;opacity:0;z-index:999999;}
  img.hover-shadow{transition:0.3s;}
  .hover-shadow:hover{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}
  .cursor{cursor:pointer;}
  .preview-img{position:relative;width:100%;}
  .progressContainer{width:100%;position:relative;top:2px;}
  .progressbar{height:2px;background:green;float:left;}
  .procesbar{background:#ccc;height:2px;position:absolute;top:0;left:0;width:100%;}
  .z9{z-index:99;position:relative;}
  .error-msg{font-size:13px;text-align:center;color:red}
  `]
    })
], ImageUploadBoxComponent);
export { ImageUploadBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL2ltYWdlLXVwbG9hZC1ib3gvaW1hZ2UtdXBsb2FkLWJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBMkM1RixJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF1QjtJQW1CbEMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWpCM0IsV0FBTSxHQUFRLGdDQUFnQyxDQUFDO1FBQy9DLFlBQU8sR0FBVyxrQ0FBa0MsQ0FBQztRQUNyRCxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGlCQUFZLEdBQVEsR0FBRyxDQUFDO1FBQ3hCLFdBQU0sR0FBUSxHQUFHLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztRQUNqQyxlQUFVLEdBQVEsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDOUMsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLGtCQUFhLEdBQVEsRUFBRSxDQUFDO1FBRXhCLG1CQUFjLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkMsQ0FBQztTQUNILENBQUM7SUFDc0MsQ0FBQztJQUN6QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRCxRQUFRO1FBQ04sSUFBSSxJQUFJ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O0FBQ2pDO0lBQVIsS0FBSyxFQUFFOzJEQUErQztBQUM5QztJQUFSLEtBQUssRUFBRTs2REFBd0I7QUFUckIsdUJBQXVCO0lBekNuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDtpQkFDUTs7Ozs7Ozs7Ozs7Ozs7R0FjUjtLQUNGLENBQUM7R0FDVyx1QkFBdUIsQ0FnSG5DO1NBaEhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLWltYWdlLXVwbG9hZC1ib3gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImVycm9yLW1zZ1wiICpuZ0lmPVwiZXJyb3JfbWVzc2FnZSAhPSAnJ1wiPnt7ZXJyb3JfbWVzc2FnZX19PC9kaXY+XHJcbjxkaXYgKm5nSWY9XCIhaW1hZ2VzRGF0YS5wYXRoICYmIGlzTG9hZGluZ1wiIGNsYXNzPVwidXBsb2FkSW1hZ2UgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gIDxpIGNsYXNzPVwiZmEgZmEtY2FtZXJhIGZ6MjRcIj48L2k+XHJcbiAgPHA+VXBsb2FkIEltYWdlPC9wPlxyXG4gIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGlkPVwiZmlsZWlucHV0XCIgKGNoYW5nZSk9XCJ1cGxvYWRBbmRQcm9ncmVzcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIGNsYXNzPVwiZHJhZ1wiIC8+XHJcbiAgPGRpdiBjbGFzcz1cImZ6MjRcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwicGVyY2VudERvbmVcIj4gVXBsb2FkIFBlcmNlbnQ6IHt7cGVyY2VudERvbmV9fSU8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInByb2dyZXNzQ29udGFpbmVyXCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInByb2Nlc2JhclwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInctMTAwIHo5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGguJSc6cGVyY2VudERvbmV9XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VzRGF0YS5wYXRoICYmIGlzTG9hZGluZ1wiIGNsYXNzPVwicHJldmlldy1pbWdcIj5cclxuICAgIDxpbWcgW3NyY109XCJpbWFnZXNEYXRhLnBhdGhcIiBoZWlnaHQ9XCIxNDdcIiB3aWR0aD1cIjEwMCVcIiBvbmVycm9yPVwidGhpcy5vbmVycm9yPW51bGw7IHRoaXMuc3JjPSdhc3NldHMvNDA0X2ltYWdlcy5wbmcnXCIgY2xhc3M9XCJob3Zlci1zaGFkb3cgY3Vyc29yXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInJlbW92ZV9pY29uXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiAoY2xpY2spPVwiZGVsZXRlRklsZXMoaW1hZ2VzRGF0YS5GaWxlc0lkKVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAudXBsb2FkSW1hZ2V7YmFja2dyb3VuZC1jb2xvcjojNzc3Nzc3O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6NDBweCAyMHB4O3dpZHRoOjEwMCU7Zm9udC1zaXplOjE0cHg7Y29sb3I6I2NjY2NjYzt9XHJcbiAgLnVwbG9hZEltYWdlIC5mYXtmb250LXNpemU6MzBweDt9XHJcbiAgLnJlbW92ZV9pY29ue3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjEzcHg7dG9wOi0ycHg7Y3Vyc29yOnBvaW50ZXI7fVxyXG4gIC5kcmFne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO29wYWNpdHk6MDt6LWluZGV4Ojk5OTk5OTt9XHJcbiAgaW1nLmhvdmVyLXNoYWRvd3t0cmFuc2l0aW9uOjAuM3M7fVxyXG4gIC5ob3Zlci1zaGFkb3c6aG92ZXJ7Ym94LXNoYWRvdzowIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO31cclxuICAuY3Vyc29ye2N1cnNvcjpwb2ludGVyO31cclxuICAucHJldmlldy1pbWd7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTt9XHJcbiAgLnByb2dyZXNzQ29udGFpbmVye3dpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dG9wOjJweDt9XHJcbiAgLnByb2dyZXNzYmFye2hlaWdodDoycHg7YmFja2dyb3VuZDpncmVlbjtmbG9hdDpsZWZ0O31cclxuICAucHJvY2VzYmFye2JhY2tncm91bmQ6I2NjYztoZWlnaHQ6MnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO31cclxuICAuejl7ei1pbmRleDo5OTtwb3NpdGlvbjpyZWxhdGl2ZTt9XHJcbiAgLmVycm9yLW1zZ3tmb250LXNpemU6MTNweDt0ZXh0LWFsaWduOmNlbnRlcjtjb2xvcjpyZWR9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQm94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgYXBpVVJMOiBhbnkgPSAnaHR0cDovL2Fzc2lzdC5hYWFkZXYuaW5mby9hcGkvJztcclxuICBASW5wdXQoKSBmaWxldXJsOiBzdHJpbmcgPSAnaHR0cDovL2Fzc2lzdC5hYWFkZXYuaW5mby9tZWRpYS8nO1xyXG4gIEBJbnB1dCgpIGRhdGFiYXNlOiBzdHJpbmcgPSAnQVNTSVNUJztcclxuICBASW5wdXQoKSBGaWxlc0dyb3VwSWQ6IGFueSA9IFwiMFwiO1xyXG4gIEBJbnB1dCgpIEZpbGVJZDogYW55ID0gXCIwXCI7XHJcbiAgQE91dHB1dCgpIGZpbGVSZXNwb25zZSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQElucHV0KCkgYWxsb3dGaWxlczogYW55ID0gWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCJcIjtcclxuICBpbWFnZXNEYXRhOiBhbnkgPSB7fTtcclxuICBpc0xvYWRpbmc6IGFueSA9IGZhbHNlO1xyXG4gIGVycm9yX21lc3NhZ2U6IGFueSA9ICcnO1xyXG4gIHBlcmNlbnREb25lOiBudW1iZXI7XHJcbiAgaHR0cE9wdGlvbkpTT04gPSB7XHJcbiAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VG9rZW4oKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKSB7XHJcbiAgICBpZiAodGhpcy5HZW5lcmljVG9rZW4gPT0gXCJcIikge1xyXG4gICAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYXBpVVJMICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgdGhpcy5HZW5lcmljVG9rZW4gPSByZXNbXCJHZW5lcmljVG9rZW5cIl07XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0ZGF0YSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdGRhdGEoKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0TGlzdGRhdGEoKSB7XHJcbiAgICBpZiAodGhpcy5GaWxlc0dyb3VwSWQpIHtcclxuICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBGaWxlc0dyb3VwSWQ6IHRoaXMuRmlsZXNHcm91cElkXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuYXBpVVJMICsgXCJEYXRhL0V4ZWMvXCIgKyB0aGlzLmRhdGFiYXNlICsgXCIvY29yZS9GSUxFU19MaXN0P2FwaV9rZXk9XCIgKyB0aGlzLkdlbmVyaWNUb2tlbjtcclxuICAgICAgdGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB0aGlzLmh0dHBPcHRpb25KU09OKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBsZXQgdGVtcDogYW55ID0gW107XHJcbiAgICAgICAgdGhpcy5pbWFnZXNEYXRhID0ge307XHJcbiAgICAgICAgdGVtcCA9IHJlcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLkZpbGVJZCA9PSB0ZW1wW2ldLkZpbGVzSWQpIHtcclxuICAgICAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgICAgICAgIHBhdGg6IHRoaXMuZmlsZXVybCArIHRlbXBbaV0uRmlsZVVybCxcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGVtcFtpXS5EZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBGaWxlc0lkOiB0ZW1wW2ldLkZpbGVzSWQsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJJbWFnZVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNEYXRhID0gblR5cGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSwgZXJvcnIgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwbG9hZEFuZFByb2dyZXNzKGZpbGVzOiBGaWxlW10pIHtcclxuICAgIGNvbnNvbGUubG9nKGZpbGVzKTtcclxuICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGZpbGVzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgIGxldCBzZWwgPSB0aGlzLmFsbG93RmlsZXMuZmlsdGVyKGQgPT4gZCA9PSBmaWxlc1tqXS50eXBlKTtcclxuICAgICAgaWYgKHNlbC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmxhZykge1xyXG4gICAgICB0aGlzLmVycm9yX21lc3NhZ2UgPSBcIkludmFsaWQgRmlsZSBGb3JtYXQuIEFsbG93IE9ubHkgVGhpcyBGb3JtYXQgXCIgKyB0aGlzLmFsbG93RmlsZXMudG9TdHJpbmcoKSArIFwiLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lcnJvcl9tZXNzYWdlID0gXCJcIjtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGVzW2ldLCBmaWxlc1tpXS5uYW1lKVxyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaWQnLCAnMCcpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZWdyb3VwaWQnLCB0aGlzLkZpbGVzR3JvdXBJZCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdtZWRpYVR5cGUnLCAnZXhhbXBsZScpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCBmaWxlc1tpXS5uYW1lKTtcclxuICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVSTCArICd1cGxvYWRlci91cGxvYWRuZXcnLCBmb3JtRGF0YSwgeyByZXBvcnRQcm9ncmVzczogdHJ1ZSwgb2JzZXJ2ZTogJ2V2ZW50cycgfSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSBNYXRoLnJvdW5kKDEwMCAqIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmlsZVJlc3BvbnNlLmVtaXQoZXZlbnQuYm9keSk7XHJcbiAgICAgICAgICAgICAgdGhpcy5GaWxlc0dyb3VwSWQgPSBldmVudC5ib2R5WydGaWxlc0dyb3VwSWQnXTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5UeXBlID0ge1xyXG4gICAgICAgICAgICAgICAgICBwYXRoOiB0aGlzLmZpbGV1cmwgKyBldmVudC5ib2R5WydGaWxlVXJsJ10sXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudC5ib2R5WydEZXNjcmlwdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICBGaWxlc0lkOiBldmVudC5ib2R5WydGaWxlc0lkJ10sXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNEYXRhID0gblR5cGU7XHJcbiAgICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGVsZXRlRklsZXModmFsdWUpIHtcclxuICAgIHRoaXMuaHR0cC5kZWxldGUodGhpcy5hcGlVUkwgKyBcIk1vZGVscy9maWxlcy9cIiArIHZhbHVlICsgXCI/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzRGF0YSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19