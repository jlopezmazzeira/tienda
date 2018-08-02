import { Http, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController, Platform, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { URL_SERVICIOS } from '../../config/url.servicios';

//usuario services
import {UsuarioProvider} from '../usuario/usuario';

//páginas del modal
import {LoginPage, CarritoPage} from '../../pages/index.paginas';

@Injectable()
export class CarritoProvider {

  items:any[] = [];
  total_carrito:number = 0;
  ordenes:any[] = [];

  constructor(public http: Http,
              private alertCtrl: AlertController,
              private platform: Platform,
              private storage: Storage,
              private modalCtrl: ModalController,
              private _us: UsuarioProvider) {
    console.log('Hello CarritoProvider Provider');
    this.cargar_storage();
    this.actualizar_total();
  }

  ver_carrito(){

    let modal:any;

    if (this._us.token) {
      modal = this.modalCtrl.create(CarritoPage);
    } else {
      modal = this.modalCtrl.create(LoginPage);
    }

    modal.present();
    modal.onDidDismiss( (abrirCarrito:boolean) => {
      if (abrirCarrito) {
          this.modalCtrl.create(CarritoPage).present();
      }
    });

  }

  agregar_carrito(item_parametro:any){
    for (let item of this.items) {
        if (item.codigo == item_parametro.codigo) {
            this.alertCtrl.create({
              title: "Item existen",
              subTitle: item_parametro.producto + " ya existe en su carrito de compra",
              buttons: ["OK"]
            }).present();
            return;
        }
    }

    this.items.push(item_parametro);
    this.actualizar_total();
    this.guardar_storage();
  }

  private guardar_storage(){
    if (this.platform.is('cordova')) {
        this.storage.set('items', this.items);
    } else {
      localStorage.setItem("items", JSON.stringify(this.items));
    }
  }

  cargar_storage(){
    let promesa = new Promise((resolve, reject) =>{
      if (this.platform.is('cordova')) {
          this.storage.ready()
                      .then( () => {
            this.storage.get('items')
                        .then(items => {
                          if (items) {
                              this.items = items;
                          }
                          resolve();
                        });
          });
      } else {
        if(localStorage.getItem("items")){
          this.items = JSON.parse(localStorage.getItem("items"));
        }

        resolve();
      }
    });

    return promesa;

  }

  actualizar_total(){
    this.total_carrito = 0;
    for (let item of this.items) {
        this.total_carrito += Number(item.precio_compra);
    }
  }

  remover_item(idx: number){
    this.items.splice(idx,1);
    this.guardar_storage();
  }

  realizar_pedido(){
    let data = new URLSearchParams();
    let codigos:string[] = [];

    for (let item of this.items) {
        codigos.push(item.codigo);
    }

    data.append("items", codigos.join(","));

    let url = `${URL_SERVICIOS}/pedidos/realizar_orden/${ this._us.token }/${ this._us.id_usuario }`;

    this.http.post(url, data).subscribe(resp => {
      let respuesta = resp.json();

      if (respuesta.error) {
        this.alertCtrl.create({
          title: 'Error en la orden',
          subTitle: respuesta.error,
          buttons: ["Ok"]
        }).present();
      } else {
        this.items = [];

        this.alertCtrl.create({
          title: 'Orden realizada!',
          subTitle: 'Nos contactaremos con usted próximamente',
          buttons: ["Ok"]
        }).present();
      }
    });
  }

  cargar_ordenes(){
    let url = `${URL_SERVICIOS}/pedidos/obtener_pedidos/${ this._us.token }/${ this._us.id_usuario }`;

    this.http.get(url)
              .map(resp => resp.json())
              .subscribe(data => {
                if (data.error) {

                } else {
                  this.ordenes = data.ordenes;
                }
              });
  }

  borrar_orden(orden_id: string){
    let url = `${URL_SERVICIOS}/pedidos/borrar_pedido/${ this._us.token }/${ this._us.id_usuario }/${ orden_id }`;

    return this.http.delete(url)
                    .map(resp => resp.json());
                    
  }

}
