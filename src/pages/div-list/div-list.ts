import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AppService } from '../../app/app.service';
import { DataModel } from '../../app/model';

@IonicPage()
@Component({
  selector: 'page-div-list',
  templateUrl: 'div-list.html',
})
export class DivListPage {
  data: DataModel[] = [];
  constructor(private appService: AppService) {
    this.appService.getNames()
      .subscribe(data => {
        this.data = data;
      });
  }

}
