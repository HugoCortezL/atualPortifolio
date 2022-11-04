import { ContactContainer } from './styles'
import { useState, useEffect, useRef, useContext } from 'react'
import ptBrWords from '../../assets/translation/pt-br.json'
import enUsWords from '../../assets/translation/en-us.json'
import emailjs from '@emailjs/browser';
import { ConfigContext } from '../../pages/Home'

export default function Contact() {
    const [languageUsage, setLanguageUsage] = useState(ptBrWords)
    const form = useRef();
    const { language, darkMode } = useContext(ConfigContext)


    useEffect(() => {
        if (language === 'PT-BR') {
            setLanguageUsage(ptBrWords)
        } else {
            setLanguageUsage(enUsWords)
        }
    }, [language])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail_Hugo062000', 'template_1he1nwv', form.current, 'BRYC9dQHN41ka62US')

        form.current.reset()
    };

    return (
        <ContactContainer darkMode={darkMode} id="contact">
            <h2>{languageUsage[3].contact[0]}</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>{languageUsage[3].contact[1]}</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>{languageUsage[3].contact[2]}</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>{languageUsage[3].contact[3]}</label>
                    <input type="text" name="subject" />
                </div>
                <div>
                    <label>{languageUsage[3].contact[4]}</label>
                    <textarea type="text" name="message" />
                </div>
                <div className='submit'>
                    <input type="submit" value={languageUsage[3].contact[5]} />
                </div>
            </form>
        </ContactContainer>
    )
}