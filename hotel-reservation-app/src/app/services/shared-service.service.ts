import { Injectable } from '@angular/core';
import { room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor() { }

  reservationList : room[] = [];

  // getList(){
  //   return this.reservationList;
  // }

}
