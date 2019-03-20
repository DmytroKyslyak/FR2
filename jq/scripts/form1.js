class b_form { 
	constructor (sSelector){ // конструктор описывает свойства
		this.form = $(sSelector); //шаг4 ****$ авто+водитель+gps **** sSelector-место назначения(адрес)
		this.createEvents();
	}
	
	showInfo(event){ // метод
		// currentTarget - ссылка на него, с чем происходит работа
		let jpFormOKButton = $(event.currentTarget);
		
		this.form.find('.b-form__season')	// обект 
			.each(							// цикл
			(i, oSeason)=>{					// функция которая содержит команды тела цикла
				let jqSeason = $(oSeason);
				}
			);
		
		alert(
			'Ваша форма:'
			+ '\nИмя: '						+ this.form.find('.b-form__name').val()
			+ '\nФамилия: '					+ this.form.find('.b-form__surname').val()
			+ '\nВаше любимое время года: '	+ this.form.find('.b-form__season').val()
			+ '\nВаш любимый фрукт: '		+ this.form.find('.b-form__fruit:checked').val()
			+ '\nВаше любимое животное: '	+ this.form.find('.b-form__animals>option:selected').html()
			+ '\nВаш отзыв: '				+ this.form.find('.b-form__review').val()
			);
		} 
	
	createEvents(){// шаг5
		this.form.find('.b-form__ok-button').click(this.showInfo.bind(this));
						// с чем		**событие 	** метод который вызываем
		}	
}
