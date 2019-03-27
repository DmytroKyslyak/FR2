class b_form { 
	constructor (sSelector){ // конструктор описывает свойства
		this.form = $(sSelector); //шаг4 ****$ авто+водитель+gps **** sSelector-место назначения(адрес)
		this.createEvents();
	}
	getLanguages(){
				let 
			oLanguages = {	
				 "ru"	: "Русский"
				,"en"	: "Английский"
				,"uk"	: "Украинский"
				,"de"	: "Немецкий"
				}
			,sLanguages = ''
			;
		$.each(oLanguages,(sLanguageCode,sLanguageName)=>{	//$. возвращение jq обект
			let jqLanguages = $(oLanguages);
				sLanguages += 		
					(sLanguages		
						? '\n'		
						:''			
						) 			
					+ sLanguageCode + ' - ' + sLanguageName; 
		});		

//sLanguages += (sLanguages ? "/n" : '') + sLanguageCode + ' - ' + sLanguageName;		
		return sLanguages;
	}
	
	
	label(sLabelSelector){
		return this.form.find(sLabelSelector).html();
	}
	
	val(sFieldSelector){
		let
			jqField = this.form.find(sFieldSelector)
			,sFieldType = jqField.attr('type')
			;
		//2. тег(select)
		//3. флажки (type='checkbox')
		
		if(sFieldType=='radio'){					//1. переключатели (type='radio')
			return jqField.filter(':checked').val();
		}
		else if(0){}
		else if(0){}
		else {					//4. текстовое поле
			return jqField.val();	
			}
		
	}
	
	showInfo(event){ // метод
		// currentTarget - ссылка на него, с чем происходит работа
		let jpFormOKButton = $(event.currentTarget)
		,sSeasons = ''
		;
		
		this.form.find('.b-form__season:checked')	// обект 
			.each(							// цикл
			(i, /*JS объект*/oSeason)=>{					// функция которая содержит команды тела цикла
				let jqSeason = $(oSeason); // $-функция выполняет глобальный поиск в пределах всего html документа по css селектору (или js обекту) и возвращаем - jq объект который является коллекцией. Коллекция - массив.
				sSeasons += 		// в переменную допишем время года
					(sSeasons		// если есть sSeasons
						?', '		// то значение "запятая"
						:''			// иначе значение "ничего"
						) 			// тернарный опреатор
					+ jqSeason.val(); 	// и склеивает JQ-обекта флажка сезон
				}
			);
// ` мультистроки
// ${} строка подстановки		
	alert(
		'Ваша форма:'									//	+ this.form.find('.b-form__name')
		+ `\n${this.label('.b-form__label_name')}: `	+ this.val('.b-form__name')
		+ `\n${this.label('.b-form__label_surname')}: `	+ this.val('.b-form__surname')
		+ `\n${this.label('.b-form__label_season')}: `	+ sSeasons
		+ `\n${this.label('.b-form__label_fruit')}: `	+ this.val('.b-form__fruit:checked')
		+ `\n${this.label('.b-form__label_animals')}: `	+ this.val('.b-form__animals>option:selected')//.html()
		+ `\n${this.label('.b-form__label_review')}: `	+ this.val('.b-form__review')
		+ '\nЯзыки:\n'									+ this.getLanguages()
		);
	} 
	
	createEvents(){// шаг5
		this.form.find('.b-form__ok-button').click(this.showInfo.bind(this));
						// с чем		**событие 	** метод который вызываем
		}	
}
