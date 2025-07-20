import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { BarController, BarElement, CategoryScale, LinearScale, PieController, ArcElement, Legend, Tooltip } from 'chart.js';

Chart.register(
  BarController, BarElement, CategoryScale, LinearScale,
  PieController, ArcElement, Legend, Tooltip
);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  standalone: true,
  imports: [BaseChartDirective]
})
export class ChartsComponent {
  // Bar Chart
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartData = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { 
        data: [65, 59, 80, 81, 56, 55, 40], 
        label: 'Series A',
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      { 
        data: [28, 48, 40, 19, 86, 27, 90], 
        label: 'Series B',
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  // Pie Chart
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public pieChartType: ChartType = 'pie';
  public pieChartData = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
    datasets: [
      { 
        data: [300, 500, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
}
