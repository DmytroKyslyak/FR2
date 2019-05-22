class events extends Component {
    constructor(sSelector) {
        super(sSelector);
    }

    showCoords(event) {
        //console.log('showCoords(event)', event);
        //offsetX, Y - координаты от дочернего элемента
        this.coordX.html(event.pageX);
        this.coordY.html(event.pageY);
        this.coordXrel.html(event.pageX - this.padPosition.left);
        this.coordYrel.html(event.pageY - this.padPosition.top);
        this.target .html($(event.target).attr('class'));
    }

    clickPad(){console.log('Pad has been clicked!'); }
    clickX(event)  {
        event.stopPropagation(); // остановить распостранение события вглубь дерева HTML-элементов
        console.log('X has been clicked!'); 
        }

    showKeyInfo(event){
        this.keyInfo.html(
            `key code:  ${event.which}
            key:        ${event.key}
            ctrl:       ${event.ctrlKey}
            ` 
            // перенос строк, пробелы и Tab являются частью строки, а не оформлением кода
            );
        }
    
    movePointer(event) {
        /* this.pointer.css({
			 'left'	: (event.pageX - this.padPosition.left  + 20) + 'px'
			,'top'	: (event.pageY - this.padPosition.top  + 20) + 'px'
			}); */
		// this.pointer.eq(0)	
		this.pointerStyle.left	= (event.pageX - this.padPosition.left  + 20) + 'px';
		this.pointerStyle.top	= (event.pageY - this.padPosition.top  + 20) + 'px';
		
        }
   
	setCursor(sNewCursorName){		// set ~ change
		// 1. замена CSS-класса в HTML
		this.htmlBody
			.removeClass(this./*old*/bodyCursor)
			.addClass(sNewCursorName)
			;
		// 2. замена имени класса в JS свойстве в программе
		this.bodyCursor = sNewCursorName;
		}
		
	setHandCursor() { this.setCursor('b-body__cursor_hand'); }
	setArrowCursor(){ this.setCursor('b-body__cursor_red-arrow'); }

    createProperties(){
        this.coordX      	= this.find('.b-pad__coord_x');
        this.coordY      	= this.find('.b-pad__coord_y');
        this.target      	= this.find('.b-pad__coord_target');
        this.coordXrel   	= this.find('.b-pad__coord_x-relative');
        this.coordYrel   	= this.find('.b-pad__coord_y-relative');
        this.keyInfo     	= this.find('.b-pad__coord_keyinfo');
        this.text			= this.find('.b-pad__text');
        this.pointer		= this.find('.b-pad__pointer');
        this.padPosition 	= this.elem.position();
		this.pointerStyle	= this.pointer[0].style;
		this.bodyCursor		= 'b-body__cursor_red-arrow';
		this.htmlBody		= $('body');
    }

    createEvents() {
        this.elem           .mousemove( this.showCoords     .bind(this));
        this.elem           .click(     this.clickPad       .bind(this));
        this.coordX         .click(     this.clickX         .bind(this));
        this.text           .keydown(   this.showKeyInfo    .bind(this));
        //this.elem           .mouseover( this.styleCursor 	.bind(this));
        this.elem           .mousemove( this.movePointer    .bind(this));
        this.elem           .mouseover( this.setHandCursor  .bind(this));
        this.elem           .mouseout(  this.setArrowCursor .bind(this));
		
    }
}