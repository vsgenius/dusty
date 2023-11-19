new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition((position) => {
    let result = [position.coords.latitude, position.coords.longitude];
    if (!result) reject('нет доступа к геоданным');
    resolve(result);
  });
})
  .then((coord) => console.log(coord))
  .catch((error) => console.error('ошибка', error));
