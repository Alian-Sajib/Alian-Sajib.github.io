let form = document.querySelector('#form');
let list = document.querySelector('#expression');
let input = document.querySelector('#input');

form.addEventListener('submit', e => {

    let type = list.value;
    let text = input.value;
    let postal_ex = /^[0-9]{4}$/;
    let email_ex = /^([A-Za-z0-9]\.?)+[^\.]@([A-Za-z])+\.([A-Za-z]\.?)+[^\.]$/;
    let name_ex = /^([A-Za-z]\s?)+$/;
    let phone_ex = /^\+?(88)?01[0-9]{9}$/;

    switch (type) {
        case 'email':
            message(email_ex.test(text), type);
            break;
        case 'phone no':
            message(phone_ex.test(text), type);
            break;
        case 'postal-code':
            message(postal_ex.test(text), type);
            break;
        case 'name':
            message(name_ex.test(text), type);
            break;
        default:
            message(false, "text/number");
    }

    e.preventDefault();
});

function message(e, text) {
    let form_div = document.querySelector('#form_div');
    let div = document.querySelector('#msg');
    let msg = document.createElement('h5');
    if (e) {
        msg.innerHTML = `Your ${text} is Valid`;
        msg.style.color = 'green';
        div.insertBefore(msg, form_div);
        setTimeout(() => {
            msg.innerHTML = '';
        }, 1000);
    }
    else {
        msg.innerHTML = `Your ${text} is Invalid`;
        msg.style.color = 'red';
        div.insertBefore(msg, form_div);
        setTimeout(() => {
            msg.innerHTML = '';
        }, 1000);
    }

}

