import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CarritoProvider } from '../../providers/carrito/carrito';
import { OrdenesDetallePage } from "../ordenes-detalle/ordenes-detalle";

@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

  OrdenesDetalle = OrdenesDetallePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _cs: CarritoProvider) {
  }

  ionViewWillEnter() {
    console.log('Cargando ordenes');
    this._cs.cargar_ordenes();
  }

}
