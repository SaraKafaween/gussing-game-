'use strict';

let username = prompt('what is your name, dear?');

alert(' Welcome to my website ..' + username);

let counter = 0;
function myweight(){
  let myweight = prompt('Do you think my weight less than 55Kg ? yes/y or no/n ').toLowerCase();


  while (myweight !== 'yes' && myweight !== 'y' && myweight !== 'no' && myweight !== 'n') {
    myweight = prompt('Please enter yes or no');
  }




  switch (myweight) {
  case 'yes':
  case 'y':
   console.log('yes,the user gussed');
    alert('Bravo, you guess it ..' + username + ' . I am 53Kg.');
    counter++;
    break;
  case 'no' :
  case 'n' :
   console.log('no,the user don\'t guess');
    alert('oh, I am 53Kg ');


    break;
  }
}
myweight(); 


function mytall() {
  let mytall = prompt('Do you think my tall less than 155cm ? yes or no ').toLowerCase();
  while (mytall !== 'yes' && mytall !== 'y' && mytall !== 'no' && mytall !== 'n') {
    mytall = prompt('Please enter yes or no');

  }
  switch (mytall) {
    case 'yes':
    case 'y':
      console.log('yes,the user gussed');

      alert('Bravo, you guess it.. ' + username + ' . my tall is 154cm');
      counter++;
      break;
    case 'no':
    case 'n':
      console.log('no,the user don\'t guess');
      alert('oh, i am 154cm');



      break;


  }
}
mytall();

function myInterest() {
  let myInterest = prompt('Do you think I am intrested in engineering ').toLowerCase();
  while (myInterest !== 'yes' && myInterest !== 'y' && myInterest !== 'no' && myInterest !== 'n') {
    myInterest = prompt('Please enter yes or no');

  }
  switch (myInterest) {
    case 'yes':
    case 'y':
      console.log('yes,the user gussed');

      alert('Bravo, you guess it..' + username + ' . I am so intersted in engineering especially electrical and computer');

      counter++;
      break;
    case 'no':
    case 'n':
         console.log('no,the user don\'t guess');
      alert('oh, why not it is the most interesting field');



      break;



  }
}
myInterest();

function cartoonfilms() {
  let cartoonfilms = prompt('Do you think I like watching Cartoon Films ').toLowerCase();
  while (cartoonfilms !== 'yes' && cartoonfilms !== 'y' && cartoonfilms !== 'no' && cartoonfilms !== 'n') {
    cartoonfilms = prompt('Please enter yes or no');

  }
  switch (cartoonfilms) {
    case 'yes':
    case 'y':
       console.log('yes,the user gussed');

      alert('Bravo, you guess it ..' + username + ' . I like watching Cartoon Films');

      counter++;
      break;
    case 'no':
    case 'n':
      console.log('no,the user dont guess');
      alert('oh, There is anyone does not love this kind o films');
      break;



  }
}
cartoonfilms();

function favBook() {
  let favBook = prompt('Do you think I love reading Ibn Katheer ? ').toLowerCase();
  while (favBook !== 'yes' && favBook !== 'y' && favBook !== 'no' && favBook !== 'n') {
    favBook = prompt('Please enter yes or no');
  }
  switch (favBook) {
    case 'yes':
    case 'y':
      console.log('user gussed');

      alert('yes dear  yhis one of the most important mooks ever');

      break;
    case 'no':
    case 'n':
          console.log('user not guessed');
      alert('oh you have to research about it now cause its like magic');
      counter++;

      break;



  }
}
favBook();

function Birth() {
  let attempts = 4;
  let answer = 12;



  console.log (Birth)
  for (let i = 0; i < attempts; i++) {
    let Birth = Number(prompt(username + ' Can you guess which my birthday month?'));
    console.log (Birth)
    if (Birth === answer) {
      alert('Bravo you guess my birthday month');
      counter++;
      break;
    }  
    }

    
    else if (Birth < answer) {
      alert('try again ,it is too low');
      console.log(Birth)
    }
   
    else {
      alert('try again ,it is too high');

    }

  
  alert('my birthady month is December ');
  while( Birth !== 12 && cartoonfilms > 8) {
       Birth = prompt('try again ,it is too high');
       while( Birth !== 12 && cartoonfilms < 8) {
         Birth = prompt('try again ,it is too low');
       while( Birth ===) {
        Birth = prompt( `oh ${username}, you guess my birthday month  `);
         counter++;
        }


}
  }
}
Birth();



function myColor() {
  let favColor = ['black', 'purple', 'white', 'grey'];
  let mycolor = prompt(username + ' Can you guess my favourite color?');
   console.log (myColor)
  outerloop: for (let x = 0; x < 6; x++) {
    for (let i = 0; i < 6; i++) {

      if (mycolor === favColor[i]) {
        alert('oh you guess my favourite color');
        counter++;

        break outerloop;
      } else {
        alert('try again ,it is not my favourite one');
        myColor = prompt(username + 'can you guess favourite color? ');
      }
      if (x === 5) {
        alert('sorry. you do not guess it');
      }
    }
  }
}
myColor();


alert('My favourite colors are: white, black, grey, purple colors');
alert('your score is ' + counter);
alert(' Hope you have a great time at my website ' + username + ' ^_^ ' + 'meet you in another websites');