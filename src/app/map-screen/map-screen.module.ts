import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapScreenRoutingModule } from './map-screen-routing.module';



@NgModule({
  declarations: [
    MapScreenComponent
  ],
  imports: [
    CommonModule,
    MapScreenRoutingModule,
  ]
})
export class MapScreenModule { }
