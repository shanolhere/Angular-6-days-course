import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private sharedService: SharedServiceService) {}

  handleSubmit(roomForm: any) {
    console.log(roomForm, roomForm.form.value);
    let addRoomInfo = {
      id: Date.now(),
      ...roomForm.form.value,
    };

    this.sharedService.reservationList.push(addRoomInfo);
    localStorage.setItem("Reservations", JSON.stringify(this.sharedService.reservationList));
    console.log(this.sharedService.reservationList);

    // Reset the form data
    roomForm.reset();

  }
}
