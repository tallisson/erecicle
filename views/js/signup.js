const navBrand = document.getElementsByClassName('nav-brand')[0];
navBrand.addEventListener('click', () => {
  window.location = './index';
});

const imageUpload = document.getElementsByClassName('img-upload')[0];
imageUpload.addEventListener('click', () => {
  const inputFile = document.querySelector('input[type="file"');
  inputFile.click();
});    

const generateMap = (position) => {
  const { latitude, longitude } = position.coords;
  const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([longitude, latitude]),
      zoom: 16
    })
  });
}

const getLocation = () => {
  if (navigator.geolocation) {
    let position = navigator.geolocation
      .getCurrentPosition(generateMap, (error) => 
        console.error(error)
      );
  } else {
    console.error('Seu browser não suporta Geolocalização');
  }
}

(() => {
  getLocation();
})();