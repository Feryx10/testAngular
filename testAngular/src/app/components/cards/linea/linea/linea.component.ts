import { Component } from '@angular/core';
import { Grafica } from 'src/app/Interfaces/grafica';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css']
})
export class LineaComponent {
  data:any[] = [
    {name:'Muestra',value: 836},
    {name:'Fecha', value: '2021-01-01'},
    {name:'Hora', value: '00:00:00'},
    {name: 'Temperatura', value: 100},
    {name: 'Humedad', value: 10},
    {name: 'Vel.Viento', value: 33},
    {name: 'Dir.Viento', value: "20° Norte"},]
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
  ];
  tiles: Tile[] = [    
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
  

}
