level = prompt('Введите номер задачи')

switch(level){
    case '1':
        level1()
        break
    case '2':
        level2()
        break
    case '3':
        level3()
        break
    case '4':
        level4()
        break
    case '5':
        level5()
        break
}


function level1() {
    while (true){
        let speed = prompt('Введите скорость числом')
        if (isNaN(speed)){
            console.log('Введите скорость числом')
        }else{
            while(true){
                let toConvert = prompt('Введите в какую систему исчисления вы хотите перевести\n(toMS - в м/с toKMH - в км/ч)')
                if (toConvert === 'toMS' || toConvert === 'toKMH'){
                    convertSpeed(speed, toConvert)
                    break
                }else{
                    console.log('Введите как в примере\n(toMS - в м/с toKMH - в км/ч)')
                }
            }
            break
        }
    }
}

function level2() {
    while (true){
        let number = prompt('Введите число, чтобы узнать модуль')
        if (!isNaN(number)){
            absValue(number)
            break
        }else{
            console.log('Введите число!')
        }
    }
}

function level3() {
    let student = {}

    let myName = prompt('Введите имя студента')
    let myLastname = prompt('Введите фамилию студента')
    let myGroup = prompt('Введите учебную группу')

    student['name'] = myName
    student['lastname'] = myLastname
    student['group'] = myGroup

    let myValue = Object.values(student)

    let first_str = 'Список свойств: '
    let second_str = 'Студент '

    for (let key in student){
        if (key === 'name'){
            first_str += key
        }else{
            first_str += `, ${key}`
        }
    }

    for (let value in myValue ){
        if (value < 2){
            second_str += `${myValue[value]} `
        }else{
            second_str += `учится в ${myValue[value]} группе` 
        }
    }
    
    console.log(first_str)
    console.log(second_str)
}

function level4(){
    while(true){
        const min = prompt('Введите минимальное значение')
        const max = prompt('Введите максимальное значение')
        if (isNaN(min) && isNaN(max)){
            console.log('Введите числом min и max')
        }else{
            console.log(randomNumber(min, max))
        }
    }
}

function level5(){
    let myArr = []
    while (true){
        let number = prompt('Введите число, чтобы заполнить массив,\nчтобы прекрать заполнять массив введите cancel')
        if (isNaN(number)){
            if (number === 'cancel'){
                break
            }else{
                console.log('Введите чилсо или cancel')
            }
        }else{
            myArr.push(number)
        }
    }

    let resArr = []
    while (true){
        let count = prompt('Введите кол-во рандомных чисел')
        if (!isNaN(count)){ 
            for (let i = 0; i < count; i++){
                rand_num = randomNumber(0, myArr.length - 1)
                resArr.push(myArr[rand_num])
            }
            break
        }else{
            console.log('Введите число!')
        }
    }
    console.log(myArr)
    console.log(resArr)
}


function convertSpeed(speed, toConvert) {
    if (toConvert == 'toMS'){
        return speed/3.6
    }
    if (toConvert == 'toKMH'){
        return speed*3.6
    }else{
        console.log('Введите как в примере!')
    }

}

function absValue(number) {
    if (number > 0){
        return number
    }
    
    return -1*number
}

function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
