import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../users/users.component';

@Component({
  selector: 'app-user-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class ModalComponent implements OnChanges {
  @Input() user: User = {} as User;
  @Input() isOpen = false;

  @Output() modalClose = new EventEmitter<void>();
  @Output() userSave = new EventEmitter<User>();

  userForm: FormGroup;

  private fb = inject(FormBuilder);

  constructor() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnChanges() {
    if (this.user) {
      this.userForm.patchValue(this.user);
    } else {
      this.userForm.reset();
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userSave.emit(this.userForm.value);
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  onClose() {
    this.modalClose.emit();
  }
}
