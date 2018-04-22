webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mrc-menu></mrc-menu>\r\n<div class=\"bg-light text-dark\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<br><br><br>\r\n<div class=\"container-fluid bg-dark text-light\">\r\n    <div class=\"container\" style=\"padding: 1em;\">\r\n            <p style=\"text-align: center;\">Bogota Colombia | Política de Privacidad | Politica de Garantía</p>\r\n            <p style=\"text-align: center;\">2018 ProRide | All Rights Reserved | By Design and Development @nvidiadesign</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mods_request_request_service__ = __webpack_require__("./src/app/mods/request/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(rs) {
        this.rs = rs;
        this.title = 'app';
        this.isCollapsed = true;
    }
    AppComponent.prototype.collapseClick = function () {
        console.log("collapseClick");
        this.isCollapsed = !this.isCollapsed;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__mods_request_request_service__["a" /* RequestService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mods_request_request_module__ = __webpack_require__("./src/app/mods/request/request.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mods_menu_menu_module__ = __webpack_require__("./src/app/mods/menu/menu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRoutes */],
                __WEBPACK_IMPORTED_MODULE_4__mods_menu_menu_module__["a" /* MenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__mods_request_request_module__["a" /* RequestModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutes = /** @class */ (function () {
    function AppRoutes() {
    }
    AppRoutes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutes);
    return AppRoutes;
}());



/***/ }),

/***/ "./src/app/mods/bike/bike.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__name_and_flag_name_and_flag_component__ = __webpack_require__("./src/app/mods/bike/name-and-flag/name-and-flag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__design_design_component__ = __webpack_require__("./src/app/mods/bike/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__package_package_component__ = __webpack_require__("./src/app/mods/bike/package/package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bike_service__ = __webpack_require__("./src/app/mods/bike/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__billing_billing_component__ = __webpack_require__("./src/app/mods/bike/billing/billing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cover_cover_component__ = __webpack_require__("./src/app/mods/bike/cover/cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__breadcrumbs_breadcrumbs_component__ = __webpack_require__("./src/app/mods/bike/breadcrumbs/breadcrumbs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var BikeModule = /** @class */ (function () {
    function BikeModule() {
    }
    BikeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__name_and_flag_name_and_flag_component__["a" /* NameAndFlagComponent */], __WEBPACK_IMPORTED_MODULE_6__design_design_component__["a" /* DesignComponent */], __WEBPACK_IMPORTED_MODULE_7__package_package_component__["a" /* PackageComponent */], __WEBPACK_IMPORTED_MODULE_9__billing_billing_component__["a" /* BillingComponent */], __WEBPACK_IMPORTED_MODULE_10__cover_cover_component__["a" /* CoverComponent */], __WEBPACK_IMPORTED_MODULE_11__breadcrumbs_breadcrumbs_component__["a" /* BreadcrumbsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__bike_service__["a" /* BikeService */]]
        })
    ], BikeModule);
    return BikeModule;
}());



/***/ }),

/***/ "./src/app/mods/bike/bike.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order__ = __webpack_require__("./src/app/mods/bike/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var storage = window.sessionStorage;
var BikeService = /** @class */ (function () {
    function BikeService() {
        this.containsSticker = false;
        this.containsPackage = false;
        this.containsBilling = false;
        this.order = null;
    }
    BikeService_1 = BikeService;
    ;
    BikeService.prototype.loadOrder = function () {
        var order = JSON.parse(storage.getItem(BikeService_1.storageId));
        if (order == null) {
            return new __WEBPACK_IMPORTED_MODULE_1__order__["a" /* Order */]();
        }
        return order;
    };
    BikeService.prototype.saveOrder = function (order) {
        storage.setItem(BikeService_1.storageId, JSON.stringify(order));
    };
    BikeService.storageId = 'com.marcohern.bikestickers.order';
    BikeService = BikeService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BikeService);
    return BikeService;
    var BikeService_1;
}());



