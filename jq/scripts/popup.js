class Popup extends Component {
	constructor(sSelector){
	super(sSelector);
	}
	
	open()	{this.elem.show();}	
	close()	{this.elem.hide();}
	
	createProperties(){
		this.closePopupBtn = this.find('.popup__close');
		
	}
	
	createEvents(){
		this.closePopupBtn  .click(this.close  .bind(this));
	}
}