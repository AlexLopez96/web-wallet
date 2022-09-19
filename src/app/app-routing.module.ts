import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewAccountComponent} from "./views/pages/new-account/new-account.component";


const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./views/pages/home/home.module').then(m => m.HomeModule)
  // },
  {
    path: '', component: NewAccountComponent
  },
  {
    path: 'paper-wallet/:address/:privateKey',
    loadChildren: () => import('./views/pages/paper-wallet/paper-wallet.module').then(m => m.PaperWalletModule)
  },

  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
