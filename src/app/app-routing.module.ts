import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'markdownpane',
    loadChildren: () =>
      import('./markdown-pane/markdown-pane.module').then(
        m => m.MarkdownPaneModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
