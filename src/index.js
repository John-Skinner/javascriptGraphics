import { LineDrawer} from "./LineDrawer";

function drawBasic(canvas,l1,l2) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.rect(10,20,150,200);

    ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(30,30);
ctx.lineTo(400,400);
ctx.stroke();
l1.draw(ctx, 220,20,240,20);
l2.draw(ctx,220,40,240,40);
}


function main() {
    console.log(`call main`);
    const canvas=document.getElementById('mainCanvasId');

    let l1 = new LineDrawer();
    let l2 = new LineDrawer();
    l1.color = 'blue';
    l2.color = 'red';
    drawBasic(canvas,l1,l2);


}
console.log(`add event listener`);
window.addEventListener('onload',main());