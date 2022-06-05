const getLocation = () => {
  if (navigator.geolocation) {
    let position = 
      navigator.geolocation.getCurrentPosition(getPosition, (error) => {
        console.log(error);
      });
  } else {
    alert("Seu browser não suporta Geolocalização")
  }
}
const getPosition = (position) => {
  const { latitude, longitude } = position.coords;  
  const baseURL = 'https://nominatim.openstreetmap.org/reverse?';
  const format = 'format=json';
  //const zoom = 'zoom=21';
  const addrDetails = 'addressdetails=1';
  const apiURL = 
    `${baseURL}&${format}&lat=${latitude}&lon=${longitude}&${addrDetails}`;
  fetch(apiURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data, latitude, longitude);
    })
    .catch(error => console.log(error));
}    
(() => {
  getLocation();
})();