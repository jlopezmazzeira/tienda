import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import  { HomePage, OrdenesPage, CategoriasPage } from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = HomePage;
  tab2 = CategoriasPage;
  tab3 = OrdenesPage;
  tab4 = "BusquedaPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
