import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import axios from 'axios';

interface User {
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
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  imports: [CommonModule],
})

export class UsersComponent implements OnInit {
  users: User[] = [];

  private cdr = inject(ChangeDetectorRef);

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
}
