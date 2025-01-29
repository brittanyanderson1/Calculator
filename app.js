const screenDisplay = document.querySelector('.screen')

const buttons = document.querySelectorAll('button')

console.log(buttons)

let calculation = []

let accumCalc = []

function calculate(button) {
    const value = button.textContent
    if(value === 'CLEAR') {
        calculation = []
        screenDisplay.textContent = '0'
        }else if(value === '=') {
            console.log(accumCalc)
            screenDisplay.textContent = eval(accumCalc)
        }else{
        calculation.push(value)
        accumCalc = calculation.join('')
        screenDisplay.textContent = accumCalc
    }
}

buttons.forEach(button => button.addEventListener('click',() => calculate(button)))