<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/generic/Navbar.vue"

export default {
  name: "App",
  components: {
    Navbar
  },
};
</script>
