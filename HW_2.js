var item_1 = 5;
var item_2 = 3;
var item_3 = item_1 + item_2;
var item_4 = 'Yolochka';
var item_5 = item_3;
var item_6 = 15;
var item_6_type = typeof(item_6);
var item_7 = String(item_6);
var item_7_type = typeof(item_7);


console.log(item_1)
console.log(item_2)
console.log(item_3)
console.log(item_4)
console.log(item_3 + item_4)
console.log(item_3 * item_4)
console.log(typeof(item_6) == item_6)
console.log(typeof(item_6_type) == item_6_type)
console.log(typeof(item_7) == item_7)
console.log(typeof(item_7_type) == item_7_type)

var age_1 = 10;
var age_2 = 18;
var age_3 = 60;

if (age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1 + " It's less then")
}else if (age_1 >= age_2 && age_1 < age_3){
    console.log('Welcom !')
}else if (age_1 >= age_3){
    console.log('Keep calm and look Cultute channel')
} else {
    console.log('Technical work')
}