let _page_settings = {
	 'b-form__yourform' 	: 'Ваша форма'
	,'b-form__languages' 	: 'Языки'
	,'langs' : {	
			 "ru"	: "Русский"
			,"en"	: "Английский"
			,"uk"	: "Украинский"
			,"de"	: "Немецкий"
			}
		,'regexps'			: {			// связан с form_checker
			 'name'			:	'^[а-яё \\-]{3,100}$'
			,'brand'		:	'^[a-z \\-\\$&\']{2,100}$'
			,'price'		:	'^\\d{1,5}(\\.\\d{2})?$'
			,'description'	:	'^[\\d\\D]{10,100}$'	// \\D - все не цифры, от 10 до 100 любых символов	
			}	
			
	};
settings.init(_page_settings);