

let num = document.querySelectorAll(".num")
let speed = 40;

num.forEach(e => {
    incNumber(e)
});

function incNumber(elem) {
    let text = +elem.innerText;
    let value = +elem.getAttribute("data-target")
    let inc = Math.floor(value/speed);
    if(text < value){
        elem.innerText = inc+text
        setTimeout(() => {
            incNumber(elem)
        }, 20);
    }else{
        elem.innerText = value
    }
}