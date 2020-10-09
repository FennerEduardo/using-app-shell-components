import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ShellModule } from '../shell/shell.module';
import { Tab2Resolver } from './tab2.resolver';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    ShellModule
  ],
  declarations: [Tab2Page],
  providers: [Tab2Resolver]
})
export class Tab2PageModule {}
