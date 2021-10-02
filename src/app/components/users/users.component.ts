import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserInterface} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit , AfterViewInit {
  listUser: UserInterface[] = [];
  displayedColumns: string[] = ['user', 'email', 'name', 'secondName', 'available', 'Actions'];
  dataSource: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  nameId: string;

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void{
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
}
