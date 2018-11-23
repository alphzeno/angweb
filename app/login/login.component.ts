import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'azcrmweb';
  constructor(private router : Router){

  }
  showDashboard(){
      this.router.navigate(["dashboard"])
  }
}
