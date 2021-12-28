import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './routing.module';
import { HomePageComponent } from './component';

@NgModule({
  imports: [CommonModule, HomePageRoutingModule],
  declarations: [HomePageComponent],
})
export class HomePageModule {}
