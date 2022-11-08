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

  email = '';
  password = '';

  constructor(public _servicio: InfoPaginaService, private authService: AuthService, private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      mail:['', [Validators.required, Validators.email]] 
  })

  }

  onEnviar(event: Event){
    event.preventDefault;
    if (this.form.valid){
      // llamamos a nuestro servicio para enviar los datos al servidor
      //alguna logica extra
    }else{
      this.form.markAllAsTouched();
    };
  }


  login(){
    this.authService.login(this.email, this.password)
  }


  ngOnInit(): void {
  }
}
