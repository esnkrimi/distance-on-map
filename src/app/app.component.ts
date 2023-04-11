import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit, OnInit {
  private map: any;
  previous: any = null;
  distance = 0;
  count = 0;
  previousLocation: any = [];
  msgIndex=0;
  msg=['please select a new location on map',
'please select destination on map']
  private initMap(): void {
    this.map = L.map('map', {
      zoom: 1
    });
  }
  markerIcon: any;
  constructor() { }
  clear() {
    this.map.removeLayer(this.previous);
  }

  ngOnInit() {
    this.map = L.map("map").setView([32.4279, 50.6880], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 8,
      minZoom: 1,
    }).addTo(this.map);

    this.map.on("click", (e: any) => {
      this.previousLocation.push(e.latlng)
      if (this.previousLocation.length === 2) {
        this.msgIndex=0;
        console.log(
          this.previousLocation[0], this.previousLocation[1],this.distance

        )
        this.distance = this.map.distance(this.previousLocation[0], this.previousLocation[1])
        this.previousLocation=[];
        this.previousLocation.length = 0;
        this.map.removeLayer(this.previous)
      }
      else {
        this.msgIndex=1
        this.distance=0;
        this.previous = L.marker([this.previousLocation[0].lat, this.previousLocation[0].lng], this.markerIcon).addTo(this.map);
      }
    });
  }
  //zTOqQOlfGBu+s8imFLyOSQ==JaY40DmUi01GXd2b
  //this.map.removeLayer(this.previous);
  //this.map.clearLayers();

  ngAfterViewInit(): void {
    this.initMap();
  }
}
function tmp(tmp: any) {
  throw new Error('Function not implemented.');
}

