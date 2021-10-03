import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {UserInterface} from '../../interfaces/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  form: FormGroup;
  listActive: any[] = [true, false];
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserInterface,
              private matDialog: MatDialog,
              private fb: FormBuilder,
              private userService: UserService,
              private snackBar: MatSnackBar) {
    // nota: en el video no se escucha muy bien cuanto es la cantidad de caracteres.
    this.form = this.fb.group({
      user: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('^[^0-9](\\w*|.*)$')
      ])],
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
      ])],
      secondName: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20),
      ])],
      email: ['', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])],
      available: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  closeDialog(): void {
    this.matDialog.closeAll();
  }

  save(): void {
    if (this.form.valid) {
      const user: UserInterface = {
        id: 0,
        user: this.form.value.user,
        name: this.form.value.name,
        secondName: this.form.value.secondName,
        email: this.form.value.email,
        available: this.form.value.available
      };
      this.userService.addUser(user);
      this.snackBar.open(`El usuario ${user.name} ha sido creado exitosamente`, 'ok', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
    this.closeDialog();
  }
}

