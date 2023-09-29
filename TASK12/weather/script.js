//    to get class name in html
   let palce = document.querySelector(".place")
    let DisplayWeather=document.querySelector(".DisplayWeather")
let detailes = document.querySelector(".detailes")

    // to click function for the weather detalies to get the api values
        DisplayWeather.addEventListener('click',(event)=>{
        event.preventDefault();
// to enter the name city is store by Name
        const Name=(palce.value)
        
        const apiKey = "cc86f1689f25fe0c147c87a9e570177c";
            // to api for the weather
            
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Name}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
        detailes.innerHTML="";
// temperature and main from the api weather
        const temperature = data.main.temp;
        let weat=data.weather[0].main
            console.log(temperature);
            // to create the element temprature
        let temp=document.createElement('p')
            temp.innerHTML = `<b>Temperature : ${temperature}℃</b>
        <br><b>☁️${weat}</b>`
        detailes.appendChild(temp)

        })
        .catch(error=>{
        console.log('enter correct',error)
})
})
