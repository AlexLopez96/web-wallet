import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-paper-wallet',
  templateUrl: './paper-wallet.component.html',
  styleUrls: ['./paper-wallet.component.scss']
})
export class PaperWalletComponent implements OnInit {
  wallet: any = '';
  qrdata: string = '';
  constructor(private route: ActivatedRoute) {
    this.wallet = this.route.snapshot.params;
    window.print();
  }

  ngOnInit(): void {
    //   this.wallet =  {
    //   address: '0xE858a16cdF88364e072212e5A15026dd0125F629',
    //   privateKey: '0x8d50f96dcc12d41a705bc0ae195843b1d9fc87e62a1136377b8d032a241a0c1d',
    // };


  }

}
