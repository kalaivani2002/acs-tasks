import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  addUser(userData: any) {
    const url = 'https://gorest.co.in/public/v2/users?access-token=8df063c40112128bf70582013ad73ce0680a834669a841f673831d69f52862c9'; // Replace with your API endpoint URL

    // Send the POST request
    return this.http.post(url, userData);
  }

  listUser(userData: any) {
    const url = 'https://gorest.co.in/public/v2/users?access-token=8df063c40112128bf70582013ad73ce0680a834669a841f673831d69f52862c9';

    //Send the GET request
    return this.http.get(url, userData);
  }

  editData(id:any,userData: any) {
    const url = 'https://gorest.co.in/public/v2/users/'+id+'?access-token=8df063c40112128bf70582013ad73ce0680a834669a841f673831d69f52862c9';

    // const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(url, userData);
  }

  deleteUser(id: any){
     const url ='https://gorest.co.in/public/v2/users/'+id+'?access-token=8df063c40112128bf70582013ad73ce0680a834669a841f673831d69f52862c9';

     return this.http.patch(url,id);
}
}
