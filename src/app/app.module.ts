import { CurrencyService } from './services/currency.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MyLineChartComponent } from './my-line-chart/my-line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    MyLineChartComponent,
    BarChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
