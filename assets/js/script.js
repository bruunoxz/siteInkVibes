document.addEventListener("DOMContentLoaded", function () {
    var range = document.getElementById("range");
    var effect = document.getElementById("dv-effect").firstElementChild;

    range.addEventListener("input", function () {
        var value = range.value;
        var brightness = 1 - value / 100;
        effect.style.filter = "brightness(" + brightness + ")";
    });
});