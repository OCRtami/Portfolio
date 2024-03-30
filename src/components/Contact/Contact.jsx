const Contact = () =>{
    return(
        <form className="contact flex flex-col">

            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="prenom">Nom / Prénom:</label>
                <input htmlFor="prenom" type="text" name="prenom" id="prenom"></input>                
            </div>
            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="email">E-mail:</label>
                <input htmlFor="prenom" type="text" name="prenom" id="email"></input>                
            </div>
            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="phone">N° téléphone:</label>
                <input htmlFor="prenom" type="text" name="phone" id="phone"></input>                
            </div>
            <div className="contact_bloc flex flex-col ">
                <label className="dark:text-dark-ft" htmlFor="message">Message:</label>
                <input htmlFor="prenom" type="text" name="message" id="message"></input>                
            </div>
        </form>
    )
}

export default Contact;