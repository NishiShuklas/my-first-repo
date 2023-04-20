function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('dd-menu');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    console.log(target);
    // alert(target.innerHTML);
    document.getElementById("indus").innerHTML=target.innerHTML
};
var ul = document.getElementById('dd-menu2');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    console.log(target);
    // alert(target.innerHTML);
    document.getElementById("induss").innerHTML=target.innerHTML
};

document.getElementById('indus')