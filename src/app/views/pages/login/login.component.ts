import {ApplicationRef, Component, OnInit} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {HomeComponent} from "../home/home.component";
import {NewAccountComponent} from "../new-account/new-account.component";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password: string = '';
  passwordErr: boolean = false;
  constructor(
    private walletService: WebWalletService,
    private homeComponent: HomeComponent,
    private appRef: ApplicationRef
  ) { }

  ngOnInit(): void {
  }

  clearWallet() {
    this.walletService.clearKey();
    // this.modalService.open(SignupComponent, {size: 'lg', scrollable: true});
    this.homeComponent.setNewUserMode();

  }

  async login() {
    try {
      this.walletService.importWalletFromStorage(this.password);
      if (this.walletService.wallet) {
        // this.activeModal.close();

        await this.homeComponent.setNewWalletMode()
        this.walletService.passwordMode = false
        this.appRef.tick()

        // this.homeComponent.setLoginMode();
      }
    } catch (e) {
      this.passwordErr = true;
    }

  }

}
