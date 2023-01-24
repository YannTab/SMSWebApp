import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';


interface SideNavToggle{
    screenWidth:number;
    collapsed: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations:[
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity:0}),
        animate('350ms',
          style({opacity:1})
        )
      ]),
      transition(':leave', [
        style({opacity:1}),
        animate('350ms',
          style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(1turn)', offset: '1'})
        ])
        )
      ])
    ]),
  ]
})
export class CardComponent implements OnInit {

  constructor( public router:Router) { 
   }

  

@Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  url = false;
  
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed= false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    
  }

  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    
  }

  urlView(): void{
    console.log(this.router.url);
  }

  activeSide(): boolean{
    if( this.router.url == '/login' || this.router.url == '/createAccount' ){
      return false;
    }else{
      return true;
    };
    
  }

  closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  

}
