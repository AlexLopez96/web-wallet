import { Injectable } from '@angular/core';
import {ClipboardService} from "ngx-clipboard";
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private clipboardService: ClipboardService
  ) {
    $(document).on('click', '.copy-data', (ev: any) => {
      this.copyText($(ev.currentTarget).data('text'));
      const originalTitle = $(ev.currentTarget).attr('data-original-title');
      $(ev.currentTarget).attr('data-original-title', 'Copied!').tooltip('show');
      setTimeout((event, title) => {
        $(event.currentTarget).attr('data-original-title', title).tooltip('hide');
      }, 2000, ev, originalTitle);
    });
  }

  copyText(text: string) {
    this.clipboardService.copyFromContent(text);
  }

}
