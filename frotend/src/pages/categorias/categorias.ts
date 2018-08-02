import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProductosProvider } from '../../providers/productos/productos';
import { PorCategoriasPage } from "../index.paginas";

@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  porCategorias = PorCategoriasPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _ps: ProductosProvider) {
    //this._ps.cargar_lineas();
  }


}
