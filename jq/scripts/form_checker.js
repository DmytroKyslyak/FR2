class form_checker extends Component {
	constructor(sSelector){
		super(sSelector);
		}
		
	check(event){ 
		event.preventDefault();	//предотвратить реакцию на событие по умолчанию
		this.fields.each((i,oField)=>{
			let jqField = $(oField);
			
			//******
			});
		
		}
	
	createProperties(){
		this.fields = this.find('.b-textfield');
		}
	createEvents(){
		this.elem.submit(this.check.bind(this));
		}
	}
