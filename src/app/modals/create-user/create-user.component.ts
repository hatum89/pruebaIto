import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {UserInterface} from '../../interfaces/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserInterface,
              private matDialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService) {
    this.form = this.fb.group({
      user: [''],
      name: [''],
      secondName: [''],
      email: [''],
      available: ['']
    });
  }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.matDialog.closeAll();
  }

  save(): void {
    const user: UserInterface = {
      user: this.form.value.user,
      name: this.form.value.name,
      secondName: this.form.value.secondName,
      email: this.form.value.email,
      available: this.form.value.available
    };
    console.log(user);
  }
}
