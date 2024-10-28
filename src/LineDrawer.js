export class LineDrawer {
    constructor(options) {
        this.color = 'red';
        this.lineWidth = 4;
    }
     setColor(color) {
        this.color = color;
    }
    setLineWidth(lineWidth) {
        this.lineWidth = lineWidth;
    }
    draw(context,ax,ay,bx,by) {
        context.beginPath();
        const prevLineWidth = context.lineWidth;
        const prevColor = context.color;
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.color;
        context.beginPath();
        context.moveTo(ax, ay);
        context.lineTo(bx, by);
        context.stroke();
        context.lineWidth = prevLineWidth;
        context.strokeStyle  = prevColor;
    }

}