import { Component, Input} from '@angular/core';
import { Grafica } from 'src/app/Interfaces/grafica';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent {
  @Input() grafica!: Grafica;
}
