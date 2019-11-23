import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'markdownpane',
    pathMatch: 'full'
  },
  {
    path: 'markdownpane',
    loadChildren: () =>
      import('./markdown-pane/markdown-pane.module').then(
        m => m.MarkdownPaneModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
