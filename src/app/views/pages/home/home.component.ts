import {Component, Input, OnInit} from '@angular/core';
import {ethers} from 'ethers';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PasswordModalComponent} from "../../partials/password-modal/password-modal.component";
import {ClipboardService} from "ngx-clipboard";
import {UtilsService} from "../../../services/utils/utils.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() exportQr: boolean = false;
  wallet: any;
  qrdata: string = '';
  newUserMode: boolean = false;
  loginMode: boolean = false;
  createWalletMode: boolean = false;
  importKeystoreMode: boolean = false;
  importPrivateKeyMode: boolean = false;
  importMnemonicMode: boolean = false;

  constructor(
    public modalService: NgbModal,
    public walletService:  WebWalletService,
    utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    if (this.walletService.getSavedKey()) {
      this.loginMode = true
    }else{
      this.newUserMode = true
    }
  }

  setNewUserMode(){
    this.newUserMode = true;
    this.loginMode = false;
    this.createWalletMode = false;
    this.importKeystoreMode = false;
    this.importPrivateKeyMode = false;
    this.importMnemonicMode = false;
  }
  setLoginMode(){
    this.loginMode = true;
    this.newUserMode = false;
    this.createWalletMode = false;
    this.importKeystoreMode = false;
    this.importPrivateKeyMode = false;
    this.importMnemonicMode = false;
  }
  setNewWalletMode(){
    this.createWalletMode = true;
    this.walletService.passwordMode = true;
    this.newUserMode = false;
    this.importKeystoreMode = false;
    this.importPrivateKeyMode = false;
    this.importMnemonicMode = false;
    this.loginMode = false;
  }
  setImportKeyStore(){
    this.importKeystoreMode = true;
    this.newUserMode = false;
    this.loginMode = false;
    this.createWalletMode = false;
    this.importPrivateKeyMode = false;
    this.importMnemonicMode = false;
  }
  setImportPrivateKeyMode(){
    this.importPrivateKeyMode = true;
    this.newUserMode = false;
    this.loginMode = false;
    this.createWalletMode = false;
    this.importKeystoreMode = false;
    this.importMnemonicMode = false;
  }
  setImportMnemonicMode(){
    this.importMnemonicMode = true;
    this.newUserMode = false;
    this.loginMode = false;
    this.createWalletMode = false;
    this.importKeystoreMode = false;
    this.importPrivateKeyMode = false;
  }
}
