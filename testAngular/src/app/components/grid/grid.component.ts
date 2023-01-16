import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

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
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'grey'},
    {text: 'Two', cols: 3, rows: 2, color: 'grey'},
  ];
  salesData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'Mobiles', data: [1000, 1200, 1050, 2000, 500] },
      { label: 'Laptop', data: [200, 100, 400, 50, 90] },
      { label: 'AC', data: [500, 400, 350, 450, 650] },
      { label: 'Headset', data: [1200, 1500, 1020, 1600, 900] },
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
  barra(){
    this.type = "bar";
    this.isCube = false;
  }
  burbuja(){
    this.type = "bubble";
    this.isCube = false;
  }
  linea(){
    this.type = "line";
    this.isCube = false;
  }
  circulo(){
    this.type = "doughnut";
    this.isCube = true;
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
