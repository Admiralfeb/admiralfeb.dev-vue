<template>
  <div class="container">
    <h2 class="text-center">Zachary's Resume</h2>
    <div class="raised">
      <div class="resume" v-if="resume">
        <ResumeData :experience="resume.experience" :skills="resume.skills" />
      </div>
      <Loader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
import ResumeData from "@/components/ResumeData.vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Loader,
    ResumeData,
  },
  setup() {
    const store = useStore();
    store.dispatch("getResume");

    return {
      resume: computed(() => store.state.resume),
    };
  },
});
</script>

<style scoped>
.raised {
  padding: 5px 10px 10px 10px;
  width: 640px;
}
</style>
