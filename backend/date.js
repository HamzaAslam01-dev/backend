//let x = 100;
//let y = 20;
//let z = 100;

//let stud_info = {
  //  name : "hamza"
    
//}

//export default {stud_info};
//export default {x, y ,z}; // when we have to import variable or function to another file than its way to import

// const getDate= () =>{
//     const date = new Date();
//     const time = date.toLocaleTimeString();
//     console.log(time);
// }
// export default getDate;

// Calculator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Date and time function
function getDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString();
    
    const time = now.toLocaleTimeString();
    return `${date} - ${time}`;
}

export { add, subtract, multiply, divide, getDateTime };