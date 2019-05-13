class events extends Component {
		constructor(sSelector){
		super(sSelector);
		}
		
		showCoords(event){
			this.coordX.html(event.pageX)
			this.coordY.html(event.pageY)
		   }
		
		createProperties(){
			this.coordX		= this.find('.b-pad__coord_x');
			this.coordY		= this.find('.b-pad__coord_y');
			this.target		= this.find('.b-pad__coord_target');
			this.coordXrel	= this.find('.b-pad__coord_x-relative');
			this.coordYrel	= this.find('.b-pad__coord_y-relative');
			this.keyInfo	= this.find('.b-pad__coord_keyinfo');
			this.text		= this.find('.b-pad__text');
		}
		
	createEvents(){
		this.elem.mousemove(this.showCoords.bind(this));
	}
}