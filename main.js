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

module.exports = "<div class=\"container\">\r\n  <div class=\"bar\">\r\n    <h2>CV</h2>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-height: 1000px;\n  position: relative;\n  border-radius: 10px;\n  background: rgba(218, 218, 218, 0.952);\n  margin-left: 100px;\n  margin-right: 100px; }\n  .container .bar {\n    background: #3b3b3b;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 10px 10px 0 0;\n    padding-right: 10px;\n    padding-left: 14px; }\n  .container .bar h2 {\n      color: white;\n      font-size: 10px;\n      font-family: \"Times New Roman\", Times, serif; }\n"

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
/* harmony import */ var _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project-view/project-view.component */ "./src/app/components/project-view/project-view.component.ts");
/* harmony import */ var _components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/highlight/highlight.component */ "./src/app/components/highlight/highlight.component.ts");
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ "./src/app/pipes/safe-url.pipe.ts");
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/description/description.component */ "./src/app/components/description/description.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_new_version_new_version_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/new-version/new-version.component */ "./src/app/components/new-version/new-version.component.ts");
/* harmony import */ var _components_new_version_level1_card_level1_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/new-version/level1-card/level1-card.component */ "./src/app/components/new-version/level1-card/level1-card.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    {
        path: 'old',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"]
    },
    { path: '', component: _components_new_version_new_version_component__WEBPACK_IMPORTED_MODULE_18__["NewVersionComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_detailed_card_view_detailed_card_view_component__WEBPACK_IMPORTED_MODULE_4__["DetailedCardViewComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                src_app_components_detailed_content_detailed_content_component__WEBPACK_IMPORTED_MODULE_11__["DetailedContentComponent"],
                _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_12__["ProjectViewComponent"],
                _components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_13__["HighlightComponent"],
                _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_14__["SafeUrlPipe"],
                _components_description_description_component__WEBPACK_IMPORTED_MODULE_15__["DescriptionComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_17__["HomePageComponent"],
                _components_new_version_new_version_component__WEBPACK_IMPORTED_MODULE_18__["NewVersionComponent"],
                _components_new_version_level1_card_level1_card_component__WEBPACK_IMPORTED_MODULE_19__["Level1CardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({ state: src_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__["default"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_components_detailed_card_view_store_effects__WEBPACK_IMPORTED_MODULE_10__["DetailedViewEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
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

/***/ "./src/app/components/description/description.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [innerHTML]=\"description\">\n</div>"

/***/ }),

/***/ "./src/app/components/description/description.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/description/description.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-right: 20px;\n  margin-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/components/description/description.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
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

var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DescriptionComponent.prototype, "description", void 0);
    DescriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/components/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.scss */ "./src/app/components/description/description.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/components/detailed-card-view/detailed-card-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/detailed-card-view/detailed-card-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #DetailedCard *ngIf='show' class=\"detailed-container\">\r\n  <div>\r\n    <div class=\"img-container\">\r\n      <img src=\"{{card.cardImage}}\" alt=\"\"\r\n        [ngStyle]=\"{ 'background': card.cardBackgrowndPrimaryLight , 'border': '0px solid ' + card.cardBackgrowndPrimaryDark }\">\r\n    </div>\r\n    <div class=\"card-title\">{{card.cardTitle}}</div>\r\n  </div>\r\n  <div class=\"container\" id=\"scrollbar\">\r\n    <detailed-content *ngFor='let content of contents' [content]='content'>\r\n      <div class=\"project-title\">{{content.projectTitle}}</div>\r\n      <div *ngFor='let highlight of content.highlights' class='item'>\r\n        <highlight [highlight]='highlight'></highlight>\r\n      </div>\r\n      <img [src]=\"content.highlightsIcon\" class=\"proj-img\">\r\n      <description *ngIf='content.description' class=\"description\" [description]='content.description'></description>\r\n      <iframe *ngIf='content.video' width=\"490\" height=\"242\" [src]='content.video | safeUrl' frameborder=\"0\"\r\n        allowfullscreen>\r\n      </iframe>\r\n      <div class=\"separator\"></div>\r\n    </detailed-content>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/detailed-card-view/detailed-card-view.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/detailed-card-view/detailed-card-view.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detailed-container {\n  width: 100%;\n  height: 100%;\n  display: -ms-grid;\n  display: grid;\n  background: #acacac;\n  -ms-grid-rows: 1fr 3fr;\n      grid-template-rows: 1fr 3fr; }\n  .detailed-container .img-container {\n    text-align: center; }\n  .detailed-container .img-container img {\n      margin-top: 20px;\n      text-align: center;\n      height: 100px;\n      width: 100px;\n      left: 100px;\n      -ms-grid-row-align: center;\n          align-self: center;\n      padding: 5px;\n      background: #b6b6b6;\n      border-radius: 50%; }\n  .detailed-container .card-title {\n    font-family: cursive !important;\n    text-align: center;\n    margin-top: 5px;\n    font-size: 17px;\n    margin-bottom: 10px;\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n    font-weight: bold;\n    color: beige; }\n  .detailed-container .content-header {\n    display: flex;\n    margin: 4px;\n    margin-left: 9px;\n    font-family: cursive;\n    color: antiquewhite;\n    font-weight: bold; }\n  .detailed-container .content-header img {\n      cursor: pointer;\n      margin-right: 10px;\n      width: 10px;\n      height: 10px; }\n  .detailed-container .container {\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: relative;\n    height: 100%; }\n  .detailed-container .container detailed-content:last-child .separator {\n      height: 0px; }\n  #scrollbar::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background-color: transparent; }\n  #scrollbar::-webkit-scrollbar {\n  width: 12px;\n  background-color: transparent; }\n  #scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-color: beige;\n  padding-right: 1px;\n  background-clip: content-box;\n  /* padding-right: 9px; */\n  border: 3px solid transparent; }\n  #scrollbar::-webkit-scrollbar-thumb:hover {\n  border-radius: 10px;\n  background-color: #fff; }\n  #scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: linear-gradient(left, #22add4, #1e98ba); }\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_selectors__WEBPACK_IMPORTED_MODULE_2__["getDetailedViewCard"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (face) { return face && Object.keys(face).length > 0; })).subscribe(function (face) {
            _this.show = true;
            _this.card = face;
            if (face.content && face.content.length > 0) {
                _this.contents = face.content;
            }
            else {
                _this.contents = [];
            }
        });
    };
    DetailedCardViewComponent.prototype.close = function () {
        this.show = false;
    };
    // close when clicking outside of the element
    //@HostListener('document:click', ['$event'])
    //clickout(event) {
    //  if (!this.container) return;
    //  if (!this.container.nativeElement.contains(event.target) && !this.checkIfThisIsItem(event)) {
    //    this.show = false;
    //  }
    //}
    DetailedCardViewComponent.prototype.checkIfThisIsItem = function (event) {
        var currentEvent = event.target;
        while (currentEvent) {
            if (currentEvent.className == "item")
                return true;
            currentEvent = currentEvent.parentElement;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("DetailedCard"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailedCardViewComponent.prototype, "container", void 0);
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

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <div class=\"proj title\">\n      <ng-content select=\".project-title\"></ng-content>\n    </div>\n    <div style=\"display: flex\">\n      <div class=\"image\" *ngIf='content.highlightsIcon'>\n        <ng-content select=\".proj-img\"></ng-content>\n      </div>\n      <div class=\"highlights\">\n        <ng-content select=\".item\"></ng-content>\n      </div>\n    </div>\n\n    <div class=\"description\" *ngIf='content.description'>\n      <div class=\"title\">Short Description</div>\n      <ng-content select=\".description\"></ng-content>\n    </div>\n    <div class=\"video\">\n      <ng-content select=\"iframe\"></ng-content>\n    </div>\n  </div>\n  <ng-content select=\".separator\"></ng-content>\n</div>"

/***/ }),

