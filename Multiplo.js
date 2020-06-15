function multiplo(num1, num2) {
    if ((num1%num2) == 0) {
        return num1+ " es multiplo de " + num2;
    } else {
        return num1 + " no es multiplo de " + num2;    }
}
module.exports = multiplo;