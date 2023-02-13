import { defineStore } from "pinia";

export const useCatalog = defineStore("product-store", {
  id: "post",
  state: () => {
    return {
      products: [],
      product: null,
      loading: false,
    };
  },

  getters: {
    getProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    isLoading(state) {
      return state.loading;
    },
  },

  actions: {
    async fetchProducts() {
      this.loading = true;
      const response = await fetch("https://fakestoreapi.com/products");
      try {
        const result = await response.json();
        this.products = result;
      } catch (err) {
        this.products = [];
        console.error("Error loading products:", err);
        return err;
      }

      this.loading = false;
    },
    async fetchProduct(id) {
      this.loading = true;
      const response = await fetch("https://fakestoreapi.com/product/${id}");
      try {
        const result = await response.json();
        this.product = result;
      } catch (err) {
        this.product = null;
        console.error("Error loading new product:", err);
        return err;
      }
      this.fetching = false;
    },
  },
});
