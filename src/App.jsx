import Header from './components/Header/Header';
import Home from './pages/home';
import { useStore } from './store/store';
import { applyThemePreference } from "./utilities/themeUtils";
import { useEffect } from "react";
import { DataProvider } from './utilities/context.jsx';

function App() {

  const theme = useStore((state) => state.theme);


  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);


  return (

    <>
      <DataProvider>
        <Header/>
        <Home/>
      </DataProvider>
    </>

  )
}

export default App
