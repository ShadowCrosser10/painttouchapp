var last_x_pos, last_y_pos;
color = "black";
ln_width = 2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var width = screen.width;
new_width = screen.width - 50;
new_height = screen.height - 400;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color_input").value;
    ln_width = document.getElementById("ln_width_input").value;

    last_x_pos = e.touches[0].clientX - canvas.offsetLeft;
    last_y_pos = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_x_pos = e.touches[0].clientX - canvas.offsetLeft;
    current_y_pos = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = ln_width;
    ctx.moveTo(last_x_pos, last_y_pos);
    ctx.lineTo(current_x_pos, current_y_pos);
    ctx.stroke();

    last_x_pos = current_x_pos;
    last_y_pos = current_y_pos;

}

function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

