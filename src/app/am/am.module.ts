import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AComponent} from './a/a.component';
import {AChildComponent} from './a-child/a-child.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    AComponent,
    AChildComponent,
  ],
  exports: [
    AComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AmModule { }
