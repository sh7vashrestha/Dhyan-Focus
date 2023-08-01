import { create } from "zustand";
// import slideSfx from "../sounds/slide.mp3";
// import useSound from "use-sound";
const optionStore = create((set) => ({
  mode: "",
  timer: 25,
  volume:2,
  // slide: useSound(slideSfx),
  repeatFocus: 0,
  isPaused: false,
  secondsLeft: 0,
  time: {
    focus: 25,
    lbreak: 15,
    sbreak: 5,
  },
  tick() {
    set({ secondsLeft: optionStore.getState().secondsLeft - 1 });
  },
  handleOnClick: (item) => {
    set({
      mode: item.target.value,
      isPaused: true,
      timer: optionStore.getState().time[item.target.value],
      secondsLeft: optionStore.getState().time[item.target.value] * 60,
      repeatFocus: 0,
    });
    
  },
  switchMode: () => {
    if (
      optionStore.getState().mode === "focus" &&
      optionStore.getState().repeatFocus < 3
    ) {
      set({
        mode: "sbreak",
        isPaused: true,
        timer: optionStore.getState().time["sbreak"],
        repeatFocus: optionStore.getState().repeatFocus + 1,
      });
    } else if (
      optionStore.getState().mode === "focus" &&
      optionStore.getState().repeatFocus >= 3
    ) {
      set({
        mode: "lbreak",
        isPaused: true,
        timer: optionStore.getState().time["lbreak"],
        repeatFocus: 0,
      });
    } else {
      set({
        mode: "focus",
        isPaused: true,
        timer: optionStore.getState().time["focus"],
      });
    }
    set({ secondsLeft: optionStore.getState().timer * 60 });
  },
  paused: () => {
    set({ isPaused: !optionStore.getState().isPaused });
  },
  reset: () => {
    set({
      isPaused: true,
      secondsLeft: optionStore.getState().timer * 60,
    });
  },
}));

export default optionStore;
