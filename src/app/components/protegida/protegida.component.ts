import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {
  user = {
    firstName: "",
    lastName: "",
    name: "",
    picture: "",
    email: ""
  }

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.userProfile$.subscribe(perfil => {
      console.log("User profile", perfil);
      this. user = {
        firstName: perfil.given_name,
        lastName: perfil.family_name,
        name: perfil.name,
        picture: perfil.picture,
        email: perfil.email
      }
    })
  }

}
