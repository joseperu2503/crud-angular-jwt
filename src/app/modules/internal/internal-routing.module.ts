import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { InternalComponent } from './internal.component';

const routes: Routes = [
  {
    path: '',
    component: InternalComponent,
    children: [
      {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full'
      },
      {
        path: 'articles',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
      {
        path: 'profile',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),

      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
