console.log('Task 1 \n перевод в м/сек и км/ч')

let speed_metr = prompt('Введите в метрах/секунду: ');
let speed_kilometr = prompt('Введите в километрах/час : ');

console.log(`${speed_metr} km/h -> ${speed_metr / 3.6} metr/sec \n`)
console.log(`${speed_kilometr} metr/sec -> ${speed_kilometr * 3.6} km/h \n`)


console.log('Task 2 \n Triangle')

const a = prompt('Введите сторону 1:')
const b = prompt('Введите сторону 2:')
const c = prompt('Введите сторону 3:')

if (a + b > c || a + c > b || c + b > a) {
    let perimetr = a + b + c;
    let p = (a + b + c) / 2;
    let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(`Triangle exists \nPerimetr: ${perimetr} \nSquare: ${square} \nRelation: ${square / perimetr}`);
} else {
    console.log('Task 2 \n Triangle not exists');
}


console.log('Task 3 \n Fizz-Buzz')

let number = prompt('Введите число: ')

while (isNaN(number)) {
    alert('Вы ввели не число! Пожалуйста введите число')
    number = prompt('Введите число: ')
}

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(`${i} buzz`)
    } else if (i % 5 === 0) {
        console.log(`${i} fizz-buzz`)
    } else {
        console.log(`${i} fizz`)
    }
}


console.log('Task 4 \n Christmas tree')

const star = '*'
const sharp = '#'

for (let i = 0; i < 13; i++) {
    if (i % 2 === 1) {
        console.log(`${star.repeat(i)}`)
    } else {
        console.log(`${sharp.repeat(i)}`)
    }
}
console.log('||')


console.log('Task 5\n Guess number 1 to 100')

const random = Math.random() * 100

while (true) {
    let number = prompt('Введите число: ')

    if (isNaN(number)) {
        alert('Вы ввели не число! Пожалуйста введите число')
    }

    if (random > number) {
        console.log('Ваше число меньше')
    } else if (random < number) {
        console.log('Ваше число больше')
    } else {
        console.log('Угадано')
        break;
    }
}


console.log('Task 6\n Devision')

while (true) {
    const number = prompt('делитель')
    const x = prompt('Делимое 1')
    const y = prompt('Делимое 2')

    if (isNaN(number) && isNaN(x) && isNaN(y)) {
        alert('Вы ввели не число! Пожалуйста введите число')
        continue
    }

    if (number % x === 0){
        if (number % y === 0){
            console.log(`n =\t ${number}, x = ${x}, y = ${y} => true`)
            break
        }else{
            console.log(`n =\t ${number}, x = ${x}, y = ${y} => false`)
            break
        }
    }else{
        console.log(`n =\t${number}, x = ${x}, y = ${y} => false`)
        break
    }
}


console.log('Task 7\n Quarters')

function checkQuarters(month){
    if (month < 4 && month > 0){
        console.log(`месяц ${month} => 1 квартал`);
    }
    if (month > 3 && month < 7){
        console.log(`месяц ${month} => 2 квартал`);
    }
    if ((month > 6 && month < 10)){
        console.log(`месяц ${month} => 3 квартал`);
    }
    if((month > 9 && month < 13)){
        console.log(`месяц ${month} => 4 квартал`);
    }
}

const month = prompt('Введите месяц например (месяц 2 или 2):')

while (true){
    if (!isNaN(month)){
        checkQuarters(month)
    }else{
        const listMonth = month.split(' ')
        if (!isNaN(listMonth[1])){
            checkQuarters(listMonth[1])
        }else{
            alert('Введите как в примере')
        }
    }
}

