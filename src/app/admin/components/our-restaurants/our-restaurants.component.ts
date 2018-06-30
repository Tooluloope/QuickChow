import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Restaurant } from '../../../shared/models/restaurant';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-our-restaurants',
  templateUrl: './our-restaurants.component.html',
  styleUrls: ['./our-restaurants.component.scss']
})
export class OurRestaurantsComponent implements OnInit {
  restaurantList: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }
  rows= [];
  columns = [
    { prop: 'Restaurant' },
    { name: 'Location' },
    { name: 'Delivery' }
  ];

  ngOnInit() {
    var x = this.restaurantService.getAll()
      .snapshotChanges().subscribe(item => {
        item.forEach(element => {
          var y = element.payload.toJSON();
          y['$key'] = element.key;
          this.restaurantList.push(y as Restaurant);
          console.log(y);
          this.rows = [y];
        })
      })
  }
 
}
