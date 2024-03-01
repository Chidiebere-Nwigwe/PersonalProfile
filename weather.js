 /*
* @name: Assignment1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Chidiebere Nwigwe Godwin
*/ 
$(document).ready(function(){
    
  $(window).onload = refresh();

  $("#celsius").hover(function(){
    $("#celsius").attr("title","Input box disabled")
  })
  $("#kelvin").hover(function(){
    $("#kelvin").attr("title","Input box disabled")
  })
 

  //onclick function for conversion
    $("button").on("click", function(){
        let fahrenheit =   $("#fahrenheit").val();
        fahrenheit= parseInt(fahrenheit);
       
        // formula from fahrenheit to celsius
   let  fahrenheitToCelsius =  ((fahrenheit - 32) * (5 / 9)).toFixed(2);
   let celsius =   $("#celsius");
   celsius.prop("value",fahrenheitToCelsius);
   let celsiusValue = parseFloat(celsius.val());

    
      // formula from celsius to kelvin
      let celsiusToKelvin = ((celsiusValue + 273.15)).toFixed(2);
      let kelvin  = $("#kelvin");
      kelvin.prop("value",celsiusToKelvin);
    })

   // function to refresh page
    function refresh() {
        let fahrenheit =   $("#fahrenheit")
        let celsius =   $("#celsius");
        let kelvin  = $("#kelvin");
        fahrenheit.prop("value", " ")
           kelvin.prop("value", " ")
           celsius.prop("value", " ")
    
    }
  
  
  });



