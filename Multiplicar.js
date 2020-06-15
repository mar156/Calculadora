function multiplicar(num1, num2) {
    let resultado = null; 
     if (num1 ===0 || num2 === 0) {
        resultado = 0
    } else {
        resultado = num1*num2;
    }
     return resultado;
 }
 module.exports= multiplicar;
 