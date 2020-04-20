var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

ctx.fillStyle = "blue"; 
ctx.fillRect(300,150,250,50);
ctx.fillStyle = "black"; 
ctx.fillRect(300,200,250,300);
var imageObj = new Image();
imageObj.onload = function(){
    ctx.drawImage(imageObj,320,250)
}
imageObj.src = 'img/images.png';

ctx.fillStyle = "brown";
ctx.fillRect(890,150,40, 50);
ctx.fillStyle = "brown";
ctx.fillRect(840,160,40, 50);
ctx.fillStyle = "brown";
ctx.fillRect(790,170,40, 50);

ctx.fillStyle = "blue";
ctx.save();
ctx.translate(875, 100);
ctx.rotate(Math.PI/3); 
ctx.fillRect(-50, -50, 50, 250);
ctx.restore();

ctx.fillStyle = "black"; 
ctx.fillRect(700,200,250,300);
var imageObj = new Image();
imageObj.onload = function(){
    ctx.drawImage(imageObj,720,250)
}
imageObj.src = 'img/images.png';
