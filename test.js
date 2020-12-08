const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter a number \n', (input)=>{
    const number = input.split('');
    let sum = 0;
    number.forEach(num =>{
        sum += parseInt(num);
    });
    console.log(sum);
    rl.close();
})