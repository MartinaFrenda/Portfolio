import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  mail = '';
  password = '';

  constructor(public _servicio: InfoPaginaService, private authService: AuthService, private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]] 
  })

  }

  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      // llamamos a nuestro servicio para enviar los datos al servidor
      alert("Todo salió bien ¡Enviar el formulario!")
    }else{
      this.form.markAllAsTouched();
      alert("Todo salió mal, no enviar el formulario")
    };
  }


  login(){
    this.authService.login(this.mail, this.password)
  }


  ngOnInit(): void {}
  //metodos para el formulario

  //toma el dato del password
  get Password(){
    return this.form.get("password");
  }

  //toma el dato del mail
  get Mail(){
    return this.form.get("email");
  }

  //metodo de validacion de password
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  //metodo de validacion de mail
  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }
}
