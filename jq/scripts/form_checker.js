class form_checker extends Component {
	constructor(sSelector){
		super(sSelector);
		}
		
	check(event){ 
		event.preventDefault();	//предотвратить реакцию на событие по умолчанию
		
		let bFormError = false;
		
		this.fields.each((i,oField)=>{
			let jqField = $(oField);
			
			if (!jqField.val()){
				bFormError = true;
				//***2
				jqField.addClass('b-textfield_error')
				}
			else{
				jqField.removeClass('b-textfield_error')
			}
			});
			/*
			if (bFormError){
		this.find('.b-form__message_error').slideDown();
			}
		else{
			this.find('.b-form__message_error').slideUp();
			}
		}
			*/
		this.find('.b-form__message_error')[
			bFormError ? 'slideDown' : 'slideUp'
			]
			();
		}
	
	createProperties(){
		this.fields = this.find('.b-textfield');
		}
	createEvents(){
		this.elem.submit(this.check.bind(this));
		}
	}
