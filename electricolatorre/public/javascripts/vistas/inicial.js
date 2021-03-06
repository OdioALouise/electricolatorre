define(["jquery", "underscore", "backbone", "text!templates/inicial.html", "text!templates/header.html", "paper"], function(jQuery, _, Backbone, tmpInicial, tmpHeader){
  
  var vista = Backbone.View.extend({
    
    el : "#seccionPrincipal",

    events: {

    },
    
    render : function(){

    
      var compiled = _.template(tmpInicial);
      jQuery(this.el).append(tmpInicial);
      
      var compiled = _.template(tmpHeader);
      jQuery("header").append(tmpHeader);      
      
   // paper.setup('canvasPrincipal');
    
    
    /*  tool1 = new Tool();
      var path;
      tool.onMouseDrag = function(event) {
      var radius = event.delta.length / 2;
      var circle = new Path.Circle(event.middlePoint, radius);
      circle.fillColor = 'black';
	    }*/
 
    paper.install(window);
    paper.setup('headerCanvas');
    
    var path = new Path.Circle(view.center, 70);

    // Fill the path with red:
    path.fillColor = 'red';
    
    
    
    var path2 = new Path.Circle(view.center, 90);

    // Fill the path with red:
    path2.fillColor = 'red';
    

    view.onFrame = function(event) {
	path.fillColor.hue += 1;
	path2.fillColor.hue += 1;
    }
 



    
      
    }
    
  });
  
  return new vista();   
  
  });