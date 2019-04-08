class b_gallery /* extends Component */ {
	constructor(sSelector){
		this.gallery = $(sSelector);
		
		this.pictures 		= this.gallery.find('.b-picture');
		this.preview 		= this.gallery.find('.b-preview');
		this.arrowPrev 		= this.gallery.find('.b-preview__arrow_prev');
		this.arrowNext 		= this.gallery.find('.b-preview__arrow_next');
		this.previewImage 	= this.gallery.find('.b-preview__image');
		this.previewText 	= this.gallery.find('.b-preview__text');
		
		this.createEvents();
		}

	showPreview(event){ 
		let jqPicture = $(event.currentTarget)
		,jqSmallImage = jqPicture.find('.b-picture__image')
		//......
		;
		}
    hidePreview (event){ }
	showPrevious (event){ }
    showNext (event){ }
	
	
	createEvents(){
		this.pictures 	.click(this.showPreview.bind(this));
		this.preview 	.click(this.hidePreview.bind(this));
		this.arrowPrev 	.click(this.showPrevious.bind(this));
		this.arrowNext 	.click(this.showNext.bind(this));
		}
	}


