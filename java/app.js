'use strict';



let name = prompt('insert your name');
alert('HI' + "  " + name);

let question = prompt("do you think i'm a good person");
if (question.toLowerCase() === 'yes') {
    alert('Really, I am a good person because I have never harmed anyone before');
    // console.log("yes i'm a good person i swear hhh");

}
else if (question == 'no') {
    alert("why you said that :( ");
}



let questionFav = prompt("do you think i love animals");
if (questionFav.toLowerCase() === 'yes') {
    alert('I love animals because they are innocent and beautiful creatures');
    // console.log("yes i'm love animals so much");
}
else if (questionFav == 'no') {
    alert("why you say no  OHA ");
}



let questionAni = prompt("Do you have a cat");
if (questionAni.toLowerCase() == 'yes') {
    alert('I love animals because they are innocent and beautiful creatures');
    // console.log("yes i have my favourite  type of animals");

}
else if (questionAni == 'no') {
    alert("why you say no  OHA ");
}


let questionMusic = prompt("Do you think i like a music");
if (questionMusic.toLowerCase() == 'yes') {
    alert('really i dont like a music');
    // console.log("no");

}
else if (questionMusic == 'no') {
    alert("now you caught me hhh  ");
}


let questionCard = prompt("Do you have a credit card");
if (questionCard.toLowerCase() == 'yes') {
    alert('Unfortunately, I dont have a credit card');
    /* console.log("no i haven't ");*/

}
else if (questionCard == 'no') {
    alert("yeah its true ");
}



