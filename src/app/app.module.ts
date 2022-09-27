import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {QrExporterModalComponent} from './views/partials/qr-exporter-modal/qr-exporter-modal.component'
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {QRCodeModule} from "angularx-qrcode";
import {RouterModule} from "@angular/router";
import {ShowHideInputTextModule} from "./views/partials/show-hide-input-text/show-hide-input-text.module";
import {AppRoutingModule} from "./app-routing.module";
import {SpinnerButtonModule} from "./views/partials/spinner-button/spinner-button.module";
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NewAccountComponent } from './views/pages/new-account/new-account.component';
import { QrImporterModalComponent } from './views/partials/qr-importer-modal/qr-importer-modal.component';
import {NgxQrcodeStylingModule} from "ngx-qrcode-styling";


@NgModule({
  declarations: [
    AppComponent,
    QrExporterModalComponent,
    FooterComponent,
    HeaderComponent,
    NewAccountComponent,
    QrImporterModalComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        AppRoutingModule,
        QRCodeModule,
        RouterModule,
        ShowHideInputTextModule,
        SpinnerButtonModule,
        NgxQrcodeStylingModule
    ],
  providers: [NewAccountComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
