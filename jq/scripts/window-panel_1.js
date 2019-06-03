class windowPanel extends Component {
	constructor(sSelector){
	super(sSelector);
	}

//Методы
	countdownFinish(){console.log ('Прошло 3 секунды');
			console.log('countdownFinish this', this);}
	startCountdown() {
		this.timerId = window.setTimeout(this.countdownFinish.bind(this), 3000)
			console.log ('Начат обратный отсчёт');
		}
	stopCountdown(){
		window.clearTimeout(this.timerId);
		console.log ('Обратный отсчёт остановлен');
		}
		
		tickerFinish(){
		this.tickerTime += this.tickerStep;
			console.log (`Прошло ${this.tickerTime} секунды`);
		}
		
	startTicker(){
		this.tickerId = window.setInterval(this.tickerFinish.bind(this), this.tickerStep * 1000)
		console.log ('Начат обратный отсчёт');
		}
		
	stopTicker(){
		this.tickerTime	= 0;
		window.clearInterval(this.tickerId);
		console.log ('Обратный отсчёт остановлен');
		}
		
		
	openWindow(){this.popup.open();}
	closeWindow(){this.popup.close();}

	//Свойства
	createProperties(){
		this.startCountdownBtn	= this.find('.b-window-panel__start-countdown');
		this.stopCountdownBtn	= this.find('.b-window-panel__stop-countdown');
		this.startTickerBtn		= this.find('.b-window-panel__start-ticker');
		this.stopTickerBtn		= this.find('.b-window-panel__stop-ticker');
		this.openWindowBtn		= this.find('.b-window-panel__open-window');
		this.closeWindowBtn		= this.find('.b-window-panel__close-window');
		this.popup              = new Popup('#window1');	//переменная, перенесли с html
		
		this.timerId 		= null;	//переменная для счетчика, число = нул
		
		this.tickerTime			= 0;
		this.tickerId			= null;
		this.tickerStep			= 2;
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


