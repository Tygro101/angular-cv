(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"bar\">\r\n    <h2>CV</h2>\r\n  </div>\r\n\r\n  <app-detailed-component></app-detailed-component>\r\n  <div class=\"contnet\">\r\n    <card class=\"item\" *ngFor=\"let crd of cards$ | async\" [card]='crd' (onClick)='cardSelected($event)'></card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 740px;\n  max-height: 1000px;\n  position: relative;\n  border-radius: 15px;\n  background: rgba(218, 218, 218, 0.952);\n  margin: 0 auto; }\n  .container .bar {\n    background: #3b3b3b;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 15px 15px 0 0;\n    padding-right: 10px;\n    padding-left: 14px; }\n  .container .bar h2 {\n      color: white;\n      font-size: 10px;\n      font-family: \"Times New Roman\", Times, serif; }\n  .container .contnet {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto auto auto auto;\n        grid-template-columns: auto auto auto auto;\n    padding: 10px; }\n  .container .contnet .item {\n      width: 160px;\n      margin: auto;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_components_detailed_card_view_store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/detailed-card-view/store/actions */ "./src/app/components/detailed-card-view/store/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.showDetailedCard = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cards$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.cards; }));
    };
    AppComponent.prototype.log = function (text) {
        console.log(text);
    };
    AppComponent.prototype.closeDetailedCard = function (value) {
        this.showDetailedCard = value;
    };
    AppComponent.prototype.cardSelected = function (card) {
        this.store.dispatch(new src_app_components_detailed_card_view_store_actions__WEBPACK_IMPORTED_MODULE_3__["CardSelected"](card));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_detailed_card_view_detailed_card_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/detailed-card-view/detailed-card-view.component */ "./src/app/components/detailed-card-view/detailed-card-view.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var src_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/reducers */ "./src/app/store/reducers.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _components_detailed_card_view_store_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detailed-card-view/store/effects */ "./src/app/components/detailed-card-view/store/effects.ts");
/* harmony import */ var src_app_components_detailed_content_detailed_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/detailed-content/detailed-content.component */ "./src/app/components/detailed-content/detailed-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_detailed_card_view_detailed_card_view_component__WEBPACK_IMPORTED_MODULE_4__["DetailedCardViewComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                src_app_components_detailed_content_detailed_content_component__WEBPACK_IMPORTED_MODULE_11__["DetailedContentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ state: src_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__["default"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_components_detailed_card_view_store_effects__WEBPACK_IMPORTED_MODULE_10__["DetailedViewEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card ripple\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimary}\" (click)='cardClicked()'>\n    <div class=\"img-container\">\n      <img [src]=\"card.cardImage\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimaryLight , 'border': '0px solid ' + card.cardBackgrowndPrimaryDark }\">\n    </div>\n    <div class=\"card-title\">{{card.cardTitle}}</div>\n</div> "

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 140px;\n  margin: 10px;\n  background: #333333;\n  border-radius: 3%;\n  box-shadow: 0 1px 3px 0 rgba(75, 75, 75, 0.5); }\n  .card .img-container {\n    text-align: center; }\n  .card .img-container img {\n      margin-top: 10px;\n      text-align: center;\n      height: 100px;\n      width: 100px;\n      left: 100px;\n      -ms-grid-row-align: center;\n          align-self: center;\n      padding: 5px;\n      background: #b6b6b6;\n      border-radius: 50%; }\n  .card .card-title {\n    text-align: center;\n    margin-top: 10px;\n    padding-bottom: 20px;\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n    font-weight: bold;\n    color: beige; }\n  .card:hover {\n  box-shadow: 0px 4px 0 #00000033;\n  transition: box-shadow 0.15s; }\n  /* Ripple effect */\n  .ripple {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .ripple:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n    background-image: radial-gradient(circle, rgba(245, 245, 245, 0.705) 10%, transparent 10.01%);\n    background-repeat: no-repeat;\n    background-position: 50%;\n    -webkit-transform: scale(10, 10);\n            transform: scale(10, 10);\n    opacity: 0;\n    transition: opacity 1s, -webkit-transform .7s;\n    transition: transform .7s, opacity 1s;\n    transition: transform .7s, opacity 1s, -webkit-transform .7s; }\n  .ripple:active:after {\n    -webkit-transform: scale(0, 0);\n            transform: scale(0, 0);\n    opacity: .2;\n    transition: 0s; }\n"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.cardClicked = function () {
        this.onClick.emit(this.card);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/card/store/reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/components/card/store/reducer.ts ***!
  \**************************************************/
