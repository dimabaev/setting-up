// Объявление модуля
var validation = (function () {

	// Инициализирует наш модуль
	var init = () => {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = () => {
		
	};

	
	//Универсальня функция
	var validateForm = (form) => {

		var elements = form.find('input, textarea').not('input[type="file"],input[type="submit"]'),
			valid = true;

			// Пройдемся по всем элементам формы
			$.each(elements, (index, val) => {
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

})();

validation.init();
		


