class settings{
	init(oSettings){
		settings.data = oSettings;
	}
	get(sSettingsName){
		return settings.data[sSettingsName];
	}
}

settings.data = null;
