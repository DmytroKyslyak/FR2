class windowPanel extends Component {
	constructor(sSelector){
		super(sSelector);
		}
		
	countdownFinish(oTimer){
		console.log('countdownFinish this', this);
		console.log('oTimer', oTimer);
		
		console.log ('Прошло 3 секунды');
		}
		
		
	startCountdown(){ 
		// this.timerId = window.setTimeout(this.countdownFinish.bind(this), 3000)
		// console.log ('Начат обратный отсчёт');
		this.countdown.start(10);
		}
	stopCountdown(){
		window.clearTimeout(this.timerId);
		console.log ('Обратный отсчёт остановлен');
		}


	tickerFinish(){
		this.ticker.time += this.ticker.step;
			console.log (`Прошло ${this.ticker.time} секунды`);
		}
		
	startTicker(){
		this.ticker.id = window.setInterval(this.tickerFinish.bind(this), this.ticker.step * 1000)
		console.log ('Начат обратный отсчёт');
		}
		
	stopTicker(){
		this.ticker.time	= 0;
		window.clearInterval(this.ticker.id);
		console.log ('Обратный отсчёт остановлен');
		}
	openWindow() { this.popup.open();  }
	closeWindow(){ this.popup.close(); }
	
	createProperties(){
		this.startCountdownBtn	= this.find('.b-window-panel__start-countdown');
		this.stopCountdownBtn	= this.find('.b-window-panel__stop-countdown');
		this.startTickerBtn		= this.find('.b-window-panel__start-ticker');
		this.stopTickerBtn		= this.find('.b-window-panel__stop-ticker');
		this.openWindowBtn		= this.find('.b-window-panel__open-window');
		this.closeWindowBtn		= this.find('.b-window-panel__close-window');
		this.popup = new Popup('#window1');
		
		this.countdown = new Countdown();
		this.countdown.finish = this.countdownFinish.bind(this);

		this.timerId			= null;
		
		// this.tickerTime			= 0;
		// this.tickerId			= null;
		// this.tickerStep			= 2;
		
		this.ticker = {
			 'time'	: 0
			,'id'	: null
			,'step'	: 2
			};

		}
		
		
	
	createEvents(){
		this.startCountdownBtn	.click(this.startCountdown.bind(this));
		this.stopCountdownBtn	.click(this.stopCountdown.bind(this));
		this.startTickerBtn		.click(this.startTicker.bind(this));
		this.stopTickerBtn		.click(this.stopTicker.bind(this));
		this.openWindowBtn		.click(this.openWindow.bind(this));
		this.closeWindowBtn		.click(this.closeWindow.bind(this));
		}
	}
