const hex_color = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const color = ["green", "blue", "yellow"];

const button = document.querySelector('.btn');
const color_indicator = document.querySelector('.bg-color-code');

button.addEventListener('click', function () {

    let hasTag = "#";
    for (let i = 0; i < 6; i++) {
        hasTag += hex_color[randomClr()];
    }
    document.body.style.backgroundColor = hasTag;
    color_indicator.textContent = hasTag;
});

function randomClr() {
    return Math.ceil(Math.random() * hex_color.length - 1);
}



