import {Component, Input, OnInit} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PasswordModalComponent} from "../../partials/password-modal/password-modal.component";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  wallet: any;
  newUserMode: boolean = false;

  passwordErr: boolean = false;
  repeatPasswordErr: boolean = false;
  passwordErrText: string = "";

  passwordMode: boolean = false;
  // cameFromLogin: boolean = false;
  step: string = '';
  decodePassword: string = '';

  password: string = "";
  repeatPassword: string = "";

  constructor(
    public modalService: NgbModal,
    public walletService:  WebWalletService,
    public homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    this.createWallet()
    // this.passwordMode = this.walletService.passwordMode

    // if (this.walletService.wallet) this.wallet = this.walletService.wallet
  }

  openKeystoreModal(){
    let modal = this.modalService.open(PasswordModalComponent, {size: 'lg', scrollable: true});
    modal.componentInstance.wallet = this.wallet;
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
    this.createWallet()
    return true;
  }

  createWallet(){
   /* this.wallet = this.walletService.wallet;
    if (this.wallet === null || this.wallet === undefined){
      this.wallet = this.walletService.newWallet(this.password);
      this.newUserMode = true
    }else this.newUserMode = false*/
    this.wallet = this.walletService.newWallet(this.password);
    this.newUserMode = true
  }

}
