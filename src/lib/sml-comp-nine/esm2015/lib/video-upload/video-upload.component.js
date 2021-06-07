import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let VideoUploadComponent = class VideoUploadComponent {
    constructor(http) {
        this.http = http;
        this.url = 'http://assist.aaadev.info/api/';
        this.path = 'http://assist.aaadev.info/media/';
        this.database = 'ASSIST';
        this.schema = "core";
        this.fileResponse = new EventEmitter;
        this.deletefileResponse = new EventEmitter;
        this.fileId = '0';
        this.fileGroupId = '0';
        this.GenericToken = "12fc01a7eea74138b9e7a35c90dadf7412fc01a7eea74138b9e7a35c90dadf74";
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        if (this.fileGroupId != '0' && this.fileGroupId != 0) {
            const body = {
                FilesGroupId: this.fileGroupId,
                ImageVideo: 'VIDEO'
            };
            const url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(files => {
                if (files != undefined && files != null && files != '') {
                    this.videoLink = this.path + files[0].FileUrl;
                    let arr = files[0].FileUrl.split(".");
                    this.thumbUrl = this.path + arr[0] + '.jpg';
                    this.fileId = files[0].FilesId;
                    console.log(this.fileId);
                }
            });
        }
    }
    uploadAndProgress(files) {
        for (let i = 0; i < files.length; i++) {
            var formData = new FormData();
            formData.append('file', files[i], files[i].name);
            formData.append('id', this.fileId);
            formData.append('filegroupid', this.fileGroupId);
            formData.append('mediaType', 'video');
            formData.append('description', files[i].name);
            this.http.post(this.url + 'VideoUploader/UploadNew', formData, { reportProgress: true, observe: 'events' })
                .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof HttpResponse) {
                    this.uploadSuccess = true;
                    setTimeout(() => {
                        this.uploadSuccess = false;
                        this.percentDone = 0;
                        this.fileResponse.emit(event.body);
                        this.videoLink = this.path + event.body['FileUrl'];
                        let arr = event.body['FileUrl'].split(".");
                        this.thumbUrl = this.path + arr[0] + '.jpg';
                    }, 3000);
                }
            });
        }
    }
    deleteFIles(fileId) {
        this.http.delete(this.url + "Models/files/" + fileId + "?api_key=" + this.GenericToken).subscribe(res => {
            if (res) {
                this.thumbUrl = '';
                this.videoLink = '';
                this.deletefileResponse.emit(res);
            }
        });
    }
};
VideoUploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], VideoUploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "path", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "database", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "schema", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "fileResponse", void 0);
__decorate([
    Output()
], VideoUploadComponent.prototype, "deletefileResponse", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "fileGroupId", void 0);
__decorate([
    Input()
], VideoUploadComponent.prototype, "GenericToken", void 0);
VideoUploadComponent = __decorate([
    Component({
        selector: 'sml-video-upload',
        template: `
  <div class="upload-area">
  <span class="uploadvideo" *ngIf="!percentDone && !thumbUrl">Upload Video </span>
  <img *ngIf="!percentDone && !thumbUrl" src="assets/video_upload.png" class="img-video-icon" />
  <a *ngIf="thumbUrl" target="_blank" [href]="videoLink"> <img  [src]="thumbUrl" width="248" height="150"/> </a>
  <input type="file" *ngIf="!thumbUrl" multiple class="file_input" id="upload" (change)="uploadAndProgress($event.target.files)" accept="video/*">
  <div class="progress-div" *ngIf="percentDone">
    <div class="fz14" *ngIf="uploadSuccess">
      <span>Uplaod Done</span>
    </div>
    <div class="fz14">
      <span>{{percentDone}}%</span>
    </div>
    <div class="progressContainer">
      <div class="procesbar"></div>
      <div class="w-100 z9">
        <div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
      </div>
    </div>
    </div>
    <span class="remove_icon" *ngIf="thumbUrl">
      <i class="fa fa-times" (click)="deleteFIles(fileId)"></i>
    </span>
  </div>
  `,
        styles: [`
  .upload-area{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}
  .img-video-icon{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}
  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}
  .progressContainer {width: 100%;padding-left: 5px;padding-right: 5px;}
  .progressbar {height: 9px;background: green;float: left;border-radius: 4px;}
  .fz14 {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}
  .progress-div{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}
  .remove_icon{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}
  .uploadvideo{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}
  `]
    })
], VideoUploadComponent);
export { VideoUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdmlkZW8tdXBsb2FkL3ZpZGVvLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUM1RixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW9CL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQW5CM0IsUUFBRyxHQUFXLGdDQUFnQyxDQUFDO1FBQy9DLFNBQUksR0FBVyxrQ0FBa0MsQ0FBQztRQUNsRCxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLFdBQU0sR0FBUSxNQUFNLENBQUM7UUFDcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUN2QyxXQUFNLEdBQVEsR0FBRyxDQUFDO1FBQ2xCLGdCQUFXLEdBQVEsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsa0VBQWtFLENBQUM7UUFNaEcsbUJBQWMsR0FBRztZQUNmLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUVGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTtZQUNwRCxNQUFNLElBQUksR0FBRztnQkFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzlCLFVBQVUsRUFBRSxPQUFP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QUF3RjtBQVRyRixvQkFBb0I7SUF2Q2hDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7aUJBQ1E7Ozs7Ozs7Ozs7R0FVUjtLQUNGLENBQUM7R0FDVyxvQkFBb0IsQ0E0RWhDO1NBNUVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXZpZGVvLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWFcIj5cclxuICA8c3BhbiBjbGFzcz1cInVwbG9hZHZpZGVvXCIgKm5nSWY9XCIhcGVyY2VudERvbmUgJiYgIXRodW1iVXJsXCI+VXBsb2FkIFZpZGVvIDwvc3Bhbj5cclxuICA8aW1nICpuZ0lmPVwiIXBlcmNlbnREb25lICYmICF0aHVtYlVybFwiIHNyYz1cImFzc2V0cy92aWRlb191cGxvYWQucG5nXCIgY2xhc3M9XCJpbWctdmlkZW8taWNvblwiIC8+XHJcbiAgPGEgKm5nSWY9XCJ0aHVtYlVybFwiIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cInZpZGVvTGlua1wiPiA8aW1nICBbc3JjXT1cInRodW1iVXJsXCIgd2lkdGg9XCIyNDhcIiBoZWlnaHQ9XCIxNTBcIi8+IDwvYT5cclxuICA8aW5wdXQgdHlwZT1cImZpbGVcIiAqbmdJZj1cIiF0aHVtYlVybFwiIG11bHRpcGxlIGNsYXNzPVwiZmlsZV9pbnB1dFwiIGlkPVwidXBsb2FkXCIgKGNoYW5nZSk9XCJ1cGxvYWRBbmRQcm9ncmVzcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIGFjY2VwdD1cInZpZGVvLypcIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtZGl2XCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ6MTRcIiAqbmdJZj1cInVwbG9hZFN1Y2Nlc3NcIj5cclxuICAgICAgPHNwYW4+VXBsYW9kIERvbmU8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmejE0XCI+XHJcbiAgICAgIDxzcGFuPnt7cGVyY2VudERvbmV9fSU8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc0NvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvY2VzYmFyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB6OVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGguJSc6cGVyY2VudERvbmV9XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmVtb3ZlX2ljb25cIiAqbmdJZj1cInRodW1iVXJsXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiAoY2xpY2spPVwiZGVsZXRlRklsZXMoZmlsZUlkKVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAudXBsb2FkLWFyZWF7Ym9yZGVyOiAxcHggc29saWQgZ3JheTttYXgtd2lkdGg6IDI1MHB4O21pbi1oZWlnaHQ6IDE1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4gIC5pbWctdmlkZW8taWNvbnt3aWR0aDogMTAwcHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt9XHJcbiAgLmZpbGVfaW5wdXQge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7b3BhY2l0eTogMH1cclxuICAucHJvZ3Jlc3NDb250YWluZXIge3dpZHRoOiAxMDAlO3BhZGRpbmctbGVmdDogNXB4O3BhZGRpbmctcmlnaHQ6IDVweDt9XHJcbiAgLnByb2dyZXNzYmFyIHtoZWlnaHQ6IDlweDtiYWNrZ3JvdW5kOiBncmVlbjtmbG9hdDogbGVmdDtib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4gIC5mejE0IHtmb250LXNpemU6IDIwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtd2VpZ2h0OiA0MDA7bWFyZ2luLWJvdHRvbTogN3B4O31cclxuICAucHJvZ3Jlc3MtZGl2e3RvcDogNDUlO3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDUwJTt3aWR0aDogMjUwcHg7fVxyXG4gIC5yZW1vdmVfaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDhweDtjdXJzb3I6IHBvaW50ZXI7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O2JhY2tncm91bmQ6ICNkYjNhMjY7Ym9yZGVyLXJhZGl1czogMTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTJweDt0b3A6IDVweDt9XHJcbiAgLnVwbG9hZHZpZGVve3Bvc2l0aW9uOiByZWxhdGl2ZTsgIHRvcDogMjdweDsgY3Vyc29yOiBwb2ludGVyOyBsZWZ0OiA0M3B4OyBiYWNrZ3JvdW5kOiBncmVlbjsgcGFkZGluZzogOHB4IDMwcHg7IGNvbG9yOiAjZmZmOyAgYm9yZGVyLXJhZGl1czogM3B4O31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9VcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gJ2h0dHA6Ly9hc3Npc3QuYWFhZGV2LmluZm8vYXBpLyc7XHJcbiAgQElucHV0KCkgcGF0aDogc3RyaW5nID0gJ2h0dHA6Ly9hc3Npc3QuYWFhZGV2LmluZm8vbWVkaWEvJztcclxuICBASW5wdXQoKSBkYXRhYmFzZTogc3RyaW5nID0gJ0FTU0lTVCc7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImNvcmVcIjtcclxuICBAT3V0cHV0KCkgZmlsZVJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgZGVsZXRlZmlsZVJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBASW5wdXQoKSBmaWxlSWQ6IGFueSA9ICcwJztcclxuICBASW5wdXQoKSBmaWxlR3JvdXBJZDogYW55ID0gJzAnO1xyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCIxMmZjMDFhN2VlYTc0MTM4YjllN2EzNWM5MGRhZGY3NDEyZmMwMWE3ZWVhNzQxMzhiOWU3YTM1YzkwZGFkZjc0XCI7XHJcblxyXG4gIHRodW1iVXJsOiBhbnk7XHJcbiAgdmlkZW9MaW5rOiBhbnk7XHJcbiAgcGVyY2VudERvbmU6IG51bWJlcjtcclxuICB1cGxvYWRTdWNjZXNzOiBib29sZWFuO1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5maWxlR3JvdXBJZCAhPSAnMCcgJiYgdGhpcy5maWxlR3JvdXBJZCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgRmlsZXNHcm91cElkOiB0aGlzLmZpbGVHcm91cElkLFxyXG4gICAgICAgIEltYWdlVmlkZW86ICdWSURFTydcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9cIiArIHRoaXMuc2NoZW1hICsgXCIvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKGZpbGVzID0+IHtcclxuICAgICAgICBpZiAoZmlsZXMgIT0gdW5kZWZpbmVkICYmIGZpbGVzICE9IG51bGwgJiYgZmlsZXMgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMudmlkZW9MaW5rID0gdGhpcy5wYXRoICsgZmlsZXNbMF0uRmlsZVVybDtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaWxlc1swXS5GaWxlVXJsLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIHRoaXMudGh1bWJVcmwgPSB0aGlzLnBhdGggKyBhcnJbMF0gKyAnLmpwZyc7XHJcbiAgICAgICAgICB0aGlzLmZpbGVJZCA9IGZpbGVzWzBdLkZpbGVzSWRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGxvYWRBbmRQcm9ncmVzcyhmaWxlczogRmlsZVtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSlcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRoaXMuZmlsZUlkKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMuZmlsZUdyb3VwSWQpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhVHlwZScsICd2aWRlbycpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgJ1ZpZGVvVXBsb2FkZXIvVXBsb2FkTmV3JywgZm9ybURhdGEsIHsgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsIG9ic2VydmU6ICdldmVudHMnIH0pXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBsb2FkU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSAwO1xyXG4gICAgICAgICAgICAgIHRoaXMuZmlsZVJlc3BvbnNlLmVtaXQoZXZlbnQuYm9keSk7XHJcbiAgICAgICAgICAgICAgdGhpcy52aWRlb0xpbmsgPSB0aGlzLnBhdGggKyBldmVudC5ib2R5WydGaWxlVXJsJ107XHJcbiAgICAgICAgICAgICAgbGV0IGFyciA9IGV2ZW50LmJvZHlbJ0ZpbGVVcmwnXS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICAgdGhpcy50aHVtYlVybCA9IHRoaXMucGF0aCArIGFyclswXSArICcuanBnJztcclxuICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZGVsZXRlRklsZXMoZmlsZUlkKSB7XHJcbiAgICB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudXJsICsgXCJNb2RlbHMvZmlsZXMvXCIgKyBmaWxlSWQgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW4pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy50aHVtYlVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMudmlkZW9MaW5rID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZWxldGVmaWxlUmVzcG9uc2UuZW1pdChyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19