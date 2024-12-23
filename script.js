// script.js
function calcularLitros() {
    const preco = parseFloat(document.getElementById('preco').value);
    const dinheiro = parseFloat(document.getElementById('dinheiro').value);
  
    if (isNaN(preco) || isNaN(dinheiro) || preco <= 0 || dinheiro <= 0) {
      document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
      return;
    }
  
    const litros = dinheiro / preco;
    document.getElementById('resultado').innerText = `Você pode comprar ${litros.toFixed(2)} litros.`;
  }