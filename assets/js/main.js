"use strict"

const contactsList = document.querySelector('.users__list') ;
const contactItems = contactsList.querySelectorAll('.users__item');
const sendingForm = document.querySelector('.chatting-surround');
const recievedLetter = document.querySelector('.recieved-letters');
const sendedLetter = document.querySelector('.sended-letters');
const writerInput = sendingForm.querySelector('input');

const chatSound = document.getElementById('chat-sound');
let sendedTextCollector = [];
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

const writerToWindowSend = (arr) => {

     arr.forEach(( item, index) => {
         sendedLetter.style.display = 'inline-block';
         const sendedText = document.createElement('span');
         sendedText.innerHTML += `${item.senderText}`;
         sendedLetter.append(sendedText);
         chatSound.play();
         writerInput.value = '';
     })
}

const writerToWindowRecieve = (arr) => {
      arr.forEach(( item, index) => {
          recievedLetter.style.display = 'block';
          const recievedText = document.createElement('span');
          recievedText.innerHTML = `Yaxshimisan Farruh!`;
          recievedLetter.append(recievedText);
          chatSound.play();
      })
}



const sendingLettersHandler = (e) => {

     e.preventDefault();
      const sendedData = {
          senderText: writerInput.value
      }
      sendedTextCollector.push(sendedData);
      writerToWindowSend(sendedTextCollector);

      setTimeout(() => {
          writerToWindowRecieve(sendedTextCollector)
      }, 2000);
}




sendingForm.addEventListener('submit', sendingLettersHandler)


