import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinnerButtonComponent} from './spinner-button.component';



@NgModule({
  declarations: [SpinnerButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerButtonComponent
  ]
})
export class SpinnerButtonModule { }
