import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  title = 'azcrmweb';
  constructor(private router : Router){
      
  }
}
