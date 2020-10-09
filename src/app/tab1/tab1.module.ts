import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ShellModule } from '../shell/shell.module';
import { Tab1Resolver } from './tab1.resolver';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ShellModule
  ],
  declarations: [Tab1Page],
  providers: [Tab1Resolver]
})
export class Tab1PageModule {}
