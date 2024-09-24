function converter() {
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;
    let resultado;

    if (tipo === "celsius") {
        resultado = (valor * 9/5) + 32; // Celsius para Fahrenheit
        document.getElementById('resultado').innerText = `${valor} °C é igual a ${resultado.toFixed(2)} °F`;
    } else {
        resultado = (valor - 32) * 5/9; // Fahrenheit para Celsius
        document.getElementById('resultado').innerText = `${valor} °F é igual a ${resultado.toFixed(2)} °C`;
    }
}