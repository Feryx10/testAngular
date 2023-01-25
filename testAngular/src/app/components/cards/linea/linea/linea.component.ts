import { Component } from '@angular/core';
import { Grafica } from 'src/app/Interfaces/grafica';

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
    {nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50},
  ];

}
