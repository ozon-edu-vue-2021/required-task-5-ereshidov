<template>
  <div>
    <div v-for="item in cart.items" :key="item.id">
      <div>
        <div class="good-info">
          <img class="preview" width="200" height="200" :src="item.preview" />
          {{ item.name }}
        </div>
        <div>
          {{ item.price }}
          x
          <input
            @input="updateTotalCount($event, item.id)"
            :value="item.totalCount"
            type="number"
          />
          =
          {{ getCartItemTotalPrice(item.id) }}
        </div>
      </div>
      <button @click="deleteFromCart(item.id)">Удалить товар из корзины</button>
    </div>
    <div v-if="cart.items.length">
      <div class="totalPrice">Общая стоимость: {{ totalPrice }} &#x20bd;</div>
      <button @click="submitOrder">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    deleteFromCart(id) {
      this.$store.commit("deleteItemFromCart", id);
    },
    submitOrder() {
      alert(JSON.stringify(this.$store.state.cart.items));
    },
    updateTotalCount(e, id) {
      this.$store.commit("updateGoodTotalCountInCart", {
        id: id,
        totalCount: e.target.valueAsNumber,
      });
    },
    getCartItemTotalPrice(id) {
      return this.$store.getters.totalPriceByGoodId(id);
    },
  },
};
</script>

<style>
.totalPrice {
  margin-top: 50px;
}
.good-info {
  display: grid;
}
</style>
