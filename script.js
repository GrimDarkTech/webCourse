let money = Number(prompt("Ваш месячный доход:"));
let income = 5000; // freelance
let addExpenses = String(prompt("Перечислите возможные расходы за рассчитываемый период через запятую"));
let deposit = Boolean(confirm("У вас есть депозит в банке?"));

let expenses1 = String(prompt("Введите обязательную статью расходов"));
let amount1 = Number(prompt("Во сколько обойдется?"));
let expenses2 = String(prompt("Введите обязательную статью расходов 2"));
let amount2 = Number(prompt("Во сколько обойдется?"));

let budgetMonth = money-(amount1 + amount2);
console.log('budgetMonth :', budgetMonth);

let mission = 10000;
let period = 0;

//console.log(typeof(money));
//console.log(typeof(income));
//console.log(typeof(deposit));
//console.log(addExpenses.length);
//console.log('Период равен ', period, ' месяцев.');
//console.log('Цель заработать ', mission, ' Евродолларов.');
period = Math.ceil(mission/budgetMonth);
console.log('period :', period);

budgetDay = Math.round(budgetMonth / 30); //округляем, чтобы не было охинеи на половину консоли
console.log('Ежедневный доход ', budgetDay);

if (budgetDay >= 1200){
    alert("У вас высокий уровень дохода");
}else if (budgetDay < 1200 && budgetDay >= 600){
    alert("У вас средний уровень дохода");
}else if (budgetDay < 600 && budgetDay >= 0){
    alert("К сожалению у вас уровень дохода ниже среднего");
}else{
    alert("Что-то пошло не так");
}