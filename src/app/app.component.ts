import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements
OnInit,
OnChanges,
OnDestroy,
DoCheck,
AfterViewInit,
AfterViewChecked{
  isVisible = true;
  name = '';
  @ViewChild('child') child: ChildComponent;

  constructor() {
    console.log('parent constructor');
  }

  ngOnInit(): void {
    console.log('parent ngOnInit', this.child);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent ngOnChanges not works because it is parent component');
  }

  ngOnDestroy(): void {
    console.log('parent ngOnDestroy', this.child);
  }

  ngDoCheck(): void {
    console.log('parent ngDoCheck', this.child);
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit', this.child);
  }

  ngAfterViewChecked(): void {
    console.log('parent ngAfterViewChecked', this.child);
  }
}
