webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductoPage = /** @class */ (function () {
    function ProductoPage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.producto = {};
        this.producto = this.navParams.get("producto");
    }
    ProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-producto',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/producto/producto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{producto.producto}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <img [src]="producto.codigo | imagen">\n  <div padding>\n    <h5>{{producto.producto}}</h5>\n    <p><strong>Precio:</strong> {{producto.precio_compra | currency:\'USD\':true}}</p>\n    <p>{{ producto.descripcion}}\n      <br>\n      <strong>{{producto.proveedor}}</strong>\n    </p>\n\n    <button ion-button block icon-left\n      (click)="_cs.agregar_carrito(producto)">\n      <ion-icon name="cart"></ion-icon>\n      Agregar al carrito\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/producto/producto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__["a" /* CarritoProvider */]])
    ], ProductoPage);
    return ProductoPage;
}());

//# sourceMappingURL=producto.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busqueda/busqueda.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdenesDetallePage = /** @class */ (function () {
    function OrdenesDetallePage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.orden = {};
        this.orden = this.navParams.get("orden");
    }
    OrdenesDetallePage.prototype.borrar_orden = function (orden_id) {
        var _this = this;
        this._cs.borrar_orden(orden_id)
            .subscribe(function (data) {
            if (data.error) {
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    OrdenesDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordenes-detalle',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/ordenes-detalle/ordenes-detalle.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orden {{ orden.id }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content text-center>\n  <ion-list>\n    <ion-item *ngFor="let item of orden.detalle">\n      <img [src]="item.codigo | imagen">\n      <h5>{{ item.producto}}</h5>\n      <p>{{ item.descripcion }}</p>\n      <p>{{ item.precio_compra | currency:\'USD\':true }}</p>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button\n          block\n          color="danger"\n          (click)="borrar_orden(orden.id)">\n    Eliminar\n  </button>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/ordenes-detalle/ordenes-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__["a" /* CarritoProvider */]])
    ], OrdenesDetallePage);
    return OrdenesDetallePage;
}());

//# sourceMappingURL=ordenes-detalle.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_imagen_imagen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_index_services__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Storage

//Pipes

//servicios

//paginas

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_imagen_imagen__["a" /* ImagenPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["b" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["f" /* OrdenesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["e" /* OrdenesDetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["g" /* PorCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["h" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["i" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/busqueda/busqueda.module#BusquedaPageModule', name: 'BusquedaPage', segment: 'busqueda', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["c" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["a" /* CarritoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["b" /* CategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["d" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["f" /* OrdenesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["e" /* OrdenesDetallePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["g" /* PorCategoriasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["h" /* ProductoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_index_paginas__["i" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_index_services__["a" /* CarritoProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_index_services__["b" /* ProductosProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_index_services__["c" /* UsuarioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_index_paginas__["i" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/tienda/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/var/www/html/tienda/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarritoPage = /** @class */ (function () {
    function CarritoPage(navCtrl, navParams, _cs, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.viewCtrl = viewCtrl;
    }
    CarritoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrito',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/carrito/carrito.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button (click)="viewCtrl.dismiss()">\n        Cerrar\n      </button>\n    </ion-buttons>\n    <ion-title>Carrito de compras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div text-center\n        *ngIf="_cs.items.length === 0"\n       class="carrito_vacion">\n    <ion-icon name="ios-cart-outline" class="icon-5x"></ion-icon>\n    <br>\n    Su carrito esta vació\n  </div>\n\n  <div *ngIf="_cs.items.length !== 0">\n    <ion-grid>\n      <ion-row *ngFor="let item of _cs.items; let i = index;">\n        <ion-col>\n          <img [src]="item.codigo | imagen">\n        </ion-col>\n        <ion-col>\n          <p>{{ item.producto }}</p>\n          <p>{{ item.precio_compra | currency:\'USD\':true }}</p>\n\n          <button ion-button\n                  color="danger"\n                  block\n                  outline\n                  small\n                  (click)="_cs.remover_item(i)">\n            Eliminar\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <hr>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h3>\n            <strong>Total:</strong>\n            {{ _cs.total_carrito | currency:\'USD\':true }}\n          </h3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button ion-button\n            block\n            (click)="_cs.realizar_pedido()">\n      Realizar pedido\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/carrito/carrito.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__["a" /* CarritoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], CarritoPage);
    return CarritoPage;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_paginas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.porCategorias = __WEBPACK_IMPORTED_MODULE_3__index_paginas__["g" /* PorCategoriasPage */];
        //this._ps.cargar_lineas();
    }
    CategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categorias',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/categorias/categorias.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Categorías</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item\n            *ngFor="let categoria of _ps.lineas"\n            [navPush]="porCategorias"\n            [navParams]="{categoria : categoria}">\n      <ion-icon [name]="categoria.icono" item-left></ion-icon>\n      {{ categoria.linea }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/categorias/categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__["a" /* ProductosProvider */]])
    ], CategoriasPage);
    return CategoriasPage;
}());

