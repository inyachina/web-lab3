// initActionButtons()
document.getElementById("")
function initActionButtons() {
    let buttons = document.getElementsByName('action_button');
    for (let i = 0; i < buttons.length; i) {
        initSelectButton(buttons[i]);
    }
}

let is_selected = false;

function initSelectButton(select_button) {
    if (select_button.innerHTML !== "select") {
        select_button.setAttribute("name", "select_button");
        select_button.innerHTML = "select";
        select_button.onclick = function () {
            // alert(select_button.value)
            if (this.innerHTML === "select") {
                clear_points();
                clear_hit_point();
                is_selected = true;
                let clicked_button = document.getElementsByName('clicked_button')[0];
                if (clicked_button != undefined) {
                    clicked_button.click();
                    clicked_button.setAttribute("name", "select_button");
                }
                this.innerHTML = "unselect";
                this.setAttribute("name", "clicked_button");
                let values = this.value.split(";");
                r_text.innerText = values[2];
                r_slider.value = values[2];
                draw_r();
                draw_point(values[0], values[1], values[2], values[3]);
                this.style.background = "#1d49aa";
            } else {
                this.innerHTML = "select";
                this.setAttribute("name", "select_button");
                clear_points();
                is_selected = false;
                this.style.background = "#6086d4";
                graph_div.scrollTo({
                    top: height_canvas / 2 - 150,
                    left: width_canvas / 4 - 75,
                    behavior: 'smooth'
                });
            }
        }
        return select_button;
    }
}
