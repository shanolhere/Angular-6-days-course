import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
 
  constructor(private sharedService: SharedServiceService){}

  roomsList :any = [];
 
  roomsCount:any = 0;

  ngOnInit():void {
   let savedReservations = localStorage.getItem("Reservations");
   this.roomsList = savedReservations ? JSON.parse(savedReservations) : [];
   this.roomsCount = this.roomsList.length;
  }

  deleteReservation(index:any){
        this.roomsList.splice(index,1);
        localStorage.setItem("Reservations", JSON.stringify(this.roomsList));
  }

  editReservation(index: any, room: any){
    console.log(room, 'room');
  }
}
