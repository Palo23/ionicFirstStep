import { Place } from './place-detail/place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: []
    },
    {
      id: '3',
      title: 'Catedral de Santa Ana',
      imageURL: 'https://infoguiaelsalvador.com/wp-content/uploads/2017/02/infoguia-catedral-de-santa-ana-08.jpg',
      comments: ['La mejor Catedral', 'Muy hermosa', 'Grandioso diseño']
    }
  ];

  constructor() { }

  getPlace(placeId: string){
    return{
      ...this.places.find(place => {
        return place.id === placeId;
      })
    };
  }

  getPlaces(){
    return [...this.places];
  }

  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId;
    });
  }
}
