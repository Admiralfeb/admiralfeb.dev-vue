import { Store } from 'vuex';
import { IProject } from './models/project';
import { IResume } from './models/resume';

declare module '@vue/runtime-core' {
  interface State {
    resume: IResume | undefined;
    projects: IProject[] | undefined;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
