function getCity(latitude, longitude) {
  for (const city of data) {
    if (
      Math.abs(latitude - city.coords.lat) < 0.001 &&
      Math.abs(longitude - city.coords.lon) < 0.001
    ) {
      return city;
    }
  }
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
function findCitiesNear(ourcity, lon, lat) {
  const list = {};
  for (const city of data) {
    if (ourcity.name !== city.name) {
      list[
        getDistanceFromLatLonInKm(lat, lon, city.coords.lat, city.coords.lon)
      ] = city.name;
    }
  }
  const result = Object.entries(list)
  .map((elem) => {
    return [Number(elem[0]), elem[1]];
  })
  .filter((elem) => {
    return elem[0] < 20;
  })
  return result;
}
const table = document.querySelector('tbody');
const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  navigator.geolocation.getCurrentPosition(
    function (e) {
      const { latitude, longitude } = e.coords;
      const city = getCity(latitude, longitude);
      const result = findCitiesNear(city, longitude, latitude);
      console.log(result)
      result.forEach((elem)=>{
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        td1.textContent = elem[1];
        tr.appendChild(td1);
        td2.textContent = elem[0]
        tr.appendChild(td2);
        table.appendChild(tr);
      })
    },
    function (error) {
      alert('дайте доступ к геолокации))');
    }
  );
});