import { Component, inject } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import { BarController, BarElement, CategoryScale, LinearScale, PieController, ArcElement, LineController, LineElement, PointElement, DoughnutController, RadarController, RadialLinearScale, PolarAreaController } from 'chart.js';
import { AuthService } from '@sei/shared';
import { CommonModule } from '@angular/common';

Chart.register(
  BarController, BarElement, CategoryScale, LinearScale,
  PieController, ArcElement,
  LineController, LineElement, PointElement,
  DoughnutController,
  RadarController, RadialLinearScale,
  PolarAreaController
);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  standalone: true,
  imports: [BaseChartDirective, CommonModule]
})
export class ChartsComponent {

  private authService = inject(AuthService);

  get auth() {
    return this.authService.auth();
  }
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
  // Line Chart
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public lineChartType: ChartType = 'line';
  public lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.4)',
        tension: 0.4
      }
    ]
  };

  // Doughnut Chart
  public doughnutChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [120, 150, 90],
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

  // Radar Chart
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartType: ChartType = 'radar';
  public radarChartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'Series A',
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)'
      },
      {
        label: 'Series B',
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }
    ]
  };

  // Polar Area Chart
  public polarAreaChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public polarAreaChartType: ChartType = 'polarArea';
  public polarAreaChartData = {
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(201, 203, 207, 0.7)',
          'rgba(54, 162, 235, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
}
