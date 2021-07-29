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
   console.log('no,the user don't guess');
    alert('oh, I am 53Kg ');


    break;

