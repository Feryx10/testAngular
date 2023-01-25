import { Component, ViewChild } from '@angular/core';
import { IgxBulletGraphComponent } from "igniteui-angular-gauges";

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  @ViewChild("bulletGraph", { static: true })
  public bulletGraph!: IgxBulletGraphComponent;

}
