/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/



function getAllFactors(number){
 var smallFactors = [];
 var bigFactors = [];
	
 var iterations = Math.sqrt(number);
 
 var isPerfectSquare = isInt(iterations);
 iterations = Math.floor(iterations);
	 

 for(var i=1; i< iterations-1; i++){
 	if(number%i == 0){
	 	smallFactors.unshift(i);
 		bigFactors.push(number/i);
 	}
 }

 if(isPerfectSquare){
	 	bigFactors.push(iterations);
	 }

 return bigFactors.concat(smallFactors)
}

function isInt(n) {
   return n % 1 === 0;
}


function isPrime(number){
		var numberIsPrime = true
	var midPoint = Math.sqrt(number);
	if(isInt(midPoint)){
		midPoint++;
	}
	else{
		midPoint= Math.ceil(midPoint);
	}
	

	for(var i=2; i < midPoint; i++){
		if(number % i == 0){
			numberIsPrime = false;
		}
	}
	return numberIsPrime
}

var allFactors = getAllFactors(600851475143);


for (var index in allFactors){
	if(isPrime(allFactors[index])){
		console.log(allFactors[index]);
		break
	}
}
