import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserInterface} from '../../interfaces/user';
import {UserService} from '../../services/user.service';
import {MatDialog} from '@angular/material/dialog';
import {InfoUserComponent} from '../../modals/info-user/info-user.component';
import {CreateUserComponent} from '../../modals/create-user/create-user.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit , AfterViewInit {
  listUser: UserInterface[] = [];
  displayedColumns: string[] = ['user', 'email', 'name', 'secondName', 'available', 'Actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private name: string;
  private user: string;
  private email: string;
  private secondName: string;
  private available: boolean;

  constructor(private userService: UserService,
              private matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.listUser = this.userService.getUser();
    this.dataSource = new MatTableDataSource<any>(this.listUser);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  searchElement(user): void {
    this.listUser = this.listUser.filter(userDialog => userDialog.user === user);
    this.listUser.map((result) => {
       this.user = result.user;
       this.name = result.name;
       this.email = result.email;
       this.secondName = result.secondName;
       this.available = result.available;
      });
    this.matDialog.open(InfoUserComponent, {
      data: {
        user: this.user,
        name: this.name,
        email: this.email,
        secondName: this.secondName,
        available: this.available
      }
    });
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }
  createUser(): void{
    this.matDialog.open(CreateUserComponent, {
      data: {
        user: this.user,
        name: this.name,
        email: this.email,
        secondName: this.secondName,
        available: this.available
      }
    });
    this.getUsers();
    this.dataSource.paginator = this.paginator;
  }
}
