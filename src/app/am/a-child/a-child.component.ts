import {Component, Injector, OnInit} from '@angular/core';
import {FoodService} from '../../food.service';
import {VehicleService} from '../../vehicle.service';

@Component({
  selector: 'app-a-child',
  templateUrl: './a-child.component.html',
  styleUrls: ['./a-child.component.css'],
})
export class AChildComponent implements OnInit {

  s!: FoodService | VehicleService

  constructor() { }

  ngOnInit(): void {
    const injector = Injector.create([{provide: FoodService}, {provide: VehicleService}])
    this.s = injector.get(FoodService)
  }

}