/***/ }),

/***/ "./src/app/mods/bike/billing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Billing; });
var Billing = /** @class */ (function () {
    function Billing() {
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.address1 = '';
        this.address2 = '';
        this.phone = '';
        this.city = '';
        this.state = '';
        this.country = '';
        this.zip = '';
    }
    return Billing;
}());



/***/ }),

/***/ "./src/app/mods/bike/billing/billing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mods/bike/billing/billing.component.html":
/***/ (function(module, exports) {

module.exports = "<proride-cover asset=\"cover1\"></proride-cover>\r\n<proride-breadcrumbs [level]=\"3\"></proride-breadcrumbs>\r\n<br><br><br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n        <div class=\"btn btn-dark btn-lg btn-block\">\r\n            <i class=\"flag\" [ngClass]=\"flag.selector\"></i> <span class=\"flagname\">({{flag.name}})</span> {{fname}} {{lname}} ({{design.name}} {{design.price | currency:COP}}) {{pack.name}}\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n</div>\r\n<br><br><br>\r\n\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"bill.fname\" /><br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Apellido\"  [(ngModel)]=\"bill.lname\" /><br>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Email\"  [(ngModel)]=\"bill.email\"/><br>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Direccion 1\" [(ngModel)]=\"bill.address1\"/><br>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Direccion 2\"  [(ngModel)]=\"bill.address2\"/><br>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Ciudad\"  [(ngModel)]=\"bill.city\"/><br>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Estado/Provincia/Depto\" [(ngModel)]=\"bill.state\"/><br>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <input class=\"form-control\" type=\"text\" placeholder=\"Pais\" [(ngModel)]=\"bill.country\"/><br>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<br><br><br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"previous()\">Anterior</button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"pay()\">Continuar</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n<br><br><br>"

/***/ }),

