import { Component, OnInit, OnChanges } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-event-stream',
  templateUrl: './event-stream.component.html',
  styleUrls: ['./event-stream.component.css']
})

export class EventStreamComponent  implements OnInit, OnChanges {

  events: any[] = [];
  message:string = '';

  constructor(private _mqttService: MqttService) { }

  ngOnInit() {
    this._mqttService.observe('hola').subscribe((message: IMqttMessage) => {
      console.log(message.payload.toString());
      this.message = message.payload.toString();
    });
  }

  ngOnChanges() {
    console.log('a '+this.message);
  }
}
