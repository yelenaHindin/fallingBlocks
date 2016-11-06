(function (global){
    
    var Rectangle = function (containername, color, height, width){
        return new Rectangle.init(containername, color, height, width);
    }
    
    Rectangle.prototype = {
        setx : function(x) {
            this.posx = x;
            this.elem.style.left = this.posx + 'px';
            
         },
        
        sety : function (y) {
            this.posy = y;
            this.elem.style.top = this.posy + 'px';
        },
        
        getx : function () {
            return this.posx;
        },
        
        gety : function () {
            return this.posy;
        }
                
    }
    
    Rectangle.init = function(containername, color, height, width){
        
        var self = this;
        
        self.elem = document.createElement("div");
        self.elem.style.background = color || "black";
        self.elem.style.height = height || "10px";
        self.elem.style.width = width || "10px";
        self.elem.style.position = "absolute";
        document.getElementById(containername).appendChild(self.elem); 
        
        //var robj = obj.getBoundingClientRect();
     
        self.posx = 0;//robj.left;
        self.posy = 0;//robj.top;
     }
    
    //use trick from jquery so we don't have to use new keyword
    Rectangle.init.prototype = Rectangle.prototype;

    //attaach my object to global
    global.Rectangle = Rectangle;

}(window));
