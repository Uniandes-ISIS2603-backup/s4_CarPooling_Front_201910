import { Component, OnInit } from '@angular/core';
import {TrayectoService} from '../trayecto.service';
import { Trayecto } from '../trayecto';
import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef, 
  DocumentRef, MapServiceFactory, 
  BingMapAPILoaderConfig, BingMapAPILoader, 
  GoogleMapAPILoader,  GoogleMapAPILoaderConfig, ILatLong
} from 'angular-maps';
@Component({
  selector: 'app-trayecto-detail',
  templateUrl: './trayecto-detail.component.html',
  styleUrls: ['./trayecto-detail.component.css']
})
export class TrayectoDetailComponent implements OnInit {

  _markerTypeId = MarkerTypeId;
  _options: IMapOptions = {
    disableBirdseye: false,
    disableStreetside: false,
    navigationBarMode: 1, 
    zoom: 6
  };
  
  _box: IBox = {
    maxLatitude: 32,
    maxLongitude: -92,
    minLatitude: 29,
    minLongitude: -98
  };
  
  private _iconInfo: IMarkerIconInfo = {
    markerType: MarkerTypeId.FontMarker,
    fontName: 'FontAwesome',
    fontSize: 24,
    color: 'red',
    markerOffsetRatio: { x: 0.5, y: 1 },
    text: '\uF276'
  }
  
  _markers: Array<ILatLong> = new Array<ILatLong>();
  constructor(private trayectoService: TrayectoService) {
    this._markers.push({ latitude: 29.714994, longitude: -95.46244})
    for(let i:number=0; i<20; i++){
      this._markers.push({ latitude: 29.714994 + Math.random() - Math.random(), longitude: -95.46244 + Math.random() - Math.random()});
    }      
   }
  id:string;
  t:Trayecto;

  ngOnInit() {
    this.id=localStorage.getItem('trayecto');
    this.trayectoService.getTrayectoDetail(this.id).subscribe(a=>{this.t=a});
  }
  _click(index: number){
    console.log(`Marker ${index} says: hello world...`);
 }
}
