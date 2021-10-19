import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent {
  @Input() public set exchangeData(data: any[]) {
    this.lineChartLabels = [];
    const chartData: any = [];

    data.forEach(course => {
      this.lineChartLabels.push(course.exchangedate)
      chartData.push(course.rate)
    })
    this.lineChartData = [{ data: chartData, label: 'rate' },]
  }

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,0,0,0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];


  constructor() { }

}
