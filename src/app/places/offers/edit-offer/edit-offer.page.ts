import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {PlacesService} from '../../places.service';
import {ActivatedRoute} from '@angular/router';
import {Place} from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  public place: Place;

  constructor(private navCtrl: NavController,
              private placesService: PlacesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('placeId')) {
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
      } else {
        this.navCtrl.navigateBack('/places/tabs/offers');
      }
    });
  }

}
