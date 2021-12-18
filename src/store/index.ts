import { fetchProjects } from "@/functions/fetchProjects";
import { fetchResume } from "@/functions/fetchResume";
import { IProject } from "@/models/project";
import { IResume } from "@/models/resume";
import { State } from "vue";
import { createStore } from "vuex";

export default createStore<State>({
  state: {
    resume: undefined,
    projects: undefined,
  },
  mutations: {
    setResume(state, payload: IResume) {
      state.resume = payload;
    },
    setProjects(state, payload: IProject[]) {
      state.projects = payload;
    },
  },
  actions: {
    async getResume({ commit }) {
      commit("setResume", await fetchResume());
    },
    async getProjects({ commit }) {
      commit("setProjects", await fetchProjects());
    },
  },
  modules: {},
});
