import {Component, Injector} from '@angular/core';
import {FoodService} from './food.service';
import {VehicleService} from './vehicle.service';
import {TranslateService} from '@ngx-translate/core';
import {from, interval, of, zip} from 'rxjs';
import {concatMap, map, mergeMap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation';
  lang=''

  constructor(private injector: Injector, private translateService: TranslateService) {
    const lang = localStorage.getItem('lang') || 'fr'
    this.lang = lang
    this.translateService.setDefaultLang(lang)

  }



  changeLang(target: any) {
    localStorage.setItem('lang', target.value)
    this.translateService.use(target.value)
  }
}
