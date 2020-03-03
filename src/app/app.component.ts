import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  fname: string = "Shivam";

  constructor() {
    console.log("Hello World");
    this.changeName("You");
  }

  changeName(name: string): void {
    this.fname = name;
  }
}
