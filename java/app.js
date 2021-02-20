'use strict';
let a= 0;


function yourName () {
  let userName = prompt('insert your name');
  alert('HI' + ' ' + userName + '  ' +'iam glad to meet you ❤️');
  console.log (userName);
  console.log('sewar');
  return userName;

}
yourName();

const question0= function(){
  let question = prompt( 'do you think im a good person' );
  if (question.toLowerCase() === 'yes') {
    alert('Really, I am a good person because I have never harmed anyone before😺');
    a++;
    console.log('yes i am a good person i swear hhh ');

  }
  else if (question.toLowerCase()==='no') {
    alert('why you said that :( ');
    console.log('why you said that 🤨');
    return question;
  }};

question0();



const question1= function (){
  let questionFav = prompt('do you think i love animals🧐');
  if (questionFav.toLowerCase() === 'yes') {
    alert('I love animals because they are innocent and beautiful creatures🥰🥰');
    console.log('yes iam love animals so much🥰');
    a++;
  }
  else if (questionFav.toLowerCase() === 'no') {
    alert('why you say no  OHA 🤨🤨');
    console.log('why you said that 😭😭');
    return questionFav;
  }};
question1();
const question2= function(){
  let questionAni = prompt('Do you have a cat 😻');
  if (questionAni.toLowerCase() === 'yes') {
    alert('yes i have my favourite  type of animals😻');
    console.log('😻😻yes i have my favourite  type of animals 😻😻');
    a++;
  }
  else if (questionAni.toLowerCase() === 'no') {
    alert(' no 😭,,,,, really i have a cat ');
    console.log('in actully i have a cat  🤨');
    return questionAni;
  }};
question2 ();

const question3= function(){
  let questionMusic = prompt('Do you think i like a music 😇');
  if (questionMusic.toLowerCase() === 'yes') {
    alert('really i dont like a music 😉');

  }
  else if (questionMusic.toLowerCase() === 'no') {
    alert(' now you caught me hhh 🥳 ');
    a++;
    console.log('really i dont like a music 😉');
    return questionMusic;
  }};

question3();


const question4= function(){
  let questionCard = prompt('Do you have a credit card 😎');
  if (questionCard.toLowerCase() === 'yes') {
    alert('Unfortunately, I dont have a credit card 🥺');
    console.log('no i havent 😂');
  }
  else if (questionCard.toLowerCase() === 'no') {
    alert('yeah its true ');
    console.log('I really dont have a credit card 😂 ');
    a++;
    console.log(questionCard);
    return questionCard;
  }};

question4();

const question5= function(){
  let check1 = false;
  alert(' now you will enter inside guessing number game ');
  alert('Watch out : You just have 4  attempts ');
  let num;
  for(let counter=0; counter<4 ; counter++)
  {
    num=prompt('Guess the number');
    if(num === '7')
    {alert('bravoo you guessed it ');
      a++;
      check1=true;
      break;
    }
    else if(num > 7)
    {alert('too high  , try again');}
    else
    { alert('too low  , try again');}

  }
  if(check1 === false)
  {alert('you have exhausted all attempts The correct answer is 7');}
  console.log('my favorit number is 7');
  return num;
};
question5();

const question6= function () {
  let favCountry=['jordan-palestine' , 'syria' , 'china' , 'india' , 'usa' , 'romania' , 'italy' , 'saudi arabia' , 'egypt', 'sudan' , 'australia' , 'morocco' , 'algeria'];
  let check2 = false;
  for (let count=0 ; count<6 ; count++ )
  {
    let inter =prompt('now you will try guessed my favorite country ---Whatch out : You have just 6  attempts ');
    for (let check=0 ; check < favCountry.length ; check++)
    {
      if( favCountry[check]===inter)
      {
        alert('bravoo the correct answer ');
        a++;
        check2 = true;
        break;
      }

    }

    if(check2===true){
      break;
    }
    else
      alert('try again');
  }
  if(check2=== false)
  {
    alert('you have exhausted all attempts The correct answer is jordan-palestine ❤️ ');
    console.log('my favorit country is jordan & palestine ❤️❤️ ');
    return favCountry;
  }};

question6();

alert('your score is' + a + '/7');

