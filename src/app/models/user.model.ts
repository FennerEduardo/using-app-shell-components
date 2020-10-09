import { ShellModel } from '../shell/data-store';

export class UserItemModel {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export class UsersListModel extends ShellModel {
  users: Array<UserItemModel> = [
    new UserItemModel(),
    new UserItemModel(),
    new UserItemModel(),
    new UserItemModel(),
    new UserItemModel(),
    new UserItemModel()
  ];

  constructor() {
    super();
  }
}
