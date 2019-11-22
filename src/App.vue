<template>
  <div id="app">
    <Header />
    <main class="main">
      <Sidebar/>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 73.6px);

    > div {
      height: 50%;
      width: 100%;
    }

    > .sidebar {
      order: 1;
      height: 50%;
    }
  }

  @media only screen and (min-width: 750px) {
    .main {
      flex-direction: row;

      > .sidebar {
        order: 0;
        height: 100%;
        max-width: 300px;
        min-width: 200px;
        width: 30%;
      }

      > div {
        height: 100%;
      }
    }
  }

</style>
