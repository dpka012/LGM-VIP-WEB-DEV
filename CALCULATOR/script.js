let inputEl = document.getElementById("input-el");
let buttonEl = document.querySelectorAll("button");
let operatorClicked = false;

let inputval = " ";
let arr = Array.from(buttonEl);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML === '='){
            inputval = eval(inputval);
            inputEl.value = inputval;
        }
        else if (e.target.innerHTML == 'AC') {
            inputval = " " ;
            inputEl.value = inputval;
            operatorClicked = false;
        }
        else if(e.target.innerHTML == 'DEL') {
            inputval = inputval.substring(0 , inputval.length - 1);
            inputEl.value = inputval;
            operatorClicked = false;
        }
        else{
            if( isOperator(e.target.innerHTML) && operatorClicked ) {
            inputval = e.target.innerHTML;
            inputEl.value = inputval ;
            operatorClicked = true ;
            
            }
            else{
                inputval += e.target.innerHTML;
                inputEl.value = inputval;
                operatorClicked = false
            }
    }
    })
    
});

function isOperator(value){
    return value === '+'|| value === '-'
 || value === '*' || value === '/' || value === '.'}