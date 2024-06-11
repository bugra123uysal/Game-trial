


document.addEventListener('mousemove', function(event){

const faloow=document.getElementById("cubuk");
const mouseX=event.clientX;
const mouseY=event.clientY;


faloow.style.left=`${mouseX}px`;
faloow.style.top = `${mouseY}px`;

});