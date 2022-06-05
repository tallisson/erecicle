function getLocation() {
  if (navigator.geolocation) {
    let position = 
      navigator.geolocation.getCurrentPosition(showPosition, (error) => {
        console.log(error);
      });
  } else {
    alert("Seu browser não suporta Geolocalização")
  }
}
function showPosition(position) {
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
      alert("Latitude: " + latitude + ", Longitude: " + longitude);
      console.log(data);
    })
    .catch(error => console.log(error));
}    
getLocation();