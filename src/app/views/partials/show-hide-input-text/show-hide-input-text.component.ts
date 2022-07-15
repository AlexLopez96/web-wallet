import {
    AfterContentInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    Renderer2
} from '@angular/core';

import {first} from 'rxjs/operators';
import {QrExporterService} from '../../../services/qr-exporter/qr-exporter.service';
import {QrImporterService} from "../../../services/qr-importer/qr-importer.service";


declare let $: any;

@Component({
    selector: 'app-show-hide-input-text',
    templateUrl: './show-hide-input-text.component.html',
    styleUrls: ['./show-hide-input-text.component.scss']
})
export class ShowHideInputTextComponent implements OnInit, AfterContentInit {
    @Input() exportQr: boolean = false;
    @Input() importQr: boolean = false;
    input: any;
    isHidden: boolean = false;
    emptyValue: boolean = false;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        private qrImporterService: QrImporterService,
        private qrExporterService: QrExporterService
    ) {
    }

    ngOnInit() {
    }


    ngAfterContentInit() {
        this.input = this.el.nativeElement.querySelector('input');
        if (this.input) {
            this.isHidden = this.input.type === 'password';
        }
        $(this.input).on('keyup', (e: any) => {
            if (e.currentTarget.value) {
                this.emptyValue = false;
            } else {
                this.emptyValue = true;
            }
        });
    }

    public toggleShow(): void {
        this.isHidden = !this.isHidden;
        this.renderer.setAttribute(this.input, 'type', this.isHidden ? 'password' : 'text');
    }

  showQrImporter() {
    this.qrImporterService.showQrImporter()
      .pipe(
        first()
      )
      .subscribe((qrText: any) => {
        this.input = this.el.nativeElement.querySelector('input');
        this.input.value = qrText;
        this.input.dispatchEvent(new Event('input'));
      });
  }

    showQrExporter() {
        this.qrExporterService.showQrExporter(this.input.value);
    }

}
