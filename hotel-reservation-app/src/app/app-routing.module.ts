import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', component: HomeComponent
  },
  {
    path:'list', component: ReservationListComponent
  },
  { 
    path:'**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
