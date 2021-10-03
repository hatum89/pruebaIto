import { Injectable } from '@angular/core';
import {UserInterface} from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser: UserInterface[] = [
    {id: 1, user: 'Oscar.12', name: 'Oscar', secondName: 'Palmar', email: 'Oscar.12@gmail.com', available: true},
    {id: 2, user: 'Melinda.2', name: 'Melinda', secondName: 'Rodriguez', email: 'Melinda.2@gmail.com', available: true},
    {id: 3, user: 'Luis.4', name: 'Luis', secondName: 'Taco', email: 'Luis.4@gmail.com', available: true},
    {id: 4, user: 'Lisa.56', name: 'Lisa', secondName: 'Simpsons', email: 'Lisa.56@gmail.com', available: true},
    {id: 5, user: 'Oscar.16', name: 'Oscar', secondName: 'Palmar', email: 'Oscar.12@gmail.com', available: true},
    {id: 6, user: 'Melinda.27', name: 'Melinda', secondName: 'Rodriguez', email: 'Melinda.2@gmail.com', available: true},
    {id: 7, user: 'Luis.43', name: 'Luis', secondName: 'Taco', email: 'Luis.4@gmail.com', available: true},
    {id: 8, user: 'Lisa.565', name: 'Lisa', secondName: 'Simpsons', email: 'Lisa.56@gmail.com', available: true},
  ];

  constructor() { }

  getUser(): UserInterface[]{
    return  this.listUser;
  }

  addUser(user: UserInterface): number{
    let maxId = 0;
    this.listUser.forEach(userSnapshot => {
      if (maxId <= userSnapshot.id){
        maxId = userSnapshot.id;
      }
    });
    user.id = maxId + 1;
    return  this.listUser.push(user);
  }
  edit(user: UserInterface): void{
    this.listUser = this.listUser.map( userSnapshot => {
      if (userSnapshot.id === user.id) {
        return user;
      }
      return userSnapshot;
    });
  }

}
