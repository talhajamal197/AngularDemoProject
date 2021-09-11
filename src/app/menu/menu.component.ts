import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  dishes: Dish[];

  selected:Dish;
  constructor(private dishService: DishService) { }
  onSelect(d:Dish){
    this.selected=d;
    console.log(this.selected);
  }
 
  ngOnInit(): void {
    this.dishes=this.dishService.getDishes();
  }



}
