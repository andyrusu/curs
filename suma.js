var v = [];

process.argv.forEach(function (n, i) {
    if (i>1)
    {
        v.push(parseInt(n));
    }
});

//v contine un sir de numere, trebuie sa faci un n care sa contina suma lor.
//vector de test: -10, 5, 7, -4, 3, 47, 4 => 52

var n = 0;

console.log('Suma este: ' + n);