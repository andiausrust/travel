import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {Place} from '../../place.model';
import {PlacesService} from '../../places.service';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';

@Component({
    selector: 'app-place-detail',
    templateUrl: './place-detail.page.html',
    styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

    place: Place;

    constructor(private navCtrl: NavController,
                private route: ActivatedRoute,
                private placesService: PlacesService,
                private modalCtrl: ModalController) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            if (paramMap.has('placeId')) {
                this.place = this.placesService.getPlace(paramMap.get('placeId'));
            } else {
                this.navCtrl.navigateBack('places/tabs/discover');
            }
        });
    }

    async onBookPlace() {
        const modal = await this.modalCtrl.create({
            component: CreateBookingComponent,
            componentProps: {
                selectedPlace: this.place
            }
        });
        await modal.present();
        const res = await modal.onDidDismiss();
        console.log(res.data, res.role);
        if (res.role === 'confirm') {
            console.log('BOOKED');
        }
    }
}
