<template>
  <div id="container">
    <cheader></cheader>
    <asideleft></asideleft>
    <asideright></asideright>
    <!-- <asidemiddle></asidemiddle> -->
    <router-view></router-view>
  </div>
</template>

<script>
import cheader from "./header";
import asideleft from "./aside-left";
import asideright from "./aside-right";
// import asidemiddle from "./aside-middle";
export default {
  name: "Layout",
  components: {
    cheader,
    asideleft,
    asideright,
    // asidemiddle
  },
  data() {
    return {
      time: null,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  z-index: 2;
}
</style>
