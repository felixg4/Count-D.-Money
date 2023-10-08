const sum = document.getElementById('sum')
const grid = document.querySelector('.grid-even-columns')
let total = 0
const coinCounts = [0, 0, 0, 0]
const coinValues = [1, 5, 10, 25]
const plural = ['Pennies', 'Nickels', 'Dimes', 'Quarters']
const singular = ['Penny', 'Nickel', 'Dime', 'Quarter']
const coinNumbers = document.querySelectorAll('input')
const coinDisplays = document.querySelectorAll('span')
const errorMessage = document.createElement('p')
let errorPresent = false
errorMessage.id = "error"
function addCoin(coinType, multiplier, numCoins = 1) {
    if (errorPresent) {
        grid.removeChild(errorMessage)
        errorPresent = !errorPresent
    }
    if ((multiplier > 0 || (multiplier < 0 && coinCounts[coinType] >= numCoins)) && (Math.floor(numCoins) == numCoins)) {
        coinCounts[coinType] += multiplier * numCoins
        total += multiplier * numCoins * coinValues[coinType]
        sum.textContent = `$`+(total/100).toFixed(2)
        coinDisplays[coinType + 1].textContent =
            `${coinCounts[coinType] != 1 ? plural[coinType] : singular[coinType]}: $${(coinCounts[coinType]*coinValues[coinType]/100).toFixed(2)}`
    } else {
        if (numCoins != Math.floor(numCoins)) errorMessage.textContent = `cannot add fractional ${plural[coinType]}`
        else errorMessage.textContent = `cannot remove more ${plural[coinType]}`
        alert(errorMessage.textContent.toLowerCase())
        grid.appendChild(errorMessage)
        errorPresent = true
    }
    coinNumbers[coinType].style.width = `${Math.max(0, Math.floor(Math.log10(coinCounts[coinType])))+2}ch`
    coinNumbers[coinType].value = coinCounts[coinType]
}
function changeCoins(coinType) {
    let deltaCoins = coinNumbers[coinType].value - coinCounts[coinType]
    addCoin(coinType, Math.abs(deltaCoins)/deltaCoins, Math.abs(deltaCoins))
}
function clearCoins(multiplier) {
    for (let i = 0; i < 4; i++) addCoin(i, multiplier, coinCounts[i])
}