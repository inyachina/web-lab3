width_canvas = 1200;
height_canvas = 1200;

graph_div = document.getElementById("graph_div");

graph_div.innerHTML += '<canvas name="canvas" class="graph" width="1205" height="1200" id="graph"></canvas>' +
    '<canvas name="canvas" class="r_graph" width="605" height="600" id="r_graph"></canvas>' +
    '<canvas name="canvas" class="point_graph" width="1205" height="1200" id="point_graph"></canvas>' +
    '<canvas name="canvas" class="point_graph" width="1205" height="1200" id="hit_graph"></canvas>';
graph_div.scrollTo(width_canvas / 4 -75, height_canvas / 4 + 150)

canvas = document.getElementById("graph");
context = canvas.getContext("2d");

r_canvas = document.getElementById("r_graph");
r_context = r_canvas.getContext("2d");


point_canvas = document.getElementById("point_graph");
point_contex = point_canvas.getContext("2d");

hit_canvas = document.getElementById("hit_graph");
hit_contex = hit_canvas.getContext("2d");

draw()

draw_r();

function draw_r() {
    r_context.clearRect(0, 0, width_canvas, height_canvas);
    let R = r_text.innerText;
    // let R = document.getElementById("r").value;
    // r_context.strokeStyle = "black";
    // r_context.fillText("0", 285, 320);
    // if (R === "" || R === undefined || R === 0) {
    // r_context.fillText("-3R/2", 59, 320);
    // r_context.fillText("-R", 142, 320);
    // r_context.fillText("-R/2", 210, 320);
    // r_context.fillText("R/2", 365, 320);
    // r_context.fillText("R", 447, 320);
    // r_context.fillText("3R/2", 515, 320);
    // r_context.fillText("3R/2", 262, 78);
    // r_context.fillText("R", 283, 153);
    // r_context.fillText("R/2", 269, 228);
    // r_context.fillText("-R/2", 265, 378);
    // r_context.fillText("-R", 277, 453);
    // r_context.fillText("-3R/2", 258, 528);
     if (R.split(".")[1] === "5") {
        r_context.fillText(-3 * R / 2, 60, 320);
        r_context.fillText(-R, 136, 320);
        r_context.fillText(-R / 2, 210, 320);
        r_context.fillText(R / 2, 367, 320);
        r_context.fillText(R, 442, 320);
        r_context.fillText(3 * R / 2, 516, 320);
        r_context.fillText(3 * R / 2, 262, 78);
        r_context.fillText(R, 269, 153);
        r_context.fillText(R / 2, 262, 228);
        r_context.fillText(-R / 2, 258, 378);
        r_context.fillText(-R, 266, 453);
        r_context.fillText(-3 * R / 2, 258, 528);
    } else if (R % 2 === 0) {
        r_context.fillText(-3 * R / 2, 67, 320);
        r_context.fillText(-R, 142, 320);
        r_context.fillText(-R / 2, 217, 320);
        r_context.fillText(R / 2, 372, 320);
        r_context.fillText(R, 447, 320);
        r_context.fillText(3 * R / 2, 522, 320);
        r_context.fillText(3 * R / 2, 280, 78);
        r_context.fillText(R, 280, 153);
        r_context.fillText(R / 2, 280, 228);
        r_context.fillText(-R / 2, 277, 378);
        r_context.fillText(-R, 277, 453);
        r_context.fillText(-3 * R / 2, 277, 528);
    } else {
        r_context.fillText(-3 * R / 2, 61, 320);
        r_context.fillText(-R, 142, 320);
        r_context.fillText(-R / 2, 211, 320);
        r_context.fillText(R / 2, 367, 320);
        r_context.fillText(R, 447, 320);
        r_context.fillText(3 * R / 2, 516, 320);
        r_context.fillText(3 * R / 2, 268, 78);
        r_context.fillText(R, 280, 153);
        r_context.fillText(R / 2, 270, 228);
        r_context.fillText(-R / 2, 268, 378);
        r_context.fillText(-R, 278, 453);
        r_context.fillText(-3 * R / 2, 268, 528);
    }
}

function draw() {
    context.beginPath();

    context.font = "12px veranda"
    context.lineWidth = 0.4;
    context.strokeStyle = "rgba(91,90,95,0.7)";
    //штрихи x
    for (let i = 75; i <= width_canvas - 75; i += 75) {
        context.moveTo(i, height_canvas);
        context.lineTo(i, 0);
    }
    //штрихи y
    for (let i = 75; i <= height_canvas - 75; i += 75) {
        context.moveTo(width_canvas, i);
        context.lineTo(0, i);
    }
    context.stroke();
    context.closePath();
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "black";
    //ось X черные штрижки
    for (let i = 75; i <= width_canvas - 75; i += 75) {
        context.moveTo(i, height_canvas / 2 + 5);
        context.lineTo(i, height_canvas / 2 - 5);
    }
    //Ось Y черные штрижки
    for (let i = 75; i <= height_canvas - 75; i += 75) {
        context.moveTo(width_canvas / 2 + 5, i);
        context.lineTo(width_canvas / 2 - 5, i);
    }
    context.stroke();
    context.fillStyle = "rgb(17,16,16)";
    context.font = "12px veranda";
    //ось у стрелка
    context.moveTo(width_canvas / 2, height_canvas);
    context.lineTo(width_canvas / 2, 0);
    context.lineTo(width_canvas / 2 + 3, 7);
    context.moveTo(width_canvas / 2, 0);
    context.lineTo(width_canvas / 2 - 3, 7);
    context.lineTo(width_canvas / 2 + 4, 7);
    context.fillText("y", width_canvas / 2 - 18, 12);

    //Ось X стрелка
    context.moveTo(0, height_canvas / 2);
    context.lineTo(width_canvas, height_canvas / 2);
    context.lineTo(width_canvas - 7, height_canvas / 2 - 3);
    context.moveTo(width_canvas, height_canvas / 2);
    context.lineTo(width_canvas - 7, height_canvas / 2 + 3);
    context.lineTo(width_canvas - 7, height_canvas / 2 - 4);
    context.fillText("x", width_canvas - 8, height_canvas / 2 + 20);
    context.stroke();

    context.closePath();

}

