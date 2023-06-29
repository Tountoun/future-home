import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Gender, Role, User } from '../utils/types';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.css']
})
export class UpdatePopUpComponent {
  updateForm: FormGroup;
  roles: Role[] = [Role.ADMIN, Role.USER];
  loadedData!: User;
  isDisabled: boolean = true;

  constructor(
    private authService: AuthService,
    private toast: ToastrService,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private dialog: MatDialogRef<UpdatePopUpComponent>
    ) {
      this.updateForm = this.builder.group({
        id: this.builder.control({value: '', disabled:true}, ),
        name: this.builder.control({value: '', disabled: true}, ),
        password: this.builder.control('', ),
        email: this.builder.control({value: '', disabled: true}, ),
        gender: this.builder.control({value: Gender.MALE, disabled: true}),
        role: this.builder.control('', Validators.required),
        country: this.builder.control({ value: '',  disabled: true}),
      });
      
    }
    ngOnInit(): void {
      this.authService.getUserByCode(this.dialogData.code).subscribe((res: User) => {
        this.loadedData = res;
        this.updateForm.setValue({
          id: this.loadedData.id,
          name: this.loadedData.name,
          password: this.loadedData.password,
          email: this.loadedData.email,
          gender: this.loadedData.gender,
          role: this.loadedData.role,
          country: this.loadedData.country,
        });
      });
    }

    proceedUpdate() {
      if (this.updateForm.valid) {
        const user: User = {
          id: this.loadedData.id,
          name: this.loadedData.name,
          email: this.loadedData.email,
          password: this.loadedData.password,
          role: this.updateForm.value.role,
          country: this.updateForm.value.country,
          gender: this.updateForm.value.gender
        }
        this.authService.updateUser(user.id, user)
          .subscribe((res: User) => {
            this.toast.success("User updated successfully.");
            this.dialog.close();
          })
      } else {
        this.toast.warning("Please select a role.");
      }
    }
}
