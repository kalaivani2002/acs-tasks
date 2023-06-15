import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    title = 'Reactive forms';
    login = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.pattern(/(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/), Validators.required]),
    });

    GetData(){
      console.log(this.login.value);
    }

    get vmail(){
      return this.login.get("email");
    }
    get vpassword(){
      return this.login.get("password");
    }
}
