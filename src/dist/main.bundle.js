webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_login_task_login_component__ = __webpack_require__("../../../../../src/app/task-login/task-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    // {  
    //   path: 'tarefas', 
    //   component: TaskListComponent,
    //   data: {title:'Task list'},
    //   // children: [
    //   //   {
    //   //     path: 'create',
    //   //     component: TaskCreateComponent
    //   //   }
    //   // ]
    // },
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__task_login_task_login_component__["a" /* TaskLoginComponent */]
    }
    //{ path: '**', redirectTo:'/tasks', pathMatch: 'full'}
    // {
    //   path: 'tarefas/create',
    //   component: TaskCreateComponent
    // },
    // {
    //   path: 'tarefas/detail/:id',
    //   component: TaskDetailComponent
    // }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#l-postask{\n    color: rgb(249, 252, 253);\n    text-decoration: none;\n    padding: 18px;\n\n}\n.nav{\n    background-color: rebeccapurple;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.2rem;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    /* flex-direction: row; */\n    width: 100%;\n}\n.link-navigation{\n    padding: 18px;\n\n}\n#bt-create, #bt-home {\n    border: 1px solid transparent;\n   \n    color: white;\n    padding: 12px;\n    margin: 5px;\n    border-radius: 4px;\n    text-decoration: none;\n    font-weight: bolder;\n    font-size: 1.1rem;\n    cursor:pointer;\n}\n#bt-create {\n    background-color: brown;\n}\n#bt-home {\n    background-color: aquamarine;\n}\nfooter {\n    background-color: rgba(27, 2, 51, 0.979);\n    color: white;\n    text-align: center;\n    font-weight: bold;\n    padding: 10px;\n    \n}\n.search {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    width: 70%;\n}\n.input-search {\n    float: right;\n    padding: 10px 6px;\n    width: 30%;\n    border-radius: 4px;\n    border: 1px solid transparent;\n   \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n    <a  id=\"l-postask\">PosTask</a>\n    <div class=\"btns\">\n        <button type=\"button\" id=\"bt-create\" routerLink=\"/tasks/save\" title=\"criar uma tarefa\">Criar Postite</button>\n        <button type=\"button\" id=\"bt-home\" routerLink=\"/\" title=\"página inicial\">Home</button>\n    </div>\n    <div class=\"search\">\n        <input type=\"search\" class=\"input-search\" placeholder=\"search task ...\"\n        name=\"busca\"\n        [(ngModel)]=\"termo\"\n        >\n    </div>\n</nav>\n<router-outlet></router-outlet>\n<app-task-search [busca]=\"termo\" (buscaChange)=\"termo=$event\"></app-task-search>\n<footer>\n    <p>:)</p>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function AppComponent(route) {
        this.route = route;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.value = params['id'];
            console.log(_this.value);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_component__ = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__ = __webpack_require__("../../../../../src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/task-detail/task-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_create_task_create_component__ = __webpack_require__("../../../../../src/app/task-create/task-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_routing_module__ = __webpack_require__("../../../../../src/app/task-list/task-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__task_search_task_search_component__ = __webpack_require__("../../../../../src/app/task-search/task-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__task_login_task_login_component__ = __webpack_require__("../../../../../src/app/task-login/task-login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { NgxPageNotFoundComponent } from '@4geit/ngx-page-not-found-component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_list_task_list_component__["a" /* TaskListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_create_task_create_component__["a" /* TaskCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_17__task_search_task_search_component__["a" /* TaskSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__task_login_task_login_component__["a" /* TaskLoginComponent */]
                // NgxPageNotFoundComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_dragula_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__task_list_task_list_routing_module__["a" /* TaskListRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__in_memory_data_service__["a" /* InMemoryDataService */], { dataEncapsulation: false })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__task_service__["a" /* TaskService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var tasks = [
            { id: 1, tarefa: 'Tarefa A', descricao: 'Realizar Tarefa A', color: '#DA5EFD', state: 1 },
            { id: 2, tarefa: 'Tarefa B', descricao: 'Realizar Tarefa B', color: '#5EFDDA', state: 1 },
            { id: 3, tarefa: 'Tarefa C', descricao: 'Realizar Tarefa C', color: '#5EFDDA', state: 2 },
            { id: 4, tarefa: 'Tarefa D', descricao: 'Realizar Tarefa D', color: '#DA5EFD', state: 3 },
            { id: 5, tarefa: 'Tarefa E', descricao: 'Realizar Tarefa E', color: '#FDDA5E', state: 3 },
            { id: 6, tarefa: 'Tarefa F', descricao: 'Realizar Tarefa F', color: '#5EFDDA', state: 1 },
        ];
        return { tasks: tasks };
    };
    InMemoryDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "../../../../../src/app/task-create/task-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding:0;\n    margin:0;\n    font-family: Arial, Helvetica, sans-serif;\n}\nbody{\n    padding:0;\n    margin:0;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 100%;\n}\n.form-group{\n    width: 90%;\n    margin: 30px 30px;\n}\n.container {\n    width: 100%;\n    padding: 100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: rgba(247, 254, 255, 0.842);\n}\nform{\n    width: 50%;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.form-control {\n    width: 100%;\n    padding: 12px 7px;\n    border-radius: 4px;\n    border: 1px solid rgb(190, 190, 241);\n    margin-top: 12px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-size: 1.2rem;\n    /* background-color: rgba(249, 252, 253, 0.144); */\n}\ntextarea{\n    resize: none;\n}\nlabel{\n    font-size: 1.2rem;\n    letter-spacing: 1.2px;\n    color: gray;\n}\n.bt-save, .bt-backward {\n    padding: 12px 28px;\n    font-size: 1.2rem;\n    \n    /* border: 1px solid transparent; */\n    border-radius: 4px;\n    font-weight: bolder;\n    -webkit-box-flex: content;\n        -ms-flex: content;\n            flex: content;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    margin: 5px;\n    /* background-color:rgb(45, 211, 114); */\n    cursor: pointer;\n}\n.bt-save {\n    background-color:rgb(45, 211, 114);\n    border: 1px solid transparent;\n    color: white;\n}\n.bt-backward {\n    background-color: white;\n    color: gray;\n    border: 1px solid gray;\n}\n[type=\"radio\"]:checked,\n[type=\"radio\"]:not(:checked) {\n    position: absolute;\n    left: -9999px;\n}\n[type=\"radio\"]:checked + label,\n[type=\"radio\"]:not(:checked) + label {\n    position: relative;\n    padding-left: 28px;\n    cursor: pointer;\n    line-height: 20px;\n    display: inline-block;\n    color: rgb(31, 30, 30);\n    margin: 5px;\n    width: 30%;\n}\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:not(:checked) + label:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 18px;\n    height: 18px;\n    border: 1px solid #ddd;\n    border-radius: 100%;\n    background: #fff;\n}\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"]:not(:checked) + label:after {\n    content: '';\n    width: 12px;\n    height: 12px;\n    background: rgb(125, 219, 248);\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    border-radius: 100%;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n}\n[type=\"radio\"]:not(:checked) + label:after {\n    opacity: 0;\n    -webkit-transform: scale(0);\n    transform: scale(0);\n}\n[type=\"radio\"]:checked + label:after {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n}\n.inp-r {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\np{\n    color: gray;\n    font-size: 1.2rem;\n    letter-spacing: 1.2px;\n    margin-bottom: 20px;\n}\ninput[type=\"color\"] {\n    -webkit-appearance: none;\n    border: none;\n    width: 64px;\n    height: 64px;\n    -webkit-box-shadow: 1px 8px 8px rgba(0,0,0,.08);\n            box-shadow: 1px 8px 8px rgba(0,0,0,.08);\n}\ninput[type=\"color\"]::-webkit-color-swatch-wrapper {\n\tpadding: 0;\n}\ninput[type=\"color\"]::-webkit-color-swatch {\n\tborder: none;\n}\ninput[type=\"color\"]:hover {\n    cursor: pointer;\n}\n.buttons {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n.has-danger input, .has-danger textarea {\n    border: 1.5px solid red;\n}\n.has-danger label {\n    color: red;\n}\n.form-control-feedback {\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    color: gray;\n}\n.has-success input, .has-success textarea {\n    border: 1.5px solid rgb(0, 255, 136);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-create/task-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(f, todo, doing, done)\">\n    <div  [ngClass]=\" getFormGroupClass(tarefa.valid, tarefa.pristine)\">\n      <label for=\"tarefa\" class=\"form-control-label\">Tarefa</label>\n      <input type=\"text\" name=\"tarefa\" id=\"tarefa\"\n      [(ngModel)]=\"task.tarefa\"\n      [ngClass]=\"getFormControlClass(tarefa.valid, tarefa.pristine)\"\n      #tarefa=\"ngModel\"\n      required >\n      <div class=\"form-control-feedback\" [hidden]=\"tarefa.valid || tarefa.pristine\">Este campo é obrigatório</div>\n    </div>\n    <div  [ngClass]=\" getFormGroupClass(descricao.valid, descricao.pristine)\">\n      <label for=\"descricao\">Descricao</label>\n      <textarea wrap=\"off\" cols=\"30\" rows=\"5\" class=\"form-control\" name=\"descricao\" id=\"descricao\"\n      [(ngModel)]=\"task.descricao\"\n      [ngClass]=\"getFormControlClass(descricao.valid, descricao.pristine)\"\n      #descricao=\"ngModel\"\n      required\n      ></textarea>\n      <div class=\"form-control-feedback\" [hidden]=\"descricao.valid || descricao.pristine\">Este campo é obrigatório</div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"\">Cor do postite:</label>\n      <input type=\"color\" name=\"color\" \n      [(ngModel)]=\"task.color\"\n      >\n    </div>\n    <div [ngClass]=\"getFormGroupClass(step.valid, step.pristine)\">\n      <div class=\"inp-r\"> \n        <p>Estado da tarefa</p>\n        <input #todo #step type=\"radio\" [value]=\"1\"  [checked]=\"(task.state === 1)\" class=\"radio\" id=\"todo\"\n         name=\"step\"\n         [(ngModel)]=\"task.state\"\n        required\n         >\n        <label for=\"todo\" >todo</label>\n        <input #doing #step type=\"radio\" name=\"step\" [value]=\"2\" [checked]=\"(task.state === 2)\" class=\"radio\" id=\"doing\"\n        [(ngModel)]=\"task.state\"\n        required\n        >\n        <label for=\"doing\">doing</label>\n        <input #done #step type=\"radio\" name=\"step\" [value]=\"3\" [checked]=\"(task.state === 3)\" class=\"radio\" id=\"done\"\n        [(ngModel)]=\"task.state\"\n        required\n        >\n        \n        <label for=\"done\">done</label>\n      </div>\n    </div>\n    <div class=\"buttons\">\n        <button class=\"bt-save\" type=\"submit\" [disabled]=\"!f.form.valid\">Save</button>\n        <button type=\"button\" class=\"bt-backward\"  (click)=\"goBack()\">Voltar</button>\n    </div>\n    \n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/task-create/task-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__("../../../../../src/app/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(route, taskService, location) {
        this.route = route;
        this.taskService = taskService;
        this.location = location;
        this.tasks = [];
        this.isNew = true;
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.value = +params['id'];
            //console.log(this.value);
            _this.task = new __WEBPACK_IMPORTED_MODULE_2__task__["a" /* Task */]();
            _this.task.state = 1;
            _this.task.color = "#23244D";
            if (_this.value > 0) {
                _this.isNew = false;
                _this.taskService.getTask(_this.value).subscribe(function (task) {
                    _this.task = task;
                });
            }
        });
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    };
    TaskCreateComponent.prototype.save = function () {
        var _this = this;
        this.taskService.updateTask(this.task)
            .subscribe(function () { return _this.goBack(); });
    };
    TaskCreateComponent.prototype.goBack = function () {
        this.location.back();
    };
    TaskCreateComponent.prototype.onSubmit = function (f, t, dng, dn) {
        var _this = this;
        //let observableTask: Observable<Task>;
        console.log(f.value.step);
        if (this.isNew) {
            this.task.state = +f.value.step;
            this.taskService.addTask(this.task).subscribe(function (task) {
                console.log(task);
                _this.goBack();
            });
            console.log("entrei no if");
        }
        else {
            this.task.state = (t.checked) ? 1 : (dng.checked) ? 2 : 3;
            console.log("entrei no else");
            this.taskService.updateTask(this.task).subscribe(function () { return _this.goBack(); });
        }
    };
    TaskCreateComponent.prototype.getFormControlClass = function (isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    };
    TaskCreateComponent.prototype.getFormGroupClass = function (isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    };
    TaskCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__("../../../../../src/app/task-create/task-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-create/task-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    \n}\n.tasks {\n    padding: 50px 0 350px 0;\n    width: 85%;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin: 0 auto;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.task {\n    color: white;\n    padding: 50px;\n    margin: 10px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\na {\n    text-decoration: none;\n    color: rgb(248, 252, 251);\n    text-align: center;\n}\np{\n    width: 11em;  \n    word-wrap: break-word;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"tasks\" >\n        <div class=\"task\" *ngFor=\"let task of tasks\" [style.backgroundColor]=\"task.color\">\n            <a  [routerLink]=\"['../detail', task.id]\">\n                <p><strong>{{ task.tarefa }}</strong></p>\n                <br/>\n                <p>{{ task.descricao }}</p>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/task-detail/task-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(route, taskService, location) {
        this.route = route;
        this.taskService = taskService;
        this.location = location;
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            console.log(param['state']);
            _this.state = (param['state'] === 'todo') ? 1 : (param['state'] === 'doing') ? 2 : 3;
            console.log(_this.state);
        });
        this.getTasks();
    };
    TaskDetailComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks.filter(function (t) { return t.state === _this.state; }); });
    };
    TaskDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__("../../../../../src/app/task-detail/task-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-detail/task-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-list/task-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_list_component__ = __webpack_require__("../../../../../src/app/task-list/task-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_create_task_create_component__ = __webpack_require__("../../../../../src/app/task-create/task-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_detail_task_detail_component__ = __webpack_require__("../../../../../src/app/task-detail/task-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var taskRoutes = [
    {
        path: 'tasks',
        component: __WEBPACK_IMPORTED_MODULE_2__task_list_component__["a" /* TaskListComponent */]
    },
    {
        path: 'tasks/save',
        component: __WEBPACK_IMPORTED_MODULE_3__task_create_task_create_component__["a" /* TaskCreateComponent */]
    },
    {
        path: 'tasks/detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__task_create_task_create_component__["a" /* TaskCreateComponent */]
    },
    {
        path: 'tasks/all/:state',
        component: __WEBPACK_IMPORTED_MODULE_4__task_detail_task_detail_component__["a" /* TaskDetailComponent */],
        children: [
            {
                path: 'todo',
                component: __WEBPACK_IMPORTED_MODULE_4__task_detail_task_detail_component__["a" /* TaskDetailComponent */]
            },
            {
                path: 'doing',
                component: __WEBPACK_IMPORTED_MODULE_4__task_detail_task_detail_component__["a" /* TaskDetailComponent */]
            },
            {
                path: 'done',
                component: __WEBPACK_IMPORTED_MODULE_4__task_detail_task_detail_component__["a" /* TaskDetailComponent */]
            }
        ]
    },
    {
        path: '**', redirectTo: 'tasks', pathMatch: 'full'
    }
];
var TaskListRoutingModule = /** @class */ (function () {
    function TaskListRoutingModule() {
    }
    TaskListRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(taskRoutes)
            ]
        })
    ], TaskListRoutingModule);
    return TaskListRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\n    background-color: blueviolet;\n    list-style-type: none;\n    border: 1px solid rgb(78, 2, 150);\n}\nul{\n    width: 20%;\n}\na{\n    text-decoration: none;\n    color: white;\n    \n}\n*{\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n}\n::-webkit-scrollbar-thumb {\n    background: rgb(0, 195, 255); \n    border-radius: 10px;\n}\n::-webkit-scrollbar {\n    width: 20px;\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: rgb(0, 195, 255); \n    border-radius: 10px;\n}\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #007ab3; \n}\n.container {\n   \n    width: 100%;\n    height: auto;\n    background-color:  rgba(247, 254, 255, 0.842);\n}\n.tasks {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 0 auto;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box;\n    width: 85%;\n    padding: 32px 0;\n }\n.todo, .doing, .done {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin: 10px;\n    padding: 30px;\n    height: 220px;\n    width: auto;\n    overflow: auto;\n    border-radius: 4px;\n    -webkit-box-shadow:  0px 8px 8px 0px rgba(0,0,0,.02);\n            box-shadow:  0px 8px 8px 0px rgba(0,0,0,.02);\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.todo {\n    border-color: #2e2e94d5;\n    border-style: solid;\n    border-bottom-width: 10px;\n    border-top-width: 0;\n    border-left-width: 10px;\n    border-right-width: 0;\n    \n}\n.doing{\n    border-color: #2e2e94d5;\n    border-style: solid;\n    border-bottom-width: 10px;\n    border-top-width: 0;\n    border-left-width: 10px;\n    border-right-width: 0;\n}\n.done{\n    border-color: #2e2e94d5;\n    border-style: solid;\n    border-bottom-width: 10px;\n    border-top-width: 0;\n    border-left-width: 10px;\n    border-right-width: 0;\n}\n[class*=\"card-\"]{\n    /* background-color: rgba(16, 134, 75, 0.575); */\n    margin: 10px;\n    -webkit-box-shadow: 1px 8px 8px  rgba(0,0,0,.2);\n            box-shadow: 1px 8px 8px  rgba(0,0,0,.2);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color:rgba(255, 255, 255, 0.918);\n    font-size: 0.9rem;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n     'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    height: 120px;\n}\n/* [class*=\"card-\"]:active{\n    transform: rotate(-1.9deg) scale(1.1,1.1);\n} */\n.postite{\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin: 20px auto;\n    margin-bottom: 60px;\n}\n.green, .violet, .blue{\n    width: 20%;\n    height: 120px;\n    text-align: center;\n}\n.violet{\n    -webkit-box-shadow: 1px 7px 7px 0px rgb(78, 2, 150);\n            box-shadow: 1px 7px 7px 0px rgb(78, 2, 150);\n}\n.green{\n    -webkit-box-shadow: 1px 7px 7px 0px rgb(2, 150, 76);\n            box-shadow: 1px 7px 7px 0px rgb(2, 150, 76);\n}\n.blue{\n    -webkit-box-shadow: 1px 7px 7px 0px rgb(2, 71, 150);\n            box-shadow: 1px 7px 7px 0px rgb(2, 71, 150);\n}\nh2{\n    margin:0 auto;\n    color: gray;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n.green{ \n    background-color:rgba(16, 134, 75, 0.575);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 12px solid rgba(16, 134, 75, 0.575);\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0;\n    \n}\n.violet{ \n    background-color:  rgba(118, 7, 161, 0.651);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 12px solid rgba(118, 7, 161, 0.651);\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0;\n}\n.blue{ \n    background-color: rgba(14, 98, 167, 0.801);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 12px solid rgba(14, 98, 167, 0.801);\n    border-bottom: 0;\n    border-left: 0;\n    border-right: 0;\n}\nfa{\n    -webkit-box-flex: content;\n        -ms-flex: content;\n            flex: content;\n    color: rgba(255, 255, 255, 0.918);\n    padding: 8px;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    -webkit-box-shadow: 2px 6px 6px 2px rgba(0,0,0,.02);\n            box-shadow: 2px 6px 6px 2px rgba(0,0,0,.02);\n}\nfa:hover{\n    -webkit-transform: scale(1.2,1.2);\n            transform: scale(1.2,1.2);\n}\n[class*=\"card-\"] a{\n    padding: 0px 40px 0 40px;\n    color: rgba(255, 255, 255, 0.918);\n    width: 11em;\n    text-align: center;\n    word-wrap: break-word;\n    margin: 5px;\n}\n[class*=\"card-\"] a:hover{\n    -webkit-transform: scale(1.2,1.2);\n            transform: scale(1.2,1.2);\n}\n/* .fa-plus-circle{\n    /* margin:0 auto; \n    align-self: center;\n    margin: 40px 0;\n    font-size: 1.8rem;\n    \n} */\n/* .green .fa-plus-circle{\n    color: rgba(16, 134, 75, 0.575);\n}\n.violet .fa-plus-circle{\n    color: rgba(118, 7, 161, 0.651);\n}\n.blue .fa-plus-circle{\n    color: rgba(14, 98, 167, 0.801);\n} */\n.all-view-delete a:nth-child(2){\n    border: 1px solid transparent;\n    background-color: rgba(165, 42, 42, 0.856);\n    padding: 8px;\n    border-radius: 4px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    cursor: pointer;\n}\n.all-view-delete a:nth-child(1){\n    border: 1px solid transparent;\n    background-color: rgba(51, 102, 136, 0.856);\n    padding: 7px;\n    border-radius: 4px;\n  \n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    cursor: pointer;\n}\n.all-view-delete {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"postite\">\n  <a routerLink=\"/tarefas/create/3\" class=\"green\"><i class=\"fa fa-plus-circle\"></i></a>\n  <a routerLink=\"/tarefas/create/2\" class=\"violet\"><i class=\"fa fa-plus-circle\"></i></a>\n  <a routerLink=\"/tarefas/create/1\" routerLinkActive=\"active\" class=\"blue\"><i class=\"fa fa-plus-circle\"></i></a>\n</div> -->\n\n  <div class=\"container\">\n    <div class=\"tasks\">\n        <!-- <div [ngClass]=\"classesCss\" role=\"alert\" *ngIf=\"mensagem\">\n            <span [ngSwitch]=\"mensagem.tipo\">\n                <strong *ngSwitchCase=\"'danger'\">Error!</strong>\n                <strong *ngSwitchCase=\"'warning'\">Alerta!</strong>\n                <strong *ngSwitchCase=\"'success'\">Sucesso!</strong>\n                <strong *ngSwitchDefault>Error!</strong>\n            </span>\n            \n             {{ mensagem.texto }}\n         </div> -->\n        <h2>To do</h2>\n        <nav class=\"all-view-delete\">\n            <a type=\"button\" [routerLink]=\"['all', 'todo']\"><i class=\"fa fa-tasks\"></i></a>\n            <a type=\"button\" (click)=\"deleteAll('1')\"><i class=\"fa fa-trash-alt\"></i></a>\n        </nav>\n        <div class=\"todo\" [dragula]='\"second-bag\"'>\n          \n          <div class=\"card-to\" *ngFor=\"let task of filterTaskOfState('1')\"  [style.backgroundColor]=\"task.color\" title=\"{{ task.id }}\">\n            <fa name=\"times\" (click)=\"delete(task)\"></fa>\n            <a [routerLink]=\"['/tasks/detail', task.id]\" ><p>{{ task.tarefa }}</p></a>\n          </div>\n       \n        </div>\n        <h2>Doing</h2>\n        <nav class=\"all-view-delete\">\n            <a type=\"button\" [routerLink]=\"['all', 'doing']\"><i class=\"fa fa-tasks\"></i></a>\n            <a type=\"button\" (click)=\"deleteAll('2')\"><i class=\"fa fa-trash-alt\"></i></a>\n        </nav>\n        <div class=\"doing\" [dragula]='\"second-bag\"' >\n            \n          <div class=\"card-doing\" *ngFor=\"let task of filterTaskOfState('2')\" \n          [style.backgroundColor]=\"task.color\"\n          title=\"{{ task.id }}\"\n          >\n            <fa name=\"times\" (click)=\"delete(task)\"></fa>\n            <a [routerLink]=\"['/tasks/detail', task.id]\" ><p>{{ task.tarefa }}</p></a>\n          </div>\n        </div>\n        <h2>Done</h2>\n        <nav class=\"all-view-delete\">\n            <a type=\"button\" [routerLink]=\"['all', 'done']\"><i class=\"fa fa-tasks\"></i></a>\n            <a type=\"button\" (click)=\"deleteAll('3')\"><i class=\"fa fa-trash-alt\"></i></a>\n        </nav>\n        <div class=\"done\" [dragula]='\"second-bag\"' >\n            \n          <div class=\"card-done\" *ngFor=\"let task of filterTaskOfState('3')\" [style.backgroundColor]=\"task.color\" title=\"{{ task.id }}\">\n            <fa name=\"times\" (click)=\"delete(task)\"></fa>\n            <a [routerLink]=\"['/tasks/detail', task.id]\"><p>{{ task.tarefa }}</p></a>\n          </div>\n        </div>\n    </div>\n   \n  </div> \n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/task-list/task-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = /** @class */ (function () {
    // tasks: Task[] = [
    //   {id:1, tarefa:'Tarefa A', descricao:'Realizar Tarefa A', color:'rgba(16, 134, 75, 0.575)', state: 1},
    //   {id:2, tarefa:'Tarefa B', descricao:'Realizar Tarefa B', color:'rgba(16, 134, 75, 0.575)', state: 1},
    //   {id:3, tarefa:'Tarefa C', descricao:'Realizar Tarefa C', color:'rgba(118, 7, 161, 0.651)', state: 2},
    //   {id:4, tarefa:'Tarefa D', descricao:'Realizar Tarefa D', color:'rgba(14, 98, 167, 0.801)', state: 3},
    //   {id:5, tarefa:'Tarefa E', descricao:'Realizar Tarefa E', color:'rgba(118, 7, 161, 0.651)', state: 3},
    //   {id:6, tarefa:'Tarefa F', descricao:'Realizar Tarefa F', color:'rgba(14, 98, 167, 0.801)', state: 1},
    // ];
    function TaskListComponent(dragulaService, taskService) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.taskService = taskService;
        this.msg = '';
        dragulaService.drag.subscribe(function (value) {
            _this.onDrag(value.slice(1));
        });
        dragulaService.drop.subscribe(function (value) {
            _this.onDrop(value.slice(1));
        });
        dragulaService.over.subscribe(function (value) {
            _this.onOver(value.slice(1));
        });
        dragulaService.out.subscribe(function (value) {
            _this.onOut(value.slice(1));
        });
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dragulaService
            .drag
            .subscribe(function (value) {
            _this.msg = "Dragging the " + value[1].innerText + "!";
        });
        this.dragulaService
            .drop
            .subscribe(function (value) {
            _this.msg = "Dropped the " + value[1].innerText + "!";
            setTimeout(function () {
                _this.msg = '';
            }, 1000);
        });
        this.getTasks();
    };
    TaskListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) { return _this.tasks = tasks; });
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.taskSelected = task;
    };
    TaskListComponent.prototype.delete = function (task) {
        this.tasks = this.tasks.filter(function (t) { return t !== task; });
        this.taskService.deleteTask(task).subscribe();
    };
    TaskListComponent.prototype.hasClass = function (el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    };
    TaskListComponent.prototype.addClass = function (el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
        console.log(name);
        console.log(el);
    };
    TaskListComponent.prototype.removeClass = function (el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    };
    TaskListComponent.prototype.onDrag = function (args) {
        var e = args[0], el = args[1];
        this.removeClass(e, 'ex-moved');
    };
    TaskListComponent.prototype.onDrop = function (args) {
        var _this = this;
        var e = args[0], el = args[1];
        this.addClass(e, 'ex-moved');
        console.log({ args: args });
        console.log(args[2].classList.value);
        var id = +args[0].title;
        if (args[2].classList.value == 'done' && args[1].classList.value != 'done') {
            console.log(+args[0].title);
            this.taskService.getTask(id).subscribe(function (task) {
                task.state = (args[1].classList.value == 'doing') ? 2 : 1;
                _this.taskService.updateTask(task).subscribe();
            });
        }
        if (args[2].classList.value == 'doing' && args[1].classList.value != 'doing') {
            console.log(+args[0].title);
            this.taskService.getTask(id).subscribe(function (task) {
                task.state = (args[1].classList.value == 'todo') ? 1 : 3;
                _this.taskService.updateTask(task).subscribe();
            });
        }
        if (args[2].classList.value == 'todo' && args[1].classList.value != 'todo') {
            console.log(+args[0].title);
            this.taskService.getTask(id).subscribe(function (task) {
                task.state = (args[1].classList.value == 'doing') ? 2 : 3;
                _this.taskService.updateTask(task).subscribe();
            });
        }
    };
    TaskListComponent.prototype.onOver = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.addClass(el, 'ex-over');
    };
    TaskListComponent.prototype.onOut = function (args) {
        var e = args[0], el = args[1], container = args[2];
        this.removeClass(el, 'ex-over');
    };
    TaskListComponent.prototype.filterTaskOfState = function (s) {
        var task = this.tasks.filter(function (t) { return t.state == +s; });
        // console.log(task);
        return task;
    };
    TaskListComponent.prototype.deleteAll = function (s) {
        var _this = this;
        this.tasks.forEach(function (t) {
            if (t.state === +s) {
                _this.delete(t);
            }
        });
    };
    TaskListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__("../../../../../src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-list/task-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_dragula_ng2_dragula__["DragulaService"],
            __WEBPACK_IMPORTED_MODULE_2__task_service__["a" /* TaskService */]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-login/task-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.form {\n    -ms-flex-item-align: center;\n        align-self: center;\n    border: 1px solid transparent;\n    background-color: rgba(216, 214, 214, 0.589);\n    padding: 80px 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 100px 0;\n    width: 30%;\n    border-radius: 2px;\n}\nform{\n    margin-top: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.form-control {\n    padding: 12px 7px;\n    width: 100%;\n    border: 1px solid rgb(185, 184, 184);\n    margin: 10px auto;\n    border-left: 0;\n    border-top:0;\n    border-right: 0;\n    background-color:rgba(216, 214, 214, 0.589);\n    font-size: 1.2rem;\n}\n.form-control:focus {\n    border-color: red;\n}\n.form-group {\n    margin: 10px 0;\n    width: 100%;\n}\nbutton {\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    padding: 12px 20px;\n    font-size: 0.9rem;\n    font-weight: bolder;\n    color: white;\n    background-color: rgb(67, 67, 255);\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\nlabel, h2 {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.2rem;\n    \n}\nh2 {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 1.8rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-login/task-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"form\">\n      <h2>Login</h2>\n      <form action=\"/login\" method=\"GET\" id=\"login\">\n          <div class=\"form-group\">\n            <label for=\"nome\">Nome</label>\n            <input type=\"text\" class=\"form-control\" ng-model=\"nome\" id=\"nome\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Senha</label>\n            <input type=\"password\" class=\"form-control\" ng-model=\"password\" id=\"password\">\n          </div>\n\t <input value=\"Entrar\" type=\"submit\"/>          \n        </form>\n\t<button type=\"submit\" form=\"login\">Entrar</button>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/task-login/task-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TaskLoginComponent = /** @class */ (function () {
    function TaskLoginComponent() {
    }
    TaskLoginComponent.prototype.ngOnInit = function () {
    };
    TaskLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-login',
            template: __webpack_require__("../../../../../src/app/task-login/task-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-login/task-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskLoginComponent);
    return TaskLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task-search/task-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul{\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task-search/task-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n            <h3>Busca</h3>\n            <div class=\"form-group\">\n                <label for=\"\"></label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter your ask\" \n                    [ngModel]=\"busca\" (ngModelChange)=\"search($event)\"\n                >\n            </div>\n            <ul class=\"list-group\">\n                <li class=\"list-group-item cursor-pointer\" *ngFor=\"let t of task | async\" (click)=\"verDetalhe(t)\">{{ t.tarefa }}</li>\n            </ul>\n"

/***/ }),

/***/ "../../../../../src/app/task-search/task-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskSearchComponent = /** @class */ (function () {
    function TaskSearchComponent(taskService, router) {
        this.taskService = taskService;
        this.router = router;
        this.buscaChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.termosDaBusca = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
    }
    TaskSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tasks = this.termosDaBusca
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.taskService.search(term) : __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of([]); })
            .catch(function (err) {
            console.log(err);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of([]);
        });
        this.getTasks();
    };
    TaskSearchComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks()
            .subscribe(function (tasks) { return _this.task = tasks; });
    };
    TaskSearchComponent.prototype.ngOnChanges = function (changes) {
        var busca = changes['busca'];
        console.log(busca);
        this.search(busca.currentValue);
    };
    TaskSearchComponent.prototype.search = function (termo) {
        console.log(termo);
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    };
    TaskSearchComponent.prototype.verDetalhe = function (task) {
        var link = ['tarefa/save', task.id];
        this.router.navigate(link);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TaskSearchComponent.prototype, "busca", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TaskSearchComponent.prototype, "buscaChange", void 0);
    TaskSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-task-search',
            template: __webpack_require__("../../../../../src/app/task-search/task-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task-search/task-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], TaskSearchComponent);
    return TaskSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var TaskService = /** @class */ (function () {
    function TaskService(http
        //private messageService: MessageService
    ) {
        this.http = http;
        this.tasksUrl = "api/tasks";
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get(this.tasksUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('getTasks', [])));
    };
    TaskService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    TaskService.prototype.getTask = function (id) {
        var url = this.tasksUrl + "/" + id;
        return this.http.get(url).pipe(
        //tap(_ => this.log(`fetched task id=${id}`)),
        Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError("getTask id=" + id)));
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.put(this.tasksUrl, task, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('updateTask')));
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post(this.tasksUrl, task, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('addTask')));
    };
    TaskService.prototype.deleteTask = function (task) {
        var id = typeof task === 'number' ? task : task.id;
        var url = this.tasksUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError('deleteTask')));
    };
    TaskService.prototype.search = function (term) {
        console.log(term + " away");
        return this.http
            .get(this.tasksUrl + "/?tarefa=" + term)
            .map(function (res) { return res.json().data; });
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]
            //private messageService: MessageService
        ])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 80%;\n    margin: 0 auto;\n}\n.todo, .doing, .done{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    margin: 10px;\n    padding: 20px 0;\n}\n.todo{\n    background-color: aqua;\n}\n.doing{\n    background-color: blueviolet;\n}\n.done{\n    background-color: rgb(45, 135, 209);\n}\n[class*=\"card-\"]{\n    background-color: white;\n    padding: 50px 91px;\n    margin: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));
var platform = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
