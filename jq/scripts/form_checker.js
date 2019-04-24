class form_checker extends Component {
	constructor(sSelector){
		super(sSelector);
		}
		
	check(event){ 
		event.preventDefault();	//предотвратить реакцию на событие по умолчанию
		
		let bFormError 	= false
			,oRegExps 	= settings.get('regexps') 
			;
		
		this.fields.each((i,oField)=>{
			let 
			 jqField = $(oField)
			,sFieldName	= jqField.attr('name')
			,sRegExp	= oRegExps[sFieldName]	//массив
			,oRegExp	= new RegExp(sRegExp, 'i')
			;
			
					//if (!jqField.val()){
			if (!jqField.val().match(oRegExp)){
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
