import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { PanelComponent } from './componentes/panel/panel.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: 'login', component: LoginComponent  },
  { path: 'registro', component: RegistroComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'contacto', component: FooterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
