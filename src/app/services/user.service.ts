import { Injectable } from '@angular/core';
import {UserInterface} from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser: UserInterface[] = [
    {user: 'Oscar.12', name: 'Oscar', secondName: 'Palmar', email: 'Oscar.12@gmail.com', available: true},
    {user: 'Melinda.2', name: 'Melinda', secondName: 'Rodriguez', email: 'Melinda.2@gmail.com', available: true},
    {user: 'Luis.4', name: 'Luis', secondName: 'Taco', email: 'Luis.4@gmail.com', available: true},
    {user: 'Lisa.56', name: 'Lisa', secondName: 'Simpsons', email: 'Lisa.56@gmail.com', available: true},
    {user: 'Oscar.12', name: 'Oscar', secondName: 'Palmar', email: 'Oscar.12@gmail.com', available: true},
    {user: 'Melinda.2', name: 'Melinda', secondName: 'Rodriguez', email: 'Melinda.2@gmail.com', available: true},
    {user: 'Luis.4', name: 'Luis', secondName: 'Taco', email: 'Luis.4@gmail.com', available: true},
    {user: 'Lisa.56', name: 'Lisa', secondName: 'Simpsons', email: 'Lisa.56@gmail.com', available: true},
  ];

  constructor() { }

  getUser(): UserInterface[]{
    return  this.listUser;
  }
  addUser(user: UserInterface): number{
    return  this.listUser.push(user);
  }
  edit(user: UserInterface): void{
    this.listUser = this.listUser.map( userSnapshot => {
      if (userSnapshot.user === user.user) {
        return user;
      }
      return userSnapshot;
    });
  }

}
