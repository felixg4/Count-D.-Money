const sum = document.getElementById('sum')
let total = 0, pennies = 0, nickels = 0, dimes = 0, quarters = 0;
const coinDisplays = document.querySelectorAll('span')
const errorMessage = document.createElement('p')
let errorPresent = false
errorMessage.id = "error"
function addCoin(coinType, multiplier) {
    if (errorPresent) {
        sum.removeChild(errorMessage)
        errorPresent = !errorPresent
    }
    switch(coinType) {
        case 'p': 
            if (multiplier > 0 || (multiplier < 0 && pennies > 0)) {
                pennies += multiplier
                total += multiplier;
                sum.textContent = `$`+(total/100).toFixed(2)
                coinDisplays[1].textContent = `${pennies} Penn${pennies != 1 ? 'ies' : 'y'}: $${(pennies/100).toFixed(2)}`
            } else {
                errorMessage.textContent = 'cannot remove more pennies'
                sum.appendChild(errorMessage)
                errorPresent = true
            }
            break;
        case 'n':
            if (multiplier > 0 || (multiplier < 0 && nickels > 0)) {
                nickels += multiplier
                total += 5 * multiplier;
                sum.textContent = `$`+(total/100).toFixed(2)
                coinDisplays[2].textContent = `${nickels} Nickel${nickels != 1 ? 's' : ''}: $${(nickels/20).toFixed(2)}`
            } else {
                errorMessage.textContent = 'cannot remove more nickels'
                sum.appendChild(errorMessage)
                errorPresent = true
            }
            break;
        case 'd':
            if (multiplier > 0 || (multiplier < 0 && dimes > 0)) {
                dimes += multiplier
                total += 10 * multiplier;
                sum.textContent = `$`+(total/100).toFixed(2)
                coinDisplays[3].textContent = `${dimes} Dime${dimes != 1 ? 's' : ''}: $${(dimes/20).toFixed(2)}`
            } else {
                errorMessage.textContent = 'cannot remove more dimes'
                sum.appendChild(errorMessage)
                errorPresent = true
            }
            break;
        case 'q':
            if (multiplier > 0 || (multiplier < 0 && quarters > 0)) {
                quarters += multiplier
                total += 25 * multiplier;
                sum.textContent = `$`+(total/100).toFixed(2)
                coinDisplays[4].textContent = `${quarters} Quarter${quarters != 1 ? 's' : ''}: $${(quarters/4).toFixed(2)}`
            } else {
                errorMessage.textContent = 'cannot remove more quarters'
                sum.appendChild(errorMessage)
                errorPresent = true
            }
            break;
    }
}