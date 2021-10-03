import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {UserInterface} from '../../interfaces/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  listActive: any[] = [true, false];
  form: FormGroup;
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserInterface,
              private matDialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService) {
    this.form = this.fb.group({
      user: [data.user, Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[^0-9](\\w*|.*)$')
      ])],
      name: [data.name, Validators.compose([
        Validators.required,
        Validators.maxLength(20),
      ])],
      secondName: [data.secondName, Validators.compose([
        Validators.required,
        Validators.maxLength(20),
      ])],
      email: [data.email, Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])],
      available: [data.available, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.matDialog.closeAll();
  }

  edit(): void {
    const user: UserInterface = {
       id: this.data.id,
       user: this.form.value.user,
       name: this.form.value.name,
       email: this.form.value.email,
       secondName: this.form.value.secondName,
       available: this.form.value.available,
   };
    this.userService.edit(user);
    this.matDialog.closeAll();
  }
}
