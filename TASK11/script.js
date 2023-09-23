let container = document.createElement('div');
container.className = "container";
let row = document.createElement('div');
row.className = "row";
row.id = "fullRow";
container.appendChild(row);
document.body.appendChild(container);

document.addEventListener("DOMContentLoaded", function () {
    let fullRow = document.getElementById('fullRow');
    fetch("https://restcountries.com/v3.1/all")
        .then((res => res.json()))
        .then((data) => {
            data.forEach(country => {
                const card = document.createElement('div');
                card.classList.add("col-lg-4", "col-sm-12", "card-group");
                const cardhead = document.createElement('div');
                cardhead.classList.add("card", "card-header", "card-body", "bg-secondary");
                card.appendChild(cardhead);
                row.appendChild(card);
                const capital=country.capital?country.capital[0]:'NA'
                cardhead.innerHTML = `
                    <h4 class="d-flex justify-content-center text-light bg-black">${country.name.common}</h6>
                    <img class="card-img mt-4" src="${country.flags.png}" alt="flag">
                    <p class="card-text text-light mt-3 d-flex justify-content-center">Capital: ${capital}</p>
                    <p class="card-text text-light d-flex justify-content-center">Region: ${country.region}</p>
                    <p class="card-text text-light d-flex justify-content-center">Country Code: ${country.cca2}</p>
                    <button class="btn btn-primary" id="hi">Click for Weather</button>
                    <div class="weather"></div>
                `;

                const weatherButton = cardhead.querySelector('#hi');
                const weather = cardhead.querySelector('.weather');

                weatherButton.addEventListener('click', () => {
                    const apiKey = "cc86f1689f25fe0c147c87a9e570177c";

                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
                        .then((res) => res.json())
                        .then((data) => {
                            const temperature = data.main.temp;
                            console.log(temperature);
                            weather.innerHTML = `
                                <p class="card-text text-light mt-3 d-flex justify-content-center">Temperature: ${temperature}°C</p>
                            `;
                        })
                        .catch((error) => {
                            console.error('Error fetching weather data:', error);
                            weather.innerHTML = '<p class="text-danger text-light">No weather data Found</p>';
                        });
                });
            });
        })
        .catch((error) => {
            console.log('error', error);
        });
});