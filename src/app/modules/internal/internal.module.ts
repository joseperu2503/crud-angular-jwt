import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { InternalComponent } from './internal.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    InternalComponent,
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MaterialModule
  ]
})
export class InternalModule { }
