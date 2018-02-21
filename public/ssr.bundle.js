/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Portal = function (_React$Component) {
	_inherits(Portal, _React$Component);

	function Portal(props) {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

		_this.rootSelector = document.getElementById('modal-root');
		_this.container = document.createElement('div');
		return _this;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.rootSelector.appendChild(this.container);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.rootSelector.removeChild(this.container);
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.createPortal(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'modal' },
				this.props.children
			), this.container);
		}
	}]);

	return Portal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Portal;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Portal, 'Portal', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/Portal.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/Portal.jsx');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_js_components_App_jsx__ = __webpack_require__(7);







global.fetch = __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default.a;

var port = 1488;
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static('public'));

app.get('/', function (req, res, next) {
	var renderedApp = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__client_js_components_App_jsx__["a" /* default */], null));
	res.send('<!DOCTYPE html>\n\t\t\t\t<html lang="en">\n\t\t\t\t<head>\n\t\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\t   <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n\t\t\t\t\t<title>BlogsApp</title>\n\t\t\t\t\t<link rel="stylesheet" href="style.css">\n\t\t\t\t\t<script defer src="bundle.js"></script>\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id="app">' + renderedApp + '</div>\n\t\t\t\t\t<div id="modal-root" class="modalContainer"></div>\n\t\t\t\t</body>\n\t\t\t\t</html>');
});

