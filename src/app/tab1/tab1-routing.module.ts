import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Tab1Resolver } from './tab1.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    resolve: {
      data: Tab1Resolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