//# sourceMappingURL=categorias.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, viewCtrl, _us) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._us = _us;
        this.correo = "";
        this.contrasena = "";
    }
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        this._us.ingresar(this.correo, this.contrasena).subscribe(function () {
            if (_this._us.activo()) {
                _this.viewCtrl.dismiss(true);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button (click)="viewCtrl.dismiss(false)">\n        Cerrar\n      </button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="email" [(ngModel)]="correo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input type="password" [(ngModel)]="contrasena"></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <button ion-button\n          [disabled]="correo.length < 5 || contrasena.length < 5"\n          block\n          (click)="ingresar()">\n    Ingresar\n  </button>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ordenes_detalle_ordenes_detalle__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdenesPage = /** @class */ (function () {
    function OrdenesPage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.OrdenesDetalle = __WEBPACK_IMPORTED_MODULE_3__ordenes_detalle_ordenes_detalle__["a" /* OrdenesDetallePage */];
    }
    OrdenesPage.prototype.ionViewWillEnter = function () {
        console.log('Cargando ordenes');
        this._cs.cargar_ordenes();
    };
    OrdenesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ordenes',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/ordenes/ordenes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ordenes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item\n            *ngFor="let orden of _cs.ordenes"\n            [navPush]="OrdenesDetalle"\n            [navParams]="{orden: orden}">\n      <strong>Orden ID:</strong>\n      {{ orden.id }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/ordenes/ordenes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrito_carrito__["a" /* CarritoProvider */]])
    ], OrdenesPage);
    return OrdenesPage;
}());

//# sourceMappingURL=ordenes.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorCategoriasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__producto_producto__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PorCategoriasPage = /** @class */ (function () {
    function PorCategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.categoria = {};
        this.productoPage = __WEBPACK_IMPORTED_MODULE_3__producto_producto__["a" /* ProductoPage */];
        this.categoria = navParams.get("categoria");
        console.log(navParams.get("categoria"));
        this._ps.cargar_por_categoria(this.categoria.id);
    }
    PorCategoriasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-por-categorias',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/por-categorias/por-categorias.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{categoria.linea}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of _ps.por_categoria">\n      <ion-thumbnail item-left>\n        <img [src]="item.codigo | imagen">\n      </ion-thumbnail>\n      <h2>{{ item.producto }}</h2>\n      <p>{{ item.proveedor }}</p>\n      <button ion-button clear item-right\n              [navParams]="{producto : item}"\n              [navPush]="productoPage">\n        Ver\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/por-categorias/por-categorias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__["a" /* ProductosProvider */]])
    ], PorCategoriasPage);
    return PorCategoriasPage;
}());

//# sourceMappingURL=por-categorias.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_paginas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["c" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["b" /* CategoriasPage */];
        this.tab3 = __WEBPACK_IMPORTED_MODULE_2__index_paginas__["f" /* OrdenesPage */];
        this.tab4 = "BusquedaPage";
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab tabIcon="home" tabTitle="Inicio" [root]="tab1"></ion-tab>\n  <ion-tab tabIcon="star" tabTitle="Categorías" [root]="tab2"></ion-tab>\n  <ion-tab tabIcon="list" tabTitle="Ordenes" [root]="tab3"></ion-tab>\n  <ion-tab tabIcon="search" tabTitle="Buscar" [root]="tab4"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carrito_carrito__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__producto_producto__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _ps, _cs, _us) {
        this.navCtrl = navCtrl;
        this._ps = _ps;
        this._cs = _cs;
        this._us = _us;
        this.productoPage = __WEBPACK_IMPORTED_MODULE_5__producto_producto__["a" /* ProductoPage */];
    }
    HomePage.prototype.siguiente_pagina = function (infiniteScroll) {
        this._ps.cargar_productos()
            .then(function () {
            infiniteScroll.complete();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/tienda/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n\n  <ion-buttons start>\n    <button ion-button\n            *ngIf="activo" \n            (click)="_us.cerrar_sesion()">\n      Salir\n    </button>\n  </ion-buttons>\n\n    <ion-title>\n      Mi Tienda\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only\n        (click)="_cs.ver_carrito()">\n        <ion-icon name="cart"></ion-icon>\n        <ion-badge color="danger"\n                  class="carrito-numero"\n                  *ngIf="_cs.items.length > 0">{{ _cs.items.length }}</ion-badge>\n      </button>\n      &nbsp;\n      &nbsp;\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row *ngFor="let pares of _ps.productos">\n      <ion-col *ngFor="let item of pares"\n               [navParams]="{producto : item}"\n               [navPush]="productoPage">\n        <img [src]=\'item.codigo | imagen\'>\n        <p>\n          {{ item.producto }}\n          <br>\n          {{ item.precio_compra | currency: \'USD\':true}}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="siguiente_pagina($event)">\n   <ion-infinite-scroll-content></ion-infinite-scroll-content>\n </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/tienda/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_productos_productos__["a" /* ProductosProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_carrito_carrito__["a" /* CarritoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the ImagenPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ImagenPipe = /** @class */ (function () {
    function ImagenPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ImagenPipe.prototype.transform = function (codigo) {
        return __WEBPACK_IMPORTED_MODULE_1__config_url_servicios__["a" /* URL_IMAGENES */] + codigo + '.jpg'; //codigo.toLowerCase();
    };
    ImagenPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'imagen',
        })
    ], ImagenPipe);
    return ImagenPipe;
}());

