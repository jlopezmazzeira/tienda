import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from "../../providers/productos/productos";
import { ProductoPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  productoPage = ProductoPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps: ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  buscar_producto(ev: any){
    let valor = ev.target.value;

    this._ps.buscar_producto(valor);
  }

}
