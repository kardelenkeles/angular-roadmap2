import { Component, OnInit } from '@angular/core';
import { filter, from, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };
  }
}
