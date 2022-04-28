<template>
  <div id="map"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

// package imports
import { Loader } from '@googlemaps/js-api-loader'

// ---------------------------------------------------------- constants
const myHomeLocationInfo: google.maps.LatLngLiteral = {
  lat: 36.41731489549392,
  lng: 54.96295531205777,
}
const mapOptions = {
  center: myHomeLocationInfo,
  zoom: 20,
}
const mapLoader = new Loader({
  // eslint-disable-next-line no-undef
  apiKey: useRuntimeConfig().API_KEY,
  version: 'weekly',
})

// ---------------------------------------------------------- mounted
let map: google.maps.Map
let markerLabel = 1

onMounted(() => {
  // google map stuff ... :)
  mapLoader.load().then(() => {
    // creating the map and adding it to the screen
    map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    )

    // Add a click event listener to add a marker wherever user has clicked
    google.maps.event.addListener(map, 'click', (event) => {
      addMarker(event.latLng)
    })
  })
})

// ---------------------------------------------------------- functions
function addMarker(location: google.maps.LatLngLiteral) {
  const icon = {
    // path: google.maps.SymbolPath.CIRCLE,
    path: 'M-25 -30 h50 a20 20 0 0 1 20 20 v20 a20 20 0 0 1 -20 20 h-50 a20 20 0 0 1 -20 -20 v-20 a20 20 0 0 1 20 -20z',
    fillColor: 'red',
    fillOpacity: 1,
    strokeWeight: 3,
    strokeColor: 'white',
    rotation: 0,
    scale: 0.6,
    anchor: new google.maps.Point(0, 0),
  }

  const marker = new google.maps.Marker({
    position: location,
    label: {
      text: markerLabel.toString(),
      color: 'white',
      fontWeight: 'bold',
      fontSize: '25px',
    },
    icon,
    map,
    animation: google.maps.Animation.DROP,
    draggable: true,
  })

  let information = new google.maps.InfoWindow({
    content: `<h4>This is marker number ${markerLabel}</h4>`,
  })

  marker.addListener('click', function () {
    information.open(map, marker)
  })

  markerLabel++
}
</script>

<script lang="ts">
export default {
  name: 'Map',
  layout: 'empty',
}
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
  margin-inline: auto;
}
</style>
