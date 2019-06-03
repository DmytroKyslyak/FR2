class Countdown {
    constructor(sSelector) {
		this.timerId = null;
		}

    finish() {
        throw new Error('Please specify the countdown timer action.');
		}

    start(iSeconds) {
        this.timerId = window.setTimeout(()=>{
			this.finish(this);
			}, iSeconds * 1000);
        console.log('Начат обратный отсчёт');
		}

    stop() {
        window.clearTimeout(this.timerId);
        console.log('Oбратный отсчёт остановлен');
		}
	}