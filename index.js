let clockRef = document.querySelector('.Clock');
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
setInterval(sec,1000);
let skuska;
let pomocnas = '0';
let pomocnam = '0';
let pomocnah = '0';
function sec(){
    
    let date = new Date();
    s = date.getSeconds();
    if (date.getHours() > 9){
        pomocnah = '';
    }
    if (date.getMinutes() > 9){
        pomocnam = '';
    }
    if (date.getSeconds() > 9){
        pomocnas = '';
    }
    if (date.getHours() == 0){
        pomocnah = '0';
    }
    if (date.getMinutes() == 0){
        pomocnam = '0';
    }
    if (date.getSeconds() == 0){
        pomocnas = '0';
    }
    clockRef.innerText = pomocnah + date.getHours() + " : " + pomocnam + date.getMinutes() + " : " + pomocnas + date.getSeconds();
}



//clockRef.innerText = 'Pica';