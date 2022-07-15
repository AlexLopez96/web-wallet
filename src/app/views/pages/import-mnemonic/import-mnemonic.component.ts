import {Component, Input, OnInit} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-import-mnemonic',
  templateUrl: './import-mnemonic.component.html',
  styleUrls: ['./import-mnemonic.component.scss']
})
export class ImportMnemonicComponent implements OnInit {
  mnemonic: string = '';
  mnemonicErr: boolean = false;

  password: string = '';
  repeatPassword: string = '';

  passwordErr: boolean = false;
  repeatPasswordErr: boolean = false;
  passwordErrText: string = '';

  passwordMode: boolean = true;
  step: string = '';
  @Input() wallet: any;
  decodePassword: string = '';

  constructor(
    private walletService: WebWalletService,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    this.mnemonic = '';
    this.mnemonicErr = false;
  }

  login() {
    this.mnemonicErr = false;
    const wallet = this.walletService.importWalletFromMnemonic(this.mnemonic, this.password);
    console.log(wallet, "wallet")
    if (wallet) {
      // this.activeModal.close();
      // this.modalService.open(LoginComponent);
      this.homeComponent.setLoginMode();
    } else {
      this.mnemonicErr = true;
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
    this.homeComponent.importMnemonicMode = false
    this.homeComponent.newUserMode = true
  }
}
