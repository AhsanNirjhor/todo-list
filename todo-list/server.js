// let li = document.getElementById("container");
// let input = document.getElementById("input");
// let listitem = document.getElementById("listitem");


function addTask() {
    const li = document.getElementById("container");
    const input = document.getElementById("taskName");
    const listitem = document.getElementById("listitem");
    
    if (input.value ==='') {
        alert("Type something")
    }

    else {
        //let count = 1
        // const listitem = document.getElementById("listitem");
        list = document.createElement("li");
        list.innerHTML = input.value;
        //list.classList='newlist';
        // list.onclick = function () {
        //     list.innerHTML = `<del> $listitem.innerHTML}</del>`
        // };

        listitem.appendChild(list);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        list.appendChild(span);


        list.addEventListener("click", function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle('checked')
                console.log("hi");
            }
        }, false)
    
        span.addEventListener("click", function (e) {
            const li1 = span.parentNode;
            listitem.removeChild(li1);
            //saveData();
        }, false)
        
        // count++;
    }
    input.value = ""
    // function saveData(){
    //     localStorage.setItem('data', listitem.innerHTML)
    // }
    
    // function showData(){
    //     listitem.innerHTML = localStorage.getItem('data');
    // }
    // saveData();
    // showData();
}
// listitem.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle('checked')
//         console.log("hi");
//     }
// }, false)

// function saveData(){
//     localStorage.setItem('data', listitem.innerHTML)
// }

// function showData(){
//     listitem.innerHTML = localStorage.getItem('data');
//}
// list.addEventListener("click", function (e) {
//     if (e.target.tagName === "Li") {
//         e.target.classList.toggle('checked')
//         console.log(e.target);
//     }
// }, false)

//addTask();

