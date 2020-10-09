import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DataStore } from '../shell/data-store';
import { UsersListModel } from '../models/user.model';
import { DestinationsListModel } from '../models/destination.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private usersDataStore: DataStore<UsersListModel>;
  private photosDataStore: DataStore<UsersListModel>;
  private destinationsDataStore: DataStore<DestinationsListModel>;

  constructor(private http: HttpClient) { }

  // -------  Data For Lists Tab --------
  public getUsersDataSource(page?: number): Observable<UsersListModel> {
    const url = page ? 'https://reqres.in/api/users?page=' + page : 'https://reqres.in/api/users';
    return this.http.get(url)
    .pipe(
      map(result => result["data"]),
      map(users => {
        const model = new UsersListModel();
        Object.assign(model.users, users);
        return model;
      })
    );
  }

  public getUsersDataStore(dataSource: Observable<UsersListModel>): DataStore<UsersListModel> {
    // Check if we already loaded this object
    if (!this.usersDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UsersListModel = new UsersListModel();
      this.usersDataStore = new DataStore(shellModel);
      this.usersDataStore.load(dataSource);
    }

    return this.usersDataStore;
  }

  // -------  Data For Photos Tab (here we reuse the users data source) --------

  public getPhotosDataStore(dataSource: Observable<UsersListModel>): DataStore<UsersListModel> {
    // Check if we already loaded this object
    if (!this.photosDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: UsersListModel = new UsersListModel();
      this.photosDataStore = new DataStore(shellModel);
      this.photosDataStore.load(dataSource);
    }

    return this.photosDataStore;
  }

  // -------  Data For Cards Tab --------

  public getDestinationsDataSource(): Observable<DestinationsListModel> {
    return this.http.get('./assets/sample-data/destinations.json')
    .pipe(
      map(destinations => {
        const model = new DestinationsListModel();
        Object.assign(model, destinations);
        return model;
      })
    );
  }

  public getDestinationsDataStore(dataSource: Observable<DestinationsListModel>): DataStore<DestinationsListModel> {
    // Check if we already loaded this object
    if (!this.destinationsDataStore) {
      // Initialize the model specifying that it is a shell model
      const shellModel: DestinationsListModel = new DestinationsListModel();
      this.destinationsDataStore = new DataStore(shellModel);
      this.destinationsDataStore.load(dataSource);
    }
    return this.destinationsDataStore;
  }
}
