import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {LoginComponent} from "../login/login.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-import-keystore',
  templateUrl: './import-keystore.component.html',
  styleUrls: ['./import-keystore.component.scss']
})
export class ImportKeystoreComponent implements OnInit {
  file: any;
  keystorePassword: string = '';

  keystorePasswordErr: boolean = false;
  fileErr: boolean = false;
  importKeystoreErrText: string = '';

  passwordMode: boolean = true;
  step: string = '';
  @Input() wallet: any;
  password: string = '';
  repeatPassword: string = '';
  passwordErr: boolean = false;
  repeatPasswordErr: boolean = false;
  passwordErrText: string = '';
  decodePassword: string = '';
  importBtn = {
    type: 'primary mr-2',
    loading: false
  };
  loading: boolean = false
  constructor(
    // public activeModal: NgbActiveModal,
    private walletService: WebWalletService,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    this.file = '';
    this.keystorePassword = '';
    this.fileErr = false;
    this.keystorePasswordErr = false;
    this.importKeystoreErrText = '';
  }

  onFileChange(e: any) {
    this.file = e.target.files[0];
  }

  login() {
    if (this.file && this.keystorePassword) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        // this.importBtn.loading = true;
        this.loading = true;
        const wallet = await this.walletService.importKeystoreWallet(reader.result, this.keystorePassword);
        if (wallet) {
          // this.activeModal.close();
          this.homeComponent.setLoginMode();

          // this.modalService.open(LoginComponent);
        } else {
          this.keystorePasswordErr = true;
          this.importKeystoreErrText = "Error wrong password."
        }
        // this.importBtn.loading = false;
        this.loading = false;
      };
      reader.readAsBinaryString(this.file);
    } else {
      this.keystorePasswordErr = true;
      this.fileErr = true;
      this.importKeystoreErrText = "Error uploading file.";
    }
  }

  verifyPassword(): boolean {
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

  confirm(){
    if (this.verifyPassword()) this.passwordMode = false
  }

  back(){
    this.homeComponent.importKeystoreMode = false
    this.homeComponent.newUserMode = true
  }
}
