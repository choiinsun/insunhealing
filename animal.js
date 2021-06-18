let imgData = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg',
    'images/img6.jpg',
    'images/img7.jpg',
    'images/img8.jpg',
    'images/img9.jpg',
    'images/img10.jpg',
    'images/img11.jpg',
    'images/img12.jpg',
    'images/img13.jpg',
    'images/img14.jpg'
];

let imgName = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14'
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