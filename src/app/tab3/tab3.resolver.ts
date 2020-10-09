import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStore } from '../shell/data-store';
import { DataService } from '../services/data.service';
import { DestinationsListModel } from '../models/destination.model';

@Injectable()
export class Tab3Resolver implements Resolve<DataStore<DestinationsListModel>> {

  constructor(private dataService: DataService) {}

  resolve(): DataStore<DestinationsListModel> {

    const dataSource: Observable<DestinationsListModel> = this.dataService.getDestinationsDataSource();
    const dataStore: DataStore<DestinationsListModel> = this.dataService.getDestinationsDataStore(dataSource);

    return dataStore;
  }
}
