-- 1 task --

const a = 20;
const b = 58;
const c = 42;

console.log (a + b + c);


-- 2 task --

let secondInAMinute = 60;
let minutesInAHour = 60;
let hoursInADay = 24;
let daysInAYear = 365;
const myAge = 38;

let myAgeInSeconds = myAge * daysInAYear * hoursInADay * minutesInAHour * secondInAMinute; 

console.log (myAgeInSeconds);



   -- 3 task --

a)
	let count = 42; 
	let userName = '42';

	console.log(userName + '');

b)	
	let count = 42; 
	let userName = '42';

	console.log(userName);

	 -- 4 task--

	let a = 1;
	let b = 2;
	let c = "белых медведей";
	const d = '' + a + b +' ' + c; 

	console.log(d);


    -- 5 task -- 

let a = 'доступ';
let b = 'морпех';
let c = 'наледь';
let d = 'попрек';
let e = 'рубило';


let lengthWords = ['доступ', 'морпех', 'наледь', 'попрек', 'рубило'];

lengthWords.length;

    -- 6 task --

	 let name = 'Igor';
	 let age = 38;
	 let city = false;

	 console.log(`Variable: ${name} have type: ${typeof(name)}`),

	 console.log(`Variable: ${age} have type: ${typeof(age)}`),

	 console.log(`Variable: ${city} have type: ${typeof(city)}`);



 	 	 -- 7 task -- 

		  let name = prompt("Name,Last name?"),
            age = +prompt('age?', 18);
 
        alert(`Hello, ${name}!`);
        let message = (age < 18) ? 'Вы еще несовершеннолетний!' : 'Добро пожаловать во взрослую жизнь бро!!';
        alert(message);


	          	ADVANCED level

	---  Task 1  ---

	let a = 4
	let b = 3
	b = [a, a = b][0];
	console.log(a, b);


	  --- Task 2 ---

	 let codeWord1 = "обернись";
    let codeWord2 = "неужели";
    let codeWord3 = "огурцы";
    let codeWord4 = "липкие";
    let codeWord5 = "?!";

	 const cipher =  (codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1] + codeWord5[1]);
	 
	 console.log(cipher);