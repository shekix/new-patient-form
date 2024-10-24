import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink,RouterLinkActive,RouterOutlet,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  api:any;
  
  constructor(apiService:ApiService){
  this.api = apiService
  }

  RegistrationForm = new FormGroup({
    firstName :new FormControl<string>('',[Validators.required]),
    lastName :new FormControl<string>('',[Validators.required]),
    userName :new FormControl<string>('',[Validators.required]),
    password :new FormControl<string>('',[Validators.required]),
    cpassword:new FormControl<string>('',[Validators.required])
  })

  users:any[] = []

  getUsers(){
    this.api.getUser().subscribe((data:any)=>{
      this.users = data;
    })
  }
 
  ngOnInit() {
    this.getUsers();
  }

  onSubmit(){
    var data = {...this.RegistrationForm.value}
    var result = this.users.find(o => o.userName == data.userName);
    if(result == null)
    {
    if(this.RegistrationForm.value.password === this.RegistrationForm.value.cpassword){
      this.api.postUser(data).subscribe(()=>{
        alert('you have been registered');
        this.RegistrationForm.reset();
      })
    }
    else{
    
    }
   }
  else
  {
    alert('userName already exists! try something else');
    this.RegistrationForm.reset();
    this.getUsers()
  }
  }
}
