class windowPanel extends Component {
	constructor(sSelector){
	super(sSelector);
	}

//Методы
	add(){};
	remove(){};
			

	//Свойства
	createProperties(){	
	this.orderForms 	= this.find('b-order-form');
	}
	
	createEvents(){	
	this.orderForms  .submit(this.add.bind(this));
	
	}
}


