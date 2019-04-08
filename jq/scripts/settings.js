let settings = (function(){		// самозапускающаяся функция
	
	
	let data = Symbol();		//ключ доступа

	class settings{
		static init(oSettings){
			settings[data] = oSettings;
		}
		static get(sSettingsName){
			return settings[data][sSettingsName];
		}
	}

	settings.data = 'public property';		//публичное свойство
	settings[data] = null;		//публичное свойство

	return settings;
	})();