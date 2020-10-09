import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResolvedRouteData, ResolverHelper } from '../utils/resolver-helper';
import { switchMap } from 'rxjs/operators';
import { DestinationsListModel, DestinationItemModel } from '../models/destination.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  destinations: Array<DestinationItemModel>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data
    .pipe(
      // Extract data for this page
      switchMap((resolvedRouteData: IResolvedRouteData<DestinationsListModel>) => {
        return ResolverHelper.extractData<DestinationsListModel>(resolvedRouteData.data, DestinationsListModel);
      })
    )
    .subscribe((data: DestinationsListModel) => {
      this.destinations = data.destinations;
    }, (error) => console.log(error));
  }
}
