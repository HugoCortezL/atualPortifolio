export const translate = (language, text) => {
    if (language === "PT-BR") {
        return text
    }
    else if (language === "EN-US") {
        return translateToEn(text)
    }
}

const translateToEn = (text) => {
    if (text === "Apresentação") {
        return "Presentation"
    }
    else if (text === "Sobre mim") {
        return "About me"
    }
    else if (text === "Projetos") {
        return "Projects"
    }
    else if (text === "Habilidades") {
        return "Skills"
    }
    else if (text === "Fale comigo") {
        return "Contact me"
    }

    else if (text === "Olá, eu sou") {
        return "Hello, I'm"
    }
    else if (text === "Desenvolvedor fullstack, morando no Brasil.") {
        return "Fullstack developer, based on Brazil."
    }

    else if (text === "Habilidades pessoais") {
        return "Soft Skills"
    }
    else if (text === "Inglês") {
        return "English"
    }
    else if (text === "Português") {
        return "Portuguese"
    }
    else if (text === "Espanhol") {
        return "Spanish"
    }
    else if (text === "Trabalho em equipe") {
        return "Team work"
    }
    else if (text === "Liderança") {
        return "Leadership"
    }
    else if (text === "Comunicação") {
        return "Communication"
    }
    else if (text === "Empatia") {
        return "Empathy"
    }
    else if (text === "Criatividade") {
        return "Creativity"
    }
    else if (text === "Aprendizado") {
        return "Apprenticeship"
    }

    else if (text === "Nome") {
        return "Name"
    }
    else if (text === "Email") {
        return "Email"
    }
    else if (text === "Assunto") {
        return "Subject"
    }
    else if (text === "Mensagem") {
        return "Message"
    }
    else if (text === "Enviar") {
        return "Send"
    }

    else if (text === "Sobre Mim") {
        return "About me"
    }
    else if (text === "Sou um desenvolvedor full stack apaixonado pela área e um eterno aprendiz. Gosto muito de me desafiar com novos projetos e funcionalidades para aumentar ainda mais o meu conhecimento. Atualmente venho focando meus estudos em React, Nodejs e GraphQL e tenho mais de um ano de atuação como desenvolvedor de software.") {
        return "I'm a full stack developer passionate about the area and a lifelong learner. I really like to challenge myself with new projects and features to further increase my knowledge. Currently i've been focusing my studies on React, Nodejs and GraphQL and I've been working as a software developer for over a year."
    }
    else if (text === "Violão") {
        return "Guitar"
    }
    else if (text === "Futebol") {
        return "Football"
    }
    else if (text === "Estudar") {
        return "Study"
    }
    else if (text === "Cozinhar") {
        return "Cook"
    }
    else if (text === "Filmes / Series") {
        return "Movies / Shows"
    }
    else if (text === "Amigos / Família") {
        return "Friends / Family"
    }
    else if (text === "Brasil") {
        return "Brazil"
    }

    else if (text === "Abri no GitHub") {
        return "Open on GitHub"
    }
    else if (text === "Tecnologias") {
        return "Technologies"
    }
    else if (text === "Criei este projeto que funciona para um usuario criar varias listas de afazeres para controlar suas atividades.") {
        return "I created this project that works for a user to create several to-do lists to control their activities."
    }
    else if (text === "Clone do hackerhank") {
        return "Hackerhank clone"
    }
    else if (text === "Nesse projeto decidi fazer um clone do frontend da parte de login do hackerhank") {
        return "In this project I decided to clone the frontend of the hackerhank login section"
    }
    else if (text === "Nesse projeto criei uma pokedex utilizando a API publica do pokemon") {
        return "In this project I created a pokedex using the pokemon public API"
    }
    else if (text === "https://drive.google.com/file/d/1fAnvjrP3c74V-HLlz4TGRAIAzYRgfQSs/view?usp=sharing") {
        return "https://drive.google.com/file/d/1KJ07cvkyRUJK5SyuTKGfjgVtm7XgGJto/view?usp=sharing"
    }

    else {
        return text
    }

}