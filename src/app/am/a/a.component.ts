import {Component, Injector, Input, OnInit} from '@angular/core';
import {FoodService} from '../../food.service';
import {VehicleService} from '../../vehicle.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent implements OnInit {

  @Input() type = 'vehicle'
  s: any;

  constructor(private injector: Injector ) { }

  ngOnInit(): void {
    if(this.type === 'vehicle'){
      this.s = this.injector.get(VehicleService)
    }else{
      this.s = this.injector.get(FoodService)
    }
  }
}
