import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = environment.mapbox_key;

if( !navigator.geolocation ) {
    alert('Navegador no soporta la geolocalización');
    throw new Error('Navegador no soporta la geolocalización');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
