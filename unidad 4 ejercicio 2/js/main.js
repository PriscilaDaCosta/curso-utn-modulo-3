const contar = document.querySelector("#contador");

contar.addEventListener("keypress", function(i){
    const inputLength = contar.value.length;
    const maxCar = 30;

    if(inputLength >= maxCar){
        i.preventDefault();
            alert("Caracteres maximos 30")
    
    }
})

