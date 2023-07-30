import { create } from "zustand";

const optionStore = create((set) => ({
   option:"focus",
   handleOnClick: (item) => {
      set({option: item.target.value})
   },
 }))

export default optionStore;