<template>
  <h1 class="text-center">Welcome to admiralfeb.dev - Vue</h1>
  <div class="container">
    <!-- <Versions :pages="pages" /> -->
    <div class="jumbotron">
      <h2 class="text-center">I'm Austin and this is my portfolio.</h2>
      <div class="container">
        <img width="300" src="@/assets/img/austin.jpg" />
        <div>
          <!-- <p>
            This webpage is coded in multiple languages and frameworks. To see
            other versions, see the links to the left.
          </p> -->
          <p>
            For my resume/ccv click
            <router-link :to="{ name: 'Resume' }">here</router-link>.
          </p>
          <p>
            For my other projects click
            <router-link :to="{ name: 'Projects' }">here</router-link>.
          </p>
          <p>
            Finally, to contact me, email me at
            <a href="mailto:austin@admiralfeb.dev" target="_blank">
              austin@admiralfeb.dev</a
            >.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Versions from "@/components/Versions.vue";
import { WEBSITE_URLS } from '@/constants';
import { defineComponent } from 'vue';

export default defineComponent({
  // components: {
  //   Versions,
  // },
  setup() {
    return { pages: WEBSITE_URLS };
  },
});
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  word-wrap: normal;
}
.jumbotron {
  flex-grow: 1;
  margin: 0 10px;
}
img {
  border-radius: 50%;
  margin: 0 auto;
}

@media screen and (min-width: 800px) {
  img {
    margin: 0 10px 0 0;
  }
  .jumbotron {
    max-width: 800px;
    margin: 0 auto;
  }
}
</style>
