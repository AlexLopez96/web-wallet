import {Injectable} from '@angular/core';

declare var $: any;
import jsQR from 'jsqr';
import {Subject} from 'rxjs';
import {QrImporterModalComponent} from '../../views/partials/qr-importer-modal/qr-importer-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class QrImporterService {
  modal: any;
  canvas: any;
  video: any;
  loadingMessage: any;
  findCode: any;
  qrCanvasElement: any;
  qrText$: Subject<string>;

  constructor(
    private modalService: NgbModal,
  ) {
    this.qrText$ = new Subject();

    // $('#qr-importer-modal').on('hidden.bs.modal', (e) => {
    //   this.findCode = true;
    // });
  }

  showQrImporter(): Subject<string> {
    this.modal = this.modalService.open(QrImporterModalComponent, {size: 'lg'});

    this.findCode = false;
    this.video = $('<video />');
    this.qrCanvasElement = $('#qr-canvas');
    this.canvas = this.qrCanvasElement[0].getContext('2d');
    this.loadingMessage = $('#loadingMessage')[0];

    // Use facingMode: environment to attemt to get the front camera on phones
    navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}}).then((stream) => {
      this.video[0].srcObject = stream;
      this.video.attr('playsinline', ''); // required to tell iOS safari we don't want fullscreen
      this.video[0].play();

      requestAnimationFrame(() => {
        this.tick();
      });
    });

    // $('#qr-importer-modal').modal('show');


    return this.qrText$;
  }

  drawLine(begin: any, end: any, color: any) {
    this.canvas.beginPath();
    this.canvas.moveTo(begin.x, begin.y);
    this.canvas.lineTo(end.x, end.y);
    this.canvas.lineWidth = 4;
    this.canvas.strokeStyle = color;
    this.canvas.stroke();
  }

  tick() {
    if (this.video[0].readyState === this.video[0].HAVE_ENOUGH_DATA) {
      this.loadingMessage.hidden = true;
      this.qrCanvasElement[0].hidden = false;
      this.qrCanvasElement[0].height = this.video[0].videoHeight;
      this.qrCanvasElement[0].width = this.video[0].videoWidth;

      this.canvas.drawImage(this.video[0], 0, 0, this.qrCanvasElement[0].width, this.qrCanvasElement[0].height);
      const imageData = this.canvas.getImageData(0, 0, this.qrCanvasElement[0].width, this.qrCanvasElement[0].height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);
      if (code && !this.findCode) {
        this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, '#FF3B58');
        this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, '#FF3B58');
        this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, '#FF3B58');
        this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, '#FF3B58');

        if (code.data) {
          this.findCode = true;
          this.qrText$.next(code.data);
          // $('#qr-importer-modal').modal('hide');
          this.modal.close();
        }
      }
    }

    if (!this.findCode) {
      requestAnimationFrame(() => {
        this.tick();
      });
    }
  }
}
