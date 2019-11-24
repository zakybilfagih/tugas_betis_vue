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
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  * {
    margin: 0;
    padding: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 73.6px);

    .container {
      flex-shrink: 0;
    }

    > div {
      min-height: 50%;
    }

    > .sidebar {
      order: 1;
      min-height: 50%;
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
    }
  }

</style>
