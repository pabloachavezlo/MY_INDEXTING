const bitcoinPriceElement = document.querySelector(".price_api");

function getBitcoinPrice() {
  fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
    headers: {
      'X-CoinAPI-Key': '5292D96B-6869-405B-8A89-31355A283F09'
    }
  })
    .then(response => response.json())
    .then(data => {
      const bitcoinPrice = data.rate;
      bitcoinPriceElement.textContent = bitcoinPrice.toFixed(2); // Formatea el precio con 2 decimales
    })
    .catch(error => {
      console.error('Error al obtener el precio del bitcoin:', error);
    });
}

// Actualizar el precio cada X segundos (por ejemplo, cada 5 segundos)
setInterval(getBitcoinPrice, 5000);
