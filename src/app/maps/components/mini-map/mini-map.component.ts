import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent {

    @Input() lngLat?: [number, number];
    @ViewChild('map') divMap?: ElementRef;

    ngAfterViewInit() {
        if( !this.divMap?.nativeElement ) throw "Map Div not found";
        if( !this.lngLat ) throw "LngLat can't be null";

        const map = new Map({
            container: this.divMap.nativeElement,//'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: this.lngLat, // starting position [lng, lat]
            zoom: 15, // starting zoom
            interactive: false,
        });

        new Marker()
            .setLngLat( this.lngLat )
            .addTo( map )
    }

}
