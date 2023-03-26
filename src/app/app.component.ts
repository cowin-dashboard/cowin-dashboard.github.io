import { Component } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cowin';

  users: any;
  constructor(private userData: ApiService) {
    userData.users().subscribe((data) => {
      // console.warn("data",data);
      this.users = data;
    });
  }
}
