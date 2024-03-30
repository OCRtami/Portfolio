import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { THEME_TYPES } from "../constants";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;



const useStore = create(devtools(persist(
  (set) => ({

    langue: "fr",
    theme: THEME_LIGHT,
    toggleTheme: () =>

      set(
        (state) => ({theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT}),false,"TOGGLE_THEME"
    ),
    setLang: (choosenLang) => 
    
    set({langue: choosenLang},false,"TOGGLE_LANG"
    ),

  }),
  {
    // Nom de l'élement qui serra créé dans localstorage ( via "persist(...),{name:theme})" )
    name: "Préference",
  }
)));



export {useStore};