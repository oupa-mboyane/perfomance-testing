import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppService } from '../../app/app.service';
import { DataModel } from '../../app/model';

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  data: DataModel[] = [];
  constructor(private appService: AppService) {
    this.appService.getNames()
      .subscribe(data => {
        this.data = data;
      })

  }
}
