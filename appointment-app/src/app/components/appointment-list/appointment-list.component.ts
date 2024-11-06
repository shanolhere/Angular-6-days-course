import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  appointmentsList: Appointment[] = [];

  handleSubmit(appointmentForm: any){
    console.log("formData", appointmentForm);

    let newAppointmentData : Appointment = {
      id: Date.now(),
      title: appointmentForm.form.value.title,
      date: appointmentForm.form.value.date
    };

    this.appointmentsList.push(newAppointmentData);

    localStorage.setItem("appointments", JSON.stringify(this.appointmentsList));

    // Reset the form data
    appointmentForm.reset();
    
  }

  deleteAppointment(index: any){
    this.appointmentsList.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointmentsList));
  }


  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointmentsList = savedAppointments ? JSON.parse(savedAppointments) : [];
  }
}
