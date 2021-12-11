<template>
  <div class="container">
    <h2 class="text-center">Zachary's Resume</h2>
    <div class="jumbotron">
      <div class="resume" v-if="resume">
        <ResumeData :experience="resume.experience" :skills="resume.skills" />
      </div>
      <Loader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Loader from "@/components/Loader.vue";
import ResumeData from "@/components/ResumeData.vue";

export default defineComponent({
  components: {
    Loader,
    ResumeData,
  },
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

<style scoped>
.jumbotron {
  padding: 5px 10px 10px 10px;
  width: 640px;
}
</style>
