// Countdown timer

$(document).ready(function() {
    
    
    let intervalId; // variable to store the interval id

   const update = function() {
        $('#sec').each(function() {
            let count = parseInt($(this).html());
            if(count !== 0) {
                $(this).html(count - 1)
                if((count - 1) < 10) {
                    $(this).html('0' + (count - 1))  
                }
            } else {
                decMin();
            }
            playAudio();
        })
   }
   //setInterval(update, 1000); start on reloading page / document - not start button

   const decMin = function () {
        let min = parseInt($('#min').html())
        if(min !== 0) {
            $('#min').html(min - 1)
            $('#sec').html(59);
            if((min - 1) < 10) {
                $('#min').html('0' + (min - 1))
            } 
            
            
        } else {
            decHour();
        }
    }
    
    const decHour = function () {
        let hr = parseInt($('#hr').html());
        if(hr !== 0) {
            $('#hr').html(hr - 1)
            $('#min').html(59);
            $('#sec').html(59);
            if((hr - 1) < 10) {
                $('#hr').html('0' + (hr - 1))  
            }
        }
    }

    
    // start button function
    $('#start').click(() => {
        // Get the value of the source span hour
        let sourceValue = $("#hrEdit").text();

        // Set the value of the target span to be the value of the source span
        $("#hr").text(sourceValue);
        //Get the value of the source span minute
        let sourceValue2 = $('#minEdit').text();
        // Set the value of the target span to be the value of the source span
        $('#min').text(sourceValue2);
        // Get the value of the source span second
        let sourceValue3 = $('#secEdit').text();
        // Set the value of the target span to be the value of the source span
        $('#sec').text(sourceValue3)


        clearInterval(intervalId);
        intervalId = setInterval(update, 1000);
    })

    // reset button function
    $('#reset').click(() => {
        $('#sec').html('00');
        $('#min').html('00');
        $('#hr').html('00');
        clearInterval(intervalId);
        stopAudio();
    })

    // Customize timer based on user interest
    $('#edit').click(() => {
        $('.input').attr('contentEditable', true);
        $('.input').css('color', 'red')
    })

    
    //number only input
    $('.input').on('input', function() {
        
        // Remove any non-digit characters
        let filteredInput = $(this).text().replace(/\D/g, '');
        
        // Limit the content to two digits
        filteredInput = filteredInput.substring(0, 2).split('').reverse().join('');
        
        // Update the content of the span
        $(this).text(filteredInput);
        
    })

    //Play alarm when timer finish count
    const playAudio = () => {
        if($('#hr').text() == 0 && $('#min').text() == 0 && $('#sec').text() == 0) {
            $('#alarm')[0].play();
        }
        
    }
    
    // Stop alarm sound
    const stopAudio = () => {
        $('#alarm')[0].pause();
    }


});

        
        
    
    
   
