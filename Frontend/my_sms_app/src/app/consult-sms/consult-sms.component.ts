import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserServiceService } from '../services/user-service.service';

export interface Message {
  msg: string;
  id: number;
  date: string;
  to: string;
}




@Component({
  selector: 'app-consult-sms',
  templateUrl: './consult-sms.component.html',
  styleUrls: ['./consult-sms.component.css']
})
export class ConsultSmsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'msg', 'date', 'to', 'actions'];
  public dataSource = [];
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  
  constructor(
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    this.userService.takeSms(1).subscribe((response) => {
      this.dataSource = response;
      console.log(response)
    })
  }
 
}

