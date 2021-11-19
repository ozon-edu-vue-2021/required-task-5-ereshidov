<template>
  <div class="good">
    <img class="preview" width="200" height="200" :src="preview" />
    <div>{{ name }}</div>
    <div>{{ price }} &#x20bd;</div>
    <div v-if="isItemOnCart">
      Количество:
      <input min="1" @input="updateTotalCount" :value="totalCount" type="number" />
    </div>
    <button :disabled="isItemOnCart" @click="addToCart">
      {{ isItemOnCart ? "Уже в корзине" : "Добавить в корзину" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Good",
  props: {
    name: {
      type: String,
      default: () => "",
    },
    id: {
      type: Number,
      default: () => 0,
    },
    price: {
      type: Number,
      default: () => 0,
    },
  },
  data() {
    return {
      isItemOnCart: false,
    };
  },
  computed: {
    preview() {
      return "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png";
    },
    totalCount() {
      return this.$store.getters.totalCountByGoodId(this.$props.id);
    }
  },
  mounted() {
    const cartIds = this.$store.state.cart.items.map((it) => it.id);
    this.isItemOnCart = cartIds.includes(this.$props.id);
  },
  methods: {
    addToCart() {
      this.$store.commit("addItemToCart", {
        id: this.$props.id,
        name: this.$props.name,
        price: this.price,
        preview: this.preview,
        totalCount: 1,
      });
      this.$data.isItemOnCart = true;
    },
    updateTotalCount(e) {
      this.$store.commit("updateGoodTotalCountInCart", {
        id: this.$props.id,
        totalCount: e.target.valueAsNumber,
      });
    },
  },
};
</script>

<style>
.preview {
  object-fit: contain;
}
</style>
