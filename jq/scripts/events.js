class events extends Component {
	constructor(sSelector){
	super(sSelector);
	}
		
	showCoords(event){
		//console.log('showCoords(event)', event); выводит координаты на консоль
		this.coordX		.html(event.pageX)
		this.coordY		.html(event.pageY)
		// offsetX, offsetY код очернего элемента
		this.coordXrel	.html(event.pageX - this.padPosition.left )
		this.coordYrel	.html(event.pageY - this.padPosition.top )
			
		this.target		.html($(event.target).attr('class'));
		}
	clickPad()	{ console.log('Pad has been clicked!'); }
	clickX(event)	{ 
		event.stopPropagation(); //остановить распространение события вглубь дерева html элементов
		console.log('X has been clicked!'); 
		}
	showKeyInfo(event){
		this.keyInfo.html(
			`key code:	${event.which}	
			key:		${event.key}
			ctrl:		${event.ctrlKey}
			` 
			// переносы строк, пробелы и табуляции являются частью строки, а не декором 
			);
		}
		
	createProperties(){
		this.coordX		= this.find('.b-pad__coord_x');
		this.coordY		= this.find('.b-pad__coord_y');
		this.target		= this.find('.b-pad__coord_target');
		this.coordXrel	= this.find('.b-pad__coord_x-relative');
		this.coordYrel	= this.find('.b-pad__coord_y-relative');
		this.keyInfo	= this.find('.b-pad__coord_keyinfo');
		this.text		= this.find('.b-pad__text');
			
		this.padPosition = this.elem.position(); //не переменная, а свойство
		}
		
	createEvents(){
		this.elem.mousemove(	this.showCoords.bind(this));
		this.elem.click(		this.clickPad.bind(this));
		this.coordX.click(		this.clickX.bind(this));
		this.text.keydown(		this.showKeyInfo.bind(this));
	}
}