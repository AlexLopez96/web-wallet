import { Injectable } from '@angular/core';
import {ethers} from "ethers";
import {EncryptionService} from "../encryption/encryption.service";


@Injectable({
  providedIn: 'root'
})
export class WebWalletService {
  wallet: any
  public decodePassword: string = '';
  password: any;
  signer: any;
  public passwordMode = true;


  constructor(
    public encryptionService: EncryptionService,
  ) { }

  public newWallet(password: any): any {

    this.wallet = ethers.Wallet.createRandom();
    // this.saveKey(password)
    // this.saveKey(this.password);
    // this.webWalletConnect(this.webWallet);
    return this.wallet;
  }

  async generateKeystore(password: string) {
    return await this.wallet.encrypt(password);
  }

  saveKey(password: string) {
    this.decodePassword = password;
    localStorage.setItem('encryptedKey', String(this.encryptionService.encrypt(this.wallet.privateKey, password)));
  }

  async importKeystoreWallet(keystore: any, password: string) {
    try {
      this.wallet = await ethers.Wallet.fromEncryptedJson(keystore, password);
      this.saveKey(password);
      return this.wallet;
    } catch (error) {
      return false;
    }

  }

  importWalletFromPrivateKey(privateKey: string, password: string) {
    try {
      if (!privateKey.startsWith('0x')) {
        privateKey = '0x' + privateKey;
      }
      this.wallet = new ethers.Wallet(privateKey);
      this.saveKey(password);
      return this.wallet;
    } catch (error) {
      return false;
    }
  }

  importWalletFromMnemonic(mnemonic: string, password: string) {
    try {

      this.wallet = ethers.Wallet.fromMnemonic(mnemonic);
      this.saveKey(password);
      return this.wallet;
    } catch (error) {
      return false;
    }
  }

  clearKey() {
    localStorage.removeItem('encryptedKey');
  }


  importWalletFromStorage(password: string) {
    const privateKey = this.encryptionService.decrypt(localStorage.getItem('encryptedKey'), password);
    this.wallet = new ethers.Wallet(privateKey);
    this.webWalletConnect(this.wallet);
  }

  async webWalletConnect(signer: any) {
    this.signer = signer;
  }

  getSavedKey() {
    return localStorage.getItem('encryptedKey');
  }

}
