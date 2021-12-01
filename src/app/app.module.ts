import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BmModule} from './bm/bm.module';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path : 'a', loadChildren: () => import('./am/am.module').then( module => module.AmModule)},
  {path : 'b', loadChildren: () => import('./bm/bm.module').then( module => module.BmModule)},
  {path : '', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
