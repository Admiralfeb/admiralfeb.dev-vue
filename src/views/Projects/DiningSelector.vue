<template>
  <div class="dining-selector jumbotron">
    <h4>Dining Selector</h4>
    <div>
      <ul>
        <li v-for="option in options" :key="option">
          {{ option }}
          <button mat-icon-button @click="deleteOption(option)">
            <span class="material-icons"> delete </span>
          </button>
        </li>
      </ul>
      <form @submit="addOption">
        <input v-model="optionToAdd" placeholder="Add Option" /><button
          mat-button
          type="submit"
        >
          Add
        </button>
      </form>
      <div v-if="selectedOption">Selected Option: {{ selectedOption }}</div>
      <div v-if="error">Error: {{ error }}</div>
      <button mat-button @click="selectOption">Select</button>
      <button mat-button @click="resetOptions" class="reset-button">
        Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import DiningService from '@/services/dining-selector';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const service = new DiningService();

    const options = ref<string[]>([]);
    const getOptions = () => {
      options.value = service.options;
    };

    getOptions();

    const selectedOption = ref<string>('');
    const optionToAdd = ref<string>('');
    const error = ref<string>('');
    const resetMessages = () => {
      selectedOption.value = '';
      error.value = '';
    };

    const updateSelectedOption = (value: string) => {
      resetMessages();
      selectedOption.value = value;
    };

    const addOption = (e: Event) => {
      e.preventDefault();
      resetMessages();
      error.value = service.addOption(optionToAdd.value) || '';

      optionToAdd.value = '';
      getOptions();
    };
    const deleteOption = (option: string) => {
      optionToAdd.value = '';
      resetMessages();
      error.value = service.deleteOption(option) || '';
      getOptions();
    };
    const resetOptions = () => {
      optionToAdd.value = '';
      resetMessages();
      service.resetOptions();
      getOptions();
    };
    const selectOption = () => {
      optionToAdd.value = '';
      resetMessages();
      updateSelectedOption(service.selectOption());
    };

    return {
      service,
      error,
      options,
      getOptions,
      selectedOption,
      updateSelectedOption,
      optionToAdd,
      addOption,
      deleteOption,
      resetOptions,
      selectOption,
    };
  },
});
</script>

<style scoped>
.jumbotron {
  max-width: 300px;
}
[mat-button] {
  margin: 2px 5px;
}
.reset-button {
  background-color: red;
}
</style>
