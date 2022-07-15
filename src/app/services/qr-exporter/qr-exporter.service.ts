import {Injectable} from '@angular/core';
import {QrExporterModalComponent} from '../../views/partials/qr-exporter-modal/qr-exporter-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Injectable({
  providedIn: 'root'
})
export class QrExporterService {
  qrData: string = '';

  constructor(
    private modalService: NgbModal,
  ) {
  }

  showQrExporter(qrData: any) {
    if (qrData) {
      this.qrData = qrData;
      this.modalService.open(QrExporterModalComponent, {size: 'lg'});
    }
  }
}
