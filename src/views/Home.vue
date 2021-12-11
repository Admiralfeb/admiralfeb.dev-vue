<template>
  <h1 class="text-center">Welcome to Admiralfeb.net - Vue</h1>
  <div class="container">
    <Versions />
    <div class="jumbotron">
      <h2 class="text-center">I'm Zachary and this is my portfolio.</h2>
      <div class="container">
        <img width="300" src="@/assets/img/zachary.jpg" />
        <div>
          <p>
            This webpage is coded in multiple languages and frameworks. To see
            other versions, see the links to the left.
          </p>
          <p>
            For my resume/ccv click
            <router-link to="/resume">here</router-link>.
          </p>
          <p>
            For my other projects click
            <router-link to="/code">here</router-link>.
          </p>
          <p>
            Finally, to contact me, email me at
            <a href="mailto:Zachary@admiralfeb.net" target="_blank">
              Zachary@admiralfeb.net</a
            >.
          </p>
        </div>
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
