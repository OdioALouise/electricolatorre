requirejs.config({

    paths: {
        jquery: 'libs/jquery-ui/js/jquery-1.7.2.min',
	underscore : 'libs/underscore',
	backbone: 'libs/backbone',
	fx: 'libs/fx',
	paper: 'libs/paper'
    },
	
    shim: {
	'underscore' : {
	  exports: '_'
	},
	
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
		'fx' : {
			exports : '$fx()'
		}
    }
});

requirejs(['rutas'], function(rutas) {

    rutas.iniciar();
	
});