import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IResolvedRouteData, ResolverHelper } from '../utils/resolver-helper';
import { UsersListModel, UserItemModel } from '../models/user.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

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
