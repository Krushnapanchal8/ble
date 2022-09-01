import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PressurePagePage } from './pressure-page.page';

const routes: Routes = [
  {
    path: '',
    component: PressurePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PressurePagePageRoutingModule {}
