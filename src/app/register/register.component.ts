import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  pname: string = "";
  pword: string = "";

  constructor(private router: Router) {}

  register(){
    axios.post("http://localhost:3000/register", {pname: this.pname, pword: this.pword})
    .then((res) => {
      console.log(res);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    })
  }
}
