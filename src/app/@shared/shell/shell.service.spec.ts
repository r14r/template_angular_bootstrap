import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuard, AuthenticationService } from '@app/@shared/auth';
import { MockAuthenticationService } from '@app/@shared/auth/authentication.service.mock';
import { ShellComponent } from './component';
import { Shell } from './service';

describe('Shell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
      providers: [
        AuthenticationGuard,
        { provide: AuthenticationService, useClass: MockAuthenticationService },
      ],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      // Prepare
      const testRoutes = [{ path: 'test' }];

      // Act
      const result = Shell.childRoutes(testRoutes);

      // Assert
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
