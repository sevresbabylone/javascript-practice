//Find the difference between the sum of the squares of the first 
//one hundred natural numbers and the square of the sum.



function sumSquareDifference(limit){
	function calculateSumofSquares(){

		var sumOfSquares = 0;
		for(var i=1; i< limit+1; i++){
			sumOfSquares += Math.pow(i, 2);
		}
		return sumOfSquares
	}

	function calculateSquareofSum(){
		var squareOfSum= 0;
		for(var i=1; i< limit+1; i++){
			squareOfSum+= i;
		}
		return Math.pow(squareOfSum,2 );
	}
	return   calculateSquareofSum()- calculateSumofSquares();
}

console.log(sumSquareDifference(100))