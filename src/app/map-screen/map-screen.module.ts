import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { MapScreenRoutingModule } from './map-screen-routing.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MapScreenRoutingModule,
  ]
})
export class MapScreenModule { }
