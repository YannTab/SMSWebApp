import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Message {
  msg: string;
  id: number;
  date: string;
  to: string;
}

const ELEMENT_DATA: Message[] = [
  {id: 1, msg: 'Hello', date: '2013-12-02T17:57:28.556094Z', to: 'H'},
  {id: 2, msg: 'msg tu vas ?', date: '2014-15-02T17:57:28.556094Z', to: 'He'},
  {id: 3, msg: 'Le soir s il te plait suis en cours', date: '2013-12-02T17:57:28.556094Z', to: 'Li'},
  {id: 4, msg: 'Non pas vraiment suis malade', date: '2013-12-02T17:57:28.556094Z', to: 'Be'},
  {id: 5, msg: 'Boron', date: '2013-12-02T17:57:28.556094Z', to: 'B'},
  {id: 6, msg: 'Carbon', date: '2013-12-02T17:57:28.556094Z', to: 'C'},
  {id: 7, msg: 'Nitrogen', date: '2013-12-02T17:57:28.556094Z', to: 'N'},
  {id: 8, msg: 'Oxygen', date: '2013-12-02T17:57:28.556094Z', to: 'O'},
  {id: 9, msg: 'Fluorine', date: '2013-12-02T17:57:28.556094Z', to: 'F'},
  {id: 10, msg: 'Neon', date: '2013-12-02T17:57:28.556094Z', to: 'Ne'},
  {id: 5, msg: 'Imagine all the eatables, living in conFusion!',date: '2012-10-16T17:57:28.556094Z',to: 'John Lemon'},
  {id: 4,msg: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',to: 'Paul McVites',
    date: '2014-09-05T17:57:28.556094Z'
  },
  {id: 3,msg: 'Eat it, just eat it!',to: 'Michael Jaikishan', date: '2015-02-13T17:57:28.556094Z'},
  {id: 4,msg: 'Ultimate, Reaching for the stars!',to: 'Ringo Starry',date: '2013-12-02T17:57:28.556094Z'},
  {id: 2, msg: 'It\'s your birthday, we\'re gonna party!',to: '25 Cent',date: '2011-12-02T17:57:28.556094Z'}
];


@Component({
  selector: 'app-consult-sms',
  templateUrl: './consult-sms.component.html',
  styleUrls: ['./consult-sms.component.css']
})
export class ConsultSmsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'msg', 'date', 'to', 'actions'];
  dataSource!:MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA)  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort
  }


  applyFilter($event:any){
    this.dataSource.filter = $event.target.value;
  }

  deleteMsg(contact:any){
    console.log(contact)
  }

}

