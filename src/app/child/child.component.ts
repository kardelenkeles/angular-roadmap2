import {
    AfterContentChecked,
    AfterContentInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
  } from '@angular/core';
  
  @Component({
    selector: 'app-child',
    template: `
    <p>child component input : {{ name }}</p>
    <ng-content></ng-content>
    `,
  })
  export class ChildComponent
    implements
      OnInit,
      OnChanges,
      OnDestroy,
      DoCheck,
      AfterContentInit,
      AfterContentChecked
  {
    @Input() name = '';
    @ContentChild('content') content: ElementRef;
  
    constructor() {
      console.log('child constructor');
    }
  
    ngOnInit(): void {
      console.log('child ngOnInit', this.content);
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      console.log('child ngOnChanges', changes);
    }
  
    ngOnDestroy(): void {
      console.log('child ngOnDestroy', this.content);
    }
  
    ngDoCheck(): void {
      console.log('child ngDoCheck', this.content);
    }
  
    ngAfterContentInit(): void {
      console.log('child ngAfterContentInit', this.content);
    }
  
    ngAfterContentChecked(): void {
      console.log('child ngAfterContentChecked', this.content);
    }
  }
  