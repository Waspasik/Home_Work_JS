var age_1 = 17;
var age_2 = 18;
var age_3 = 61;

checkAge = function(age) {
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then")
    } else if (age >= age_2 && age < age_3){
        console.log('Welcom !')
    } else if (age >= age_3){
        console.log('Keep calm and look Cultute channel')
    } else {
        console.log('Technical work')
    }
}
checkAge(17)
checkAge(18)
checkAge(61)