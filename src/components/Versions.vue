<template>
  <div class="jumbotron">
    <p>This page is coded in Vue v3.0.0</p>
    <p>For other versions of Admiralfeb.net, see the following links:</p>
    <ul>
      <li v-for="page in pages" :key="page.lang">
        <a :href="page.url">{{ page.lang }}</a>
      </li>
    </ul>
    <p>
      Ideally, switching between the different versions of this site will keep
      everything the same except the code system, however, the stylings are not
      the same between the systems, so there are slight differences.
    </p>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      pages: [{ lang: "Angular", url: "https://ng.admiralfeb.net" }],
    };
  },
});
</script>

<style scoped>
.jumbotron {
  max-width: 500px;
}
</style>
