const allButtons = document.querySelectorAll('.button');
const input = document.querySelector('.input');

function calculate(expression) {
    return Function('"use strict"; return (' + expression + ')')();
}



allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('digit')) {
            if (input.value === '0') {
                input.value = '';
            }
            input.value += e.target.textContent;
            console.log(parseInt(input.value));
        } else if (e.target.classList.contains('ac')) {
            input.value = "0"
        } else if (e.target.classList.contains('last-button')) {
            const result = calculate(input.value);
            input.value = result.toString();
        } else if (e.target.classList.contains('operation')) {
            const operations = ["+", "-", "*", "%", "/", "."];
            if (!operations.some(operation => {
                return input.value.endsWith(operation);
            })) {
                input.value += e.target.textContent;
            }
        } else if (e.target.classList.contains('del')) {
            if (input.value.length === 1 && +input.value !== 0) {
                input.value = "0";
            } else if (input.value.length > 1) {
                input.value = input.value.slice(0, -1);
            }
        }
    })
})



