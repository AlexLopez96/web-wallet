import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { PasswordModalComponent } from './views/partials/password-modal/password-modal.component';
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
import { ImportKeystoreComponent } from './views/pages/import-keystore/import-keystore.component';
import { LoginComponent } from './views/pages/login/login.component';
import { ImportPrivateComponent } from './views/pages/import-private/import-private.component';
import { QrImporterModalComponent } from './views/partials/qr-importer-modal/qr-importer-modal.component';
import { ImportMnemonicComponent } from './views/pages/import-mnemonic/import-mnemonic.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordModalComponent,
    QrExporterModalComponent,
    FooterComponent,
    HeaderComponent,
    NewAccountComponent,
    ImportKeystoreComponent,
    LoginComponent,
    ImportPrivateComponent,
    QrImporterModalComponent,
    ImportMnemonicComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        AppRoutingModule,
        QRCodeModule,
        RouterModule,
        ShowHideInputTextModule,
        SpinnerButtonModule
    ],
  providers: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
