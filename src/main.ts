import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZG90am0iLCJhIjoiY2xydXNmZmN6MGtwOTJqbzFjdm9kb2FuMSJ9.tuES-vuPjT-dDS0qskkZHQ';

if( !navigator.geolocation ) {
    alert('Navegador no soporta la geolocalización');
    throw new Error('Navegador no soporta la geolocalización');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
