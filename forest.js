let imgData = [
    'images/forest01.jpg',
    'images/forest02.jpg',
    'images/forest03.jpg',
    'images/forest04.jpg',
    'images/forest05.jpg',
    'images/forest06.jpg',
    'images/forest07.jpg',
    'images/forest08.jpg',
    'images/forest09.jpg',
    'images/forest010.jpg',
    'images/forest011.jpg',
    'images/forest012.jpg',
    'images/forest013.jpg',
    'images/forest014.jpg'
];


let myPhotos = document.querySelectorAll('.thumbnail');
//console.log(myPhotos);
let imgTag = document.querySelectorAll('.imageTag');

for(let i = 0; i < myPhotos.length; i++)
{
    imgTag[i].src = imgData[i];

    myPhotos[i].addEventListener('mouseover', overFn)
    myPhotos[i].addEventListener('mouseout', outFn)
}

function overFn(e)
{
    e.path[0].classList.add('on');
}

function outFn(e)
{
    e.path[0].classList.remove('on');
}

//requestAnimaionFrame

let mouse = document.querySelector('#mouse');

console.log(mouse);

let myAnimation = requestAnimationFrame(aniFn);

let posX = 0;
let posY = 0;
let targetPosX = 0;
let targetPosY = 0;
let g = 0.05;


function aniFn()
{
    mouse.style.left = posX+ 'px';
    mouse.style.top = posY+ 'px';
    
    //move algorithm
    posX += (targetPosX-posX) * g;
    posY += (targetPosY-posY) * g;
   
    requestAnimationFrame(aniFn);
}


document.addEventListener('mousemove', setPos);

function setPos(e)
{
    targetPosX = e.clientX;
    targetPosY = e.clientY;
}



//cancelAnimationFrame(myAnimaion)