/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./app/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';

	// Объявление модуля
	var validation = function () {

		// Инициализирует наш модуль
		var init = function init() {
			_setUpListners();
		};

		// Прослушивает события
		var _setUpListners = function _setUpListners() {};

		//Универсальня функция
		var validateForm = function validateForm(form) {

			var elements = form.find('input, textarea').not('input[type="file"],input[type="submit"]'),
			    valid = true;

			// Пройдемся по всем элементам формы
			$.each(elements, function (index, val) {
				var element = $(val),
				    val = element.val(),
				    pos = element.attr('qtip-position');

				if (val.length === 0) {
					// element.addClass('error');
					// _createQtip(element, pos);
					alert('Все плохо');
					valid = false;
				}
			});

			return valid;
		};

		// Возвращаем объект (публичные методы)
		return {
			init: init,
			validateForm: validateForm
		};
	}();

	validation.init();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDA3MGIzYjkwZWMzNzRhNjViN2EyP2Q5YTgqIiwid2VicGFjazovLy9hcHAvanMvdmFsaWRhdGVuLmpzIiwid2VicGFjazovLy8/ZDQxZCoiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9hcHAvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDcwYjNiOTBlYzM3NGE2NWI3YTIiLCIvLyDQntCx0YrRj9Cy0LvQtdC90LjQtSDQvNC+0LTRg9C70Y9cclxudmFyIHZhbGlkYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdGCINC90LDRiCDQvNC+0LTRg9C70YxcclxuXHR2YXIgaW5pdCA9ICgpID0+IHtcclxuXHRcdF9zZXRVcExpc3RuZXJzKCk7XHJcblx0fTtcclxuXHJcblx0Ly8g0J/RgNC+0YHQu9GD0YjQuNCy0LDQtdGCINGB0L7QsdGL0YLQuNGPXHJcblx0dmFyIF9zZXRVcExpc3RuZXJzID0gKCkgPT4ge1xyXG5cdFx0XHJcblx0fTtcclxuXHJcblx0XHJcblx0Ly/Qo9C90LjQstC10YDRgdCw0LvRjNC90Y8g0YTRg9C90LrRhtC40Y9cclxuXHR2YXIgdmFsaWRhdGVGb3JtID0gKGZvcm0pID0+IHtcclxuXHJcblx0XHR2YXIgZWxlbWVudHMgPSBmb3JtLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLm5vdCgnaW5wdXRbdHlwZT1cImZpbGVcIl0saW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxyXG5cdFx0XHR2YWxpZCA9IHRydWU7XHJcblxyXG5cdFx0XHQvLyDQn9GA0L7QudC00LXQvNGB0Y8g0L/QviDQstGB0LXQvCDRjdC70LXQvNC10L3RgtCw0Lwg0YTQvtGA0LzRi1xyXG5cdFx0XHQkLmVhY2goZWxlbWVudHMsIChpbmRleCwgdmFsKSA9PiB7XHJcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSAkKHZhbCksXHJcblx0XHRcdFx0XHRcdHZhbCA9IGVsZW1lbnQudmFsKCksXHJcblx0XHRcdFx0XHRcdHBvcyA9IGVsZW1lbnQuYXR0cigncXRpcC1wb3NpdGlvbicpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHZhbC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0XHQvLyBlbGVtZW50LmFkZENsYXNzKCdlcnJvcicpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIF9jcmVhdGVRdGlwKGVsZW1lbnQsIHBvcyk7XHJcblx0XHRcdFx0XHRcdFx0YWxlcnQoJ9CS0YHQtSDQv9C70L7RhdC+Jyk7XHJcblx0XHRcdFx0XHRcdFx0dmFsaWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiB2YWxpZDtcclxuXHR9O1xyXG5cclxuXHQvLyDQktC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIgKNC/0YPQsdC70LjRh9C90YvQtSDQvNC10YLQvtC00YspXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGluaXQsXHJcblx0XHR2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybVxyXG5cdH07XHJcblxyXG59KSgpO1xyXG5cclxudmFsaWRhdGlvbi5pbml0KCk7XHJcblx0XHRcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2pzL3ZhbGlkYXRlbi5qcyIsInVuZGVmaW5lZFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==