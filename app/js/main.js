// Объявление модуля
var myModale = ( () => {

	// Инициализирует наш модуль
	let init = () => {
		_setUpListners();
	};

	// Прослушивает события
	let _setUpListners = () => {
        $('.container__contact--submit').on('submit', _submitForm);
	};
    /*=========================================*/
            /*Валидация формы отправки*/ 
     /*=========================================*/
            let _submitForm = (ev) => {
                console.log('форма отправлена');
                ev.preventDefault();
                
                let form    = $(this),
                    url     = 'contacteme.php',
                    defObj  = _ajaxForm(form, url);
            };

            let _ajaxForm = (form, url) => {
                if (!validation.validateForm(form)) return false;
            };



            // let comentArea = document.querySelector('.container__contact--input');
            // comentArea.addEventListener('invalid', (e) => {
            //     e.target.setCustomValidity('');
            //     if (!e.target.validity.valid) {
            //         e.target.setCustomValidity('Пожалуйста представтесь');
            //     }
            // });

            // comentArea.addEventListener('input', (e) => {
            //     e.target.setCustomValidity('');
            // });


            // Chart.js Подключае...
            // let ctx = document.getElementById('myChart');
            //     let data = {
            //         labels: ["Web-design", "Frontend", "Photoshop", "Ilustrator", "Html", "CSS", "JS"],
            //         datasets: [
            //             {
            //                 label: "Мои навыки сегодня %",
            //                 backgroundColor: "rgba(44,202,144,0)",
            //                 borderColor: "#3a6aec",
            //                 pointBackgroundColor: "#3a6aec",
            //                 pointBorderColor: "#fff",
            //                 pointHoverBackgroundColor: "#fff",
            //                 pointHoverBorderColor: "rgba(179,181,198,1)",
            //                 data: [70, 70, 80, 68, 80, 70, 70]
            //             },
            //             {
            //                 label: "Мои навыки год назад %",
            //                 backgroundColor: "rgba(239,0,74,0.0)",
            //                 borderColor: "#3a6aec",
            //                 pointBackgroundColor: "#3a6aec",
            //                 pointBorderColor: "#fff",
            //                 pointHoverBackgroundColor: "#fff",
            //                 pointHoverBorderColor: "#3a6aec",
            //                 data: [20, 15, 40, 8, 25, 20, 15]
            //             }
            //         ]
            //     };

            //     let option = {
            //             animation: {
            //             duration: 5000
            //         }
            //     }

            //     let myBarChart = Chart.Radar(ctx, {
            //         data   :data,
            //         options:option
            //     })
 
    // Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

// Вызов модуля
myModale.init();
