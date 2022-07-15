import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadDataService {
  verifiedPassword: boolean = false;

  constructor() {
  }

  download(filename: any, href: any) {
    if (this.verifiedPassword) {
      const tempLink = document.createElement('a');
      tempLink.setAttribute('href', href);

      if (filename) {
        tempLink.setAttribute('download', filename);
      }

      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }

  }
}
