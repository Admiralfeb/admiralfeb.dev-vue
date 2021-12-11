import { IProject } from "@/models/project";
import { IResume } from "@/models/resume";
import axios from "axios";
import { State } from "vue";
import { createStore } from "vuex";

// const URL = "http://localhost:3000/api";
const URL = "https://admiralfeb.net/api";

export default createStore<State>({
  state: {
    resume: undefined,
    projects: undefined,
  },
  mutations: {
    setResume(state, payload: IResume) {
      state.resume = payload;
    },
    setProjects({ projects }, payload: IProject[]) {
      projects = payload;
    },
  },
  actions: {
    async getResume({ commit }) {
      const response = await axios.get<IResume>(`${URL}/resume`);
      if (response.data) {
        const resume = response.data;
        const experience = resume.experience;

        // Parse Experience date period. Change from "YYYY-MM" to "{Month} {Year} - {End Month} {End Year}"
        const parsedExperience = experience.map((item) => {
          const formatter = new Intl.DateTimeFormat("en-us", {
            month: "long",
            year: "numeric",
          });

          const startDate = new Date(item.startDate + "-01");
          const periodStart = formatter.format(
            startDate.setMonth(startDate.getMonth() + 1)
          );

          const endDate = item.endDate
            ? new Date(item.endDate + "-01")
            : "Current";
          const periodEnd =
            endDate === "Current"
              ? "Current"
              : formatter.format(endDate.setMonth(endDate.getMonth() + 1));

          const totalPeriod = `${periodStart} - ${periodEnd}`;
          item.datePeriod = totalPeriod;
          return item;
        });
        console.log({ parsedExperience });
        commit("setResume", {
          ...resume,
          experience: parsedExperience,
        });
      }
    },
    async getProjects({ commit }) {
      const response = await axios.get<IProject[]>(`${URL}/projects`);
      if (response.data) {
        commit("setProjects", response.data);
      }
    },
  },
  modules: {},
});
