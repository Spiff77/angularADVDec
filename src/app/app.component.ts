import {Component, Injector} from '@angular/core';
import {FoodService} from './food.service';
import {VehicleService} from './vehicle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formation';

  constructor(private injector: Injector) {
  }
}
