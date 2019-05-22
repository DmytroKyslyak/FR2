class Component{
	constructor(sSelector){
		
		/*when the*/$(document).ready(()=>{
			this.elem = $(sSelector);	//1.создаем главный html документ.
			
			if(!this.elem.length){		// ==0 массив не равен 0
				throw new Error('Main HTML element is missing by selector:' + sSelector);
				}
			
			this.createProperties();	//2.
			this.createEvents();		//3.			
			});
		
		}
		
	find(sSelector){
				return this.elem.find(sSelector);
		}
	//createProperties()	{console.warn('Please write createProperties method in the child class');	}
	createProperties()	{throw new Error ('Please write createProperties method in the child class');	}
	createEvents()		{console.warn('Please write createEvents method in the child class');	}
}