import { create } from "zustand";

const optionStore = create((set) => ({
  mode: "focus",
  timer: 25,
  repeatFocus: 0,
  isPaused: true,
  time: {
    focus: 25,
    lbreak: 15,
    sbreak: 5,
  },
  secondsLeft: 0,
  handleOnClick: (item) => {
    set({
      mode: item.target.value,
      isPaused: true,
      timer: optionStore.getState().time[item.target.value],
      repeatFocus: 0,
    });
  },
  switchMode: () => {
    if (
      optionStore.getState().mode === "focus" ||
      optionStore.getState().repeatFocus < 3
    ) {
      set({
        mode: "sbreak",
        timer: optionStore.getState().time["sbreak"],
        repeatFocus: optionStore.getState().repeatFocus + 1,
      });
    } else if (
      optionStore.getState().mode === "focus" ||
      optionStore.getState().repeatFocus >= 3
    ) {
      set({
        mode: "lbreak",
        timer: optionStore.getState().time["lbreak"],
        repeatFocus: 0,
      });
    } else {
      set({ mode: "focus", timer: optionStore.getState().time["focus"] });
    }
    set({
      secondsLeft: optionStore.getState().timer * 60,
    });
  },
  initTimer: () => {
    set({
      secondsLeft: optionStore.getState().timer * 60,
    });
  },
}));

export default optionStore;
