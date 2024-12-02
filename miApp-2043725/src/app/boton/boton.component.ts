import { Component, OnInit } from '@angular/core';
import { IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  standalone: true,
  imports: [IonButton, ]
})
export class BotonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
