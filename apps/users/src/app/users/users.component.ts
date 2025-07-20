import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import axios from 'axios';
import { ModalComponent } from '../modal/modal.component';
import { AuthService } from '@sei/shared';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  bank: {
    cardNumber: string;
    cardExpire: string;
  };
  company: {
    department: string;
    title: string;
  };
  role: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule, ModalComponent],
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  isModalOpen = false;
  isCreateModalOpen = false;
  selectedUser: User = {} as User;
  newUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    company: { department: '', title: '' },
    bank: { cardNumber: '', cardExpire: '' },
    role: ''
  };

  private authService = inject(AuthService);

  private cdr = inject(ChangeDetectorRef);

  get auth() {
    return this.authService.auth();
  }

  ngOnInit() {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        this.users = response.data.users || [];
        this.cdr.detectChanges();
      })
      .catch(error => {
        console.error('Failed to fetch users:', error);
      });
  }

  openEditModal(user: User) {
    this.selectedUser = user;
    this.isModalOpen = true;
  }

  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isCreateModalOpen = false;
    this.selectedUser = {} as User;
  }

  saveUser(updatedUser: User) {
    if (this.selectedUser.email === updatedUser.email && this.selectedUser.firstName === updatedUser.firstName && this.selectedUser.role === updatedUser.role) {
      alert('Enter your changes to save the user.');
    } else{
      this.closeModal();
    }
  }
}
