import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit{
  dtOptions: Promise<DataTables.Settings>;

  constructor(@Inject(HttpClient) private httpClient: HttpClient) {}

  ngOnInit(): void {
  this.dtOptions = this.httpClient.get<DataTables.Settings>('data/dtOptions.json')
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
