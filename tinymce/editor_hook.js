editor_formats.tinymce = {
	name: 'TinyMCE',
	transform: false,
	convert_to: function(text)
		{
			this.transform = true;
			// by not returning a string here, we're being allowed to simply set a flag for the UI transformation
			return null;
		},
	convert_from: function(text)
		{
			this.transform = true;
			// by not returning a string here, we're being allowed to simply set a flag for the UI transformation
			return null;
		},
	ui_construct: function()
		{
			console.debug('this.transform = ', this.transform);
			$dynano('ajaxEditArea').switchToMCE(this.transform);
			this.transform = false;
		},
	ui_destroy: function()
		{
			console.debug('this.transform = ', this.transform);
			$dynano('ajaxEditArea').destroyMCE(this.transform);
			this.transform = false;
		},
	get_text: function()
		{
			return $dynano('ajaxEditArea').getContent();
		},
	set_text: function(t)
		{
			return $dynano('ajaxEditArea').setContent(t);
		},
};
