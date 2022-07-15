import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EncryptionService} from "../../../services/encryption/encryption.service";
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {DownloadDataService} from "../../../services/download-data/download-data.service";
// import {DownloadKeystoreComponent} from "../download-keystore/download-keystore.component";

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.component.html',
  styleUrls: ['./password-modal.component.scss']
})
export class PasswordModalComponent implements OnInit {
  step: string = '';
  @Input() wallet: any;
  password: string = '';
  repeatPassword: string = '';
  passwordErr: boolean = false;
  repeatPasswordErr: boolean = false;
  passwordErrText: string = '';
  decodePassword: string = '';
  keystoreBtn = {
    type: 'primary mr-2',
    loading: false
  };

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public encryptionService: EncryptionService,
    public walletService:  WebWalletService,
    public downloadService: DownloadDataService,
    // public downloadKeystoreComponent: DownloadKeystoreComponent,
  ) {
  }

  ngOnInit() {
    this.password = '';
    this.repeatPassword = '';
    this.step = 'newPassword';
    console.log(this.wallet, "WALLET")
  }

  async downloadKeystore(){
    this.decodePassword = this.password;
    this.downloadService.verifiedPassword = this.verifyPassword();

    if(this.downloadService.verifiedPassword){
      this.keystoreBtn.loading = true;
      const json = await this.walletService.generateKeystore(this.password);
      const date = new Date();
      const filename = ['UTC--', date.toJSON().replace(/:/g, '-'), '--', this.wallet.address.toString('hex')].join('');
      const blob = new Blob([json], {type: 'text/json;charset=UTF-8'});
      this.downloadService.download(filename, window.URL.createObjectURL(blob));
      this.keystoreBtn.loading = false;
    }
  }

  verifyPassword(): boolean {
    console.log(this.password,"aaa")
    this.passwordErr = false;
    this.repeatPasswordErr = false;
    if (this.password !== this.repeatPassword) {

      this.passwordErrText = "Wrong password";
      this.passwordErr = true;
      this.repeatPasswordErr = true;
      return false;
    }
    if (!this.password) {
      this.passwordErrText = "Empty password";
      this.passwordErr = true;
      return false;
    }
    this.passwordErrText = '';
    return true;
  }

}