/***/ "./src/app/mods/bike/billing/billing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("./src/app/mods/bike/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BillingComponent = /** @class */ (function () {
    function BillingComponent(router, bs) {
        this.router = router;
        this.bs = bs;
        this.flag = null;
        this.fname = '';
        this.lname = '';
        this.design = null;
        this.pack = null;
        this.bill = null;
        this.order = null;
    }
    BillingComponent.prototype.ngOnInit = function () {
        this.order = this.bs.loadOrder();
        this.flag = this.order.sticker.flag;
        this.fname = this.order.sticker.fname;
        this.lname = this.order.sticker.lname;
        this.design = this.order.design;
        this.pack = this.order.package;
        this.bill = this.order.billing;
    };
    BillingComponent.prototype.pay = function () {
        console.log("pay");
        this.order.billing = this.bill;
        this.bs.saveOrder(this.order);
    };
    BillingComponent.prototype.previous = function () {
        this.router.navigate(['/package']);
    };
    BillingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-billing',
            template: __webpack_require__("./src/app/mods/bike/billing/billing.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/billing/billing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/breadcrumbs/breadcrumbs.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mods/bike/breadcrumbs/breadcrumbs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-fill\">\n  <li class=\"nav-item\" *ngFor=\"let crumb of crumbs\">\n    <a class=\"nav-link\" [ngClass]=\"crumb.cls\" [routerLink]=\"crumb.route\">{{crumb.num}}. {{crumb.name}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/mods/bike/breadcrumbs/breadcrumbs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
        this.past = ['bg-dark', 'text-light'];
        this.present = ['bg-primary', 'text-light'];
        this.future = ['bg-light', 'text-dark'];
        this.crumbs = [
            { num: 1, name: 'Nombre/Pais', route: '/name-and-flag', level: 0, cls: [] },
            { num: 2, name: 'Diseño', route: '/design', level: 1, cls: [] },
            { num: 3, name: 'Empaque', route: '/package', level: 2, cls: [] },
            { num: 4, name: 'Pago', route: '/billing', level: 3, cls: [] }
        ];
        this._level = 0;
    }
    Object.defineProperty(BreadcrumbsComponent.prototype, "level", {
        set: function (level) {
            this._level = level;
            this.setClasses();
        },
        enumerable: true,
        configurable: true
    });
    BreadcrumbsComponent.prototype.setClasses = function () {
        var i;
        for (i = 0; i < this._level; i++) {
            this.crumbs[i].cls = this.past;
        }
        this.crumbs[this._level].cls = this.present;
        for (i = this._level + 1; i < this.crumbs.length; i++) {
            this.crumbs[i].cls = this.future;
        }
    };
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        this.setClasses();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], BreadcrumbsComponent.prototype, "level", null);
    BreadcrumbsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proride-breadcrumbs',
            template: __webpack_require__("./src/app/mods/bike/breadcrumbs/breadcrumbs.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/breadcrumbs/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/cover/cover.component.css":
/***/ (function(module, exports) {

module.exports = ".proride-cover { \r\n    background-size: cover;\r\n    width: 100%;\r\n    height:250px;\r\n}\r\n\r\n.proride-bars {\r\n    width: 100%;\r\n}\r\n\r\n.proride-bars div {\r\n    width: 100%;\r\n    height: 4px;\r\n}\r\n\r\n.proride-bars div.proride-one {\r\n    background-color: #009fe2;\r\n}\r\n\r\n.proride-bars div.proride-two {\r\n    background-color: #e20613;\r\n}\r\n\r\n.proride-bars div.proride-three {\r\n    background-color: #1d1d1b;\r\n}\r\n\r\n.proride-bars div.proride-four {\r\n    background-color: #ffec00;\r\n}\r\n\r\n.proride-bars div.proride-five {\r\n    background-color: #009540;\r\n}\r\n\r\n.proride-bars div.proride-six {\r\n    background-color: white;\r\n    height: 2px;\r\n}"

/***/ }),

/***/ "./src/app/mods/bike/cover/cover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"proride-bars\">\n  <div class=\"proride-one\"></div>\n  <div class=\"proride-two\"></div>\n  <div class=\"proride-three\"></div>\n  <div class=\"proride-four\"></div>\n  <div class=\"proride-five\"></div>\n</div>\n<div class='proride-cover' [ngClass]=\"asset\"></div>"

/***/ }),

/***/ "./src/app/mods/bike/cover/cover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
        this.asset = 'cover1';
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], CoverComponent.prototype, "asset", void 0);
    CoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'proride-cover',
            template: __webpack_require__("./src/app/mods/bike/cover/cover.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/design.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Design; });
var Design = /** @class */ (function () {
    function Design() {
        this.id = 0;
        this.code = '';
        this.name = '';
        this.price = 0;
    }
    return Design;
}());



/***/ }),

/***/ "./src/app/mods/bike/design/design.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mods/bike/design/design.component.html":
/***/ (function(module, exports) {

module.exports = "<proride-cover asset=\"cover1\"></proride-cover>\r\n<proride-breadcrumbs [level]=\"1\"></proride-breadcrumbs>\r\n<br><br><br>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-10\">\r\n    <div class=\"btn btn-dark btn-lg btn-block\">\r\n        <i class=\"flag\" [ngClass]=\"flag.selector\"></i> <span class=\"flagname\">({{flag.name}})</span> {{fname}} {{lname}}\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>\r\n\r\n<br><br><br>\r\n<div class=\"row\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\" style=\"text-align: center;\">\r\n        <button *ngFor=\"let design of designs\" class=\"btn btn-outline-dark btn-lg\" (click)=\"selectDesign(design)\">\r\n            <img alt=\"{{design.name}}\" class=\"img-fluid\" src=\"{{root}}/assets/proride/{{design.code}}.png\" width=\"200\" height=\"200\" />\r\n        </button><br><br>\r\n        <div> Seleccionaste <span class=\"btn btn-dark\">{{design.name}}</span></div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n</div>\r\n\r\n<br><br><br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"previous()\">Anterior</button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"next()\">Siguiente</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n<br><br><br>"

/***/ }),

