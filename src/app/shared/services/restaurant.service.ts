import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private db: AngularFireDatabase) { }
  create(restaurant) {
    return this.db.list('/restaurants').push(restaurant);
  }

  getAll() {
    return this.db.list('/restaurants');
  }
  get(restaurantId) {
    return this.db.object('/restaurants/' + restaurantId);
  }
  update(restaurantId, restaurant) {
    return this.db.object('/restaurants/' + restaurantId).update(restaurant);
  }
  delete(restaurantId) {
    return this.db.object('/restaurants/' + restaurantId).remove();

  }
}
