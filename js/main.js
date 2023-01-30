document.getElementById("myBlock").addEventListener("click", displayDate);

function displayDate() {
    // document.getElementById("demo").style.transform = "rotateY(180deg)";
    document.getElementById("myBlock").classList.toggle("mystyle");
}


// menu
const menu = document.querySelector('.menu');
const btn = menu.querySelector('.nav-tgl');
btn.addEventListener('click', evt => {
    menu.classList.toggle('active');
})