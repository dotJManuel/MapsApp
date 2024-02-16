import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PlacesService } from '../../services';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

    @ViewChild('mapDiv') mapDivElement!: ElementRef;

    constructor( private placesService: PlacesService ) {}

    ngAfterViewInit(): void {
        if( !this.placesService.useLocation ) throw Error('No hay localización del usuario');

        const map = new Map({
            container: this.mapDivElement.nativeElement,//'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: this.placesService.useLocation, // starting position [lng, lat]
            zoom: 14, // starting zoom
        });
    }

}
