<template>
  <div class="container">
    <h2 class="text-center">Austin's Resume</h2>
    <div class="jumbotron">
      <div class="resume" v-if="resume">
        <ResumeData :experience="resume.experience" :skills="resume.skills" />
      </div>
      <Loader v-else />
    </div>
  </div>
</template>

<script lang="ts">
import Loader from '@/components/Loader.vue';
import ResumeData from '@/components/ResumeData.vue';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Loader,
    ResumeData,
  },
  setup() {
    const store = useStore();
    store.dispatch('getResume');

    return {
      resume: computed(() => store.state.resume),
    };
  },
});
</script>

<style scoped>
.jumbotron {
  padding: 5px 10px 10px 10px;
  /* width: 640px; */
}

@media screen and (min-width: 640px) {
  .jumbotron {
    width: 640px;
  }
}
</style>
