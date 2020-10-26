import {
  Component,
  OnInit
} from '@angular/core';
import {
  ChartDataSets,
  ChartOptions
} from 'chart.js';
import {
  Color,
  Label
} from 'ng2-charts';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  encapsulation: ViewEncapsulation.None,
})
export class PageHomeComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() {}

  ngOnInit() {
    this.calcularAumentoCostoProd(6, 500000, true);
  }

  calcularAumentoCostoProd(duracion: Number, costo: number, is3D: boolean) {
    let porcentaje, nuevo_costo, adicional;
    if (duracion > 100) {
      porcentaje = (costo * 9) / 100;
      nuevo_costo = costo + porcentaje;
    } else if (duracion <= 100 && duracion > 90) {
      porcentaje = (costo * 5) / 100;
      nuevo_costo = costo + porcentaje;
    } else {
      nuevo_costo = costo;
    }

    if (is3D) {
      adicional = (costo * 1) / 100;
      nuevo_costo = nuevo_costo + adicional;
    }


    return nuevo_costo;
  }
}
