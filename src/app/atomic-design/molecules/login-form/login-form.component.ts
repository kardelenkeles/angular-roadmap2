import { Component } from '@angular/core';
import {Store} from "@ngxs/store";
import {Login} from "../../auth.action";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string;
  password: string;

  constructor(private store: Store) {}

  onSubmit() {
    // Dispatch the login action with the provided username and password
    this.store.dispatch(new Login());
  }
}
