// Math.random();

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(0, 250));

function productDescription(strings, productName, productPrice) {

    console.log(strings);
    console.log(productName);
    console.log(productPrice);
    let priceCategory = 'cheaply priced';
    if(productPrice > 20) {
        priceCategory = 'fairly priced';
    }
return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;

console.log(productOutput);