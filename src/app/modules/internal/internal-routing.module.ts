import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
        loadChildren: () =>
          import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
