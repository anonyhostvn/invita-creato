(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/LongNH/Workspace/invita-creto/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "38it":
    /*!**************************************************************************!*\
      !*** ./src/app/pages/invitation-creator/invitation-creator.component.ts ***!
      \**************************************************************************/

    /*! exports provided: InvitationCreatorComponent */

    /***/
    function it(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationCreatorComponent", function () {
        return InvitationCreatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invitation_creator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invitation-creator.component.html */
      "uROP");
      /* harmony import */


      var _invitation_creator_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invitation-creator.component.css */
      "WYjl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _htmlContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./htmlContent */
      "Yg4E");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var html_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! html-to-image */
      "53SV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_template_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/template.service */
      "dBhf");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_document_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../services/document.service */
      "V9dR");

      var InvitationCreatorComponent = /*#__PURE__*/function () {
        function InvitationCreatorComponent(sanitizer, formBuilder, templateService, documentService, route, router) {
          var _this = this;

          _classCallCheck(this, InvitationCreatorComponent);

          this.sanitizer = sanitizer;
          this.formBuilder = formBuilder;
          this.templateService = templateService;
          this.documentService = documentService;
          this.route = route;
          this.router = router;
          this.content = null;
          this.recentTemplate = {};
          this.listTemplate = this.templateService.getAllTemplate();
          this.documentName = '';
          this.recentDocument = {};
          this.isNew = true;
          this.isLoading = false;
          this.informationForm = this.formBuilder.group({
            name: '',
            position: '',
            gender: _htmlContent__WEBPACK_IMPORTED_MODULE_4__["GENDER_TYPE"].MALE,
            ctsRepresent: '',
            formOfExchange: '',
            place: '',
            time: '',
            attentionInfo: '',
            supportPerson: ''
          });

          this.ngOnSave = function () {
            if (_this.isNew) {
              var newDocument = {
                documentName: _this.documentName,
                templateId: _this.recentTemplate.id,
                filledInformation: JSON.stringify(_this.informationForm.value)
              };
              _this.isLoading = true;

              _this.documentService.createDocument(newDocument).subscribe(function (response) {
                _this.isLoading = false;
                console.log(response);

                _this.router.navigate(['/document-management']).then(function (e) {
                  console.log(e);
                });
              }, function (error) {
                _this.isLoading = false;
                console.log(error);
              });
            } else {
              var _newDocument = Object.assign(Object.assign({}, _this.recentDocument), {
                filledInformation: JSON.stringify(_this.informationForm.value),
                documentName: _this.documentName
              });

              _this.isLoading = true;

              _this.documentService.saveDocument(_this.recentDocument.id, _newDocument).subscribe(function (response) {
                _this.isLoading = false;
                console.log(response);
              });
            }
          };

          this.ngChangeTemplate = function () {
            _this.content = _this.sanitizer.bypassSecurityTrustHtml(Object(_htmlContent__WEBPACK_IMPORTED_MODULE_4__["content"])({// name: 'Nguyễn Hoàng Hiếu',
              // position: 'Cán bộ kinh doanh',
              // gender: GENDER_TYPE.MALE,
              // ctsRepresent: ['Mr NHL', 'Mr DMD'],
              // formOfExchange: 'Trao đổi gián tiếp',
              // place: 'CTS',
              // time: '4:50 AM, thứ ba - ngày 28/04/1970',
              // attentionInfo: [ 'Mang theo CMTND để checkin tại lễ tân tòa nhà', 'Chỗ gửi xe phía sau tòa nhà', 'Giữ bình tĩnh'],
              // supportPerson: 'SĐT: 0962.456.194 (Ms. My)'
            }, _this.recentTemplate.templateContent));
          };
        }

        _createClass(InvitationCreatorComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            var value = this.informationForm.value;
            this.content = this.sanitizer.bypassSecurityTrustHtml(Object(_htmlContent__WEBPACK_IMPORTED_MODULE_4__["content"])(Object.assign(Object.assign({}, value), {
              ctsRepresent: value.ctsRepresent ? value.ctsRepresent.split(',') : undefined,
              attentionInfo: value.attentionInfo ? value.attentionInfo.split(',') : undefined
            }), this.recentTemplate.templateContent));
          }
        }, {
          key: "exportAsPDF",
          value: function exportAsPDF(div_id) {
            var data = document.getElementById(div_id);
            html_to_image__WEBPACK_IMPORTED_MODULE_6__["toPng"](data, {
              pixelRatio: 1,
              quality: 1
            }).then(function (contentDataURL) {
              var link = document.createElement('a');
              link.download = 'name';
              link.target = '_blank';
              link.href = contentDataURL;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var paramMap = this.route.snapshot.paramMap;
            var documentId = paramMap.get('id');

            if (documentId !== 'new') {
              this.isNew = null;
              this.documentService.getSingleDocument(documentId).subscribe(function (singleDocument) {
                _this2.recentDocument = singleDocument;

                _this2.listTemplate.subscribe(function (data) {
                  _this2.recentTemplate = data.filter(function (listTemplate) {
                    return listTemplate.id === singleDocument.templateId;
                  })[0];

                  _this2.ngChangeTemplate();

                  _this2.informationForm = _this2.formBuilder.group(JSON.parse(singleDocument.filledInformation));

                  _this2.onSubmit();
                });

                _this2.documentName = singleDocument.documentName;
              });
            }
          }
        }]);

        return InvitationCreatorComponent;
      }();

      InvitationCreatorComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: _services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"]
        }, {
          type: _services_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      InvitationCreatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invitation-creator',
        template: _raw_loader_invitation_creator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invitation_creator_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _services_template_service__WEBPACK_IMPORTED_MODULE_8__["TemplateService"], _services_document_service__WEBPACK_IMPORTED_MODULE_10__["DocumentService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], InvitationCreatorComponent);
      /***/
    },

    /***/
    "47Jg":
    /*!**********************************************!*\
      !*** ./src/app/sidebar/sidebar.component.ts ***!
      \**********************************************/

    /*! exports provided: ROUTES, SidebarComponent */

    /***/
    function Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
        return ROUTES;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "zvoc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ROUTES = [{
        path: '/document-management',
        title: 'Documents',
        icon: 'nc-paper',
        "class": ''
      }];

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent() {
          _classCallCheck(this, SidebarComponent);
        }

        _createClass(SidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.menuItems = ROUTES.filter(function (menuItem) {
              return menuItem;
            });
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'sidebar-cmp',
        template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], SidebarComponent);
      /***/
    },

    /***/
    "550G":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "5My1":
    /*!**********************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
      \**********************************************************/

    /*! exports provided: FixedPluginModule */

    /***/
    function My1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
        return FixedPluginModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fixedplugin.component */
      "Pqk8");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var FixedPluginModule = function FixedPluginModule() {
        _classCallCheck(this, FixedPluginModule);
      };

      FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
        exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
      })], FixedPluginModule);
      /***/
    },

    /***/
    "A3xY":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function A3xY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "AK6u":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AK6u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "CpO+":
    /*!************************************************!*\
      !*** ./src/app/shared/navbar/navbar.module.ts ***!
      \************************************************/

    /*! exports provided: NavbarModule */

    /***/
    function CpO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
        return NavbarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./navbar.component */
      "EtQq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavbarModule = function NavbarModule() {
        _classCallCheck(this, NavbarModule);
      };

      NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
        declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
        exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
      })], NavbarModule);
      /***/
    },

    /***/
    "EtQq":
    /*!***************************************************!*\
      !*** ./src/app/shared/navbar/navbar.component.ts ***!
      \***************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function EtQq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "zRkE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../sidebar/sidebar.component */
      "47Jg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(location, renderer, element, router) {
          _classCallCheck(this, NavbarComponent);

          this.renderer = renderer;
          this.element = element;
          this.router = router;
          this.isCollapsed = true;
          this.location = location;
          this.nativeElement = element.nativeElement;
          this.sidebarVisible = false;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) {
              return listTitle;
            });
            var navbar = this.element.nativeElement;
            this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
            this.router.events.subscribe(function (event) {
              _this3.sidebarClose();
            });
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var titlee = this.location.prepareExternalUrl(this.location.path());

            if (titlee.charAt(0) === '#') {
              titlee = titlee.slice(1);
            }

            for (var item = 0; item < this.listTitles.length; item++) {
              if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
              }
            }

            return 'Dashboard';
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            if (this.sidebarVisible === false) {
              this.sidebarOpen();
            } else {
              this.sidebarClose();
            }
          }
        }, {
          key: "sidebarOpen",
          value: function sidebarOpen() {
            var toggleButton = this.toggleButton;
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];
            setTimeout(function () {
              toggleButton.classList.add('toggled');
            }, 500);
            html.classList.add('nav-open');

            if (window.innerWidth < 991) {
              mainPanel.style.position = 'fixed';
            }

            this.sidebarVisible = true;
          }
        }, {
          key: "sidebarClose",
          value: function sidebarClose() {
            var html = document.getElementsByTagName('html')[0];
            var mainPanel = document.getElementsByClassName('main-panel')[0];

            if (window.innerWidth < 991) {
              setTimeout(function () {
                mainPanel.style.position = '';
              }, 500);
            }

            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            html.classList.remove('nav-open');
          }
        }, {
          key: "collapse",
          value: function collapse() {
            this.isCollapsed = !this.isCollapsed;
            var navbar = document.getElementsByTagName('nav')[0];
            console.log(navbar);

            if (!this.isCollapsed) {
              navbar.classList.remove('navbar-transparent');
              navbar.classList.add('bg-white');
            } else {
              navbar.classList.add('navbar-transparent');
              navbar.classList.remove('bg-white');
            }
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      NavbarComponent.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["navbar-cmp", {
            "static": false
          }]
        }]
      };
      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'navbar-cmp',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], NavbarComponent);
      /***/
    },

    /***/
    "P6kD":
    /*!****************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
      \****************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function P6kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "AK6u");
      /* harmony import */


      var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin-layout.component.scss */
      "vtrx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent() {
          _classCallCheck(this, AdminLayoutComponent);
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-layout',
        template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AdminLayoutComponent);
      /***/
    },

    /***/
    "Pqk8":
    /*!*************************************************************!*\
      !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
      \*************************************************************/

    /*! exports provided: FixedPluginComponent */

    /***/
    function Pqk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
        return FixedPluginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "550G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FixedPluginComponent = /*#__PURE__*/function () {
        function FixedPluginComponent() {
          _classCallCheck(this, FixedPluginComponent);

          this.sidebarColor = "white";
          this.sidebarActiveColor = "danger";
          this.state = true;
        }

        _createClass(FixedPluginComponent, [{
          key: "changeSidebarColor",
          value: function changeSidebarColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-color', color);
            }
          }
        }, {
          key: "changeSidebarActiveColor",
          value: function changeSidebarActiveColor(color) {
            var sidebar = document.querySelector('.sidebar');
            this.sidebarActiveColor = color;

            if (sidebar != undefined) {
              sidebar.setAttribute('data-active-color', color);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FixedPluginComponent;
      }();

      FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'fixedplugin-cmp',
        template: _raw_loader_fixedplugin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FixedPluginComponent);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.css */
      "A3xY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "V9dR":
    /*!**********************************************!*\
      !*** ./src/app/services/document.service.ts ***!
      \**********************************************/

    /*! exports provided: DocumentService */

    /***/
    function V9dR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
        return DocumentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant/called-service.const */
      "tSxX");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DocumentService = function DocumentService(http) {
        var _this4 = this;

        _classCallCheck(this, DocumentService);

        this.http = http;

        this.getAllDocuments = function () {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllDocumentEndpoint"]);
          return _this4.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('listDocument'));
        };

        this.createDocument = function (document) {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllDocumentEndpoint"]);
          return _this4.http.post(url, Object.assign({}, document)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
        };

        this.deleteDocument = function (id) {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllDocumentEndpoint"], "/").concat(id);
          return _this4.http["delete"](url);
        };

        this.getSingleDocument = function (id) {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllDocumentEndpoint"], "/").concat(id);
          return _this4.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'));
        };

        this.saveDocument = function (id, document) {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllDocumentEndpoint"], "/").concat(id);
          return _this4.http.put(url, Object.assign({}, document));
        };
      };

      DocumentService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      DocumentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DocumentService);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "WB/I":
    /*!********************************************************************************!*\
      !*** ./src/app/components/invitation-filling/invitation-filling.component.css ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function WBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52aXRhdGlvbi1maWxsaW5nL2ludml0YXRpb24tZmlsbGluZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "WYjl":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/invitation-creator/invitation-creator.component.css ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function WYjl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".document-card-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW52aXRhdGlvbi1jcmVhdG9yL2ludml0YXRpb24tY3JlYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbnZpdGF0aW9uLWNyZWF0b3IvaW52aXRhdGlvbi1jcmVhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQtY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Xxro":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/invitation-filling/invitation-filling.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: InvitationFillingComponent */

    /***/
    function Xxro(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationFillingComponent", function () {
        return InvitationFillingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invitation_filling_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invitation-filling.component.html */
      "fkaU");
      /* harmony import */


      var _invitation_filling_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invitation-filling.component.css */
      "WB/I");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InvitationFillingComponent = /*#__PURE__*/function () {
        function InvitationFillingComponent() {
          _classCallCheck(this, InvitationFillingComponent);
        }

        _createClass(InvitationFillingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvitationFillingComponent;
      }();

      InvitationFillingComponent.ctorParameters = function () {
        return [];
      };

      InvitationFillingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invitation-filling',
        template: _raw_loader_invitation_filling_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invitation_filling_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InvitationFillingComponent);
      /***/
    },

    /***/
    "Yg4E":
    /*!*********************************************************!*\
      !*** ./src/app/pages/invitation-creator/htmlContent.ts ***!
      \*********************************************************/

    /*! exports provided: styleC, GENDER_TYPE, content */

    /***/
    function Yg4E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "styleC", function () {
        return styleC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GENDER_TYPE", function () {
        return GENDER_TYPE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "content", function () {
        return content;
      });
      /* harmony import */


      var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! mustache */
      "nbsC");
      /* harmony import */


      var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);

      var styleC = {
        width: '1000px'
      };
      var GENDER_TYPE;

      (function (GENDER_TYPE) {
        GENDER_TYPE[GENDER_TYPE["MALE"] = 0] = "MALE";
        GENDER_TYPE[GENDER_TYPE["FEMALE"] = 1] = "FEMALE";
      })(GENDER_TYPE || (GENDER_TYPE = {}));

      var content = function content(input, template) {
        var gender = input.gender;
        var reInput = Object.assign(Object.assign({}, input), {
          vocative: gender === GENDER_TYPE.MALE ? 'anh' : 'chị',
          upperCaseVocative: gender === GENDER_TYPE.MALE ? 'Anh' : 'Chị'
        });
        return Object(mustache__WEBPACK_IMPORTED_MODULE_0__["render"])(template, reInput);
      };
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar/sidebar.module */
      "wCP4");
      /* harmony import */


      var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/footer/footer.module */
      "cNqA");
      /* harmony import */


      var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/navbar/navbar.module */
      "CpO+");
      /* harmony import */


      var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/fixedplugin/fixedplugin.module */
      "5My1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");
      /* harmony import */


      var _components_invitation_filling_invitation_filling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/invitation-filling/invitation-filling.component */
      "Xxro");
      /* harmony import */


      var _pages_invitation_creator_invitation_creator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pages/invitation-creator/invitation-creator.component */
      "38it");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _pages_document_management_document_management_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./pages/document-management/document-management.component */
      "xrMj");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__["AdminLayoutComponent"], _components_invitation_filling_invitation_filling_component__WEBPACK_IMPORTED_MODULE_11__["InvitationFillingComponent"], _pages_invitation_creator_invitation_creator_component__WEBPACK_IMPORTED_MODULE_12__["InvitationCreatorComponent"], _pages_document_management_document_management_component__WEBPACK_IMPORTED_MODULE_16__["DocumentManagementComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutes"], {
          useHash: true
        }), _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_7__["FixedPluginModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: AppRoutes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "P6kD");

      var AppRoutes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [{
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
      }, {
        path: '**',
        redirectTo: 'dashboard'
      }];
      /***/
    },

    /***/
    "cNqA":
    /*!************************************************!*\
      !*** ./src/app/shared/footer/footer.module.ts ***!
      \************************************************/

    /*! exports provided: FooterModule */

    /***/
    function cNqA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
        return FooterModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer.component */
      "jQpT");

      var FooterModule = function FooterModule() {
        _classCallCheck(this, FooterModule);
      };

      FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
        exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
      })], FooterModule);
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports, __webpack_require__) {
      var map = {
        "./layouts/admin-layout/admin-layout.module": ["IqXj", "layouts-admin-layout-admin-layout-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "crnd";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "dBhf":
    /*!**********************************************!*\
      !*** ./src/app/services/template.service.ts ***!
      \**********************************************/

    /*! exports provided: TemplateService */

    /***/
    function dBhf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateService", function () {
        return TemplateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../constant/called-service.const */
      "tSxX");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TemplateService = function TemplateService(http) {
        var _this5 = this;

        _classCallCheck(this, TemplateService);

        this.http = http;

        this.getAllTemplate = function () {
          var url = "".concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["host"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["externalContext"]).concat(_constant_called_service_const__WEBPACK_IMPORTED_MODULE_3__["getAllTemplateEndpoint"]);
          return _this5.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('data'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('listTemplate'));
        };
      };

      TemplateService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      TemplateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TemplateService);
      /***/
    },

    /***/
    "fkaU":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/invitation-filling/invitation-filling.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fkaU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>invitation-filling works!</p>\n";
      /***/
    },

    /***/
    "hzBs":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/document-management/document-management.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function hzBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\"> Documents Manager </h4>\n    </div>\n    <a class=\"btn btn-primary col-2\" style=\"margin-left: 20px\" [routerLink]=\"['/document-management', 'new']\">\n        <i class=\"fas fa-plus-square\"></i>\n        Create Document\n    </a>\n\n    <div class=\"card-body\">\n        <div class=\"table-responsive\">\n            <table class=\"table\">\n                <thead class=\" text-primary\">\n                <th>\n                    Document Name\n                </th>\n                <th>\n                    Template Name\n                </th>\n                <th>\n                    Note\n                </th>\n                <th>\n                    Actions\n                </th>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let document of listDocument | async\">\n                    <td>\n                        {{document.documentName}}\n                    </td>\n                    <td>\n                        {{document.templateId}}\n                    </td>\n                    <td>\n                        {{document.note }}\n                    </td>\n                    <td>\n                        <div class=\"row\">\n                            <a class=\"btn btn-primary col-4\" [routerLink]=\"['/document-management', document.id]\">\n                                <i class=\"far fa-edit\"></i>\n                                Edit\n                            </a>\n                            <div class=\"col-1\"></div>\n                            <a class=\"btn btn-warning col-4\" (click)=\"ngOnDeleteDocument(document.id)\">\n                                <i class=\"fas fa-trash-alt\"></i>\n                                Delete\n                            </a>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "jGP6":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function jGP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n";
      /***/
    },

    /***/
    "jQpT":
    /*!***************************************************!*\
      !*** ./src/app/shared/footer/footer.component.ts ***!
      \***************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function jQpT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./footer.component.html */
      "jGP6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      };

      FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'footer-cmp',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], FooterComponent);
      /***/
    },

    /***/
    "tSxX":
    /*!**************************************************!*\
      !*** ./src/app/constant/called-service.const.ts ***!
      \**************************************************/

    /*! exports provided: host, externalContext, addTemplateEndpoint, getAllTemplateEndpoint, getAllDocumentEndpoint */

    /***/
    function tSxX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "host", function () {
        return host;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "externalContext", function () {
        return externalContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "addTemplateEndpoint", function () {
        return addTemplateEndpoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllTemplateEndpoint", function () {
        return getAllTemplateEndpoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllDocumentEndpoint", function () {
        return getAllDocumentEndpoint;
      });

      var host = 'http://localhost:8080';
      var externalContext = '/external';
      var addTemplateEndpoint = '/template/add';
      var getAllTemplateEndpoint = '/template';
      var getAllDocumentEndpoint = '/document';
      /***/
    },

    /***/
    "uROP":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invitation-creator/invitation-creator.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uROP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\"> Choose template </h4>\n    </div>\n    <div class=\"card-body\">\n        <form>\n            <div class=\"row\">\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"choosing-template\"> Choosing Your Template </label>\n                        <select\n                                [(ngModel)]=\"recentTemplate\"\n                                (ngModelChange)=\"ngChangeTemplate()\" class=\"custom-select\"\n                                id=\"choosing-template\" [disabled]=\"!isNew\"\n                                [ngModelOptions]=\"{standalone: true}\"\n                        >\n                            <option [value]=\"null\">\n                                ---\n                            </option>\n                            <option *ngFor=\"let template of listTemplate | async\" [ngValue]=\"template\">\n                                {{template.templateName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"template-name\"> Document Name </label>\n                        <input type=\"text\" class=\"form-control\" id=\"template-name\" [(ngModel)]=\"documentName\"\n                               [ngModelOptions]=\"{standalone: true}\"/>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"card\">\n    <div class=\"card-header\">\n        <h4 class=\"card-title\"> Filling Information </h4>\n    </div>\n    <div class=\"card-body document-card-container\">\n\n        <form [formGroup]=\"informationForm\">\n            <div class=\"row\">\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"inviter-name\">Invited Person Name</label>\n                        <input id=\"inviter-name\" type=\"text\" class=\"form-control\" placeholder=\"Name\"\n                               formControlName=\"name\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"invited-position\">Invited Position</label>\n                        <input id=\"invited-position\" type=\"text\" class=\"form-control\" placeholder=\"Position\"\n                               formControlName=\"position\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"inviter-gender\"> Gender </label>\n                        <select id=\"inviter-gender\" class=\"form-control\" formControlName=\"gender\">\n                            <option value=\"0\"> Male</option>\n                            <option value=\"1\"> Female</option>\n                        </select>\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"form-exchange\"> Form of Meeting </label>\n                        <input id=\"form-exchange\" type=\"text\" class=\"form-control\" placeholder=\"Form of Exchange\"\n                               formControlName=\"formOfExchange\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"meeting-place\"> Place of Meeting </label>\n                        <input id=\"meeting-place\" type=\"text\" class=\"form-control\" placeholder=\"Place of Meeting\"\n                               formControlName=\"place\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"meeting-time\"> Meeting Time </label>\n                        <input id=\"meeting-time\" type=\"text\" class=\"form-control\" placeholder=\"Time\"\n                               formControlName=\"time\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"support-person\"> Support Person </label>\n                        <input id=\"support-person\" type=\"text\" class=\"form-control\" placeholder=\"Support Person\"\n                               formControlName=\"supportPerson\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"cts-represent\"> Cts Represent </label>\n                        <input id=\"cts-represent\" type=\"text\" class=\"form-control\" placeholder=\"Cts Represent\"\n                               formControlName=\"ctsRepresent\">\n                    </div>\n                </div>\n\n                <div class=\"col-md-5 pr-1\">\n                    <div class=\"form-group\">\n                        <label for=\"attention-information\"> Attention Information </label>\n                        <input id=\"attention-information\" type=\"text\" class=\"form-control\"\n                               placeholder=\"Attention Information\" formControlName=\"attentionInfo\">\n                    </div>\n                </div>\n\n\n                <div class=\"col-md-12 pr-1\">\n                    <a class=\"btn btn-primary\" [routerLink]=\"['/document-management']\">\n                        <i class=\"fa fa-backward\"></i>\n                        Back\n                    </a>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">\n                        <i class=\"fa fa-cogs\"></i>\n                        Generate\n                    </button>\n                    <button\n                            class=\"btn btn-primary\"\n                            (click)=\"exportAsPDF('document-invitation');\"\n                            style=\"width: 200px\"\n                    >\n                        <i class=\"fa fa-download\"></i>\n                        Download\n                    </button>\n                    <button\n                            type=\"button\" class=\"btn btn-secondary\"\n                            (click)=\"ngOnSave()\"\n                            [disabled]=\"isLoading\"\n                    >\n                        <i *ngIf=\"isLoading\" class='fa fa-spinner fa-spin '></i>\n                        <i *ngIf=\"!isLoading\" class=\"fa fa-save\"></i>\n                        Save\n                    </button>\n                </div>\n\n            </div>\n        </form>\n        <div *ngIf=\"content\" [innerHTML]=\"content\" id=\"document-invitation\"></div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "vtrx":
    /*!******************************************************************!*\
      !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function vtrx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wCP4":
    /*!*******************************************!*\
      !*** ./src/app/sidebar/sidebar.module.ts ***!
      \*******************************************/

    /*! exports provided: SidebarModule */

    /***/
    function wCP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
        return SidebarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sidebar.component */
      "47Jg");

      var SidebarModule = function SidebarModule() {
        _classCallCheck(this, SidebarModule);
      };

      SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
        exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
      })], SidebarModule);
      /***/
    },

    /***/
    "xrMj":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/document-management/document-management.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DocumentManagementComponent */

    /***/
    function xrMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentManagementComponent", function () {
        return DocumentManagementComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_document_management_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./document-management.component.html */
      "hzBs");
      /* harmony import */


      var _document_management_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./document-management.component.css */
      "yCle");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/document.service */
      "V9dR");

      var DocumentManagementComponent = /*#__PURE__*/function () {
        function DocumentManagementComponent(documentService) {
          var _this6 = this;

          _classCallCheck(this, DocumentManagementComponent);

          this.documentService = documentService;
          this.listDocument = this.documentService.getAllDocuments();
          this.isLoading = false;

          this.ngOnDeleteDocument = function (id) {
            _this6.isLoading = true;

            _this6.documentService.deleteDocument(id).subscribe(function (response) {
              _this6.isLoading = false;
              _this6.listDocument = _this6.documentService.getAllDocuments();
            }, function (err) {
              _this6.isLoading = false;
            });
          };
        }

        _createClass(DocumentManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DocumentManagementComponent;
      }();

      DocumentManagementComponent.ctorParameters = function () {
        return [{
          type: _services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
        }];
      };

      DocumentManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-document-management',
        template: _raw_loader_document_management_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_document_management_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]])], DocumentManagementComponent);
      /***/
    },

    /***/
    "yCle":
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/document-management/document-management.component.css ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function yCle(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3VtZW50LW1hbmFnZW1lbnQvZG9jdW1lbnQtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "zRkE":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function zRkE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /*!
      
      =========================================================
      * Paper Dashboard Angular - v2.1.0
      =========================================================
      
      * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
      * Copyright 2019 Creative Tim (https://www.creative-tim.com)
      * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
      
      * Coded by Creative Tim
      
      =========================================================
      
      * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
      /***/
    },

    /***/
    "zvoc":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function zvoc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/angular2-logo.png\">\n      </div>\n    </a>\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n      Creative Tim\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map