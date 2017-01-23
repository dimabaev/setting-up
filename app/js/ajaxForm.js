// Объявление модуля
var modalWindow = (function() {

      // Инициализирует наш модуль
      var init = () => {
        _setUpListners();
      };

      // Прослушивает события
      var _setUpListners = () => {
 
      };

      //Универсальная функция
      //1.Собирает данные из формы
      //2.проверяет форму
      //3.Делает запрос на сервер и возвращает ответ с сервера
      var _ajaxForm = (form, url) => {

        if (!validation.validateForm(form)) return false;

        data = form.serialize();

        var result = $.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          data: data,
          success: function(data) {
            $('#results').html(data);
          },
          error:  function(xhr, str){
	          alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
        return result;
      };

      // Возвращаем объект (публичные методы)
      return {
        init: init
      };

})();

// Вызов модуля
modalWindow.init();
