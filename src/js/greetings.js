function greet(language) {
    switch(language) {
        case 'Australia':
            return "Hello";
        case 'Vietnam':
            return "Xin Chào";
        case 'Mexico':
            return "Hola";
        case 'Germany':
            return "Hallo";
        case 'Italy':
            return "Ciao";
        default:
            return "Saluton";
    }
}

console.log(greet('Australia'));
console.log(greet('Vietnam'));
console.log(greet('Mexico'));
console.log(greet('Germany'));
console.log(greet('Italy'));
console.log(greet('Unknown'));


module.exports ={greet}