<script>
import { mapMutations } from 'vuex'
import VNavBar from './components/templates/VNavBar'
export default {
    components: {VNavBar},

    mounted(){
        this.setAuthToken(localStorage.getItem('user-token'))
    },

    methods: {
        ...mapMutations(['setAuthToken'])
    }
}
</script>
<template>
  <div id="app">
    <VNavBar />
    <router-view  />
  </div>
</template>
