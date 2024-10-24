import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';

export const routes: Routes = [
    {
    path:'',
    component:LoginComponent
    },
    {
        path:'app-home',
        component:LoginComponent
    },
    {
        path:'app-patient',
        component:PatientComponent
    }

];