/***/ "./src/app/mods/bike/design/design.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("./src/app/mods/bike/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DesignComponent = /** @class */ (function () {
    function DesignComponent(router, bs) {
        this.router = router;
        this.bs = bs;
        this.flag = null;
        this.fname = '';
        this.lname = '';
        this.order = null;
        this.design = null;
        this.root = '';
        this.designs = [
            { id: 1, code: "sticker_bardet", name: "Romain Bardet", price: 35000 },
            { id: 2, code: "sticker_contador", name: "Alberto Contador", price: 0 },
            { id: 3, code: "sticker_nairo", name: "Nairo Quintana", price: 0 }
        ];
        this.root = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].root;
    }
    DesignComponent.prototype.ngOnInit = function () {
        this.order = this.bs.loadOrder();
        this.flag = this.order.sticker.flag;
        this.fname = this.order.sticker.fname;
        this.lname = this.order.sticker.lname;
        this.design = this.order.design;
    };
    DesignComponent.prototype.selectDesign = function (design) {
        console.log(design);
        this.design = design;
        this.order.design = design;
        this.bs.saveOrder(this.order);
        this.next();
    };
    DesignComponent.prototype.next = function () {
        this.router.navigate(['/package']);
    };
    DesignComponent.prototype.previous = function () {
        this.router.navigate(['/name-and-flag']);
    };
    DesignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-design',
            template: __webpack_require__("./src/app/mods/bike/design/design.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/design/design.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], DesignComponent);
    return DesignComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/flag.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flag; });
var Flag = /** @class */ (function () {
    function Flag() {
        this.selector = '';
        this.name = '';
        this.code = '';
    }
    return Flag;
}());



/***/ }),

/***/ "./src/app/mods/bike/name-and-flag/name-and-flag.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mods/bike/name-and-flag/name-and-flag.component.html":
/***/ (function(module, exports) {

module.exports = "<proride-cover asset=\"cover1\"></proride-cover>\r\n<proride-breadcrumbs [level]=\"0\"></proride-breadcrumbs>\r\n<br><br><br>\r\n<div class=\"row\">\r\n  <div class=\"col-md-1\"></div>\r\n  <div class=\"col-md-2\">\r\n    <div ngbDropdown class=\"input-group\">\r\n        <button class=\"btn btn-outline-dark btn-lg btn-block flagname\" id=\"flag\" ngbDropdownToggle>\r\n            <i class=\"flag\" [ngClass]=\"getFlagSelector()\"></i> {{getFlagName()}}\r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"country\">\r\n          <button class=\"dropdown-item flagname\" *ngFor=\"let flag of flags\" (click)=\"selectFlag(flag)\">\r\n            <i class=\"flag\" [ngClass]=\"flag.selector\"></i>{{flag.name}}\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Nombre\" aria-label=\"Nombre\" [(ngModel)]=\"fname\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"input-group\">\r\n      <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Apellido\" aria-label=\"Apellido\" [(ngModel)]=\"lname\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-1\"></div>\r\n</div>\r\n\r\n<br><br><br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"next()\">Siguiente</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n<br><br><br>"

/***/ }),

