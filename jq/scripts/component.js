class Component{
	constructor(sSelector){
		this.elem = $(sSelector);	//1.создаем главный html документ.
		this.createProperties();	//2.
		this.createEvents();		//3.
		}
		
	find(sSelector){
				return this.elem.find(sSelector);
		}
	createProperties()	{console.warn('Please write createProperties method in the child class);	}
	createEvents()		{console.warn('Please write createEvents method in the child class);	}
}