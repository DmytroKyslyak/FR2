class ajaxCalc extends Component {
	constructor(sSelector){
		super(sSelector);
		}
//Методы

	add(event){
		event.preventDefault();
		
		$.ajax({
			 'url'		: 'ajaxcalc.php?t=' + new Date().getTime()	//предотвращает кэширование
			,'method'	: 'POST'
			,'dataType'	: 'json'
			,'timeout'	: 1000
			,'data'		: {
				 'a'	: this.a.val()
				,'b'	: this.b.val()
				}
			,'success'	: (oServerResponse /*json*/) =>{
				console.log('oServerResponse', oServerResponse);
				this.result.html(oServerResponse.result);
				
				}
			,'error'	: (oAjax) =>{
				console.error('AJAX error has occured:', {
					 'http_code'	: oAjax.status
					,'status'		: oAjax.statusText
					,'responseText'	: oAjax.responseText
					,'responseJSON'	: oAjax.responseJSON
					});
				}
			,'complete'	: (oAjax) =>{}
			});		
		}
//Свойства
	createProperties(){	
		this.a			= this.find('.b-calc__a');
		this.b			= this.find('.b-calc__b');
		this.result		= this.find('.b-calc__result');
		}

	createEvents(){	
		this.element  .submit(this.add.bind(this));
		}
}


