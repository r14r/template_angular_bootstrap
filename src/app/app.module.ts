import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperService } from './@shared/services/helper.service';
import { TranslateModule } from '@ngx-translate/core';

import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';

import { SharedModule } from './@shared/shared.module';
import { ShellModule } from './@shared/shell/module';
import { HomePageModule } from './@pages/home/module';
import { ExamplesPageModule } from './@pages/examples/module';
import { ApiPrefixInterceptor } from './@shared/http/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './@shared/http/error-handler.interceptor';
import { RouteReusableStrategy } from './@shared/route-reusable-strategy';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    SharedModule,
    ShellModule,
    HomePageModule,
    ExamplesPageModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
    Keyboard,
    StatusBar,
    SplashScreen,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  helper: HelperService;

  constructor() {
    this.helper = new HelperService('AppModule');
  }
}
