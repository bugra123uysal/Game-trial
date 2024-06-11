

const ballan=document.getElementById("cubukalanı");

document.addEventListener('mousemove', function(event){

const faloow=document.getElementById("cubuk");
const rect=ballan.getBoundingClientRect();

const mouseX=event.clientX -rect.left;
const mouseY=event.clientY - rect.top;;


const clampedX = Math.max(0, Math.min(mouseX, rect.width - faloow.offsetWidth));
const clampedY = Math.max(0, Math.min(mouseY, rect.height - faloow.offsetHeight));

faloow.style.transform= `translate(${clampedX}px, ${clampedY}px) `;
});