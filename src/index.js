function drawBasic(canvas) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(10,20,150,200);

    ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(30,30);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();
}


function main() {
    console.log(`call main`);
    const canvas=document.getElementById('mainCanvasId');
    drawBasic(canvas);

}
console.log(`add event listener`);
window.addEventListener('onload',main());