/***/ "./src/app/components/detailed-content/detailed-content.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/detailed-content/detailed-content.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  height: 100%; }\n\n.video:last-child {\n  margin-bottom: 10px; }\n\n.proj {\n  padding: 10px;\n  font-size: 20px;\n  text-align: center; }\n\n.image {\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  padding: 5px;\n  background: #ffffff69;\n  border-radius: 50%;\n  margin-left: 10px; }\n\n.image ::ng-deep img {\n    width: 50px; }\n\n.highlights {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  grid-auto-columns: auto;\n  grid-template-columns: repeat(auto-fill, minmax(auto, 100px));\n  padding: 0px 10px 10px 10px; }\n\n.highlights ::ng-deep .item {\n  margin: auto;\n  align-items: center;\n  display: flex;\n  height: 50px;\n  width: 100%; }\n\n.highlights ::ng-deep .item img {\n    text-align: center;\n    height: 20px;\n    width: 20px;\n    -ms-grid-row-align: center;\n        align-self: center;\n    padding: 5px;\n    border-radius: 50%; }\n\n.highlights ::ng-deep .item .title {\n    font-size: 12px;\n    font-weight: bold;\n    font-family: cursive !important;\n    color: beige;\n    margin: auto; }\n\n.highlights ::ng-deep .item .title .key {\n      font-size: 11px; }\n\n.highlights ::ng-deep .item .title div {\n      margin-bottom: 0px; }\n\n.title {\n  font-size: 14px;\n  font-weight: bold;\n  font-family: cursive !important;\n  color: beige;\n  margin: auto;\n  margin-bottom: 5px; }\n\n.proj {\n  margin-left: 10px; }\n\n.description {\n  width: 100%;\n  color: beige;\n  margin: 20px; }\n\n.video {\n  text-align: center; }\n\n::ng-deep .separator {\n  height: 2px;\n  margin: auto;\n  width: 60%;\n  margin-bottom: 20px;\n  background: beige; }\n"

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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailedContentComponent.prototype, "content", void 0);
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

