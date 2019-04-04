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
			,sFieldTagName =  jqField.prop('tagName')
			;
		
		if(sFieldType=='radio'){					//1. переключатели (type='radio')
			return jqField.filter(':checked').val();
		}
		else if(sFieldTagName == 'SELECT'){			//2. тег(SELECT)
			//	this.form.find('('.b-form__animals>option:selected').html()')
		return jqField.children('option').filter(':selected').html();
		}
		else if(sFieldType=='checkbox'){		//3. флажки (type='checkbox')
				let sCheckboxes = '';
			jqField.filter(':checked')			// обект 
				.each(							// цикл
				(i, /*JS объект*/oCheckbox)=>{	// функция которая содержит команды тела цикла
					let jqCheckbox = $(oCheckbox); 	// $-функция выполняет глобальный поиск в пределах всего html документа по css селектору (или js обекту) и возвращаем - jq объект который является коллекцией. Коллекция - массив.
					sCheckboxes += 		// в переменную допишем время года
						(sCheckboxes		// если есть sCheckboxes
							?', '		// то значение "запятая"
							:''			// иначе значение "ничего"
							) 			// тернарный опреатор
						+ jqCheckbox.val(); 	// и склеивает JQ-обекта флажка сезон
					}
				);
		
			return sCheckboxes;
		}   
		else {					//4. текстовое поле
			return jqField.val();	
			}
	}
	
	showInfo(event){ // метод
		// currentTarget - ссылка на него, с чем происходит работа
		let jqFormOKButton = $(event.currentTarget);
		
// ` мультистроки
// ${} строка подстановки		
	alert(
		`${settings.get('b-form__yourform')}:`									//	+ this.form.find('.b-form__name')
		+ `\n${this.label('.b-form__label_name')}: `	+ this.val('.b-form__name')
		+ `\n${this.label('.b-form__label_surname')}: `	+ this.val('.b-form__surname')
		+ `\n${this.label('.b-form__label_season')}: `	+ this.val('.b-form__season')
		+ `\n${this.label('.b-form__label_fruit')}: `	+ this.val('.b-form__fruit')
		+ `\n${this.label('.b-form__label_animals')}: `	+ this.val('.b-form__animals')//.html()
		+ `\n${this.label('.b-form__label_review')}: `	+ this.val('.b-form__review')
		+ '\nЯзыки:\n'									+ this.getLanguages()
		);
	} 
	
	createEvents(){// шаг5
		this.form.find('.b-form__ok-button').click(this.showInfo.bind(this));
						// с чем		**событие 	** метод который вызываем
		}	
}
