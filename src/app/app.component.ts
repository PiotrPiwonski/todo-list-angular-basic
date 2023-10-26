import { Component } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  config: {[key: string]: string | Date} = null;
  tasks: Task[] = [
    {
    name: 'Śiłownia',
    deadline: '2020-01-02',
    done: false
    },
    {
      name: 'Nauka Anulara',
      deadline: '2020-01-03',
      done: false
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false
    }
  ];

  constructor() {
    setTimeout(()=> {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań,All rights reserved.',
        date: new Date().toString()
      };
    }, 500);

  }

}
