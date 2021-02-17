
'use strict';
let a= 0;



let yourName = prompt('insert your name');
alert('HI' + ' ' + yourName);

let question = prompt( 'do you think im a good person' );
if (question.toLowerCase() === 'yes') {
  alert('Really, I am a good person because I have never harmed anyone before');
  a++;
  // console.log("yes i'm a good person i swear hhh");

}
else if (question.toLowerCase()==='no') {
  alert('why you said that :( ');
}



let questionFav = prompt('do you think i love animals');
if (questionFav.toLowerCase() === 'yes') {
  alert('I love animals because they are innocent and beautiful creatures');
  // console.log("yes i'm love animals so much");
  a++;
}
else if (questionFav.toLowerCase === 'no')
{
  alert('why you say no  OHA ');
}



let questionAni = prompt('Do you have a cat');
if (questionAni.toLowerCase() === 'yes') {
  alert('I love animals because they are innocent and beautiful creatures');
  // console.log("yes i have my favourite  type of animals");
  a++;
}
else if (questionAni.toLowerCase() === 'no') {
  alert('why you say no  OHA ');
}



let questionMusic = prompt('Do you think i like a music');
if (questionMusic.toLowerCase() === 'yes') {
  alert('really i dont like a music');

}
else if (questionMusic.toLowerCase() === 'no') {
  alert(' now you caught me hhh  ');
  // console.log("no");
  a++;
}



let questionCard = prompt('Do you have a credit card');
if (questionCard.toLowerCase() === 'yes') {
  alert('Unfortunately, I dont have a credit card');
}
else if (questionCard.toLowerCase() === 'no') {
  alert('yeah its true ');
  /* console.log("no i haven't ");*/
  a++;
}


let check1 = false;
alert(' now you will enter inside guessing number game ');
alert('Whatch out : You have 4  attempts just');
for(let counter=0; counter<4 ; counter++) 
{
  let num=prompt('Guess the number');
  if(num === '7')
  {alert('bravoo you guessed it on the first try');
    a++;
    check1=true;
    break;
  }

  else if(num > 7)

  {alert('too high');}

  else
  { alert('too low');}

}
if(check1 === false)
{alert('you have exhausted all attempts The correct answer is 7');}

let favCountry=['jordan-palestine' , 'syria' , 'china' , 'india' , 'usa' , 'romania' , 'itly' , 'saudi arabia' , 'egypt', 'sudan' , 'australia' , 'morocco' , 'algeria'];

let check2 = false;
for (let count=0 ; count<6 ; count++ ) //1 2
{
  let countryName = prompt('now you will try guessed my favorite country ---Whatch out : You have 6  attempts just');
  for (let check=0 ; check < favCountry.length; check++) 
  {
    if(countryName === favCountry[check])
    {
      alert('bravoo the correct answer is jordan-palestine ');
      a++;
      check2 = true;
      break;
    }

  }
  if(check2===true){
    break;
  }
  alert('try again :( ');
}
if(check2=== false)
{
  alert('you have exhausted all attempts The correct answer is jordan-palestine ');
}

alert('your sourci is' + a + '/7');