//# sourceMappingURL=imagen.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos_productos__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__productos_productos__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__usuario_usuario__["a"]; });



//# sourceMappingURL=index.services.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarritoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_url_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//usuario services

//páginas del modal

var CarritoProvider = /** @class */ (function () {
    function CarritoProvider(http, alertCtrl, platform, storage, modalCtrl, _us) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this.items = [];
        this.total_carrito = 0;
        this.ordenes = [];
        console.log('Hello CarritoProvider Provider');
        this.cargar_storage();
        this.actualizar_total();
    }
    CarritoProvider.prototype.ver_carrito = function () {
        var _this = this;
        var modal;
        if (this._us.token) {
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* CarritoPage */]);
        }
        else {
            modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["d" /* LoginPage */]);
        }
        modal.present();
        modal.onDidDismiss(function (abrirCarrito) {
            if (abrirCarrito) {
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pages_index_paginas__["a" /* CarritoPage */]).present();
            }
        });
    };
    CarritoProvider.prototype.agregar_carrito = function (item_parametro) {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
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
    };
    CarritoProvider.prototype.guardar_storage = function () {
        if (this.platform.is('cordova')) {
            this.storage.set('items', this.items);
        }
        else {
            localStorage.setItem("items", JSON.stringify(this.items));
        }
    };
    CarritoProvider.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get('items')
                        .then(function (items) {
                        if (items) {
                            _this.items = items;
                        }
                        resolve();
                    });
                });
            }
            else {
                if (localStorage.getItem("items")) {
                    _this.items = JSON.parse(localStorage.getItem("items"));
                }
                resolve();
            }
        });
        return promesa;
    };
    CarritoProvider.prototype.actualizar_total = function () {
        this.total_carrito = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.total_carrito += Number(item.precio_compra);
        }
    };
    CarritoProvider.prototype.remover_item = function (idx) {
        this.items.splice(idx, 1);
        this.guardar_storage();
    };
    CarritoProvider.prototype.realizar_pedido = function () {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        var codigos = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            codigos.push(item.codigo);
        }
        data.append("items", codigos.join(","));
        var url = __WEBPACK_IMPORTED_MODULE_4__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/realizar_orden/" + this._us.token + "/" + this._us.id_usuario;
        this.http.post(url, data).subscribe(function (resp) {
            var respuesta = resp.json();
            if (respuesta.error) {
                _this.alertCtrl.create({
                    title: 'Error en la orden',
                    subTitle: respuesta.error,
                    buttons: ["Ok"]
                }).present();
            }
            else {
                _this.items = [];
                _this.alertCtrl.create({
                    title: 'Orden realizada!',
                    subTitle: 'Nos contactaremos con usted próximamente',
                    buttons: ["Ok"]
                }).present();
            }
        });
    };
    CarritoProvider.prototype.cargar_ordenes = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/obtener_pedidos/" + this._us.token + "/" + this._us.id_usuario;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
            }
            else {
                _this.ordenes = data.ordenes;
            }
        });
    };
    CarritoProvider.prototype.borrar_orden = function (orden_id) {
        var url = __WEBPACK_IMPORTED_MODULE_4__config_url_servicios__["b" /* URL_SERVICIOS */] + "/pedidos/borrar_pedido/" + this._us.token + "/" + this._us.id_usuario + "/" + orden_id;
        return this.http.delete(url)
            .map(function (resp) { return resp.json(); });
    };
    CarritoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__["a" /* UsuarioProvider */]])
    ], CarritoProvider);
    return CarritoProvider;
}());

//# sourceMappingURL=carrito.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__carrito_carrito__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categorias_categorias__ = __webpack_require__(282);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__categorias_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(283);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__login_login__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ordenes_ordenes__ = __webpack_require__(284);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__ordenes_ordenes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ordenes_detalle_ordenes_detalle__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__ordenes_detalle_ordenes_detalle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__por_categorias_por_categorias__ = __webpack_require__(285);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__por_categorias_por_categorias__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__producto_producto__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__producto_producto__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(286);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(287);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__home_home__["a"]; });









