import { Component } from "@angular/core";
const template = require("./app.component.html");
/* global require */

@Component({
  selector: "app-home",
  template
})
export default class AppComponent {
  welcomeMessage = "Welcome";
  subject = "hello";

  async run() {
    /**
     * Insert your Outlook code here
     */

    // alert(document.getElementById("item-subject"));
    this.subject = document.getElementById("item-subject").innerHTML;
    this.welcomeMessage = "Hello World";
  }

  hello() {
    this.subject = Office.context.mailbox.item.subject;

    alert(Office.context.mailbox.item.body);
    
    this.welcomeMessage = "Hello World";
  }
}
