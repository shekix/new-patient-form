import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
import { ApiService } from '../../services/api-service.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,DatePipe],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit {

api:any;
countries : any[] = [];
states:any[] = [];

constructor(apiService:ApiService){
this.api = apiService
}


PatientForm = new FormGroup({
  firstName :new FormControl<string>('',[Validators.required]),
  lastName :new FormControl<string>('',[Validators.required]),
  gender :new FormControl<string>('',[Validators.required]),
  dob : new FormControl('',[Validators.required]),
  maritalStatus :new FormControl<string>('',[Validators.required]),
  bloodGroup :new FormControl<string>('',[Validators.required]),
  phoneNumber :new FormControl<string>('',[Validators.required]),
  email :new FormControl<string | null>('',),
  addressLine1 :new FormControl<string>('',[Validators.required]),
  addressLine2 :new FormControl<string | null>(''),
  country :new FormControl<string>('',[Validators.required]),
  state :new FormControl<string>('',[Validators.required]),
  city :new FormControl<string>('',[Validators.required]),
  pastMedicalHistory :new FormControl<string>('',[Validators.required]),
  currentIllness :new FormControl<string>('',[Validators.required]),
  treatedBy :new FormControl<string>('',[Validators.required]),
  treatmentStatus :new FormControl<string>('',[Validators.required]),
  insuranceName :new FormControl<string >('',),
  insuranceId :new FormControl<string>('',),
  coverage :new FormControl<string>('',[Validators.required]),
  emergencyContactName :new FormControl<string>('',[Validators.required]),
  emergencyContactNumber :new FormControl<string>('',[Validators.required]),
})

patients:any[] = [];

ngOnInit(): void {
  this.api.getPatients().subscribe ( (data:any) =>{
    this.patients = data;   
  })


}

showCountries(){
  this.api.getCountries().subscribe((data:any)=>{
 this.countries = data;
 })
}

showStates(event : any){
  
  this.api.getStates(event.target.value).subscribe((data:any) =>{
  this.states=data;  
})
}

DateTime = new Date();
formSubmit(){
  const patient = { 
    firstName:this.PatientForm.value.firstName,
    lastName:this.PatientForm.value.lastName,
    gender:this.PatientForm.value.gender,
    dob : this.PatientForm.value.dob,
    maritalStatus:this.PatientForm.value.maritalStatus,
    bloodGroup:this.PatientForm.value.bloodGroup,
    phoneNumber:this.PatientForm.value.phoneNumber,
    email:this.PatientForm.value.email,
    addressLine1:this.PatientForm.value.addressLine1,
    addressLine2:this.PatientForm.value.addressLine2,
    country:this.PatientForm.value.country,
    state:this.PatientForm.value.state,
    city:this.PatientForm.value.city,
    pastMedicalHistory:this.PatientForm.value.pastMedicalHistory,
    currentIllness:this.PatientForm.value.currentIllness,
    treatedBy:this.PatientForm.value.treatedBy,
    treatmentStatus:this.PatientForm.value.treatmentStatus,
    insuranceName:this.PatientForm.value.insuranceName,
    insuranceId:this.PatientForm.value.insuranceId,
    coverage:this.PatientForm.value.coverage,
    emergencyContactName:this.PatientForm.value.emergencyContactName,
    emergencyContactNumber:this.PatientForm.value.emergencyContactNumber,
    createdOn:this.DateTime,
    lastUpdatedOn:this.DateTime,
    isActive:true
  }

  this.api.postPatients(patient).subscribe(()=>{
    this.api.getPatients().subscribe ( (data:any) =>{
      this.patients = data;   
    })
    this.PatientForm.reset();
    alert('patient added')
  })
}



