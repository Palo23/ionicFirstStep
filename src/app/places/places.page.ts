import { PlacesService } from './places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: {};

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

}
