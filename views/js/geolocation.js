/*const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [-5, -44],
    zoom: 2
  })
});

const getLocation = () => {
  if (navigator.geolocation) {
    let position = navigator.geolocation
      .getCurrentPosition(getPosition, (error) => 
        console.error(error)
      );
  } else {
    console.error('Seu browser não suporta Geolocalização');
  }
}

const generateMap = ({ latitude, longitude }) => {
  return new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
        source: new OSM()
      })
    ],
    view: new View({
      center: [latitude, longitude],
      zoom: 2
    })
  });
};

const getPosition = async (position) => {
  const { latitude, longitude } = position.coords;  
  const baseURL = 'https://nominatim.openstreetmap.org/reverse?';
  const format = 'format=json';
  //const zoom = 'zoom=21';
  const addrDetails = 'addressdetails=1';
  const apiURL = 
    `${baseURL}&${format}&lat=${latitude}&lon=${longitude}&${addrDetails}`;
  const map = await fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, latitude, longitude);
      return generateMap(position.coords);
    })
    .catch(error => console.log(error));

  return map;
}   

const getMap = () => {
  getLocation();
}*/

export { getMap };