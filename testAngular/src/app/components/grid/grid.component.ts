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
  @ViewChild(BaseChartDirective)
  public chart!: BaseChartDirective;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'grey'},
    {text: 'Two', cols: 3, rows: 2, color: 'grey'},
  ];

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
    ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  ];  
  velVientoData: any[] = [
    ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    [
      { label: 'Sector A', data: [25, 30, 20, 33, 40] },
      { label: 'Sector B', data: [25, 30, 20, 33, 42] },
      { label: 'Sector C', data: [25, 30, 20, 33, 42] },
      { label: 'Sector D', data: [25, 30, 20, 33, 42] },
    ],
  ];  

  dataChart: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
    ],
  };

  temperaturaChart: ChartData<'bar'> = {
    labels: ['15:00', '15:15', '15:30', '15:45', '16:00'],
    datasets: [
      { label: 'Sector A', data: [30, 30, 31, 31, 32] },
      { label: 'Sector B', data: [30, 30, 31, 31, 32] },
      { label: 'Sector C', data: [30, 30, 31, 31, 32] },
      { label: 'Sector D', data: [30, 30, 31, 31, 32] },
    ],
  };



  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };
  public isCube = false;

  public type:ChartType = "bar";
  selected=[{name:'Linea',id:0}];
  selectedSensor=[{name:'Temperatura',id:0}];

  

  selectSensor(){
    console.log(this.selectedSensor[0].id);
    switch(this.selectedSensor[0].id) { 
      case 0: { 
        this.dataChart.labels = this.temperaturaData[0];
        this.dataChart.datasets = this.temperaturaData[1];
        break; 
      } 
      case 1: { 
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
  }

  changeChart(type:ChartType){
    this.type = type;
    if (type=="polarArea" || type=="doughnut" || type=="pie" || type=="radar")
      this.isCube = true;
    else
      this.isCube = false;    
  }

  typesOfSensors: {name: string, id: number}[] = [
    {name:'General',id:0},
    {name:'Temperatura',id:1},
    {name:'Humedad',id:2},
    {name:'Vel.Viento',id:3},
    {name:'a)',id:4}
  ];
  typesOfShoes: {name: string, id: ChartType}[] = [
      {name:'Linea',id:"line"}, 
      {name:'Barra',id:"bar"}, 
      {name:'Rosquilla',id:"radar"}, 
      {name:'Radar',id:"doughnut"},
      {name:'Pie',id:"pie"}, 
      {name:'Area Polar',id:"polarArea"},
  ];
  data:any[] = [
    {name:'Muestra',value: 836},
    {name:'Fecha', value: '2021-01-01'},
    {name:'Hora', value: '00:00:00'},
    {name: 'Temperatura', value: 100},
    {name: 'Humedad', value: 10},
    {name: 'Vel.Viento', value: 33},
    {name: 'Dir.Viento', value: "20° Norte"},]


  graficas: Grafica[] = [
    {nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50},
  ];
}
