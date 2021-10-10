import { Component, OnInit,Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import { Location } from '@angular/common';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit {
    @Input()
    dish: Dish;
    
 
  
  
    constructor(private dishservice: DishService,
      private route: ActivatedRoute,
      private location: Location) { }
  
    ngOnInit() {
      let id:any = this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
    }
}
