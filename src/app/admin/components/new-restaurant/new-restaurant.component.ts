import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/models/restaurant';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {
  restaurant : Restaurant = {
    $key: '',
    name: '',
    displayName: '',
    location: '',
    imageUrl: '',
  };

  model: any = {};
  constructor(private restaurantService: RestaurantService,
              private router: Router ) { }

  ngOnInit() {
  }
  onSubmit( restaurant) {
    console.log(restaurant);
    this.restaurantService.create(restaurant);
    this.router.navigate(['admin/restaurants/our-restaurants'])
  }

}
