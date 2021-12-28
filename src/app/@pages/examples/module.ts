import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesPageRoutingModule } from './routing.module';
import { ExamplesPageComponent } from './component';

@NgModule({
  imports: [CommonModule, ExamplesPageRoutingModule],
  declarations: [ExamplesPageComponent],
})
export class ExamplesPageModule {}