graph_div.onclick = function () {
    hit_point_cursor();
    y_input.setAttribute("class", "text_field");
   check_y_input()
    x_input.setAttribute("class", "text_x_field");
   check_x_input()
}

function relMouseCoords(event) {
    let totalOffsetX = 0;
    let totalOffsetY = 0;
    let canvasX = 0;
    let canvasY = 0;
    let currentElement = this;

    do {
        totalOffsetX += currentElement.offsetLeft - currentElement.scrollLeft;
        totalOffsetY += currentElement.offsetTop - currentElement.scrollTop;
    }
    while (currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x: canvasX, y: canvasY}
}

HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;


context.lineWidth = 2;
context.strokeStyle = 'black';

document.getElementById("back_button").onclick = function (event) {
    if (is_graph_choice) {
        $("#graph_choice").fadeOut(200, function () {
            $("#choice").fadeIn(200);
        });
        is_graph_choice = false;
        // x_hidden_input.value = old_x_value;
        // y_input.value = old_y_value;
        // if (is_empty_y)
        //     y_input.value = "";
        if (is_empty_x) {
            document.getElementById("x0").checked = false;
        }
        // is_empty_y = false;
        // is_empty_x = false;
    }
};
x_graph_input = document.getElementById("x_choice");
y_graph_input = document.getElementById("y_choice");
r_graph_input = document.getElementById("r_choice");
is_graph_choice = false;

function clear_labels() {
    x_graph_input.innerText = "...";
    y_graph_input.innerText = "...";
}

function hit_point_cursor() {
    // $("#radio_x_div").fadeOut(10, function () {
    //     $("#graph_x_div").fadeIn(400);
    // });
    hit_contex.clearRect(0, 0, width_canvas, height_canvas);
    let coords = canvas.relMouseCoords(event);
    let x = coords.x;
    let y = coords.y;
    hit_contex.beginPath();
    hit_contex.strokeStyle = "rgb(0,0,0)";
    hit_contex.arc(x, y, 2, 0, 2 * Math.PI);
    hit_contex.fill();
    hit_contex.stroke();
    x_input.value =((x - width_canvas / 2) / 150 * r_text.innerText).toFixed(2);
    x_output_text.innerText = ((x - width_canvas / 2) / 150 * r_text.innerText).toFixed(2);
    y_input.value =((-y + height_canvas / 2) / 150 * r_text.innerText).toFixed(2);
}

var is_empty_x = false;

function draw_point(x, y, r, isHit) {
    point_contex.clearRect(0, 0, width_canvas, height_canvas)
    point_contex.fillStyle = "rgb(255,255,255)";
    point_contex.strokeStyle = "rgb(255,255,255)";
    point_contex.setLineDash([5, 3]);
    point_contex.moveTo(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r);
    point_contex.lineTo(width_canvas / 2, height_canvas / 2 - 150 * y / r)
    point_contex.moveTo(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r);
    point_contex.lineTo(width_canvas / 2 + x * 150 / r, height_canvas / 2);
    point_contex.stroke();

    point_contex.setLineDash([]);
    if (!isHit || isHit === "false") {
        point_contex.fillStyle = "rgb(231,37,37)";
        point_contex.strokeStyle = "rgb(241,58,58)";
    } else {
        point_contex.fillStyle = "rgb(61,212,70)";
        point_contex.strokeStyle = "rgb(51,234,56)";
    }
    point_contex.beginPath();
    point_contex.arc(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r, 4, 0, 2 * Math.PI);
    point_contex.fill();
    point_contex.stroke();
    point_contex.setLineDash([]);
    point_contex.closePath();
    point_contex.strokeStyle = "rgb(255,255,255)";
    point_contex.arc(width_canvas / 2 + x * 150 / r, height_canvas / 2 - 150 * y / r, 5, 0, 2 * Math.PI);
    point_contex.stroke();
    graph_div.scrollTo({
        top: height_canvas / 4 + 150 - 150 * y / r,
        left:  width_canvas / 4 -75 + x * 150 / r,
        behavior: 'smooth'
    });
}

function clear_points() {
    point_contex.clearRect(0, 0, width_canvas, height_canvas);
}

function clear_hit_point() {
    hit_contex.clearRect(0, 0, width_canvas, height_canvas);
}
