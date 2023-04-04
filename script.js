// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value=string;
//         }
//         else if(e.target.innerHTML == 'AC'){
//             string = '';
//             document.querySelector('input').value=string;
//         }
//         else{
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value=string;
//         }
//     })
// })

function clearScreen(){
    document.querySelector('input').value = "";
}
function display(value){
    document.querySelector('input').value += value;
}
function calculate(){
    let n1 = document.querySelector('input').value;
    let n2 = eval(n1);
    document.querySelector('input').value = n2;
}