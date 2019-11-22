import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownPaneRoutingModule } from './markdown-pane-routing.module';
import { MarkdownPaneComponent } from './markdown-pane.component';



@NgModule({
  declarations: [MarkdownPaneComponent],
  imports: [
    CommonModule,
    FormsModule,
    MarkdownPaneRoutingModule
  ]
})
export class MarkdownPaneModule { }
