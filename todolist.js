const addfrm = document.addfrm;
const add = addfrm.add;
const ul = document.querySelector(".todos");
addfrm.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = add.value;
    let str = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${text}</span>
    <i class="far fa-trash-alt delete"></i> </li>`;
    ul.innerHTML += str;
    add.value = "";

});

const found = (textsearch) => {
    let list = ul.children;
    for (let li of list)
        if (li.innerText.toLowerCase().indexOf(textsearch) == -1) {
            li.classList.add("filtered");
        } else {
            li.classList.remove("filtered");
        }

};

const searchfrm = document.querySelector(".search");
const searchinput = searchfrm.search;
searchfrm.addEventListener("keyup", (e) => {
    let searchtext = searchinput.value;
    found(searchtext.toLowerCase().trim());
});

ul.addEventListener("click", (e) => {
    if (e.target.nodeName == "I")
        e.target.parentElement.remove();
});