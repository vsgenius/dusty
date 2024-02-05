function getColor():void {
    let color:string|null = prompt("введите цвет hex");
    let n = 0;
    if (color ===null) return;
    if (color[0] == "#") n++;
    let parseColor: number = parseInt(color, 16);
    let r:number = parseColor - (parseColor % 65536);
    let g:number = parseColor - r - (parseColor % 256);
    let b:number = parseColor - r - g;
    alert(r / 65536 + ", " + g / 256 + ", " + b);
}

