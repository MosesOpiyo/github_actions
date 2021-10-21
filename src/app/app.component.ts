import { Component } from '@angular/core';
import {JsonPHService} from './services/json-ph.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  data:Array<any>

  constructor(private jsonplaceholder:JsonPHService) {
    this.data = new Array<any>()
  }


  getDataFromAPI() {
    this.jsonplaceholder.getData().subscribe((data) => {
      console.log(data)
      this.data = data
    } )
  }
}
