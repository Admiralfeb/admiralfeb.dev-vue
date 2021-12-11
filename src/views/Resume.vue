<template>
  <div class="resume" v-if="resume">
    {{ resume.toString() }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },
  created() {
    this.$store.dispatch("getResume");
  },
});
</script>