app.listen(port, function () {
	console.log('Listening on port ' + port);
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(port, 'port', 'Main/Other/FrontCamp/BlogsApp/src/server/index.js');

	__REACT_HOT_LOADER__.register(app, 'app', 'Main/Other/FrontCamp/BlogsApp/src/server/index.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Blog_jsx__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SearchBlog_jsx__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Portal_jsx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_AddBlogModal_jsx__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.openAddBlogModal = _this.openAddBlogModal.bind(_this);
		_this.closeAddBlogModal = _this.closeAddBlogModal.bind(_this);
		_this.onSearchChange = _this.onSearchChange.bind(_this);
		_this.onDeleteBlog = _this.onDeleteBlog.bind(_this);
		_this.onAddBlog = _this.onAddBlog.bind(_this);

		_this.state = {
			blogs: [{ author: "Author One", title: "Title One", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Two", title: "Title Two", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Three", title: "Title Three", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Four", title: "Title Four", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Five", title: "Title Five", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Six", title: "Title Six", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }, { author: "Author Seven", title: "Title Seven", message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia assumenda sed est quod hic, iste similique, unde eaque, veniam mollitia tempora? Sit voluptates similique eaque veritatis nihil architecto quibusdam inventore." }],
			searchBlog: {
				value: '',
				option: 'title'
			},
			showAddBlogPortal: false
		};

		return _this;
	}

	_createClass(App, [{
		key: "closeAddBlogModal",
		value: function closeAddBlogModal() {
			this.setState({ showAddBlogPortal: false });
		}
	}, {
		key: "openAddBlogModal",
		value: function openAddBlogModal() {
			this.setState({ showAddBlogPortal: true });
		}
	}, {
		key: "onSearchChange",
		value: function onSearchChange(value) {
			this.setState({ searchBlog: value });
		}
	}, {
		key: "onDeleteBlog",
		value: function onDeleteBlog(blog) {
			this.setState(function (prevState) {
				return { blogs: prevState.blogs.filter(function (i) {
						return i !== blog;
					}) };
			});
		}
	}, {
		key: "onAddBlog",
		value: function onAddBlog(blog) {
			this.setState(function (prevState) {
				var newBlogs = prevState.blogs;
				newBlogs.unshift(blog);
				return { blogs: newBlogs };
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "container" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"button",
					{ className: "addBlogBtn btn", onClick: this.openAddBlogModal },
					"Add blog"
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SearchBlog_jsx__["a" /* default */], { onSearchChange: this.onSearchChange }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"ul",
					{ className: "blogList" },
					this.state.blogs.filter(function (blog) {
						return blog[_this2.state.searchBlog.option].includes(_this2.state.searchBlog.value);
					}).map(function (blog, index) {
						return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Blog_jsx__["a" /* default */], { key: index, blog: blog, onDelete: _this2.onDeleteBlog });
					})
				),
				this.state.showAddBlogPortal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3__Portal_jsx__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__modals_AddBlogModal_jsx__["a" /* default */], {
						onAddBlog: this.onAddBlog,
						closeAddBlogModal: this.closeAddBlogModal
					})
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = App;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(App, "App", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/App.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/App.jsx");
}();

;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Portal_jsx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_DeleteBlogModal_jsx__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Blog = function (_React$Component) {
	_inherits(Blog, _React$Component);

	function Blog(props) {
		_classCallCheck(this, Blog);

		var _this = _possibleConstructorReturn(this, (Blog.__proto__ || Object.getPrototypeOf(Blog)).call(this, props));

		_this.state = {
			showDeleteBlogModal: false
		};

		_this.onDelete = _this.onDelete.bind(_this);
		_this.closeDeleteBlogModal = _this.closeDeleteBlogModal.bind(_this);
		_this.openDeleteBlogModal = _this.openDeleteBlogModal.bind(_this);
		return _this;
	}

	_createClass(Blog, [{
		key: "onDelete",
		value: function onDelete() {
			this.props.onDelete(this.props.blog);
		}
	}, {
		key: "closeDeleteBlogModal",
		value: function closeDeleteBlogModal() {
			this.setState({ showDeleteBlogModal: false });
		}
	}, {
		key: "openDeleteBlogModal",
		value: function openDeleteBlogModal(e) {
			e.preventDefault();
			this.setState({ showDeleteBlogModal: true });
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"li",
				{ className: "blogBox" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"dl",
					{ className: "blogInfo" },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dt",
						null,
						" Title: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dd",
						null,
						" ",
						this.props.blog.title,
						" "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dt",
						null,
						" Author: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dd",
						null,
						" ",
						this.props.blog.author,
						" "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dt",
						null,
						" Message: "
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"dd",
						null,
						" ",
						this.props.blog.message
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"a",
					{ href: "#", className: "removeBlog", onClick: this.openDeleteBlogModal },
					" X "
				),
				this.state.showDeleteBlogModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1__Portal_jsx__["a" /* default */],
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__modals_DeleteBlogModal_jsx__["a" /* default */], {
						blog: this.props.blog,
						closeDeleteBlogModal: this.closeDeleteBlogModal,
						acceptDelete: this.onDelete
					})
				)
			);
		}
	}]);

	return Blog;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Blog;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Blog, "Blog", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/Blog.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/Blog.jsx");
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DeleteBlogModal = function (_React$Component) {
	_inherits(DeleteBlogModal, _React$Component);

	function DeleteBlogModal(props) {
		_classCallCheck(this, DeleteBlogModal);

		var _this = _possibleConstructorReturn(this, (DeleteBlogModal.__proto__ || Object.getPrototypeOf(DeleteBlogModal)).call(this, props));

		_this.closeDeleteBlog = _this.closeDeleteBlog.bind(_this);
		_this.acceptDelete = _this.acceptDelete.bind(_this);
		return _this;
	}

	_createClass(DeleteBlogModal, [{
		key: "closeDeleteBlog",
		value: function closeDeleteBlog(e) {
			e.preventDefault();
			this.props.closeDeleteBlogModal();
		}
	}, {
		key: "acceptDelete",
		value: function acceptDelete() {
			this.props.acceptDelete();
			this.props.closeDeleteBlogModal();
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{ className: "deleteBlogModal" },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"a",
					{ href: "#", className: "closeBtn", onClick: this.closeDeleteBlog },
					" X "
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"span",
					{ className: "message" },
					"Do you want delete ",
					this.props.blog.title,
					" blog?"
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					"div",
					{ className: "buttonSet" },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"button",
						{ className: "btn", onClick: this.closeDeleteBlog },
						"No"
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						"button",
						{ className: "btn", onClick: this.acceptDelete },
						"Yes"
					)
				)
			);
		}
	}]);

	return DeleteBlogModal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = DeleteBlogModal;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DeleteBlogModal, "DeleteBlogModal", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/modals/DeleteBlogModal.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "Main/Other/FrontCamp/BlogsApp/src/client/js/components/modals/DeleteBlogModal.jsx");
}();

