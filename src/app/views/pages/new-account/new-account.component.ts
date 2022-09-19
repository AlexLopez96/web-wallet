import {Component, Input, OnInit} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  wallet: any;
  newUserMode: boolean = false;

  step: string = '';

  password: string = "";

  constructor(
    public modalService: NgbModal,
    public walletService:  WebWalletService,
  ) { }

  ngOnInit(): void {
    this.createWallet()
  }

  createWallet(){
    this.wallet = this.walletService.newWallet(this.password);
    this.newUserMode = true
  }

}
