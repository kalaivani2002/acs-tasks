import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   title = 'Reactive forms'
   home = new FormGroup({
    search: new FormControl("", [Validators.required])
   })
   searchList:any = []
  showTable: boolean = false;
  
 

  //  showTable() {
  //   this.searchList = true;
  // }


   constructor(public authservice: AuthService){}
   
  GetData(){


    if (this.home.invalid) {
      return;
      }
      
    let data:any = this.home.value ;
    console.log(data);
    // console.log(data.search.replace(' ','+'));

  this.authservice.searchContent(data.search.replace(' ','+')).subscribe(
    (response:any)=>{
      console.log('successfull',response);
      this.searchList = response.docs.slice(0,20);
      console.log(this.searchList);
      this.showTable=this.searchList!=='';
    },
    (error:any)=>{
      console.log(' ',error);
    }
  )

 

  }
 
}
