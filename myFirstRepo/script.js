let title = "project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 100;
let rollback = 28;
let fullPrice = 250000;
let adaptive = true;

console.log(typeof (title), typeof (fullPrice), typeof (adaptive));
console.log(screens.length);
console.log(screenPrice + " долларов");
console.log(fullPrice + " рублей");

splitScreens = screens.toLowerCase();
massiveSplitScreens = splitScreens.split();
console.log(massiveSplitScreens);

let recoil = fullPrice * (rollback / 100);
console.log(recoil);

/* 

Необходимо выполнить в отдельном JS файле, подключенному к отдельной HTML странице




1) Создать переменную num со значением 266219 (тип данных число)




2) Вывести в консоль произведение (умножение) цифр этого числа

Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.




3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
*/