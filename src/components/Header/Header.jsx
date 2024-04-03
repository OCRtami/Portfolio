import "./css/Header.css"
//Img src
import Sun from "../../assets/sun_icon.png"
import Moon from "../../assets/moon_icon.png"
import Fr from "/images/FR.png"
import En from "/images/EN.jpg"
//Store
import { useStore } from '../../store/store';
import { useEffect, useState } from "react";

const Header = () => {

    const storeTheme = useStore((state) => state.theme);
    const favLang = useStore((state) => state.langue);
    const changeLangue = useStore((state) => state.setLang)
    const toggleTheme = useStore((state) => state.toggleTheme);
    const [Theme, setTheme] = useState();
    const [isOpen, setIsOpen] = useState(false);


    useEffect(()=>{

        storeTheme === "dark" ? setTheme(false) :  setTheme(true) ;

    })

    return (
    <>
        <header className="header transition bg-[#FBF9F1] dark:bg-dark-main dark:text-dark-ft">

            <div className="header_wrapper mx-8">

                {/* Barre de navigation dans le header */}
                <nav className="header_nav">

                    <button className="rh768 dark:text-dark-ft" 
                        onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)}>
                        {isOpen ? "X" : "Menu"}
                    </button>

                <ul className="h768">
                    <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ?                      <a href="#home">Accueil</a> : <a href="#home">Home</a>}</button></li>
                    <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ?                      <a href="#portfolio">Portfolio</a> : <a href="#portfolio">Works</a>}</button></li>
                    <li><button className="dark:glow dark:text-dark-ft text-black whitespace-nowrap">{favLang === "fr" ?    <a href="#apropos">A propos</a> : <a href="#apropos">Resume</a>}</button></li>
                    <li><button className="dark:glow dark:text-dark-ft text-black">{favLang === "fr" ?                      <a href="#contact">Contact</a> : <a href="#contact">Contact</a>}</button></li>
                </ul>

                </nav>

                {/* Bouton dark mode */}
                <img 
                src={Theme ? Sun : Moon} 
                className="h-full mx-8 py-3 dark:animate-none dark:invert box-border hover:cursor-pointer animate-slow-spin"
                onClick={toggleTheme}
                />   
            <div className="flex gap-1">
                <button onClick={() => changeLangue("fr")}><img className="h-5" src={Fr}/></button>
                <button onClick={() => changeLangue("en")}><img className="h-5" src={En}/></button>
            </div>
            </div>

        </header>
        {isOpen && 
            <ul className="burger mt-[51px] bg-[#FBF9F1] dark:bg-dark-main z-40 fixed w-full">
                <li><button onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)} className=" dark:text-dark-ft text-black">{favLang === "fr" ?                   <a href="#home">Accueil</a> : <a href="#home">Home</a>}</button></li>
                <li><button onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)} className=" dark:text-dark-ft text-black whitespace-nowrap">{favLang === "fr" ? <a href="#portfolio">Portfolio</a> : <a href="#portfolio">Works</a>}</button></li>
                <li><button onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)} className=" dark:text-dark-ft text-black">{favLang === "fr" ?                   <a href="#apropos">A propos</a> : <a href="#apropos">Resume</a>}</button></li>
                <li><button onClick={()=> isOpen ? setIsOpen(false) : setIsOpen(true)} className=" dark:text-dark-ft text-black">{favLang === "fr" ?                   <a href="#contact">Contact</a> : <a href="#contact">Contact</a>}</button></li>
            </ul>
        }


    </>
    )
}

export default Header;