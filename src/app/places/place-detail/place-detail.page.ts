import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from './place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      // redirect
      const id = paramMap.get('placeId');
      this.place = this.placesService.getPlace(id);
    });
  }

}
