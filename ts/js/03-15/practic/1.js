"use strict";
function getColor() {
    var color = prompt("введите цвет hex");
    var n = 0;
    if (color === null)
        return;
    if (color[0] == "#")
        n++;
    var parseColor = parseInt(color, 16);
    var r = parseColor - (parseColor % 65536);
    var g = parseColor - r - (parseColor % 256);
    var b = parseColor - r - g;
    alert(r / 65536 + ", " + g / 256 + ", " + b);
}
//# sourceMappingURL=1.js.map