function calculateAge(Birthyear){
	return 2018 - Birthyear;
}

var ageNate = calculateAge(1993);
var ageNicki = calculateAge(1997);
console.log(ageNate, ageNicki);

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
  var retirement = 65 - age;
  return (firstName + ' will retire in ' + retirement + ' years at a ripe old age of' + age + '.')
}

window.onload(yearUntilRetirement(1993, 'Nate'));
