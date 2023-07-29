import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    //promise
    const promise = new Promise (resolve => {
      console.log('Promise call...');
      
      setTimeout(()=>{
        resolve('Promise working');
      }, 1000)
    });

    promise.then(result => console.log(result));

    //observable
    const observable = new Observable(sub => {
      console.log('Observable call...');
      
      setTimeout(() => {
        sub.next('Observable working');
      }, 1000);
    });

    observable.subscribe(result => console.log(result));



  }



}