Patientid : any;
AddBtn : any = 'block';
SaveBtn:any = 'none';
  onUpdate(item:any){
  this.PatientForm.get('firstName')?.setValue(item.firstName);
  this.PatientForm.get('lastName')?.setValue(item.lastName);
  this.PatientForm.get('gender')?.setValue(item.gender);
  this.PatientForm.get('dob')?.setValue(formatDate(item.dob,'yyyy-MM-dd','en'));
  this.PatientForm.get('maritalStatus')?.setValue(item.maritalStatus);
  this.PatientForm.get('bloodGroup')?.setValue(item.bloodGroup);
  this.PatientForm.get('phoneNumber')?.setValue(item.phoneNumber);
  this.PatientForm.get('email')?.setValue(item.email);
  this.PatientForm.get('addressLine1')?.setValue(item.addressLine1);
  this.PatientForm.get('addressLine2')?.setValue(item.addressLine2);
  this.PatientForm.get('country')?.setValue(item.country);
  this.PatientForm.get('city')?.setValue(item.city);
  this.PatientForm.get('state')?.setValue(item.state);
  this.PatientForm.get('pastMedicalHistory')?.setValue(item.pastMedicalHistory);
  this.PatientForm.get('currentIllness')?.setValue(item.currentIllness);
  this.PatientForm.get('treatedBy')?.setValue(item.treatedBy);
  this.PatientForm.get('treatmentStatus')?.setValue(item.treatmentStatus);
  this.PatientForm.get('insuranceName')?.setValue(item.insuranceName);
  this.PatientForm.get('insuranceId')?.setValue(item.insuranceId);
  this.PatientForm.get('coverage')?.setValue(item.coverage)
  this.PatientForm.get('emergencyContactName')?.setValue(item.emergencyContactName);
  this.PatientForm.get('emergencyContactNumber')?.setValue(item.emergencyContactNumber);


  this.api.getCountries().subscribe((data:any)=>{
    this.countries = data;
    })
  
   let id = this.PatientForm.value.country;

    this.api.getStates(id).subscribe((data:any) =>{
      this.states=data;  
    })
  // this.PatientForm.setValue(item.value);
  this.AddBtn = 'none';
  this.SaveBtn = 'block';
  this.Patientid = item.id;
  
}


UpdatePatient(){
const data = {
  firstName:this.PatientForm.value.firstName,
  lastName:this.PatientForm.value.lastName,
  gender:this.PatientForm.value.gender,
  dob : this.PatientForm.value.dob,
  maritalStatus:this.PatientForm.value.maritalStatus,
  bloodGroup:this.PatientForm.value.bloodGroup,
  phoneNumber:this.PatientForm.value.phoneNumber,
  email:this.PatientForm.value.email,
  addressLine1:this.PatientForm.value.addressLine1,
  addressLine2:this.PatientForm.value.addressLine2,
  country:this.PatientForm.value.country,
  state:this.PatientForm.value.state,
  city:this.PatientForm.value.city,
  pastMedicalHistory:this.PatientForm.value.pastMedicalHistory,
  currentIllness:this.PatientForm.value.currentIllness,
  treatedBy:this.PatientForm.value.treatedBy,
  treatmentStatus:this.PatientForm.value.treatmentStatus,
  insuranceName:this.PatientForm.value.insuranceName,
  insuranceId:this.PatientForm.value.insuranceId,
  coverage:this.PatientForm.value.coverage,
  emergencyContactName:this.PatientForm.value.emergencyContactName,
  emergencyContactNumber:this.PatientForm.value.emergencyContactNumber,
  lastUpdatedOn:this.DateTime,
  isActive:true
}

this.api.updatePatient(this.Patientid,data).subscribe(()=>{
  alert('patient updated');
  this.api.getPatients().subscribe ( (data:any) =>{
    this.patients = data;   
    this.PatientForm.reset();
  })
})
}


RemovePatient(id:any){
  if(confirm('you really want to delete the patient')){
    this.api.deletePatient(id)
    .subscribe({
      next : (value:any) =>{
        alert('patient deleted');
        this.api.getPatients().subscribe ( (data:any) =>{
          this.patients = data;   
        })
        
      }
    })
}
}

}
