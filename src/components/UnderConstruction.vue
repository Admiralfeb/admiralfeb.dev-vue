<template>
  <div class="text-center">
    <h2>{{ title }}</h2>
    <h3>Under Construction</h3>
    <img src="@/assets/img/construction.png" />
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    title: undefined,
  },
});
</script>
