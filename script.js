function init()
{
  var can = document.getElementById('canvasDeep');
  var ctx = can.getContext('2d');
  var data = [80,140,150,140,170,100,100, 80, 90,100,100,90];
  var colors = ["maroon", "blue", "yellow", "navy", "aqua", "purple","red","maroon", "blue", "yellow", "navy", "aqua"];
  var names=["JAN","FEB","MAR","APR","MAY","JUNE","JULY","AUG","SEPT","OCT","NOV","DEC"];
  var centerX=can.width/2;
  var centerY=can.height/2 + 25;
  var radius = (Math.min(can.width,can.height) / 2)-70;
  var startAngle=0, total=0;
  for(var i in data) { 
    total += data[i]; 
  }
  var incrFactor=-(centerX-centerX/2);
  var angle=0;
  for (var i = 0; i<data.length; i++){
    ctx.fillStyle = colors[i];
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX,centerY,radius,startAngle,startAngle+(Math.PI*2*(data[i]/total)),false);
    ctx.lineTo(centerX,centerY);  
    ctx.rect(centerX+incrFactor,20,20,10);
    ctx.fill();
    ctx.fillStyle="black";
    ctx.font="bold 10pt Arial";
    ctx.fillText(names[i],centerX+incrFactor,15);
    ctx.save();
    ctx.translate(centerX,centerY);
    ctx.rotate(startAngle);
    var dx=Math.floor(can.width*0.5)-100;
    var dy=Math.floor(can.height*0.20);
    ctx.fillText(names[i],dx-100,dy-50);
    ctx.restore();
    startAngle += Math.PI*2*(data[i]/total);
    incrFactor+=50;  
  }
}