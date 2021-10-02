import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {UserInterface} from '../../interfaces/user';


@Component({
  selector: 'app-create',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserInterface,
              private matDialog: MatDialog) {
  }
  ngOnInit(): void {
  }

  closeDialog(): void {
    this.matDialog.closeAll();
  }
}
