<template>
  <div class="container">
    <h2 class="text-center">Zachary's Projects</h2>
    <div class="jumbotron">
      <div class="projects" v-if="projects?.length > 0">
        <Project
          v-for="project in projects"
          :project="project"
          :key="project._id"
        />
      </div>
      <div class="no-projects" v-else-if="projects?.length === 0">
        There sees to be no projects available to view.
      </div>
      <Loader v-else />
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Project from "@/components/Project.vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Loader,
    Project,
  },
  setup() {
    const store = useStore();
    store.dispatch("getProjects");

    return {
      projects: computed(() => store.state.projects),
    };
  },
});
</script>

<style scoped>
.jumbotron {
  padding: 5px 10px 10px 10px;
  width: 640px;
}
</style>
