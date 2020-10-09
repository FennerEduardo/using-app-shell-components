import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IResolvedRouteData, ResolverHelper } from '../utils/resolver-helper';
import { UsersListModel, UserItemModel } from '../models/user.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users: Array<UserItemModel>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<UsersListModel>) => {
        return ResolverHelper.extractData<UsersListModel>(resolvedRouteData.data, UsersListModel);
      })
    )
    .subscribe((data) => {
      this.users = data.users;
    }, (error) => console.log(error));
  }
}
