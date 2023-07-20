import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {FormState} from "./ngxs-form.state";

@Component({
  selector: 'app-ngxs-form',
  templateUrl: './ngxs-form.component.html',
  styleUrls: ['./ngxs-form.component.css']
})
export class NgxsFormComponent {
  @Select(FormState.details) details$: Observable<any>;
  @Select(FormState.text) text$: Observable<any>;
  filtersForm: FormGroup;
  options = [ { id: 1, name: 'One' }, { id: 2, name: 'Two' },  {id: 3, name: 'Three' }];

  title = 'app';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {
    this.setupForm();

    this.details$.subscribe(console.log);
    this.text$.subscribe(console.log);
  }

  setupForm() {
    this.filtersForm = this.formBuilder.group({
      text: [null],
      select: [null],
      date: [null]
    });
  }

  submitForm() {
    console.log('Form submit');
  }
}
