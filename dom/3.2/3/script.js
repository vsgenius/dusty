import {cities} from './russian-cities'

function getCity(latitude, longitude) {
    for (const city of cities) {
        console.log(city)
    }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e)=> {
    navigator.geolocation.getCurrentPosition(function(e) {
        const {latitude, longitude} = e.coords
        console.log(latitude, longitude);
        getCity(latitude, longitude);

    }, function (error) {
            alert('дайте доступ к геолокации))')
        })
})
