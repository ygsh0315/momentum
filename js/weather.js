const API_KEY = "8c0261b3247f7ab75b377de1f9d9b06a"

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng)
}
function onGeoError(){
  alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);