/***/ "./src/app/mods/bike/name-and-flag/name-and-flag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameAndFlagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("./src/app/mods/bike/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NameAndFlagComponent = /** @class */ (function () {
    function NameAndFlagComponent(router, bs) {
        this.router = router;
        this.bs = bs;
        this.flags = [
            { "selector": "flag-colombia", "name": "colombia", "code": "CO" },
            { "selector": "flag-iran", "name": "iran", "code": "IR" },
            { "selector": "flag-argentina", "name": "argentina", "code": "AR" },
            { "selector": "flag-ukraine", "name": "ukraine", "code": "UA" },
            { "selector": "flag-germany", "name": "germany", "code": "DE" },
            { "selector": "flag-hong-kong", "name": "hong kong", "code": "HK" },
            { "selector": "flag-united-arab-emirates", "name": "united arab emirates", "code": "AE" },
            { "selector": "flag-laos", "name": "laos", "code": "LA" },
            { "selector": "flag-ireland", "name": "ireland", "code": "IE" },
            { "selector": "flag-greece", "name": "greece", "code": "GR" },
            { "selector": "flag-denmark", "name": "denmark", "code": "DK" },
            { "selector": "flag-sweden", "name": "sweden", "code": "SE" }
        ];
        this.flag = null;
        this.fname = '';
        this.lname = '';
        this.order = null;
    }
    NameAndFlagComponent.prototype.ngOnInit = function () {
        this.order = this.bs.loadOrder();
        this.flag = this.order.sticker.flag;
        this.fname = this.order.sticker.fname;
        this.lname = this.order.sticker.lname;
    };
    NameAndFlagComponent.prototype.selectFlag = function (flag) {
        console.log(flag);
        this.flag = flag;
    };
    NameAndFlagComponent.prototype.getFlagSelector = function () {
        if (this.flag == null)
            return '';
        return this.flag.selector;
    };
    NameAndFlagComponent.prototype.getFlagName = function () {
        if (this.flag == null || this.flag.name == '')
            return '- Bandera -';
        return this.flag.name;
    };
    NameAndFlagComponent.prototype.next = function () {
        console.log(this.fname, this.lname, this.flag);
        this.order.sticker.flag = this.flag;
        this.order.sticker.fname = this.fname;
        this.order.sticker.lname = this.lname;
        this.bs.saveOrder(this.order);
        this.router.navigate(['/design']);
    };
    NameAndFlagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-name-and-flag',
            template: __webpack_require__("./src/app/mods/bike/name-and-flag/name-and-flag.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/name-and-flag/name-and-flag.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], NameAndFlagComponent);
    return NameAndFlagComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__billing__ = __webpack_require__("./src/app/mods/bike/billing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__design__ = __webpack_require__("./src/app/mods/bike/design.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package__ = __webpack_require__("./src/app/mods/bike/package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sticker__ = __webpack_require__("./src/app/mods/bike/sticker.ts");




var Order = /** @class */ (function () {
    function Order() {
        this.billing = null;
        this.package = null;
        this.design = null;
        this.sticker = null;
        this.billing = new __WEBPACK_IMPORTED_MODULE_0__billing__["a" /* Billing */]();
        this.package = new __WEBPACK_IMPORTED_MODULE_2__package__["a" /* Package */]();
        this.design = new __WEBPACK_IMPORTED_MODULE_1__design__["a" /* Design */]();
        this.sticker = new __WEBPACK_IMPORTED_MODULE_3__sticker__["a" /* Sticker */]();
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/mods/bike/package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Package; });
var Package = /** @class */ (function () {
    function Package() {
        this.id = 0;
        this.code = '';
        this.name = '';
        this.price = 0;
        this.enabled = true;
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/mods/bike/package/package.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.occlude {\r\n    opacity: 0.5;\r\n}"

/***/ }),

/***/ "./src/app/mods/bike/package/package.component.html":
/***/ (function(module, exports) {

module.exports = "<proride-cover asset=\"cover1\"></proride-cover>\r\n<proride-breadcrumbs [level]=\"2\"></proride-breadcrumbs>\r\n<br><br><br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\">\r\n        <div class=\"btn btn-dark btn-lg btn-block\">\r\n            <i class=\"flag\" [ngClass]=\"flag.selector\"></i> <span class=\"flagname\">({{flag.name}})</span> {{fname}} {{lname}} ({{design.name}} {{design.price | currency:COP}}) \r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n</div>\r\n\r\n<br><br><br>\r\n<div class=\"row\">\r\n    <div class=\"col-md-1\"></div>\r\n    <div class=\"col-md-10\" style=\"text-align: center;\">\r\n        <button class=\"btn btn-outline-dark\" *ngFor=\"let package of packages\" (click)=\"selectPackageOption(package)\" [ngClass]=\"getStatus(package)\" [disabled]=\"!package.enabled\">\r\n            <img alt=\"{{package.name}}\" src=\"{{root}}/assets/proride/{{package.code}}.png\" width=\"200\" height=\"200\"/>\r\n        </button><br><br>\r\n        <div class=\"btn btn-dark\">\r\n            <span>{{pack.name}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-1\"></div>\r\n</div>\r\n\r\n<br><br><br>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"previous()\">Anterior</button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n          <button class=\"btn btn-outline-dark btn-lg btn-block\" (click)=\"next()\">Siguiente</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n<br><br><br>"

/***/ }),

/***/ "./src/app/mods/bike/package/package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("./src/app/mods/bike/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PackageComponent = /** @class */ (function () {
    function PackageComponent(router, bs) {
        this.router = router;
        this.bs = bs;
        this.flag = null;
        this.fname = '';
        this.lname = '';
        this.design = null;
        this.pack = null;
        this.order = null;
        this.root = '';
        this.packages = [
            { id: 1, code: "pack1", name: "x6 (4g + 2s)", price: 35000, enabled: true },
            { id: 2, code: "pack2", name: "Paquete 2", price: 0, enabled: false },
            { id: 3, code: "pack3", name: "Paquete 3", price: 0, enabled: false }
        ];
        this.root = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].root;
    }
    PackageComponent.prototype.ngOnInit = function () {
        this.order = this.bs.loadOrder();
        this.flag = this.order.sticker.flag;
        this.fname = this.order.sticker.fname;
        this.lname = this.order.sticker.lname;
        this.design = this.order.design;
        this.pack = this.order.package;
        if (this.pack.id == 0)
            this.pack = this.packages[0];
    };
    PackageComponent.prototype.getStatus = function (pack) {
        if (!pack.enabled)
            return 'occlude';
        return '';
    };
    PackageComponent.prototype.selectPackageOption = function (pack) {
        this.pack = pack;
        this.order.package = pack;
        this.bs.saveOrder(this.order);
        this.next();
    };
    PackageComponent.prototype.next = function () {
        this.router.navigate(['/billing']);
    };
    PackageComponent.prototype.previous = function () {
        this.router.navigate(['/design']);
    };
    PackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-package',
            template: __webpack_require__("./src/app/mods/bike/package/package.component.html"),
            styles: [__webpack_require__("./src/app/mods/bike/package/package.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/mods/bike/sticker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flag__ = __webpack_require__("./src/app/mods/bike/flag.ts");

var Sticker = /** @class */ (function () {
    function Sticker() {
        this.flag = null;
        this.fname = '';
        this.lname = '';
        this.flag = new __WEBPACK_IMPORTED_MODULE_0__flag__["a" /* Flag */]();
    }
    return Sticker;
}());



/***/ }),

/***/ "./src/app/mods/menu/menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_routes__ = __webpack_require__("./src/app/mods/menu/menu.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bike_bike_module__ = __webpack_require__("./src/app/mods/bike/bike.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("./src/app/mods/menu/menu/menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__menu_routes__["a" /* MenuRoutes */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__bike_bike_module__["a" /* BikeModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/mods/menu/menu.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRoutes; });
/* unused harmony export appRoutesComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_name_and_flag_name_and_flag_component__ = __webpack_require__("./src/app/mods/bike/name-and-flag/name-and-flag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bike_design_design_component__ = __webpack_require__("./src/app/mods/bike/design/design.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bike_package_package_component__ = __webpack_require__("./src/app/mods/bike/package/package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bike_billing_billing_component__ = __webpack_require__("./src/app/mods/bike/billing/billing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'name-and-flag', component: __WEBPACK_IMPORTED_MODULE_2__bike_name_and_flag_name_and_flag_component__["a" /* NameAndFlagComponent */] },
    { path: 'design', component: __WEBPACK_IMPORTED_MODULE_3__bike_design_design_component__["a" /* DesignComponent */] },
    { path: 'package', component: __WEBPACK_IMPORTED_MODULE_4__bike_package_package_component__["a" /* PackageComponent */] },
    { path: 'billing', component: __WEBPACK_IMPORTED_MODULE_5__bike_billing_billing_component__["a" /* BillingComponent */] },
    { path: '', redirectTo: 'name-and-flag', pathMatch: 'full' },
    { path: '**', redirectTo: 'name-and-flag', pathMatch: 'full' }
];
var MenuRoutes = /** @class */ (function () {
    function MenuRoutes() {
    }
    MenuRoutes = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], MenuRoutes);
    return MenuRoutes;
}());

var appRoutesComponents = [__WEBPACK_IMPORTED_MODULE_2__bike_name_and_flag_name_and_flag_component__["a" /* NameAndFlagComponent */], __WEBPACK_IMPORTED_MODULE_3__bike_design_design_component__["a" /* DesignComponent */], __WEBPACK_IMPORTED_MODULE_4__bike_package_package_component__["a" /* PackageComponent */], __WEBPACK_IMPORTED_MODULE_5__bike_billing_billing_component__["a" /* BillingComponent */]];


/***/ }),

/***/ "./src/app/mods/menu/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.proride-logo {\r\n    background-position: 0 0;\r\n    width: 150px;\r\n    height: 30px;\r\n}"

/***/ }),

/***/ "./src/app/mods/menu/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"proride-logo\" href=\"/name-and-flag\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\"\r\n          aria-controls=\"navbarSupportedContent\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"  [ngbCollapse]=\"isCollapsed\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/name-and-flag\">Nombre/Pais</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/design\">Diseño</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" routerLink=\"/package\">Paquete</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/billing\">Pagos</a>\r\n    </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/mods/menu/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.isCollapsed = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
        console.log("menu");
    };
    MenuComponent.prototype.toggleMenu = function () {
        console.log("toggleMenu");
        this.isCollapsed = !this.isCollapsed;
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'mrc-menu',
            template: __webpack_require__("./src/app/mods/menu/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/mods/menu/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/mods/request/request.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_service__ = __webpack_require__("./src/app/mods/request/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RequestModule = /** @class */ (function () {
    function RequestModule() {
    }
    RequestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */]]
        })
    ], RequestModule);
    return RequestModule;
}());



