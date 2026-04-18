const convertButton = document.querySelector(".convert-button")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert") // Converter DE
const currencySelect = document.querySelector(".currency-select") // Converter PARA

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor da moeda de origem
    const currencyValueConverted = document.querySelector(".currency-value") // Valor da moeda de destino

    const dolarToday = 4.98 
    const euroToday = 5.86
    const libraToday = 6.73

    // Pega qual moeda foi selecionada para converter
    const fromCurrency = currencySelectToConvert.value // DE qual moeda
    const toCurrency = currencySelect.value // PARA qual moeda

    // Se converter de BRL para USD
    if(fromCurrency == "BRL" && toCurrency == "USD"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    // Se converter de BRL para EUR
    if(fromCurrency == "BRL" && toCurrency == "EUR"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    // Se converter de BRL para GBP
    if(fromCurrency == "BRL" && toCurrency == "GBP"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    // Se converter de USD para BRL
    if(fromCurrency == "USD" && toCurrency == "BRL"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    // Se converter de USD para EUR
    if(fromCurrency == "USD" && toCurrency == "EUR"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * dolarToday) / euroToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    // Se converter de USD para GBP
    if(fromCurrency == "USD" && toCurrency == "GBP"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue * dolarToday) / libraToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    // Se converter de EUR para BRL
    if(fromCurrency == "EUR" && toCurrency == "BRL"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    // Se converter de EUR para USD
    if(fromCurrency == "EUR" && toCurrency == "USD"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * euroToday) / dolarToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    // Se converter de EUR para GBP
    if(fromCurrency == "EUR" && toCurrency == "GBP"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue * euroToday) / libraToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    // Se converter de GBP para BRL
    if(fromCurrency == "GBP" && toCurrency == "BRL"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    // Se converter de GBP para USD
    if(fromCurrency == "GBP" && toCurrency == "USD"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue * libraToday) / dolarToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    // Se converter de GBP para EUR
    if(fromCurrency == "GBP" && toCurrency == "EUR"){ 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue * libraToday) / euroToday)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    changeCurrency() // Toda vez que o botão de converter for clicado, ele vai chamar a função changeCurrency para atualizar o nome da moeda e a imagem da moeda convertida.
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')
    const currencyNameToConvert = document.getElementById('currency-name-to-convert')
    const currencyImageToConvert = document.querySelector('.currency-img-to-convert')

    if(currencySelect.value == 'USD') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if(currencySelect.value == 'EUR') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    if(currencySelect.value == 'GBP') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = './assets/libra.png'
    }

    if(currencySelect.value == 'BRL') {
        currencyName.innerHTML = 'Real'
        currencyImage.src = './assets/real.png'
    }

    // Atualiza a moeda de origem (DE)
    if(currencySelectToConvert.value == 'USD') {
        currencyNameToConvert.innerHTML = 'Dólar Americano'
        currencyImageToConvert.src = './assets/dolar.png'
    }

    if(currencySelectToConvert.value == 'EUR') {
        currencyNameToConvert.innerHTML = 'Euro'
        currencyImageToConvert.src = './assets/euro.png'
    }

    if(currencySelectToConvert.value == 'GBP') {
        currencyNameToConvert.innerHTML = 'Libra Esterlina'
        currencyImageToConvert.src = './assets/libra.png'
    }

    if(currencySelectToConvert.value == 'BRL') {
        currencyNameToConvert.innerHTML = 'Real'
        currencyImageToConvert.src = './assets/real.png'
    }

    convertValues() // Toda vez que o select for alterado, ele vai chamar a função changeCurrency e a função convertValues para atualizar os valores convertidos.
}

currencySelect.addEventListener('change', changeCurrency) // Toda vez que o select for alterado, ele vai chamar a função changeCurrency e a função convertValues para atualizar os valores convertidos.
currencySelectToConvert.addEventListener('change', convertValues) // Toda vez que o segundo select for alterado, ele vai chamar a função convertValues para atualizar os valores convertidos.
convertButton.addEventListener("click", convertValues)