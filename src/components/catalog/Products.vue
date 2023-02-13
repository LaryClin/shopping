<script setup>
import { useCatalog } from "/src/store/catalog.js";
import { useCart } from "/src/store/cart.js";
const store = useCatalog();
const cart = useCart();
</script>

<template src="./catalog.html"></template>
<style scoped src="./catalog.css"></style>

<script>
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useCatalog, {
      products: "results",
    }),
  },
  mounted() {
    console.log("results: ", this.newArrivals);
  },
  methods: {
    ...mapActions(useCatalog, ["fetchProduct"]),
    ...mapActions(useCart, ["addToCart"]),
  },
  created() {
    this.products();
  },
};
</script>
