<template>
  <div>
    <!-- add cartItemsP -->
    <cart-item
      v-for="cartItem in cart.items"
      :key="cartItem.id"
      :cartItem="cartItem"
    />
    <div v-if="cart.items.length">
      <div class="totalPrice">Общая стоимость: {{ totalPrice }} &#x20bd;</div>
      <button @click="submitOrder">Оформить заказ</button>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    submitOrder() {
      alert(JSON.stringify(this.$store.state.cart.items));
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
