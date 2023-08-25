// for...each ...loop..JSON

let obj = require('xhr2');
let xhr = new (obj);
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.onload = function () {
    let ans = JSON.parse(xhr.responseText);
   ans.forEach(element => {
       console.log(element.flag);
   });
}

xhr.send();