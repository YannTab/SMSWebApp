import { Component } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menu = Menu

  ngOnInit(): void {
    
  }
}
