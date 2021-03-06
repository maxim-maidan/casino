import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'casino';
  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    token ? this.router.navigate(['/main']) : this.router.navigate(['/login']);
  }
}
