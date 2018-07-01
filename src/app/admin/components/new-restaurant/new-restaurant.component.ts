import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../../shared/models/restaurant';
import { RestaurantService } from '../../../shared/services/restaurant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {
  id;
  restaurant$: Observable<any>;
  restaurant : Restaurant = {
    $key: '',
    name: '',
    displayName: '',
    location: '',
    deliveryPrice: 0,               
    imageUrl: '',
  };
  constructor(private restaurantService: RestaurantService,
              private af: AngularFireDatabase,
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
      console.log(this.id)
    });   

    
    if (this.id) {
      this.restaurantService.get(this.id).snapshotChanges()
        .subscribe(action => {
          this.restaurant.displayName = action.payload.val().displayName
          this.restaurant.name = action.payload.val().name
          this.restaurant.imageUrl = action.payload.val().imageUrl
          this.restaurant.location = action.payload.val().location
          this.restaurant.deliveryPrice = action.payload.val().deliveryPrice
        })
           
    }
  }
  onSubmit( restaurant) {
    console.log(restaurant);
    this.restaurantService.create(restaurant);
    this.router.navigate(['admin/restaurants/our-restaurants'])
  }

}
