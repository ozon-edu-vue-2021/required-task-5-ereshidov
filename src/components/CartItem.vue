<template>
  <div>
    <div>
      <div class="good-info">
        <img class="preview" width="200" height="200" :src="previewImage" />
        {{ cartItem.name }}
      </div>
      <div>
        {{ cartItem.price }}
        x
        <input
          @input="updateTotalCount($event, cartItem.id)"
          :value="cartItem.totalCount"
          type="number"
        />
        =
        {{ totalPrice }}
      </div>
    </div>
    <button @click="deleteFromCart(cartItem.id)">
      Удалить товар из корзины
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cartItem: {
      type: Object,
      default: () => {},
    },
  },
  name: "CartItem",
  computed: {
    previewImage() {
      const image = this.$props.cartItem.preview?.split("./")[1];
      return require(`../assets/images/${image}`);
    },
    totalPrice() {
      const totalCount = this.$props.cartItem.totalCount;
      const price = this.$props.cartItem.price;

      return totalCount * price;
    },
  },
  methods: {
    updateTotalCount(e, id) {
      this.$store.commit("updateGoodTotalCountInCart", {
        id: id,
        totalCount: e.target.valueAsNumber,
      });
    },
    deleteFromCart(id) {
      this.$store.commit("deleteItemFromCart", id);
    },
  },
};
</script>


