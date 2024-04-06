import { useEffect, useState } from 'react';

type GeoType = {
  lat:number;
  lon:number;
}

const useGeoposition = () => {
  const [coord, setCoord] = useState<GeoType | undefined>(undefined);

  useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const {latitude,longitude} = position.coords;
      
      setCoord({lat:latitude,lon:longitude})
    });
    }
  },[])
  return coord;
}
export { useGeoposition }
