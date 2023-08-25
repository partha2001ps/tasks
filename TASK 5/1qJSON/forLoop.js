// for....loop...JSON

let a = require('xhr2')
let b = new (a);
b.open('GET', 'https://restcountries.com/v3.1/all');
b.onload = function () {
    let ans = JSON.parse(b.responseText);
    for (let i = 0; i < ans.length; i++){
        console.log(ans[i].flag);
    }
}

b.send();