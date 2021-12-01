import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AComponent} from './a/a.component';
import {AChildComponent} from './a-child/a-child.component';
import {SharedModule} from '../shared/shared.module';
import {A1Component} from './a1/a1.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path : 'a-single', component: AComponent},
  {path : 'a1', component: A1Component}
]


@NgModule({
  declarations: [
    AComponent,
    AChildComponent,
    A1Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    AComponent,
  ],
})
export class AmModule { }
