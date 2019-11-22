import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkdownPaneComponent } from './markdown-pane.component';

const routes: Routes = [{ path: '', component: MarkdownPaneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkdownPaneRoutingModule { }
