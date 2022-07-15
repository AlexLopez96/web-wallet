import {Component, Input, OnInit} from '@angular/core';
import {DownloadDataService} from "../../../services/download-data/download-data.service";

@Component({
    selector: 'app-spinner-button',
    templateUrl: './spinner-button.component.html',
    styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent implements OnInit {
    @Input() options: any;

    constructor(
      public downloadService: DownloadDataService
    ) {
    }

    ngOnInit() {
    }

}