;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var SearchBlog = function (_React$Component) {
	_inherits(SearchBlog, _React$Component);

	function SearchBlog(props) {
		_classCallCheck(this, SearchBlog);

		var _this = _possibleConstructorReturn(this, (SearchBlog.__proto__ || Object.getPrototypeOf(SearchBlog)).call(this, props));

		_this.state = {
			value: '',
			option: 'title'
		};

		_this.handleChange = _this.handleChange.bind(_this);
		_this.handleOptionChange = _this.handleOptionChange.bind(_this);
		return _this;
	}

	_createClass(SearchBlog, [{
		key: 'handleChange',
		value: function handleChange(e) {
			this.setState({ value: e.target.value }, function () {
				this.props.onSearchChange(this.state);
			});
		}
	}, {
		key: 'handleOptionChange',
		value: function handleOptionChange(e) {
			this.setState({ option: e.target.value }, function () {
				this.props.onSearchChange(this.state);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'searchBlog' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'searchBlogInput', type: 'text', placeholder: 'Search', value: this.state.value, onChange: this.handleChange }),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'form',
					{ className: 'searchBlogOption' },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', value: 'title', checked: this.state.option === 'title', onChange: this.handleOptionChange }),
						'by title'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						null,
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', value: 'author', checked: this.state.option === 'author', onChange: this.handleOptionChange }),
						'by author'
					)
				)
			);
		}
	}]);

	return SearchBlog;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = SearchBlog;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(SearchBlog, 'SearchBlog', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/SearchBlog.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/SearchBlog.jsx');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var AddBlogModal = function (_React$Component) {
	_inherits(AddBlogModal, _React$Component);

	function AddBlogModal(props) {
		_classCallCheck(this, AddBlogModal);

		var _this = _possibleConstructorReturn(this, (AddBlogModal.__proto__ || Object.getPrototypeOf(AddBlogModal)).call(this, props));

		_this.state = {
			title: '',
			author: '',
			message: ''
		};

		_this.closeAddBlog = _this.closeAddBlog.bind(_this);
		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleInputChange = _this.handleInputChange.bind(_this);
		return _this;
	}

	_createClass(AddBlogModal, [{
		key: 'closeAddBlog',
		value: function closeAddBlog(e) {
			e.preventDefault();
			this.props.closeAddBlogModal();
		}
	}, {
		key: 'handleInputChange',
		value: function handleInputChange(e) {
			var name = e.target.name;
			var value = e.target.value;

			this.setState(_defineProperty({}, name, value));
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			if (!this.state.title || !this.state.author || !this.state.message) return;
			this.props.onAddBlog({
				title: this.state.title,
				author: this.state.author,
				message: this.state.message
			});
			this.props.closeAddBlogModal();
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'addBlogModal' },
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'a',
					{ href: '#', className: 'closeBtn', onClick: this.closeAddBlog },
					' X '
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'form',
					{ className: 'addBlogForm', onSubmit: this.handleSubmit },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ htmlFor: 'inputTitle' },
						'Title:'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'title', id: 'inputTitle', type: 'text', value: this.state.title, onChange: this.handleInputChange }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ htmlFor: 'inputAuthor' },
						'Author:'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { name: 'author', id: 'inputAuthor', type: 'text', value: this.state.author, onChange: this.handleInputChange }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'label',
						{ htmlFor: 'inputMessage' },
						'Message:'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: 'message', id: 'inputMessage', value: this.state.message, onChange: this.handleInputChange }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'button',
						{ className: 'addBlogBtn btn' },
						'Add blog'
					)
				)
			);
		}
	}]);

	return AddBlogModal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = AddBlogModal;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(AddBlogModal, 'AddBlogModal', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/modals/AddBlogModal.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'Main/Other/FrontCamp/BlogsApp/src/client/js/components/modals/AddBlogModal.jsx');
}();

;

/***/ })
/******/ ]);