( function( $,undefined ) {
    // The jQuery.ps namespace will automatically be created if it doesn't exist
    $.widget( "ps.color", {
       version: "0.0.1",
        // These options will be used as defaults
        options: {
			'red':255,
			'green':0,
			'blue':0,
			'random':null
			},
			
        _create: function() {
            this.element.addClass('ps-color');
			this.change = $('<button/>',{
				text:'change',
				class:'ps-button'
				}).button().appendTo(this.element);
			
		//binding the event for the change button
		
			this._on(this.change,{click:"_random"});
		//call to refresh
		this._refresh();			
			
        },
        // Keep various pieces of logic in separate methods
        _random: function() {
			console.log("random");
			var widget= this;
			var color = {
					red:Math.floor(Math.random()*256),
					blue:Math.floor(Math.random()*256),
					green:Math.floor(Math.random()*256)
				}
			
			 if ( this._trigger( "random", event, color ) !== false ) {
				widget.option( color);
			}
        },
		
		 _refresh:function(){
			 this.element.css('background-color',"rgb("+this.options.red+","+this.options.green+","+this.options.blue+")");
			 
		},
         _setOptions: function() {
			
			this._superApply( arguments );
			this._refresh();
		},
        _setOption: function( key, value ) {
            // Use the _setOption method to respond to changes to options
           	if(value<0 || value>255 && /red|green|blue/.test(key)){
				return;
				}
            // and call the parent function too!
             this._super( key, value ); 
        },
        _destroy: function() {
            this.element.removeClass('ps-color');
			this.element.css('background','transparent');
        },
    });
})( jQuery );