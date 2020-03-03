import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: "Think an idea",
        completed: false
      },
      {
        id: 1,
        title: "Open Laptop",
        completed: true
      },
      {
        id: 2,
        title: "Code",
        completed: true
      },
      {
        id: 1,
        title: "Impact the world",
        completed: false
      }
    ];
  }
}
