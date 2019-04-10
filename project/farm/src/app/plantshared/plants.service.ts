import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Plants } from './plants.model';

@Injectable({
  providedIn: 'root'
})
export class PlantsService {
  selectedPlants: Plants;
  plants: Plants[];
  readonly baseURL = 'http://localhost:3000/plants/';

  constructor(private http: HttpClient) { }

  postPlants(pln: Plants) {
    return this.http.post(this.baseURL, pln);
  }

  getPlantsList() {
    return this.http.get(this.baseURL);
  }

  putPlants(pln: Plants) {
    return this.http.put(this.baseURL + `/${pln._id}`, pln);
  }

  deletePlants(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