/***/ "./src/app/components/highlight/highlight.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"highlight-container\">\r\n  <img [src]=\"img\" alt=\"\">\r\n  <div class=\"title\">\r\n    <div class=\"key\" *ngIf='highlight.title.key'>{{highlight.title.key}}:</div>\r\n    <div class=\"value\">{{highlight.title.value}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/highlight/highlight.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".highlight-container {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/components/highlight/highlight.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/highlight/highlight.component.ts ***!
  \*************************************************************/
/*! exports provided: HighlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightComponent", function() { return HighlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_image_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/image-resolver.service */ "./src/app/services/image-resolver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightComponent = /** @class */ (function () {
    function HighlightComponent(imageResolver) {
        this.imageResolver = imageResolver;
    }
    HighlightComponent.prototype.ngOnInit = function () {
        this.img = this.imageResolver.resolveImg(this.highlight.img);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HighlightComponent.prototype, "highlight", void 0);
    HighlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'highlight',
            template: __webpack_require__(/*! ./highlight.component.html */ "./src/app/components/highlight/highlight.component.html"),
            styles: [__webpack_require__(/*! ./highlight.component.scss */ "./src/app/components/highlight/highlight.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_image_resolver_service__WEBPACK_IMPORTED_MODULE_1__["ImageResolverService"]])
    ], HighlightComponent);
    return HighlightComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-detailed-component></app-detailed-component>\n  <div class=\"content\">\n    <card class=\"item\" *ngFor=\"let crd of cards$ | async\" [card]='crd' (onClick)='cardSelected($event)'></card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 740px;\n  max-height: 1000px;\n  position: relative;\n  border-radius: 15px;\n  background: rgba(218, 218, 218, 0.952);\n  margin: 0 auto; }\n  .container .bar {\n    background: #3b3b3b;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 15px 15px 0 0;\n    padding-right: 10px;\n    padding-left: 14px; }\n  .container .bar h2 {\n      color: white;\n      font-size: 10px;\n      font-family: \"Times New Roman\", Times, serif; }\n  .container .content {\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: auto auto auto auto;\n        grid-template-columns: auto auto auto auto;\n    padding: 10px; }\n  .container .content .item {\n      width: 160px;\n      margin: auto;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(store) {
        this.store = store;
        this.showDetailedCard = false;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.cards$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.cards; }));
    };
    HomePageComponent.prototype.log = function (text) {
        console.log(text);
    };
    HomePageComponent.prototype.closeDetailedCard = function (value) {
        this.showDetailedCard = value;
    };
    HomePageComponent.prototype.cardSelected = function (card) {
        this.store.dispatch(new src_app_components_detailed_card_view_store_actions__WEBPACK_IMPORTED_MODULE_3__["CardSelected"](card));
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/components/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/new-version/level1-card/level1-card.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-version/level1-card/level1-card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card ripple\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimary}\"  (click)='onClick()'>\n    <div class=\"img-container\">\n      <img [src]=\"card.cardImage\" [ngStyle]=\"{ 'background': card.cardBackgrowndPrimaryLight , 'border': '0px solid ' + card.cardBackgrowndPrimaryDark }\">\n    </div>\n    <div class=\"card-title\">{{card.cardTitle}}</div>\n</div> "

