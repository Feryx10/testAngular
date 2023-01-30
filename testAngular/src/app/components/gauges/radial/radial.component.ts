import { Component, Input} from '@angular/core';
import { Grafica } from 'src/app/Interfaces/grafica';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent {
  
  grafica =
    {nombre_cultivo:"Lechuga",valor_max_grafico:400,valor_min_grafico:300,nombre_sensor:"S02",valor_maximo:500,valor_minimo:0,peso_actual:3,temperatura:21.204,humedad:60.059,intervalo:50};
  
}
