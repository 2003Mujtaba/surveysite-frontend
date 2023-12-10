import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  flag: boolean = false;

  ngOnInit(): void {
    console.log("hello world!");
    this.flag = sessionStorage.getItem("auth") ? true : false;
  }

  logout(){
    console.log("logout");
    sessionStorage.clear();
  }


  title = 'client';
}
