import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markdown-pane',
  templateUrl: './markdown-pane.component.html',
  styleUrls: ['./markdown-pane.component.scss']
})
export class MarkdownPaneComponent implements OnInit {
  content = '';

  ngOnInit() {}

  insert() {
    Office.context.mailbox.item.body.setSelectedDataAsync(this.content, {
      coercionType: Office.CoercionType.Html
    });
  }
}
