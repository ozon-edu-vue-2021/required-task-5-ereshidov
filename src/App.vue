<template>
  <div id="app">
    <div>
    <div class="nav" >
      <router-link class="link" to="/goods" exact>Список товаров</router-link>
        <router-link class="link" to="/cart" exact>Корзина</router-link>
    </div>
      <router-view>
        
      </router-view>
      </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("getGoodsList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}

.link {
  text-decoration: none;
  color: #000;
  margin-right: 10px;
}

.link:last-child {
  margin-right: 0;
}

.nav {
  margin-bottom: 10px;
}
</style>
