import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DivListPage } from '../div-list/div-list';
import { UserListPage } from '../user-list/user-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  divPage = DivListPage;
  ionPage = UserListPage;
  constructor(private navCtrl: NavController) { }

  onDivClick() {
    this.navCtrl.push(this.divPage);
  }
  onIonListClick() {
    this.navCtrl.push(this.ionPage);
  }
}
