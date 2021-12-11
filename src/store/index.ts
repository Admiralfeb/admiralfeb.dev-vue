import { IProject } from "@/models/project";
import { IResume } from "@/models/resume";
import axios from "axios";
import { State } from "vue";
import { createStore } from "vuex";

export default createStore<State>({
  state: {
    resume: undefined,
    projects: undefined,
  },
  mutations: {
    setResume({ resume }, payload: IResume) {
      resume = payload;
    },
    setProjects({ projects }, payload: IProject[]) {
      projects = payload;
    },
  },
  actions: {
    async getResume({ commit }) {
      const response = await axios.get<IResume>(
        "https://admiralfeb.net/api/resume"
      );
      if (response.data) {
        commit("setResume", response.data);
      }
    },
    async getProjects({ commit }) {
      const response = await axios.get<IProject[]>(
        "https://admiralfeb.net/api/projects"
      );
      if (response.data) {
        commit("setProjects", response.data);
      }
    },
  },
  modules: {},
});
