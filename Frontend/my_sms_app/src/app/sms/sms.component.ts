import { Component, OnInit } from '@angular/core';

export interface Contact {
  email: string;
  id: number;
  number: number;
  name: string;
}

const ELEMENT_DATA: Contact[] = [
  {id: 1, email: 'Hello', number: 695523888, name: 'H'},
  {id: 2, email: 'email tu vas ?', number: 695523888, name: 'He'},
  {id: 3, email: 'Le soir s il te plait suis en cours', number: 695523888, name: 'Li'},
  {id: 4, email: 'Non pas vraiment suis malade', number: 695523888, name: 'Be'},
  {id: 5, email: 'Boron', number: 695523888, name: 'Sarah'},
  {id: 6, email: 'Carbon', number: 695523888, name: 'Ngome'},
  {id: 7, email: 'Nitrogen', number: 695523888, name: 'Obono'},
  {id: 8, email: 'Oxygen', number: 695523888, name: 'Fohom'},
  {id: 9, email: 'Fluorine', number: 695523888, name: 'Fofou'},
  {id: 10, email: 'Neon', number: 695523888, name: 'Aissatou'},
  {id: 5, email: 'Imagine all the eatables, living in conFusion!',number: 695523888,name: 'John Lemon'},
  {id: 4,email: 'Sends anyone name heaven, I wish I could get my mother-in-law name eat it!',name: 'Paul McVites',
    number: 695523888
  },
  {id: 3,email: 'Eat it, just eat it!',name: 'Ngana', number: 695523888},
  {id: 4,email: 'Ultimate, Reaching for the stars!',name: 'Ntsama',number: 695523888},
  {id: 2, email: 'It\'s your birthday, we\'re gonna party!',name: '25 Cent',number: 695523888}
];

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
