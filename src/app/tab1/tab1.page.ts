import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonPopover,
  IonList,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonAvatar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  cameraOutline,
  addCircle,
  imagesOutline,
  personCircleOutline,
  logInOutline,
  personAddOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonSearchbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonPopover,
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonAvatar,
  ],
})
export class Tab1Page {
  constructor() {
    addIcons({
      cameraOutline,
      addCircle,
      imagesOutline,
      personCircleOutline,
      logInOutline,
      personAddOutline,
    });
  }
}
