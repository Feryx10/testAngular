import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { LineaComponent } from '../linea/linea/linea.component';

@Component({
  selector: 'app-tupla',
  templateUrl: './tupla.component.html',
  styleUrls: ['./tupla.component.css']
})

export class TuplaComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
}
