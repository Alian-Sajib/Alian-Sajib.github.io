//Getting UI elemnet

let form = document.querySelector('#form');
let input = document.querySelector('#input');
let enter = document.querySelector("#btn");
let restart = document.querySelector("#restart");
let div = document.querySelector('.container');


let attemp = 2;
let rand = parseInt(getRandomInt(1, 11));
let value;

form.addEventListener('submit', (e) => {

    value = input.value;

    if (!document.querySelector('p')) {

        if (value === '')
            message(' Enter a Number to Guess...', 'loss');
        else {

            if (parseInt(value) === rand) {
                attemp = -1;
                input.value = '';
                message(' Congratulation You Win !!!', 'green');
            }

            else if (rand > parseInt(value)) {
                if (attemp != 0)
                    message(`Correct Answer is Greater...\n ${attemp} attempt is left...`, "red");
                else {
                    input.value = '';
                    attemp = -1;
                    message(`You loss... Try Again..`, "loss");
                }

            }

            else {
                if (attemp != 0)
                    message(`Correct Answer is Smaller...\n ${attemp} attempt is left...`, "red");
                else {
                    input.value = '';
                    attemp = -1;
                    message(`You loss... Try Again..`, "loss");
                }
            }
            attemp--;
        }
    }

    e.preventDefault();
});

restart.addEventListener('click', e => {
    if (document.querySelector('p'))
        document.querySelector('p').remove();
    attemp = 2;
    rand = parseInt(getRandomInt(1, 11));
});

function getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
}

function message(text, className) {
    let msg = document.createElement('p');
    msg.className = className;
    msg.innerHTML = text;
    div.insertBefore(msg, restart);
    if (attemp >= 0) {
        setTimeout(() => {
            msg.remove();
        }, 1000);
    }
}
