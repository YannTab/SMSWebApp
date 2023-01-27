import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface ContactData {

  firstName: String,
  lastName: String,
  email: String;
  tel: String;

}

const token = localStorage.getItem("token");

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }),
};

const host = 'http://localhost:8081';
@Injectable({
  providedIn: 'root'
})



export class ContactServiceService {

  addContactUrl = host + '/contacts';
  loadContactUrl = host + '/contacts';
  deleteContactUrl = host + '/contacts';
  
  constructor(
    private http: HttpClient,
  ) { }

  addContact(
    firstName: String,
    lastName: String,
    email: String,
    tel: String
  ): Observable<any> {
    const contactData: ContactData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      tel: tel
    };
    console.log(contactData);

    return this.http.post(this.addContactUrl, contactData, httpOptions);
  }

  loadContact(): Observable<any> {
    return this.http.get(this.loadContactUrl, httpOptions);
  }

  deleteContact(
    Id: string,
  ): Observable<any> {
    return this.http.delete(this.deleteContactUrl + Id, httpOptions);
  }
  
}
