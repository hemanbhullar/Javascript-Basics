const name = "heman"
const repoCount = 50

// console.log(name+ repoCount + " Value");
//Now a days we are using ``(back tics or string interpolation)
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("heman-hb-com"); //this is an Object

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4); //Here negative value will neglect it will take negative value as a 0;
console.log(newString);

const anotherString = gameName.slice(-6, 4); //Here you can also able to give negative values in parameter

console.log(anotherString);

const newStringOne = "    hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-')); //split(seperator, limit);

// Learning about function of strings

const practiceString = new String("Heman-Bhullar-QA-Automation-Engineer");

//anchor --> it creates a string that embeds this string in an <a> element with a name (<a name="..."></a>)
console.log(practiceString.anchor("myProfile"));

//at() --> it will return character at index

// big() function --> it creates a string that embeds this string in an <big> tag.
console.log(practiceString.big());

//blink() function --> 
console.log(practiceString.blink());

//bold
console.log(practiceString.bold());

//charCodeAt
console.log(`character is ${practiceString.charAt(3)} ascci is ${practiceString.charCodeAt(3)}`);

//codePointAt-> function
console.log(practiceString.codePointAt(3));

console.log(practiceString.constructor("Hello"));

console.log(practiceString.endsWith('eer'));

console.log(practiceString.fixed()); //it is used to assign the tt tag to the string <tt> (teletype tag)

console.log(practiceString.fontcolor("yellow"));

