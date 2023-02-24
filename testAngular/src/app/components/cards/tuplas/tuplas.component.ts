import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Sensor } from 'src/app/Interfaces/sensor';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-tuplas',
  templateUrl: './tuplas.component.html',
  styleUrls: ['./tuplas.component.css'],

})

export class TuplasComponent implements OnInit{
  valor: boolean = true;
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;
  @Input() data:Sensor[]= [];
  selectSensor: String = "";
  historyOfSensor: any[] = [];

  sensorList: String[] = [
  ];

  principalsensor:any[]=[];

  //displayedColumns = [];
  displayedColumns: string[] = ['Muestra','TemperaturaA', 'TemperaturaB', 'TemperaturaC', 'TemperaturaObjetoA', 'TemperaturaObjetoB', 'TemperaturaObjetoC'];
  //columnsToDisplay: string[] = this.displayedColumns.slice();


  ngOnInit(): void {


    if(this.data.length > 0){
      if(this.data.length == 1){
        this.principalsensor.push(this.data[0]);
        this.selectSensor = this.data[0].nombre_sensor;
        this.historyOfSensor.push(this.data[0].data);
      }
      else{
        for(let i=0;i<this.data.length;i++){
          if(this.sensorList.indexOf(this.data[i].nombre_sensor) == -1)
            this.sensorList.push(this.data[i].nombre_sensor);
        }
        this.principalsensor.push(this.data[0]);
        for (let i = 1; i < this.data.length; i++) {
          if(Object.keys(this.data[i].data).length > Object.keys(this.data[i -1].data).length){
              this.principalsensor  = [];
              this.principalsensor.push(this.data[i]);
            }
        }
      }
      this.selectSensor = this.principalsensor[0].nombre_sensor;
      this.historyOfSensor.push(this.principalsensor[0].data);
      for (let i = 0; i < Object.keys(this.principalsensor[0].data).length; i++) {
        //this.columnsToDisplay.push(Object.keys(this.principalsensor[0].data)[i]);
      }
    }
    console.log(this.displayedColumns);
    //console.log(this.columnsToDisplay);
    console.log(this.historyOfSensor);
    this.valor = false;
  }

  changeSensor(selected:String){
    this.selectSensor = selected;
    this.historyOfSensor = [];
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].nombre_sensor == selected){
        this.historyOfSensor.push(this.data[i].data);
      }
    }

    console.log(this.selectSensor);
    console.log(this.historyOfSensor);
  }

  change($event: any){
    this.changeSensor(this.sensorList[$event.index]);
  }

}
