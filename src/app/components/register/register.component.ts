
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { userInterface } from './../models/userInterface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userRegisterForm : FormGroup;
  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

    this.userRegisterForm = this.formBuilder.group({
      Mail: ["",[Validators.required, Validators.email]],
      Usuario:["",[Validators.required, Validators.maxLength(20)]],
      Contraseña: ["",[Validators.required, Validators.maxLength(20)]],
      VendedorComprador: false

    });



   };

   ngOnInit(): void {
  
  }
  
  public onSubmit(): void {
    this.submitted = true

    if(this.userRegisterForm.valid){

      const user : userInterface = {

        Mail:this.userRegisterForm.get("Mail")?.value,
        Usuario:this.userRegisterForm.get("Usuario")?.value,
        Contraseña:this.userRegisterForm.get("Contraseña")?.value,
        VendedorComprador: false

      }; 
      console.log("USER =>",user);
      this.userRegisterForm.reset();
      this.submitted = false
      
    }


  }

}

