const lugar = require('./lugar/lugar');
const clima =require('./clima/clima');


const argv = require('yargs').options({
    direccion : {
        alias:'d',
        desc:'Direccion del la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo =async( direccion)=>{
    try {
    let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`; 
    } catch (e) {
        return `no se pudo determinar el clima en ${direccion}`
    } 
}

getInfo(argv.direccion)
.then(mesaje => console.log(mesaje))
.catch(e =>console.log(e));