/*! exports provided: CardsReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsReducers", function() { return CardsReducers; });
/* harmony import */ var src_app_store_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/store/state */ "./src/app/store/state.ts");

function CardsReducers(state, action) {
    if (state === void 0) { state = src_app_store_state__WEBPACK_IMPORTED_MODULE_0__["CARDS"]; }
    switch (action.type) {
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/components/detailed-card-view/detailed-card-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/detailed-card-view/detailed-card-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='show' class=\"detailed-container\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimary, 'margin-top': '10px'}\">\r\n  <span (click)=\"close()\" class=\"close_image\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimary}\"></span>\r\n  <div class=\"img-container\">\r\n    <img src=\"{{card.cardImage}}\" alt=\"\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimaryLight , 'border': '0px solid ' + card.cardBackgrowndPrimaryDark }\">\r\n  </div>\r\n  <div class=\"card-title\">{{card.cardTitle}}</div>\r\n  <detailed-content>\r\n    <div *ngFor='let highlight of highlights' class='item'>\r\n      <img src=\"/assets/img/angular.png\" alt=\"\">\r\n      <div class=\"title\">\r\n          <div >{{highlight.title.key}}:</div>\r\n          <div >{{highlight.title.value}}</div>\r\n      </div>\r\n    </div>\r\n  </detailed-content>\r\n</div>"

/***/ }),

/***/ "./src/app/components/detailed-card-view/detailed-card-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/detailed-card-view/detailed-card-view.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailed-container {\n  max-width: 500px;\n  min-width: 350px;\n  z-index: 1;\n  min-height: 200px;\n  position: absolute;\n  margin: 0 auto;\n  -ms-grid-row-align: center;\n      align-self: center;\n  border-radius: 10px;\n  box-shadow: 0 3px 3px 0 rgba(75, 75, 75, 0.5);\n  right: 0;\n  left: 0; }\n  .detailed-container .close_image {\n    position: absolute;\n    right: 0;\n    margin: 5px;\n    width: 7px;\n    height: 7px;\n    background-color: #bbb;\n    border-radius: 50%;\n    border-width: 3px;\n    border-color: #eeeeee;\n    border-style: solid; }\n  .detailed-container .img-container {\n    text-align: center; }\n  .detailed-container .img-container img {\n      margin-top: 20px;\n      text-align: center;\n      height: 100px;\n      width: 100px;\n      left: 100px;\n      -ms-grid-row-align: center;\n          align-self: center;\n      padding: 5px;\n      background: #b6b6b6;\n      border-radius: 50%; }\n  .detailed-container .card-title {\n    font-family: cursive !important;\n    text-align: center;\n    margin-top: 5px;\n    font-size: 17px;\n    margin-bottom: 20px;\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\",\r sans-serif;\n    font-weight: bold;\n    color: beige; }\n  .detailed-container .content-header {\n    display: flex;\n    margin: 4px;\n    margin-left: 9px;\n    font-family: cursive;\n    color: antiquewhite;\n    font-weight: bold; }\n  .detailed-container .content-header img {\n      cursor: pointer;\n      margin-right: 10px;\n      width: 10px;\n      height: 10px; }\n  .detailed-container :last-child {\n    margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/components/detailed-card-view/detailed-card-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/detailed-card-view/detailed-card-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailedCardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedCardViewComponent", function() { return DetailedCardViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors */ "./src/app/components/detailed-card-view/store/selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailedCardViewComponent = /** @class */ (function () {
    function DetailedCardViewComponent(store) {
        this.store = store;
    }
    DetailedCardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getDetailedViewCard"]).subscribe(function (face) {
            if (Object.keys(face).length > 0) {
                _this.show = true;
                _this.card = face;
                _this.highlights = face.content.highlights;
                _this.description = face.content.description;
            }
        });
    };
    DetailedCardViewComponent.prototype.close = function () {
        this.show = false;
    };
    DetailedCardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detailed-component',
            template: __webpack_require__(/*! ./detailed-card-view.component.html */ "./src/app/components/detailed-card-view/detailed-card-view.component.html"),
            styles: [__webpack_require__(/*! ./detailed-card-view.component.scss */ "./src/app/components/detailed-card-view/detailed-card-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DetailedCardViewComponent);
    return DetailedCardViewComponent;
}());



/***/ }),

/***/ "./src/app/components/detailed-card-view/store/actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/detailed-card-view/store/actions.ts ***!
  \****************************************************************/
