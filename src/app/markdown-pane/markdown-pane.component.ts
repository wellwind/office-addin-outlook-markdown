import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-pane',
  templateUrl: './markdown-pane.component.html',
  styleUrls: ['./markdown-pane.component.scss']
})
export class MarkdownPaneComponent implements OnInit {
  content = '';

  constructor(private markdownService: MarkdownService) {}

  ngOnInit() {}

  insert() {
    const html = this.markdownService.compile(this.content);
    console.log(html);
    Office.context.mailbox.item.body.setSelectedDataAsync(html, {
      coercionType: Office.CoercionType.Html
    });
  }
}
