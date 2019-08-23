const model = {
    canvas: null,
    ctx: null,
    x: 0,
    y: 0,
    draw: false,
    colorChanger: null,
    CurrentColor: "black",
    sizeScroll: null,

    isDraw: function () {
        model.draw = true;
    },
    mouseDown: function (e) {
        model.isDraw();
        model.x = e.layerX;
        model.y = e.layerY;
        model.ctx.beginPath();
        // model.ctx.strokeStyle;
        model.ctx.moveTo(model.x, model.y);
        model.ctx.stroke();
    },
    mouseMove: function (e) {

        if (model.draw) {
            model.x = e.layerX;
            model.y = e.layerY;
            model.ctx.strokeStyle = model.CurrentColor;
            model.ctx.lineTo(model.x, model.y);
            model.ctx.lineWidth = model.sizeScroll.value;
            model.ctx.moveTo(model.x, model.y);
            model.ctx.stroke();
            obj = {
                x: e.layerX,
                y: e.layerY,
                line: model.sizeScroll.value,
                color: model.CurrentColor,
            };

            ws.send(JSON.stringify(obj));
        }
    },
    mouseUp: function () {
        model.draw = false;
    },
    mouseUp: function () {
        model.draw = false;
    },
    changeColor: function (e) {
        model.CurrentColor = e.target.value;
    },

    isDrawing: function (obj) {
        model.ctx.strokeStyle = obj.color;
        model.ctx.lineTo(obj.x, obj.y);
        model.ctx.lineWidth = obj.line;
        model.ctx.moveTo(obj.x, obj.y);
        model.ctx.stroke();
    }
};