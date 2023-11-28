let CartBtn = document.querySelectorAll('.button');

CartBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let price = e.target.parentElement.previousElementSibling;
        let name = price.previousElementSibling;
        let id = name.previousElementSibling;
        AddItem(id, name, price);
        alert("Item Added Succesfully");
    });
});

function AddItem(id, name, price) {
    let list = document.querySelector('#cart-list');
    let row = document.createElement('tr');
    row.innerHTML = `<td>${id.textContent}</td>
    <td>${name.textContent}</td>
    <td>${price.textContent}</td>
    <td><button class="remove">Remove</button></td>`;
    list.appendChild(row);
}

let row = document.querySelector('#cart-list');
row.addEventListener('click', RemoveItem);
function RemoveItem(e) {
    if (e.target.hasAttribute('class', 'remove')) {
        if (confirm("Are You Want To Delete This Item ?"))
            e.target.parentElement.parentElement.remove();
    }
}