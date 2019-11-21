<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

</style>
