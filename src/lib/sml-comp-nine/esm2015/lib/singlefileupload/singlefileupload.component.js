import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
let SinglefileuploadComponent = class SinglefileuploadComponent {
    constructor(http) {
        this.http = http;
        this.idInputFile = 'other';
        this.global_url = '';
        this.url = 'http://apinext.aaadev.info/apinext/';
        this.fileurl = 'http://apinext.aaadev.info/';
        this.FilesGroupIdvalue = '0';
        this.FileId = '0';
        this.nameFile = '';
        this.dataBase = 'APPS';
        this.fileResponse = new EventEmitter;
        this.editContent = false;
        this.isFiles = false;
        this.datas = [];
        this.description = '';
        this.textdata = '';
        this.httpOptionJSON = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ngOnInit() {
        this.getListdata();
    }
    upload(files) {
        this.uploadAndProgress(files);
    }
    getListdata() {
        this.http.get(this.url + "GetSystemInfo?passcode=flipper613").subscribe(res => {
            this.GenericToken = res["GenericToken"];
            if (this.FilesGroupIdvalue) {
                const body = {
                    FilesGroupId: this.FilesGroupIdvalue,
                };
                const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
                this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                    this.datas = res;
                    for (let i = 0; i < this.datas.length; i++) {
                        let file_url = this.global_url + this.datas[i].FileUrl;
                        this.datas[i].FileUrl = file_url;
                        this.isFiles = true;
                    }
                    this.UploadedFileli = true;
                });
            }
        });
    }
    uploadAndProgress(files) {
        this.UploadedFileli = false;
        var formData = new FormData();
        formData.append('file', files[0], files[0].name);
        formData.append('id', this.FileId);
        formData.append('filegroupid', this.FilesGroupIdvalue);
        formData.append('mediaType', 'example');
        // formData.append('description', files[0].name);
        if (this.nameFile != '') {
            formData.append('description', this.nameFile);
        }
        else {
            formData.append('description', files[0].name);
        }
        this.http.post(this.url + 'uploader/uploadnew', formData, { reportProgress: true, observe: 'events' }).subscribe(event => {
            if (event.type === HttpEventType.UploadProgress) {
                this.percentDone = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                this.uploadSuccess = true;
                this.UploadedFileli = true;
                this.filename = event.body["Description"];
                this.filelink = this.fileurl + event.body["FileUrl"];
                this.isFiles = true;
                this.fileResponse.emit(event.body);
                this.getListdata();
                setTimeout(() => {
                    this.uploadSuccess = false;
                    this.percentDone = 0;
                }, 3000);
            }
        });
    }
    edit(data, i) {
        this.textdata = data.Description;
        this.contentIndex = i;
        this.editContent = true;
    }
    updateName(id) {
        var url = this.url + "Models/Files?api_key=" + this.GenericToken;
        var body = {
            FilesId: id,
            Description: this.textdata
        };
        this.http.post(url, body).subscribe(res => {
            this.getListdata();
            this.esc();
        });
    }
    esc() {
        this.editContent = false;
        this.contentIndex = null;
    }
    DeleteFIles(value) {
        this.http.delete(this.url + "Models/files/" + value + "?api_key=" + this.GenericToken).subscribe(res => {
            const body = {
                FilesGroupId: this.FilesGroupIdvalue
            };
            const url = this.url + "Data/Exec/" + this.dataBase + "/core/FILES_List?api_key=" + this.GenericToken;
            this.http.post(url, body, this.httpOptionJSON).subscribe(res => {
                this.datas = [];
                this.datas = res;
                this.isFiles = false;
                for (let i = 0; i < this.datas.length; i++) {
                    let file_url = this.global_url + this.datas[i].FileUrl;
                    this.datas[i].FileUrl = file_url;
                }
                this.UploadedFileli = true;
            });
        });
    }
};
SinglefileuploadComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "idInputFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "label", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "global_url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "url", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "fileurl", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FilesGroupIdvalue", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "FileId", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "nameFile", void 0);
__decorate([
    Input()
], SinglefileuploadComponent.prototype, "dataBase", void 0);
__decorate([
    Output()
], SinglefileuploadComponent.prototype, "fileResponse", void 0);
SinglefileuploadComponent = __decorate([
    Component({
        selector: 'sml-singlefileupload',
        template: `
	<div class="w-100">
	<div class="form-row align-items-center">
		<div class="col-12 mb-0">
			<label class="col-md-12 dropdownarea" for="{{idInputFile}}">
				<div class="d-flex w-100 flex-column">
					<input type="file" id="{{idInputFile}}" (change)="upload($event.target.files)" class="drag"
						[ngStyle]="{'height.px': height,'width.px': width}" />
					<div class="d-flex align-content-start align-items-start w-100 flex-column">
						<div class="d-flex align-content-start align-items-start">
							<span class="uploadicon"><img src="./assets/upload.png" /></span>
							<div class="d-flex flex-column position-relative w79">
								<div class="fz14 top5" [ngClass]="{'getData':isFiles}">Choose a file or drag it here. 
									<span *ngIf="percentDone"> {{percentDone}}%</span></div>
								<div class="progressContainer">
									<div class="procesbar"></div> 
									<div class="w-100 z9" *ngIf="percentDone">
										<div class="progressbar" [ngStyle]="{'width.%':percentDone}"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</label>

			<div class="listdata mt-5" *ngIf="UploadedFileli">
				<ul class="w-100 fileuploadlist">
					<li *ngFor="let data of datas; let i = index"
						class="w-100 d-flex justify-content-between align-content-around">
						<div class="w-100 mflex" *ngIf="contentIndex != i">
							<a href="{{data.FileUrl}}" target="_blank">{{data.Description}}</a>
							<div class="float-right d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="edit(data,i)">
									<img src="./assets/pencil-edit-button.svg">
								</div>
								<div class="cross icons bg-danger pointer d-flex justify-content-center align-items-center"
									(click)="DeleteFIles(data.FilesId)">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
						<div *ngIf="editContent && contentIndex == i"
							class="w-100 d-flex align-items-center">
							<input type="text" class="form-control w-75" name="textdata" [value]="data.Description"
								[(ngModel)]="textdata" #ctrl="ngModel">
							<div class="d-flex justify-content-between align-content-around settingoption">
								<div class="cross icons bg-success pointer d-flex justify-content-center align-items-center"
									(click)="updateName(data.FilesId)">
									<img src="./assets/checked.svg">
								</div>
								<div class="cross icons bg-dark pointer d-flex justify-content-center align-items-center"
									(click)="esc()">
									<img src="./assets/cross.svg">
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
	`,
        styles: [`
	.cursor-pointer {
		cursor: pointer;
	  }
	  .node-content-wrapper, .tree-children {
		position: relative;
	  }  
	  .cr-slider-wrap {
		margin: 8px auto !important
	  }
	  .drag {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		z-index:999999;
	  }
	  .dropdownarea {
		width: 100%;
		border: 1px dashed #ccc;
		padding:10px 15px;
		display: flex;
		align-items: center;
		height: 65px;
		text-align: center;
		align-items: center;
		position: relative;
	  }
	  .dropdownarea h1 {
		color: #7d7c7c;
		font-size: 17px;
	  }
	  .pd5 {
		padding: 89px 9px 76px 0px;
		float: left;
		width: 100%;
	  }
	  .table-headed {
		padding: 15px;
		display: block;
	  }
	  .mgt50 {
		margin-top: 50px;
	  }
	  .btndefault {
		background-color: #f3f3f3;
		border-color: #e6e6e6;
		color: #333;
	  }
	  .cross {
		display: inline-block;
		font-size: 12px;
		padding: 5px;
		color: red;
		font-weight: bold;
		width: 10px;
		height: 10px;
		margin-left: 10px;
	  }
	  .progressbar {
		height: 2px;
		background: green;
		float: left;
	  }
	  .fz14 {
		font-size: 14px;
	  }
	  .top50 {
		top: 31px;
		left: -19px;
	  }
	  .successmsg {
		font-size: 14px;
		padding: 10px;
		color: green;
		width: 100%;
		text-align: center;
		position: absolute;
		top: -82px;
	  }
	  .fileuploadlist {
		margin: 0;
		padding: 0;
	  }
	  .fileuploadlist li {
		margin: 0;
		padding: 0;
		width: 100%;
		list-style: none;
		margin-bottom: 10px;
	  }
	  .fileuploadlist li a {
		margin: 0;
		padding: 0;
		font-size: 14px;
		color: #333;
		text-transform: capitalize;
	  }
	  .pointer {
		cursor: pointer;
	  }
	  .cross img {
		height: 10px;
	  }
	  .listdata {
		width: 100%;
		max-width: calc(100% - 100px);
		position: absolute;
		bottom:12px;
		left:77px;
		background-color: #fff;;
		z-index: 9999999;
	  }
	  .mflex{
		display: flex;
		background: #fff;
		align-items: center;
		max-width: calc(100% - 100px);
	  }
	  .top5{
		top:12px;
		position: relative;
	  }
	  .getData{
		top:5px;
	  }
	  .settingoption {
		width: 50px;
	  }
	  .icons {
		width: 20px;
		height: 20px;
		border-radius: 3px;
	  }
	  .checkbox {
		display: flex;
		align-items: center;
		margin: 10px 0;
	  }
	  .styled-checkbox {
		position: absolute;
		opacity: 0;
	  }
	  .styled-checkbox+span {
		position: relative;
		cursor: pointer;
		padding: 0;
	  }
	  .styled-checkbox+span:before {
		content: "";
		margin-right: 10px;
		display: inline-block;
		vertical-align: text-top;
		width: 15px;
		height: 15px;
		border: 1px solid #ccc;
	  }
	  .styled-checkbox:checked+span:after {
		content: "";
		position: absolute;
		left: 5px;
		top: 2px;
		height: 9px;
		width: 5px;
		border: solid #09b4bd;
		border-width: 0 2px 2px 0;
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
	  }
	  .procesbar {
		background: #ccc;
		height: 2px;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	  }
	  .progressContainer {
		width: 100%;
		position: relative;
		top:16px;
	  }
	  .z9 {
		z-index: 99;
		position: relative;
	  }
	  .w79 {
		width: 82%;
	  }
	  .uploadicon {
		padding: 10px;
	  }
	  .w-100 {
		width: 100%;
	  }
	  .mb-5 {
		margin-bottom: 3rem!important
	  }
	  .form-row {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: -5px;
		margin-left: -5px;
	  }
	  .col-12 {
		flex: 0 0 100%;
		max-width: 100%;
	  }
	  .mb-0 {
		margin-bottom: 0px!important;
	  }
	  .form-row>.col, .form-row>[class*=col-] {
		padding-right: 5px;
		padding-left: 5px;
	  }
	  .d-flex {
		display: flex;
	  }
	  .position-relative {
		position: relative;
	  }
	  .border {
		border: 1px solid #dee2e6!important
	  }
	  .flex-column {
		flex-direction: column
	  }
	  .align-content-around {
		align-content: space-around
	  }
	  .bg-success {
		background-color: #28a745!important;
	  }
	  .bg-danger {
		background-color: #dc3545!important;
	  }
	  .justify-content-center {
		-webkit-box-pack: center!important;
		-ms-flex-pack: center!important;
		justify-content: center!important;
	  }
	  .float-right {
		float: right!important;
	  }
	  .justify-content-between {
		-webkit-box-pack: justify!important;
		-ms-flex-pack: justify!important;
		justify-content: space-between!important;
	  }
	  .floating-border{
		border:1px solid #ccc;
		padding: 15px !important;
		position: relative;
	  }
	`]
    })
], SinglefileuploadComponent);
export { SinglefileuploadComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlZmlsZXVwbG9hZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zbWwtY29tcC1uaW5lLyIsInNvdXJjZXMiOlsibGliL3NpbmdsZWZpbGV1cGxvYWQvc2luZ2xlZmlsZXVwbG9hZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBMlU1RixJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUF5QjtJQW1DckMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWpDM0IsZ0JBQVcsR0FBWSxPQUFPLENBQUM7UUFFL0IsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixRQUFHLEdBQVEscUNBQXFDLENBQUM7UUFDakQsWUFBTyxHQUFRLDZCQUE2QixDQUFDO1FBQzdDLHNCQUFpQixHQUFRLEdBQUcsQ0FBQztRQUM3QixXQUFNLEdBQVEsR0FBRyxDQUFDO1FBQ2xCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFRLE1BQU0sQ0FBQztRQUN0QixpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDO1FBVzFDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBTyxLQUFLLENBQUM7UUFFcEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLG1CQUFjLEdBQUc7WUFDaEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN4QixjQUFjLEVBQUUsa0JBQWtCO2FBQ2xDLENBQUM7U0FDRixDQUFDO0lBRUYsQ0FBQztJQUNELFFBQVE7UUFDUCxJ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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtUVI7S0FDRCxDQUFDO0dBRVcseUJBQXlCLENBc0lyQztTQXRJWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudFR5cGUsIEh0dHBSZXNwb25zZSwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NtbC1zaW5nbGVmaWxldXBsb2FkJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxyXG5cdDxkaXYgY2xhc3M9XCJmb3JtLXJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtMTIgbWItMFwiPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtbWQtMTIgZHJvcGRvd25hcmVhXCIgZm9yPVwie3tpZElucHV0RmlsZX19XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMCBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJ7e2lkSW5wdXRGaWxlfX1cIiAoY2hhbmdlKT1cInVwbG9hZCgkZXZlbnQudGFyZ2V0LmZpbGVzKVwiIGNsYXNzPVwiZHJhZ1wiXHJcblx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cInsnaGVpZ2h0LnB4JzogaGVpZ2h0LCd3aWR0aC5weCc6IHdpZHRofVwiIC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWNvbnRlbnQtc3RhcnQgYWxpZ24taXRlbXMtc3RhcnQgdy0xMDAgZmxleC1jb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1cGxvYWRpY29uXCI+PGltZyBzcmM9XCIuL2Fzc2V0cy91cGxvYWQucG5nXCIgLz48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1yZWxhdGl2ZSB3NzlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmejE0IHRvcDVcIiBbbmdDbGFzc109XCJ7J2dldERhdGEnOmlzRmlsZXN9XCI+Q2hvb3NlIGEgZmlsZSBvciBkcmFnIGl0IGhlcmUuIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cInBlcmNlbnREb25lXCI+IHt7cGVyY2VudERvbmV9fSU8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NDb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInByb2Nlc2JhclwiPjwvZGl2PiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMTAwIHo5XCIgKm5nSWY9XCJwZXJjZW50RG9uZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwcm9ncmVzc2JhclwiIFtuZ1N0eWxlXT1cInsnd2lkdGguJSc6cGVyY2VudERvbmV9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdGRhdGEgbXQtNVwiICpuZ0lmPVwiVXBsb2FkZWRGaWxlbGlcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJ3LTEwMCBmaWxldXBsb2FkbGlzdFwiPlxyXG5cdFx0XHRcdFx0PGxpICpuZ0Zvcj1cImxldCBkYXRhIG9mIGRhdGFzOyBsZXQgaSA9IGluZGV4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24tY29udGVudC1hcm91bmRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMTAwIG1mbGV4XCIgKm5nSWY9XCJjb250ZW50SW5kZXggIT0gaVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ7e2RhdGEuRmlsZVVybH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3tkYXRhLkRlc2NyaXB0aW9ufX08L2E+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWFyb3VuZCBzZXR0aW5nb3B0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctc3VjY2VzcyBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJlZGl0KGRhdGEsaSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL2Fzc2V0cy9wZW5jaWwtZWRpdC1idXR0b24uc3ZnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjcm9zcyBpY29ucyBiZy1kYW5nZXIgcG9pbnRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwiRGVsZXRlRklsZXMoZGF0YS5GaWxlc0lkKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2Nyb3NzLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiZWRpdENvbnRlbnQgJiYgY29udGVudEluZGV4ID09IGlcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwidy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHctNzVcIiBuYW1lPVwidGV4dGRhdGFcIiBbdmFsdWVdPVwiZGF0YS5EZXNjcmlwdGlvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRbKG5nTW9kZWwpXT1cInRleHRkYXRhXCIgI2N0cmw9XCJuZ01vZGVsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1jb250ZW50LWFyb3VuZCBzZXR0aW5nb3B0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctc3VjY2VzcyBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJ1cGRhdGVOYW1lKGRhdGEuRmlsZXNJZClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuL2Fzc2V0cy9jaGVja2VkLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3Jvc3MgaWNvbnMgYmctZGFyayBwb2ludGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJlc2MoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi4vYXNzZXRzL2Nyb3NzLnN2Z1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuXHRgLFxyXG5cdHN0eWxlczogW2BcclxuXHQuY3Vyc29yLXBvaW50ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgfVxyXG5cdCAgLm5vZGUtY29udGVudC13cmFwcGVyLCAudHJlZS1jaGlsZHJlbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ICB9ICBcclxuXHQgIC5jci1zbGlkZXItd3JhcCB7XHJcblx0XHRtYXJnaW46IDhweCBhdXRvICFpbXBvcnRhbnRcclxuXHQgIH1cclxuXHQgIC5kcmFnIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHR6LWluZGV4Ojk5OTk5OTtcclxuXHQgIH1cclxuXHQgIC5kcm9wZG93bmFyZWEge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3JkZXI6IDFweCBkYXNoZWQgI2NjYztcclxuXHRcdHBhZGRpbmc6MTBweCAxNXB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDY1cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCAgfVxyXG5cdCAgLmRyb3Bkb3duYXJlYSBoMSB7XHJcblx0XHRjb2xvcjogIzdkN2M3YztcclxuXHRcdGZvbnQtc2l6ZTogMTdweDtcclxuXHQgIH1cclxuXHQgIC5wZDUge1xyXG5cdFx0cGFkZGluZzogODlweCA5cHggNzZweCAwcHg7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdCAgfVxyXG5cdCAgLnRhYmxlLWhlYWRlZCB7XHJcblx0XHRwYWRkaW5nOiAxNXB4O1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0ICB9XHJcblx0ICAubWd0NTAge1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHQgIH1cclxuXHQgIC5idG5kZWZhdWx0IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcblx0XHRib3JkZXItY29sb3I6ICNlNmU2ZTY7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHQgIH1cclxuXHQgIC5jcm9zcyB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRjb2xvcjogcmVkO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHR3aWR0aDogMTBweDtcclxuXHRcdGhlaWdodDogMTBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdCAgfVxyXG5cdCAgLnByb2dyZXNzYmFyIHtcclxuXHRcdGhlaWdodDogMnB4O1xyXG5cdFx0YmFja2dyb3VuZDogZ3JlZW47XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHQgIH1cclxuXHQgIC5mejE0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHQgIH1cclxuXHQgIC50b3A1MCB7XHJcblx0XHR0b3A6IDMxcHg7XHJcblx0XHRsZWZ0OiAtMTlweDtcclxuXHQgIH1cclxuXHQgIC5zdWNjZXNzbXNnIHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRjb2xvcjogZ3JlZW47XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTgycHg7XHJcblx0ICB9XHJcblx0ICAuZmlsZXVwbG9hZGxpc3Qge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHQgIH1cclxuXHQgIC5maWxldXBsb2FkbGlzdCBsaSB7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHQgIH1cclxuXHQgIC5maWxldXBsb2FkbGlzdCBsaSBhIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdCAgfVxyXG5cdCAgLnBvaW50ZXIge1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdCAgfVxyXG5cdCAgLmNyb3NzIGltZyB7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0ICB9XHJcblx0ICAubGlzdGRhdGEge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbToxMnB4O1xyXG5cdFx0bGVmdDo3N3B4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjs7XHJcblx0XHR6LWluZGV4OiA5OTk5OTk5O1xyXG5cdCAgfVxyXG5cdCAgLm1mbGV4e1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcblx0ICB9XHJcblx0ICAudG9wNXtcclxuXHRcdHRvcDoxMnB4O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCAgfVxyXG5cdCAgLmdldERhdGF7XHJcblx0XHR0b3A6NXB4O1xyXG5cdCAgfVxyXG5cdCAgLnNldHRpbmdvcHRpb24ge1xyXG5cdFx0d2lkdGg6IDUwcHg7XHJcblx0ICB9XHJcblx0ICAuaWNvbnMge1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzcHg7XHJcblx0ICB9XHJcblx0ICAuY2hlY2tib3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRtYXJnaW46IDEwcHggMDtcclxuXHQgIH1cclxuXHQgIC5zdHlsZWQtY2hlY2tib3gge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHQgIH1cclxuXHQgIC5zdHlsZWQtY2hlY2tib3grc3BhbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdCAgfVxyXG5cdCAgLnN0eWxlZC1jaGVja2JveCtzcGFuOmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiBcIlwiO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG5cdFx0d2lkdGg6IDE1cHg7XHJcblx0XHRoZWlnaHQ6IDE1cHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdCAgfVxyXG5cdCAgLnN0eWxlZC1jaGVja2JveDpjaGVja2VkK3NwYW46YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogXCJcIjtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDVweDtcclxuXHRcdHRvcDogMnB4O1xyXG5cdFx0aGVpZ2h0OiA5cHg7XHJcblx0XHR3aWR0aDogNXB4O1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAjMDliNGJkO1xyXG5cdFx0Ym9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG5cdCAgfVxyXG5cdCAgLnByb2Nlc2JhciB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjY2NjO1xyXG5cdFx0aGVpZ2h0OiAycHg7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0ICB9XHJcblx0ICAucHJvZ3Jlc3NDb250YWluZXIge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6MTZweDtcclxuXHQgIH1cclxuXHQgIC56OSB7XHJcblx0XHR6LWluZGV4OiA5OTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQgIH1cclxuXHQgIC53Nzkge1xyXG5cdFx0d2lkdGg6IDgyJTtcclxuXHQgIH1cclxuXHQgIC51cGxvYWRpY29uIHtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0ICB9XHJcblx0ICAudy0xMDAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0ICB9XHJcblx0ICAubWItNSB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzcmVtIWltcG9ydGFudFxyXG5cdCAgfVxyXG5cdCAgLmZvcm0tcm93IHtcclxuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHRcdG1hcmdpbi1yaWdodDogLTVweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG5cdCAgfVxyXG5cdCAgLmNvbC0xMiB7XHJcblx0XHRmbGV4OiAwIDAgMTAwJTtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHQgIH1cclxuXHQgIC5tYi0wIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDBweCFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICAuZm9ybS1yb3c+LmNvbCwgLmZvcm0tcm93PltjbGFzcyo9Y29sLV0ge1xyXG5cdFx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcblx0ICB9XHJcblx0ICAuZC1mbGV4IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0ICB9XHJcblx0ICAucG9zaXRpb24tcmVsYXRpdmUge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCAgfVxyXG5cdCAgLmJvcmRlciB7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2IWltcG9ydGFudFxyXG5cdCAgfVxyXG5cdCAgLmZsZXgtY29sdW1uIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHQgIH1cclxuXHQgIC5hbGlnbi1jb250ZW50LWFyb3VuZCB7XHJcblx0XHRhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuXHQgIH1cclxuXHQgIC5iZy1zdWNjZXNzIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDUhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG5cdCAgLmJnLWRhbmdlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1IWltcG9ydGFudDtcclxuXHQgIH1cclxuXHQgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcclxuXHRcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlciFpbXBvcnRhbnQ7XHJcblx0XHQtbXMtZmxleC1wYWNrOiBjZW50ZXIhaW1wb3J0YW50O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIhaW1wb3J0YW50O1xyXG5cdCAgfVxyXG5cdCAgLmZsb2F0LXJpZ2h0IHtcclxuXHRcdGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICAuanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xyXG5cdFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeSFpbXBvcnRhbnQ7XHJcblx0XHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5IWltcG9ydGFudDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiFpbXBvcnRhbnQ7XHJcblx0ICB9XHJcblx0ICAuZmxvYXRpbmctYm9yZGVye1xyXG5cdFx0Ym9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG5cdFx0cGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCAgfVxyXG5cdGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2luZ2xlZmlsZXVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0XHJcblx0QElucHV0KCkgaWRJbnB1dEZpbGUgOiBzdHJpbmcgPSAnb3RoZXInO1xyXG5cdEBJbnB1dCgpIGxhYmVsO1xyXG5cdEBJbnB1dCgpIGdsb2JhbF91cmw6IGFueSA9ICcnO1xyXG5cdEBJbnB1dCgpIHVybDogYW55ID0gJ2h0dHA6Ly9hcGluZXh0LmFhYWRldi5pbmZvL2FwaW5leHQvJztcclxuXHRASW5wdXQoKSBmaWxldXJsOiBhbnkgPSAnaHR0cDovL2FwaW5leHQuYWFhZGV2LmluZm8vJztcclxuXHRASW5wdXQoKSBGaWxlc0dyb3VwSWR2YWx1ZTogYW55ID0gJzAnO1xyXG5cdEBJbnB1dCgpIEZpbGVJZDogYW55ID0gJzAnO1xyXG5cdEBJbnB1dCgpIG5hbWVGaWxlOiBhbnkgPSAnJztcclxuXHRASW5wdXQoKSBkYXRhQmFzZTogYW55ID0gJ0FQUFMnO1xyXG5cdEBPdXRwdXQoKSBmaWxlUmVzcG9uc2UgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cdGltYWdlU3JjOiBzdHJpbmc7XHJcblx0R2VuZXJpY1Rva2VuOiBhbnk7XHJcblx0Ly8gdXJsOiBzdHJpbmcgPSAnaHR0cDovL2FwaW5leHQuYWFhZGV2LmluZm8vYXBpbmV4dC91cGxvYWRlci91cGxvYWRuZXcnO1xyXG5cdC8vIGZpbGV1cmw6IHN0cmluZyA9ICdodHRwOi8vYXBpbmV4dC5hYWFkZXYuaW5mby8nO1xyXG5cdGZpbGVuYW1lOiBzdHJpbmc7XHJcblx0aGVpZ2h0OiBhbnk7XHJcblx0d2lkdGg6IGFueTtcclxuXHRmaWxlbGluazogc3RyaW5nO1xyXG5cdFVwbG9hZGVkRmlsZWxpOiBib29sZWFuO1xyXG5cdEZpbGVzR3JvdXBJZDogc3RyaW5nO1xyXG5cdGVkaXRDb250ZW50ID0gZmFsc2U7XHJcblx0aXNGaWxlczphbnkgPSBmYWxzZTtcclxuXHRjb250ZW50SW5kZXg6IGFueTtcclxuXHRkYXRhczogYW55ID0gW107XHJcblx0ZGVzY3JpcHRpb24gPSAnJ1xyXG5cdHRleHRkYXRhOiBzdHJpbmcgPSAnJztcclxuXHRwZXJjZW50RG9uZTogbnVtYmVyO1xyXG5cdHVwbG9hZFN1Y2Nlc3M6IGJvb2xlYW47XHJcblx0aHR0cE9wdGlvbkpTT04gPSB7XHJcblx0XHRoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHR9KVxyXG5cdH07XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblx0fVxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5nZXRMaXN0ZGF0YSgpXHJcblx0fVxyXG5cdHVwbG9hZChmaWxlczogRmlsZVtdKSB7XHJcblx0XHR0aGlzLnVwbG9hZEFuZFByb2dyZXNzKGZpbGVzKTtcclxuXHR9XHJcblx0Z2V0TGlzdGRhdGEoKSB7XHJcblx0XHR0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCJHZXRTeXN0ZW1JbmZvP3Bhc3Njb2RlPWZsaXBwZXI2MTNcIikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdHRoaXMuR2VuZXJpY1Rva2VuID0gcmVzW1wiR2VuZXJpY1Rva2VuXCJdO1xyXG5cdFx0XHRpZiAodGhpcy5GaWxlc0dyb3VwSWR2YWx1ZSkge1xyXG5cdFx0XHRcdGNvbnN0IGJvZHkgPSB7XHJcblx0XHRcdFx0XHRGaWxlc0dyb3VwSWQ6IHRoaXMuRmlsZXNHcm91cElkdmFsdWUsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRjb25zdCB1cmwgPSB0aGlzLnVybCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhQmFzZSArIFwiL2NvcmUvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcblx0XHRcdFx0dGhpcy5odHRwLnBvc3QodXJsLCBib2R5LCB0aGlzLmh0dHBPcHRpb25KU09OKS5zdWJzY3JpYmUocmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuZGF0YXMgPSByZXM7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IGZpbGVfdXJsID0gdGhpcy5nbG9iYWxfdXJsICsgdGhpcy5kYXRhc1tpXS5GaWxlVXJsO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRhdGFzW2ldLkZpbGVVcmwgPSBmaWxlX3VybDtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc0ZpbGVzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuVXBsb2FkZWRGaWxlbGkgPSB0cnVlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0dXBsb2FkQW5kUHJvZ3Jlc3MoZmlsZXM6IEZpbGVbXSkge1xyXG5cdFx0dGhpcy5VcGxvYWRlZEZpbGVsaSA9IGZhbHNlO1xyXG5cdFx0dmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlc1swXSwgZmlsZXNbMF0ubmFtZSk7XHJcblx0XHRmb3JtRGF0YS5hcHBlbmQoJ2lkJywgdGhpcy5GaWxlSWQpO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlZ3JvdXBpZCcsIHRoaXMuRmlsZXNHcm91cElkdmFsdWUpO1xyXG5cdFx0Zm9ybURhdGEuYXBwZW5kKCdtZWRpYVR5cGUnLCAnZXhhbXBsZScpO1xyXG5cdFx0Ly8gZm9ybURhdGEuYXBwZW5kKCdkZXNjcmlwdGlvbicsIGZpbGVzWzBdLm5hbWUpO1xyXG5cdFx0aWYodGhpcy5uYW1lRmlsZSAhPSAnJyl7XHJcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnZGVzY3JpcHRpb24nLCB0aGlzLm5hbWVGaWxlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2Rlc2NyaXB0aW9uJywgZmlsZXNbMF0ubmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5odHRwLnBvc3QodGhpcy51cmwgKyAndXBsb2FkZXIvdXBsb2FkbmV3JywgZm9ybURhdGEsIHsgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsIG9ic2VydmU6ICdldmVudHMnIH0pLnN1YnNjcmliZShldmVudCA9PiB7XHJcblx0XHRcdGlmIChldmVudC50eXBlID09PSBIdHRwRXZlbnRUeXBlLlVwbG9hZFByb2dyZXNzKSB7XHJcblx0XHRcdFx0dGhpcy5wZXJjZW50RG9uZSA9IE1hdGgucm91bmQoMTAwICogZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgSHR0cFJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dGhpcy51cGxvYWRTdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLlVwbG9hZGVkRmlsZWxpID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLmZpbGVuYW1lID0gZXZlbnQuYm9keVtcIkRlc2NyaXB0aW9uXCJdXHJcblx0XHRcdFx0dGhpcy5maWxlbGluayA9IHRoaXMuZmlsZXVybCArIGV2ZW50LmJvZHlbXCJGaWxlVXJsXCJdXHJcblx0XHRcdFx0dGhpcy5pc0ZpbGVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuZmlsZVJlc3BvbnNlLmVtaXQoZXZlbnQuYm9keSk7XHJcblx0XHRcdFx0dGhpcy5nZXRMaXN0ZGF0YSgpXHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnVwbG9hZFN1Y2Nlc3MgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wZXJjZW50RG9uZSA9IDBcclxuXHRcdFx0XHR9LCAzMDAwKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblx0ZWRpdChkYXRhLCBpKSB7XHJcblx0XHR0aGlzLnRleHRkYXRhID0gZGF0YS5EZXNjcmlwdGlvblxyXG5cdFx0dGhpcy5jb250ZW50SW5kZXggPSBpO1xyXG5cdFx0dGhpcy5lZGl0Q29udGVudCA9IHRydWVcclxuXHR9XHJcblx0dXBkYXRlTmFtZShpZCkge1xyXG5cdFx0dmFyIHVybCA9IHRoaXMudXJsICsgXCJNb2RlbHMvRmlsZXM/YXBpX2tleT1cIiArIHRoaXMuR2VuZXJpY1Rva2VuXHJcblx0XHR2YXIgYm9keSA9IHtcclxuXHRcdFx0RmlsZXNJZDogaWQsXHJcblx0XHRcdERlc2NyaXB0aW9uOiB0aGlzLnRleHRkYXRhXHJcblx0XHR9XHJcblx0XHR0aGlzLmh0dHAucG9zdCh1cmwsIGJvZHkpLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLmdldExpc3RkYXRhKClcclxuXHRcdFx0dGhpcy5lc2MoKVxyXG5cdFx0fSlcclxuXHR9XHJcblx0ZXNjKCkge1xyXG5cdFx0dGhpcy5lZGl0Q29udGVudCA9IGZhbHNlXHJcblx0XHR0aGlzLmNvbnRlbnRJbmRleCA9IG51bGxcclxuXHR9XHJcblx0XHJcblx0RGVsZXRlRklsZXModmFsdWU6IGFueSk6IHZvaWQge1xyXG5cdFx0dGhpcy5odHRwLmRlbGV0ZSh0aGlzLnVybCArIFwiTW9kZWxzL2ZpbGVzL1wiICsgdmFsdWUgKyBcIj9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW4pLnN1YnNjcmliZShyZXMgPT4ge1xyXG5cdFx0XHRjb25zdCBib2R5ID0ge1xyXG5cdFx0XHRcdEZpbGVzR3JvdXBJZDogdGhpcy5GaWxlc0dyb3VwSWR2YWx1ZVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCB1cmwgPSB0aGlzLnVybCArIFwiRGF0YS9FeGVjL1wiICsgdGhpcy5kYXRhQmFzZSArIFwiL2NvcmUvRklMRVNfTGlzdD9hcGlfa2V5PVwiICsgdGhpcy5HZW5lcmljVG9rZW47XHJcblx0XHRcdHRoaXMuaHR0cC5wb3N0KHVybCwgYm9keSwgdGhpcy5odHRwT3B0aW9uSlNPTikuc3Vic2NyaWJlKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5kYXRhcyA9IFtdO1xyXG5cdFx0XHRcdHRoaXMuZGF0YXMgPSByZXM7XHJcblx0XHRcdFx0dGhpcy5pc0ZpbGVzID0gZmFsc2U7XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGFzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRsZXQgZmlsZV91cmwgPSB0aGlzLmdsb2JhbF91cmwgKyB0aGlzLmRhdGFzW2ldLkZpbGVVcmw7XHJcblx0XHRcdFx0XHR0aGlzLmRhdGFzW2ldLkZpbGVVcmwgPSBmaWxlX3VybDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5VcGxvYWRlZEZpbGVsaSA9IHRydWU7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9XHRcclxufVxyXG4iXX0=