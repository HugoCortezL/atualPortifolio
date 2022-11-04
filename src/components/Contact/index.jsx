import { ContactContainer } from './styles'
import { useRef, useContext } from 'react'
import emailjs from '@emailjs/browser';
import { ConfigContext } from '../../pages/Home'
import { translate } from '../../utils/translate'

export default function Contact() {
    const form = useRef();
    const { language, darkMode } = useContext(ConfigContext)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail_Hugo062000', 'template_1he1nwv', form.current, 'BRYC9dQHN41ka62US')

        form.current.reset()
    };

    return (
        <ContactContainer darkMode={darkMode} id="contact">
            <h2>{translate(language, "Fale comigo")}</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>{translate(language, "Nome")}</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>{translate(language, "Email")}</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>{translate(language, "Assunto")}</label>
                    <input type="text" name="subject" />
                </div>
                <div>
                    <label>{translate(language, "Mensagem")}</label>
                    <textarea type="text" name="message" />
                </div>
                <div className='submit'>
                    <input type="submit" value={translate(language, "Enviar")} />
                </div>
            </form>
        </ContactContainer>
    )
}