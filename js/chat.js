
( function( $,undefined ) {
    
    $.widget( "ps.chat", {
       version: "0.0.1",
        
        options: {
				header:'WEBCHAT',
				containerWidth:360,
				ownerName:'Maria',
				userName:'Leo',
				greeting:'How May I Help You Today?',
				initialMessage:'Start Chatting by clicking "Chat now"'
			},
        _create: function() {
            this.element.addClass("container");
			this._refresh();
        },
		
		_refresh:function(){
			this.element.css('width',this.options.containerWidth);
			this._wrapper();
			this._on(this.button,{click:this.chatting});
			},
		
		_wrapper:function(){
			//outer wrapper
			this.outer = $('<div>',{
				class:'outer'
			}).appendTo(this.element);	
			//heading
			$('<h2>',{
				text:this.options.header
				}).appendTo(this.outer);
			//inner area
			this.inner = $('<div>',{
						class:'inner'		
				}).appendTo(this.outer);
			//message
			this.msg = $('<p>',{
					text:this.options.initialMessage
					
				}).appendTo(this.inner);
			//button
			this.button = $('<button>',{
				text:'Chat Now',
				class:'link'
				}).button().appendTo(this.outer);					
		},
		
		chatting:function(){
				this._chattingWrapper();
				this.msg.hide();
				this.button.hide();
				$('<p>',{
					text:this.options.ownerName+" :- "+this.options.greeting,
					class:'chat'
				}).appendTo(this.inner).show(1000);
				
				
				this._on(this.sendmsg,{click:this.send});
			},
			
		
		_chattingWrapper:function(){
			this.chatForm = $('<div>',{
					id:'form',
				}).appendTo(this.outer);
			this.chatmsg=$('<input>',{
					name:'usermsg',
					type:'textarea',
					class:'text',
					value:''
					
				}).appendTo(this.chatForm);
			this.sendmsg= $('<input>',{
					name:'submit',
					type:'button',
					value:'SEND',
					class:'submit'
					
				}).appendTo(this.chatForm);
								
			},
		
		send:function(){
				$('<p>',{
					text:this.options.userName+" :- "+this.chatmsg.val()
					}).appendTo(this.inner);
				
				//clear the text area
				this.chatmsg.val('');	
				
				},
		
     	_setOptions: function( options ) {
          
            this._superApply( arguments );
        },
        _setOption: function( key, value ) {
          
            this._super( key,value );
			this._refresh();
        },
        _destroy: function() {
            
        },
    });
})( jQuery );