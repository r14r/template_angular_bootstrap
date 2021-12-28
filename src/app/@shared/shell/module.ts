import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { I18nModule } from '@app/@shared/i18n';
import { AuthModule } from '@app/@shared/auth';
import { ShellComponent } from './component';
import { HeaderComponent } from './header/component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AuthModule,
    I18nModule,
    RouterModule,
  ],
  declarations: [HeaderComponent, ShellComponent],
})
export class ShellModule {}
