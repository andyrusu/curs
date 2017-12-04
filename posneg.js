var v = [];

process.argv.forEach(function (n, i) {
    if (i>1)
    {
        v.push(parseInt(n));
    }
});


var pos = [];
var neg = [];
var k = 0;
var j = 0;
for (var i = 0; i < v.length; i = i + 1)
{
    if (v[i] < 0)
    {
        neg[k] = v[i];
        k = k + 1;
    }
    else
    {
        pos[j] = v[i];
        j = j + 1;
    }
}

process.stdout.write('Nr. negative sunt:\n');
console.log(neg);
process.stdout.write('Nr. pozitive sunt:\n');
console.log(pos);