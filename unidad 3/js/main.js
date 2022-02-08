
let transporte = prompt('Ingrese la distancia en metros');

if (transporte <= 1000){
    document.write('Debe ir a pie')
}else if (transporte > 1000 && transporte <= 10000){
    document.write('Debe ir en bicicleta')
}else if (transporte > 10000 && transporte <= 30000){
    document.write('Debe ir en colectivo')
}else if (transporte > 30000 && transporte <= 100000){
    document.write('Debe ir en auto')
}
else
    document.write('Debe ir en avion')
