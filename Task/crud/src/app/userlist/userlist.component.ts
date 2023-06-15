import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
 
  adduser = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    gender: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required]),
  })

  userLists: any = [];
  userData: any = {};
  id: any;
  constructor(public authservice: AuthService, public router: Router) { }
  ngOnInit() {
    this.getData()
  }
  getData() {

    const userData = {
      // name: item.name,
      // email: item.email,
      // gender: item.gender,
      // status: item.status
    }

    this.authservice.listUser(userData).subscribe(
      (response: any) => {
        console.log('successfull', response);
        this.userLists = response;
      },
      (error: any) => {
        console.log(' ', error);
      }
    )

  }

  editUser(user: any){
    let data = {
      name: user.name,
      email: user.email,
      gender: user.gender,
      status: user.status
    }
    this.adduser.setValue(data);
    this.id = user.id
    
  }
  deleteUser(id: any){
    this.authservice.deleteUser(id).subscribe(
      (response: any) => {
        console.log('successfull', response);
        alert("Succesfully deleted!");
      },
      (error: any) => {
        console.log(' ', error);
      }
    )
  }

  editUsers(){
    console.log(this.adduser.value);
    this.authservice.editData(this.id,this.adduser.value).subscribe(
      (response: any) => {
      console.log('successfull', response);
      this.getData();
    },
    (error: any) => {
      console.log(' ', error);
    })
  }

  viewData(user: any){
    this.userData = user;
  }
  
  get fname() {
    return this.adduser.get("name");
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












// import { Component } from '@angular/core';
// import { AuthService } from '../auth.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-userlist',
//   templateUrl: './userlist.component.html',
//   styleUrls: ['./userlist.component.css']
// })
// export class UserlistComponent {
//   userLists: any = [];

//   constructor(
//     public authservice: AuthService,
//     public router: Router,
//     public http: HttpClient
//   ) {}

//   getData() {
//     const url = 'https://gorest.co.in/public/v2/users';

//     const userData = {
//       // Add your desired user data properties here
//     };

//     this.http.get(url, { params: userData }).subscribe(
//       (response: any) => {
//         console.log('successful', response);
//         this.userLists = response.data; // Assuming the user data is in the 'data' property
//       },
//       (error: any) => {
//         console.log('Error:', error);
//       }
//     );
//   }
// }

