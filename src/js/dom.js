/*

DOM ---> Document Object Model

It's a set of nested objects to create an HTML document, there are cases on XML, but basically we can modify everything from the DOM in the document.

WARN: This is only possible to check in your web browser

To START open DevTools for developers in your browser, open the console and write the following commands.

- Clean the console to check the next? YES
- Press UP to recover the same command on console

*/

// document (Press Enter) : We see the entire HTML document

// If you write document. you will see all reserved words to access to your document HTML/XML to change, delete or check just one of them

// document.querySelector('element') to see one tag name inside the element
// document.querySelectorAll('element') to see all the element tag names

// document.queryselector('button') -> Enter
// document.queryselectorAll('button') -> Enter

// document.queryselector('img') -> Enter

/* document.querySelectorAll('img') -> Enter

We receive an array with all elements of the same type and check which we need to modify or replace ad copy the entire tag name

/* 

1 - To change a card for other

document.querySelector('img').src -> Enter

Click right button in the mouse over the link and select copy the link address, then paste this code inside the src = 'between quotation marks' and just change the path to select other card different

document.querySelector('img').src = 'http://127.0.0.1:5500/assets/cards/JD.png' -> Enter

2 - To change a value of player points we write

document.querySelector('small') -> Enter


document.querySelector('small').innerText = 10 -> Enter
document.querySelector('small').innerHTML = '<b>in Bold text</b>' -> Enter

3 - To getElementBy

- getElementById with querySelector('#id')
document.querySelector('#player-cards') -> Enter

- getElementByClassName() using querySelector('.class')
document.querySelector('.button') -> Enter
document.querySelectorAll('.button') -> Enter

Example: 
Try to change the name of the title
Try to change the title into Bold title
Try to change more than one card element with a variable

Solution:

document.querySelector('header').innerText = '21 Blackjack'

(OR)

document.querySelector('.title').innerHTML = '<b> 21 Blackjack</b>' -> Enter

(OR)

const title = document.querySelector('header'); -> Enter to keep the variable
header.innerText = '21 Blackjack'

const titleBold = document.querySelector('.title');
title.innerHTML = '<b>21 Blackjack</b>'

(BUT BETTER) 

const title = document.querySelector('.title'); -> Enter to keep the variable
title.innerHTML = '<b>21 Blackjack</b>'

4 - Add new elements with variables
Add new buttons to interact with names and classes
You can add an #id to div buttons and create a variable to access the entire div

-[Create an element]
[document.createElement('tag name here')]

const divButtons = document.querySelector('#divButtons'); -> Enter
divButtons. -> Enter to see that we have this button already
document.createElement('button') -> Enter to create a new tag name

-[Create an #id for an element]
[#id.append( tag name here )]

const newButton = document.createElement('button'); -> Enter
newButton -> Enter 
divButtons.append( newButton ) -> Enter

-[Create text for an element]
[element.innerText = ('Text')]

newButton.innerText = ('Pause') -> Enter
newButton -> Enter

-[Give a class to an element]
[element.classList.add('class name')]

newButton.classList.add('button') -> Enter
newButton -> Enter

-[Create an input somewhere]
[document.somewhere.append( element )]

const input = document.createElement('input');
document.body.append( input ) -> Enter
input.classList.add('footerInput')
input.placeholder('Enter your username')

Others methods... 
but first use querySelector and querySelectorAll */
