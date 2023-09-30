      // create the function for specific thirukural at this explain and english translate to button click 
      function explainkural(n){
        // n is the thirukural number 
        const full = document.querySelectorAll(".full")[n - 1]; // Select the corresponding explanation div
        full.innerHTML = ""; // Clear previous explanations if any
     fetch(`https://api-thirukkural.vercel.app/api?num=${n}`)
     .then(res=>res.json())
     .then(data=>{
        //  to get the information form the thirukural api
        const title=data.sect_tam;
        const chapter=data.chap_tam
        const exp=data.tam_exp
        const engtitle=data.sect_eng;
        const engChap=data.chap_eng;
        const engKural1=data.eng;
        const engExp=data.eng_exp;
        //  to append the infromation to create the div tag
        let tamil=document.createElement('div')
        tamil.className="tamilKuralExp"
        tamil.innerHTML=` <hr>  <h4 class="red">${title}</h4>
                            <h6>${chapter}</h6>
                            <p>${exp}</p>
                            <h4 class="red">${engtitle}</h4>
                            <h6>${engChap}</h6>
                            <p>${engKural1}</p>
                            <p>${engExp}</p>`
        full.appendChild(tamil)                    

     })
    }

    // Create an async function to fetch and display Thirukural  in order

    async function displayThirukural() {
        for (let i = 1; i <= 1330; i++) {
            // Use await to fetch each sequentially
          try{
            const response = await fetch(`https://api-thirukkural.vercel.app/api?num=${i}`);
          
            const data = await response.json();

            // Create a new paragraph element for each verse
            let kural = document.createElement('p');
    
            kural.innerHTML = `
                    <p>${i}: ${data.line1}</p>
                    <p class="line2">${data.line2}</p>
                    <button class="kuralExplain" onclick="explainkural(${i})">Explain</button>
                    <div class="full"></div><hr>
            `;

            // Append the order to the outblock container
            let outblock = document.querySelector(".outblock");
            outblock.appendChild(kural);
          }
        //   to error handle for the thirukural use catch
           catch(error){
            console.log('error for thirukral',error)
           }
        }
    }

    // Call the async function to display in order when the page loads
   displayThirukural()
