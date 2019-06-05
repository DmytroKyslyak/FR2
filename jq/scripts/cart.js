//var c1 = new cart('#goods1', '#minicart1');
class cart extends Component {
	constructor(sSelector, sAuxSelector){
		super(sSelector, sAuxSelector);
		}
//Методы

	put(jqGood){
				let
				iGoodQty	= jqGood.find('.b-order-form__quantity').val()
				,iGoodId	= jqGood.attr('class').match(/b-good_id_(\d{1,10})/)[1]
				;
			this.goodsData[iGoodId] 	= iGoodQty;
			
			Cookies.set('goods_data', this.goodsData, { 'expires': 14, 'path': '/' }); //запись
		//add to cart
			let jqCardGood = this.cartGoods.find('.b-good:first-child')
				.clone(true /*clone events*/)
				.appendTo(this.cartGoods);
		//считывание вариант1
/*		
			jqGood.find('.b-good__name').html()
			jqGood.find('.b-good__price').html()
			jqGood.find('.b-order-form__quantity').val()
			jqGood.find('.b-good__image').attr('src')
*/
		//считывание вариант2
		let
			 sGoodName 		= jqGood.find('.b-good__name').html() 
			,sGoodPrice 	= jqGood.find('.b-good__price').html() 
			,sGoodQty 		= jqGood.find('.b-order-form__quantity').val() 
			,sGoodImgSrc 	= jqGood.find('.b-good__image').attr('src') 
			;
		//запись
		jqCartGood.find('.b-good__name').html(				sGoodName 	);
		jqCartGood.find('.b-good__price').html(				sGoodPrice 	);
		jqCartGood.find('.b-order-form__quantity').val(		sGoodQty 	);
		jqCartGood.find('.b-good__image').attr('src', 		sGoodImgSrc );		

			//b-good:first-child
			jqGood.addClass('b-good_in-cart');
		
	}


	add(event){
		event.preventDefault();
			let
				jqOrderForm	= $(event.currentTarget)
				,jqGood		= jqOrderForm.closest('.b-good')
				;

			this.put(jqGood);
			this.list.slideDown();
		}
	remove(){}

//Свойства
	createProperties(){	
		this.orderForms 	= this.find('b-order-form');
		this.button			= this.auxelem.find('.b-minicart__button');
		this.list			= this.auxelem.find('.b-minicart__list');
		this.cartGoods		= this.auxelem.find('.b-goods_cart');
		this.goodsData 		= Cookies.getJSON('goods_data') || {"82":"2","83":"3"} //{/*iGoodId : iGoodQty*/}; //считывание
		}
//load
	load(){
		$.each(this.goodsData, (iGoodId, iGoodQty)=>{
			let jqGood = this.find('.b-good_id_'+iGoodId);
			jqGood.find('.b-order-form__quantity').val(iGoodQty);
			this.put(jqGood);
			});
		}
	toggleList(){
		this.list.slideToggle();
		}
		
	createEvents(){	
		//load
		this.load();
		this.orderForms  .submit(this.add.bind(this));
		this.button.click(this.toggleList.bind(this));
		}
}