//# sourceMappingURL=index.paginas.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return URL_SERVICIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL_IMAGENES; });
var URL_SERVICIOS = 'http://localhost/rest/index.php';
var URL_IMAGENES = 'http://localhost/rest/public/img/productos/';
//# sourceMappingURL=url.servicios.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http, alertCtrl, platform, storage) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        console.log('Hello UsuarioProvider Provider');
        this.cargar_storage();
    }
    UsuarioProvider.prototype.activo = function () {
        if (this.token) {
            return true;
        }
        else {
            return false;
        }
    };
    UsuarioProvider.prototype.ingresar = function (correo, contrasena) {
        var _this = this;
        var data = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* URLSearchParams */]();
        data.append("correo", correo);
        data.append("contrasena", contrasena);
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + '/login';
        return this.http.post(url, data)
            .map(function (resp) {
            var data_resp = resp.json();
            console.log(data_resp);
            if (data_resp.error) {
                _this.alertCtrl.create({
                    title: "Error al iniciar",
                    subTitle: data_resp.mensaje,
                    buttons: ["OK"]
                }).present();
            }
            else {
                _this.token = data_resp.token;
                _this.id_usuario = data_resp.id_usuario;
                // Guardar Storage
                _this.guardar_storage();
            }
        });
    };
    UsuarioProvider.prototype.cerrar_sesion = function () {
        this.id_usuario = null;
        this.token = null;
        // Guardar Storage
        this.guardar_storage();
    };
    UsuarioProvider.prototype.guardar_storage = function () {
        if (this.platform.is('cordova')) {
            this.storage.set('token', this.token);
            this.storage.set('id_usuario', this.id_usuario);
        }
        else {
            localStorage.setItem("token", this.token);
            localStorage.setItem("id_usuario", this.id_usuario);
        }
    };
    UsuarioProvider.prototype.cargar_storage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is('cordova')) {
                _this.storage.ready()
                    .then(function () {
                    _this.storage.get('token')
                        .then(function (token) {
                        if (token) {
                            _this.token = token;
                        }
                    });
                    _this.storage.get('id_usuario')
                        .then(function (id_usuario) {
                        if (id_usuario) {
                            _this.id_usuario = id_usuario;
                        }
                        resolve();
                    });
                });
            }
            else {
                if (localStorage.getItem("token")) {
                    _this.token = localStorage.getItem("token");
                    _this.id_usuario = localStorage.getItem("id_usuario");
                }
                else {
                    localStorage.removeItem("token");
                    localStorage.removeItem("id_usuario");
                }
                resolve();
            }
        });
        return promesa;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductosProvider = /** @class */ (function () {
    function ProductosProvider(http) {
        this.http = http;
        this.pagina = 0;
        this.productos = [];
        this.lineas = [];
        this.por_categoria = [];
        this.resultados = [];
        console.log('Hello ProductosProvider Provider');
        this.cargar_productos();
        this.cargar_lineas();
    }
    ProductosProvider.prototype.cargar_por_categoria = function (categoria) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + '/productos/por_tipo/' + categoria;
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
            }
            else {
                console.log(data.productos);
                _this.por_categoria = data.productos;
            }
        });
    };
    ProductosProvider.prototype.cargar_lineas = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + '/lineas';
        this.http.get(url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (data) {
            if (data.error) {
            }
            else {
                _this.lineas = data.lineas;
            }
        });
    };
    ProductosProvider.prototype.cargar_productos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + '/productos/todos/' + _this.pagina;
            _this.http.get(url)
                .map(function (resp) { return resp.json(); })
                .subscribe(function (data) {
                if (data.error) {
                }
                else {
                    var nuevaData = _this.agrupar(data.productos, 2);
                    (_a = _this.productos).push.apply(_a, nuevaData);
                    //this.productos.push(...data.productos);
                    _this.pagina += 1;
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    ProductosProvider.prototype.agrupar = function (arr, tamano) {
        var nuevoArreglo = [];
        for (var i = 0; i < arr.length; i += tamano) {
            nuevoArreglo.push(arr.slice(i, i + tamano));
        }
        console.log(nuevoArreglo);
        return nuevoArreglo;
    };
    ProductosProvider.prototype.buscar_producto = function (termino) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__config_url_servicios__["b" /* URL_SERVICIOS */] + '/productos/buscar/' + termino;
        this.http.get(url)
            .subscribe(function (resp) {
            var data = resp.json();
            _this.resultados = data.productos;
        });
    };
    ProductosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], ProductosProvider);
    return ProductosProvider;
}());

//# sourceMappingURL=productos.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map