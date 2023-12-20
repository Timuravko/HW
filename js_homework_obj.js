//1.
let car = {
  color: 'black',
  maxSpeed: 220,
  price: 6588,
  getInfo() {
    for (let key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },
};
car.newProperty = 'new value';
car.getInfo();


//2.
var services = {
  "стрижка": 60,
  "гоління": 80,
  "Миття голови": 100
};
services['Розбити скло'] = 200;
function price() {
  return Object.values(services).reduce((total, current) => total + current, 0);
}
function minPrice() {
  return Math.min(...Object.values(services));
}
function maxPrice() {
  return Math.max(...Object.values(services));
}
console.log("Загальна вартість послуг: " + price() + " грн");
console.log("Мінімальний прайс: " + minPrice() + " грн");
console.log("Максимальний прайс: " + maxPrice() + " грн")
