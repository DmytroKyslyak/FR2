class windowPanel extends Component {
	constructor(sSelector){
	super(sSelector);
	}
	//Методы
	startCountdown(){}
	stopCountdown(){}
	startTicker(){}
	stopTicker(){}
	openWindow(){p1.open();}
	closeWindow(){p1.close();}
	
	//Свойства
	createProperties(){
		this.startCountdownBtn	= this.find('.b-window-panel__start-countdown');
		this.stopCountdownBtn	= this.find('.b-window-panel__stop-countdown');
		this.startTickerBtn		= this.find('.b-window-panel__start-ticker');
		this.stopTickerBtn		= this.find('.b-window-panel__stop-ticker');
		this.openWindowBtn		= this.find('.b-window-panel__open-window');
		this.closeWindowBtn		= this.find('.b-window-panel__close-window');
	}
	
	createEvents(){
		this.startCountdownBtn	 .click(this.startCountdown.bind(this));
		this.stopCountdownBtn	 .click(this.stopCountdown.bind(this));
		this.startTickerBtn		 .click(this.startTicker.bind(this));
		this.stopTickerBtn		 .click(this.stopTicker.bind(this));
		this.openWindowBtn		 .click(this.openWindow.bind(this));
		this.closeWindowBtn		 .click(this.closeWindow.bind(this));
	}
}


