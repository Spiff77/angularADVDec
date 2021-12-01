import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BComponent} from './b/b.component';
import {BChildComponent} from './b-child/b-child.component';
import {SharedModule} from '../shared/shared.module';
import { B1Component } from './b1/b1.component';
import {Routes} from '@angular/router';


const routes: Routes = [
  {path : 'b1', component: B1Component}
]

@NgModule({
  declarations: [
    BComponent,
    BChildComponent,
    B1Component,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BComponent
  ]
})
export class BmModule { }