/***/ }),

/***/ "./src/app/components/new-version/level1-card/level1-card.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/new-version/level1-card/level1-card.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 250px;\n  margin: 10px;\n  display: flex;\n  background: #333333;\n  border-radius: 3%;\n  box-shadow: 0 1px 3px 0 rgba(75, 75, 75, 0.5); }\n  .card .img-container {\n    padding: 10px;\n    text-align: center; }\n  .card .img-container img {\n      margin-top: 10px;\n      text-align: center;\n      height: 70px;\n      width: 70px;\n      left: 100px;\n      -ms-grid-row-align: center;\n      align-self: center;\n      padding: 5px;\n      background: #b6b6b6;\n      border-radius: 50%; }\n  .card .card-title {\n    text-align: center;\n    -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 15px;\n    font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n    font-weight: bold;\n    color: beige;\n    width: 100%; }\n  .card:hover {\n  box-shadow: 0px 4px 0 #00000033;\n  transition: box-shadow 0.15s;\n  opacity: 0.8; }\n"

/***/ }),

/***/ "./src/app/components/new-version/level1-card/level1-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/new-version/level1-card/level1-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: Level1CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level1CardComponent", function() { return Level1CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _detailed_card_view_store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../detailed-card-view/store/actions */ "./src/app/components/detailed-card-view/store/actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Level1CardComponent = /** @class */ (function () {
    function Level1CardComponent(store) {
        this.store = store;
    }
    Level1CardComponent.prototype.ngOnInit = function () {
    };
    Level1CardComponent.prototype.onClick = function () {
        this.store.dispatch(new _detailed_card_view_store_actions__WEBPACK_IMPORTED_MODULE_1__["CardSelected"](this.card));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Level1CardComponent.prototype, "card", void 0);
    Level1CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level1-card',
            template: __webpack_require__(/*! ./level1-card.component.html */ "./src/app/components/new-version/level1-card/level1-card.component.html"),
            styles: [__webpack_require__(/*! ./level1-card.component.scss */ "./src/app/components/new-version/level1-card/level1-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], Level1CardComponent);
    return Level1CardComponent;
}());



/***/ }),

/***/ "./src/app/components/new-version/new-version.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-version/new-version.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"level1\">\n    <app-level1-card *ngFor=\"let crd of cards$ | async\" [card]='crd'></app-level1-card>\n  </div>\n  <div class=\"level2\">\n      <app-detailed-component></app-detailed-component>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/new-version/new-version.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-version/new-version.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  max-height: 876px; }\n  .container .level1 {\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-right: 5px;\n    border-right: 1px solid #6d6d6d; }\n  .container .level2 {\n    width: 100%;\n    border-bottom-right-radius: 10px; }\n"

/***/ }),

/***/ "./src/app/components/new-version/new-version.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-version/new-version.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewVersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVersionComponent", function() { return NewVersionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewVersionComponent = /** @class */ (function () {
    function NewVersionComponent(store) {
        this.store = store;
    }
    NewVersionComponent.prototype.ngOnInit = function () {
        this.cards$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])('state'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (state) { return state.cards; }));
    };
    NewVersionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-version',
            template: __webpack_require__(/*! ./new-version.component.html */ "./src/app/components/new-version/new-version.component.html"),
            styles: [__webpack_require__(/*! ./new-version.component.scss */ "./src/app/components/new-version/new-version.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], NewVersionComponent);
    return NewVersionComponent;
}());



