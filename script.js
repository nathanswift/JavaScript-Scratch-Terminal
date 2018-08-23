function calculateAge(birthYear){
	return 2018 - birthYear;
}

var ageNate = calculateAge(1993);
var ageNicki = calculateAge(1997);
console.log(ageNate, ageNicki);

function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
  var retirement = 65 - age;
  var retirementYear = year + retirement;
  var retirementAge = 65
  console.log(firstName + ' will retire in ' + retirementYear + ' at a ripe old age of ' + retirementAge + ' Wow that\'s only ' + retirement + ' years away!')
}

yearsUntilRetirement(1993, 'Nate')
