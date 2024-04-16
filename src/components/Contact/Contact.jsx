import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import emailDayLogo from "../../../public/images/emailDay.png";
import emailNightLogo from "../../../public/images/emailNigth.png";
import { useStore } from "../../store/store";

const Contact = ({setPopUp}) =>{

  const theme = useStore((state) => state.theme);
  const favLang = useStore((state) => state.langue)
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('contact_service', 'contact_form', form.current, {
        publicKey: 'B62SMlZUusjJpYYlJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setPhoneNumber("")
          setEmail("")
          setName("")
          setMessage("")
          setPopUp(true)

            setTimeout(() => {
              setPopUp(false);
            }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return(
      <form ref={form} onSubmit={sendEmail} className="contact flex flex-row w-full gap-4 items-center ">
        <div className='w-full'>
          {/* UserName */}
          <div className="contact_bloc flex flex-col ">
              <label className="dark:text-dark-ft" htmlFor="user_name">{favLang==="fr" ? "Nom / Prénom:" : "First/Last Name:"}</label>
              <input  className="box-border pl-2" htmlFor="prenom" type="text" name="user_name" required="required" value={name}   onChange={e => setName(e.target.value)} ></input>                
          </div>
          {/* Email */}
          <div className="contact_bloc flex flex-col">
              <label className="dark:text-dark-ft" htmlFor="user_email">E-mail:</label>
              <input className="box-border pl-2" htmlFor="prenom" type="email" name="user_email" required="required" value={email}  onChange={e => setEmail(e.target.value)}></input>
          </div>
          {/* PhoneNumber */}
          <div className="contact_bloc flex flex-col ">
              <label className="dark:text-dark-ft" htmlFor="phone">{favLang==="fr" ? "N° téléphone:" : "Phone Number:"}</label>
              <input className="box-border pl-2" htmlFor="prenom" type="tel" name="phone" id="phone"    value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>                
          </div>
          {/* Msg */}
          <div className="contact_bloc flex flex-col ">
              <label className="dark:text-dark-ft" htmlFor="message">Message:</label>
              <textarea className="inputInfo box-border pl-2 " required="required" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
              <br/>
              <input className="dark:text-dark-ft font-bold bg-[#FBF9F1] focus:brightness-90 dark:bg-dark-main self-center p-2 rounded-xl cursor-pointer focus:dark:brightness-150" type="submit" value={favLang==="fr" ? "Envoyer" : "Send"}></input>               
          </div>
        </div>
        <div><img className='max-h-[300px] pb-10 hidden lg:block' src={theme === "light" ? emailDayLogo : emailNightLogo}></img></div>
      </form>
  )
}

export default Contact;