import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  $users!: Observable<any>
  $products!: Observable<any>

  constructor(private us: UserService, private ps: ProductService) { }

  ngOnInit(): void {
    this.$users = this.us.getAll();
    this.$products = this.ps.getAll();
  }

}
