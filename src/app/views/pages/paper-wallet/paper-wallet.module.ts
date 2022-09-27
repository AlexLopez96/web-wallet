import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PaperWalletComponent} from './paper-wallet.component';
import {QRCodeModule} from 'angularx-qrcode';
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";


@NgModule({
  declarations: [PaperWalletComponent],
    imports: [
        CommonModule,
        QRCodeModule,
        RouterModule.forChild([
            {
                path: '',
                component: PaperWalletComponent
            }
        ]),
        NgxQrcodeStylingModule,
    ]
})
export class PaperWalletModule {
}
