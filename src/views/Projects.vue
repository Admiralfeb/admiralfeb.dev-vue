<template>
  <UnderConstruction title="Projects" />
</template>

<script>
import Loader from "@/components/Loader.vue";
import UnderConstruction from "@/components/UnderConstruction.vue";
import { computed, defineComponent } from "vue";

export default defineComponent({
  components: {
    UnderConstruction,
  },
});
</script>
