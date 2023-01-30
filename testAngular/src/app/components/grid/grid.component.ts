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
      this.typesOfSensors.push({name:this.data[0][i].name,id:i});
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
  selectedChart=[{name:'Linea',id:0}];
  selectedSensor=[{name:'Temperatura',id:0}];

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
          if(this.data[0].name == "Temperatura")this.temperaturaData[1][i];
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

  
  typesOfCharts: {name: string, id: ChartType}[] = [
    {name:'Linea',id:"line"}, 
    {name:'Barra',id:"bar"}, 
    {name:'Rosquilla',id:"radar"}, 
    {name:'Radar',id:"doughnut"},
    {name:'Pie',id:"pie"}, 
    {name:'Area Polar',id:"polarArea"},
  ];
  
  timeSet: {name: string, id: number}[] = [
    {name:'Cada 15 min',id:0}, 
    {name:'Cada 1 hora',id:1}, 
    {name:'Cada 24 horas',id:2}, 
    {name:'Cada mes',id:3},
  ];



  typesOfSensors: {name: string, id: number}[] = [
    {name:'General',id:0},    
  ];

  


  data:any[] = [
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 836, date:'2021-01-01', time:'00:00'},
      {name: 'Peso', value: 3,valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {name: 'Temperatura', value: 100},
      {name: 'Humedad', value: 10},
      {name: 'Vel.Viento', value: 33}, 
      {name: 'Dir.Viento', value: "20° Norte"},],
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 837, date:'2021-01-01', time:'00:00'},
      {name: 'TemperaturaA', value: 100},
      {name: 'TemperaturaB', value: 100},
      {name: 'TemperaturaC', value: 100},
      {name: 'TemperaturaObjetoA', value: 100},
      {name: 'TemperaturaObjetoB', value: 100},
      {name: 'TemperaturaObjetoC', value: 100},
      {name: 'Temperatura', value: 100},
      {name: 'Presion', value: 100},
      {name: 'Humedad', value: 10},
      {name: 'Lumen', value: 33}, 
      {name: 'Vel.Viento', value: 20},],
    [
      {sample: 838},
      {name:'Fecha', value: '2021-01-01'},
      {name:'Hora', value: '00:00'},
      {nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50},
      {name: 'Humedad', value: 10},
      {name: 'Vel.Viento', value: 33},
      {name: 'Dir.Viento', value: "20° Norte"},],
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 838, date:'2021-01-01', time:'00:00'},
      {name: 'Peso', value: 3,valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {name: 'Temperatura', value: 100},
      {name: 'Humedad', value: 10},
      {name: 'Vel.Viento', value: 33}, 
      {name: 'Dir.Viento', value: "20° Norte"},],
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 839, date:'2021-01-01', time:'00:00'},
      {name: 'Peso', value: 3,valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {name: 'Temperatura', value: 100},
      {name: 'Humedad', value: 10},
      {name: 'Vel.Viento', value: 33}, 
      {name: 'Dir.Viento', value: "20° Norte"},],
    [
      {nombre_cultivo:"Lechuga",nombre_sensor:"S02",sample: 836, date:'2021-01-01', time:'00:00'},
      {name: 'Peso', value: 3,valor_max_grafico:400,valor_min_grafico:300,valor_maximo:500,valor_minimo:0,intervalo:50},
      {name: 'Temperatura', value: 100},
      {name: 'Humedad', value: 10},
      {name: 'Vel.Viento', value: 33}, 
      {name: 'Dir.Viento', value: "20° Norte"},]];

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
