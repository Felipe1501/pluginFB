// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    function retorno(){

    }
    navigator.notification.alert("O Palmeiras não tem Mundial!", retorno, "Aviso Urgente!", "Concordo");
});

$(document).on("click", "#confirm", function(){
    function confirma(buttonIndex){
      if(buttonIndex == 1){
       navigator.notification.alert("Você escolheu Marvel");
      }else{
        navigator.notification.alert("Você escolheu DC");
      }
    }
    navigator.notification.confirm("Escolha Marvel ou DC",confirma, "Escolha: ", ['Marvel', 'DC']);
});

$(document).on("click", "#confirm2", function(){
    function confirma(buttonIndex){
      if(buttonIndex == 1){
       navigator.notification.alert("Você escolheu Xbox");
      }else{
        navigator.notification.alert("Você escolheu PS5");
      }
    }
    navigator.notification.confirm("Escolha Xbox ou PS5",confirma, "Escolha: ", ['Xbox', 'PS5']);
});

$(document).on("click", "#beep", function(){
    function retorno(){

    }
    navigator.notification.beep(3);
});

$(document).on("click", "#vibrar", function(){
    function retorno(){

    }
    navigator.vibrate(4000);
});

function mapaMostrar(lat, long){
   L.mapquest.key = 'Mm3wHgo001AGGdeS5g1cfbMk2R7PSgJO';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control())
}

$(document).on("click", "#local", function(){
 var onSuccess = function(position) {
   mapaMostrar(position.coords.latitude, position.coords.longitude)     
  };

  
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

