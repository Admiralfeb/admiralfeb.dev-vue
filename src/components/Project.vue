<template>
  <div class="project-header">
    <h3 class="title">{{ project.name }}</h3>
    <div class="fill" />
    <a mat-button :href="project.url">Project URL</a>
    <a mat-button :href="project.girUrl">Git URL</a>
  </div>
  <p>{{ project.description }}</p>
  <h4>Technologies Used:</h4>
  <ul>
    <li v-for="tech of project.technologies" :key="tech">{{ tech }}</li>
  </ul>
  <hr />
</template>

<script lang="ts">
import { IProject } from "@/models/project";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    project: {
      type: Object as () => IProject,
      required: true,
    },
  },
});
</script>

<style scoped>
.project-header {
  display: flex;
  flex-direction: row;
}
[mat-button] {
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  margin: 10px;
}
h4 {
  margin-bottom: 5px;
}
ul {
  margin-top: 5px;
}
</style>
