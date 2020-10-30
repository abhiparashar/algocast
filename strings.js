function reverseString(str){
    let a = str.split('').reverse().join('')
    console.log(a)
}

reverseString('Greetings!')

module.exports = reverseString