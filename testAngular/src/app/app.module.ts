import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/grid/grid.component';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { RadialComponent } from './components/gauges/radial/radial.component';
import { TuplaComponent } from './components/cards/tupla/tupla.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field';  
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { BarraComponent } from './components/gauges/bullet/barra/barra.component';
import { LineaComponent } from './components/cards/linea/linea/linea.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    RadialComponent,
    TuplaComponent,
    BarraComponent,
    LineaComponent,
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
    IgxBulletGraphModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
