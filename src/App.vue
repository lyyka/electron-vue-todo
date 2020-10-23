<script>
import VNavBar from './components/templates/VNavBar'
export default {
    components: {VNavBar}
}
</script>
<template>
  <div id="app">
    <VNavBar />
    <router-view  />
  </div>
</template>
