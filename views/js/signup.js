window.addEventListener('load', () => {
  const imageUpload = document.getElementsByClassName('img-upload')[0];
  imageUpload.addEventListener('click', () => {
    const inputFile = document.querySelector('input[type="file"');
    inputFile.click();
  });    

  const getPosition = async (position) => {
    const { latitude, longitude } = position.coords;  
    const baseURL = 'https://nominatim.openstreetmap.org/reverse?';
    const format = 'format=json';
    //const zoom = 'zoom=21';
    const addrDetails = 'addressdetails=1';
    const apiURL = 
      `${baseURL}&${format}&lat=${latitude}&lon=${longitude}&${addrDetails}`;
    const locData = await fetch(apiURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return {
          ok: true,
          data
        }
      })
      .catch(error => {
        return {
          ok: false,
          error
        }
      });

    return locData;
  }

  const hideUl = () => {
    const ul = document.querySelector('a[href="https://www.openstreetmap.org/copyright"]')
      .parentNode.parentNode;
    if(ul) {
      ul.style.display = 'none';
    }
  }

  const fillAddress = ({ 
    city, 
    road, 
    neighbourhood,
    state, 
  }) => {
    const roadInput = document.getElementById('road');
    roadInput.value = road;

    const nHoodInput = document.getElementById('nHood');
    nHoodInput.value = neighbourhood;

    const cityInput = document.getElementById('city');
    cityInput.value = city;

    const ufInput = document.getElementById('uf');
    ufInput.value = state.substr(0, 2).toUpperCase();
  }

  const generateMap = async (position) => {
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

    const response = await getPosition(position);
    if(response.ok) {
      const { data } = response;            
      hideUl();
      fillAddress(data.address);
    } else {
      const { error } = response;
      console.error(error);
    }
  }   

  const getLocation = () => {
    if (navigator.geolocation) {
      let position = navigator.geolocation
        .getCurrentPosition(
          async (position) => await generateMap(position), 
          (error) => console.error(error)
        );
    } else {
      console.error('Seu browser não suporta Geolocalização');
    }
  }

  (() => {
    getLocation();
  })();
});