import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt(data: any, password: any) {
    return CryptoJS.AES.encrypt(data, password);
  }
  decrypt(data: any, password: any) {
    const bytes = CryptoJS.AES.decrypt(data, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  /*decrypt(data, password) {
    const bytes = CryptoJS.AES.decrypt(data, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }*/
}
