// for ...of ...loop

let a = require("xhr2");
let b = new (a);
b.open('GET', 'https://restcountries.com/v3.1/all')
b.onload = function () {
    let data = (JSON.parse(b.responseT))
    for (data of data) {
        console.log(data.flag)
    }
}
b.send();