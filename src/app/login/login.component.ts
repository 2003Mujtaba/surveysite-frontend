import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private toastr: ToastrService, private router: Router) { }

  login() {
    axios.post("http://localhost:3000/login", { username: this.username, password: this.password })
      .then((res) => {
        sessionStorage.setItem("auth", "success");
        this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
      }, (err) => {
        console.log(err);
      })
  }

}
