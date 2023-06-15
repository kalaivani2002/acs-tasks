import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent {
  adduser = new FormGroup({
    fullname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    gender: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required]),
  }
  );
  userLists: any;

  constructor(public authservice: AuthService, public router: Router) { }
  GetData() {

    console.log(this.adduser.value);

    const userData = {
      // firstname: this.adduser.value.firstname,
      // lastname: this.adduser.value.lastname,
      name: this.adduser.value.fullname,
      email: this.adduser.value.email,
      gender: this.adduser.value.gender,
      status: this.adduser.value.status
    }

    this.authservice.addUser(userData).subscribe(
      (response: any) => {
        console.log("User Added successfully", response);
        // this.userLists = response;
        this.router.navigate(["/userlist"]);
      },
      (error: any) => {
        console.error("Failed:", error);
      }
    )


  }
  get fname() {
    return this.adduser.get("fullname");
  }
  get vmail() {
    return this.adduser.get("email");
  }
  get vgender() {
    return this.adduser.get("gender");
  }
  get vstatus() {
    return this.adduser.get("status");
  }
}
