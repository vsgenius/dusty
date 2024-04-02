import React, { useEffect, useState } from 'react';

type GeoType = {
  latitude:number;
  longitude:number;
}


const useGeolocation = () => {
  const [coord, setCoord] = useState<GeoType | undefined>(undefined);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function (position) {
      const {latitude,longitude} = position.coords;
      
      setCoord({latitude,longitude})
    });
  },[])
  return coord

}
export { useGeolocation }
