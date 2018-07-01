import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Restaurant } from '../../../shared/models/restaurant';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-our-restaurants',
  templateUrl: './our-restaurants.component.html',
  styleUrls: ['./our-restaurants.component.scss']
})
export class OurRestaurantsComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  restaurantList: Restaurant[];

  constructor(private restaurantService: RestaurantService) { 
    var x = this.restaurantService.getAll();
    x.snapshotChanges().subscribe(item => {
      this.restaurantList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.restaurantList.push(y as Restaurant);       
      });
      this.dtTrigger.next();

    });

  }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

 
}
