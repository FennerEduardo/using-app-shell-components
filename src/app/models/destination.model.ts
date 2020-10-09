import { ShellModel } from '../shell/data-store';

export class DestinationItemModel {
  image: string;
  description: string;
  location: string;
  name: string;
}

export class DestinationsListModel extends ShellModel {
  destinations: Array<DestinationItemModel> = [
    new DestinationItemModel(),
    new DestinationItemModel(),
    new DestinationItemModel(),
    new DestinationItemModel()
  ];

  constructor() {
    super();
  }
}
