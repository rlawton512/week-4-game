
var crstalNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var userScore =[];
var wins=0;
var losses=0;
var randomNumberOptions = [];

$(document).ready(function(){

});


$(".crystal-images").on("click", function(){
	alert("clicked");

});

function generateNumbers (start,end){

	for (; start<=end; start++)
	{
		randomNumberOptions.push(start);
	}	

}

generateNumbers(19,120);

console.log(randomNumberOptions);


