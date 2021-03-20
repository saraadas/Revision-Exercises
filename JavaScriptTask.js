// Question 1 //
var input = 1;
while (input <= 10) {
    console.log(input);
    input++;
}
// Question 2 //
const number = 10;
for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}
// Question 3 //
let numbers = [5, 8, 66, 1 , 40, 13, 27];

console.log(Math.max(...numbers));
// Question 4 //
let months = ["April", "May", "June", "July", "August"];
months.reverse();
console.log(months);
// Question 6 //
for (var i = 0; i <numbers.lemgth; i++) {
    sum += numbers[i]
}
console.log(sum);
// Question 7 //
const array1 = ['1', '2', '3'];
const array2 = ['4', '5', '6'];
const array3 = array1.concat(array2);

console.log(array3);
// Question 8 //
var array = [""];
array.sort();
// Question 10 //
let numbers = [8, 0, 1, 5, 3];
numbers.sort();
console.log(numbers);
// Question 11 //
function vowel_count(str1)
{
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for(var x = 0; x < str1.length ; x++)
    {
        if (vowel_list.indexOf(str1[x]) !== -1)
        {
            vcount += 1;
        }

    }
    return vcount;
}
console.log(vowel_count(" Can't wait for the graduation day"));
// Question 13 //
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
        return answer;
    }else{
        for(var i = n; i >= 1; i--){
            answer = answer * i;
        }
        return answer;
    }
}
let n = 4;
answer = factorial(n)
console.log(answer);
// Question 14 //
let numbers = [10, 5, 3, 8, 1, 6, 9];
var min = Math.min.apply(null, numbers.filter(Boolean));

var secondMin = Math.min.apply
(null, numbers.filter(n => n != min));


console.log(secondMin);
// Question 15 //
let animals = ['Horse', 'Cat', 'Giraffe']
function longestString(...strs) {
    return strs.sort(function(a, b) {return b.length - a.length})[0];
}

console.log(longestString('Horse', 'Cat', 'Giraffe'));



