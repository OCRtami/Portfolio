import "./css/Header.css"
//Img src
import Sun from "../../assets/sun_icon.png"
import Moon from "../../assets/moon_icon.png"
//Store
import { useStore } from '../../store/store';
import { useEffect, useState } from "react";
// import { Meteors } from "../../ui/meteors"; l29

const Header = () => {

    const storeTheme = useStore((state) => state.theme);
    const favLang = useStore((state) => state.langue);
    const changeLangue = useStore((state) => state.setLang)
    const toggleTheme = useStore((state) => state.toggleTheme);
    const [Theme, setTheme] = useState();


    useEffect(()=>{

        storeTheme === "dark" ? setTheme(false) :  setTheme(true) ;

    })

    return (
        
        <header className="header transition bg-[#FBF9F1] dark:bg-dark-main dark:text-dark-ft">

            <div className="header_wrapper">

                {/* Barre de navigation dans le header */}
                <nav className="header_nav">
                    <ul className="flex">
                        <div>
                            <button onClick={() => changeLangue("fr")}>fr</button>
                            <button onClick={() => changeLangue("en")}>en</button>
                        </div>
                        <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ? "Accueil" : "Home"}</button></li>
                        <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ? "CV" : "Resume"}</button></li>
                        <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ? "Projets Favoris" : "Favorite works"}</button></li>
                        <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ? "Contact" : "Contact"}</button></li>
                    </ul>
                </nav>

                {/* Bouton dark mode */}
                <img 
                src={Theme ? Sun : Moon} 
                className="h-full mx-8 py-3 dark:animate-none dark:invert box-border hover:cursor-pointer animate-slow-spin"
                onClick={toggleTheme}
                />   

            </div>

            {/* <Meteors className={storeTheme === "dark" ? null : "hidden"} number={40}></Meteors> */}

        </header>
    )
}

export default Header;