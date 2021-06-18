
let imgData = [
    'images/ocean1.jpg',
    'images/ocean2.jpg',
    'images/ocean3.jpg',
    'images/ocean4.jpg',
    'images/ocean5.jpg',
    'images/ocean6.jpg',
    'images/ocean7.jpg',
    'images/ocean8.jpg',
    'images/ocean9.jpg',
    'images/ocean10.jpg',
    'images/ocean11.jpg',
    'images/ocean12.jpg',
    'images/ocean13.jpg',
    'images/ocean14.jpg'
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