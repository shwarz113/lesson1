var budget = prompt("Ваш бюджет на месяц?", 10000);
var shopName = prompt("Название вашего магазина?", 'Foxbone');

var arr = ['','',''];
arr[0] = prompt("Какой тип товаров будем продавать?", 'кроссовки');
arr[1] = prompt("Какой тип товаров будем продавать?", 'футболки');
arr[2] = prompt("Какой тип товаров будем продавать?", 'штаны');

Employers = {}

mainList = {
	Budget: budget,
	name: shopName,
	shopGoods: arr,
	employers: Employers,
	open: true
}

alert(mainList.Budget/30);

console.log(mainList.Budget);
console.log(mainList.name);
console.log(mainList.shopGoods);