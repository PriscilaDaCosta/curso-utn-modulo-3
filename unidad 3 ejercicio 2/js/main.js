function random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

let num = []
let valor = 0
	
	for(let i = 0; i < 10; i++){
		num.push(random(1, 100))
		if(num [i]> valor){
			valor = num[i]
		}
	}

console.log('El numero mayor de: ' + num  + '. Es: '+ valor)
