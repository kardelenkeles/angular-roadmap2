import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';
import {TranslateService} from "@ngx-translate/core";

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

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use('en');
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
