import { Component, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-tuplas',
  templateUrl: './tuplas.component.html',
  styleUrls: ['./tuplas.component.css']
})
export class TuplasComponent {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  @Input() data:any[]= [];
}
