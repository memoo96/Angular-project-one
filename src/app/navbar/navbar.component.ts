import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  activetab= '';

  constructor() { }

  ngOnInit() {
  }

  getActivetab(tabname:string){
    return this.activetab= tabname;
  }

}
