// for ...of ...loop

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
    for (data of ans) {
        console.log(data.flag)
    }
}
xhr.send();