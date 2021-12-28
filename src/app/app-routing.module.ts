import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Shell } from './@shared/shell/service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'home',
      loadChildren: () =>
        import('./@pages/home/module').then((m) => m.HomePageModule),
    },
  ]),
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
