let clockRef = document.querySelector('.Clock');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
setInterval(sec,1000);
let skuska;
function sec(){
    let date = new Date();
    skuska = date.getSeconds();
    console.log(skuska);
}



//clockRef.innerText = '';