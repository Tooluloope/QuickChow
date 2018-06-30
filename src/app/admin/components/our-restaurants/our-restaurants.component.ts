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
  rows= [      
];
  columns = [
    { prop: 'name' },
    { name: 'Location' },
    { name: 'Delivery' }
  ];

  restaurantList: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { 
    var x = this.restaurantService.getAll()
    .snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.restaurantList.push(y as Restaurant);
        console.log(y);
        this.rows = [
          { name: y["displayName"], location: y["location"], delivery: y["name"] }
        ]
        
      })
    })
  }
  ngOnInit() {
   
  }
 
}
