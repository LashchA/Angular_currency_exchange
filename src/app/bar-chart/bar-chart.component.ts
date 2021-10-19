import { Component,Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {
@Input() public set exchangeBarDate (data:any[]){
this.barChartLabels = []
const barDate:any = []
data.forEach(course => {
  this.barChartLabels.push(course.exchangedate);
  barDate.push(course.rate)
})
this.barChartData = [{data:barDate,label:'rate'}]
}
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [];

}