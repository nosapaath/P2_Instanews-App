// Proyect 2: INSTANEWS APP | Jonathan de la Mora-->

$(function(){   //General API call
	
	
	$('#selectBtn').on('change', function() {      //Change menu option
		$('#newsGallery').empty();
		$('header').css()
		// console.log(newsGallery);
		var newsCategory = event.target.value;
		
		$('#loadingAjax').show();
		
		$.ajax({																	 //Get information from specific category
			method: 'GET',
			url: 'https://api.nytimes.com/svc/topstories/v2/' + newsCategory + '.json?' + 
			$.param({'api-key': 'b76abdc620b044a8aeec75d713dcdb0f'})
		})
		
		.done(function(data) {
			if (!data.results) {
				$('#selectBox').append('sorry no news today!');
			} else {
				// console.log(data.results);
				var count = 0;
				$.each(data.results, function(index, data){ 	//Post individual title and image		
					// console.log(data.title);
					if(data.multimedia[4] && count < 12){
						count++;
						$('#newsGallery').append(
							'<a href="'+ data.url +'" target="_blank"><li style="background-image:url('+ data.multimedia[4].url +')"><p>'+ data.title +'</p></li></a>'
							);
						}
						$('#loadingAjax').hide();
					});
				}	
			});		
		});
	});
	
	