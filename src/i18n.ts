import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'it', // La lingua predefinita
        fallbackLng: 'it', // Lingua di fallback
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

    resources: {
        en: {
            translation: {
                // hero
                title_highlighted: "Green thumb",
                subtitle: "without having to lift a finger",
                subtitle_highlighted: "",
                // navbar
                about: "About",
                work: "Work",
                contact: "Contact",
                projects: "Projects",
                // about
                intro_subtitle: "INTRODUCTION",
                intro_title: "How it works",
                intro_text: "SmartPlants can measure the moisture level in the soil, and decide when it is time to water your favourite plant."
                + "The system is fully customisable and expandable: the ESP8266 chip can be connected to various sensors, capable of acquiring data such as temperature, light, etc., and can communicate the acquired data via a screen or a Bluetooth or WiFi connection.",
                // cards
                card1: "Automatic irrigation",
                card2: "Compatible with every plant", 
                card3: "Expandable and customizable", 
                card4: "Wireless connectivity",
                // work 
                work_subtitle: "PROJECTS",
                work_title: "Some ideas",
                work_text: 'Below are some of the projects carried out so far, the list is constantly being updated. For custom projects, please visit the profile ',
                project1: "Irrigation system with humidity sensor",
                project2: "Customised system with moisture indicators, buzzer and screen",
                project3: "Chip, sensor and water pump: use your favourite plant!",
                // contact
                contact_subtitle: "GET IN TOUCH",
                contact_title: "Contact",
                contact_name: "Your name", 
                contact_email: "Your email address", 
                contact_message: "Your message",
                contact_send: "Send",
                contact_sending: "Sending...",
                // footer
                footer_text: "Enjoy",
                footer_links: "Useful links",
                copyright: "Copyright Ⓒ 2023"
            }
        },
        it: {
            translation: {
                // hero
                title_highlighted: "Generatore di parole",
                subtitle: "Per iniziare premi start",
                subtitle_highlighted: "",
                // navbar
                about: "Come funziona",
                work: "Lavoro",
                contact: "Contatti",
                projects: "Progetti",
                // about
                intro_subtitle: "INTRODUZIONE",
                intro_title: "Funzionalità",
                intro_text: "SmartPlants è in grado di misurare il livello di umidità del terreno, e decidere quanto è ora di annaffiare la tua pianta preferita."
                + "Il sistema è totalmente personalizzabile ed espandibile: il chip ESP8266 può essere collegato a vari sensori, in grado di acquisire dati come temperatura, luce, ecc. e può comunicare i dati acquisiti attraverso uno schermo oppure una connessione Bluetooth o WiFi.",
                // + "Infine, è possibile controllare i vari componenti da remoto grazie alla connettività wireless.",
                // cards
                card1: "Irrigazione automatica",
                card2: "Compatibile con ogni pianta", 
                card3: "Espandibile e personalizzabile", 
                card4: "Connettività wireless",
                // work
                work_subtitle: "PROGETTI",
                work_title: "Alcune idee",
                work_text: "Di seguito riporto alcuni progetti eseguiti fino ad ora, la lista è in continuo aggiornamento. Per la realizzazione di progetti custom, è possibile visitare il profilo ",
                project1: "Sistema di irrigazione con sensore di umidità",
                project2: "Sistema custom con indicatori di umidità, buzzer e schermo",
                project3: "Chip, sensore e pompa dell'acqua: usa la pianta che preferisci!",
                // contact
                contact_subtitle: "CONTATTI",
                contact_title: "Scrivimi",
                contact_name: "Il tuo nome",
                contact_email: "La tua email",
                contact_message: "Il tuo messaggio",
                contact_send: "Invia",
                contact_sending: "Invio...",
                // footer
                footer_text: "\‟Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nibh nec erat tincidunt, vitae viverra nunc.\"",
                footer_links: "Link utili",
                copyright: "Copyright Ⓒ 2023"
            }
        }
    }
});

export default i18n;