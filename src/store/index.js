import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const MIN_PRICE = 0;
const MAX_PRICE = 100500;

export default new Vuex.Store({
  strict: true,
  state: () => ({
    goods: {
      loading: false,
      error: null,
      items: [],
    },
    cart: {
      items: [],
    },
  }),
  mutations: {
    setGoodsList(state, payload) {
      state.goods.items = payload ?? [];
    },
    setError(state, payload) {
      state.goods.error = payload;
    },
    setLoading(state, payload) {
      state.goods.loading = payload ?? false;
    },
    addItemToCart(state, payload) {
      state.cart.items = [payload, ...state.cart.items];
    },
    deleteItemFromCart(state, payload) {
      state.cart.items = state.cart.items.filter((it) => it.id !== payload);
    },
    updateGoodTotalCountInCart(state, payload) {
      const cartItems = state.cart.items.slice();
      const cartItem = cartItems.find((it) => it.id === payload.id);
      if (cartItem) {
        cartItem.totalCount = payload.totalCount;
      }
    },
  },
  actions: {
    async getGoodsList(context) {
      context.commit("setLoading", true);
      try {
        const response = await fetch(
          "https://random-data-api.com/api/food/random_food?size=30"
        );
        const goods = await response.json();
        const mappedGoods = goods.map((good) => ({
          ...good,
          price: Math.ceil(Math.random() * (MAX_PRICE - MIN_PRICE) + MIN_PRICE),
        }));

        context.commit("setGoodsList", mappedGoods);
      } catch (e) {
        context.commit("setError", e?.message ?? e);
      } finally {
        context.commit("setLoading", false);
      }
    },
  },
  getters: {
    cartTotalPrice(state) {
      return state.cart.items.reduce((totalPrice, cartItem) => {
        return totalPrice + (cartItem.price * cartItem.totalCount);
      }, 0);
    },
    totalPriceByGoodId: (state) => (id) => {
      const good = state.cart.items.find((cartItem) => cartItem.id === id);
      if (good) {
        return good.price * good.totalCount;
      }
      return 0;
    },
    totalCountByGoodId: (state) => (id) => {
      return state.cart.items.find((it) => it.id === id)?.totalCount;
    },
  },
});
