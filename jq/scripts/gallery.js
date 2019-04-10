class b_gallery /* extends Component */ {
	constructor(sSelector){
		this.gallery = $(sSelector);
		
		this.pictures 		= this.gallery.find('.b-picture');
		this.preview 		= this.gallery.find('.b-preview');
		this.arrowPrev 		= this.gallery.find('.b-preview__arrow_prev');
		this.arrowNext 		= this.gallery.find('.b-preview__arrow_next');
		this.previewImage 	= this.gallery.find('.b-preview__image');
		this.previewText 	= this.gallery.find('.b-preview__text');
		this.currentImageNumber = 0;
		
		this.createEvents();
		}

	showPreview(event){ 
		let 
		jqPicture = $(event.currentTarget); 	//jqPicture - small везде
			
		this.currentImageNumber = this.pictures.index(jqPicture);	//найти индекс картинки и присвоить
		
		this.showImage(0);		// ок, show image with step 0 (no step)
		
		this.preview.addClass('b-preview_shown');
		}
		
    hidePreview 	(event){ }
	
	showImage(iStep){
		this.currentImageNumber +=iStep;
		
		let jqPicture = this.pictures.eq(this.currentImageNumber)	//jqPicture - small везде
			,jqSmallImage = jqPicture.find('.b-picture__image')
			,sSmallImageSrc = jqSmallImage.attr('src')	//attr тут отвечает за считывание
			,sBigImageSrc = sSmallImageSrc.replace('small_','')
			;
			
		this.previewImage.attr('src',sBigImageSrc); //attr тут отвечает за запись, есть 2-й параметр
	}
	
	showPrevious 	(event){this.showImage(-1); }
    showNext 		(event){this.showImage(+1); }
	
	
	createEvents(){
		this.pictures 	.click(this.showPreview.bind(this));
		this.preview 	.click(this.hidePreview.bind(this));
		this.arrowPrev 	.click(this.showPrevious.bind(this));
		this.arrowNext 	.click(this.showNext.bind(this));
		}
	}


