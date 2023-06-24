async function Countrydata() {
    const capitals = [];
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    const getelem = document.getElementById("country-card");
    jsonData.forEach(element => {
        if (Object.keys(element).length > 0) {
         const lat= element.latlng[0]
          const lng=element.latlng[1]
          const wordnode = document.createElement("div");
            wordnode.setAttribute("class", "countryclass");
            wordnode.innerHTML = `
            <div class="card my-2 mx-1" style="width:18rem;background:linear-gradient(to right,rgb(214, 197, 160),rgb(67, 85, 84));text-align: center;">
            <diV class="card-header" style="background-color: black; color:white;text-align: center;font-size:12px;">${element.continents}</diV>
                <div class="card-body " style="color: white;">  
                  <p class="" style="margin: 0!important;font-size: 15px!important;">Capital:${element.capital}</p>
                  <p class="" style="margin: 0!important;font-size: 15px!important;">Region:${element.region}</p>
                  <p class="mb-0" style="font-size: 15px!important;">Country cod:${element.flag}</p>
                  <button type="button" id="liveAlertBtn" class="btn btn-light" style="background: transparent;color: white;">click to check weather</button>
                </div>
            </div>`;
            capitals.push(wordnode);
  
            wordnode.querySelector("#liveAlertBtn").addEventListener("click", () => {
                showWeather(lat,lng);
            });
        }
  
    });
    getelem.append(...capitals);
  }
  
  async function showWeather(lat,lng) {
    try {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
      alertPlaceholder.innerHTML = '';
        const params = 'waveHeight,airTemperature';
          fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
          headers: {
            'Authorization': 'dd4aa378-07ba-11ee-8d52-0242ac130002-dd4aa3f0-07ba-11ee-8d52-0242ac130002'
            
          }
        }).then((response) => response.json()).then((jsonData) => {
         
         
          for(i=0;i<=Object.keys(jsonData).length;i++){
            const DeutscherWetterdienst=jsonData.hours[i].airTemperature.dwd
           const NationalOceanicandAtmosphericAdministration= jsonData.hours[i].airTemperature.noaa
           const time=jsonData.hours[i].time
           const enddate= jsonData.meta.end
           const startdate= jsonData.meta.start
           const alert = document.createElement('div');
          alert.innerHTML = `<div class="alert alert-success" role="alert">
            <div>
            <p>Deutscher Wetterdienst is : ${DeutscherWetterdienst}</P>
            <p>Deutscher National Oceanicand Atmospheric Administration is : ${NationalOceanicandAtmosphericAdministration}</P>
            <p>Time is : ${time}</p>
            <p>Start date will : ${startdate}</p>
            <p>End Date will : ${enddate}</p>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
          alertPlaceholder.appendChild(alert);
          }
        });
      
    } catch (error) {
  console.log(error)
    }
  }
  Countrydata();