<template>
  <div class="container">
    <div class="header">
      <h1>Selamat datang di Situs BETIS 2020</h1>
      <p>Klik mata pelajaran di samping</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  .container {
    font-family: 'Roboto';
    color: $base-color;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .header > *{
    margin-bottom: 5px;
  }

  h1 {
    font-weight: 500;
    font-size: 2.3em;
    text-align: center;
  }

  p {
    display: none;
    font-weight: 400;
    font-size: 1.5em;
  }

  @media only screen and (min-width: 750px) {
    p {
      display: block;
    }

    h1 {
      font-size: 1.8em;
      text-align: left;
    }
  }
</style>

