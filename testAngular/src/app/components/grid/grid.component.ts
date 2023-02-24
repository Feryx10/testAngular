import { Component, ViewChild} from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Grafica } from 'src/app/Interfaces/grafica';
import { BaseChartDirective } from 'ng2-charts';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})

export class GridComponent{
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  dataChart: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  };

  temperaturaData: any[] = [
    ['15:00', '15:15', '15:30', '15:45', '16:00'],
    [
      { label: 'Sector A', data: [30, 30, 31, 31, 32] },
      { label: 'Sector B', data: [30, 30, 31, 31, 32] },
      { label: 'Sector C', data: [30, 30, 31, 31, 32] },
      { label: 'Sector D', data: [30, 30, 31, 31, 32] },
    ],
  ];
  humedadData: any[] = [
    ['15:00', '15:15', '15:30', '15:45', '18:00'],
    [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  ];
  velVientoData: any[] = [
    ['15:00', '15:15', '15:30', '15:45', '16:00'],
    [
      { label: 'Sector A', data: [25, 30, 20, 33, 40] },
      { label: 'Sector B', data: [25, 30, 20, 33, 42] },
      { label: 'Sector C', data: [25, 30, 20, 33, 42] },
      { label: 'Sector D', data: [25, 30, 20, 33, 42] },
    ],
  ];

  ngOnInit(): void {

    for(let i=1;i<this.data[0].length;i++){
      this.typesOfSensors.push({nombre:this.data[0][i].nombre,id:i});
    }
  }




  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  public type:ChartType = "bar";
  selectedChart=[{nombre:'Linea',id:0}];
  selectedSensor=[{nombre:'Temperatura',id:0}];

  labelsGenerator(number: number) {
    switch(number){
      case 0:{
        return
      };
      case 1:{

      }
    }
    return Array.from({ length: number }, (_, i) => i + 1);
  }




  changeSensor(){
    switch(this.selectedSensor[0].id) {
      case 0: {
        this.dataChart.labels = this.temperaturaData[0];
        for(let i=0;i<this.data[0].length;i++){
          if(this.data[0].nombre == "Temperatura")this.temperaturaData[1][i];
        }
        this.dataChart.datasets = this.temperaturaData[1];
        break;
      }
      case 3: {
        this.dataChart.labels = this.humedadData[0];
        this.dataChart.datasets = this.humedadData[1];
        break;
      }
      case 2: {
        this.dataChart.labels = this.velVientoData[0];
        this.dataChart.datasets = this.velVientoData[1];
        break;
      }
      default: {
        break;
      }
   }
   this.chart?.update();
  }

  changeChart(type:ChartType){
    this.type = type;
  }


  typesOfCharts: {nombre: string, id: ChartType}[] = [
    {nombre:'Linea',id:"line"},
    {nombre:'Barra',id:"bar"},
    {nombre:'Rosquilla',id:"radar"},
    {nombre:'Radar',id:"doughnut"},
    {nombre:'Pie',id:"pie"},
    {nombre:'Area Polar',id:"polarArea"},
  ];

  timeSet: {nombre: string, id: number}[] = [
    {nombre:'Cada 15 min',id:0},
    {nombre:'Cada 1 hora',id:1},
    {nombre:'Cada 24 horas',id:2},
    {nombre:'Cada mes',id:3},
  ];



  typesOfSensors: {nombre: string, id: number}[] = [
    {nombre:'General',id:0},
  ];


  dato: any[] = [{nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50},];


  data2: any[] = [
    {
      "_id": "sensorS01:nave01-cultivo001-695e246308103388fcd9cc43790044ed",
      "_rev": "1-a5f5db5098848badecbe67c86bf22fdf",
      "nombre_cultivo": "Lechuga",
      "nombre_sensor": "S01",
      "year": "2013",
      "month": "01",
      "day": "01",
      "time": "11:30",
      "data": {
          "TemperaturaA": 50,
          "TemperaturaB": 50,
          "TemperaturaC": 50,
          "TemperaturaObjetoA": 50,
          "TemperaturaObjetoB": 50,
          "TemperaturaObjetoC": 50,
          "Temperatura": 50,
          "Presion": 50,
          "Humedad": 50,
          "Lumen": 50,
          "Vel.Viento": "20° norte"
      }
  },
  {
    "_id": "sensorS01:nave01-cultivo001-695e246308103388fcd9cc43790044ed",
    "_rev": "1-a5f5db5098848badecbe67c86bf22fdf",
    "nombre_cultivo": "Lechuga",
    "nombre_sensor": "S02",
    "year": "2013",
    "month": "01",
    "day": "01",
    "time": "11:15",
    "data": {
        "TemperaturaA": 100,
        "TemperaturaB": 100,
        "TemperaturaC": 100,
        "TemperaturaObjetoA": 100,
        "TemperaturaObjetoB": 100,
        "TemperaturaObjetoC": 100,
        "Temperatura": 100,
        "Presion": 100,
        "Humedad": 10,
        "Lumen": 33,
        "Vel.Viento": "20° norte"
    }
  },
  {
    "_id": "sensorS01:nave01-cultivo001-695e246308103388fcd9cc43790044ed",
    "_rev": "1-a5f5db5098848badecbe67c86bf22fdf",
    "nombre_cultivo": "Lechuga",
    "nombre_sensor": "S02",
    "year": "2013",
    "month": "01",
    "day": "01",
    "time": "11:00",
    "data": {
        "TemperaturaA": 30,
        "TemperaturaB": 30,
        "TemperaturaC": 30,
        "TemperaturaObjetoA": 100,
        "TemperaturaObjetoB": 100,
        "TemperaturaObjetoC": 100,
        "Temperatura": 100,
        "Presion": 100,
        "Humedad": 10,
        "Lumen": 33,
        "Vel.Viento": "20° norte"
    }
  }
  ];

  data:any[] = [
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 837, date:'2021-01-01', time:'00:00'},
      {nombre: 'TemperaturaA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Temperatura', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Presion', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Humedad', valor: 10, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Lumen', valor: 33, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Vel.Viento', valor: 20, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},],
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 837, date:'2021-01-01', time:'00:00'},
      {nombre: 'TemperaturaA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'TemperaturaObjetoC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Temperatura', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Presion', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Humedad', valor: 10, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Lumen', valor: 33, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {nombre: 'Vel.Viento', valor: 20, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},],
      [
        {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 837, date:'2021-01-01', time:'00:00'},
        {nombre: 'TemperaturaA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'TemperaturaB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'TemperaturaC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'TemperaturaObjetoA', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'TemperaturaObjetoB', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'TemperaturaObjetoC', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'Temperatura', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'Presion', valor: 100, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'Humedad', valor: 10, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'Lumen', valor: 33, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
        {nombre: 'Vel.Viento', valor: 20, valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},],
    ];

  graficas:Grafica[] = [
    {nombre_cultivo:'Tomates',
    nombre_sensor: 'sensor',
    valor_maximo: 80,
    valor_minimo: 30,
    peso_actual: 30,
    temperatura: 30,
    humedad: 30,
    valor_min_grafico: 0,
    valor_max_grafico: 100,
    intervalo: 10},
    {nombre_cultivo:'Tomates',
    nombre_sensor: 'sensor',
    valor_maximo: 80,
    valor_minimo: 30,
    peso_actual: 30,
    temperatura: 30,
    humedad: 30,
    valor_min_grafico: 0,
    valor_max_grafico: 100,
    intervalo: 10},
    {nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50},
  ];
}
