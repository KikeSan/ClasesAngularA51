import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class LoginComponent { 
  curso:string = "Fullstack"
}
