$(document).ready(function(){
	// --------------------------------------
	// elementos ocultos iniciales
	$('#borrarDesorden').hide();

	$('#probarToggle').hide();
	//--------------------------------------
	// aplicando estilo CSS desde javascript
	$('h1').css({
		'color': '#454657',
		'font-size': '88px',
	});
	// aplicando clase 'colores' del documento 'estilos-laboratorio.css' 
	$('section').addClass('colores');
	// aplicando clase 'animacion'+
	$('#animaciones').addClass('animacion');
	// Quitando estilos a traves de jQuery
	$('#quitarClase').click(function(event){
		$('section').removeClass('colores').removeAttr('class');
	});
	$('#ocultarBoton').click(function(){
		$(this).hide('slow', function(){
			$('#quitarClase, #ponerClase, .animacion p').css({
				'color':'#e62cd6',
				'font-size': '66px'
			});

		if($('#borrarDesorden').is(':hidden')){
			$('borrarDesorden').show();
		} else {
			$('#borrarDesorden').hide();
		}
		});
	});
});