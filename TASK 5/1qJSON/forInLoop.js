// for...in..loop...JSON

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    for (data in ans) {
        console.log(ans[data].flag)
    }
}
xhr.send();