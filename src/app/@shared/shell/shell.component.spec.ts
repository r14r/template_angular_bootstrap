import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AuthenticationService, CredentialsService } from '@app/@shared/auth';
import { MockAuthenticationService } from '@app/@shared/auth/authentication.service.mock';
import { MockCredentialsService } from '@app/@shared/auth/credentials.service.mock';

import { I18nModule } from '@app/@shared/i18n';
import { ShellComponent } from './component';
import { HeaderComponent } from './header/component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TranslateModule.forRoot(), I18nModule, RouterTestingModule],
        providers: [
          {
            provide: AuthenticationService,
            useClass: MockAuthenticationService,
          },
          { provide: CredentialsService, useClass: MockCredentialsService },
        ],
        declarations: [HeaderComponent, ShellComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
