import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const createThing = (thing) => {
  return { ...thing, id: uuidv4() };
};

export const useToDoStore = create(
  devtools(
    persist(
      set => ({
        things: [],
        activeId: "",
        addThing: data => {
          const newThing = createThing(data);
          set(state => ({
            things: [...state.things, newThing],
          }));
        },
        deleteThing: id => {
          set(state => ({
            things: state.things.filter(thing => thing.id !== id),
          }));
        },
        getThingById: id => {
          set(() => ({
            activeId: id,
          }));
        },
        updateThing: data => {
          set(state => ({
            things: state.things.map(thing =>
              thing.id === state.activeId
                ? { id: state.activeId, ...data }
                : thing),
            activeId: "",
          }));
        },
      }),
      {
        name: "thing-storage", // persist
      }
    )
  )
);
