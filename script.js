// parametros //
let activeElement = 0;

const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

const colorImages = ['s1.jpg', 's2.jpg', 's3.jpg'];
const grayImages = ['s1a.jpg', 's2a.jpg', 's3a.jpg'];
const namesImages = ['Quebec', 'Columbia ', ' Yucatan'];
const professionsImages = ['visitanos', "visitanos", 'visitanos'];

function changeElement() {
    activeElement++;
    if(activeElement == 3) {
        activeElement = -1; 
    }

 colorImgHtml.src = colorImages[activeElement];  
 grayImgHtml.src = grayImages[activeElement]; 
 h1Html.textContent = namesImages[activeElement]; 
 h2Html.textContent = professionsImages[activeElement]; 
}
setInterval(changeElement, 4000)
