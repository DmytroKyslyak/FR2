class b_menu{
	constructor (sSelector){
		this.menu = $(sSelector);
		
		this.createEvents();
		}
	showSubmenu(event){
		console.log('showSubmenu event', event);
		}
		
	createEvents(){
		// при наведении мыши на пункт меню - показать подменю
		this.menu.find('.b-menu__item').mouseover(this.showSubmenu);
		}
}