import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  users: Array<any> = [];

  fetchData = (): Promise<Array<any>> => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        resolve(data.users);
      } catch (error) {
        reject(error);
      }
    });
  };

  ngOnInit() {
    this.fetchData().then((arr: Array<any>) => {
      this.users = arr;
    });
  }
}