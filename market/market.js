var Product = function (name, place, weight, price) {
    this.name = name,
    this.place = place,
    this.weight = weight,
    this.price = price
}

Product.prototype.name = function () {
    return this.name;
};
Product.prototype.place = function () {
    return this.place;
};
Product.prototype.weight = function () {
    return this.weight;
};
Product.prototype.price = function () {
    return this.price;
};


var apples = new Product('Яблука', 'фрукти', 3, 12);
var orange = new Product('Апельсини', "фрукти", 5, 34);
var banana = new Product('Банани', "фрукти", 3, 40);
var kokoa = new Product('Кокоси', "фрукти", 3, 85);
var grape = new Product('Виноград', "фрукти", 1, 34);

var beet = new Product('Буряк', "овочі", 1, 34);
var оnion = new Product('Цибуля', "овочі", 3, 65);
var potato = new Product('Картопля', "овочі", 5, 48);
var carrot = new Product('Морква', "овочі", 11, 23);
var сabbage = new Product('Капуста', "овочі", 9, 45);

var kofee = new Product('Буряк', "бакалія", 5, 95);
var spagetti = new Product('Спагетті', "бакалія", 6, 34);
var water = new Product('Вода', "бакалія", 12, 8);
var krupa = new Product('Крупа ячнева', "бакалія", 4, 15);
var sausage = new Product('Ковбаса', "бакалія", 6, 120);



Product.prototype.bill = function () {
    return 'Ви придбали ' + this.name + " з відділу " + this.place + " на суму: " + this.weight * this.price + ' грн.'
}



console.log(apples.bill());
console.log(orange.bill());
console.log(banana.bill());
console.log(kokoa.bill());
console.log(grape.bill());

console.log(beet.bill());
console.log(оnion.bill());
console.log(potato.bill());
console.log(carrot.bill());
console.log(сabbage.bill());

console.log(kofee.bill());
console.log(spagetti.bill());
console.log(water.bill());
console.log(krupa.bill());
console.log(sausage.bill());