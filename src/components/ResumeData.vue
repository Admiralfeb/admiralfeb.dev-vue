<template>
  <div class="">
    <section id="experience">
      <h3>Experience</h3>
      <ul>
        <li v-for="exp in experience" :key="exp._id" class="experience-li">
          <div style="display: flex">
            <h4>{{ exp.title }}</h4>
            <div class="fill" />
            {{ exp.datePeriod }}
          </div>
          <div class="experience-place">{{ exp.place }}</div>
          <ul>
            <li
              v-for="responsibility in exp.responsibilities"
              :key="responsibility"
            >
              {{ responsibility }}
            </li>
          </ul>
          <hr />
        </li>
      </ul>
    </section>
    <section id="skills">
      <h3>Skills</h3>
      <ul class="skills-ul">
        <li v-for="skill in skills" :key="skill._id">
          {{ skill.skill }}
          <ul v-if="skill.ul">
            <li v-for="skillLi in skill.ul" :key="skillLi">
              {{ skillLi }}
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    skills: null,
    experience: null,
  },
});
</script>

<style scoped>
h4 {
  margin-top: 0;
  margin-bottom: 0;
}
#experience {
  max-width: 600px;
}
.experience-li {
  list-style-type: none;
}
.experience-place {
  margin-bottom: 21px;
}
.skills-ul {
  column-count: 2;
}
</style>
