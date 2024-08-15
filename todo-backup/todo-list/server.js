function addTask() {
    const li = document.getElementById("container");
    const input = document.getElementById("input");
    const listitem = document.getElementById("listitem")
    if (input.value == "") {
        alert("Type something")
    }

    else {
        //let count = 1
        const listitem = document.getElementById("listitem");
        list = document.createElement("li");
        list.innerHTML = input.value
        // list.onclick = function () {
        //     list.innerHTML = `<del> ${listitem.innerHTML}</del>`
        // };

        listitem.appendChild(list);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        list.appendChild(span)


        // count++;
    }
    input.value = ""

}

listitems = document.getElementById("listitem");
listitems.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked')
    }
}, false)



