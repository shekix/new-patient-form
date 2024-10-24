import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
api:any;
constructor(apiservice:ApiService){
  this.api = apiservice;
}

LoginForm = new FormGroup({
  userName :new FormControl<string>('',[Validators.required]),
  password :new FormControl<string>('',[Validators.required]),

})

users:any[] = [];

getUsers(){
  this.api.getUser().subscribe((value:any)=>{
    this.users = value;
  })
}

ngOnInit(){
  this.getUsers();
}


link :any;
success=false;
onLogin(){
var fuserName = this.LoginForm.value.userName;
var fpassword = this.LoginForm.value.password;

for( let item of this.users){
  if(item.userName == fuserName && item.password == fpassword){
    this.link = "/app-patient"
    this.success = true;
    break;
  }
}
if(this.success == false){
  this.link = "app-login"
  alert('username and password dont match! Try again');
  this.LoginForm.reset();

}


}
}