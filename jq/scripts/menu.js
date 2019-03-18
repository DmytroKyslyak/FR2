class b_menu{
	constructor (sSelector){
		this.menu = $(sSelector);
		
		this.createEvents();
		}
	
	toggleSubmenu(jqMenuItem){
		jqMenuItem.children('.b-submenu').stop().slideToggle('b-submenu_shown');
	}
	
	showSubmenu(event){
		console.log('showSubmenu event', event);
		let jqMenuItem = $(event.currentTarget);
			//jqMenuItem.children('.b-submenu').show();
			//jqMenuItem.children('.b-submenu').addClass('b-submenu_shown');
			//jqMenuItem.children('.b-submenu').stop().slideDown('b-submenu_shown');
			//jqMenuItem.children('.b-submenu').stop().slideToggle('b-submenu_shown'); //делает противоположное, тумблер
			//this.toggleSubmenu(jqMenuItem);
			jqMenuItem.children('.b-submenu')
					.css({'display' : 'block'})
					.stop()
					.animate(
						{'opacity' : 1} 
						,400
						);
			}
			
	hideSubmenu(event){
		console.log('hideSubmenu event', event);
		let jqMenuItem = $(event.currentTarget);
			//jqMenuItem.children('.b-submenu').hide();
			//jqMenuItem.children('.b-submenu').removeClass('b-submenu_shown');
			//jqMenuItem.children('.b-submenu').stop().slideUp('b-submenu_shown');
			//jqMenuItem.children('.b-submenu').stop().slideToggle('b-submenu_shown');
			//this.toggleSubmenu(jqMenuItem);
			
			}
	
	createEvents(){
		// при наведении мыши на пункт меню - показать подменю
		this.menu.find('.b-menu__item')
			.mouseover(this.showSubmenu.bind(this)) //.bind(this)-чтобы указатели на методы-обработчики событий корректно работали с this при описании событий мы это и пишем.
			.mouseout(this.hideSubmenu.bind(this))
			;

		}
}