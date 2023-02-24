import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { GridComponent } from './components/grid/grid.component';
import { RadialComponent } from './components/gauges/radial/radial.component';
import { BarraComponent } from './components/gauges/bullet/barra/barra.component';
import { CardsComponent } from './components/gauges/cards/cards.component';
import { TuplasComponent } from './components/cards/tuplas/tuplas.component';
import { TestChartComponent } from './components/test-chart/test-chart.component';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { environment as env } from '../environments/environment.prod';
import { EventStreamComponent } from './components/event-stream/event-stream.component';
import { EventMqttService } from './services/event.mqtt.service';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: env.mqtt.server,
  port: env.mqtt.port,
  protocol:"wss",
};

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    RadialComponent,
    BarraComponent,
    CardsComponent,
    TuplasComponent,
    TestChartComponent,
    EventStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgChartsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    IgxRadialGaugeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    IgxBulletGraphModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [
    EventMqttService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
