import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BComponent} from './b/b.component';
import {BChildComponent} from './b-child/b-child.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {HeaderComponent} from '../shared/header/header.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    BComponent,
    BChildComponent,
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
