import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
var VideoUploadComponent = /** @class */ (function () {
    function VideoUploadComponent(http) {
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
    VideoUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fileGroupId != '0' && this.fileGroupId != 0) {
            var body = {
                FilesGroupId: this.fileGroupId,
                ImageVideo: 'VIDEO'
            };
            var url = this.url + "Data/Exec/" + this.database + "/" + this.schema + "/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(function (files) {
                if (files != undefined && files != null && files != '') {
                    _this.videoLink = _this.path + files[0].FileUrl;
                    var arr = files[0].FileUrl.split(".");
                    _this.thumbUrl = _this.path + arr[0] + '.jpg';
                    _this.fileId = files[0].FilesId;
                    console.log(_this.fileId);
                }
            });
        }
    };
    VideoUploadComponent.prototype.uploadAndProgress = function (files) {
        var _this = this;
        for (var i = 0; i < files.length; i++) {
            var formData = new FormData();
            formData.append('file', files[i], files[i].name);
            formData.append('id', this.fileId);
            formData.append('filegroupid', this.fileGroupId);
            formData.append('mediaType', 'video');
            formData.append('description', files[i].name);
            this.http.post(this.url + 'VideoUploader/UploadNew', formData, { reportProgress: true, observe: 'events' })
                .subscribe(function (event) {
                if (event.type === HttpEventType.UploadProgress) {
                    _this.percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof HttpResponse) {
                    _this.uploadSuccess = true;
                    setTimeout(function () {
                        _this.uploadSuccess = false;
                        _this.percentDone = 0;
                        _this.fileResponse.emit(event.body);
                        _this.videoLink = _this.path + event.body['FileUrl'];
                        var arr = event.body['FileUrl'].split(".");
                        _this.thumbUrl = _this.path + arr[0] + '.jpg';
                    }, 3000);
                }
            });
        }
    };
    VideoUploadComponent.prototype.deleteFIles = function (fileId) {
        var _this = this;
        this.http.delete(this.url + "Models/files/" + fileId + "?api_key=" + this.GenericToken).subscribe(function (res) {
            if (res) {
                _this.thumbUrl = '';
                _this.videoLink = '';
                _this.deletefileResponse.emit(res);
            }
        });
    };
    VideoUploadComponent.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
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
            template: "\n  <div class=\"upload-area\">\n  <span class=\"uploadvideo\" *ngIf=\"!percentDone && !thumbUrl\">Upload Video </span>\n  <img *ngIf=\"!percentDone && !thumbUrl\" src=\"assets/video_upload.png\" class=\"img-video-icon\" />\n  <a *ngIf=\"thumbUrl\" target=\"_blank\" [href]=\"videoLink\"> <img  [src]=\"thumbUrl\" width=\"248\" height=\"150\"/> </a>\n  <input type=\"file\" *ngIf=\"!thumbUrl\" multiple class=\"file_input\" id=\"upload\" (change)=\"uploadAndProgress($event.target.files)\" accept=\"video/*\">\n  <div class=\"progress-div\" *ngIf=\"percentDone\">\n    <div class=\"fz14\" *ngIf=\"uploadSuccess\">\n      <span>Uplaod Done</span>\n    </div>\n    <div class=\"fz14\">\n      <span>{{percentDone}}%</span>\n    </div>\n    <div class=\"progressContainer\">\n      <div class=\"procesbar\"></div>\n      <div class=\"w-100 z9\">\n        <div class=\"progressbar\" [ngStyle]=\"{'width.%':percentDone}\"></div>\n      </div>\n    </div>\n    </div>\n    <span class=\"remove_icon\" *ngIf=\"thumbUrl\">\n      <i class=\"fa fa-times\" (click)=\"deleteFIles(fileId)\"></i>\n    </span>\n  </div>\n  ",
            styles: ["\n  .upload-area{border: 1px solid gray;max-width: 250px;min-height: 150px;position:relative}\n  .img-video-icon{width: 100px;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}\n  .file_input {width: 100%;height: 100%;position: absolute;top: 0;left: 0;opacity: 0}\n  .progressContainer {width: 100%;padding-left: 5px;padding-right: 5px;}\n  .progressbar {height: 9px;background: green;float: left;border-radius: 4px;}\n  .fz14 {font-size: 20px;text-align: center;font-weight: 400;margin-bottom: 7px;}\n  .progress-div{top: 45%;transform: translate(-50%,-50%);position: absolute;left: 50%;width: 250px;}\n  .remove_icon{position: absolute;right: 8px;cursor: pointer;width: 20px;height: 20px;background: #db3a26;border-radius: 100%;text-align: center;-webkit-box-align: center;align-items: center;color: #fff;font-size: 12px;top: 5px;}\n  .uploadvideo{position: relative;  top: 27px; cursor: pointer; left: 43px; background: green; padding: 8px 30px; color: #fff;  border-radius: 3px;}\n  "]
        })
    ], VideoUploadComponent);
    return VideoUploadComponent;
}());
export { VideoUploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NtbC1jb21wLW5pbmUvIiwic291cmNlcyI6WyJsaWIvdmlkZW8tdXBsb2FkL3ZpZGVvLXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUM1RjtJQW9CRSw4QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQW5CM0IsUUFBRyxHQUFXLGdDQUFnQyxDQUFDO1FBQy9DLFNBQUksR0FBVyxrQ0FBa0MsQ0FBQztRQUNsRCxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLFdBQU0sR0FBUSxNQUFNLENBQUM7UUFDcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQztRQUNoQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUN2QyxXQUFNLEdBQVEsR0FBRyxDQUFDO1FBQ2xCLGdCQUFXLEdBQVEsR0FBRyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQVEsa0VBQWtFLENBQUM7UUFNaEcsbUJBQWMsR0FBRztZQUNmLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0gsQ0FBQztJQUVGLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBTSxJQUFJLEdBQUc7Z0JBQ1gsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM5QixVQUFVLEVBQUUsT0FBTzthQUNwQixDQUFD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RixvQkFBb0I7UUF2Q2hDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLHdsQ0F3QlQ7cUJBQ1EsbS9CQVVSO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQTRFaEM7SUFBRCwyQkFBQztDQUFBLEFBNUVELElBNEVDO1NBNUVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEV2ZW50VHlwZSwgSHR0cFJlc3BvbnNlLCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc21sLXZpZGVvLXVwbG9hZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwidXBsb2FkLWFyZWFcIj5cclxuICA8c3BhbiBjbGFzcz1cInVwbG9hZHZpZGVvXCIgKm5nSWY9XCIhcGVyY2VudERvbmUgJiYgIXRodW1iVXJsXCI+VXBsb2FkIFZpZGVvIDwvc3Bhbj5cclxuICA8aW1nICpuZ0lmPVwiIXBlcmNlbnREb25lICYmICF0aHVtYlVybFwiIHNyYz1cImFzc2V0cy92aWRlb191cGxvYWQucG5nXCIgY2xhc3M9XCJpbWctdmlkZW8taWNvblwiIC8+XHJcbiAgPGEgKm5nSWY9XCJ0aHVtYlVybFwiIHRhcmdldD1cIl9ibGFua1wiIFtocmVmXT1cInZpZGVvTGlua1wiPiA8aW1nICBbc3JjXT1cInRodW1iVXJsXCIgd2lkdGg9XCIyNDhcIiBoZWlnaHQ9XCIxNTBcIi8+IDwvYT5cclxuICA8aW5wdXQgdHlwZT1cImZpbGVcIiAqbmdJZj1cIiF0aHVtYlVybFwiIG11bHRpcGxlIGNsYXNzPVwiZmlsZV9pbnB1dFwiIGlkPVwidXBsb2FkXCIgKGNoYW5nZSk9XCJ1cGxvYWRBbmRQcm9ncmVzcygkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIGFjY2VwdD1cInZpZGVvLypcIj5cclxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtZGl2XCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ6MTRcIiAqbmdJZj1cInVwbG9hZFN1Y2Nlc3NcIj5cclxuICAgICAgPHNwYW4+VXBsYW9kIERvbmU8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmejE0XCI+XHJcbiAgICAgIDxzcGFuPnt7cGVyY2VudERvbmV9fSU8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc0NvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvY2VzYmFyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCB6OVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGguJSc6cGVyY2VudERvbmV9XCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmVtb3ZlX2ljb25cIiAqbmdJZj1cInRodW1iVXJsXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiAoY2xpY2spPVwiZGVsZXRlRklsZXMoZmlsZUlkKVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAudXBsb2FkLWFyZWF7Ym9yZGVyOiAxcHggc29saWQgZ3JheTttYXgtd2lkdGg6IDI1MHB4O21pbi1oZWlnaHQ6IDE1MHB4O3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4gIC5pbWctdmlkZW8taWNvbnt3aWR0aDogMTAwcHg7cG9zaXRpb246IGFic29sdXRlO3RvcDogNTAlO2xlZnQ6IDUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTt9XHJcbiAgLmZpbGVfaW5wdXQge3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiAwO2xlZnQ6IDA7b3BhY2l0eTogMH1cclxuICAucHJvZ3Jlc3NDb250YWluZXIge3dpZHRoOiAxMDAlO3BhZGRpbmctbGVmdDogNXB4O3BhZGRpbmctcmlnaHQ6IDVweDt9XHJcbiAgLnByb2dyZXNzYmFyIHtoZWlnaHQ6IDlweDtiYWNrZ3JvdW5kOiBncmVlbjtmbG9hdDogbGVmdDtib3JkZXItcmFkaXVzOiA0cHg7fVxyXG4gIC5mejE0IHtmb250LXNpemU6IDIwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtd2VpZ2h0OiA0MDA7bWFyZ2luLWJvdHRvbTogN3B4O31cclxuICAucHJvZ3Jlc3MtZGl2e3RvcDogNDUlO3RyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7cG9zaXRpb246IGFic29sdXRlO2xlZnQ6IDUwJTt3aWR0aDogMjUwcHg7fVxyXG4gIC5yZW1vdmVfaWNvbntwb3NpdGlvbjogYWJzb2x1dGU7cmlnaHQ6IDhweDtjdXJzb3I6IHBvaW50ZXI7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O2JhY2tncm91bmQ6ICNkYjNhMjY7Ym9yZGVyLXJhZGl1czogMTAwJTt0ZXh0LWFsaWduOiBjZW50ZXI7LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2NvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMTJweDt0b3A6IDVweDt9XHJcbiAgLnVwbG9hZHZpZGVve3Bvc2l0aW9uOiByZWxhdGl2ZTsgIHRvcDogMjdweDsgY3Vyc29yOiBwb2ludGVyOyBsZWZ0OiA0M3B4OyBiYWNrZ3JvdW5kOiBncmVlbjsgcGFkZGluZzogOHB4IDMwcHg7IGNvbG9yOiAjZmZmOyAgYm9yZGVyLXJhZGl1czogM3B4O31cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlkZW9VcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nID0gJ2h0dHA6Ly9hc3Npc3QuYWFhZGV2LmluZm8vYXBpLyc7XHJcbiAgQElucHV0KCkgcGF0aDogc3RyaW5nID0gJ2h0dHA6Ly9hc3Npc3QuYWFhZGV2LmluZm8vbWVkaWEvJztcclxuICBASW5wdXQoKSBkYXRhYmFzZTogc3RyaW5nID0gJ0FTU0lTVCc7XHJcbiAgQElucHV0KCkgc2NoZW1hOiBhbnkgPSBcImNvcmVcIjtcclxuICBAT3V0cHV0KCkgZmlsZVJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgZGVsZXRlZmlsZVJlc3BvbnNlID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBASW5wdXQoKSBmaWxlSWQ6IGFueSA9ICcwJztcclxuICBASW5wdXQoKSBmaWxlR3JvdXBJZDogYW55ID0gJzAnO1xyXG4gIEBJbnB1dCgpIEdlbmVyaWNUb2tlbjogYW55ID0gXCIxMmZjMDFhN2VlYTc0MTM4YjllN2EzNWM5MGRhZGY3NDEyZmMwMWE3ZWVhNzQxMzhiOWU3YTM1YzkwZGFkZjc0XCI7XHJcblxyXG4gIHRodW1iVXJsOiBhbnk7XHJcbiAgdmlkZW9MaW5rOiBhbnk7XHJcbiAgcGVyY2VudERvbmU6IG51bWJlcjtcclxuICB1cGxvYWRTdWNjZXNzOiBib29sZWFuO1xyXG4gIGh0dHBPcHRpb25KU09OID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSlcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5maWxlR3JvdXBJZCAhPSAnMCcgJiYgdGhpcy5maWxlR3JvdXBJZCAhPSAwKSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgRmlsZXNHcm91cElkOiB0aGlzLmZpbGVHcm91cElkLFxyXG4gICAgICAgIEltYWdlVmlkZW86ICdWSURFTydcclxuICAgICAgfTtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy51cmwgKyBcIkRhdGEvRXhlYy9cIiArIHRoaXMuZGF0YWJhc2UgKyBcIi9cIiArIHRoaXMuc2NoZW1hICsgXCIvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKGZpbGVzID0+IHtcclxuICAgICAgICBpZiAoZmlsZXMgIT0gdW5kZWZpbmVkICYmIGZpbGVzICE9IG51bGwgJiYgZmlsZXMgIT0gJycpIHtcclxuICAgICAgICAgIHRoaXMudmlkZW9MaW5rID0gdGhpcy5wYXRoICsgZmlsZXNbMF0uRmlsZVVybDtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaWxlc1swXS5GaWxlVXJsLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgIHRoaXMudGh1bWJVcmwgPSB0aGlzLnBhdGggKyBhcnJbMF0gKyAnLmpwZyc7XHJcbiAgICAgICAgICB0aGlzLmZpbGVJZCA9IGZpbGVzWzBdLkZpbGVzSWRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZUlkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICB1cGxvYWRBbmRQcm9ncmVzcyhmaWxlczogRmlsZVtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1tpXSwgZmlsZXNbaV0ubmFtZSlcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpZCcsIHRoaXMuZmlsZUlkKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMuZmlsZUdyb3VwSWQpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ21lZGlhVHlwZScsICd2aWRlbycpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZmlsZXNbaV0ubmFtZSk7XHJcbiAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsICsgJ1ZpZGVvVXBsb2FkZXIvVXBsb2FkTmV3JywgZm9ybURhdGEsIHsgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsIG9ic2VydmU6ICdldmVudHMnIH0pXHJcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmNlbnREb25lID0gTWF0aC5yb3VuZCgxMDAgKiBldmVudC5sb2FkZWQgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMudXBsb2FkU3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIHRoaXMucGVyY2VudERvbmUgPSAwO1xyXG4gICAgICAgICAgICAgIHRoaXMuZmlsZVJlc3BvbnNlLmVtaXQoZXZlbnQuYm9keSk7XHJcbiAgICAgICAgICAgICAgdGhpcy52aWRlb0xpbmsgPSB0aGlzLnBhdGggKyBldmVudC5ib2R5WydGaWxlVXJsJ107XHJcbiAgICAgICAgICAgICAgbGV0IGFyciA9IGV2ZW50LmJvZHlbJ0ZpbGVVcmwnXS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgICAgdGhpcy50aHVtYlVybCA9IHRoaXMucGF0aCArIGFyclswXSArICcuanBnJztcclxuICAgICAgICAgICAgfSwgMzAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZGVsZXRlRklsZXMoZmlsZUlkKSB7XHJcbiAgICB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudXJsICsgXCJNb2RlbHMvZmlsZXMvXCIgKyBmaWxlSWQgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW4pLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgdGhpcy50aHVtYlVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMudmlkZW9MaW5rID0gJyc7XHJcbiAgICAgICAgdGhpcy5kZWxldGVmaWxlUmVzcG9uc2UuZW1pdChyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19