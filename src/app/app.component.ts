import { Component } from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate = '';
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

  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name : this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
  }

}
