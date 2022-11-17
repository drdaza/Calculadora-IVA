/* Calculadora de IVA
* Crear archivo HTML--
* Crear el espacio para la calculadora de IVA--
** Crear espacio para recibir el precio para calcularle su IVA--
** Crear espacio para mostrar la información del precio + su IVA--
++ Darle estilos al html con csss--
* Crear mi archivo JavaScript-- 
* Conecta archivo JavaScript al archivo HTML--
* Acceder a la información del espacio donde voy a recibir el precio--
* Almacenar esa información --
* Hacer el calculo del IVA de la información recibida
* Acceder al espacio donde voy a mostrar el calculo 
* Mostrar el resultado.
*/
pressButton();
function pressButton(){
    let button = document.getElementById("button");
    button.addEventListener("click",app);
}
function calculeIVA(price){
    let calc = price + (price * 0.21);
    return calc;
}
function ShowInScreen(value){
    let spaceCalculator = document.getElementById("space-calculator");
    spaceCalculator.innerHTML = `<h1>${value}</h1>`;
}
function app(){
    let information = document.getElementById("price-enter");
    const priceFinal= calculeIVA(parseFloat(information.value, 10.0));
    ShowInScreen(priceFinal);
}