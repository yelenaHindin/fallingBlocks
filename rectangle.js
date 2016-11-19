(function (global){
    
    var Block = function (containername, color, height, width){
        return new Block.init(containername, color, height, width);
    }
    
        
    Object.defineProperties(Block.prototype, {
        x: {
                set: function(value) {
		    this.posx = value;
		    this.elem.style.left = this.posx + 'px';
                },

                get: function () {
		    return this.posx;
                }
            },
        
        y: {
                set: function(value) {
		    this.posy = value;
		    this.elem.style.top = this.posy + 'px';
                },

                get: function() {
		    return this.posy;
                }

            },

	height: {
	    set: function (value){
		this.elem.style.height = value;
	    },

	    get: function(){
		return this.elem.style.height;
	    }
	},
	
	width: {
	    set: function (value){
		this.elem.style.width = value;
	    },
	    
	    get: function() {
		return this.elem.style.width;
	    }
	},

	clientHeight: {
	    get : function() {
		return this.elem.clientHeight;
	    }
	},

	clientWidth: {
	    get : function () {
		return this.elem.clientWidth;
	    }
	}
    })
    
    
    Block.init = function(containername, color, height, width){
        
        var self = this;
        self.elem = document.createElement("div");
        self.elem.style.background = color || "black";
        self.height =  height || "10px";
	self.width =  width || "10px";
        
        self.elem.style.position = "absolute";
        document.getElementById(containername).appendChild(self.elem); 
        
        //var robj = obj.getBoundingClientRect();
     
        self.posx = 0;//robj.left;
        self.posy = 0;//robj.top;
     }
    
    //use trick from jquery so we don't have to use new keyword
    Block.init.prototype = Block.prototype;

    //attaach my object to global
    global.Block = Block;

}(window));
