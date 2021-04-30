// This is a JavaScript file

$(document).on("click", "#alerta", function(){
    function retorno(){

    }
    navigator.notification.alert("Minha Mensagem", retorno, "Aviso!", "Aceito");
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

$(document).on("click", "#erro", function(){
    function successCallback() {
    console.log("Successfully dismissed previously opened dialog.");
}

function errorCallback(error) {
    console.log("Failed to dismiss previously opened dialog: " + error);
}

});