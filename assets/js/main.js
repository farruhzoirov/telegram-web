"use strict"

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}


const contactsList = $('.users__list') ;
const sendingForm = $('.chatting-surround');
const recievedLetter = $('.recieved-letters');
const sendedLetter = $('.sended-letters');
const writerInput = $('#message-field');
const contactItems = $$('.users__item');




const chatSound = $('#chat-sound');
let sendedTextCollector = [];


function formSubmit() {

    const sendingTime = timeReturner();

    sendedLetter.innerHTML += `
       <li class="message send">
                <p>${writerInput.value}</p>
                <time class="message-time">${sendingTime}</time>
       </li>
    `
    setTimeout( () => {
        chatSound.play();
    }, 200);


    writerInput.focus();
}


sendingForm.addEventListener('submit', (e)  => {
    e.preventDefault();
    formSubmit();
    writerInput.value = '';
})

function deActivateItems() {
    contactItems.forEach( (contactItem) => {
        contactItem.classList.remove('users-item--active')
        contactItem.style.backgroundColor = 'transparent';
    })
}

contactItems.forEach( ( item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            deActivateItems();
            item.classList.add('users-item--active')
            item.style.backgroundColor = 'cornflowerblue';
        })
})



function addZero(time) {
  if (time < 10) {

    return `0${time}`;

  } else {
      return time;
  }
}

function timeReturner() {
       return  addZero(new Date().getHours()) + ':' + addZero(new Date().getMinutes())
}







