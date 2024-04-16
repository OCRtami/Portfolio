// Profil Picture
import PP from "../assets/PP.png";
// Logos
import logoCss from "../assets/logo/Css3.png"
import logoHtml from "../assets/logo/Html5.png"
import logoJs from "../assets/logo/Js.png"
import logoReact from "../assets/logo/React.png"
// Fonds
import darkBackground from "../assets/Dark_Bg.jpg";
import lightBackground from "../assets/Light_Bg.jpg"
import "./css/Home.css";

import DataContext from "../utilities/context";

import { useStore } from "../store/store";
import { Meteors } from "../ui/meteors";
import OverlayWork from "../components/OverlayWork/OverlayWork";
import Bulle from "../components/Bulle/Bulle";
import Logo from "../components/Logo/Logo";
import { useContext, useState } from "react";
import Contact from "../components/Contact/Contact";


const Home = () =>{

   const theme = useStore((state) => state.theme);
   const favLang = useStore((state) => state.langue)
   const {data} = useContext(DataContext);


   const [popUp, setPopUp] = useState(false);
   const filteredData = (data?.filter(e=> e.favori === true)) || [];

   return(


      <main className=" bg-slate-100 dark:text-dark-ft dark:bg-neutral-900"
         style={ theme === "light" ? {backgroundImage:`url(${lightBackground})`}  : {backgroundImage:`url(${darkBackground})`} }>

         <div className="main_containers">
            
               {/* Effet meteor Theme Sombre */}
               <div> <Meteors className={theme === "dark" ? null : "hidden"} number={10}></Meteors> </div>

            {/* Partie Profil (Photo,Description...) */}
            <div id="home" className="containers sm:w-fit  dark:bg-[rgba(14,14,14,0.7)] p-5 ">

               {/* Photo du profil */}
               <div className="profile_picture w-[150px] min-w-[150px] ">
                     <img className="float-start w-full rounded-full" src={PP} />
               </div>

               {/* Text du profil */}
               <div className="profile_text">
                  
                  {/* Identité */}
                  <h1 className="text-[32px] font-medium w-max h-max rounded-lg">
                     <span className="font-bold whitespace-nowrap transition dark:text-dark-ft" >Tami Gunba </span>
                  </h1> 
                  <h2 className="dark:text-dark-ft text-xs">{favLang ==="fr" ? "Développeur Front End" :"Front End developer"}</h2>
                  
                  {/* Compétences */}
                  <ul className="skills mt-10 p-2">
                     <li><Bulle text={"HTML"}>        <Logo  src={logoHtml}/>   </Bulle></li>
                     <li><Bulle text={"JavaScript"}>  <Logo  src={logoJs}/>     </Bulle></li>
                     <li><Bulle text={"Css"}>         <Logo  src={logoCss}/>    </Bulle></li>
                     <li><Bulle text={"React"}>       <Logo  src={logoReact}/>  </Bulle></li>
                  </ul>

               </div>

            </div>

            {/* Projets / Portfolio */}
            <div id="portfolio" className="containers  dark:bg-[rgba(14,14,14,0.7)] p-5 ">

               <div className="projets flex flex-col items-center w-full">
                  
                  <h2 className="text-[32px] align-baseline self-baseline font-medium w-max h-max rounded-lg dark:text-dark-ft">
                     Portfolio
                  </h2>

                  <ul className="flex flex-wrap justify-center gap-[2rem] p-1 sm:p-8 dark:brightness-95 w-full">
                     {data && filteredData.map((projet) => (

                        <li key={projet.id} className="work relative">
                        <OverlayWork link={projet.link}>
                           {projet.logo.map((logo,index)=>(
                              <Logo key={index} src={logo}></Logo>
                           ))}
                        </OverlayWork>                                 
                        <div className="work_picture">
                           <img src={projet.cover}/>
                        </div>

                        <div className=" work_description">
                           <h3 className="mb-4 font-bold">{projet.title}</h3>
                           <p className="overflow-hidden">{favLang==="fr" ? projet.descriptionFr : projet.descriptionEn}</p>
                        </div>
                     </li>
                      ))}                                      
                     {/* <li className="work relative">
                        <div className="work_picture">
                           <img src={SophieJS}/>
                        </div>
                        <div className=" work_description">
                           <h3 className="mb-4 font-bold">Titre projet 3</h3>
                           <p>Description immense: , aperiam quasi deserunt voluptate voluptatem voluptas quod quos?</p>                                                      
                        </div>
                     </li> */}
                  </ul>

               </div>

            </div>

            {/* Description parcours */}
            <div className="containers w-fit mx-[10%] dark:bg-[rgba(14,14,14,0.7)] p-5">

               <div className="projets flex flex-col items-center w-full">

                  <h2 id="apropos" className="text-[32px] align-baseline self-baseline font-medium w-max h-max rounded-lg dark:text-dark-ft">
                     {favLang ==="fr" ? "A propos" :"About"}
                  </h2>
                  
                  <div className="max-w-[800px] dark:text-dark-ft pt-4" >
                        <p className="dark:text-dark-ft">{favLang ==="fr" ? "Bonjour et bievenue sur mon portfolio !" : "Hello and welcome to my portfolio !"}</p>
                        <br/>
                        {favLang ==="fr" ?
                        <p className="dark:text-dark-ft">
                        Formé en HTML, CSS et JavaScript, j'ai acquis une solide base d'expérience dans la création de sites web fonctionnels.
                        Mon parcours m'a permis de d'acquérir les fondamentaux du web et d'explorer de nouvelles techniques pour offrir une expérience utilisateur optimale.
                        Explorez mon portfolio pour découvrir mes projets et n'hésitez pas à me contacter pour discuter de vos besoins.<br/><br/>
                        Merci de votre visite !</p>
                        : 
                        <p className="dark:text-dark-ft">Trained in HTML, CSS and JavaScript, I have acquired a solid base of experience in creating functional websites.
                        My background allowed me to acquire the fundamentals of the web and explore new techniques to offer an optimal user experience.
                        Explore my portfolio to discover my projects and do not hesitate to contact me to discuss your needs.<br/><br/>
                        Thank for your visit !</p>}
                  </div>

               </div>

            </div>

            {/* Formulaire */}
            <div className="containers dark:bg-[rgba(14,14,14,0.7)] p-5 w-[50%]">

            <div className="projets flex flex-col items-center w-full">

               <h2 className="text-[32px] align-baseline self-baseline font-medium w-max h-max rounded-lg dark:text-dark-ft">
                  Contact
               </h2>

                  <div id="contact" className=" w-full ">
                     <Contact setPopUp={setPopUp}></Contact>
                  </div>
               </div>


            </div>

         </div>
         {popUp && <div className="fixed bottom-0 font-bold left-0 p-4 m-5 bg-lime-300  z-[30] rounded-md"><p className="text-black">Envoyé !</p></div>}

      </main>
    )
}


export default Home;