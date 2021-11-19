<template>
  <div>
    <div v-if="goods.loading">Loading...</div>
    <div v-if="goods.error">Something went wrong while loading goods</div>
    <div class="goods">
      <good
        v-for="good in goods.items"
        :key="good.id"
        :name="good.ingredient"
        :id="good.id"
        :price="good.price"
      />
    </div>
  </div>
</template>

<script>
import Good from "./Good.vue";

export default {
  name: "Goods",
  components: {
    Good,
  },
  computed: {
    goods() {
      return this.$store.state.goods;
    },
  },
};
</script>

<style scoped>
  .goods {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
  }
</style>
