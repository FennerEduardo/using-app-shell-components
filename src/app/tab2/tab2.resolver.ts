import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStore } from '../shell/data-store';
import { DataService } from '../services/data.service';
import { UsersListModel } from '../models/user.model';

@Injectable()
export class Tab2Resolver implements Resolve<DataStore<UsersListModel>> {

  constructor(private dataService: DataService) {}

  resolve(): DataStore<UsersListModel> {

    const dataSource: Observable<UsersListModel> = this.dataService.getUsersDataSource(2);
    const dataStore: DataStore<UsersListModel> = this.dataService.getPhotosDataStore(dataSource);

    return dataStore;
  }
}
