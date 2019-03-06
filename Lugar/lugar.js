const axios = require('axios');

const getLugarLatLng = async (direccion)=>{

    // console.log(argv.direccion);

let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDHa45bjwc5pOJDGlW6I6C4u4XuFtIbNNI`)
   if (resp.data.status === 'ZERO_RESULTS') {
       throw new Error(`no hay resultado para la ciudad ${direccion}`);
   }
        let location =resp.data.results[0];
        let coors = location.geometry.location;

        console.log('direccion:', location.formatted_address );
        console.log('lat', coors.lng);
        console.log('lng',coors.lng)

       return{
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}
