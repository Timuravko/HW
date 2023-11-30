var a = "km";
var b = "hours";
var c = "kg";
var unitName = a;
var quantity = 10;
switch (unitName) {
    case a:
        console.log((quantity*1000) + " metters");
        break;
    case b:
        console.log((quantity*60) + " min");
        break;
    case c:
        console.log((quantity*1000) + " gr");
        break;
    default:
        console.log("Введите число");
}