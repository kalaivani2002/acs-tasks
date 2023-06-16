import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //  searchQuery: string = ' ';
  constructor(private http: HttpClient) { }

  searchContent(data:any){
    const url='https://openlibrary.org/search.json?title=';
    return this.http.get(url+data);
  }
  
}
