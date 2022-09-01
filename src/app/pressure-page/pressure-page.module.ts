import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PressurePagePageRoutingModule } from './pressure-page-routing.module';

import { PressurePagePage } from './pressure-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PressurePagePageRoutingModule
  ],
  declarations: [PressurePagePage]
})
export class PressurePagePageModule {}
