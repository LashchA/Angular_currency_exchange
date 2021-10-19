import { Observable, zip } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
   providedIn: 'root',
})
export class CurrencyService {

   constructor(private http: HttpClient) { }

   public getCurrencyExchange(): Observable<any[]> {
      return this.http.get<any[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
   }

   public getCourseOnDate(): Observable<any[]> {
      return this.http.get<any[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json')
   }

   formatDate(value: Date): string {
      let day = value.getDate();
      let month = value.getMonth() + 1;
      let year = value.getFullYear();
      return `${year}${month < 10 ? `0${month}` : month}${day < 10 ? `0${day}` : day
         }`;
   }

   getCourseByCurrency(currencyCode: string, date: string): Observable<any> {
      return this.http.get<any[]>(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currencyCode}&date=${date}&json`)
         .pipe(
            map((courses: any[]) => courses[0])
         )
   }

   public getCourse(currencyCode: string, startDate: Date, endDate: Date): Observable<any[]> {
      const dates = [];
      startDate = new Date(startDate);
      endDate = new Date(endDate);

      let currentDate = startDate;
      while (currentDate.getTime() <= endDate.getTime()) {
         dates.push(this.formatDate(currentDate))
         currentDate = new Date(currentDate)
         currentDate.setDate(currentDate.getDate() + 1)
      }

      return zip(...dates.map(date => this.getCourseByCurrency(currencyCode, date)))
   }
}