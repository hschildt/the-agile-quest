(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkthe_data_imperative_game"] = self["webpackChunkthe_data_imperative_game"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/title-screen/title-screen.component */
      74526);
      /* harmony import */


      var _pages_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/game */
      51342);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__.TitleScreenComponent
      }, {
        path: 'start',
        component: _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_0__.TitleScreenComponent
      }, {
        path: 'game',
        component: _pages_game__WEBPACK_IMPORTED_MODULE_1__.GameComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _shared_shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/shared.service */
      77420);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      function AppComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
        }
      }

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
        }
      }

      var _AppComponent = function _AppComponent(shared) {
        var _this = this;

        _classCallCheck(this, _AppComponent);

        this.shared = shared;
        this.isLoading = true;
        this.shared.ready.subscribe(function (value) {
          _this.isLoading = !value;
        });
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 2,
        consts: [["class", "loading", 4, "ngIf"], ["class", "content", 4, "ngIf"], [1, "loading"], [1, "content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 1, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: [".loading[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 0.5rem;\n  top: calc(50vh - 0.5rem);\n  left: 25vw;\n  right: 25vw;\n  bottom: calc(50vh - 0.5rem);\n  background: linear-gradient(270deg, rgba(220, 202, 88, 0.25), #dcca58, rgba(220, 202, 88, 0.25));\n  background-size: 200% 100%;\n  background-repeat: no-repeat;\n  animation: DataFlow 2s linear reverse infinite;\n}\n@-webkit-keyframes DataFlow {\n  0% {\n    background-position: 200% 0%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n@keyframes DataFlow {\n  0% {\n    background-position: 200% 0%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQ2pLQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnR0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtBQUFGO0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFBQTtJQUNFLDBCQUFBO0VBRUY7QUFDRjtBQVBBO0VBQ0U7SUFDRSw0QkFBQTtFQUNGO0VBQUE7SUFDRSwwQkFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcblxuJGZvbnRJbmNyZW1lbnQtTTogICAxMjAlO1xuXG4kZm9udEZhbWlseS1wcmltYXJ5OiAnWWFudHJhbWFuYXYnLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogICAgIHdoaXRlO1xuJGNvbG9yLW9uUHJpbWFyeTogICBibGFjaztcbiRjb2xvci1wcmltYXJ5Qmc6ICAgYmxhY2s7XG4kY29sb3ItcHJpbWFyeUJnRmFkZWQ6ICBjb2xvci5jaGFuZ2UoJGNvbG9yLXByaW1hcnlCZywgJGFscGhhOiAwLjUpO1xuJGNvbG9yLWFjY2VudDogICAgICAjZGNjYTU4O1xuJGNvbG9yLWFjY2VudERhcmtlcjogY29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRsaWdodG5lc3M6IDQwJSk7XG4kY29sb3Itc2Vjb25kYXJ5OiAgIGNvbG9yLm1peCgkY29sb3Itb25QcmltYXJ5LCAkY29sb3ItcHJpbWFyeSwgNjAlKTtcblxuJGFscGhhLW92ZXJsYXk6IDAuODtcbiRhbHBoYS1idXR0b25CZzogMC4xNTtcbiRhbHBoYS1mYWRlZDogMC4zO1xuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNTtcblxuJGZvbnRTaXplLVhTOiAwLjcycmVtO1xuJGZvbnRTaXplLVM6ICAwLjhyZW07XG4kZm9udFNpemUtTTogIDFyZW07XG4kZm9udFNpemUtTDogIDEuMnJlbTtcbiRmb250U2l6ZS1YTDogMS41cmVtO1xuJGZvbnRTaXplLVhYTDogMy41cmVtO1xuXG4kZm9udFdlaWdodC1NOiA1MDA7XG4kZm9udFdlaWdodC1MOiA5MDA7XG5cbiRmb250U2l6ZS1pY29uTDogMzJweDtcblxuJGxpbmVIZWlnaHQtUzogMS4xO1xuJGxpbmVIZWlnaHQtTTogMS4zO1xuXG4kYm9yZGVyV2lkdGgtUzogMXB4O1xuJGJvcmRlcldpZHRoLU06IDJweDtcbiRib3JkZXJXaWR0aC1MOiAzcHg7XG5cbiRib3JkZXItUzogJGJvcmRlcldpZHRoLVMgc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLU06ICRib3JkZXJXaWR0aC1NIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuJGJvcmRlci1MOiAkYm9yZGVyV2lkdGgtTCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcblxuJGJvcmRlclJhZGl1cy1NOiA0cHg7XG4kYm9yZGVyUmFkaXVzLVhMOiAxLjVyZW07XG5cbiRib3hTaGFkb3ctTTogMCA2cHggMnB4IC00cHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuJG1hcmdpbi1YUzogIDAuMjVyZW07XG4kbWFyZ2luLVM6ICAgMC41cmVtO1xuJG1hcmdpbi1NOiAgIDFyZW07XG4kbWFyZ2luLUw6ICAgMS41cmVtO1xuJG1hcmdpbi1YTDogIDNyZW07XG4kbWFyZ2luLVhYTDogNnJlbTtcblxuJG1heFdpZHRoLVM6IDI1cmVtO1xuJG1heFdpZHRoLU06IDM4cmVtO1xuJG1heFdpZHRoLUw6IDQwcmVtO1xuJG1heFdpZHRoLVhMOiA2MHJlbTsgXG5cbiRhbmltYXRpb25FYXNpbmc6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4kYW5pbWF0aW9uRHVyYXRpb24tTTogMjI1bXM7XG4kYW5pbWF0aW9uRHVyYXRpb24tWEw6IDcwMG1zO1xuJGFuaW1hdGlvblRpbWluZy1NOiAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZy1YTDogJGFuaW1hdGlvbkR1cmF0aW9uLVhMICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcblxuJHpJbmRleC0xMDogMTAwMDtcbiR6SW5kZXgtOTogOTAwOyAvLyBQb3B1cHNcbiR6SW5kZXgtODogODAwOyAvLyBcbiR6SW5kZXgtNzogNzAwOyAvLyBcbiR6SW5kZXgtNjogNjAwOyAvLyBcbiR6SW5kZXgtNTogNTAwOyAvLyBDYXJkc1xuJHpJbmRleC00OiA0MDA7IC8vIFxuJHpJbmRleC0zOiAzMDA7IC8vIFxuJHpJbmRleC0yOiAyMDA7IC8vXG4kekluZGV4LTE6IDEwMDsgLy9cbiR6SW5kZXgtMDogMDtcblxuXG4vKiBNYXRlcmlhbCB0aGVtZSAqL1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdHlwb2dyYXBoeVxuLy8gVXNhZ2U6IEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkYXBwLXR5cG9ncmFwaHksIHRpdGxlKVxuJGFwcC10eXBvZ3JhcGh5OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICRmb250RmFtaWx5LXByaW1hcnlcbik7XG5cbi8vIEN1c3RvbSBwYWxldHRlcyBhbmQgdGhlbWVcbi8vIFNlZSBodHRwOi8vbWNnLm1iaXRzb24uY29tL1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLXByaW1hcnkgLyAjZmZmXG4kcGFsZXR0ZS1wcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICAgIDUwIDogI2ZmZmZmZixcbiAgICAxMDAgOiAjZmZmZmZmLFxuICAgIDIwMCA6ICNmZmZmZmYsXG4gICAgMzAwIDogI2ZmZmZmZixcbiAgICA0MDAgOiAjZmZmZmZmLFxuICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgNjAwIDogI2ZmZmZmZixcbiAgICA3MDAgOiAjZmZmZmZmLFxuICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgOTAwIDogI2ZmZmZmZixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZmZmZixcbiAgICBBNDAwIDogI2ZmZmZmZixcbiAgICBBNzAwIDogI2ZmZmZmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbikpO1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLWFjY2VudCAvICNkY2NhNThcbiRwYWxldHRlLWFjY2VudDogbWF0LmRlZmluZS1wYWxldHRlKChcbiAgNTAgOiAjZmJmOWViLFxuICAxMDAgOiAjZjVlZmNkLFxuICAyMDAgOiAjZWVlNWFjLFxuICAzMDAgOiAjZTdkYThhLFxuICA0MDAgOiAjZTFkMjcxLFxuICA1MDAgOiAjZGNjYTU4LFxuICA2MDAgOiAjZDhjNTUwLFxuICA3MDAgOiAjZDNiZDQ3LFxuICA4MDAgOiAjY2ViNzNkLFxuICA5MDAgOiAjYzVhYjJkLFxuICBBMTAwIDogI2ZmZmZmZixcbiAgQTIwMCA6ICNmZmY3ZDQsXG4gIEE0MDAgOiAjZmZlZWExLFxuICBBNzAwIDogI2ZmZTk4NyxcbiAgY29udHJhc3Q6IChcbiAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICApXG4pKTtcblxuJHBhbGV0dGUtd2FybjogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kcmVkLXBhbGV0dGUsIEEyMDApO1xuJGFwcC10aGVtZTogbWF0LmRlZmluZS1saWdodC10aGVtZSgkcGFsZXR0ZS1wcmltYXJ5LCAkcGFsZXR0ZS1hY2NlbnQsICRwYWxldHRlLXdhcm4pO1xuXG4vKiBNaXhpbnMgKi9cblxuQG1peGluIGFsbENhcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG5AbWl4aW4gYnV0dG9uT25XaGl0ZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeSwgJGFscGhhOiAwLjUgKiAkYWxwaGEtYnV0dG9uQmcpO1xuICB9IFxufVxuXG5AbWl4aW4gYnV0dG9uT25Db2xvciB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn0iLCJAdXNlICdzYXNzOmNvbG9yJ1xuQGltcG9ydCAndmFyaWFibGVzLnNjc3MnXG5cbi5sb2FkaW5nXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3JkZXItcmFkaXVzOiAwLjVyZW1cbiAgdG9wOiBjYWxjKDUwdmggLSAwLjVyZW0pXG4gIGxlZnQ6IDI1dndcbiAgcmlnaHQ6IDI1dndcbiAgYm90dG9tOiBjYWxjKDUwdmggLSAwLjVyZW0pXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICN7Y29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRhbHBoYTowLjI1KX0sICN7JGNvbG9yLWFjY2VudH0sICN7Y29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRhbHBoYTowLjI1KX0pXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRcbiAgYW5pbWF0aW9uOiBEYXRhRmxvdyAycyBsaW5lYXIgcmV2ZXJzZSBpbmZpbml0ZVxuXG5Aa2V5ZnJhbWVzIERhdGFGbG93XG4gIDAlXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwJVxuICAxMDAlXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUiXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 1
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(_shared_shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            opacity: 0
          }))])])]
        }
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/title-screen/title-screen.component */
      74526);
      /* harmony import */


      var _pages_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/game */
      51342);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [_shared__WEBPACK_IMPORTED_MODULE_4__.SharedService, _shared__WEBPACK_IMPORTED_MODULE_4__.D3Service],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _pages_game__WEBPACK_IMPORTED_MODULE_3__.GameModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_title_screen_title_screen_component__WEBPACK_IMPORTED_MODULE_2__.TitleScreenComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _pages_game__WEBPACK_IMPORTED_MODULE_3__.GameModule]
        });
      })();
      /***/

    },

    /***/
    50270:
    /*!**********************************************!*\
      !*** ./src/app/pages/game/game.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameComponent": function GameComponent() {
          return (
            /* binding */
            _GameComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);

      function GameComponent_app_value_gauge_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-value-gauge", 23);
        }

        if (rf & 2) {
          var indicator_r8 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", indicator_r8.value)("previousValue", indicator_r8.previousValue)("titleBottom", indicator_r8.titleBottom)("titleTop", indicator_r8.titleTop)("min", indicator_r8.minValue)("max", indicator_r8.maxValue)("matTooltip", ctx_r0.t(indicator_r8.toolTip));
        }
      }

      function GameComponent_app_strategy_card_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-strategy-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardLocked", function GameComponent_app_strategy_card_4_Template_app_strategy_card_cardLocked_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var card_r9 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.onCardLocked(card_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", card_r9.title)("description", card_r9.description)("descriptionBack", card_r9.feedback)("flipped", card_r9.flipped)("locked", card_r9.locked)("disabled", true);
        }
      }

      function GameComponent_app_strategy_card_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-strategy-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cardLocked", function GameComponent_app_strategy_card_6_Template_app_strategy_card_cardLocked_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var card_r12 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.onCardLocked(card_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r12 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", card_r12.title)("description", card_r12.description)("descriptionBack", card_r12.feedback)("flipped", card_r12.flipped)("locked", card_r12.locked)("disabled", ctx_r2.inFeedbackPhase);
        }
      }

      function GameComponent_section_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.startOver();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r3.t("Start a New Game"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      function GameComponent_section_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.topDialog.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r4.t(ctx_r4.topDialog.text), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      function GameComponent_app_value_gauge_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-value-gauge", 28);
        }

        if (rf & 2) {
          var indicator_r19 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", indicator_r19.value)("previousValue", indicator_r19.previousValue)("titleBottom", indicator_r19.titleBottom)("titleTop", indicator_r19.titleTop)("min", indicator_r19.minValue)("max", indicator_r19.maxValue)("matTooltip", ctx_r5.t(indicator_r19.toolTip));
        }
      }

      function GameComponent_app_ribbon_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-ribbon", 29);
        }

        if (rf & 2) {
          var ribbon_r20 = ctx.$implicit;
          var i_r21 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("top", ctx_r6.getRibbonTop(i_r21));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ribbon_r20.title)("matTooltip", ctx_r6.t(ribbon_r20.description))("@ribbon", undefined);
        }
      }

      function GameComponent_section_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_section_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r22.bottomDialog.confirm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r7.t(ctx_r7.bottomDialog.text), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        }
      }

      var DATA_KEY_VERSION = 'v';
      var DATA_KEY_SHOWREPORT = 'r';
      var DATA_SEPARATOR = ',';
      var DATA_KEY_STRATEGIES = 's';
      var ROUND_BASE = 1;
      var ANIMATION_DURATION_PREVIOUS_CARDS_MS = 450;
      var ANIMATION_TIMING_PREVIOUS_CARDS_MS = "".concat(ANIMATION_DURATION_PREVIOUS_CARDS_MS, "ms ").concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_EASING);
      /*
       * For convenience
       */

      var sum = function sum(arr) {
        return arr.reduce(function (a, b) {
          return a + b;
        }, 0);
      };

      var clamp = function clamp(num) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return num <= min ? min : num >= max ? max : num;
      };

      var processQueue = function processQueue(queue) {
        if (queue.length < 1) return;
        var step = queue.shift();

        if (typeof step === 'number') {
          setTimeout(function () {
            return processQueue(queue);
          }, step);
        } else {
          step();
          processQueue(queue);
        }
      };

      var _GameComponent = /*#__PURE__*/function () {
        function _GameComponent(route, router, shared) {
          _classCallCheck(this, _GameComponent);

          this.route = route;
          this.router = router;
          this.shared = shared;
          this.animationDirection = 'forward';
          this.currentCardsTrigger = 'current-enter';
          this.enableGoToPrevious = false;
          this.inFeedbackPhase = false;
          this.performanceIndicators = [];
          this.organisationalAttributes = [];
          this.playedScenarios = [];
          this.playedStrategies = [];
          this.previousCardsTrigger = 'current-enter';
          this.previousStrategyCards = [];
          this.ribbons = [];
          this.roundStarting = false;
          this.scenarioTrigger = 'current-enter';
          this.showGameOverDialog = false;
          this.showReport = false;
          this.showScenario = false;
          this.strategyCards = [];
          this._subscriptions = new Array();
          this.resetState();
          this.performanceIndicators = Object.values(this.shared.indicators).filter(function (i) {
            return i.type === 'performance';
          });
          this.organisationalAttributes = Object.values(this.shared.indicators).filter(function (i) {
            return i.type === 'organisation';
          });
        }

        _createClass(_GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.readParams(); // We need to explicitly read the params whenever navigating
            // as onInit won't be called while we stay on the same page

            this._subscriptions.push(this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(function (evt) {
              return evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd;
            })).subscribe(function () {
              return _this2.readParams();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
          /**************************************
           * GETTERS                            *
           **************************************/

          /*
           * Note that round is ROUND_BASE-based (= 1)
           */

        }, {
          key: "round",
          get: function get() {
            return this.rawRound + ROUND_BASE;
          }
        }, {
          key: "lastRound",
          get: function get() {
            return this.shared.settings.rounds;
          }
          /*
           * The absolute round without ROUND_BASE
           */

        }, {
          key: "rawRound",
          get: function get() {
            return this.playedStrategies.length;
          }
        }, {
          key: "isFirstRound",
          get: function get() {
            return this.rawRound === 0;
          }
        }, {
          key: "roundsLeft",
          get: function get() {
            return this.shared.settings.rounds - this.rawRound;
          }
        }, {
          key: "roundsUsedPercentage",
          get: function get() {
            return (this.rawRound + 1) / this.shared.settings.rounds * 100;
          }
        }, {
          key: "gameOver",
          get: function get() {
            return (this.roundsLeft <= 0 || !this.scenario.strategies || this.scenario.strategies.length === 0) && !this.showReport;
          }
        }, {
          key: "latestStrategy",
          get: function get() {
            if (this.playedStrategies.length === 0) return null;
            return this.playedStrategies[this.playedStrategies.length - 1];
          }
        }, {
          key: "previousScenario",
          get: function get() {
            return this.playedScenarios.length > 1 ? this.playedScenarios[this.playedScenarios.length - 2] : null;
          }
        }, {
          key: "scenario",
          get: function get() {
            return this.playedScenarios[this.playedScenarios.length - 1];
          }
          /*
           * Get the top position of the ribbon at the given index
           */

        }, {
          key: "getRibbonTop",
          value: function getRibbonTop(index) {
            if (this.ribbons.length === 0) return '0%'; // NB. Match last measurement to ribbon height

            return "calc(".concat(index, " / ").concat(this.ribbons.length, " * (100% - 11.6979592rem))");
          }
          /**************************************
           * VALUE INITIALISATION               *
           **************************************/

          /*
           * Perform a number of steps at the start of the round with
           * delays in between them.
           */

        }, {
          key: "startRound",
          value: function startRound() {
            var _this3 = this;

            var queue;
            console.log(this.animationDirection);
            if (this.animationDirection === 'backward') queue = [function () {
              return _this3.resetState();
            }, // This sets a class of the same name, which highlights indicators
            function () {
              return _this3.roundStarting = true;
            }, 225, function () {
              return _this3.currentCardsTrigger = 'current-enter';
            }, function () {
              return _this3.previousCardsTrigger = 'current';
            }, function () {
              return _this3.scenarioTrigger = 'current-enter';
            }, ANIMATION_DURATION_PREVIOUS_CARDS_MS, function () {
              return _this3.initScenarios();
            }, function () {
              return _this3.scenarioTrigger = 'previous';
            }, 100, function () {
              return _this3.scenarioTrigger = 'current';
            }, function () {
              return _this3.initIndicators();
            }, function () {
              return _this3.initRibbons();
            }, function () {
              _this3.initPreviousStrategyCards();

              _this3.initStrategyCards();

              _this3.previousCardsTrigger = 'previous-leave';
              _this3.currentCardsTrigger = 'current-noTransition';
            }, 225, function () {
              return _this3.previousCardsTrigger = 'previous';
            }, 1000, function () {
              return _this3.roundStarting = false;
            }];else queue = [// NB. This unflips the card just played, so we must wait for that
            function () {
              return _this3.resetState();
            }, 3 * _shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, // This sets a class of the same name, which highlights indicators
            function () {
              return _this3.roundStarting = true;
            }, function () {
              return _this3.currentCardsTrigger = 'previous';
            }, function () {
              return _this3.previousCardsTrigger = 'previous-leave';
            }, function () {
              return _this3.scenarioTrigger = 'previous';
            }, ANIMATION_DURATION_PREVIOUS_CARDS_MS, function () {
              _this3.initScenarios();

              _this3.scenarioTrigger = 'current-enter';
            }, function () {
              return _this3.scenarioTrigger = 'current';
            }, ANIMATION_DURATION_PREVIOUS_CARDS_MS, function () {
              return _this3.initIndicators();
            }, function () {
              return _this3.initRibbons();
            }, 1500, function () {
              if (_this3.gameOver) _this3.showGameOverDialog = true;else {
                _this3.initPreviousStrategyCards();

                _this3.initStrategyCards();

                _this3.previousCardsTrigger = 'previous-noTransition';
                _this3.currentCardsTrigger = 'current-enter';
              }
            }, 225, function () {
              if (!_this3.gameOver) _this3.currentCardsTrigger = 'current';
            }, 1000, function () {
              return _this3.roundStarting = false;
            }];
            processQueue(queue);
          }
        }, {
          key: "resetState",
          value: function resetState() {
            this.bottomDialog = undefined;
            this.enableGoToPrevious = false;
            this.inFeedbackPhase = false;
            this.roundStarting = false;
            this.showGameOverDialog = false;
            this.showScenario = false;
            this.showReport = false;
            this.topDialog = undefined; // Set the correct flipped/locked states for strategies

            for (var sid in this.shared.strategies) {
              var s = this.shared.strategies[sid];
              s.locked = s.flipped = false; // if (!this.playedStrategies.includes(s))
              //   s.locked = s.flipped = false;
              // else
              //   s.locked = s.flipped = true;
            }
          }
        }, {
          key: "initScenarios",
          value: function initScenarios() {
            var _this4 = this;

            var scenarios = [this.shared.firstScenario];
            this.playedStrategies.map(function (s) {
              return scenarios.push(_this4.shared.scenarios[s.scenario]);
            });
            this.playedScenarios = scenarios;
          }
        }, {
          key: "initIndicators",
          value: function initIndicators() {
            var _this5 = this;

            var _a, _b;

            var _loop = function _loop(iid) {
              // Calc values based on the effects of all played scenarios and strategies
              var indicator = _this5.shared.indicators[iid];
              var value = (_a = indicator.initialValue) !== null && _a !== void 0 ? _a : 0,
                  previousValue = (_b = indicator.initialValue) !== null && _b !== void 0 ? _b : 0;

              _this5.playedScenarios.forEach(function (s, i) {
                var _a, _b;

                var effect = (_b = (_a = s.effects) === null || _a === void 0 ? void 0 : _a[iid]) !== null && _b !== void 0 ? _b : 0;
                value += effect;
                if (i < _this5.playedScenarios.length - 1) previousValue += effect;
              });

              _this5.playedStrategies.forEach(function (s, i) {
                var _a, _b;

                var effect = (_b = (_a = s.effects) === null || _a === void 0 ? void 0 : _a[iid]) !== null && _b !== void 0 ? _b : 0;
                value += effect;
                if (i < _this5.playedStrategies.length - 1) previousValue += effect;
              });

              indicator.value = value;
              indicator.previousValue = previousValue;
            };

            for (var iid in this.shared.indicators) {
              _loop(iid);
            }
          }
        }, {
          key: "initRibbons",
          value: function initRibbons() {
            var _this6 = this;

            var ribbons = [];
            this.playedStrategies.filter(function (s) {
              var _a;

              return ((_a = s.ribbons) === null || _a === void 0 ? void 0 : _a.length) > 0;
            }).forEach(function (s) {
              return s.ribbons.forEach(function (r) {
                return ribbons.push(_this6.shared.ribbons[r]);
              });
            });
            this.ribbons = ribbons;
          }
        }, {
          key: "initPreviousStrategyCards",
          value: function initPreviousStrategyCards() {
            var _this7 = this;

            var _a, _b;

            this.previousStrategyCards = ((_b = (_a = this.previousScenario) === null || _a === void 0 ? void 0 : _a.strategies) !== null && _b !== void 0 ? _b : []).map(function (s) {
              return _this7.shared.strategies[s];
            });
          }
        }, {
          key: "initStrategyCards",
          value: function initStrategyCards() {
            var _this8 = this;

            var _a;

            this.strategyCards = ((_a = this.scenario.strategies) !== null && _a !== void 0 ? _a : []).map(function (s) {
              return _this8.shared.strategies[s];
            });
            this.enableGoToPrevious = true;
          }
          /**************************************
           * USER ACTIONS                       *
           **************************************/

        }, {
          key: "goToPreviousRound",
          value: function goToPreviousRound(event) {
            // Prevent clicks when we are still waiting for this round's strategies
            if (!this.enableGoToPrevious) return; // True here means we go back

            this.updateUrl(true);
          }
        }, {
          key: "loadStrategyCards",
          value: function loadStrategyCards() {
            var _this9 = this;

            setTimeout(function () {
              return _this9.initStrategyCards();
            }, _shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS);
          }
          /*
           * Selecting a strategy goes in three steps:
           * 1. Lock the card => onCardLocked
           * 2. Confirm => showStrategyFeedback
           * 3. Go to next round => executeStrategy => startRound
           */

        }, {
          key: "onCardLocked",
          value: function onCardLocked(strategy) {
            var _this10 = this;

            if (this.inFeedbackPhase) return;

            if (!strategy.locked) {
              // Only one strategy can be locked at the same time
              this.strategyCards.forEach(function (s) {
                return s.locked = false;
              });
              strategy.locked = true;
              this.bottomDialog = {
                text: this.t('Execute selected strategy'),
                confirm: function confirm() {
                  return _this10.showStrategyFeedback(strategy);
                }
              };
            } else {
              strategy.locked = false;
              this.bottomDialog = undefined;
            }
          }
        }, {
          key: "showStrategyFeedback",
          value: function showStrategyFeedback(strategy) {
            var _this11 = this;

            var queue = [function () {
              strategy.flipped = true; // This disables further selection of strategies

              _this11.inFeedbackPhase = true;
              _this11.bottomDialog = undefined;

              _this11.playedStrategies.push(strategy); // Update indicators (nb. the next scenario doesn't affect these yet)

            }, 225, function () {
              return _this11.initIndicators();
            }, 775, function () {
              return _this11.scenarioTrigger = 'previous';
            }, 1000, function () {
              return _this11.topDialog = {
                text: _this11.t('Start next round'),
                confirm: function confirm() {
                  return _this11.executeStrategy(strategy);
                }
              };
            }];
            processQueue(queue);
          }
        }, {
          key: "executeStrategy",
          value: function executeStrategy(strategy) {
            this.updateUrl();
          }
        }, {
          key: "modalClick",
          value: function modalClick(event) {
            this.startOver(event);
          }
        }, {
          key: "startOver",
          value: function startOver(event) {
            // We are just navigating to the title screen
            this.router.navigate(['/']); // To disable background click

            event === null || event === void 0 ? void 0 : event.stopPropagation();
          }
          /**************************************
           * URL PARAMS                         *
           **************************************/

        }, {
          key: "updateUrl",
          value: function updateUrl() {
            var _ref;

            var goBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            // We use router to save the game data between sessions
            this.router.navigate([(_ref = {}, _defineProperty(_ref, DATA_KEY_VERSION, this.shared.settings.version), _defineProperty(_ref, DATA_KEY_STRATEGIES, this._encodeIds(goBack && this.playedStrategies.length > 0 ? this.playedStrategies.slice(0, -1) : this.playedStrategies)), _defineProperty(_ref, DATA_KEY_SHOWREPORT, this.showReport ? 1 : 0), _ref)]);
          }
        }, {
          key: "readParams",
          value: function readParams() {
            var _a; // Only load purchases from route data if the application versions match
            // Otherwise reset the state to handle the going back to an url without params


            if (((_a = this.route.snapshot.params) === null || _a === void 0 ? void 0 : _a[DATA_KEY_VERSION]) && this.route.snapshot.params[DATA_KEY_VERSION] == this.shared.settings.version) {
              // Save current round here, so we can check which direction to animate to
              var currentRound = this.round;
              if (this.route.snapshot.params[DATA_KEY_STRATEGIES]) this.playedStrategies = this._decodeIds(this.route.snapshot.params[DATA_KEY_STRATEGIES]);else this.playedStrategies = []; // NB. This only counts the round number, so if we were to edit the url
              // manually, we would get an inconsistent transition

              this.animationDirection = this.round < currentRound ? 'backward' : 'forward';
              if (this.route.snapshot.params[DATA_KEY_SHOWREPORT] && this.route.snapshot.params[DATA_KEY_SHOWREPORT] == 1) this.showReport = true;else this.showReport = false;
            } // This resets the screen


            this.startRound();
          }
        }, {
          key: "_encodeIds",
          value: function _encodeIds(list) {
            return list.map(function (s) {
              return s.id;
            }).join(DATA_SEPARATOR);
          }
        }, {
          key: "_decodeIds",
          value: function _decodeIds(text) {
            var _this12 = this;

            return text.split(DATA_SEPARATOR).map(function (s) {
              return _this12.shared.strategies[s];
            });
          }
          /**************************************
           * TEXT LOCALISATION                  *
           **************************************/

          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _GameComponent;
      }();

      _GameComponent.ɵfac = function GameComponent_Factory(t) {
        return new (t || _GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _GameComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _GameComponent,
        selectors: [["app-game"]],
        decls: 27,
        vars: 19,
        consts: [["id", "grid"], ["id", "performanceIndicators"], ["type", "bar", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip", 4, "ngFor", "ngForOf"], ["id", "previousStrategyCards", 3, "click"], [3, "title", "description", "descriptionBack", "flipped", "locked", "disabled", "cardLocked", 4, "ngFor", "ngForOf"], ["id", "strategyCards"], ["id", "middleDialog", 4, "ngIf"], ["id", "scenario"], ["id", "roundIndicator"], ["color", "white", "mode", "determinate", 3, "value"], [1, "roundText"], [1, "roundText-current"], [1, "roundText-slash"], [1, "roundText-last"], ["id", "scenarioContent"], [3, "innerHTML"], [1, "description", 3, "innerHTML"], ["id", "topDialog", 4, "ngIf"], ["id", "organisationalAttributes"], ["type", "dot", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip", 4, "ngFor", "ngForOf"], ["id", "ribbons"], [3, "title", "matTooltip", "top", 4, "ngFor", "ngForOf"], ["id", "bottomDialog", 4, "ngIf"], ["type", "bar", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip"], [3, "title", "description", "descriptionBack", "flipped", "locked", "disabled", "cardLocked"], ["id", "middleDialog"], ["type", "button", 3, "innerHTML", "click"], ["id", "topDialog"], ["type", "dot", 3, "value", "previousValue", "titleBottom", "titleTop", "min", "max", "matTooltip"], [3, "title", "matTooltip"], ["id", "bottomDialog"]],
        template: function GameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, GameComponent_app_value_gauge_2_Template, 1, 7, "app-value-gauge", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GameComponent_Template_section_click_3_listener($event) {
              return ctx.goToPreviousRound($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GameComponent_app_strategy_card_4_Template, 1, 6, "app-strategy-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GameComponent_app_strategy_card_6_Template, 1, 6, "app-strategy-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, GameComponent_section_7_Template, 2, 2, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "section", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "mat-progress-spinner", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "h1", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, GameComponent_section_21_Template, 2, 2, "section", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "section", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, GameComponent_app_value_gauge_23_Template, 1, 7, "app-value-gauge", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GameComponent_app_ribbon_25_Template, 1, 5, "app-ribbon", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, GameComponent_section_26_Template, 2, 2, "section", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("showIndicators", ctx.roundStarting || ctx.inFeedbackPhase);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInOut", undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.performanceIndicators);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@strategyCards", ctx.previousCardsTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.previousStrategyCards);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@strategyCards", ctx.currentCardsTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.strategyCards);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showGameOverDialog);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.roundsUsedPercentage);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.round);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.lastRound);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@scenario", ctx.scenarioTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.t(ctx.scenario == null ? null : ctx.scenario.title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.t(ctx.scenario == null ? null : ctx.scenario.description), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.topDialog);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.organisationalAttributes);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ribbons);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bottomDialog);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _value_gauge_component__WEBPACK_IMPORTED_MODULE_1__.ValueGaugeComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__.StrategyCardComponent, _ribbon_component__WEBPACK_IMPORTED_MODULE_3__.RibbonComponent],
        styles: ["button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n  width: 100vw;\n}\n#grid[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 3rem;\n  position: relative;\n  min-height: 100vh;\n  max-height: 100vh;\n  width: 100%;\n  grid-template-columns: [col-1] 1fr [col-2] 1fr [col-3] 1fr [col-4] 1fr [col-5] 1fr [col-6] 1fr [right-edge];\n  grid-template-rows: [top] 4.5rem [mid] 1fr [main] max(28rem, 42vh) [bottom] 4.5rem [bottom-edge];\n  grid-gap: 1.5rem 1.5rem;\n  gap: 1.5rem 1.5rem;\n}\n#performanceIndicators[_ngcontent-%COMP%] {\n  grid-area: top/col-1/mid/right-edge;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1.5rem;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  justify-items: stretch;\n  position: relative;\n  z-index: 400;\n}\n#scenario[_ngcontent-%COMP%] {\n  grid-area: mid/col-1/main/right-edge;\n  padding: 0 calc(75px + 0.5rem);\n  position: relative;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  justify-content: center;\n  overflow: scroll;\n  z-index: 300;\n}\n#scenario[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  max-width: 60rem;\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  height: 75px;\n  width: 75px;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   mat-progress-spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: scale(0.75);\n  transform-origin: top left;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%] {\n  font-size: 22px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%]   .roundText-current[_ngcontent-%COMP%] {\n  vertical-align: 6px;\n}\n#scenario[_ngcontent-%COMP%]   #roundIndicator[_ngcontent-%COMP%]   .roundText[_ngcontent-%COMP%]   .roundText-last[_ngcontent-%COMP%] {\n  vertical-align: -6px;\n}\n#topDialog[_ngcontent-%COMP%] {\n  grid-area: mid/col-2/main/col-6;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  position: relative;\n  z-index: 900;\n}\n#strategyCards[_ngcontent-%COMP%], #previousStrategyCards[_ngcontent-%COMP%], #middleDialog[_ngcontent-%COMP%] {\n  grid-area: main/col-1/bottom/right-edge;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 1rem;\n  transform-origin: top center;\n  z-index: 500;\n}\n#strategyCards[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n#strategyCards[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n#previousStrategyCards[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.3;\n  z-index: 100;\n}\n#previousStrategyCards[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n#middleDialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 20rem;\n}\n#organisationalAttributes[_ngcontent-%COMP%] {\n  grid-area: bottom/col-2/bottom-edge/col-6;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-column-gap: 1.5rem;\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n  justify-items: stretch;\n  position: relative;\n  z-index: 400;\n}\n#ribbons[_ngcontent-%COMP%] {\n  grid-area: main/col-6/bottom-edge/right-edge;\n  position: relative;\n  z-index: 300;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: center center;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%]:nth-child(odd) {\n  right: 1rem;\n}\n#ribbons[_ngcontent-%COMP%]   app-ribbon[_ngcontent-%COMP%]:nth-child(even) {\n  left: 1rem;\n}\n#performanceIndicators[_ngcontent-%COMP%], #organisationalAttributes[_ngcontent-%COMP%], #ribbons[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n#performanceIndicators[_ngcontent-%COMP%]:hover, #organisationalAttributes[_ngcontent-%COMP%]:hover, #ribbons[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.showIndicators[_ngcontent-%COMP%]   #performanceIndicators[_ngcontent-%COMP%], .showIndicators[_ngcontent-%COMP%]   #organisationalAttributes[_ngcontent-%COMP%], .showIndicators[_ngcontent-%COMP%]   #ribbons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#bottomDialog[_ngcontent-%COMP%] {\n  grid-area: bottom/col-2/bottom-edge/col-6;\n  background-color: black;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  position: relative;\n  z-index: 900;\n}\n#bottomDialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #topDialog[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 20rem;\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsImdhbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZBLG1CQUFBO0FBbUZBLFdBQUE7QUN2SkE7RUFDRSxhQUFBO0FBVkY7QUFZQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVRGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsYUQ2Qlc7RUM1Qlgsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJHQUFBO0VBQ0EsZ0dBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBUkY7QUFXQTtFQUNFLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJEY1c7RUNkWCx1QkRjVztPQ2RYLGtCRGNXO0VDYlgsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlEa0NTO0FDMUNYO0FBV0E7RUFDRSxvQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZRHVCUztBQy9CWDtBQVVFO0VBQ0Usa0JBQUE7QUFSSjtBQVVFO0VBQ0UsaUJEbkNVO0VDb0NWLGdCRERVO0VDRVYsa0JBQUE7QUFSSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtBQVRKO0FBV0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQVROO0FBV0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVROO0FBV007RUFDRSxtQkFBQTtBQVRSO0FBV007RUFDRSxvQkFBQTtBQVRSO0FBV0E7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlRC9DVztFQ2dEWCxrQkFBQTtFQUNBLFlEN0JTO0FDcUJYO0FBVUE7OztFQUdFLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CRDFEVztFQzJEWCw0QkFBQTtFQUNBLFlEckNTO0FDOEJYO0FBU0E7RUFFRSxvQkFBQTtBQVBGO0FBVUU7RUFDRSxtQkFBQTtBQVJKO0FBVUE7RUFDRSxlQUFBO0VBRUEsWUFBQTtFQUNBLFlEL0NTO0FDdUNYO0FBVUU7RUFDRSxvQkFBQTtBQVJKO0FBV0U7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVBO0VBQ0UseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkR2Rlc7RUN1RlgsdUJEdkZXO09DdUZYLGtCRHZGVztFQ3dGWCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWURuRVM7QUM0RFg7QUFTQTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZRHZFUztBQ2lFWDtBQVFFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBQU5KO0FBUUk7RUFDRSxXRHZHTztBQ2lHYjtBQVFJO0VBQ0UsVUQxR087QUNvR2I7QUFRQTs7O0VBR0UsWURoSlk7RUNpSlosc0RBQUE7QUFMRjtBQU9FOzs7RUFDRSxVQUFBO0FBSEo7QUFNRTs7O0VBR0UsVUFBQTtBQUhKO0FBS0E7RUFDRSx5Q0FBQTtFQUNBLHVCRHRLa0I7RUN1S2xCLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlRG5JVztFQ29JWCxrQkFBQTtFQUNBLFlEakhTO0FDK0dYO0FBTUU7O0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBRko7QUFJQTtFQUNFLGFEM0hVO0VDNEhWLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6ImdhbWUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkB1c2UgJ3Nhc3M6Y29sb3InXG5AaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuXG4vLyBWQVJJQUJMRVNcblxuLy8gQ29tbW9uIGdyaWQgZ2FwXG4kZ3JpZEdhcDogJG1hcmdpbi1MXG5cbi8vIFN0cmF0ZWd5IGNhcmQgcm93IG1pbiBoZWlnaHRcbiRtaW5IZWlnaHQtbWFpbjogbWF4KDI4cmVtLCA0MnZoKVxuICBcbi8vIFRoZSBvdXRsaW5lIG1lc3NlcyB1cCB0aGUgYm9yZGVyIGNoYW5nZXNcbmJ1dHRvbjpmb2N1c1xuICBvdXRsaW5lOiBub25lXG5cbjpob3N0XG4gIGRpc3BsYXk6IGJsb2NrXG4gIGhlaWdodDogMTAwdmhcbiAgd2lkdGg6IDEwMHZ3XG5cbiNncmlkXG4gIGRpc3BsYXk6IGdyaWRcbiAgcGFkZGluZzogJG1hcmdpbi1YTFxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgbWluLWhlaWdodDogMTAwdmhcbiAgbWF4LWhlaWdodDogMTAwdmhcbiAgd2lkdGg6IDEwMCVcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbY29sLTFdIDFmciBbY29sLTJdIDFmciBbY29sLTNdIDFmciBbY29sLTRdIDFmciBbY29sLTVdIDFmciBbY29sLTZdIDFmciBbcmlnaHQtZWRnZV1cbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAgICBbdG9wXSA0LjVyZW0gW21pZF0gMWZyIFttYWluXSAkbWluSGVpZ2h0LW1haW4gW2JvdHRvbV0gNC41cmVtIFtib3R0b20tZWRnZV1cbiAgZ2FwOiAkZ3JpZEdhcCAkZ3JpZEdhcFxuXG5cbiNwZXJmb3JtYW5jZUluZGljYXRvcnNcbiAgZ3JpZC1hcmVhOiB0b3AgLyBjb2wtMSAvIG1pZCAvIHJpZ2h0LWVkZ2VcbiAgZGlzcGxheTogZ3JpZFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyXG4gIGNvbHVtbi1nYXA6ICRncmlkR2FwXG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2hcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6ICR6SW5kZXgtNFxuXG5cbiNzY2VuYXJpb1xuICBncmlkLWFyZWE6IG1pZCAvIGNvbC0xIC8gbWFpbiAvIHJpZ2h0LWVkZ2VcbiAgcGFkZGluZzogMCBjYWxjKDc1cHggKyAjeyRtYXJnaW4tU30pXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIG92ZXJmbG93OiBzY3JvbGxcbiAgei1pbmRleDogJHpJbmRleC0zXG5cbiAgaDFcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAuZGVzY3JpcHRpb25cbiAgICBmb250LXNpemU6ICRmb250U2l6ZS1MXG4gICAgbWF4LXdpZHRoOiAkbWF4V2lkdGgtWExcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICAjcm91bmRJbmRpY2F0b3JcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICBsZWZ0OiAwXG4gICAgLy8gV2UgdXNlIGFic29sdXRlIHB4cyBhcyB0aGUgc3Bpbm5lciBpcyAxMDB4MTAwcHggYnkgZGVzaWduXG4gICAgaGVpZ2h0OiA3NXB4XG4gICAgd2lkdGg6IDc1cHhcblxuICAgIG1hdC1wcm9ncmVzcy1zcGlubmVyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICAgIHRvcDogMFxuICAgICAgbGVmdDogMFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KVxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnRcblxuICAgIC5yb3VuZFRleHRcbiAgICAgIGZvbnQtc2l6ZTogMjJweFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgICAgIC5yb3VuZFRleHQtY3VycmVudFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogNnB4XG5cbiAgICAgIC5yb3VuZFRleHQtbGFzdFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLTZweFxuXG4jdG9wRGlhbG9nXG4gIGdyaWQtYXJlYTogbWlkIC8gY29sLTIgLyBtYWluIC8gY29sLTZcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxuICBwYWRkaW5nOiAkbWFyZ2luLVNcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6ICR6SW5kZXgtOVxuXG4jc3RyYXRlZ3lDYXJkcyxcbiNwcmV2aW91c1N0cmF0ZWd5Q2FyZHMsXG4jbWlkZGxlRGlhbG9nXG4gIGdyaWQtYXJlYTogbWFpbiAvIGNvbC0xIC8gYm90dG9tIC8gcmlnaHQtZWRnZVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIHBhZGRpbmctYm90dG9tOiAkbWFyZ2luLU1cbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGNlbnRlclxuICB6LWluZGV4OiAkekluZGV4LTVcblxuI3N0cmF0ZWd5Q2FyZHNcbiAgLy8gVG8gYWxsb3cgaG92ZXIgZm9yICNyaWJib25zXG4gIHBvaW50ZXItZXZlbnRzOiBub25lXG5cbiAgLy8gVG8gY291bnRlciAnbm9uZScgYWJvdmVcbiAgKlxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGxcblxuI3ByZXZpb3VzU3RyYXRlZ3lDYXJkc1xuICBjdXJzb3I6IHBvaW50ZXJcbiAgLy8gU2VlIGFuaW1hdGlvbnMgaW4gY29tcG9uZW50XG4gIG9wYWNpdHk6IDAuM1xuICB6LWluZGV4OiAkekluZGV4LTFcblxuICAqXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmVcblxuI21pZGRsZURpYWxvZ1xuICBidXR0b25cbiAgICBtYXJnaW46IDBcbiAgICBtYXgtd2lkdGg6IDIwcmVtXG5cbiNvcmdhbmlzYXRpb25hbEF0dHJpYnV0ZXNcbiAgZ3JpZC1hcmVhOiBib3R0b20gLyBjb2wtMiAvIGJvdHRvbS1lZGdlIC8gY29sLTZcbiAgZGlzcGxheTogZ3JpZFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmclxuICBjb2x1bW4tZ2FwOiAkZ3JpZEdhcFxuICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB6LWluZGV4OiAkekluZGV4LTRcblxuI3JpYmJvbnNcbiAgZ3JpZC1hcmVhOiBtYWluIC8gY29sLTYgLyBib3R0b20tZWRnZSAvIHJpZ2h0LWVkZ2VcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHotaW5kZXg6ICR6SW5kZXgtM1xuXG4gIGFwcC1yaWJib25cbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyXG5cbiAgICAmOm50aC1jaGlsZChvZGQpXG4gICAgICByaWdodDogJG1hcmdpbi1NXG5cbiAgICAmOm50aC1jaGlsZChldmVuKVxuICAgICAgbGVmdDogJG1hcmdpbi1NXG5cbiNwZXJmb3JtYW5jZUluZGljYXRvcnMsXG4jb3JnYW5pc2F0aW9uYWxBdHRyaWJ1dGVzLFxuI3JpYmJvbnNcbiAgb3BhY2l0eTogJGFscGhhLWZhZGVkXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgJGFuaW1hdGlvblRpbWluZy1NXG5cbiAgJjpob3ZlclxuICAgIG9wYWNpdHk6IDEuMFxuXG4uc2hvd0luZGljYXRvcnNcbiAgI3BlcmZvcm1hbmNlSW5kaWNhdG9ycyxcbiAgI29yZ2FuaXNhdGlvbmFsQXR0cmlidXRlcyxcbiAgI3JpYmJvbnNcbiAgICBvcGFjaXR5OiAxLjBcblxuI2JvdHRvbURpYWxvZ1xuICBncmlkLWFyZWE6IGJvdHRvbSAvIGNvbC0yIC8gYm90dG9tLWVkZ2UgLyBjb2wtNlxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgcGFkZGluZzogJG1hcmdpbi1TXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB6LWluZGV4OiAkekluZGV4LTlcblxuI2JvdHRvbURpYWxvZyxcbiN0b3BEaWFsb2dcbiAgYnV0dG9uXG4gICAgbWFyZ2luOiAwXG4gICAgbWF4LXdpZHRoOiAyMHJlbVxuXG4ubW9kYWxcbiAgei1pbmRleDogJHpJbmRleC0xMFxuICBwb3NpdGlvbjogZml4ZWRcbiAgdG9wOiAwXG4gIHJpZ2h0OiAwXG4gIGxlZnQ6IDBcbiAgYm90dG9tOiAwXG4gIGN1cnNvcjogcG9pbnRlciJdfQ== */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fadeInOut', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0
          }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1
          }), // We add a delay to allow for the :enter animation to finish first
          // when switching subcategories
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING_DELAYED, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('strategyCards', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('current-enter', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: 'translateY(60vh)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('current, current-noTransition', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: 'none'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('previous, previous-noTransition', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3,
            transform: 'translateY(-2.5rem) scale(0.9)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('previous-leave', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.0,
            transform: 'translateY(-5rem) scale(0.8)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('current-enter <=> current, current <=> previous, previous <=> previous-leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS)])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('previousCards', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('current', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3,
            transform: 'translateY(-2.5rem) scale(0.9)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('previous', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.0,
            transform: 'translateY(-5rem) scale(0.8)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('next', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.0,
            transform: 'translateY(-2.5rem) scale(0.9)'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('current <=> previous', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS)])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('previousCardsFade', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('faded', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.15
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('normal', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0.3
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('normal <=> faded', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS)])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('ribbon', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(0)'
          }), // We add a delay to allow for the :leave animation to finish first
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(1)'
          }))]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(1)'
          }), // We add a delay to allow for the :leave animation to finish first
          (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING, (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            transform: 'scale(0)'
          }))])]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('scenario', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('current', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 1,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE)
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('previous', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " translate3d(0px, 15vh, -400px)")
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('current-enter', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
            opacity: 0,
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " translate3d(0px, -25vh, 500px)")
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('current <=> *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(ANIMATION_TIMING_PREVIOUS_CARDS_MS)])])]
        }
      });
      /***/
    },

    /***/
    61430:
    /*!*******************************************!*\
      !*** ./src/app/pages/game/game.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameModule": function GameModule() {
          return (
            /* binding */
            _GameModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      4885);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/tooltip */
      11436);
      /* harmony import */


      var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./game.component */
      50270);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _GameModule = function _GameModule() {
        _classCallCheck(this, _GameModule);
      };

      _GameModule.ɵfac = function GameModule_Factory(t) {
        return new (t || _GameModule)();
      };

      _GameModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _GameModule
      });
      _GameModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_GameModule, {
          declarations: [_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent, _ribbon_component__WEBPACK_IMPORTED_MODULE_1__.RibbonComponent, _strategy_card_component__WEBPACK_IMPORTED_MODULE_2__.StrategyCardComponent, _value_gauge_component__WEBPACK_IMPORTED_MODULE_3__.ValueGaugeComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule],
          exports: [_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent]
        });
      })();
      /***/

    },

    /***/
    51342:
    /*!*************************************!*\
      !*** ./src/app/pages/game/index.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GameComponent": function GameComponent() {
          return (
            /* reexport safe */
            _game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent
          );
        },

        /* harmony export */
        "GameModule": function GameModule() {
          return (
            /* reexport safe */
            _game_module__WEBPACK_IMPORTED_MODULE_1__.GameModule
          );
        },

        /* harmony export */
        "RibbonComponent": function RibbonComponent() {
          return (
            /* reexport safe */
            _ribbon_component__WEBPACK_IMPORTED_MODULE_2__.RibbonComponent
          );
        },

        /* harmony export */
        "StrategyCardComponent": function StrategyCardComponent() {
          return (
            /* reexport safe */
            _strategy_card_component__WEBPACK_IMPORTED_MODULE_3__.StrategyCardComponent
          );
        },

        /* harmony export */
        "ValueGaugeComponent": function ValueGaugeComponent() {
          return (
            /* reexport safe */
            _value_gauge_component__WEBPACK_IMPORTED_MODULE_4__.ValueGaugeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./game.component */
      50270);
      /* harmony import */


      var _game_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./game.module */
      61430);
      /* harmony import */


      var _ribbon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ribbon.component */
      17471);
      /* harmony import */


      var _strategy_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./strategy-card.component */
      38269);
      /* harmony import */


      var _value_gauge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./value-gauge.component */
      39967);
      /***/

    },

    /***/
    17471:
    /*!************************************************!*\
      !*** ./src/app/pages/game/ribbon.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RibbonComponent": function RibbonComponent() {
          return (
            /* binding */
            _RibbonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /*
       * Show a strategy card that can be flipped over to see the feedback.
       */


      var _RibbonComponent = /*#__PURE__*/function () {
        function _RibbonComponent(shared) {
          _classCallCheck(this, _RibbonComponent);

          this.shared = shared;
          this.title = '';
        }
        /*
         * Localize a string or LocalizedString object
         * See SharedService
         */


        _createClass(_RibbonComponent, [{
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _RibbonComponent;
      }();

      _RibbonComponent.ɵfac = function RibbonComponent_Factory(t) {
        return new (t || _RibbonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _RibbonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RibbonComponent,
        selectors: [["app-ribbon"]],
        inputs: {
          title: "title"
        },
        decls: 2,
        vars: 1,
        template: function RibbonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.t(ctx.title));
          }
        },
        styles: ["[_nghost-%COMP%] {\n  background: url('ribbon.svg') center/cover;\n  display: flex;\n  flex-flow: column nowrap;\n  height: 11.6979592rem;\n  width: 10rem;\n  justify-content: center;\n  align-items: flex-start;\n  padding-bottom: 1.6979592rem;\n}\nlabel[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  font-size: 0.72rem;\n  max-width: 100%;\n  max-height: 100%;\n  padding: 1rem;\n  text-align: center;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInJpYmJvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQy9KQTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBTk87RUFPUCxZQVJNO0VBU04sdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBRkY7QUFJQTtFQUNFLGtCQUFBO0VBQ0Esa0JER1k7RUNGWixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhRDhCVztFQzdCWCxrQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoicmliYm9uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnc2Fzczpjb2xvcic7XG5AdXNlICd+QGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcblxuJGZvbnRJbmNyZW1lbnQtTTogICAxMjAlO1xuXG4kZm9udEZhbWlseS1wcmltYXJ5OiAnWWFudHJhbWFuYXYnLCBzYW5zLXNlcmlmO1xuXG4kY29sb3ItcHJpbWFyeTogICAgIHdoaXRlO1xuJGNvbG9yLW9uUHJpbWFyeTogICBibGFjaztcbiRjb2xvci1wcmltYXJ5Qmc6ICAgYmxhY2s7XG4kY29sb3ItcHJpbWFyeUJnRmFkZWQ6ICBjb2xvci5jaGFuZ2UoJGNvbG9yLXByaW1hcnlCZywgJGFscGhhOiAwLjUpO1xuJGNvbG9yLWFjY2VudDogICAgICAjZGNjYTU4O1xuJGNvbG9yLWFjY2VudERhcmtlcjogY29sb3IuY2hhbmdlKCRjb2xvci1hY2NlbnQsICRsaWdodG5lc3M6IDQwJSk7XG4kY29sb3Itc2Vjb25kYXJ5OiAgIGNvbG9yLm1peCgkY29sb3Itb25QcmltYXJ5LCAkY29sb3ItcHJpbWFyeSwgNjAlKTtcblxuJGFscGhhLW92ZXJsYXk6IDAuODtcbiRhbHBoYS1idXR0b25CZzogMC4xNTtcbiRhbHBoYS1mYWRlZDogMC4zO1xuJG9wYWNpdHktZGlzYWJsZWQ6IDAuNTtcblxuJGZvbnRTaXplLVhTOiAwLjcycmVtO1xuJGZvbnRTaXplLVM6ICAwLjhyZW07XG4kZm9udFNpemUtTTogIDFyZW07XG4kZm9udFNpemUtTDogIDEuMnJlbTtcbiRmb250U2l6ZS1YTDogMS41cmVtO1xuJGZvbnRTaXplLVhYTDogMy41cmVtO1xuXG4kZm9udFdlaWdodC1NOiA1MDA7XG4kZm9udFdlaWdodC1MOiA5MDA7XG5cbiRmb250U2l6ZS1pY29uTDogMzJweDtcblxuJGxpbmVIZWlnaHQtUzogMS4xO1xuJGxpbmVIZWlnaHQtTTogMS4zO1xuXG4kYm9yZGVyV2lkdGgtUzogMXB4O1xuJGJvcmRlcldpZHRoLU06IDJweDtcbiRib3JkZXJXaWR0aC1MOiAzcHg7XG5cbiRib3JkZXItUzogJGJvcmRlcldpZHRoLVMgc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLU06ICRib3JkZXJXaWR0aC1NIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuJGJvcmRlci1MOiAkYm9yZGVyV2lkdGgtTCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcblxuJGJvcmRlclJhZGl1cy1NOiA0cHg7XG4kYm9yZGVyUmFkaXVzLVhMOiAxLjVyZW07XG5cbiRib3hTaGFkb3ctTTogMCA2cHggMnB4IC00cHggcmdiYSgwLDAsMCwuMiksIDAgNHB4IDRweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcblxuJG1hcmdpbi1YUzogIDAuMjVyZW07XG4kbWFyZ2luLVM6ICAgMC41cmVtO1xuJG1hcmdpbi1NOiAgIDFyZW07XG4kbWFyZ2luLUw6ICAgMS41cmVtO1xuJG1hcmdpbi1YTDogIDNyZW07XG4kbWFyZ2luLVhYTDogNnJlbTtcblxuJG1heFdpZHRoLVM6IDI1cmVtO1xuJG1heFdpZHRoLU06IDM4cmVtO1xuJG1heFdpZHRoLUw6IDQwcmVtO1xuJG1heFdpZHRoLVhMOiA2MHJlbTsgXG5cbiRhbmltYXRpb25FYXNpbmc6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4kYW5pbWF0aW9uRHVyYXRpb24tTTogMjI1bXM7XG4kYW5pbWF0aW9uRHVyYXRpb24tWEw6IDcwMG1zO1xuJGFuaW1hdGlvblRpbWluZy1NOiAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZy1YTDogJGFuaW1hdGlvbkR1cmF0aW9uLVhMICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcblxuJHpJbmRleC0xMDogMTAwMDtcbiR6SW5kZXgtOTogOTAwOyAvLyBQb3B1cHNcbiR6SW5kZXgtODogODAwOyAvLyBcbiR6SW5kZXgtNzogNzAwOyAvLyBcbiR6SW5kZXgtNjogNjAwOyAvLyBcbiR6SW5kZXgtNTogNTAwOyAvLyBDYXJkc1xuJHpJbmRleC00OiA0MDA7IC8vIFxuJHpJbmRleC0zOiAzMDA7IC8vIFxuJHpJbmRleC0yOiAyMDA7IC8vXG4kekluZGV4LTE6IDEwMDsgLy9cbiR6SW5kZXgtMDogMDtcblxuXG4vKiBNYXRlcmlhbCB0aGVtZSAqL1xuXG4vLyBUeXBvZ3JhcGh5XG4vLyBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdHlwb2dyYXBoeVxuLy8gVXNhZ2U6IEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkYXBwLXR5cG9ncmFwaHksIHRpdGxlKVxuJGFwcC10eXBvZ3JhcGh5OiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICRmb250RmFtaWx5LXByaW1hcnlcbik7XG5cbi8vIEN1c3RvbSBwYWxldHRlcyBhbmQgdGhlbWVcbi8vIFNlZSBodHRwOi8vbWNnLm1iaXRzb24uY29tL1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLXByaW1hcnkgLyAjZmZmXG4kcGFsZXR0ZS1wcmltYXJ5OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICAgIDUwIDogI2ZmZmZmZixcbiAgICAxMDAgOiAjZmZmZmZmLFxuICAgIDIwMCA6ICNmZmZmZmYsXG4gICAgMzAwIDogI2ZmZmZmZixcbiAgICA0MDAgOiAjZmZmZmZmLFxuICAgIDUwMCA6ICNmZmZmZmYsXG4gICAgNjAwIDogI2ZmZmZmZixcbiAgICA3MDAgOiAjZmZmZmZmLFxuICAgIDgwMCA6ICNmZmZmZmYsXG4gICAgOTAwIDogI2ZmZmZmZixcbiAgICBBMTAwIDogI2ZmZmZmZixcbiAgICBBMjAwIDogI2ZmZmZmZixcbiAgICBBNDAwIDogI2ZmZmZmZixcbiAgICBBNzAwIDogI2ZmZmZmZixcbiAgICBjb250cmFzdDogKFxuICAgICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICAgIClcbikpO1xuXG4vLyBCYXNlIGNvbG91cjogJGNvbG9yLWFjY2VudCAvICNkY2NhNThcbiRwYWxldHRlLWFjY2VudDogbWF0LmRlZmluZS1wYWxldHRlKChcbiAgNTAgOiAjZmJmOWViLFxuICAxMDAgOiAjZjVlZmNkLFxuICAyMDAgOiAjZWVlNWFjLFxuICAzMDAgOiAjZTdkYThhLFxuICA0MDAgOiAjZTFkMjcxLFxuICA1MDAgOiAjZGNjYTU4LFxuICA2MDAgOiAjZDhjNTUwLFxuICA3MDAgOiAjZDNiZDQ3LFxuICA4MDAgOiAjY2ViNzNkLFxuICA5MDAgOiAjYzVhYjJkLFxuICBBMTAwIDogI2ZmZmZmZixcbiAgQTIwMCA6ICNmZmY3ZDQsXG4gIEE0MDAgOiAjZmZlZWExLFxuICBBNzAwIDogI2ZmZTk4NyxcbiAgY29udHJhc3Q6IChcbiAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgIDEwMCA6ICMwMDAwMDAsXG4gICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgIDQwMCA6ICMwMDAwMDAsXG4gICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgIDcwMCA6ICMwMDAwMDAsXG4gICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgIEExMDAgOiAjMDAwMDAwLFxuICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgIEE3MDAgOiAjMDAwMDAwLFxuICApXG4pKTtcblxuJHBhbGV0dGUtd2FybjogbWF0LmRlZmluZS1wYWxldHRlKG1hdC4kcmVkLXBhbGV0dGUsIEEyMDApO1xuJGFwcC10aGVtZTogbWF0LmRlZmluZS1saWdodC10aGVtZSgkcGFsZXR0ZS1wcmltYXJ5LCAkcGFsZXR0ZS1hY2NlbnQsICRwYWxldHRlLXdhcm4pO1xuXG4vKiBNaXhpbnMgKi9cblxuQG1peGluIGFsbENhcHMge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG5AbWl4aW4gYnV0dG9uT25XaGl0ZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeSwgJGFscGhhOiAwLjUgKiAkYWxwaGEtYnV0dG9uQmcpO1xuICB9IFxufVxuXG5AbWl4aW4gYnV0dG9uT25Db2xvciB7XG4gIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuJHdpZHRoOiAxMHJlbVxuJGhlaWdodDogJHdpZHRoICogMS4xNjk3OTU5MlxuXG46aG9zdFxuICBiYWNrZ3JvdW5kOiB1cmwoYXNzZXRzL2ltYWdlcy9yaWJib24uc3ZnKSBjZW50ZXIvY292ZXJcbiAgZGlzcGxheTogZmxleFxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXBcbiAgaGVpZ2h0OiAkaGVpZ2h0XG4gIHdpZHRoOiAkd2lkdGhcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnRcbiAgcGFkZGluZy1ib3R0b206ICRoZWlnaHQgLSAkd2lkdGhcblxubGFiZWxcbiAgYm9yZGVyLXJhZGl1czogNTAlXG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplLVhTXG4gIG1heC13aWR0aDogMTAwJVxuICBtYXgtaGVpZ2h0OiAxMDAlXG4gIHBhZGRpbmc6ICRtYXJnaW4tTVxuICB0ZXh0LWFsaWduOiBjZW50ZXJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCJdfQ== */"]
      });
      /***/
    },

    /***/
    38269:
    /*!*******************************************************!*\
      !*** ./src/app/pages/game/strategy-card.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StrategyCardComponent": function StrategyCardComponent() {
          return (
            /* binding */
            _StrategyCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/animations */
      17238);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);

      var ANIMATION_DURATION_WITH_DELAY = "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, "ms ").concat(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS, "ms");
      /*
       * Show a strategy card that can be flipped over to see the feedback.
       */

      var _StrategyCardComponent = /*#__PURE__*/function () {
        function _StrategyCardComponent(shared) {
          _classCallCheck(this, _StrategyCardComponent);

          this.shared = shared;
          this.id = null;
          this.title = '';
          this.description = '';
          this.buttonLabel = 'Lock This Strategy';
          this.buttonLabelLocked = 'Strategy Locked';
          this.titleBack = 'Feedback';
          this.descriptionBack = '';
          this.disabled = false;
          this.locked = false;
          this.cardLocked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.backFlipTrigger = 'back-hidden';
          this.frontFlipTrigger = 'visible';
          this._flipped = false;
        }

        _createClass(_StrategyCardComponent, [{
          key: "flipped",
          get: function get() {
            return this._flipped;
          },
          set: function set(value) {
            if (this._flipped == value) return;
            this._flipped = value; // Handle triggers for transitions here

            if (this._flipped) {
              this.backFlipTrigger = 'visible';
              this.frontFlipTrigger = 'front-hidden';
            } else {
              this.backFlipTrigger = 'back-hidden';
              this.frontFlipTrigger = 'visible';
            }
          }
        }, {
          key: "toggleLocked",
          value: function toggleLocked() {
            this.cardLocked.emit(!this.locked);
          }
          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _StrategyCardComponent;
      }();

      _StrategyCardComponent.ɵfac = function StrategyCardComponent_Factory(t) {
        return new (t || _StrategyCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _StrategyCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _StrategyCardComponent,
        selectors: [["app-strategy-card"]],
        inputs: {
          id: "id",
          title: "title",
          description: "description",
          buttonLabel: "buttonLabel",
          buttonLabelLocked: "buttonLabelLocked",
          titleBack: "titleBack",
          descriptionBack: "descriptionBack",
          disabled: "disabled",
          flipped: "flipped",
          locked: "locked"
        },
        outputs: {
          cardLocked: "cardLocked"
        },
        decls: 11,
        vars: 12,
        consts: [[1, "card", "front"], [1, "content"], [1, "description", 3, "innerHTML"], [1, "titleText", 3, "innerHTML"], ["type", "button", 1, "bottomButton", 3, "disabled", "innerHTML", "click"], [1, "card", "back"]],
        template: function StrategyCardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategyCardComponent_Template_button_click_5_listener() {
              return ctx.toggleLocked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled)("locked", ctx.locked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flip", ctx.frontFlipTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t(ctx.description), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t(ctx.title), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("innerHTML", ctx.t(ctx.locked ? ctx.buttonLabelLocked : ctx.buttonLabel), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@flip", ctx.backFlipTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t(ctx.titleBack), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t(ctx.descriptionBack), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n  height: 24rem;\n  margin: 0 0.5rem;\n  position: relative;\n  width: min(16rem, 30vw);\n}\n.card[_ngcontent-%COMP%] {\n  background-color: black;\n  border-radius: 1rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: stretch;\n  height: 100%;\n  width: 100%;\n  padding: 1rem 0.5rem 1.65rem 0.5rem;\n  position: absolute;\n  transform-style: preserve-3d;\n}\n.content[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  border-radius: 0.5rem;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  overflow: scroll;\n  padding: 3rem 0.5rem 3rem 0.5rem;\n  position: relative;\n  text-align: center;\n}\n.back[_ngcontent-%COMP%] {\n  color: black;\n}\n.back[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background-color: white;\n  font-style: italic;\n}\nlabel[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 0.5rem;\n  left: 0;\n  right: 0;\n  text-align: center;\n  white-space: normal;\n}\nlabel[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0px 0.5rem;\n}\nh3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  border-bottom: 1px solid white;\n  border-bottom-color: black;\n  font-size: 0.8rem;\n  font-style: italic;\n  font-weight: 500;\n  text-align: center;\n}\n.bottomButton[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  background-color: black;\n  border-radius: 50%;\n  font-size: 0.72rem;\n  max-height: 3.5rem;\n  min-height: 3.5rem;\n  overflow: hidden;\n  padding: 1rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 10rem;\n  position: absolute;\n  bottom: 0px;\n  left: calc(50% - 5rem);\n}\n.locked[_ngcontent-%COMP%]   .bottomButton[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInN0cmF0ZWd5LWNhcmQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZBLG1CQUFBO0FBbUZBLFdBQUE7QUNoS0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdBO0VBQ0UsdUJESGtCO0VDSWxCLG1CRHFDVztFQ3BDWCxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBREY7QUFHQTtFQUNFLHVCRGVTO0VDZFQscUJEdUJXO0VDdEJYLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFQTtFQUNFLFlENUJrQjtBQzZCcEI7QUFDRTtFQUNFLHVCRGpDZ0I7RUNrQ2hCLGtCQUFBO0FBQ0o7QUFDQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdER1c7RUNGWCxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjtBQUFFO0VBQ0UsdUJENUNnQjtFQzZDaEIsbUJBQUE7QUFFSjtBQUFBO0VEK0dFLHlCQUFBO0VBQ0Esc0JBQUE7RUM5R0EsOEJEbkJTO0VDb0JULDBCRGxEa0I7RUNtRGxCLGlCRHZDWTtFQ3dDWixrQkFBQTtFQUNBLGdCRG5DYTtFQ29DYixrQkFBQTtBQUlGO0FBRkE7RURzR0UseUJBQUE7RUFDQSxzQkFBQTtFQ3JHQSx1QkQxRGtCO0VDMkRsQixrQkFBQTtFQUNBLGtCRGpEWTtFQ2tEWixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhRHZCVztFQ3dCWCx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBTUY7QUFIRTtFQUNFLHVCRDVFZ0I7RUM2RWhCLFlEM0VnQjtBQ2lGcEIiLCJmaWxlIjoic3RyYXRlZ3ktY2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ3Nhc3M6Y29sb3InO1xuQHVzZSAnfkBhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XG5cbiRmb250SW5jcmVtZW50LU06ICAgMTIwJTtcblxuJGZvbnRGYW1pbHktcHJpbWFyeTogJ1lhbnRyYW1hbmF2Jywgc2Fucy1zZXJpZjtcblxuJGNvbG9yLXByaW1hcnk6ICAgICB3aGl0ZTtcbiRjb2xvci1vblByaW1hcnk6ICAgYmxhY2s7XG4kY29sb3ItcHJpbWFyeUJnOiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZ0ZhZGVkOiAgY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5QmcsICRhbHBoYTogMC41KTtcbiRjb2xvci1hY2NlbnQ6ICAgICAgI2RjY2E1ODtcbiRjb2xvci1hY2NlbnREYXJrZXI6IGNvbG9yLmNoYW5nZSgkY29sb3ItYWNjZW50LCAkbGlnaHRuZXNzOiA0MCUpO1xuJGNvbG9yLXNlY29uZGFyeTogICBjb2xvci5taXgoJGNvbG9yLW9uUHJpbWFyeSwgJGNvbG9yLXByaW1hcnksIDYwJSk7XG5cbiRhbHBoYS1vdmVybGF5OiAwLjg7XG4kYWxwaGEtYnV0dG9uQmc6IDAuMTU7XG4kYWxwaGEtZmFkZWQ6IDAuMztcbiRvcGFjaXR5LWRpc2FibGVkOiAwLjU7XG5cbiRmb250U2l6ZS1YUzogMC43MnJlbTtcbiRmb250U2l6ZS1TOiAgMC44cmVtO1xuJGZvbnRTaXplLU06ICAxcmVtO1xuJGZvbnRTaXplLUw6ICAxLjJyZW07XG4kZm9udFNpemUtWEw6IDEuNXJlbTtcbiRmb250U2l6ZS1YWEw6IDMuNXJlbTtcblxuJGZvbnRXZWlnaHQtTTogNTAwO1xuJGZvbnRXZWlnaHQtTDogOTAwO1xuXG4kZm9udFNpemUtaWNvbkw6IDMycHg7XG5cbiRsaW5lSGVpZ2h0LVM6IDEuMTtcbiRsaW5lSGVpZ2h0LU06IDEuMztcblxuJGJvcmRlcldpZHRoLVM6IDFweDtcbiRib3JkZXJXaWR0aC1NOiAycHg7XG4kYm9yZGVyV2lkdGgtTDogM3B4O1xuXG4kYm9yZGVyLVM6ICRib3JkZXJXaWR0aC1TIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuJGJvcmRlci1NOiAkYm9yZGVyV2lkdGgtTSBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTDogJGJvcmRlcldpZHRoLUwgc29saWQgJGNvbG9yLXByaW1hcnk7XG5cbiRib3JkZXJSYWRpdXMtTTogNHB4O1xuJGJvcmRlclJhZGl1cy1YTDogMS41cmVtO1xuXG4kYm94U2hhZG93LU06IDAgNnB4IDJweCAtNHB4IHJnYmEoMCwwLDAsLjIpLCAwIDRweCA0cHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xMik7XG5cbiRtYXJnaW4tWFM6ICAwLjI1cmVtO1xuJG1hcmdpbi1TOiAgIDAuNXJlbTtcbiRtYXJnaW4tTTogICAxcmVtO1xuJG1hcmdpbi1MOiAgIDEuNXJlbTtcbiRtYXJnaW4tWEw6ICAzcmVtO1xuJG1hcmdpbi1YWEw6IDZyZW07XG5cbiRtYXhXaWR0aC1TOiAyNXJlbTtcbiRtYXhXaWR0aC1NOiAzOHJlbTtcbiRtYXhXaWR0aC1MOiA0MHJlbTtcbiRtYXhXaWR0aC1YTDogNjByZW07IFxuXG4kYW5pbWF0aW9uRWFzaW5nOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuJGFuaW1hdGlvbkR1cmF0aW9uLU06IDIyNW1zO1xuJGFuaW1hdGlvbkR1cmF0aW9uLVhMOiA3MDBtcztcbiRhbmltYXRpb25UaW1pbmctTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmctWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZ1dpdGhEZWxheS1NOiAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuJGFuaW1hdGlvblRpbWluZ1dpdGhEZWxheS1YTDogJGFuaW1hdGlvbkR1cmF0aW9uLVhMICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG5cbiR6SW5kZXgtMTA6IDEwMDA7XG4kekluZGV4LTk6IDkwMDsgLy8gUG9wdXBzXG4kekluZGV4LTg6IDgwMDsgLy8gXG4kekluZGV4LTc6IDcwMDsgLy8gXG4kekluZGV4LTY6IDYwMDsgLy8gXG4kekluZGV4LTU6IDUwMDsgLy8gQ2FyZHNcbiR6SW5kZXgtNDogNDAwOyAvLyBcbiR6SW5kZXgtMzogMzAwOyAvLyBcbiR6SW5kZXgtMjogMjAwOyAvL1xuJHpJbmRleC0xOiAxMDA7IC8vXG4kekluZGV4LTA6IDA7XG5cblxuLyogTWF0ZXJpYWwgdGhlbWUgKi9cblxuLy8gVHlwb2dyYXBoeVxuLy8gaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL3R5cG9ncmFwaHlcbi8vIFVzYWdlOiBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGFwcC10eXBvZ3JhcGh5LCB0aXRsZSlcbiRhcHAtdHlwb2dyYXBoeTogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseS1wcmltYXJ5XG4pO1xuXG4vLyBDdXN0b20gcGFsZXR0ZXMgYW5kIHRoZW1lXG4vLyBTZWUgaHR0cDovL21jZy5tYml0c29uLmNvbS9cblxuLy8gQmFzZSBjb2xvdXI6ICRjb2xvci1wcmltYXJ5IC8gI2ZmZlxuJHBhbGV0dGUtcHJpbWFyeTogbWF0LmRlZmluZS1wYWxldHRlKChcbiAgICA1MCA6ICNmZmZmZmYsXG4gICAgMTAwIDogI2ZmZmZmZixcbiAgICAyMDAgOiAjZmZmZmZmLFxuICAgIDMwMCA6ICNmZmZmZmYsXG4gICAgNDAwIDogI2ZmZmZmZixcbiAgICA1MDAgOiAjZmZmZmZmLFxuICAgIDYwMCA6ICNmZmZmZmYsXG4gICAgNzAwIDogI2ZmZmZmZixcbiAgICA4MDAgOiAjZmZmZmZmLFxuICAgIDkwMCA6ICNmZmZmZmYsXG4gICAgQTEwMCA6ICNmZmZmZmYsXG4gICAgQTIwMCA6ICNmZmZmZmYsXG4gICAgQTQwMCA6ICNmZmZmZmYsXG4gICAgQTcwMCA6ICNmZmZmZmYsXG4gICAgY29udHJhc3Q6IChcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxuICAgICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgICA3MDAgOiAjMDAwMDAwLFxuICAgICAgICA4MDAgOiAjMDAwMDAwLFxuICAgICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgICBBNzAwIDogIzAwMDAwMCxcbiAgICApXG4pKTtcblxuLy8gQmFzZSBjb2xvdXI6ICRjb2xvci1hY2NlbnQgLyAjZGNjYTU4XG4kcGFsZXR0ZS1hY2NlbnQ6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gIDUwIDogI2ZiZjllYixcbiAgMTAwIDogI2Y1ZWZjZCxcbiAgMjAwIDogI2VlZTVhYyxcbiAgMzAwIDogI2U3ZGE4YSxcbiAgNDAwIDogI2UxZDI3MSxcbiAgNTAwIDogI2RjY2E1OCxcbiAgNjAwIDogI2Q4YzU1MCxcbiAgNzAwIDogI2QzYmQ0NyxcbiAgODAwIDogI2NlYjczZCxcbiAgOTAwIDogI2M1YWIyZCxcbiAgQTEwMCA6ICNmZmZmZmYsXG4gIEEyMDAgOiAjZmZmN2Q0LFxuICBBNDAwIDogI2ZmZWVhMSxcbiAgQTcwMCA6ICNmZmU5ODcsXG4gIGNvbnRyYXN0OiAoXG4gICAgICA1MCA6ICMwMDAwMDAsXG4gICAgICAxMDAgOiAjMDAwMDAwLFxuICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgIDMwMCA6ICMwMDAwMDAsXG4gICAgICA0MDAgOiAjMDAwMDAwLFxuICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgIDYwMCA6ICMwMDAwMDAsXG4gICAgICA3MDAgOiAjMDAwMDAwLFxuICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgIDkwMCA6ICMwMDAwMDAsXG4gICAgICBBMTAwIDogIzAwMDAwMCxcbiAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgQTQwMCA6ICMwMDAwMDAsXG4gICAgICBBNzAwIDogIzAwMDAwMCxcbiAgKVxuKSk7XG5cbiRwYWxldHRlLXdhcm46IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJHJlZC1wYWxldHRlLCBBMjAwKTtcbiRhcHAtdGhlbWU6IG1hdC5kZWZpbmUtbGlnaHQtdGhlbWUoJHBhbGV0dGUtcHJpbWFyeSwgJHBhbGV0dGUtYWNjZW50LCAkcGFsZXR0ZS13YXJuKTtcblxuLyogTWl4aW5zICovXG5cbkBtaXhpbiBhbGxDYXBzIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuQG1peGluIGJ1dHRvbk9uV2hpdGUge1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci5jaGFuZ2UoJGNvbG9yLXByaW1hcnksICRhbHBoYTogMC41ICogJGFscGhhLWJ1dHRvbkJnKTtcbiAgfSBcbn1cblxuQG1peGluIGJ1dHRvbk9uQ29sb3Ige1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gIGJvcmRlci1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG59IiwiQGltcG9ydCAndmFyaWFibGVzLnNjc3MnXG5cbiRib3JkZXI6ICRib3JkZXItTVxuXG46aG9zdFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgaGVpZ2h0OiAyNHJlbVxuICBtYXJnaW46IDAgJG1hcmdpbi1TXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICB3aWR0aDogbWluKDE2cmVtLCAzMHZ3KVxuXG4uY2FyZFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gIGJvcmRlci1yYWRpdXM6ICRtYXJnaW4tTVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2hcbiAgaGVpZ2h0OiAxMDAlXG4gIHdpZHRoOiAxMDAlXG4gIC8vIENoZWNrIGJvdHRvbSBwYWRkaW5nIHRvIGZpdCBidXR0b25cbiAgcGFkZGluZzogJG1hcmdpbi1NICRtYXJnaW4tUyAxLjY1cmVtICRtYXJnaW4tU1xuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuXG4uY29udGVudFxuICBib3JkZXI6ICRib3JkZXJcbiAgYm9yZGVyLXJhZGl1czogJG1hcmdpbi1TXG4gIGhlaWdodDogMTAwJVxuICBkaXNwbGF5OiBmbGV4XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxuICBhbGlnbi1pdGVtczogY2VudGVyXG4gIG92ZXJmbG93OiBzY3JvbGxcbiAgcGFkZGluZzogJG1hcmdpbi1YTCAkbWFyZ2luLVMgJG1hcmdpbi1YTCAkbWFyZ2luLVNcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG4uYmFja1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnlCZ1xuXG4gIC5jb250ZW50XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnlcbiAgICBmb250LXN0eWxlOiBpdGFsaWNcblxubGFiZWxcbiAgbWFyZ2luOiAwXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6ICRtYXJnaW4tU1xuICBsZWZ0OiAwXG4gIHJpZ2h0OiAwXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsXG5cbiAgLnRpdGxlVGV4dFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5QmdcbiAgICBwYWRkaW5nOiAwcHggJG1hcmdpbi1TXG5cbmgzXG4gIEBpbmNsdWRlIGFsbENhcHNcbiAgYm9yZGVyLWJvdHRvbTogJGJvcmRlci1TXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1wcmltYXJ5QmdcbiAgZm9udC1zaXplOiAkZm9udFNpemUtU1xuICBmb250LXN0eWxlOiBpdGFsaWNcbiAgZm9udC13ZWlnaHQ6ICRmb250V2VpZ2h0LU1cbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5ib3R0b21CdXR0b25cbiAgQGluY2x1ZGUgYWxsQ2Fwc1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxuICBmb250LXNpemU6ICRmb250U2l6ZS1YU1xuICBtYXgtaGVpZ2h0OiAzLjVyZW1cbiAgbWluLWhlaWdodDogMy41cmVtXG4gIG92ZXJmbG93OiBoaWRkZW5cbiAgcGFkZGluZzogJG1hcmdpbi1NXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzXG4gIHdoaXRlLXNwYWNlOiBub3dyYXBcbiAgd2lkdGg6IDEwcmVtXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDBweFxuICBsZWZ0OiBjYWxjKDUwJSAtIDVyZW0pXG5cbi5sb2NrZWRcbiAgLmJvdHRvbUJ1dHRvblxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5QmciXX0= */"],
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('flip', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(0deg)")
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('front-hidden', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(-90deg)")
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('back-hidden', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
            transform: "".concat(_shared__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE, " rotateY(90deg)")
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('visible => front-hidden, visible => back-hidden', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(_shared__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS)]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('front-hidden => visible, back-hidden => visible', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(ANIMATION_DURATION_WITH_DELAY)])])]
        }
      });
      /***/
    },

    /***/
    39967:
    /*!*****************************************************!*\
      !*** ./src/app/pages/game/value-gauge.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValueGaugeComponent": function ValueGaugeComponent() {
          return (
            /* binding */
            _ValueGaugeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ValueGaugeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r0.previousValueLeft);
        }
      }

      function ValueGaugeComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.valueBarWidth);
        }
      }

      function ValueGaugeComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 9);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("left", ctx_r2.valueDotLeft);
        }
      }

      function ValueGaugeComponent_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r3.t(ctx_r3.titleTop), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }

      function ValueGaugeComponent_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r4.t(ctx_r4.titleBottom), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        }
      }
      /*
       * Show indicator values as either bars or dots on an axis.
       */


      var _ValueGaugeComponent = /*#__PURE__*/function () {
        function _ValueGaugeComponent(shared) {
          _classCallCheck(this, _ValueGaugeComponent);

          this.shared = shared;
          this.max = 10;
          this.min = 0;
          this.previousValue = undefined;
          this.type = 'bar';
          this.value = 0;
        }

        _createClass(_ValueGaugeComponent, [{
          key: "isDot",
          get: function get() {
            return this.type === 'dot';
          }
        }, {
          key: "isBar",
          get: function get() {
            return this.type === 'bar';
          }
        }, {
          key: "valueFraction",
          get: function get() {
            if (this.range === 0) return 0;
            return (this.value - this.min) / this.range;
          }
        }, {
          key: "previousValueFraction",
          get: function get() {
            if (this.range === 0) return 0;
            return (this.previousValue - this.min) / this.range;
          }
        }, {
          key: "range",
          get: function get() {
            return this.max - this.min;
          }
        }, {
          key: "valueBarWidth",
          get: function get() {
            return "".concat(this.valueFraction * 100, "%");
          }
        }, {
          key: "previousValueLeft",
          get: function get() {
            return this.isDot ? this._calcDotPercentage(this.previousValueFraction) : "".concat(this.previousValueFraction * 100, "%");
          } // get valueChange(): number {
          //   return this.valueFraction - this.previousValueFraction;
          // }
          // get valueChangeWidth(): string {
          //   return `${Math.abs(this.valueChange) * 100}%`;
          // }

        }, {
          key: "valueDotLeft",
          get: function get() {
            return this._calcDotPercentage(this.valueFraction);
          } // get previousValueDotLeft(): string {
          //   const margin = 10;
          //   return `${margin + this.valueFraction * (100 - 2 * margin)}%`;
          // }

        }, {
          key: "_calcDotPercentage",
          value: function _calcDotPercentage(fraction) {
            var margin = 10;
            return "".concat(margin + fraction * (100 - 2 * margin), "%");
          }
          /*
           * Localize a string or LocalizedString object
           * See SharedService
           */

        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _ValueGaugeComponent;
      }();

      _ValueGaugeComponent.ɵfac = function ValueGaugeComponent_Factory(t) {
        return new (t || _ValueGaugeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _ValueGaugeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ValueGaugeComponent,
        selectors: [["app-value-gauge"]],
        inputs: {
          max: "max",
          min: "min",
          previousValue: "previousValue",
          type: "type",
          titleBottom: "titleBottom",
          titleTop: "titleTop",
          value: "value"
        },
        decls: 7,
        vars: 9,
        consts: [[1, "container"], [1, "content"], ["class", "previousValue", 3, "left", 4, "ngIf"], ["class", "valueBar", 3, "width", 4, "ngIf"], ["class", "valueDot", 3, "left", 4, "ngIf"], ["class", "titleTop", 4, "ngIf"], ["class", "titleBottom", 4, "ngIf"], [1, "previousValue"], [1, "valueBar"], [1, "valueDot"], [1, "titleTop"], [1, "titleText", 3, "innerHTML"], [1, "titleBottom"]],
        template: function ValueGaugeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ValueGaugeComponent_div_2_Template, 1, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ValueGaugeComponent_div_3_Template, 1, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ValueGaugeComponent_div_4_Template, 1, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ValueGaugeComponent_label_5_Template, 2, 1, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValueGaugeComponent_label_6_Template, 2, 1, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bar", ctx.isBar)("dot", ctx.isDot);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.previousValue != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isBar);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isDot);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleTop);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleBottom);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
        styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: stretch;\n  height: 100%;\n  padding: 0.5rem 0px;\n  position: relative;\n}\n.content[_ngcontent-%COMP%] {\n  border: 2px solid white;\n  height: 100%;\n  position: relative;\n}\n.bar[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  border-left-style: none;\n  border-right-style: none;\n}\n.dot[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::before {\n  border-top: 2px solid white;\n  content: \"\";\n  display: block;\n  left: 0;\n  position: absolute;\n  top: calc(50% - 2px / 2);\n  width: 100%;\n}\n.previousValue[_ngcontent-%COMP%] {\n  background-color: #666666;\n  height: 2rem;\n  width: 2px;\n  position: absolute;\n  top: calc(50% - 1rem);\n  transform: translateX(-50%);\n  transition: all 225ms;\n}\n.valueBar[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 1rem;\n  position: absolute;\n  top: calc(50% - 0.5rem);\n  transition: all 700ms 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.valueDot[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 1.2rem;\n  width: 1.2rem;\n  border-radius: 0.6rem;\n  position: absolute;\n  top: calc(50% - 0.6rem);\n  transform: translateX(-50%);\n  transition: all 700ms 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.titleTop[_ngcontent-%COMP%], .titleBottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.titleTop[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%], .titleBottom[_ngcontent-%COMP%]   .titleText[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0px 0.5rem;\n}\n.titleTop[_ngcontent-%COMP%] {\n  top: 0px;\n}\n.titleBottom[_ngcontent-%COMP%] {\n  bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInZhbHVlLWdhdWdlLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGQSxtQkFBQTtBQW1GQSxXQUFBO0FDL0pBO0VBQ0UsY0FBQTtBQUZGO0FBSUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREY7QUFHQTtFQUNFLHVCRHVCUztFQ3RCVCxZQUFBO0VBS0Esa0JBQUE7QUFKRjtBQU9FO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQUpKO0FBT0U7RUFDRSwyQkRRTztFQ1BQLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FBSko7QUFPQTtFQUNFLHlCRDdCa0I7RUM4QmxCLFlBQUE7RUFDQSxVRFJjO0VDU2Qsa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU1BO0VBQ0UsdUJENUNrQjtFQzZDbEIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3REFBQTtBQUhGO0FBWUE7RUFDRSx1QkQxRGtCO0VDMkRsQixjQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0RBQUE7QUFURjtBQWVBOztFQUVFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQVpGO0FBY0U7O0VBQ0UsdUJEN0VnQjtFQzhFaEIsbUJBQUE7QUFYSjtBQWFBO0VBQ0UsUUFBQTtBQVZGO0FBWUE7RUFDRSxXQUFBO0FBVEYiLCJmaWxlIjoidmFsdWUtZ2F1Z2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJ1xuXG5cbiRib3JkZXI6ICRib3JkZXItTVxuXG46aG9zdFxuICBkaXNwbGF5OiBibG9ja1xuXG4uY29udGFpbmVyXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaFxuICBoZWlnaHQ6IDEwMCVcbiAgcGFkZGluZzogJG1hcmdpbi1TIDBweFxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLmNvbnRlbnRcbiAgYm9yZGVyOiAkYm9yZGVyXG4gIGhlaWdodDogMTAwJVxuICAvLyBkaXNwbGF5OiBmbGV4XG4gIC8vIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcFxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAvLyBhbGlnbi1pdGVtczogZmxleC1zdGFydFxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuLmJhclxuICAuY29udGVudFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lXG5cbi5kb3RcbiAgLmNvbnRlbnQ6OmJlZm9yZVxuICAgIGJvcmRlci10b3A6ICRib3JkZXJcbiAgICBjb250ZW50OiAnJ1xuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgbGVmdDogMFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICAgIHRvcDogY2FsYyg1MCUgLSAjeyRib3JkZXJXaWR0aC1NfSAvIDIpXG4gICAgd2lkdGg6IDEwMCVcblxuXG4ucHJldmlvdXNWYWx1ZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XG4gIGhlaWdodDogMnJlbVxuICB3aWR0aDogJGJvcmRlcldpZHRoLU1cbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRvcDogY2FsYyg1MCUgLSAxcmVtKVxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcbiAgdHJhbnNpdGlvbjogYWxsICRhbmltYXRpb25EdXJhdGlvbi1NXG5cbi52YWx1ZUJhclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuICBoZWlnaHQ6IDFyZW1cbiAgcG9zaXRpb246IGFic29sdXRlXG4gIHRvcDogY2FsYyg1MCUgLSAwLjVyZW0pXG4gIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMXG5cbi8vIC52YWx1ZUJhci52YWx1ZUNoYW5nZVxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuLy8gICB0cmFuc2l0aW9uOiBhbGwgbm9uZVxuXG4vLyAgICYubmVnYXRpdmVcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5XG5cbi52YWx1ZURvdFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeVxuICBoZWlnaHQ6IDEuMnJlbVxuICB3aWR0aDogMS4ycmVtXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbVxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgdG9wOiBjYWxjKDUwJSAtIDAuNnJlbSlcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXG4gIHRyYW5zaXRpb246IGFsbCAkYW5pbWF0aW9uVGltaW5nV2l0aERlbGF5LVhMXG5cbi8vIC52YWx1ZURvdC5wcmV2aW91c1ZhbHVlXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1zZWNvbmRhcnlcbi8vICAgdHJhbnNpdGlvbjogYWxsIG5vbmVcblxuLnRpdGxlVG9wLFxuLnRpdGxlQm90dG9tXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBsZWZ0OiAwXG4gIHJpZ2h0OiAwXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG4gIC50aXRsZVRleHRcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeUJnXG4gICAgcGFkZGluZzogMHB4ICRtYXJnaW4tU1xuXG4udGl0bGVUb3BcbiAgdG9wOiAwcHhcblxuLnRpdGxlQm90dG9tXG4gIGJvdHRvbTogMHB4Il19 */"]
      });
      /***/
    },

    /***/
    74526:
    /*!**************************************************************!*\
      !*** ./src/app/pages/title-screen/title-screen.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TitleScreenComponent": function TitleScreenComponent() {
          return (
            /* binding */
            _TitleScreenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../shared */
      51679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _TitleScreenComponent = /*#__PURE__*/function () {
        function _TitleScreenComponent(shared) {
          _classCallCheck(this, _TitleScreenComponent);

          this.shared = shared;
        }

        _createClass(_TitleScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "t",
          value: function t(text) {
            return this.shared.getText(text);
          }
        }]);

        return _TitleScreenComponent;
      }();

      _TitleScreenComponent.ɵfac = function TitleScreenComponent_Factory(t) {
        return new (t || _TitleScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.SharedService));
      };

      _TitleScreenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TitleScreenComponent,
        selectors: [["app-title-screen"]],
        decls: 5,
        vars: 4,
        consts: [["id", "titleAndIntro"], [3, "innerHTML"], ["routerLink", "game", 3, "innerHTML"], ["id", "authors", 3, "innerHTML"]],
        template: function TitleScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("The Agile Quest Game"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("TITLE_SCREEN_INTRO"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("Start game"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.t("AUTHORS"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
        styles: ["[_nghost-%COMP%] {\n  display: grid;\n  height: 100vh;\n  width: 100vw;\n  padding: 3rem;\n  grid-template-rows: 1fr 1em;\n  grid-template-columns: 1fr;\n}\n#titleAndIntro[_ngcontent-%COMP%] {\n  grid-area: 1/1;\n  align-self: center;\n  justify-self: center;\n  max-width: 40rem;\n  padding: 3rem;\n  text-align: center;\n}\n#titleAndIntro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1.5rem;\n}\n#titleAndIntro[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n#titleAndIntro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  min-height: 4rem;\n  min-width: 20rem;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n}\n#authors[_ngcontent-%COMP%] {\n  grid-area: 2/1;\n  font-size: 0.72rem;\n  padding-right: 3rem;\n  text-align: center;\n}\n#authors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit !important;\n  text-decoration: none !important;\n}\n#authors[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsInRpdGxlLXNjcmVlbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRkEsbUJBQUE7QUFtRkEsV0FBQTtBQ2pLQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFENkNXO0VDNUNYLDJCQUFBO0VBQ0EsMEJBQUE7QUFBRjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkQwQ1c7RUN6Q1gsYURvQ1c7RUNuQ1gsa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJES1c7RUNKWCxxQkQ4QlM7QUM3QmI7QUFDRTtFQUNFLGlCRERVO0FDRWQ7QUFDRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUVBLGlCRFRVO0VDVVYseUJBQUE7QUFBSjtBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCRGxCWTtFQ21CWixtQkRhVztFQ1pYLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUFJO0VBQ0UscUNBQUE7QUFFTiIsImZpbGUiOiJ0aXRsZS1zY3JlZW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ35AYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xuXG4kZm9udEluY3JlbWVudC1NOiAgIDEyMCU7XG5cbiRmb250RmFtaWx5LXByaW1hcnk6ICdZYW50cmFtYW5hdicsIHNhbnMtc2VyaWY7XG5cbiRjb2xvci1wcmltYXJ5OiAgICAgd2hpdGU7XG4kY29sb3Itb25QcmltYXJ5OiAgIGJsYWNrO1xuJGNvbG9yLXByaW1hcnlCZzogICBibGFjaztcbiRjb2xvci1wcmltYXJ5QmdGYWRlZDogIGNvbG9yLmNoYW5nZSgkY29sb3ItcHJpbWFyeUJnLCAkYWxwaGE6IDAuNSk7XG4kY29sb3ItYWNjZW50OiAgICAgICNkY2NhNTg7XG4kY29sb3ItYWNjZW50RGFya2VyOiBjb2xvci5jaGFuZ2UoJGNvbG9yLWFjY2VudCwgJGxpZ2h0bmVzczogNDAlKTtcbiRjb2xvci1zZWNvbmRhcnk6ICAgY29sb3IubWl4KCRjb2xvci1vblByaW1hcnksICRjb2xvci1wcmltYXJ5LCA2MCUpO1xuXG4kYWxwaGEtb3ZlcmxheTogMC44O1xuJGFscGhhLWJ1dHRvbkJnOiAwLjE1O1xuJGFscGhhLWZhZGVkOiAwLjM7XG4kb3BhY2l0eS1kaXNhYmxlZDogMC41O1xuXG4kZm9udFNpemUtWFM6IDAuNzJyZW07XG4kZm9udFNpemUtUzogIDAuOHJlbTtcbiRmb250U2l6ZS1NOiAgMXJlbTtcbiRmb250U2l6ZS1MOiAgMS4ycmVtO1xuJGZvbnRTaXplLVhMOiAxLjVyZW07XG4kZm9udFNpemUtWFhMOiAzLjVyZW07XG5cbiRmb250V2VpZ2h0LU06IDUwMDtcbiRmb250V2VpZ2h0LUw6IDkwMDtcblxuJGZvbnRTaXplLWljb25MOiAzMnB4O1xuXG4kbGluZUhlaWdodC1TOiAxLjE7XG4kbGluZUhlaWdodC1NOiAxLjM7XG5cbiRib3JkZXJXaWR0aC1TOiAxcHg7XG4kYm9yZGVyV2lkdGgtTTogMnB4O1xuJGJvcmRlcldpZHRoLUw6IDNweDtcblxuJGJvcmRlci1TOiAkYm9yZGVyV2lkdGgtUyBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiRib3JkZXItTTogJGJvcmRlcldpZHRoLU0gc29saWQgJGNvbG9yLXByaW1hcnk7XG4kYm9yZGVyLUw6ICRib3JkZXJXaWR0aC1MIHNvbGlkICRjb2xvci1wcmltYXJ5O1xuXG4kYm9yZGVyUmFkaXVzLU06IDRweDtcbiRib3JkZXJSYWRpdXMtWEw6IDEuNXJlbTtcblxuJGJveFNoYWRvdy1NOiAwIDZweCAycHggLTRweCByZ2JhKDAsMCwwLC4yKSwgMCA0cHggNHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xuXG4kbWFyZ2luLVhTOiAgMC4yNXJlbTtcbiRtYXJnaW4tUzogICAwLjVyZW07XG4kbWFyZ2luLU06ICAgMXJlbTtcbiRtYXJnaW4tTDogICAxLjVyZW07XG4kbWFyZ2luLVhMOiAgM3JlbTtcbiRtYXJnaW4tWFhMOiA2cmVtO1xuXG4kbWF4V2lkdGgtUzogMjVyZW07XG4kbWF4V2lkdGgtTTogMzhyZW07XG4kbWF4V2lkdGgtTDogNDByZW07XG4kbWF4V2lkdGgtWEw6IDYwcmVtOyBcblxuJGFuaW1hdGlvbkVhc2luZzogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRhbmltYXRpb25EdXJhdGlvbi1NOiAyMjVtcztcbiRhbmltYXRpb25EdXJhdGlvbi1YTDogNzAwbXM7XG4kYW5pbWF0aW9uVGltaW5nLU06ICRhbmltYXRpb25EdXJhdGlvbi1NICRhbmltYXRpb25FYXNpbmc7XG4kYW5pbWF0aW9uVGltaW5nLVhMOiAkYW5pbWF0aW9uRHVyYXRpb24tWEwgJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktTTogJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkR1cmF0aW9uLU0gJGFuaW1hdGlvbkVhc2luZztcbiRhbmltYXRpb25UaW1pbmdXaXRoRGVsYXktWEw6ICRhbmltYXRpb25EdXJhdGlvbi1YTCAkYW5pbWF0aW9uRHVyYXRpb24tTSAkYW5pbWF0aW9uRWFzaW5nO1xuXG4kekluZGV4LTEwOiAxMDAwO1xuJHpJbmRleC05OiA5MDA7IC8vIFBvcHVwc1xuJHpJbmRleC04OiA4MDA7IC8vIFxuJHpJbmRleC03OiA3MDA7IC8vIFxuJHpJbmRleC02OiA2MDA7IC8vIFxuJHpJbmRleC01OiA1MDA7IC8vIENhcmRzXG4kekluZGV4LTQ6IDQwMDsgLy8gXG4kekluZGV4LTM6IDMwMDsgLy8gXG4kekluZGV4LTI6IDIwMDsgLy9cbiR6SW5kZXgtMTogMTAwOyAvL1xuJHpJbmRleC0wOiAwO1xuXG5cbi8qIE1hdGVyaWFsIHRoZW1lICovXG5cbi8vIFR5cG9ncmFwaHlcbi8vIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90eXBvZ3JhcGh5XG4vLyBVc2FnZTogQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRhcHAtdHlwb2dyYXBoeSwgdGl0bGUpXG4kYXBwLXR5cG9ncmFwaHk6IG1hdC5kZWZpbmUtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogJGZvbnRGYW1pbHktcHJpbWFyeVxuKTtcblxuLy8gQ3VzdG9tIHBhbGV0dGVzIGFuZCB0aGVtZVxuLy8gU2VlIGh0dHA6Ly9tY2cubWJpdHNvbi5jb20vXG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItcHJpbWFyeSAvICNmZmZcbiRwYWxldHRlLXByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZSgoXG4gICAgNTAgOiAjZmZmZmZmLFxuICAgIDEwMCA6ICNmZmZmZmYsXG4gICAgMjAwIDogI2ZmZmZmZixcbiAgICAzMDAgOiAjZmZmZmZmLFxuICAgIDQwMCA6ICNmZmZmZmYsXG4gICAgNTAwIDogI2ZmZmZmZixcbiAgICA2MDAgOiAjZmZmZmZmLFxuICAgIDcwMCA6ICNmZmZmZmYsXG4gICAgODAwIDogI2ZmZmZmZixcbiAgICA5MDAgOiAjZmZmZmZmLFxuICAgIEExMDAgOiAjZmZmZmZmLFxuICAgIEEyMDAgOiAjZmZmZmZmLFxuICAgIEE0MDAgOiAjZmZmZmZmLFxuICAgIEE3MDAgOiAjZmZmZmZmLFxuICAgIGNvbnRyYXN0OiAoXG4gICAgICAgIDUwIDogIzAwMDAwMCxcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcbiAgICAgICAgMzAwIDogIzAwMDAwMCxcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcbiAgICAgICAgNjAwIDogIzAwMDAwMCxcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgICAgODAwIDogIzAwMDAwMCxcbiAgICAgICAgOTAwIDogIzAwMDAwMCxcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxuICAgICAgICBBNDAwIDogIzAwMDAwMCxcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gICAgKVxuKSk7XG5cbi8vIEJhc2UgY29sb3VyOiAkY29sb3ItYWNjZW50IC8gI2RjY2E1OFxuJHBhbGV0dGUtYWNjZW50OiBtYXQuZGVmaW5lLXBhbGV0dGUoKFxuICA1MCA6ICNmYmY5ZWIsXG4gIDEwMCA6ICNmNWVmY2QsXG4gIDIwMCA6ICNlZWU1YWMsXG4gIDMwMCA6ICNlN2RhOGEsXG4gIDQwMCA6ICNlMWQyNzEsXG4gIDUwMCA6ICNkY2NhNTgsXG4gIDYwMCA6ICNkOGM1NTAsXG4gIDcwMCA6ICNkM2JkNDcsXG4gIDgwMCA6ICNjZWI3M2QsXG4gIDkwMCA6ICNjNWFiMmQsXG4gIEExMDAgOiAjZmZmZmZmLFxuICBBMjAwIDogI2ZmZjdkNCxcbiAgQTQwMCA6ICNmZmVlYTEsXG4gIEE3MDAgOiAjZmZlOTg3LFxuICBjb250cmFzdDogKFxuICAgICAgNTAgOiAjMDAwMDAwLFxuICAgICAgMTAwIDogIzAwMDAwMCxcbiAgICAgIDIwMCA6ICMwMDAwMDAsXG4gICAgICAzMDAgOiAjMDAwMDAwLFxuICAgICAgNDAwIDogIzAwMDAwMCxcbiAgICAgIDUwMCA6ICMwMDAwMDAsXG4gICAgICA2MDAgOiAjMDAwMDAwLFxuICAgICAgNzAwIDogIzAwMDAwMCxcbiAgICAgIDgwMCA6ICMwMDAwMDAsXG4gICAgICA5MDAgOiAjMDAwMDAwLFxuICAgICAgQTEwMCA6ICMwMDAwMDAsXG4gICAgICBBMjAwIDogIzAwMDAwMCxcbiAgICAgIEE0MDAgOiAjMDAwMDAwLFxuICAgICAgQTcwMCA6ICMwMDAwMDAsXG4gIClcbikpO1xuXG4kcGFsZXR0ZS13YXJuOiBtYXQuZGVmaW5lLXBhbGV0dGUobWF0LiRyZWQtcGFsZXR0ZSwgQTIwMCk7XG4kYXBwLXRoZW1lOiBtYXQuZGVmaW5lLWxpZ2h0LXRoZW1lKCRwYWxldHRlLXByaW1hcnksICRwYWxldHRlLWFjY2VudCwgJHBhbGV0dGUtd2Fybik7XG5cbi8qIE1peGlucyAqL1xuXG5AbWl4aW4gYWxsQ2FwcyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbkBtaXhpbiBidXR0b25PbldoaXRlIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3IuY2hhbmdlKCRjb2xvci1wcmltYXJ5LCAkYWxwaGE6IDAuNSAqICRhbHBoYS1idXR0b25CZyk7XG4gIH0gXG59XG5cbkBtaXhpbiBidXR0b25PbkNvbG9yIHtcbiAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufSIsIkB1c2UgJ3Nhc3M6Y29sb3InXG5AaW1wb3J0ICd2YXJpYWJsZXMuc2NzcydcblxuOmhvc3RcbiAgZGlzcGxheTogZ3JpZFxuICBoZWlnaHQ6IDEwMHZoXG4gIHdpZHRoOiAxMDB2d1xuICBwYWRkaW5nOiAkbWFyZ2luLVhMXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFlbVxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmclxuXG4jdGl0bGVBbmRJbnRyb1xuICBncmlkLWFyZWE6IDEgLyAxXG4gIGFsaWduLXNlbGY6IGNlbnRlclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlclxuICBtYXgtd2lkdGg6ICRtYXhXaWR0aC1MXG4gIHBhZGRpbmc6ICRtYXJnaW4tWExcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbiAgaDFcbiAgICBmb250LXNpemU6ICRmb250U2l6ZS1YWExcbiAgICBtYXJnaW4tYm90dG9tOiAkbWFyZ2luLUxcblxuICA+IGRpdlxuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplLUxcblxuICBidXR0b25cbiAgICB3aWR0aDogYXV0b1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvXG4gICAgbWluLWhlaWdodDogNHJlbVxuICAgIG1pbi13aWR0aDogMjByZW1cbiAgICAvLyBmb250LWZhbWlseTogJGZvbnRGYW1pbHktYWNjZW50XG4gICAgZm9udC1zaXplOiAkZm9udFNpemUtWExcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG5cbiNhdXRob3JzXG4gIGdyaWQtYXJlYTogMiAvIDFcbiAgZm9udC1zaXplOiAkZm9udFNpemUtWFNcbiAgcGFkZGluZy1yaWdodDogJG1hcmdpbi1YTFxuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuICBhXG4gICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50XG4gICAgJjpob3ZlclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudCJdfQ== */"]
      });
      /***/
    },

    /***/
    1743:
    /*!**************************************!*\
      !*** ./src/app/shared/d3.service.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "D3Service": function D3Service() {
          return (
            /* binding */
            _D3Service
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! d3 */
      78717);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /*
       * A basic wrapper around d3.js
       * To access the d3 namespace, use D3Service.d3
       */


      var _D3Service = function _D3Service() {
        _classCallCheck(this, _D3Service);

        this.d3 = d3__WEBPACK_IMPORTED_MODULE_0__;
      };

      _D3Service.ɵfac = function D3Service_Factory(t) {
        return new (t || _D3Service)();
      };

      _D3Service.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _D3Service,
        factory: _D3Service.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    51679:
    /*!*********************************!*\
      !*** ./src/app/shared/index.ts ***!
      \*********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ANIMATION_DURATION": function ANIMATION_DURATION() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION
          );
        },

        /* harmony export */
        "ANIMATION_DURATION_MS": function ANIMATION_DURATION_MS() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_DURATION_MS
          );
        },

        /* harmony export */
        "ANIMATION_EASING": function ANIMATION_EASING() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_EASING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING": function ANIMATION_TIMING() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING_DELAYED": function ANIMATION_TIMING_DELAYED() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_TIMING_DELAYED
          );
        },

        /* harmony export */
        "DEFAULT_LOCALE": function DEFAULT_LOCALE() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_LOCALE
          );
        },

        /* harmony export */
        "PERSPECTIVE": function PERSPECTIVE() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.PERSPECTIVE
          );
        },

        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* reexport safe */
            _shared_service__WEBPACK_IMPORTED_MODULE_0__.SharedService
          );
        },

        /* harmony export */
        "D3Service": function D3Service() {
          return (
            /* reexport safe */
            _d3_service__WEBPACK_IMPORTED_MODULE_2__.D3Service
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared.service */
      77420);
      /* harmony import */


      var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared.types */
      17537);
      /* harmony import */


      var _d3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./d3.service */
      1743);
      /***/

    },

    /***/
    77420:
    /*!******************************************!*\
      !*** ./src/app/shared/shared.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ANIMATION_DURATION_MS": function ANIMATION_DURATION_MS() {
          return (
            /* binding */
            _ANIMATION_DURATION_MS
          );
        },

        /* harmony export */
        "ANIMATION_DURATION": function ANIMATION_DURATION() {
          return (
            /* binding */
            _ANIMATION_DURATION
          );
        },

        /* harmony export */
        "ANIMATION_EASING": function ANIMATION_EASING() {
          return (
            /* binding */
            _ANIMATION_EASING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING": function ANIMATION_TIMING() {
          return (
            /* binding */
            _ANIMATION_TIMING
          );
        },

        /* harmony export */
        "ANIMATION_TIMING_DELAYED": function ANIMATION_TIMING_DELAYED() {
          return (
            /* binding */
            _ANIMATION_TIMING_DELAYED
          );
        },

        /* harmony export */
        "DEFAULT_LOCALE": function DEFAULT_LOCALE() {
          return (
            /* binding */
            _DEFAULT_LOCALE
          );
        },

        /* harmony export */
        "PERSPECTIVE": function PERSPECTIVE() {
          return (
            /* binding */
            _PERSPECTIVE
          );
        },

        /* harmony export */
        "SharedService": function SharedService() {
          return (
            /* binding */
            _SharedService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      35758);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _ANIMATION_DURATION_MS = 225;

      var _ANIMATION_DURATION = _ANIMATION_DURATION_MS + 'ms';

      var _ANIMATION_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)';

      var _ANIMATION_TIMING = "".concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_EASING);

      var _ANIMATION_TIMING_DELAYED = "".concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_DURATION, " ").concat(_ANIMATION_EASING);

      var _DEFAULT_LOCALE = 'en-US';
      var _PERSPECTIVE = 'perspective(1000px)';
      var SETTINGS_URL = 'assets/data/settings.json';
      var TEXTS_URL = 'assets/data/texts.json';

      var _SharedService = /*#__PURE__*/function () {
        function _SharedService(http, locale) {
          _classCallCheck(this, _SharedService);

          this.http = http;
          this.locale = locale;
          this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.indicators = {};
          this.ready = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
          this.ribbons = {};
          this.scenarios = {};
          this.strategies = {};
          this.loadData();
        }

        _createClass(_SharedService, [{
          key: "loadData",
          value: function loadData() {
            var _this13 = this;

            (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.forkJoin)([this.http.get(SETTINGS_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (d) {
              _this13.processSettings(d);

              return true;
            })), this.http.get(TEXTS_URL).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (d) {
              _this13.texts = d;
              return true;
            }))]).subscribe(function (_) {
              return _this13.ready.next(true);
            });
          }
          /*
           * Process the whole settings json object
           */

        }, {
          key: "processSettings",
          value: function processSettings(settings) {
            this.settings = {
              version: settings.version,
              rounds: settings.rounds
            };

            for (var _i = 0, _arr = ['indicators', 'ribbons', 'scenarios', 'strategies']; _i < _arr.length; _i++) {
              var list = _arr[_i];
              this[list] = this.processJsonList(settings[list]);
            }

            this.firstScenario = settings.scenarios[0];
          }
          /*
           * Create proper objects from settings.json sublists
           */

        }, {
          key: "processJsonList",
          value: function processJsonList(data) {
            var dict = {};
            data.forEach(function (d) {
              return dict[d.id] = d;
            });
            return dict;
          }
          /*
           * Return the prompt text in current locale or the text itself if that's not available.
           * If text is a localized string, select the correct localized version or use the default.
           * Note that if the text is to contain any HTML markup, it should be used as a bound
           * property, i.e., <span [innerHTML]="shared.getText('Text')"></span>. It will be
           * sanitized by Angular but basic formatting and links are allowed, at least.
           */

        }, {
          key: "getText",
          value: function getText(text) {
            var _a, _b, _c;

            if (text == null) return "";else if (typeof text === "string") return (_b = (_a = this.texts[text]) === null || _a === void 0 ? void 0 : _a[this.locale]) !== null && _b !== void 0 ? _b : text;else return (_c = text[this.locale]) !== null && _c !== void 0 ? _c : text[_DEFAULT_LOCALE];
          }
        }]);

        return _SharedService;
      }();

      _SharedService.ɵfac = function SharedService_Factory(t) {
        return new (t || _SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID));
      };

      _SharedService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _SharedService,
        factory: _SharedService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    17537:
    /*!****************************************!*\
      !*** ./src/app/shared/shared.types.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map