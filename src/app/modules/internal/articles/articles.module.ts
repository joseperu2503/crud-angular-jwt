import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { MaterialModule } from '../../material/material.module';
import { ArticleForm } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleForm,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
