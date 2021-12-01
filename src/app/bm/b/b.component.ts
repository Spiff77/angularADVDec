import { Component, OnInit } from '@angular/core';
import {FoodService} from '../../food.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(public fs: FoodService) { }

  ngOnInit(): void {
  }

}
