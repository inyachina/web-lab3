var r_text = document.getElementById("r_out_text");
var y_input = document.getElementById("y");
var x_input = document.getElementById("x");

var r_slider = document.getElementById("slider");
var x_output_text = document.getElementById("x_out_text");
var y_output_text = document.getElementById("y_out_text");

var table_container = document.getElementById("table_container");
document.getElementById("radio_x_div").onclick = function () {
    x_input.value = "-100";
    // x_output_text = "...";
}
// $('#send').addEventListener('click', () => {
//     alert("q231")
//     table_container.scrollBy({
//         top: $('#table').offsetHeight, // Scroll the the end of the tabele's height
//         behavior: 'smooth'
//     });
// })


r_slider.onclick = function () {
    draw_r();
}
y_input.onchange = function () {
    this.setAttribute("class", "text_field");
    check_y_input()
};

function check_y_input() {
    if (!/^-?\d+(\.|,)?\d*$/i.test(y_input.value)) {
        y_input.setAttribute("class", "failed_input")
        y_input.value = "";
        y_output_text.innerText = "...";
        return false;
    } else if (y_input.value.replace(/[,]/, ".") >= -3 && y_input.value.replace(/[,]/, ".") <= 5) {
        if (/(\.|,)$/i.test(y_input.value)) {
            y_input.setAttribute("class", "failed_input")
            y_input.value = "";
            y_output_text.innerText = "...";
            return false;
        } else {
            y_input.value = y_input.value.replace(/[,]/, ".");
            y_output_text.innerText = y_input.value;
            return true;
        }
    } else if (/(\.|,)$/i.test(y_input.value)) {
        y_input.setAttribute("class", "failed_input")
        y_input.value = "";
        y_output_text.innerText = "...";
        return false;
    } else {
        y_input.setAttribute("class", "failed_input")
        y_input.value = "";
        y_output_text.innerText = "...";
        return false;
    }
}

function check_x_input() {
    return true;
    // if (!/^-?\d+(\.|,)?\d*$/i.test(x_input.value)) {
    //     x_input.setAttribute("class", "failed_input")
    //     // x_input.value = "";
    //     x_output_text.innerText = "...";
    //     return false;
    // } else if (x_input.value.replace(/[,]/, ".") >= -4 && x_input.value.replace(/[,]/, ".") <= 4) {
    //     if (/(\.|,)$/i.test(x_input.value)) {
    //         x_input.setAttribute("class", "failed_input")
    //         // x_input.value = "";
    //         x_output_text.innerText = "...";
    //         return false;
    //     } else {
    //         x_input.value = x_input.value.replace(/[,]/, ".");
    //         x_output_text.innerText = x_input.value;
    //         return true;
    //     }
    // } else if (/(\.|,)$/i.test(x_input.value)) {
    //     x_input.setAttribute("class", "failed_input")
    //     // x_input.value = "";
    //     x_output_text.innerText = "...";
    //     return false;
    // } else {
    //     x_input.setAttribute("class", "failed_input")
    //     // x_input.value = "";
    //     x_output_text.innerText = "...";
    //     return false;
    // }
}