var age_1 = 10;
var age_2 = 18;
var age_3 = 60;

checkAge = function(age) {
    age = Number(age)
    if (typeof age != 'string') {
        
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then")
    } else if (age >= age_2 && age < age_3){
        console.log('Welcom !')
    } else if (age >= age_3){
        console.log('Keep calm and look Cultute channel')
    } else {
        console.log('Technical work')
    }
} else { console.log('Error')}
}
checkAge(17)
checkAge('22')
checkAge('61a')