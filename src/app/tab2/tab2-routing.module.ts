import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { Tab2Resolver } from './tab2.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
    resolve: {
      data: Tab2Resolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
