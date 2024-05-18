let productPrices = [50, 230, 40, 670, 450]
let discountedPrices = productPrices.map(price=>price*(90/100))

console.log(discountedPrices)

let affortableProducts = discountedPrices.filter(price => price < 50)
console.log(affortableProducts)

let totalCostOfAffortableProducts = affortableProducts.reduce((a,b)=>a+b)
console.log("totalCostOfAffortableProducts:" +totalCostOfAffortableProducts)