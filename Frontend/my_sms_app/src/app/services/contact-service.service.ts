import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


interface ContactData {

  firstName: String,
  lastName: String,
  email: String;
  tel: String;

}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})




export class ContactServiceService {

  addContactUrl = 'http://localhost:8081/contacts/save';
  loadContactUrl = 'http://localhost:8081/contacts';
  deleteContactUrl = 'http://localhost:8081/contacts/delete/';
  
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
    return this.http.get(this.loadContactUrl);
  }

  deleteContact(
    Id: string,
  ): Observable<any> {
    return this.http.get(this.deleteContactUrl + Id, httpOptions);
  }
  
}
