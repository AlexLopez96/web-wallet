import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WebWalletService} from "../../../services/web-wallet/web-wallet.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Options} from "ngx-qrcode-styling";
import {UtilsService} from "../../../services/utils/utils.service";
import {ThemeService} from "../../../services/theme/theme.service";

declare var $: any;
declare var window: any;
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  @ViewChild('walledContent') set walledContent(el: any) {
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'hover'
    });
    $('.copy-data').click((ev: any) => {
      this.utils.copyText($(ev.currentTarget).data('text'));
      /*Swal.fire({
        icon: 'success',
        title: 'Copied!',
        text: 'The text has been copied'
      });*/
      const originalTitle = $(ev.currentTarget).attr('data-original-title');
      $(ev.currentTarget).attr('data-original-title', 'Copied!').tooltip('show');
      setTimeout((event, title) => {
        $(event.currentTarget).attr('data-original-title', title).tooltip('hide');
      }, 2000, ev, originalTitle);
    });
  }

  wallet: any;
  newUserMode: boolean = false;

  step: string = '';

  password: string = "";

  public config: Options = {
  };

  constructor(
    public modalService: NgbModal,
    public walletService:  WebWalletService,
    public utils: UtilsService,
    public themeService: ThemeService
  ) {

  }

  ngOnInit(): void {
    this.createWallet()

    this.config = {
      width: 190,
      height: 190,
      data: this.wallet.address,
      image: "assets/img/iconwhite-background.png",
      margin: 5,
      dotsOptions: {
        color: "#000000",
        type: "classy"
      },
      backgroundOptions: {
        color: "#f7f7f7",
        round: 0,
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

  createWallet(){
    this.wallet = this.walletService.newWallet(this.password);
    this.newUserMode = true
  }


  async copy(data: string) {
    const type = "text/plain";
    const blob = new Blob([data], {type});
    const item = [new ClipboardItem({[type]: blob})]
    await navigator.clipboard.write(item);
  }


}
