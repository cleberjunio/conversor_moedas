function converter() {
  var valorEmDolar = document.getElementById("valor").value;
  var valorEmReal = parseFloat(valorEmDolar * 5.5);
  var valorEmRealFixado = valorEmReal.toFixed(2);

  document.getElementById("valorFinal").value = valorEmRealFixado;
}
