import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivListPage } from './div-list';

@NgModule({
  declarations: [
    DivListPage,
  ],
  imports: [
    IonicPageModule.forChild(DivListPage),
  ],
})
export class DivListPageModule {}
