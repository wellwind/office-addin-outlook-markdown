import { Component } from "@angular/core";
const template = require("./app.component.html");
/* global require */

@Component({
  selector: "app-home",
  template
})
export class AppComponent {
  content = "";

  insert() {
    Office.context.mailbox.item.body.setSelectedDataAsync(this.content, {
      coercionType: Office.CoercionType.Html
    });
  }
}
