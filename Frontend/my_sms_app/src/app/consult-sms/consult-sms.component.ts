import { Component, OnInit, Output } from '@angular/core';
import { MessageData } from './data-msg';

@Component({
  selector: 'app-consult-sms',
  templateUrl: './consult-sms.component.html',
  styleUrls: ['./consult-sms.component.css']
})
export class ConsultSmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  msgData = MessageData;

}
