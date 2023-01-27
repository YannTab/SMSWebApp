import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { numbers } from '@material/toolbar/constants';
import { ContactServiceService } from '../services/contact-service.service';

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
  selector: 'app-consult-contact',
  templateUrl: './consult-contact.component.html',
  styleUrls: ['./consult-contact.component.css']
})
export class ConsultContactComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'number', 'email', 'actions'];
  public contacts = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  constructor(
    private contactService : ContactServiceService,
  ) { }

  ngOnInit(): void {
    
    this.contactService.loadContact().subscribe((response) => {
      this.contacts = response;
    });

  }

  ngAfterViewInit() {
    
  }

  applyFilter($event:any){
    
  }

  deleteContact(id : number): void {

    var idContact = this.contacts[id].id

    this.contactService.deleteContact(idContact)
    .subscribe((response) => {
      console.log(response);
    });
    location.reload();
  }

  editContact(contact:any){
    console.log(contact)
  }

}
