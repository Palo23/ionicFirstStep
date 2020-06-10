import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from './place.model';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: ActivatedRoute, private placesService: PlacesService, private route: Router,
              private alert: AlertController) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      // redirect
      const id = paramMap.get('placeId');
      this.place = this.placesService.getPlace(id);
    });
  }

  async deletePlace(){
    const alerta = await this.alert.create({
      header: '¿Deseas eliminar el lugar?',
      message: 'Cuidado!',
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.route.navigate(['/places']);
          }
        }
    ],
    });

    await alerta.present();

  }

}
