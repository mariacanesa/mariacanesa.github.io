$(document).ready(function(){
	$('#carousel-img').fadeOut(1000).fadeIn(200);
	   $('#page-header-btn').click(function(){
    	$('.page-header h1').text('Keep choosing healthy food.');
    	$('.page-header h1').css({
    			color: '#DA534F'});
    	$('#intro').prepend('<p> We are so happy that you are choosing us. You and all your family will love our meals.</p>');
    	$('#page-header-btn').replaceWith('<p><span class="label label-danger">Welcome to our family!.</span></p>');
    	alert('We are so happy of having you in our family!');
    }); //end page header click

	//$('#vepherds-btn').hover(function(){}, 						   function(){});

	$('#vepherds-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#vepherds-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#vepherds-img').attr({
			'src' : 'images/spinach.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		    $('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
    }); //end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#vepherds-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#vepherds-img').attr({
				'src' : 'images/Vepherds_pie.jpg',
				'class' : 'img-responsive'
			}); //end attr
		$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end vepherds hover

		//$('#mac-btn').hover(function(){}, 						   function(){});

	$('#mac-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#mac-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#mac-img').attr({
			'src' : 'images/Macaroni.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		$('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
    }); //end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#mac-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#mac-img').attr({
				'src' : 'images/mac_cheese.jpg',
				'class' : 'img-responsive'
			}); //end attr
				$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end mac hover

	//$('#waffles-btn').hover(function(){}, 						   function(){});

	$('#waffles-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#waffles-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#waffles-img').attr({
			'src' : 'images/flour.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		$('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
      });// end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#waffles-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#waffles-img').attr({
				'src' : 'images/waffles.jpg',
				'class' : 'img-responsive'
			}); //end attr
		$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end waffles hover

	//$('#smothie-btn').hover(function(){}, 						   function(){});

	$('#smothie-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#smothie-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#smothie-img').attr({
			'src' : 'images/berries.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		$('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
      });// end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#smothie-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#smothie-img').attr({
				'src' : 'images/berries_smoothie.jpg',
				'class' : 'img-responsive'
			}); //end attr
		$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end smothie hover

	//$('#cup-btn').hover(function(){}, 						   function(){});

	$('#cup-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#cup-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#cup-img').attr({
			'src' : 'images/chocolate.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		$('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
      });// end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#cup-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#cup-img').attr({
				'src' : 'images/cup_cakes.jpg',
				'class' : 'img-responsive'
			}); //end attr
		$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end cup hover

	//$('#soupc-btn').hover(function(){}, 						   function(){});

	$('#soupc-btn').hover(function(){
		console.log('You are about to know about our little secret!');
		$('#soupc-btn').css({ 
			backgroundColor: '#DA534F',
			borderColor: '#DA534F'
		});// end css
		$('#soupc-img').attr({
			'src' : 'images/carrot.jpg',
			'class' : 'img-responsive img-circle'
		}); //end attr
		$('h4:odd').css({
      color: 'white',
      backgroundColor: '#DA534F'
      });// end h4 css
		}, // end mouse over
	 function(){
		console.log('You are missing our little secret!');
		$('#soupc-btn').css({ 
			backgroundColor: '#075220',
			borderColor: '#075220'
		});// end css
		$('#soupc-img').attr({
				'src' : 'images/celerycarrot_soup.jpg',
				'class' : 'img-responsive'
			}); //end attr
		$('h4:odd').css({
      color: '#075220',
      backgroundColor: 'white'
    }); //end h4 css
		}); //end soupc hover


$('#lunchbags-btn').hover(function(){
		$('#lunchbags-txt').hide(3000);
	
		}, // end mouse over
	 function(){
		$('#lunchbags-txt').show(3000);

		}); //end lunchbags hover
$('#top5-btn').hover(function(){
		$('#top5-txt').hide(3000);
	
		}, // end mouse over
	 function(){
		$('#top5-txt').show(3000);

		}); //end top5 hover
$('#inquire-btn').hover(function(){
		$('#inquire-txt').hide(3000);
	
		}, // end mouse over
	 function(){
		$('#inquire-txt').show(3000);

		}); //end inquire hover

$('#area').change(function(){
		if ($('#area').val() == 'isl') {
				$('.form-group .help-block').text('We deliver to your area!');
			} else if ($('#area').val() == 'dwn') 
			{
				$('.form-group .help-block').text('We deliver to this area as well');
			} else if ($('#area').val() == 'vis') 
			{
				$('.form-group .help-block').text('We deliver with some restrictions');
			} else if ($('#area').val() == 'riv') 
			{

			$('.form-group .help-block').text('Call us 954-567-9999');
			} else {
				$('.form-group .help-block').text('Please, call us!');
		
			}
			$('.form-group .help-block').css({ 
			color: '#DA534F',
			});// end css

	}); //end change

		$('#phone').focusout(function(){
		if($('#phone').val().length == 0) {
			$('.phone-group .help-block2').text('The phone number should have at least 10 digits');
			$('.phone-group').attr({
				class: 'form-group phone-group has-error'
			}); // end attr
				$('.form-group .help-block2').css({ 
			color: '#DA534F',
			});// end css

			} else {
			$('.phone-group .help-block2').text('');
			$('.phone-group').attr({
				class: 'form-group phone-group'
			}); //end attr
		}
	}); //end focus out


}); //end ready