/*! exports provided: CARD_SELECTED, CARD_VIEW_SETTED, CardSelected, CardSetted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_SELECTED", function() { return CARD_SELECTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_VIEW_SETTED", function() { return CARD_VIEW_SETTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSelected", function() { return CardSelected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSetted", function() { return CardSetted; });
var CARD_SELECTED = "[Detailed Card View] Card Selected";
var CARD_VIEW_SETTED = "[Detailed Card View] Card View Setted";
var CardSelected = /** @class */ (function () {
    function CardSelected(payload) {
        this.payload = payload;
        this.type = CARD_SELECTED;
    }
    return CardSelected;
}());

var CardSetted = /** @class */ (function () {
    function CardSetted(payload) {
        this.payload = payload;
        this.type = CARD_VIEW_SETTED;
    }
    return CardSetted;
}());



/***/ }),

/***/ "./src/app/components/detailed-card-view/store/effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/detailed-card-view/store/effects.ts ***!
  \****************************************************************/
/*! exports provided: DetailedViewEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedViewEffects", function() { return DetailedViewEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/app/components/detailed-card-view/store/actions.ts");
/* harmony import */ var src_app_services_cards_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cards-data.service */ "./src/app/services/cards-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailedViewEffects = /** @class */ (function () {
    function DetailedViewEffects(actions$, cardsDataService) {
        var _this = this;
        this.actions$ = actions$;
        this.cardsDataService = cardsDataService;
        this.loadCardView$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["CARD_SELECTED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (payload) {
            if (payload)
                return true;
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) { return _this.cardsDataService.getDetailedCardCards(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (face) {
            return new _actions__WEBPACK_IMPORTED_MODULE_3__["CardSetted"](face);
        })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], DetailedViewEffects.prototype, "loadCardView$", void 0);
    DetailedViewEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], src_app_services_cards_data_service__WEBPACK_IMPORTED_MODULE_4__["CardsDataService"]])
    ], DetailedViewEffects);
    return DetailedViewEffects;
}());



/***/ }),

/***/ "./src/app/components/detailed-card-view/store/reducers.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detailed-card-view/store/reducers.ts ***!
  \*****************************************************************/
/*! exports provided: DetailedCardViewReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedCardViewReducer", function() { return DetailedCardViewReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/components/detailed-card-view/store/actions.ts");

var initialState = {};
function DetailedCardViewReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["CARD_VIEW_SETTED"]:
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/components/detailed-card-view/store/selectors.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/detailed-card-view/store/selectors.ts ***!
  \******************************************************************/
/*! exports provided: getDetailedViewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailedViewCard", function() { return getDetailedViewCard; });
var getDetailedViewCard = function (state) {
    return state.state.detailedCardView;
};


/***/ }),

/***/ "./src/app/components/detailed-content/detailed-content.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detailed-content/detailed-content.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"highlights\">\n    <ng-content select=\".item\"></ng-content>\n  </div>\n  <div class=\"description\">\n    <ng-content select=\".description\"></ng-content>\n  </div>\n  <div class=\"video\">\n      <ng-content select=\"iframe\"></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/detailed-content/detailed-content.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detailed-content/detailed-content.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .highlights {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto auto auto;\n      grid-template-columns: auto auto auto auto;\n  padding: 10px; }\n\n.container .highlights ::ng-deep .item {\n  margin: auto;\n  align-items: center;\n  display: flex;\n  height: 50px; }\n\n.container .highlights ::ng-deep .item img {\n    text-align: center;\n    height: 20px;\n    width: 20px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    padding: 5px;\n    border-radius: 50%; }\n\n.container .highlights ::ng-deep .item .title {\n    font-size: 12px;\n    font-weight: bold;\n    font-family: cursive !important;\n    color: beige;\n    margin: auto; }\n\n.container .highlights ::ng-deep .item .title div {\n      margin-bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/components/detailed-content/detailed-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/detailed-content/detailed-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: DetailedContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedContentComponent", function() { return DetailedContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailedContentComponent = /** @class */ (function () {
    function DetailedContentComponent() {
    }
    DetailedContentComponent.prototype.ngOnInit = function () {
    };
    DetailedContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'detailed-content',
            template: __webpack_require__(/*! ./detailed-content.component.html */ "./src/app/components/detailed-content/detailed-content.component.html"),
            styles: [__webpack_require__(/*! ./detailed-content.component.scss */ "./src/app/components/detailed-content/detailed-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailedContentComponent);
    return DetailedContentComponent;
}());



/***/ }),

/***/ "./src/app/services/cards-data.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/cards-data.service.ts ***!
  \************************************************/
/*! exports provided: CardsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsDataService", function() { return CardsDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_store_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/state */ "./src/app/store/state.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsDataService = /** @class */ (function () {
    function CardsDataService() {
    }
    CardsDataService.prototype.getDetailedCardCards = function (card) {
        var face = src_app_store_state__WEBPACK_IMPORTED_MODULE_2__["CARD_FACES"].find(function (face) { return face.cardId == card.cardId; });
        face = __assign({}, face, card);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(face);
    };
    CardsDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CardsDataService);
    return CardsDataService;
}());



