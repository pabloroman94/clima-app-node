const axios = require('axion');


const getClima = async(lat,lng) => {

    let resp =await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4ac22312126440a37ba48c5ebd844346`)

    return resp.data.main.temp;
} 