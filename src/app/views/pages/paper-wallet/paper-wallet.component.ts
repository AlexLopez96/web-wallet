import {AfterViewInit, ApplicationRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Options} from "ngx-qrcode-styling";

@Component({
  selector: 'app-paper-wallet',
  templateUrl: './paper-wallet.component.html',
  styleUrls: ['./paper-wallet.component.scss']
})
export class PaperWalletComponent implements AfterViewInit {
  wallet: any = '';
  qrdata: string = '';
  constructor(private route: ActivatedRoute, appRef: ApplicationRef) {
    this.wallet = this.route.snapshot.params;
    console.log(this.wallet)

    appRef.tick()
  }

  public config: Options = {

  };

  ngOnInit(): void {
    //   this.wallet =  {
    //   address: '0xE858a16cdF88364e072212e5A15026dd0125F629',
    //   privateKey: '0x8d50f96dcc12d41a705bc0ae195843b1d9fc87e62a1136377b8d032a241a0c1d',
    // };
    this.config = {
      width: 258,
      height: 258,
      data: this.wallet.address,
      image: "assets/img/iconwhite-background.png",
      margin: 5,
      dotsOptions: {
        color: "#000000",
        type: "classy"
      },
      backgroundOptions: {
        color: "#0000",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 0,
        imageSize: 0.4,
        hideBackgroundDots: false
      },
      cornersSquareOptions: {
        color: "#ac9765"
      }
    }
  }
  ngAfterViewInit(): void {
    this.delay(500).then(()=>{
      window.print();

    })
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
