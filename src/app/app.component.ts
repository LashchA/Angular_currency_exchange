import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public paramCcArray: string[] = [];
  public paramExDate: any = [];
  public currencyCode = ' ';
  public startDate = new Date();
  public endDate = new Date();
  public isShowChart = false;
  public isShowBar = false;
  constructor(public service: CurrencyService) {
    this.getTitle(),
      this.getDate()
  }

  getTitle() {
    this.service.getCourseOnDate()
      .subscribe(resp => this.paramCcArray = resp.map(par => par.cc))
  }
  getDate() {
    this.service.getCourse(this.currencyCode, this.startDate, this.endDate).subscribe(data => this.paramExDate = data)
  }



}