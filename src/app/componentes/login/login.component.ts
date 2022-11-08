import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(public _servicio: InfoPaginaService, private authService: AuthService) { }

  login(){
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
