<template>
  <div id="app">
    <md-toolbar>
      <img src="./assets/logo.svg" class="md-size-4x" />
    </md-toolbar>

    <md-button class="md-raised md-primary">Hello</md-button>


    <PlacesList></PlacesList>
  </div>
</template>

<script>
import PlacesList from './components/PlacesList'

export default {
  name: 'app',
  components: {
    PlacesList
  }
}
</script>
