import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MarkdownPaneRoutingModule } from './markdown-pane-routing.module';
import { MarkdownPaneComponent } from './markdown-pane.component';

@NgModule({
  declarations: [MarkdownPaneComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MarkdownPaneRoutingModule
  ]
})
export class MarkdownPaneModule {}
