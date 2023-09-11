import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfirmComponent} from "../confirm/confirm.component";
import {CheckoutComponent} from "../checkout/checkout.component";
import {CardComponent} from "../card/card.component";

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm', component: ConfirmComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {
}
