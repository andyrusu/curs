var v = [];

process.argv.forEach(function (n, i) {
    if (i>1)
    {
        v.push(parseInt(n));
    }
});

//v contine un sir de numere, trebuie sa afisezi suma numerelor negative si produsul numerelor positive.