import { writable, readable } from "svelte/store";

export const TaskState = Object.freeze({
  inactive: 1,
  active: 2,
  completed: 3
});

const classesData = [
  {
    id: 1,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  },
  {
    id: 2,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  },
  {
    id: 3,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  },
  {
    id: 4,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  },
  {
    id: 5,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  },
  {
    id: 6,
    title: "Fluids 101",
    subtitle: "enema watersports",
    description: "You will learn to play with different liquids."
  }
];

const classStateData = {
  1: TaskState.inactive,
  2: TaskState.inactive,
  3: TaskState.inactive,
  4: TaskState.inactive,
  5: TaskState.inactive,
  6: TaskState.inactive
};

export const classes = readable(classesData);
export const classStates = writable(classStateData);
