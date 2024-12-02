import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, GridComponent],
})
export class HomePage {
  mensaje: string = "Hola mundo!"

  constructor() {}
}
