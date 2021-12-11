<template>
  <h1 class="text-center">Welcome to Admiralfeb.net - Vue</h1>
  <div class="container">
    <Versions />
    <div class="jumbotron">
      <h2 class="text-center">I'm Zachary and this is my portfolio.</h2>
      <div class="container">
        <img width="300" src="@/assets/img/zachary.jpg" />
        <p>
          Ideally, switching between the different versions of this site will
          keep everything the same except the code system, however, the stylings
          are not the same between the systems, so there are slight differences.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Versions from "@/components/Versions.vue";

export default defineComponent({
  components: {
    Versions,
  },
});
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
}
.jumbotron {
  flex-grow: 1;
  margin: 0 10px;
}
img {
  border-radius: 50%;
  margin-right: 10px;
}
</style>
