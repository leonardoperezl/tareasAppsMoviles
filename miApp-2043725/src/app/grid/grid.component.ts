import { Component, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: true,
  imports: [IonContent, IonCol, IonRow, IonGrid, ]
})
export class GridComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
