import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{

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
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    
    return(
        <form ref={form} onSubmit={sendEmail} className="contact flex flex-col w-full ">

            <div className="contact_bloc flex flex-col">
                <label className="dark:text-dark-ft" htmlFor="user_name">Nom / Prénom:</label>
                <input  className="box-border pl-2 w-[50%] " htmlFor="prenom" type="text" name="user_name" required="required"></input>                
            </div>
            <div className="contact_bloc flex flex-col">
                <label className="dark:text-dark-ft" htmlFor="user_email">E-mail:</label>
                <input className="box-border pl-2 w-[50%]" htmlFor="prenom" type="email" name="user_email" required="required"></input>                
            </div>

            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="phone">N° téléphone:</label>
                <input className="box-border pl-2 w-[50%] " htmlFor="prenom" type="text" name="phone" id="phone"></input>                
            </div>

            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="message">Message:</label>
                <textarea className=" box-border pl-2" required="required" name="message"></textarea>
                <br/>
                <input className="dark:text-dark-ft dark:bg-dark-main w-fit self-center p-2 rounded-xl" type="submit" value="Envoyer"></input>               
            </div>
        </form>
    )
}

export default Contact;