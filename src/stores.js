import { writable, readable } from "svelte/store";
import classesData from "./data/classes";
import { useLocalStorage } from "./useLocalStorage";

export const TaskState = Object.freeze({
  inactive: 1,
  active: 2,
  completed: 3,
  toString(state) {
    switch (state) {
      case 1:
        return "inactive";
      case 2:
        return "active";
      case 3:
        return "completed";
      default:
        return "unknown";
    }
  },
});

const classStateData = {
  101: TaskState.inactive,
  102: TaskState.inactive,
  103: TaskState.inactive,
  104: TaskState.inactive,
  105: TaskState.inactive,
  106: TaskState.inactive,
  107: TaskState.inactive,
  108: TaskState.inactive,
  109: TaskState.inactive,
  110: TaskState.inactive,
  201: TaskState.inactive,
  202: TaskState.inactive,
  203: TaskState.inactive,
  204: TaskState.inactive,
  205: TaskState.inactive,
  206: TaskState.inactive,
  207: TaskState.inactive,
  208: TaskState.inactive,
  209: TaskState.inactive,
  210: TaskState.inactive,
  301: TaskState.inactive,
  302: TaskState.inactive,
  303: TaskState.inactive,
  304: TaskState.inactive,
  305: TaskState.inactive,
  306: TaskState.inactive,
  307: TaskState.inactive,
  308: TaskState.inactive,
  309: TaskState.inactive,
};

export const classes = readable(classesData);
export const classStates = writable(classStateData);

useLocalStorage(classStates, "classStates");