/***/ }),

/***/ "./src/app/mods/request/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    RequestService.prototype.getHeader = function () {
        return {
            "Accept": "application/json",
            "Accept-Language": "en-US"
        };
    };
    RequestService.prototype.getOptions = function () {
        return {
            headers: this.getHeader()
        };
    };
    RequestService.prototype.getQueryString = function (query) {
        var str = '';
        var i = 0;
        Object.keys(query).forEach(function (key) {
            str += (i > 0) ? '&' : '';
            str += key + '=' + encodeURI(query[key]);
            i++;
        });
        return str;
    };
    RequestService.prototype.get = function (url, query) {
        if (query === void 0) { query = {}; }
        var q = this.getQueryString(query);
        if (q != '')
            url += '?' + q;
        return this.http.get(url, this.getOptions());
    };
    RequestService.prototype.post = function (url, data) {
        if (data === void 0) { data = {}; }
        return this.http.post(url, data, this.getOptions());
    };
    RequestService.prototype.put = function (url, id, data) {
        if (data === void 0) { data = {}; }
        return this.http.put(url + '/' + id, data, this.getOptions());
    };
    RequestService.prototype.delete = function (url, id) {
        return this.http.delete(url + '/' + id, this.getOptions());
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    root: '/bikestickers'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    root: '/bikestickers'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map