import React from 'react';
import { BreadcrumbComponent } from 'sml-comp-nine';


const Finnote = () => {
    return (
        <div>
    <div class="row">
        <div class="col-md-12 d-flex align-items-center mb-3">
            <b class="mainHeadingh">
                Notice (ID {{Finnote.FinnoteId}})
            </b>
            <span class="line"></span>
            <div class="buttonGroup">
                <div class="col-lg-12 d-flex justify-content-between">
                    <!-- <button (click)="saveNotice(true, false,true);" class="btn btn-sm btn-success mx-1">Save</button> -->
                    
                    <div style="width: 210px; margin-right: 5px;">
                        <sml-input-select class="dd" *ngIf="!isRebindAssignedToUsers"
                            label="Assigned To" (selectvalue)="beforeSave('AssignedToUsers', Finnote.UsersIdAssignedTo, $event); savesFinnote(false, false);"
                            [listValue]="AssignedToUsers" [value]="Finnote.UsersIdAssignedTo"
                            [signalStyle]="false" [staticStyle]="true" [switchStyle]="true"
                            [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle" [disabled]="false">
                        </sml-input-select>
                    </div>
                    <div style="width: 140px; margin-right: 5px;">
                        <sml-input-datepicker name="responseDate" label="Follow Up Date" [format]="inputObject.format"
                            [value]="Finnote.FollowUpDate" (getvalue)="beforeSave('FollowUpDate', Finnote.FollowUpDate, $event); savesFinnote(false, false);" 
                            [signalStyle]="false" [staticStyle]="true" [switchStyle]="true"
                            [style]="labelStyle" [borderStyle]="borderStyle" [valueStyle]="valueStyle" [readOnly]="false">
                        </sml-input-datepicker>
                    </div>
                    <div class="mr-2">
                        <!-- <button *ngIf="Finnote.NoticeNewStatusId == 2056" (click)="newCancellation()" class="btn btn-sm btn-secondary mr-2" style="height: 45px !important;">Cancellation</button> -->
                    </div>
                    <div>
                        <button (click)="cancelNotice()" class="btn btn-sm btn-secondary" style="height: 45px !important; background-color: red !important; border-color: red;">Exit</button>
                    </div>
                </div>
            </div>
        </div>
	</div>
    </div>
    );
}

export default Finnote;
