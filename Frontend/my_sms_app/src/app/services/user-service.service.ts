import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserData {
  
  firstName: String;
  lastName: String;
  password: String;
  email: String;
  address: String;
}



interface SmsData {
  msg: String;
  date: Date;
  destinator: String;
  createdAt: Date;
  updatedAt: Date;
  ContactId: number;
  UserId: number;
}

const httpOptions = {
  headers: new HttpHeaders(),
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  addUserUrl = 'http://localhost:8081/users/save';
  loadAllContactUrl = 'http://localhost:8081/contacts';

  constructor(
    private http: HttpClient,
  ) { }

  addUser (
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    address: String
  ): Observable<any> {
    const userData: UserData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      address: address
     };
    console.log(userData);
    return this.http.post(this.addUserUrl, userData, httpOptions);
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.loadAllContactUrl);
  }


  sendSms(){}
}
