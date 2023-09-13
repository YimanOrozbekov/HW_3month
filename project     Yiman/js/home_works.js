
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResoult = document.querySelector('#gmail_result')

const regExpression = /^[A-Za-z0-9]@gmail.com$/g

gmailButton.onclick = () => {
    if (regExpression.test(gmailInput)) {
        gmailResoult.innerHTML = 'Ok'
        gmailResoult.style.color = 'green'
    }else  {
        gmailResoult.innerHTML = 'Not ok'
        gmailResoult.style.color = 'red'
    }
}

/***********************************************************************************************/

let start = document.querySelector('#start');
let stop  = document.querySelector('#stop');

let timerId;

start.addEventListener('click', function() {
    timerId = setInterval(function() {
        console.log(1)
    }, 1000);
});

stop.addEventListener('click', function() {
    clearInterval(timerId);
});


/**********************************************************************************************/

const circle = document.querySelector('.child_block')
let positionX = 0
let positionY = 0

const moveChild_block = (positionX, positionY) => {
    const child_block = document.querySelector('.child_block');
    child_block.style.left = `${positionX}px`;
    child_block.style.left = `${positionY}px`;

    if (positionX < 450) {
        setTimeout(() => {
            moveChild_block(positionX + 10, positionY);
        }, 100);
    }else if ( positionY < 450) {
        setTimeout(() => {
            moveChild_block(positionX + 10, positionY);
        }, 100);
    }

}

moveChild_block(0, 0);