/***/ }),

/***/ "./src/app/components/project-view/project-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  app-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/project-view/project-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-view/project-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
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

var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent() {
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
    };
    ProjectViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-view',
            template: __webpack_require__(/*! ./project-view.component.html */ "./src/app/components/project-view/project-view.component.html"),
            styles: [__webpack_require__(/*! ./project-view.component.scss */ "./src/app/components/project-view/project-view.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());



/***/ }),

/***/ "./src/app/pipes/safe-url.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/safe-url.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeUrl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
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

/***/ "./src/app/services/image-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/image-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: ImageResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageResolverService", function() { return ImageResolverService; });
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

var ImageResolverService = /** @class */ (function () {
    function ImageResolverService() {
        this.images = {};
        this.images["Name"] = "assets/img/highlights/name.svg";
        this.images["Email"] = "assets/img/highlights/email.svg";
        this.images["Status"] = "assets/img/highlights/status.svg";
        this.images["Phone"] = "assets/img/highlights/phone.svg";
        this.images["Angular"] = "assets/img/highlights/angular.svg";
        this.images["Settings"] = "assets/img/highlights/settings.svg";
    }
    ImageResolverService.prototype.resolveImg = function (key) {
        return this.images[key];
    };
    ImageResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ImageResolverService);
    return ImageResolverService;
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
        cardImage: "assets/img/profile.jpg",
        cardBackgrowndPrimary: "#607d8b",
        cardBackgrowndPrimaryLight: "#8eacbb",
        cardBackgrowndPrimaryDark: "#34515e",
    },
    {
        cardId: 7,
        cardTitle: "Job Profile",
        cardImage: "assets/img/job.png",
        cardBackgrowndPrimary: "#3f51b5",
        cardBackgrowndPrimaryLight: "#757de8",
        cardBackgrowndPrimaryDark: "#002984",
    },
    {
        cardId: 2,
        cardTitle: "Angular.io",
        cardImage: "assets/img/angular.png",
        cardBackgrowndPrimary: "#e53935",
        cardBackgrowndPrimaryLight: "#ff6f60",
        cardBackgrowndPrimaryDark: "#ab000d"
    },
    {
        cardId: 3,
        cardTitle: "Android",
        cardImage: "assets/img/android.png",
        cardBackgrowndPrimary: "#43a047",
        cardBackgrowndPrimaryLight: "#00701a",
        cardBackgrowndPrimaryDark: "#ff6f60"
    },
    {
        cardId: 4,
        cardTitle: "Unity",
        cardImage: "assets/img/unity_3d.png",
        cardBackgrowndPrimary: "#757575",
        cardBackgrowndPrimaryLight: "#a4a4a4",
        cardBackgrowndPrimaryDark: "#494949"
    },
    {
        cardId: 5,
        cardTitle: "Node.js",
        cardImage: "assets/img/nodejs.png",
        cardBackgrowndPrimary: "#7cb342",
        cardBackgrowndPrimaryLight: "#aee571",
        cardBackgrowndPrimaryDark: "#4b830d"
    },
    {
        cardId: 6,
        cardTitle: "Academic degree",
        cardImage: "assets/img/university.png",
        cardBackgrowndPrimary: "#6d4c41",
        cardBackgrowndPrimaryLight: "#9c786c",
        cardBackgrowndPrimaryDark: "#40241a"
    }
];
var CARD_FACES = [
    {
        cardId: 1,
        content: [{
                highlights: [
                    { title: { key: 'Name', value: 'Ran Tayeb' }, img: 'Name' },
                    { title: { key: 'Email', value: 'tayebran@gmail.com' }, img: 'Email' },
                    { title: { key: 'Status', value: 'Married' }, img: 'Status' },
                    { title: { key: 'Mobile', value: '0523053392' }, img: 'Phone' }
                ],
                description: "Hi to you all\n                         Im Ran Working as a Full-Stack developer at dbMotion / Allscripts Welcome to my portfolio, hope you like it,\n                         for more infirmation this is the <a href='https://github.com/Tygro101/angular-cv'>source code</a>",
            }]
    },
    {
        cardId: 2,
        content: [{
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Angular ^2.0' }, img: 'Angular' },
                    { title: { key: 'unit Tests', value: 'Angular ^2.0' }, img: 'Angular' }
                ],
                description: "This is the classic <a href='https://tygro101.github.io//minesweeper-angular/'>Minesweeper</a> game, with the authentic feeling, created with angular 2.0 framework,\n            you can find the open source <a href='https://github.com/Tygro101/minesweeper-angular'>here</a>, the control are with the mouse, SHIFT + Mouse Click for flag marking",
                video: "https://www.youtube.com/embed/GsRv5kUafoU",
                projectTitle: "Minesweeper"
            },
            {
                highlights: [
                    { title: { key: 'Project', value: 'Chat' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Angular js' }, img: 'Angular' },
                    { title: { key: 'Server', value: 'Node js' }, img: 'Node' },
                    { title: { key: 'Communication', value: 'Socket.io' }, img: 'Socket.io' },
                    { title: { key: 'oAuth', value: 'Facebook' }, img: 'Socket.io' },
                ],
                description: "This is a Chat site, writing with angular js framework,\n            you can find the open source <a href='https://github.com/Tygro101/Chet'>here</a>, this project have alot inside, like oAuth with facebook and mongoDB, node js and socket.io and the obvise angular js",
                video: "https://www.youtube.com/embed/eGdkUPC3GHM",
                projectTitle: "Chat"
            }
        ]
    },
    {
        cardId: 3,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Application', value: 'Loaction based Reminder' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Android' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'Java' }, img: 'Angular' },
                    { title: { key: 'Map', value: 'Google Maps' }, img: 'Angular' },
                    { title: { key: 'Published on', value: 'Google Play' }, img: 'Angular' },
                ],
                description: "<a href='https://play.google.com/store/apps/details?id=com.dev.ran.dowme'>Drops</a> is android native application, the idea of the application is\n                to give the user other another dimension of reminder based on location, the user can set location on google maps and set reminder on this location, when reaching this \n                location the reminder will pop",
                //video: "https://lh3.googleusercontent.com/6B01HEhBGS1mxdBCraUObw6_vOA8MVQXx6hYVVxVuivoXzYOTNI6Dr4wz5i9kW6-PF0j=w1154-h650-rw",
                projectTitle: "Drops"
            }
        ]
    },
    {
        cardId: 4,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published', value: 'Google Play' }, img: 'Angular' },
                ],
                description: "<a href='https://play.google.com/store/apps/details?id=com.raycha.shakeit&hl=en'>SpaceIt</a> is my latest mobile game released on android platform, \n                Using Unity 3D (it's a great framework to start and develop with, very easy to adapt and very and fast learning curve),\n                the goal of the game is to shake the device as fast as you can for 5 second to charge the Spaceship, at the end of the 5 seconds the ship will launched and continue to flay until the fuel runs up,\n                the game have google play table for records to see how it the fastest child in the block",
                video: "https://www.youtube.com/watch?v=fOej1apChlw",
                projectTitle: "Circle Dunk"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published', value: 'Google Play' }, img: 'Angular' },
                ],
                description: "<a href='https://play.google.com/store/apps/details?id=com.Tayeb.CircleDunk&hl=en'>Circle Dunk</a>mobile game released on android platform\n                Using Unity 3D (it's a great framework to start and develop with, very easy to adapt and very and fast learning curve),\n                the goal of this game is to continue the ball movment and keep getting inside the circles, but there is a gravitation that pulling the ball to the center, every click on the screen\n                 will give the ball power to go up and keep circling for the wanted radius",
                video: "https://www.youtube.com/embed/N1u9I6UEclo",
                projectTitle: "Circle Dunk"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' },
                    { title: { key: 'Published On', value: 'Google Play' }, img: 'Angular' },
                    { title: { key: 'Gaming services', value: 'Google play services' }, img: 'Angular' },
                    { title: { key: 'Ads provider', value: 'Admob' }, img: 'Angular' }
                ],
                description: "<a href='https://play.google.com/store/apps/details?id=com.Ran.CirclBird&hl=en'>Circle Bird</a> is my first released gaming application made with Unity 3D, \n                Connecting to google play services give me the ability to add highscore board, and achievements which helps to create competitive atmosphere, the goal of the game is to go throw every ring in our way",
                video: "https://www.youtube.com/embed/ArN72oQP_Ak",
                projectTitle: "Circle Bird"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Unity' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'C#' }, img: 'Angular' }
                ],
                description: "This is my first 3D game on Unity 3D MazeRun, this is unfinished game that was published as a crowdfunding project on \n                indiegogo, Which had a huge failure (: with no contributions, but still great game with great graphics, the game idea is like a maze, full description can be\n                found inside indigogo page <a href='https://www.indiegogo.com/projects/mazerun-game-android/x/16527556#/'>MazeRun</a>",
                video: "https://www.youtube.com/embed/IAhM4t0EuwM",
                projectTitle: "Maze Run"
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'LibGDX' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'Java' }, img: 'Angular' }
                ],
                description: "This is the <a href='https://www.indiegogo.com/projects/mazerun-game-android/x/16527556#/'>Classic Super Mario Game</a> \n                created while i learning game design, after getting the basics i tried to ",
                video: "https://www.youtube.com/embed/ihtjt3gllxg",
                projectTitle: "Super Mario"
            }
        ]
    },
    {
        cardId: 5,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Project Type', value: 'Gaming server' }, img: 'Settings' },
                    { title: { key: 'Framework', value: 'Node js' }, img: 'Angular' },
                    { title: { key: 'Script', value: 'javascript' }, img: 'Angular' },
                    { title: { key: 'Communication', value: 'socket.io' }, img: 'Angular' }
                ],
                description: "This is a start of a poker server, should be a mobile clinet with socket connection to server, this is the <a href='https://github.com/Tygro101/GitTest'>Source</a>",
                projectTitle: "Poker"
            }
        ]
    }, {
        cardId: 6,
        content: [
            {
                highlights: [],
                //description: `Ben Gurion University - Electrical and Computer Engineering Majoring in computer science and communication engineering.`,
                projectTitle: "Ben Gurion University - Electrical and Computer Engineering Majoring in computer science and communication engineering."
            }
        ]
    },
    {
        cardId: 7,
        content: [
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'Start Date', value: '6.2018' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'Full Stack Engineer' }, img: 'Settings' },
                    { title: { key: 'Client Side', value: 'Angular' }, img: 'Angular' },
                    { title: { key: 'Server Side', value: 'ASP.net' }, img: 'Settings' },
                    { title: { key: 'Unit Testing', value: 'Jest' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'TestCafe' }, img: 'Settings' },
                ],
                projectTitle: "Currently : Full Stack @ dbMotion (Allscripts)",
                description: "In this period we started to create and managed scalable angular application from scratch using NGRX for client state manage, and most of angular abilities",
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'End Date', value: '6.2018' }, img: 'Settings' },
                    { title: { key: 'Start Date', value: '5.2015' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'Software Developer Engineer' }, img: 'Settings' },
                    { title: { key: 'Server Side', value: 'C#' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'Robot Framework, Python, C#' }, img: 'Settings' },
                ],
                projectTitle: "Software Developer Engineer @ dbMotion (Allscripts)",
                description: "Most of the work was by adding new features to or server, in this",
            },
            {
                highlightsIcon: "assets/img/project-highlights/minesweeper.png",
                highlights: [
                    { title: { key: 'End Date', value: '5.2015' }, img: 'Settings' },
                    { title: { key: 'Start Date', value: '10.2014' }, img: 'Settings' },
                    { title: { key: 'Job Title', value: 'QA Automation Engineer' }, img: 'Settings' },
                    { title: { key: 'E2E Testing', value: 'Robot Framework, Python, C#' }, img: 'Settings' },
                ],
                projectTitle: "Software Developer Engineer @ dbMotion (Allscripts)",
                description: "In this period i created vary immersive e2e test that covers most of our development, including legacy features and new ones",
            }
        ]
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