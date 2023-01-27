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
  ContactId: number;
  UserId: number;
  destinator: String;
}

interface LoginData {
  phoneNumber: String;
  password: String;
}

const httpOptions = {
  headers: new HttpHeaders(),
};

const host = 'http://localhost:8081';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  addUserUrl = host + '/users';
  loadAllContactUrl = host + '/contacts';
  sendSmsUrl = host + '/messages/send';
  loginUrl = host + '/auth/login'
  getSmsUrl = host + '/messages/getMessage/';

  constructor(
    private http: HttpClient,
  ) { }

  addUser(
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


  sendSms(
    msg: String,
    ContactId: number,
    userId: number,
    destinator: String
  ): Observable<any> {
    const smsData: SmsData = {
      msg: msg,
      ContactId: ContactId,
      UserId: userId,
      destinator: destinator

    };
    console.log(smsData);
    return this.http.post(this.sendSmsUrl, smsData, httpOptions);
  }

  loginUser(
    phoneNumber: String,
    password: String
  ): Observable<any> {
    const loginData: LoginData = {
      phoneNumber,
      password
    };
    console.log(loginData);
    return this.http.post(this.loginUrl, loginData, httpOptions);
  }

  signupUser(
    phoneNumber: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    address?: String
  ): Observable<any> {
    const signupData = {
      phoneNumber,
      password,
      firstName,
      lastName,
      email,
      address
    };
    console.log(signupData);
    return this.http.post(this.addUserUrl, signupData, httpOptions);
  }

  takeSms(
    id: number
  ): Observable<any> {
    return this.http.get(this.getSmsUrl + id);
  }


}
