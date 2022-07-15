import { Component, OnInit } from '@angular/core';
import {QrExporterService} from '../../../services/qr-exporter/qr-exporter.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-qr-exporter-modal',
  templateUrl: './qr-exporter-modal.component.html',
  styleUrls: ['./qr-exporter-modal.component.scss']
})
export class QrExporterModalComponent implements OnInit {

  constructor(
    public qrExporterService: QrExporterService,
    public activeModal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

}
