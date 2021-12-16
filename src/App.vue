<template>
  <NavBar />
  <div style="padding: 0 5px">
    <router-view />
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
