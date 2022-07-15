import {Component, Input, OnInit} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-import-private',
  templateUrl: './import-private.component.html',
  styleUrls: ['./import-private.component.scss']
})
export class ImportPrivateComponent implements OnInit {
  privateKey: string = "";
  privateKeyErr: boolean = false;
  password: string = "";
  repeatPassword: string = "";

  passwordErr: boolean = false;
  repeatPasswordErr: boolean = false;
  passwordErrText: string = "";

  passwordMode: boolean = true;
  step: string = '';
  @Input() wallet: any;
  decodePassword: string = '';

  constructor(
    // public activeModal: NgbActiveModal,
    private walletService: WebWalletService,
    private homeComponent: HomeComponent
    // private modalService: NgbModal,

  ) { }

  ngOnInit(): void {
    this.privateKey = '';
    this.privateKeyErr = false;
  }

  login() {
    if (this.verifyPassword()) {
      this.privateKeyErr = false;
      const wallet = this.walletService.importWalletFromPrivateKey(this.privateKey, this.password);
      if (wallet) {
        // this.activeModal.close();
        // this.modalService.open(LoginComponent);
        this.homeComponent.setLoginMode();
      } else {
        this.privateKeyErr = true;
      }
    }
  }

  verifyPassword(): boolean {
    this.passwordErr = false;
    this.repeatPasswordErr = false;

    if (this.password !== this.repeatPassword) {
      this.passwordErrText = "Error repeat password";
      this.passwordErr = true;
      this.repeatPasswordErr = true;
      // this.translate.get('signUp.errorRepeatPassword').subscribe((errorRepeatPassword: any) => {
      //   this.passwordErrText = errorRepeatPassword;
      //   this.passwordErr = true;
      //   this.repeatPasswordErr = true;
      // });

      return false;
    }
    if (!this.password) {
      this.passwordErrText = "Error empty password";
      this.passwordErr = true;
    /*this.translate.get('signUp.errorEmptyPassword').subscribe((errorEmptyPassword: any) => {
      this.passwordErrText = errorEmptyPassword;
      this.passwordErr = true;
    });*/
      return false;
    }
    this.passwordErrText = '';
    return true;
  }

  confirm(){
    if (this.verifyPassword()) this.passwordMode = false
  }

  back(){
    this.homeComponent.importPrivateKeyMode = false
    this.homeComponent.newUserMode = true
  }
}