/***/ }),

/***/ "./src/app/store/reducers.ts":
/*!***********************************!*\
  !*** ./src/app/store/reducers.ts ***!
  \***********************************/
/*! exports provided: rootReducers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducers", function() { return rootReducers; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var src_app_components_detailed_card_view_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/detailed-card-view/store/reducers */ "./src/app/components/detailed-card-view/store/reducers.ts");
/* harmony import */ var src_app_components_card_store_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/card/store/reducer */ "./src/app/components/card/store/reducer.ts");



var rootReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    detailedCardView: src_app_components_detailed_card_view_store_reducers__WEBPACK_IMPORTED_MODULE_1__["DetailedCardViewReducer"],
    cards: src_app_components_card_store_reducer__WEBPACK_IMPORTED_MODULE_2__["CardsReducers"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducers);


/***/ }),

/***/ "./src/app/store/state.ts":
/*!********************************!*\
  !*** ./src/app/store/state.ts ***!
  \********************************/
/*! exports provided: CARDS, CARD_FACES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS", function() { return CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_FACES", function() { return CARD_FACES; });
var CARDS = [
    {
        cardId: 1,
        cardTitle: "Personal Info",
        cardImage: "https://i.pinimg.com/564x/4b/b2/99/4bb29980c0872588bee4008974dc5578.jpg",
        cardBackgrowndPrimary: "#607d8b",
        cardBackgrowndPrimaryLight: "#8eacbb",
        cardBackgrowndPrimaryDark: "#34515e",
    },
    {
        cardId: 2,
        cardTitle: "Angular.io",
        cardImage: "https://i.pinimg.com/originals/1a/63/2d/1a632d2b39f3275752f2c4b3c73477a3.png",
        cardBackgrowndPrimary: "#e53935",
        cardBackgrowndPrimaryLight: "#ff6f60",
        cardBackgrowndPrimaryDark: "#ab000d"
    },
    {
        cardId: 3,
        cardTitle: "Android",
        cardImage: "https://i.pinimg.com/originals/74/64/22/74642234d90c3ec9d8020f5d02a4a701.png",
        cardBackgrowndPrimary: "#43a047",
        cardBackgrowndPrimaryLight: "#00701a",
        cardBackgrowndPrimaryDark: "#ff6f60"
    },
    {
        cardId: 3,
        cardTitle: "Unity",
        cardImage: "https://i.pinimg.com/originals/82/d9/85/82d985080cb3295931db2efcd35d37fc.png",
        cardBackgrowndPrimary: "#757575",
        cardBackgrowndPrimaryLight: "#a4a4a4",
        cardBackgrowndPrimaryDark: "#494949"
    },
    {
        cardId: 4,
        cardTitle: "Node.js",
        cardImage: "https://i.pinimg.com/originals/81/21/1c/81211c6b6119814f72fb2189a9abd42b.png",
        cardBackgrowndPrimary: "#7cb342",
        cardBackgrowndPrimaryLight: "#aee571",
        cardBackgrowndPrimaryDark: "#4b830d"
    },
    {
        cardId: 5,
        cardTitle: "Academic degree",
        cardImage: "https://i.pinimg.com/originals/ed/84/0e/ed840e7d19dd4450f1ff990f878ef5a0.png",
        cardBackgrowndPrimary: "#6d4c41",
        cardBackgrowndPrimaryLight: "#9c786c",
        cardBackgrowndPrimaryDark: "#40241a"
    }
];
var CARD_FACES = [
    {
        cardId: 1,
        content: {
            highlights: [
                { title: { key: 'Name', value: 'Ran Tayeb' }, image: 'Name icon' },
                { title: { key: 'Email', value: 'tayebran@gmail.com' }, image: 'age icon' },
                { title: { key: 'Status', value: 'Married' }, image: 'age icon' },
                { title: { key: 'Mobile', value: '0523053392' }, image: 'age icon' }
            ],
            description: ""
        }
    },
    {
        cardId: 2,
    },
    {
        cardId: 3,
    },
    {
        cardId: 4,
    },
    {
        cardId: 5,
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ran\Documents\GitHub\angular-cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map